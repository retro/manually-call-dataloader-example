// Compiled by ClojureScript 1.9.946 {}
goog.provide('dataloader_example.controllers');
goog.require('cljs.core');
goog.require('dataloader_example.controllers.filter');
goog.require('keechma.toolbox.dataloader.controller');
goog.require('dataloader_example.edb');
goog.require('dataloader_example.datasources');
dataloader_example.controllers.controllers = keechma.toolbox.dataloader.controller.register.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),dataloader_example.controllers.filter.controller], null),dataloader_example.datasources.datasources,dataloader_example.edb.edb_schema);

//# sourceMappingURL=controllers.js.map?rel=1515670602387
