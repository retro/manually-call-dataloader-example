(ns dataloader-example.controllers.filter
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]))

(defn set-filter [app-db value]
  (assoc-in app-db [:kv :filter] value))

(def controller
  (pp-controller/constructor
   {:params (constantly true)
    :start (fn [_ _ app-db]
             (set-filter app-db "A"))}
   {:set-filter (pipeline! [value app-db]
                  ;; Manually set value of the filter
                  (pp/commit! (set-filter app-db value))
                  (dataloader-controller/run-dataloader!))}))
