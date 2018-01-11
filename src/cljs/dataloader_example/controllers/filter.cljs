(ns dataloader-example.controllers.filter
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]))



(def controller
  (pp-controller/constructor
   (fn [_] true)
   {:set-filter (pipeline! [value app-db]
                  ;; Manually set value of the filter
                  (pp/commit! (assoc-in app-db [:kv :filter] value))
                  (dataloader-controller/run-dataloader!))}))
