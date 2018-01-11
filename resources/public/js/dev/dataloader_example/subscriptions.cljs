(ns dataloader-example.subscriptions
  (:require [keechma.toolbox.dataloader.subscriptions :as dataloader]
            [dataloader-example.edb :refer [edb-schema]]
            [dataloader-example.datasources  :refer [datasources]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn get-kv [key]
  (fn [app-db-atom]
    (reaction
     (get-in @app-db-atom (flatten [:kv key])))))

(def subscriptions
  (merge (dataloader/make-subscriptions datasources edb-schema)
         {:counter (get-kv :counter)}))
