// Compiled by ClojureScript 1.9.946 {}
goog.provide('dataloader_example.controllers.counter');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.pipeline.controller');
dataloader_example.controllers.counter.update_counter_value = (function dataloader_example$controllers$counter$update_counter_value(action,app_db){
var current = (function (){var or__30217__auto__ = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"counter","counter",804008177)], null));
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return (0);
}
})();
var action_fn = ((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"inc","inc",-1316026094)))?cljs.core.inc:cljs.core.dec);
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"counter","counter",804008177)], null),action_fn.call(null,current));
});
dataloader_example.controllers.counter.controller = keechma.toolbox.pipeline.controller.constructor$.call(null,(function (_){
return true;
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :counter] 0))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"counter","counter",804008177)], null),(0)))], null);
})], null)], null)),new cljs.core.Keyword(null,"update","update",1045576396),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (update-counter-value value app-db))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,dataloader_example.controllers.counter.update_counter_value.call(null,value,app_db))], null);
})], null)], null))], null));

//# sourceMappingURL=counter.js.map?rel=1515669759313
