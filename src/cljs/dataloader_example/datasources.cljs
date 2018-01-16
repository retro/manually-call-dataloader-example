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
                      (println "filter")
                      (:data prev))}
   :date-range {:target [:kv :date-range]
                :loader existing-data-loader
                :params (fn [prev _ _]
                          (println "date-range")
                          (:data prev))}
   ;; Real data depends on the filter so it will be reloaded whenever
   ;; filter changes
   :real-data {:target [:kv :real-data]
               :deps [:filter :date-range]
               :loader (map-loader (fn [req]
                                     (let [filter-param (get-in req [:params :filter])
                                           date-range-param (get-in req [:params :date-range])]
                                       (println "DATA LOADER CALLED")
                                       {:id 1
                                        :title "Foo Bar"
                                        :filter filter-param
                                        :date-range date-range-param})))
               :params (fn [_ _ deps]
                         (println "---->" deps)
                         (select-keys deps [:filter :date-range]))}})

