(ns dataloader-example.datasources
  (:require [keechma.toolbox.dataloader.subscriptions :refer [map-loader]]))

(def existing-data-loader
  (map-loader
   (fn [req] (:params req))))

(def datasources
  ;; Filter datasource only returns whatever is in the app-db already
  ;; We control the value of the filter from the filter controller
  {:filter {:target [:kv :filter]
            :loader existing-data-loader
            :params (fn [prev _ _]
                      (:data prev))}
   ;; Real data depends on the filter so it will be reloaded whenever
   ;; filter changes
   :real-data {:target [:kv :real-data]
               :deps [:filter]
               :loader (map-loader (fn [req]
                                     (when-let [filter (get-in req [:params :filter])]
                                       {:id 1
                                        :title "Foo Bar"
                                        :filter filter})))
               :params (fn [_ _ {:keys [filter]}]
                         {:filter filter})}})

