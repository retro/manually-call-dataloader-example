// Compiled by ClojureScript 1.9.946 {}
goog.provide('entitydb.relations');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('entitydb.util');
entitydb.relations.get_relations = (function entitydb$relations$get_relations(schema,entity_kw){
var or__30217__auto__ = cljs.core.get_in.call(null,schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"relations","relations",-427124442)], null));
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
entitydb.relations.get_related_collection_key = (function entitydb$relations$get_related_collection_key(entity_kw,id,relation_kw){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,id,relation_kw], null);
});
entitydb.relations.remove_related_from_item = (function entitydb$relations$remove_related_from_item(related_entity_kws,item){
return cljs.core.reduce.call(null,(function (item__$1,related_entity_kw){
return cljs.core.dissoc.call(null,item__$1,related_entity_kw);
}),item,related_entity_kws);
});
entitydb.relations.remove_related_collections = (function entitydb$relations$remove_related_collections(entity_kw,id,db,relation_kw,p__37148){
var vec__37149 = p__37148;
var relation_type = cljs.core.nth.call(null,vec__37149,(0),null);
var related_entity_kw = cljs.core.nth.call(null,vec__37149,(1),null);
var collection_key = entitydb.relations.get_related_collection_key.call(null,entity_kw,id,relation_kw);
var collection_type = ((cljs.core._EQ_.call(null,relation_type,new cljs.core.Keyword(null,"one","one",935007904)))?new cljs.core.Keyword(null,"c-one","c-one",-1168064923):new cljs.core.Keyword(null,"c-many","c-many",745949041));
var collections_without_related = cljs.core.dissoc.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [related_entity_kw,collection_type], null)),collection_key);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [related_entity_kw,collection_type], null),collections_without_related);
});

//# sourceMappingURL=relations.js.map?rel=1515669752340
