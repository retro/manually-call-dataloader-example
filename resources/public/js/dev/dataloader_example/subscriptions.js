// Compiled by ClojureScript 1.9.946 {}
goog.provide('dataloader_example.subscriptions');
goog.require('cljs.core');
goog.require('keechma.toolbox.dataloader.subscriptions');
goog.require('dataloader_example.edb');
goog.require('dataloader_example.datasources');
dataloader_example.subscriptions.get_kv = (function dataloader_example$subscriptions$get_kv(key){
return (function (app_db_atom){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),key], null)));
}));
});
});
dataloader_example.subscriptions.subscriptions = cljs.core.merge.call(null,keechma.toolbox.dataloader.subscriptions.make_subscriptions.call(null,dataloader_example.datasources.datasources,dataloader_example.edb.edb_schema),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counter","counter",804008177),dataloader_example.subscriptions.get_kv.call(null,new cljs.core.Keyword(null,"counter","counter",804008177))], null));

//# sourceMappingURL=subscriptions.js.map?rel=1515670602207
