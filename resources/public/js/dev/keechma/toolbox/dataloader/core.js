// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.toolbox.dataloader.core');
goog.require('cljs.core');
goog.require('com.stuartsierra.dependency');
goog.require('cljs.core.async');
goog.require('promesa.core');
goog.require('entitydb.core');
goog.require('medley.core');
keechma.toolbox.dataloader.core.id_key = new cljs.core.Keyword("keechma.toolbox.dataloader.core","dataloader","keechma.toolbox.dataloader.core/dataloader",-359595488);
keechma.toolbox.dataloader.core.request_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.toolbox.dataloader.core.EntityDBWithRelations = (function (data,relations,__meta,__extmap,__hash){
this.data = data;
this.relations = relations;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k37285,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__37289 = k37285;
var G__37289__$1 = (((G__37289 instanceof cljs.core.Keyword))?G__37289.fqn:null);
switch (G__37289__$1) {
case "data":
return self__.data;

break;
case "relations":
return self__.relations;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37285,else__30908__auto__);

}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.toolbox.dataloader.core.EntityDBWithRelations{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37284){
var self__ = this;
var G__37284__$1 = this;
return (new cljs.core.RecordIter((0),G__37284__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"relations","relations",-427124442)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (440975300 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37286,other37287){
var self__ = this;
var this37286__$1 = this;
return (!((other37287 == null))) && ((this37286__$1.constructor === other37287.constructor)) && (cljs.core._EQ_.call(null,this37286__$1.data,other37287.data)) && (cljs.core._EQ_.call(null,this37286__$1.relations,other37287.relations)) && (cljs.core._EQ_.call(null,this37286__$1.__extmap,other37287.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relations","relations",-427124442),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__37284){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__37290 = cljs.core.keyword_identical_QMARK_;
var expr__37291 = k__30913__auto__;
if(cljs.core.truth_(pred__37290.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__37291))){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(G__37284,self__.relations,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37290.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442),expr__37291))){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,G__37284,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__37284),null));
}
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__37284){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,G__37284,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"relations","relations",1213407085,null)], null);
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$type = true;

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.dataloader.core/EntityDBWithRelations");
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.toolbox.dataloader.core/EntityDBWithRelations");
});

keechma.toolbox.dataloader.core.__GT_EntityDBWithRelations = (function keechma$toolbox$dataloader$core$__GT_EntityDBWithRelations(data,relations){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(data,relations,null,null,null));
});

keechma.toolbox.dataloader.core.map__GT_EntityDBWithRelations = (function keechma$toolbox$dataloader$core$map__GT_EntityDBWithRelations(G__37288){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__37288),new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(G__37288),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__37288,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"relations","relations",-427124442))),null));
});

