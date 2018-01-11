// Compiled by ClojureScript 1.9.946 {}
goog.provide('dataloader_example.controllers.filter');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.dataloader.controller');
dataloader_example.controllers.filter.controller = keechma.toolbox.pipeline.controller.constructor$.call(null,(function (_){
return true;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-filter","set-filter",-2137659416),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :filter] value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"filter","filter",-948537934)], null),value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(dataloader-controller/run-dataloader!)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.dataloader.controller.run_dataloader_BANG_.call(null)], null);
})], null)], null))], null));

//# sourceMappingURL=filter.js.map?rel=1515670551543
