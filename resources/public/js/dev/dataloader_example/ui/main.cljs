(ns dataloader-example.ui.main
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> <cmd]]))

(defn render [ctx]
  (let [real-data (sub> ctx :real-data)]
    [:div
     [:div
      [:button {:on-click #(<cmd ctx :set-filter "A")} "Set Filter to A"]
      [:button {:on-click #(<cmd ctx :set-filter "B")} "Set Filter to B"]
      [:button {:on-click #(<cmd ctx :set-filter nil)} "Remove Filter"]]
     [:hr]
     (if real-data
       [:div
        [:div [:b "ID"] " " (:id real-data)]
        [:div [:b "Title"] " " (:title real-data)]
        [:div [:b "Filter"] " " (:filter real-data)]]
       [:div "No data loaded"])]))

(def component (ui/constructor {:renderer render
                                :topic :filter
                                :subscription-deps [:real-data]}))