keechma.toolbox.dataloader.core.target__GT_edb = (function keechma$toolbox$dataloader$core$target__GT_edb(target){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.namespace.call(null,target)),cljs.core.keyword.call(null,cljs.core.name.call(null,target))], null);
});
keechma.toolbox.dataloader.core.save_kv_data = (function keechma$toolbox$dataloader$core$save_kv_data(app_db,target,data){
return cljs.core.assoc_in.call(null,app_db,target,data);
});
keechma.toolbox.dataloader.core.insert_relations = (function keechma$toolbox$dataloader$core$insert_relations(edb_schema,edb,relations){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var items = ((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null):v);
return cljs.core.reduce.call(null,((function (items){
return (function (acc2,item){
return entitydb.core.insert_item.call(null,edb_schema,acc2,k,item);
});})(items))
,acc,items);
}),edb,relations);
});
keechma.toolbox.dataloader.core.save_edb_named_item = (function keechma$toolbox$dataloader$core$save_edb_named_item(app_db,edb_schema,target,data){
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__37294 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,target);
var entity = cljs.core.nth.call(null,vec__37294,(0),null);
var named_item = cljs.core.nth.call(null,vec__37294,(1),null);
var insert_named_item = cljs.core.partial.call(null,entitydb.core.insert_named_item,edb_schema);
var vec__37297 = ((cljs.core._EQ_.call(null,keechma.toolbox.dataloader.core.EntityDBWithRelations,cljs.core.type.call(null,data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,null], null));
var data__$1 = cljs.core.nth.call(null,vec__37297,(0),null);
var relations = cljs.core.nth.call(null,vec__37297,(1),null);
return cljs.core.assoc.call(null,app_db,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),(cljs.core.truth_(data__$1)?insert_named_item.call(null,keechma.toolbox.dataloader.core.insert_relations.call(null,edb_schema,edb,relations),entity,named_item,data__$1):entitydb.core.remove_named_item.call(null,edb,entity,named_item)));
});
keechma.toolbox.dataloader.core.save_edb_collection = (function keechma$toolbox$dataloader$core$save_edb_collection(app_db,edb_schema,target,data){
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__37300 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,target);
var entity = cljs.core.nth.call(null,vec__37300,(0),null);
var collection = cljs.core.nth.call(null,vec__37300,(1),null);
var insert_collection = cljs.core.partial.call(null,entitydb.core.insert_collection,edb_schema);
var vec__37303 = ((cljs.core._EQ_.call(null,keechma.toolbox.dataloader.core.EntityDBWithRelations,cljs.core.type.call(null,data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,null], null));
var data__$1 = cljs.core.nth.call(null,vec__37303,(0),null);
var relations = cljs.core.nth.call(null,vec__37303,(1),null);
return cljs.core.assoc.call(null,app_db,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),((cljs.core.seq.call(null,data__$1))?insert_collection.call(null,keechma.toolbox.dataloader.core.insert_relations.call(null,edb_schema,edb,relations),entity,collection,data__$1):entitydb.core.remove_collection.call(null,edb,entity,collection)));
});
keechma.toolbox.dataloader.core.get_edb_named_item = (function keechma$toolbox$dataloader$core$get_edb_named_item(app_db,edb_schema,target){
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__37306 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,target);
var entity = cljs.core.nth.call(null,vec__37306,(0),null);
var named_item = cljs.core.nth.call(null,vec__37306,(1),null);
return entitydb.core.get_named_item.call(null,edb_schema,edb,entity,named_item);
});
keechma.toolbox.dataloader.core.get_edb_collection = (function keechma$toolbox$dataloader$core$get_edb_collection(app_db,edb_schema,target){
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__37309 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,target);
var entity = cljs.core.nth.call(null,vec__37309,(0),null);
var collection = cljs.core.nth.call(null,vec__37309,(1),null);
return entitydb.core.get_collection.call(null,edb_schema,edb,entity,collection);
});
keechma.toolbox.dataloader.core.get_kv_data = (function keechma$toolbox$dataloader$core$get_kv_data(app_db,target){
return cljs.core.get_in.call(null,app_db,target);
});
keechma.toolbox.dataloader.core.get_meta = (function keechma$toolbox$dataloader$core$get_meta(app_db,datasource_key){
return cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key,datasource_key], null));
});
keechma.toolbox.dataloader.core.save_meta = (function keechma$toolbox$dataloader$core$save_meta(app_db,datasource_key,meta){
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key,datasource_key], null),meta);
});
keechma.toolbox.dataloader.core.save_data = (function keechma$toolbox$dataloader$core$save_data(app_db,edb_schema,target,data){
var target_start = cljs.core.first.call(null,target);
var G__37312 = target_start;
var G__37312__$1 = (((G__37312 instanceof cljs.core.Keyword))?G__37312.fqn:null);
switch (G__37312__$1) {
case "edb/named-item":
return keechma.toolbox.dataloader.core.save_edb_named_item.call(null,app_db,edb_schema,cljs.core.last.call(null,target),data);

break;
case "edb/collection":
return keechma.toolbox.dataloader.core.save_edb_collection.call(null,app_db,edb_schema,cljs.core.last.call(null,target),data);

break;
default:
return keechma.toolbox.dataloader.core.save_kv_data.call(null,app_db,target,data);

}
});
keechma.toolbox.dataloader.core.get_data = (function keechma$toolbox$dataloader$core$get_data(app_db,edb_schema,target){
var target_start = cljs.core.first.call(null,target);
var G__37314 = target_start;
var G__37314__$1 = (((G__37314 instanceof cljs.core.Keyword))?G__37314.fqn:null);
switch (G__37314__$1) {
case "edb/named-item":
return keechma.toolbox.dataloader.core.get_edb_named_item.call(null,app_db,edb_schema,cljs.core.last.call(null,target));

break;
case "edb/collection":
return keechma.toolbox.dataloader.core.get_edb_collection.call(null,app_db,edb_schema,cljs.core.last.call(null,target));

break;
default:
return keechma.toolbox.dataloader.core.get_kv_data.call(null,app_db,target);

}
});
keechma.toolbox.dataloader.core.datasources__GT_loaders = (function keechma$toolbox$dataloader$core$datasources__GT_loaders(app_datasources,datasources,app_db,results_chan,edb_schema){
var route_params = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var ds = datasources;
var loaders = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not.call(null,cljs.core.seq.call(null,ds))){
return loaders;
} else {
var vec__37316 = cljs.core.first.call(null,ds);
var key = cljs.core.nth.call(null,vec__37316,(0),null);
var val = cljs.core.nth.call(null,vec__37316,(1),null);
var prev = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(val)),new cljs.core.Keyword(null,"meta","meta",1499536964),keechma.toolbox.dataloader.core.get_meta.call(null,app_db,key)], null);
var params_fn = (function (){var or__30217__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return ((function (ds,loaders,or__30217__auto__,vec__37316,key,val,prev,route_params){
return (function() { 
var G__37319__delegate = function (args){
return null;
};
var G__37319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37320__i = 0, G__37320__a = new Array(arguments.length -  0);
while (G__37320__i < G__37320__a.length) {G__37320__a[G__37320__i] = arguments[G__37320__i + 0]; ++G__37320__i;}
  args = new cljs.core.IndexedSeq(G__37320__a,0,null);
} 
return G__37319__delegate.call(this,args);};
G__37319.cljs$lang$maxFixedArity = 0;
G__37319.cljs$lang$applyTo = (function (arglist__37321){
var args = cljs.core.seq(arglist__37321);
return G__37319__delegate(args);
});
G__37319.cljs$core$IFn$_invoke$arity$variadic = G__37319__delegate;
return G__37319;
})()
;
;})(ds,loaders,or__30217__auto__,vec__37316,key,val,prev,route_params))
}
})();
var deps = cljs.core.reduce.call(null,((function (ds,loaders,vec__37316,key,val,prev,params_fn,route_params){
return (function (acc,dep_key){
var dep = cljs.core.get.call(null,app_datasources,dep_key);
return cljs.core.assoc.call(null,acc,dep_key,keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(dep)));
});})(ds,loaders,vec__37316,key,val,prev,params_fn,route_params))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(val));
var params = params_fn.call(null,prev,route_params,deps);
var loader = (function (){var or__30217__auto__ = new cljs.core.Keyword(null,"loader","loader",-462395423).cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return cljs.core.identity;
}
})();
var target = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(val);
var current_loaders = (function (){var or__30217__auto__ = cljs.core.get.call(null,loaders,loader);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var G__37322 = cljs.core.rest.call(null,ds);
var G__37323 = cljs.core.assoc.call(null,loaders,loader,cljs.core.conj.call(null,current_loaders,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"prev","prev",-1597069226),prev,new cljs.core.Keyword(null,"datasource","datasource",-246060221),key,new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"current-request","current-request",-378355695),cljs.core.get_in.call(null,cljs.core.deref.call(null,keechma.toolbox.dataloader.core.request_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,params], null))], null)));
ds = G__37322;
loaders = G__37323;
continue;
}
break;
}
});
keechma.toolbox.dataloader.core.call_loader = (function keechma$toolbox$dataloader$core$call_loader(loader,pending_datasources,context){
var reqs = loader.call(null,pending_datasources,context);
var seq__37324_37334 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,reqs));
var chunk__37325_37335 = null;
var count__37326_37336 = (0);
var i__37327_37337 = (0);
while(true){
if((i__37327_37337 < count__37326_37336)){
var vec__37328_37338 = cljs.core._nth.call(null,chunk__37325_37335,i__37327_37337);
var idx_37339 = cljs.core.nth.call(null,vec__37328_37338,(0),null);
var req_37340 = cljs.core.nth.call(null,vec__37328_37338,(1),null);
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,cljs.core.get_in.call(null,pending_datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_37339,new cljs.core.Keyword(null,"params","params",710516235)], null))], null),req_37340);

