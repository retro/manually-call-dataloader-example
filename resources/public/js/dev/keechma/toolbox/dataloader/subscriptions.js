// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.toolbox.dataloader.subscriptions');
goog.require('cljs.core');
goog.require('keechma.toolbox.dataloader.core');
keechma.toolbox.dataloader.subscriptions.map_loader = (function keechma$toolbox$dataloader$subscriptions$map_loader(loader){
return (function (reqs){
return cljs.core.map.call(null,loader,reqs);
});
});
/**
 * Returns a map with subscriptions based on the datasources
 */
keechma.toolbox.dataloader.subscriptions.make_subscriptions = (function keechma$toolbox$dataloader$subscriptions$make_subscriptions(datasources,edb_schema){
return cljs.core.reduce.call(null,(function (acc,p__38234){
var vec__38235 = p__38234;
var datasource_key = cljs.core.nth.call(null,vec__38235,(0),null);
var datasource = cljs.core.nth.call(null,vec__38235,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,datasource_key)),"-meta"].join('')),((function (vec__38235,datasource_key,datasource){
return (function (app_db_atom){
return reagent.ratom.make_reaction.call(null,((function (vec__38235,datasource_key,datasource){
return (function (){
var app_db = cljs.core.deref.call(null,app_db_atom);
return keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key);
});})(vec__38235,datasource_key,datasource))
);
});})(vec__38235,datasource_key,datasource))
),datasource_key,((function (vec__38235,datasource_key,datasource){
return (function (app_db_atom){
return reagent.ratom.make_reaction.call(null,((function (vec__38235,datasource_key,datasource){
return (function (){
var app_db = cljs.core.deref.call(null,app_db_atom);
return keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(datasource));
});})(vec__38235,datasource_key,datasource))
);
});})(vec__38235,datasource_key,datasource))
);
}),cljs.core.PersistentArrayMap.EMPTY,datasources);
});

//# sourceMappingURL=subscriptions.js.map?rel=1515669753977
