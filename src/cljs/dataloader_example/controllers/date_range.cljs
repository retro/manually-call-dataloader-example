(ns dataloader-example.controllers.date-range
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]))

(defn set-date-range [app-db value]
  (assoc-in app-db [:kv :date-range] value))

(def controller
  (pp-controller/constructor
   {:params (constantly true)
    :start (fn [_ _ app-db]
             (set-date-range app-db {:prev (js/Date.) :current (js/Date.)}))}
   {:set-range (pipeline! [value app-db]
                 ;; Manually set value of the date-range
                 (pp/commit! (set-date-range app-db {:prev (js/Date.) :current (js/Date.)}))
                 (dataloader-controller/run-dataloader!))}))