var G__37341 = seq__37324_37334;
var G__37342 = chunk__37325_37335;
var G__37343 = count__37326_37336;
var G__37344 = (i__37327_37337 + (1));
seq__37324_37334 = G__37341;
chunk__37325_37335 = G__37342;
count__37326_37336 = G__37343;
i__37327_37337 = G__37344;
continue;
} else {
var temp__5457__auto___37345 = cljs.core.seq.call(null,seq__37324_37334);
if(temp__5457__auto___37345){
var seq__37324_37346__$1 = temp__5457__auto___37345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37324_37346__$1)){
var c__31148__auto___37347 = cljs.core.chunk_first.call(null,seq__37324_37346__$1);
var G__37348 = cljs.core.chunk_rest.call(null,seq__37324_37346__$1);
var G__37349 = c__31148__auto___37347;
var G__37350 = cljs.core.count.call(null,c__31148__auto___37347);
var G__37351 = (0);
seq__37324_37334 = G__37348;
chunk__37325_37335 = G__37349;
count__37326_37336 = G__37350;
i__37327_37337 = G__37351;
continue;
} else {
var vec__37331_37352 = cljs.core.first.call(null,seq__37324_37346__$1);
var idx_37353 = cljs.core.nth.call(null,vec__37331_37352,(0),null);
var req_37354 = cljs.core.nth.call(null,vec__37331_37352,(1),null);
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,cljs.core.get_in.call(null,pending_datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_37353,new cljs.core.Keyword(null,"params","params",710516235)], null))], null),req_37354);

var G__37355 = cljs.core.next.call(null,seq__37324_37346__$1);
var G__37356 = null;
var G__37357 = (0);
var G__37358 = (0);
seq__37324_37334 = G__37355;
chunk__37325_37335 = G__37356;
count__37326_37336 = G__37357;
i__37327_37337 = G__37358;
continue;
}
} else {
}
}
break;
}

return reqs;
});
keechma.toolbox.dataloader.core.start_loaders_BANG_ = (function keechma$toolbox$dataloader$core$start_loaders_BANG_(app_db_atom,app_datasources,datasources,results_chan,edb_schema,context){
var app_db = cljs.core.deref.call(null,app_db_atom);
var loaders = keechma.toolbox.dataloader.core.datasources__GT_loaders.call(null,app_datasources,datasources,app_db,results_chan,edb_schema);
var seq__37361 = cljs.core.seq.call(null,loaders);
var chunk__37362 = null;
var count__37363 = (0);
var i__37364 = (0);
while(true){
if((i__37364 < count__37363)){
var vec__37365 = cljs.core._nth.call(null,chunk__37362,i__37364);
var loader = cljs.core.nth.call(null,vec__37365,(0),null);
var pending_datasources = cljs.core.nth.call(null,vec__37365,(1),null);
var pending_datasources_with_current_37391 = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (seq__37361,chunk__37362,count__37363,i__37364,vec__37365,loader,pending_datasources,app_db,loaders){
return (function (p1__37359_SHARP_){
return !((new cljs.core.Keyword(null,"current-request","current-request",-378355695).cljs$core$IFn$_invoke$arity$1(p1__37359_SHARP_) == null));
});})(seq__37361,chunk__37362,count__37363,i__37364,vec__37365,loader,pending_datasources,app_db,loaders))
,pending_datasources));
var pending_datasources_without_current_37392 = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (seq__37361,chunk__37362,count__37363,i__37364,pending_datasources_with_current_37391,vec__37365,loader,pending_datasources,app_db,loaders){
return (function (p1__37360_SHARP_){
return (new cljs.core.Keyword(null,"current-request","current-request",-378355695).cljs$core$IFn$_invoke$arity$1(p1__37360_SHARP_) == null);
});})(seq__37361,chunk__37362,count__37363,i__37364,pending_datasources_with_current_37391,vec__37365,loader,pending_datasources,app_db,loaders))
,pending_datasources));
var promises_37393 = keechma.toolbox.dataloader.core.call_loader.call(null,loader,pending_datasources_without_current_37392,context);
var seq__37368_37394 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.concat.call(null,promises_37393,cljs.core.map.call(null,new cljs.core.Keyword(null,"current-request","current-request",-378355695),pending_datasources_with_current_37391))));
var chunk__37369_37395 = null;
var count__37370_37396 = (0);
var i__37371_37397 = (0);
while(true){
if((i__37371_37397 < count__37370_37396)){
var vec__37372_37398 = cljs.core._nth.call(null,chunk__37369_37395,i__37371_37397);
var idx_37399 = cljs.core.nth.call(null,vec__37372_37398,(0),null);
var loader_promise_37400 = cljs.core.nth.call(null,vec__37372_37398,(1),null);
promesa.core.error.call(null,((function (seq__37368_37394,chunk__37369_37395,count__37370_37396,i__37371_37397,seq__37361,chunk__37362,count__37363,i__37364,vec__37372_37398,idx_37399,loader_promise_37400,pending_datasources_with_current_37391,pending_datasources_without_current_37392,promises_37393,vec__37365,loader,pending_datasources,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_37399);
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource)], null));

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__37368_37394,chunk__37369_37395,count__37370_37396,i__37371_37397,seq__37361,chunk__37362,count__37363,i__37364,vec__37372_37398,idx_37399,loader_promise_37400,pending_datasources_with_current_37391,pending_datasources_without_current_37392,promises_37393,vec__37365,loader,pending_datasources,app_db,loaders))
,promesa.core.map.call(null,((function (seq__37368_37394,chunk__37369_37395,count__37370_37396,i__37371_37397,seq__37361,chunk__37362,count__37363,i__37364,vec__37372_37398,idx_37399,loader_promise_37400,pending_datasources_with_current_37391,pending_datasources_without_current_37392,promises_37393,vec__37365,loader,pending_datasources,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_37399);
var processor = (function (){var or__30217__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return cljs.core.identity;
}
})();
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource)], null));

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,pending_datasource))], null));
});})(seq__37368_37394,chunk__37369_37395,count__37370_37396,i__37371_37397,seq__37361,chunk__37362,count__37363,i__37364,vec__37372_37398,idx_37399,loader_promise_37400,pending_datasources_with_current_37391,pending_datasources_without_current_37392,promises_37393,vec__37365,loader,pending_datasources,app_db,loaders))
,promesa.core.promise.call(null,loader_promise_37400)));

