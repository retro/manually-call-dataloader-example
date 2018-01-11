(ns dataloader-example.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [dataloader-example.core :as core]))

(deftest fake-test
  (testing "fake description"
    (is (= 1 2))))
