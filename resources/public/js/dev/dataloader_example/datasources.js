// Compiled by ClojureScript 1.9.946 {}
goog.provide('dataloader_example.datasources');
goog.require('cljs.core');
goog.require('keechma.toolbox.dataloader.subscriptions');
dataloader_example.datasources.existing_data_loader = keechma.toolbox.dataloader.subscriptions.map_loader.call(null,(function (req){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(req);
}));
dataloader_example.datasources.datasources = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"filter","filter",-948537934)], null),new cljs.core.Keyword(null,"loader","loader",-462395423),dataloader_example.datasources.existing_data_loader,new cljs.core.Keyword(null,"params","params",710516235),(function (prev,_,___$1){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(prev);
})], null),new cljs.core.Keyword(null,"real-data","real-data",195631992),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"real-data","real-data",195631992)], null),new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934)], null),new cljs.core.Keyword(null,"loader","loader",-462395423),keechma.toolbox.dataloader.subscriptions.map_loader.call(null,(function (req){
var temp__5457__auto__ = cljs.core.get_in.call(null,req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var filter = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Foo Bar",new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null);
} else {
return null;
}
})),new cljs.core.Keyword(null,"params","params",710516235),(function (_,___$1,p__45945){
var map__45946 = p__45945;
var map__45946__$1 = ((((!((map__45946 == null)))?((((map__45946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45946):map__45946);
var filter = cljs.core.get.call(null,map__45946__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null);
})], null)], null);

//# sourceMappingURL=datasources.js.map?rel=1515670602198