var G__37401 = seq__37368_37394;
var G__37402 = chunk__37369_37395;
var G__37403 = count__37370_37396;
var G__37404 = (i__37371_37397 + (1));
seq__37368_37394 = G__37401;
chunk__37369_37395 = G__37402;
count__37370_37396 = G__37403;
i__37371_37397 = G__37404;
continue;
} else {
var temp__5457__auto___37405 = cljs.core.seq.call(null,seq__37368_37394);
if(temp__5457__auto___37405){
var seq__37368_37406__$1 = temp__5457__auto___37405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37368_37406__$1)){
var c__31148__auto___37407 = cljs.core.chunk_first.call(null,seq__37368_37406__$1);
var G__37408 = cljs.core.chunk_rest.call(null,seq__37368_37406__$1);
var G__37409 = c__31148__auto___37407;
var G__37410 = cljs.core.count.call(null,c__31148__auto___37407);
var G__37411 = (0);
seq__37368_37394 = G__37408;
chunk__37369_37395 = G__37409;
count__37370_37396 = G__37410;
i__37371_37397 = G__37411;
continue;
} else {
var vec__37375_37412 = cljs.core.first.call(null,seq__37368_37406__$1);
var idx_37413 = cljs.core.nth.call(null,vec__37375_37412,(0),null);
var loader_promise_37414 = cljs.core.nth.call(null,vec__37375_37412,(1),null);
promesa.core.error.call(null,((function (seq__37368_37394,chunk__37369_37395,count__37370_37396,i__37371_37397,seq__37361,chunk__37362,count__37363,i__37364,vec__37375_37412,idx_37413,loader_promise_37414,seq__37368_37406__$1,temp__5457__auto___37405,pending_datasources_with_current_37391,pending_datasources_without_current_37392,promises_37393,vec__37365,loader,pending_datasources,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_37413);
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource)], null));

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__37368_37394,chunk__37369_37395,count__37370_37396,i__37371_37397,seq__37361,chunk__37362,count__37363,i__37364,vec__37375_37412,idx_37413,loader_promise_37414,seq__37368_37406__$1,temp__5457__auto___37405,pending_datasources_with_current_37391,pending_datasources_without_current_37392,promises_37393,vec__37365,loader,pending_datasources,app_db,loaders))
,promesa.core.map.call(null,((function (seq__37368_37394,chunk__37369_37395,count__37370_37396,i__37371_37397,seq__37361,chunk__37362,count__37363,i__37364,vec__37375_37412,idx_37413,loader_promise_37414,seq__37368_37406__$1,temp__5457__auto___37405,pending_datasources_with_current_37391,pending_datasources_without_current_37392,promises_37393,vec__37365,loader,pending_datasources,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_37413);
var processor = (function (){var or__30217__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return cljs.core.identity;
}
})();
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource)], null));

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,pending_datasource))], null));
});})(seq__37368_37394,chunk__37369_37395,count__37370_37396,i__37371_37397,seq__37361,chunk__37362,count__37363,i__37364,vec__37375_37412,idx_37413,loader_promise_37414,seq__37368_37406__$1,temp__5457__auto___37405,pending_datasources_with_current_37391,pending_datasources_without_current_37392,promises_37393,vec__37365,loader,pending_datasources,app_db,loaders))
,promesa.core.promise.call(null,loader_promise_37414)));

var G__37415 = cljs.core.next.call(null,seq__37368_37406__$1);
var G__37416 = null;
var G__37417 = (0);
var G__37418 = (0);
seq__37368_37394 = G__37415;
chunk__37369_37395 = G__37416;
count__37370_37396 = G__37417;
i__37371_37397 = G__37418;
continue;
}
} else {
}
}
break;
}

var G__37419 = seq__37361;
var G__37420 = chunk__37362;
var G__37421 = count__37363;
var G__37422 = (i__37364 + (1));
seq__37361 = G__37419;
chunk__37362 = G__37420;
count__37363 = G__37421;
i__37364 = G__37422;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37361);
if(temp__5457__auto__){
var seq__37361__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37361__$1)){
var c__31148__auto__ = cljs.core.chunk_first.call(null,seq__37361__$1);
var G__37423 = cljs.core.chunk_rest.call(null,seq__37361__$1);
var G__37424 = c__31148__auto__;
var G__37425 = cljs.core.count.call(null,c__31148__auto__);
var G__37426 = (0);
seq__37361 = G__37423;
chunk__37362 = G__37424;
count__37363 = G__37425;
i__37364 = G__37426;
continue;
} else {
var vec__37378 = cljs.core.first.call(null,seq__37361__$1);
var loader = cljs.core.nth.call(null,vec__37378,(0),null);
var pending_datasources = cljs.core.nth.call(null,vec__37378,(1),null);
var pending_datasources_with_current_37427 = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (seq__37361,chunk__37362,count__37363,i__37364,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders){
return (function (p1__37359_SHARP_){
return !((new cljs.core.Keyword(null,"current-request","current-request",-378355695).cljs$core$IFn$_invoke$arity$1(p1__37359_SHARP_) == null));
});})(seq__37361,chunk__37362,count__37363,i__37364,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders))
,pending_datasources));
var pending_datasources_without_current_37428 = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (seq__37361,chunk__37362,count__37363,i__37364,pending_datasources_with_current_37427,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders){
return (function (p1__37360_SHARP_){
return (new cljs.core.Keyword(null,"current-request","current-request",-378355695).cljs$core$IFn$_invoke$arity$1(p1__37360_SHARP_) == null);
});})(seq__37361,chunk__37362,count__37363,i__37364,pending_datasources_with_current_37427,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders))
,pending_datasources));
var promises_37429 = keechma.toolbox.dataloader.core.call_loader.call(null,loader,pending_datasources_without_current_37428,context);
var seq__37381_37430 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.concat.call(null,promises_37429,cljs.core.map.call(null,new cljs.core.Keyword(null,"current-request","current-request",-378355695),pending_datasources_with_current_37427))));
var chunk__37382_37431 = null;
var count__37383_37432 = (0);
var i__37384_37433 = (0);
while(true){
if((i__37384_37433 < count__37383_37432)){
var vec__37385_37434 = cljs.core._nth.call(null,chunk__37382_37431,i__37384_37433);
var idx_37435 = cljs.core.nth.call(null,vec__37385_37434,(0),null);
var loader_promise_37436 = cljs.core.nth.call(null,vec__37385_37434,(1),null);
promesa.core.error.call(null,((function (seq__37381_37430,chunk__37382_37431,count__37383_37432,i__37384_37433,seq__37361,chunk__37362,count__37363,i__37364,vec__37385_37434,idx_37435,loader_promise_37436,pending_datasources_with_current_37427,pending_datasources_without_current_37428,promises_37429,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_37435);
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource)], null));

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__37381_37430,chunk__37382_37431,count__37383_37432,i__37384_37433,seq__37361,chunk__37362,count__37363,i__37364,vec__37385_37434,idx_37435,loader_promise_37436,pending_datasources_with_current_37427,pending_datasources_without_current_37428,promises_37429,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders))
,promesa.core.map.call(null,((function (seq__37381_37430,chunk__37382_37431,count__37383_37432,i__37384_37433,seq__37361,chunk__37362,count__37363,i__37364,vec__37385_37434,idx_37435,loader_promise_37436,pending_datasources_with_current_37427,pending_datasources_without_current_37428,promises_37429,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_37435);
var processor = (function (){var or__30217__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return cljs.core.identity;
}
})();
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource)], null));

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,pending_datasource))], null));
});})(seq__37381_37430,chunk__37382_37431,count__37383_37432,i__37384_37433,seq__37361,chunk__37362,count__37363,i__37364,vec__37385_37434,idx_37435,loader_promise_37436,pending_datasources_with_current_37427,pending_datasources_without_current_37428,promises_37429,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders))
,promesa.core.promise.call(null,loader_promise_37436)));

