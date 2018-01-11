(ns figwheel.connect.build-dev (:require [figwheel.client] [figwheel.client.utils] [dataloader-example.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/dataloader-example.core.reload (apply js/dataloader-example.core.reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'dataloader-example.core/reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

