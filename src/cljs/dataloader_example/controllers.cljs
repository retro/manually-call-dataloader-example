(ns dataloader-example.controllers
  (:require [dataloader-example.controllers.filter :as filter]
            [dataloader-example.controllers.date-range :as date-range]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [dataloader-example.edb :refer [edb-schema]]
            [dataloader-example.datasources :refer [datasources]]))

(def controllers
  (-> {:filter filter/controller
       :date-range date-range/controller}
      (dataloader-controller/register datasources edb-schema)))