var G__37437 = seq__37381_37430;
var G__37438 = chunk__37382_37431;
var G__37439 = count__37383_37432;
var G__37440 = (i__37384_37433 + (1));
seq__37381_37430 = G__37437;
chunk__37382_37431 = G__37438;
count__37383_37432 = G__37439;
i__37384_37433 = G__37440;
continue;
} else {
var temp__5457__auto___37441__$1 = cljs.core.seq.call(null,seq__37381_37430);
if(temp__5457__auto___37441__$1){
var seq__37381_37442__$1 = temp__5457__auto___37441__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37381_37442__$1)){
var c__31148__auto___37443 = cljs.core.chunk_first.call(null,seq__37381_37442__$1);
var G__37444 = cljs.core.chunk_rest.call(null,seq__37381_37442__$1);
var G__37445 = c__31148__auto___37443;
var G__37446 = cljs.core.count.call(null,c__31148__auto___37443);
var G__37447 = (0);
seq__37381_37430 = G__37444;
chunk__37382_37431 = G__37445;
count__37383_37432 = G__37446;
i__37384_37433 = G__37447;
continue;
} else {
var vec__37388_37448 = cljs.core.first.call(null,seq__37381_37442__$1);
var idx_37449 = cljs.core.nth.call(null,vec__37388_37448,(0),null);
var loader_promise_37450 = cljs.core.nth.call(null,vec__37388_37448,(1),null);
promesa.core.error.call(null,((function (seq__37381_37430,chunk__37382_37431,count__37383_37432,i__37384_37433,seq__37361,chunk__37362,count__37363,i__37364,vec__37388_37448,idx_37449,loader_promise_37450,seq__37381_37442__$1,temp__5457__auto___37441__$1,pending_datasources_with_current_37427,pending_datasources_without_current_37428,promises_37429,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_37449);
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource)], null));

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__37381_37430,chunk__37382_37431,count__37383_37432,i__37384_37433,seq__37361,chunk__37362,count__37363,i__37364,vec__37388_37448,idx_37449,loader_promise_37450,seq__37381_37442__$1,temp__5457__auto___37441__$1,pending_datasources_with_current_37427,pending_datasources_without_current_37428,promises_37429,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders))
,promesa.core.map.call(null,((function (seq__37381_37430,chunk__37382_37431,count__37383_37432,i__37384_37433,seq__37361,chunk__37362,count__37363,i__37364,vec__37388_37448,idx_37449,loader_promise_37450,seq__37381_37442__$1,temp__5457__auto___37441__$1,pending_datasources_with_current_37427,pending_datasources_without_current_37428,promises_37429,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_37449);
var processor = (function (){var or__30217__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return cljs.core.identity;
}
})();
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loader,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource)], null));

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,pending_datasource))], null));
});})(seq__37381_37430,chunk__37382_37431,count__37383_37432,i__37384_37433,seq__37361,chunk__37362,count__37363,i__37364,vec__37388_37448,idx_37449,loader_promise_37450,seq__37381_37442__$1,temp__5457__auto___37441__$1,pending_datasources_with_current_37427,pending_datasources_without_current_37428,promises_37429,vec__37378,loader,pending_datasources,seq__37361__$1,temp__5457__auto__,app_db,loaders))
,promesa.core.promise.call(null,loader_promise_37450)));

var G__37451 = cljs.core.next.call(null,seq__37381_37442__$1);
var G__37452 = null;
var G__37453 = (0);
var G__37454 = (0);
seq__37381_37430 = G__37451;
chunk__37382_37431 = G__37452;
count__37383_37432 = G__37453;
i__37384_37433 = G__37454;
continue;
}
} else {
}
}
break;
}

