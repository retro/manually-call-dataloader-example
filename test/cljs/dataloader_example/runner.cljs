(ns dataloader-example.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [dataloader-example.core-test]))

(doo-tests 'dataloader-example.core-test)