var G__37455 = cljs.core.next.call(null,seq__37361__$1);
var G__37456 = null;
var G__37457 = (0);
var G__37458 = (0);
seq__37361 = G__37455;
chunk__37362 = G__37456;
count__37363 = G__37457;
i__37364 = G__37458;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.toolbox.dataloader.core.has_pending_datasources_QMARK_ = (function keechma$toolbox$dataloader$core$has_pending_datasources_QMARK_(app_db){
var statuses = cljs.core.map.call(null,(function (p__37460){
var vec__37461 = p__37460;
var _ = cljs.core.nth.call(null,vec__37461,(0),null);
var val = cljs.core.nth.call(null,vec__37461,(1),null);
return cljs.core.get.call(null,val,new cljs.core.Keyword(null,"status","status",-1997798413));
}),cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key], null)));
return cljs.core.boolean$.call(null,cljs.core.some.call(null,((function (statuses){
return (function (p1__37459_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),p1__37459_SHARP_);
});})(statuses))
,statuses));
});
keechma.toolbox.dataloader.core.store_datasource_BANG_ = (function keechma$toolbox$dataloader$core$store_datasource_BANG_(app_db_atom,edb_schema,payload){
var app_db = cljs.core.deref.call(null,app_db_atom);
var datasource_key = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(payload);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(payload);
var value_keys = ((cljs.core.map_QMARK_.call(null,value))?cljs.core.set.call(null,cljs.core.keys.call(null,value)):cljs.core.PersistentHashSet.EMPTY);
var vec__37464 = ((cljs.core._EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),value_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(value)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,cljs.core.PersistentArrayMap.EMPTY], null));
var res_data = cljs.core.nth.call(null,vec__37464,(0),null);
var res_meta = cljs.core.nth.call(null,vec__37464,(1),null);
return cljs.core.reset_BANG_.call(null,app_db_atom,keechma.toolbox.dataloader.core.save_data.call(null,keechma.toolbox.dataloader.core.save_meta.call(null,app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"meta","meta",1499536964),res_meta,new cljs.core.Keyword(null,"prev","prev",-1597069226),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"params","params",710516235),null], null),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(payload))], null)),edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(payload),res_data));
});
keechma.toolbox.dataloader.core.start_dependent_loaders_BANG_ = (function keechma$toolbox$dataloader$core$start_dependent_loaders_BANG_(app_db_atom,app_datasources,datasources,results_chan,edb_schema,context){
var app_db = cljs.core.deref.call(null,app_db_atom);
var statuses = cljs.core.reduce.call(null,((function (app_db){
return (function (acc,datasource_key){
return cljs.core.assoc.call(null,acc,datasource_key,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key)));
});})(app_db))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,app_datasources));
var fulfilled = cljs.core.reduce.call(null,((function (app_db,statuses){
return (function (acc,p__37468){
var vec__37469 = p__37468;
var datasource_key = cljs.core.nth.call(null,vec__37469,(0),null);
var val = cljs.core.nth.call(null,vec__37469,(1),null);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key)))) && (cljs.core.every_QMARK_.call(null,((function (vec__37469,datasource_key,val,app_db,statuses){
return (function (p1__37467_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),p1__37467_SHARP_);
});})(vec__37469,datasource_key,val,app_db,statuses))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,statuses,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(val)))))){
return cljs.core.assoc.call(null,acc,datasource_key,val);
} else {
return acc;
}
});})(app_db,statuses))
,cljs.core.PersistentArrayMap.EMPTY,datasources);
return keechma.toolbox.dataloader.core.start_loaders_BANG_.call(null,app_db_atom,app_datasources,fulfilled,results_chan,edb_schema,context);
});
keechma.toolbox.dataloader.core.store_datasource_error_BANG_ = (function keechma$toolbox$dataloader$core$store_datasource_error_BANG_(app_db,edb_schema,payload){
var datasource_key = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(payload);
return keechma.toolbox.dataloader.core.save_data.call(null,keechma.toolbox.dataloader.core.save_meta.call(null,app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload)], null)),edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(payload),null);
});
keechma.toolbox.dataloader.core.mark_dependent_errors_BANG_ = (function keechma$toolbox$dataloader$core$mark_dependent_errors_BANG_(app_db,app_datasources,datasources,edb_schema,payload){
return cljs.core.reduce.call(null,(function (acc,p__37472){
var vec__37473 = p__37472;
var datasource_key = cljs.core.nth.call(null,vec__37473,(0),null);
var val = cljs.core.nth.call(null,vec__37473,(1),null);
return keechma.toolbox.dataloader.core.save_data.call(null,keechma.toolbox.dataloader.core.save_meta.call(null,app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload)], null)),edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(val),null);
}),app_db,datasources);
});
keechma.toolbox.dataloader.core.mark_pending_BANG_ = (function keechma$toolbox$dataloader$core$mark_pending_BANG_(app_db_atom,edb_schema,datasources){
var app_db = cljs.core.deref.call(null,app_db_atom);
return cljs.core.reset_BANG_.call(null,app_db_atom,cljs.core.reduce.call(null,((function (app_db){
return (function (acc,p__37476){
var vec__37477 = p__37476;
var datasource_key = cljs.core.nth.call(null,vec__37477,(0),null);
var val = cljs.core.nth.call(null,vec__37477,(1),null);
var prev_value = keechma.toolbox.dataloader.core.get_data.call(null,acc,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(val));
var prev_datasource = keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key);
return keechma.toolbox.dataloader.core.save_meta.call(null,acc,datasource_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"prev","prev",-1597069226),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,prev_datasource,new cljs.core.Keyword(null,"prev","prev",-1597069226)),new cljs.core.Keyword(null,"value","value",305978217),prev_value)], null));
});})(app_db))
,app_db,datasources));
});
keechma.toolbox.dataloader.core.datasource_params = (function keechma$toolbox$dataloader$core$datasource_params(datasources,datasource_key,datasource,app_db,edb_schema){
var params_fn = (function (){var or__30217__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(datasource);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return ((function (or__30217__auto__){
return (function() { 
var G__37480__delegate = function (args){
return null;
};
var G__37480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37481__i = 0, G__37481__a = new Array(arguments.length -  0);
while (G__37481__i < G__37481__a.length) {G__37481__a[G__37481__i] = arguments[G__37481__i + 0]; ++G__37481__i;}
  args = new cljs.core.IndexedSeq(G__37481__a,0,null);
} 
return G__37480__delegate.call(this,args);};
G__37480.cljs$lang$maxFixedArity = 0;
G__37480.cljs$lang$applyTo = (function (arglist__37482){
var args = cljs.core.seq(arglist__37482);
return G__37480__delegate(args);
});
G__37480.cljs$core$IFn$_invoke$arity$variadic = G__37480__delegate;
return G__37480;
})()
;
;})(or__30217__auto__))
}
})();
var prev = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1499536964),keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key),new cljs.core.Keyword(null,"data","data",-232669377),keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(datasource))], null);
var route = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var deps = cljs.core.reduce.call(null,((function (params_fn,prev,route){
return (function (acc,dep_key){
return cljs.core.assoc.call(null,acc,dep_key,keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,datasources,dep_key))));
});})(params_fn,prev,route))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(datasource));
return params_fn.call(null,prev,route,deps);
});
keechma.toolbox.dataloader.core.deps_fulfilled_QMARK_ = (function keechma$toolbox$dataloader$core$deps_fulfilled_QMARK_(app_db,datasources_plan,datasource){
return cljs.core.reduce.call(null,(function (fulfilled_QMARK_,dep_key){
var dep = cljs.core.get.call(null,datasources_plan,dep_key);
var and__30205__auto__ = fulfilled_QMARK_;
if(cljs.core.truth_(and__30205__auto__)){
var and__30205__auto____$1 = new cljs.core.Keyword(null,"deps-fulfilled?","deps-fulfilled?",-1634962438).cljs$core$IFn$_invoke$arity$1(dep);
if(cljs.core.truth_(and__30205__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"reload?","reload?",-1559406964).cljs$core$IFn$_invoke$arity$1(dep));
} else {
return and__30205__auto____$1;
}
} else {
return and__30205__auto__;
}
}),true,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(datasource));
});
keechma.toolbox.dataloader.core.datasources_load_plan = (function keechma$toolbox$dataloader$core$datasources_load_plan(app_db,datasources,datasources_order,edb_schema){
var datasources_plan = cljs.core.PersistentArrayMap.EMPTY;
var datasources_order__$1 = datasources_order;
while(true){
if(cljs.core.seq.call(null,datasources_order__$1)){
var datasource_key = cljs.core.first.call(null,datasources_order__$1);
var datasource = cljs.core.get.call(null,datasources,datasource_key);
var datasource_meta = keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key);
var datasource_deps_fulfilled_QMARK_ = keechma.toolbox.dataloader.core.deps_fulfilled_QMARK_.call(null,app_db,datasources_plan,datasource);
var new_datasource_params = keechma.toolbox.dataloader.core.datasource_params.call(null,datasources,datasource_key,datasource,app_db,edb_schema);
var reload_QMARK_ = ((cljs.core.not.call(null,datasource_deps_fulfilled_QMARK_))?true:!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(datasource_meta),new_datasource_params)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.dataloader.core","ignore","keechma.toolbox.dataloader.core/ignore",-1113981850),new_datasource_params))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(datasource_meta)))));
var G__37483 = cljs.core.assoc.call(null,datasources_plan,datasource_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps-fulfilled?","deps-fulfilled?",-1634962438),datasource_deps_fulfilled_QMARK_,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),reload_QMARK_], null));
var G__37484 = cljs.core.rest.call(null,datasources_order__$1);
datasources_plan = G__37483;
datasources_order__$1 = G__37484;
continue;
} else {
return datasources_plan;
}
break;
}
});
keechma.toolbox.dataloader.core.make_dataloader = (function keechma$toolbox$dataloader$core$make_dataloader(var_args){
var G__37491 = arguments.length;
switch (G__37491) {
case 1:
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$1 = (function (datasources){
return keechma.toolbox.dataloader.core.make_dataloader.call(null,datasources,cljs.core.PersistentArrayMap.EMPTY);
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2 = (function (datasources,edb_schema){
var g = cljs.core.reduce.call(null,(function (acc,p__37492){
var vec__37493 = p__37492;
var key = cljs.core.nth.call(null,vec__37493,(0),null);
var val = cljs.core.nth.call(null,vec__37493,(1),null);
var deps = new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(val);
return cljs.core.reduce.call(null,((function (deps,vec__37493,key,val){
return (function (p1__37485_SHARP_,p2__37486_SHARP_){
return com.stuartsierra.dependency.depend.call(null,p1__37485_SHARP_,key,p2__37486_SHARP_);
});})(deps,vec__37493,key,val))
,acc,deps);
}),com.stuartsierra.dependency.graph.call(null),datasources);
var g_nodes = com.stuartsierra.dependency.nodes.call(null,g);
var independent = cljs.core.filter.call(null,((function (g,g_nodes){
return (function (p1__37487_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,g_nodes,p1__37487_SHARP_));
});})(g,g_nodes))
,cljs.core.keys.call(null,datasources));
return ((function (g,g_nodes,independent){
return (function (app_db_atom,context){
return promesa.core.promise.call(null,((function (g,g_nodes,independent){
return (function (resolve,reject,on_cancel){
var running_QMARK_ = cljs.core.atom.call(null,true);
var results_chan = cljs.core.async.chan.call(null);
var plan = keechma.toolbox.dataloader.core.datasources_load_plan.call(null,cljs.core.deref.call(null,app_db_atom),datasources,cljs.core.concat.call(null,independent,com.stuartsierra.dependency.topo_sort.call(null,g)),edb_schema);
var start_nodes = cljs.core.filter.call(null,((function (running_QMARK_,results_chan,plan,g,g_nodes,independent){
return (function (p1__37488_SHARP_){
var and__30205__auto__ = new cljs.core.Keyword(null,"reload?","reload?",-1559406964).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,plan,p1__37488_SHARP_));
if(cljs.core.truth_(and__30205__auto__)){
return new cljs.core.Keyword(null,"deps-fulfilled?","deps-fulfilled?",-1634962438).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,plan,p1__37488_SHARP_));
} else {
return and__30205__auto__;
}
});})(running_QMARK_,results_chan,plan,g,g_nodes,independent))
,cljs.core.keys.call(null,plan));
if(cljs.core.fn_QMARK_.call(null,on_cancel)){
on_cancel.call(null,((function (running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (){
return cljs.core.swap_BANG_.call(null,running_QMARK_,cljs.core.not);
});})(running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
);
} else {
}

keechma.toolbox.dataloader.core.mark_pending_BANG_.call(null,app_db_atom,edb_schema,cljs.core.select_keys.call(null,datasources,cljs.core.filter.call(null,((function (running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (p1__37489_SHARP_){
return new cljs.core.Keyword(null,"reload?","reload?",-1559406964).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,plan,p1__37489_SHARP_));
});})(running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
,cljs.core.keys.call(null,plan))));

keechma.toolbox.dataloader.core.start_loaders_BANG_.call(null,app_db_atom,datasources,cljs.core.select_keys.call(null,datasources,start_nodes),results_chan,edb_schema,context);

var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (state_37538){
var state_val_37539 = (state_37538[(1)]);
if((state_val_37539 === (7))){
var state_37538__$1 = state_37538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37538__$1,(10),results_chan);
} else {
if((state_val_37539 === (1))){
var state_37538__$1 = state_37538;
var statearr_37540_37565 = state_37538__$1;
(statearr_37540_37565[(2)] = null);

(statearr_37540_37565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (4))){
var inst_37499 = cljs.core.deref.call(null,app_db_atom);
var inst_37500 = keechma.toolbox.dataloader.core.has_pending_datasources_QMARK_.call(null,inst_37499);
var state_37538__$1 = state_37538;
if(cljs.core.truth_(inst_37500)){
var statearr_37541_37566 = state_37538__$1;
(statearr_37541_37566[(1)] = (7));

} else {
var statearr_37542_37567 = state_37538__$1;
(statearr_37542_37567[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (13))){
var inst_37508 = (state_37538[(7)]);
var inst_37510 = (state_37538[(8)]);
var inst_37515 = cljs.core.deref.call(null,app_db_atom);
var inst_37516 = keechma.toolbox.dataloader.core.store_datasource_error_BANG_.call(null,inst_37515,edb_schema,inst_37508);
var inst_37517 = cljs.core.select_keys.call(null,datasources,inst_37510);
var inst_37518 = keechma.toolbox.dataloader.core.mark_dependent_errors_BANG_.call(null,inst_37516,datasources,inst_37517,edb_schema,inst_37508);
var inst_37519 = cljs.core.reset_BANG_.call(null,app_db_atom,inst_37518);
var state_37538__$1 = state_37538;
var statearr_37543_37568 = state_37538__$1;
(statearr_37543_37568[(2)] = inst_37519);

(statearr_37543_37568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (6))){
var inst_37534 = (state_37538[(2)]);
var state_37538__$1 = state_37538;
var statearr_37544_37569 = state_37538__$1;
(statearr_37544_37569[(2)] = inst_37534);

(statearr_37544_37569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (3))){
var inst_37536 = (state_37538[(2)]);
var state_37538__$1 = state_37538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37538__$1,inst_37536);
} else {
if((state_val_37539 === (12))){
var inst_37508 = (state_37538[(7)]);
var inst_37510 = (state_37538[(8)]);
var inst_37511 = keechma.toolbox.dataloader.core.store_datasource_BANG_.call(null,app_db_atom,edb_schema,inst_37508);
var inst_37512 = cljs.core.select_keys.call(null,datasources,inst_37510);
var inst_37513 = keechma.toolbox.dataloader.core.start_dependent_loaders_BANG_.call(null,app_db_atom,datasources,inst_37512,results_chan,edb_schema,context);
var state_37538__$1 = (function (){var statearr_37545 = state_37538;
(statearr_37545[(9)] = inst_37511);

return statearr_37545;
})();
var statearr_37546_37570 = state_37538__$1;
(statearr_37546_37570[(2)] = inst_37513);

(statearr_37546_37570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (2))){
var inst_37497 = cljs.core.deref.call(null,running_QMARK_);
var state_37538__$1 = state_37538;
if(cljs.core.truth_(inst_37497)){
var statearr_37547_37571 = state_37538__$1;
(statearr_37547_37571[(1)] = (4));

} else {
var statearr_37548_37572 = state_37538__$1;
(statearr_37548_37572[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (11))){
var inst_37523 = (state_37538[(2)]);
var state_37538__$1 = (function (){var statearr_37549 = state_37538;
(statearr_37549[(10)] = inst_37523);

return statearr_37549;
})();
var statearr_37550_37573 = state_37538__$1;
(statearr_37550_37573[(2)] = null);

(statearr_37550_37573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (9))){
var inst_37529 = (state_37538[(2)]);
var state_37538__$1 = state_37538;
var statearr_37551_37574 = state_37538__$1;
(statearr_37551_37574[(2)] = inst_37529);

(statearr_37551_37574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (5))){
var inst_37531 = (new Error("Dataloader Rejected"));
var inst_37532 = reject.call(null,inst_37531);
var state_37538__$1 = state_37538;
var statearr_37552_37575 = state_37538__$1;
(statearr_37552_37575[(2)] = inst_37532);

(statearr_37552_37575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (14))){
var state_37538__$1 = state_37538;
var statearr_37553_37576 = state_37538__$1;
(statearr_37553_37576[(2)] = null);

(statearr_37553_37576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (10))){
var inst_37508 = (state_37538[(7)]);
var inst_37506 = (state_37538[(2)]);
var inst_37507 = cljs.core.nth.call(null,inst_37506,(0),null);
var inst_37508__$1 = cljs.core.nth.call(null,inst_37506,(1),null);
var inst_37509 = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(inst_37508__$1);
var inst_37510 = com.stuartsierra.dependency.transitive_dependents.call(null,g,inst_37509);
var state_37538__$1 = (function (){var statearr_37554 = state_37538;
(statearr_37554[(7)] = inst_37508__$1);

(statearr_37554[(8)] = inst_37510);

return statearr_37554;
})();
var G__37555_37577 = inst_37507;
var G__37555_37578__$1 = (((G__37555_37577 instanceof cljs.core.Keyword))?G__37555_37577.fqn:null);
switch (G__37555_37578__$1) {
case "ok":
var statearr_37556_37580 = state_37538__$1;
(statearr_37556_37580[(1)] = (12));


break;
case "error":
var statearr_37557_37581 = state_37538__$1;
(statearr_37557_37581[(1)] = (13));


break;
default:
var statearr_37558_37582 = state_37538__$1;
(statearr_37558_37582[(1)] = (14));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (8))){
var inst_37526 = cljs.core.deref.call(null,app_db_atom);
var inst_37527 = resolve.call(null,inst_37526);
var state_37538__$1 = state_37538;
var statearr_37559_37583 = state_37538__$1;
(statearr_37559_37583[(2)] = inst_37527);

(statearr_37559_37583[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33899__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
;
return ((function (switch__33809__auto__,c__33899__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function() {
var keechma$toolbox$dataloader$core$state_machine__33810__auto__ = null;
var keechma$toolbox$dataloader$core$state_machine__33810__auto____0 = (function (){
var statearr_37560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37560[(0)] = keechma$toolbox$dataloader$core$state_machine__33810__auto__);

(statearr_37560[(1)] = (1));

return statearr_37560;
});
var keechma$toolbox$dataloader$core$state_machine__33810__auto____1 = (function (state_37538){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_37538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e37561){if((e37561 instanceof Object)){
var ex__33813__auto__ = e37561;
var statearr_37562_37584 = state_37538;
(statearr_37562_37584[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37585 = state_37538;
state_37538 = G__37585;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
keechma$toolbox$dataloader$core$state_machine__33810__auto__ = function(state_37538){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$core$state_machine__33810__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$core$state_machine__33810__auto____1.call(this,state_37538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$dataloader$core$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$core$state_machine__33810__auto____0;
keechma$toolbox$dataloader$core$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$core$state_machine__33810__auto____1;
return keechma$toolbox$dataloader$core$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
})();
var state__33901__auto__ = (function (){var statearr_37563 = f__33900__auto__.call(null);
(statearr_37563[(6)] = c__33899__auto__);

return statearr_37563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
);

return c__33899__auto__;
});})(g,g_nodes,independent))
);
});
;})(g,g_nodes,independent))
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1515669752779
