// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.toolbox.pipeline.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('promesa.core');
goog.require('promesa.impl');
goog.require('keechma.controller');

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
keechma.toolbox.pipeline.core.Error = (function (type,message,payload,cause,__meta,__extmap,__hash){
this.type = type;
this.message = message;
this.payload = payload;
this.cause = cause;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k42386,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__42390 = k42386;
var G__42390__$1 = (((G__42390 instanceof cljs.core.Keyword))?G__42390.fqn:null);
switch (G__42390__$1) {
case "type":
return self__.type;

break;
case "message":
return self__.message;

break;
case "payload":
return self__.payload;

break;
case "cause":
return self__.cause;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42386,else__30908__auto__);

}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.toolbox.pipeline.core.Error{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cause","cause",231901252),self__.cause],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42385){
var self__ = this;
var G__42385__$1 = this;
return (new cljs.core.RecordIter((0),G__42385__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"cause","cause",231901252)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (37091761 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42387,other42388){
var self__ = this;
var this42387__$1 = this;
return (!((other42388 == null))) && ((this42387__$1.constructor === other42388.constructor)) && (cljs.core._EQ_.call(null,this42387__$1.type,other42388.type)) && (cljs.core._EQ_.call(null,this42387__$1.message,other42388.message)) && (cljs.core._EQ_.call(null,this42387__$1.payload,other42388.payload)) && (cljs.core._EQ_.call(null,this42387__$1.cause,other42388.cause)) && (cljs.core._EQ_.call(null,this42387__$1.__extmap,other42388.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cause","cause",231901252),null,new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__42385){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__42391 = cljs.core.keyword_identical_QMARK_;
var expr__42392 = k__30913__auto__;
if(cljs.core.truth_(pred__42391.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__42392))){
return (new keechma.toolbox.pipeline.core.Error(G__42385,self__.message,self__.payload,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42391.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__42392))){
return (new keechma.toolbox.pipeline.core.Error(self__.type,G__42385,self__.payload,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42391.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__42392))){
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,G__42385,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42391.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),expr__42392))){
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,G__42385,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__42385),null));
}
}
}
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cause","cause",231901252),self__.cause],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__42385){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,G__42385,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.toolbox.pipeline.core.Error.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null);
});

keechma.toolbox.pipeline.core.Error.cljs$lang$type = true;

keechma.toolbox.pipeline.core.Error.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/Error");
});

keechma.toolbox.pipeline.core.Error.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.toolbox.pipeline.core/Error");
});

keechma.toolbox.pipeline.core.__GT_Error = (function keechma$toolbox$pipeline$core$__GT_Error(type,message,payload,cause){
return (new keechma.toolbox.pipeline.core.Error(type,message,payload,cause,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_Error = (function keechma$toolbox$pipeline$core$map__GT_Error(G__42389){
return (new keechma.toolbox.pipeline.core.Error(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__42389),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__42389),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__42389),new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(G__42389),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42389,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"cause","cause",231901252))),null));
});

keechma.toolbox.pipeline.core.error_BANG_ = (function keechma$toolbox$pipeline$core$error_BANG_(type,payload){
return keechma.toolbox.pipeline.core.__GT_Error.call(null,type,null,payload,null);
});

/**
 * @interface
 */
keechma.toolbox.pipeline.core.ISideffect = function(){};

keechma.toolbox.pipeline.core.call_BANG_ = (function keechma$toolbox$pipeline$core$call_BANG_(this$,controller,app_db_atom){
if((!((this$ == null))) && (!((this$.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 == null)))){
return this$.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3(this$,controller,app_db_atom);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.toolbox.pipeline.core.call_BANG_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,controller,app_db_atom);
} else {
var m__30951__auto____$1 = (keechma.toolbox.pipeline.core.call_BANG_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,controller,app_db_atom);
} else {
throw cljs.core.missing_protocol.call(null,"ISideffect.call!",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.CommitSideffect = (function (value,cb,__meta,__extmap,__hash){
this.value = value;
this.cb = cb;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k42396,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__42400 = k42396;
var G__42400__$1 = (((G__42400 instanceof cljs.core.Keyword))?G__42400.fqn:null);
switch (G__42400__$1) {
case "value":
return self__.value;

break;
case "cb":
return self__.cb;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42396,else__30908__auto__);

}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.toolbox.pipeline.core.CommitSideffect{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cb","cb",589947841),self__.cb],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42395){
var self__ = this;
var G__42395__$1 = this;
return (new cljs.core.RecordIter((0),G__42395__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cb","cb",589947841)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (706431185 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42397,other42398){
var self__ = this;
var this42397__$1 = this;
return (!((other42398 == null))) && ((this42397__$1.constructor === other42398.constructor)) && (cljs.core._EQ_.call(null,this42397__$1.value,other42398.value)) && (cljs.core._EQ_.call(null,this42397__$1.cb,other42398.cb)) && (cljs.core._EQ_.call(null,this42397__$1.__extmap,other42398.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.CommitSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,_,app_db_atom){
var self__ = this;
var this$__$1 = this;
var cb__$1 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(this$__$1);
cljs.core.reset_BANG_.call(null,app_db_atom,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(this$__$1));

if(cljs.core.truth_(cb__$1)){
return cb__$1.call(null);
} else {
return null;
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cb","cb",589947841),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__42395){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__42401 = cljs.core.keyword_identical_QMARK_;
var expr__42402 = k__30913__auto__;
if(cljs.core.truth_(pred__42401.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__42402))){
return (new keechma.toolbox.pipeline.core.CommitSideffect(G__42395,self__.cb,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42401.call(null,new cljs.core.Keyword(null,"cb","cb",589947841),expr__42402))){
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,G__42395,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__42395),null));
}
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cb","cb",589947841),self__.cb],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__42395){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,G__42395,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.toolbox.pipeline.core.CommitSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null);
});

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/CommitSideffect");
});

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.toolbox.pipeline.core/CommitSideffect");
});

keechma.toolbox.pipeline.core.__GT_CommitSideffect = (function keechma$toolbox$pipeline$core$__GT_CommitSideffect(value,cb){
return (new keechma.toolbox.pipeline.core.CommitSideffect(value,cb,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_CommitSideffect = (function keechma$toolbox$pipeline$core$map__GT_CommitSideffect(G__42399){
return (new keechma.toolbox.pipeline.core.CommitSideffect(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__42399),new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(G__42399),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42399,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cb","cb",589947841))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.SendCommandSideffect = (function (command,payload,__meta,__extmap,__hash){
this.command = command;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k42406,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__42410 = k42406;
var G__42410__$1 = (((G__42410 instanceof cljs.core.Keyword))?G__42410.fqn:null);
switch (G__42410__$1) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42406,else__30908__auto__);

}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.toolbox.pipeline.core.SendCommandSideffect{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42405){
var self__ = this;
var G__42405__$1 = this;
return (new cljs.core.RecordIter((0),G__42405__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (-1801969228 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42407,other42408){
var self__ = this;
var this42407__$1 = this;
return (!((other42408 == null))) && ((this42407__$1.constructor === other42408.constructor)) && (cljs.core._EQ_.call(null,this42407__$1.command,other42408.command)) && (cljs.core._EQ_.call(null,this42407__$1.payload,other42408.payload)) && (cljs.core._EQ_.call(null,this42407__$1.__extmap,other42408.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
return keechma.controller.send_command.call(null,controller,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"command","command",-894540724),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__42405){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__42411 = cljs.core.keyword_identical_QMARK_;
var expr__42412 = k__30913__auto__;
if(cljs.core.truth_(pred__42411.call(null,new cljs.core.Keyword(null,"command","command",-894540724),expr__42412))){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(G__42405,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42411.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__42412))){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,G__42405,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__42405),null));
}
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__42405){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,G__42405,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null);
});

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/SendCommandSideffect");
});

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.toolbox.pipeline.core/SendCommandSideffect");
});

keechma.toolbox.pipeline.core.__GT_SendCommandSideffect = (function keechma$toolbox$pipeline$core$__GT_SendCommandSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(command,payload,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_SendCommandSideffect = (function keechma$toolbox$pipeline$core$map__GT_SendCommandSideffect(G__42409){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(G__42409),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__42409),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42409,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.ExecuteSideffect = (function (command,payload,__meta,__extmap,__hash){
this.command = command;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k42416,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__42420 = k42416;
var G__42420__$1 = (((G__42420 instanceof cljs.core.Keyword))?G__42420.fqn:null);
switch (G__42420__$1) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42416,else__30908__auto__);

}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.toolbox.pipeline.core.ExecuteSideffect{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42415){
var self__ = this;
var G__42415__$1 = this;
return (new cljs.core.RecordIter((0),G__42415__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (1063192084 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42417,other42418){
var self__ = this;
var this42417__$1 = this;
return (!((other42418 == null))) && ((this42417__$1.constructor === other42418.constructor)) && (cljs.core._EQ_.call(null,this42417__$1.command,other42418.command)) && (cljs.core._EQ_.call(null,this42417__$1.payload,other42418.payload)) && (cljs.core._EQ_.call(null,this42417__$1.__extmap,other42418.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
return keechma.controller.execute.call(null,controller,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"command","command",-894540724),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__42415){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__42421 = cljs.core.keyword_identical_QMARK_;
var expr__42422 = k__30913__auto__;
if(cljs.core.truth_(pred__42421.call(null,new cljs.core.Keyword(null,"command","command",-894540724),expr__42422))){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(G__42415,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42421.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__42422))){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,G__42415,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__42415),null));
}
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__42415){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,G__42415,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null);
});

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/ExecuteSideffect");
});

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.toolbox.pipeline.core/ExecuteSideffect");
});

keechma.toolbox.pipeline.core.__GT_ExecuteSideffect = (function keechma$toolbox$pipeline$core$__GT_ExecuteSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(command,payload,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_ExecuteSideffect = (function keechma$toolbox$pipeline$core$map__GT_ExecuteSideffect(G__42419){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(G__42419),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__42419),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42419,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.RedirectSideffect = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k42426,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__42430 = k42426;
var G__42430__$1 = (((G__42430 instanceof cljs.core.Keyword))?G__42430.fqn:null);
switch (G__42430__$1) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42426,else__30908__auto__);

}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.toolbox.pipeline.core.RedirectSideffect{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42425){
var self__ = this;
var G__42425__$1 = this;
return (new cljs.core.RecordIter((0),G__42425__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (829097778 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42427,other42428){
var self__ = this;
var this42427__$1 = this;
return (!((other42428 == null))) && ((this42427__$1.constructor === other42428.constructor)) && (cljs.core._EQ_.call(null,this42427__$1.params,other42428.params)) && (cljs.core._EQ_.call(null,this42427__$1.__extmap,other42428.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
return keechma.controller.redirect.call(null,controller,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__42425){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__42431 = cljs.core.keyword_identical_QMARK_;
var expr__42432 = k__30913__auto__;
if(cljs.core.truth_(pred__42431.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__42432))){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(G__42425,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__42425),null));
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__42425){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,G__42425,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
});

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/RedirectSideffect");
});

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.toolbox.pipeline.core/RedirectSideffect");
});

keechma.toolbox.pipeline.core.__GT_RedirectSideffect = (function keechma$toolbox$pipeline$core$__GT_RedirectSideffect(params){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(params,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_RedirectSideffect = (function keechma$toolbox$pipeline$core$map__GT_RedirectSideffect(G__42429){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__42429),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42429,new cljs.core.Keyword(null,"params","params",710516235))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.DoSideffect = (function (sideffects,__meta,__extmap,__hash){
this.sideffects = sideffects;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k42436,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__42440 = k42436;
var G__42440__$1 = (((G__42440 instanceof cljs.core.Keyword))?G__42440.fqn:null);
switch (G__42440__$1) {
case "sideffects":
return self__.sideffects;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42436,else__30908__auto__);

}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.toolbox.pipeline.core.DoSideffect{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),self__.sideffects],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42435){
var self__ = this;
var G__42435__$1 = this;
return (new cljs.core.RecordIter((0),G__42435__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sideffects","sideffects",1173151920)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (1418968668 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42437,other42438){
var self__ = this;
var this42437__$1 = this;
return (!((other42438 == null))) && ((this42437__$1.constructor === other42438.constructor)) && (cljs.core._EQ_.call(null,this42437__$1.sideffects,other42438.sideffects)) && (cljs.core._EQ_.call(null,this42437__$1.__extmap,other42438.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.DoSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,app_db_atom){
var self__ = this;
var this$__$1 = this;
var sideffects__$1 = new cljs.core.Keyword(null,"sideffects","sideffects",1173151920).cljs$core$IFn$_invoke$arity$1(this$__$1);
var seq__42441 = cljs.core.seq.call(null,sideffects__$1);
var chunk__42442 = null;
var count__42443 = (0);
var i__42444 = (0);
while(true){
if((i__42444 < count__42443)){
var s = cljs.core._nth.call(null,chunk__42442,i__42444);
keechma.toolbox.pipeline.core.call_BANG_.call(null,s,controller,app_db_atom);

var G__42449 = seq__42441;
var G__42450 = chunk__42442;
var G__42451 = count__42443;
var G__42452 = (i__42444 + (1));
seq__42441 = G__42449;
chunk__42442 = G__42450;
count__42443 = G__42451;
i__42444 = G__42452;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__42441);
if(temp__5457__auto__){
var seq__42441__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42441__$1)){
var c__31148__auto__ = cljs.core.chunk_first.call(null,seq__42441__$1);
var G__42453 = cljs.core.chunk_rest.call(null,seq__42441__$1);
var G__42454 = c__31148__auto__;
var G__42455 = cljs.core.count.call(null,c__31148__auto__);
var G__42456 = (0);
seq__42441 = G__42453;
chunk__42442 = G__42454;
count__42443 = G__42455;
i__42444 = G__42456;
continue;
} else {
var s = cljs.core.first.call(null,seq__42441__$1);
keechma.toolbox.pipeline.core.call_BANG_.call(null,s,controller,app_db_atom);

var G__42457 = cljs.core.next.call(null,seq__42441__$1);
var G__42458 = null;
var G__42459 = (0);
var G__42460 = (0);
seq__42441 = G__42457;
chunk__42442 = G__42458;
count__42443 = G__42459;
i__42444 = G__42460;
continue;
}
} else {
return null;
}
}
break;
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__42435){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__42445 = cljs.core.keyword_identical_QMARK_;
var expr__42446 = k__30913__auto__;
if(cljs.core.truth_(pred__42445.call(null,new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),expr__42446))){
return (new keechma.toolbox.pipeline.core.DoSideffect(G__42435,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__42435),null));
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),self__.sideffects],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__42435){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,G__42435,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.toolbox.pipeline.core.DoSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sideffects","sideffects",-1481283849,null)], null);
});

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/DoSideffect");
});

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.toolbox.pipeline.core/DoSideffect");
});

keechma.toolbox.pipeline.core.__GT_DoSideffect = (function keechma$toolbox$pipeline$core$__GT_DoSideffect(sideffects){
return (new keechma.toolbox.pipeline.core.DoSideffect(sideffects,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_DoSideffect = (function keechma$toolbox$pipeline$core$map__GT_DoSideffect(G__42439){
return (new keechma.toolbox.pipeline.core.DoSideffect(new cljs.core.Keyword(null,"sideffects","sideffects",1173151920).cljs$core$IFn$_invoke$arity$1(G__42439),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42439,new cljs.core.Keyword(null,"sideffects","sideffects",1173151920))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.RunPipelineSideffect = (function (pipeline_key,args,__meta,__extmap,__hash){
this.pipeline_key = pipeline_key;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k42462,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__42466 = k42462;
var G__42466__$1 = (((G__42466 instanceof cljs.core.Keyword))?G__42466.fqn:null);
switch (G__42466__$1) {
case "pipeline-key":
return self__.pipeline_key;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42462,else__30908__auto__);

}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.toolbox.pipeline.core.RunPipelineSideffect{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),self__.pipeline_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42461){
var self__ = this;
var G__42461__$1 = this;
return (new cljs.core.RecordIter((0),G__42461__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (-45318976 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42463,other42464){
var self__ = this;
var this42463__$1 = this;
return (!((other42464 == null))) && ((this42463__$1.constructor === other42464.constructor)) && (cljs.core._EQ_.call(null,this42463__$1.pipeline_key,other42464.pipeline_key)) && (cljs.core._EQ_.call(null,this42463__$1.args,other42464.args)) && (cljs.core._EQ_.call(null,this42463__$1.__extmap,other42464.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,app_db_atom){
var self__ = this;
var this$__$1 = this;
var pipeline = cljs.core.get_in.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipelines","pipelines",687128919),self__.pipeline_key], null));
if(cljs.core.truth_(pipeline)){
return pipeline.call(null,controller,app_db_atom,self__.args);
} else {
throw cljs.core.ex_info.call(null,["Pipeline ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.pipeline_key)," doesn't exist"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pipeline","pipeline",-401746042),self__.pipeline_key], null));
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__42461){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__42467 = cljs.core.keyword_identical_QMARK_;
var expr__42468 = k__30913__auto__;
if(cljs.core.truth_(pred__42467.call(null,new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),expr__42468))){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(G__42461,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42467.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__42468))){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,G__42461,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__42461),null));
}
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),self__.pipeline_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__42461){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,G__42461,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pipeline-key","pipeline-key",-209405559,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.RunPipelineSideffect.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/RunPipelineSideffect");
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.toolbox.pipeline.core/RunPipelineSideffect");
});

keechma.toolbox.pipeline.core.__GT_RunPipelineSideffect = (function keechma$toolbox$pipeline$core$__GT_RunPipelineSideffect(pipeline_key,args){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(pipeline_key,args,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_RunPipelineSideffect = (function keechma$toolbox$pipeline$core$map__GT_RunPipelineSideffect(G__42465){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086).cljs$core$IFn$_invoke$arity$1(G__42465),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__42465),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42465,new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),new cljs.core.Keyword(null,"args","args",1315556576))),null));
});

/**
 * 
 * Commit pipeline sideffect.
 * 
 * Accepts `value` or `value` and `callback` as arguments. Value should be a new version of app-db.
 * 
 * ```clojure
 * (commit! (assoc-in app-db [:kv :user] {:username "retro"}))
 * 
 * ```
 * 
 * If the callback argument is present, this function will be called immediately after the app-db-atom is updated.
 * This is useful if you want to force Reagent to re-render the screen.
 */
keechma.toolbox.pipeline.core.commit_BANG_ = (function keechma$toolbox$pipeline$core$commit_BANG_(var_args){
var G__42472 = arguments.length;
switch (G__42472) {
case 1:
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return keechma.toolbox.pipeline.core.commit_BANG_.call(null,value,null);
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,cb){
return keechma.toolbox.pipeline.core.__GT_CommitSideffect.call(null,value,cb);
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * 
 * Execute pipeline sideffect.
 * 
 * Accepts `command` and `payload` arguments. Use this if you want to execute a command on the current controller.
 */
keechma.toolbox.pipeline.core.execute_BANG_ = (function keechma$toolbox$pipeline$core$execute_BANG_(command,payload){
return keechma.toolbox.pipeline.core.__GT_ExecuteSideffect.call(null,command,payload);
});
/**
 * 
 * Send command pipeline sideffect.
 * 
 * Accepts `command` and `payload` arguments. Command should be a vector where first element is the controller topic, and the second
 * element is the command name. 
 */
keechma.toolbox.pipeline.core.send_command_BANG_ = (function keechma$toolbox$pipeline$core$send_command_BANG_(command,payload){
return keechma.toolbox.pipeline.core.__GT_SendCommandSideffect.call(null,command,payload);
});
/**
 * 
 * Redirect pipeline sideffect.
 * 
 * Accepts `params` argument. Page will be redirected to a new URL which will be generated from the passed in params argument. If you need to 
 * access the current route data, it is present in the pipeline `app-db` argument under the `[:route :data]` path.
 */
keechma.toolbox.pipeline.core.redirect_BANG_ = (function keechma$toolbox$pipeline$core$redirect_BANG_(params){
return keechma.toolbox.pipeline.core.__GT_RedirectSideffect.call(null,params);
});
/**
 * 
 * Runs multiple sideffects sequentially:
 * 
 * ```clojure
 * (do!
 *   (commit! (assoc-in app-db [:kv :current-user] value))
 *   (redirect! {:page "user" :id (:id user)}))
 * ```
 */
keechma.toolbox.pipeline.core.do_BANG_ = (function keechma$toolbox$pipeline$core$do_BANG_(var_args){
var args__31503__auto__ = [];
var len__31496__auto___42475 = arguments.length;
var i__31497__auto___42476 = (0);
while(true){
if((i__31497__auto___42476 < len__31496__auto___42475)){
args__31503__auto__.push((arguments[i__31497__auto___42476]));

var G__42477 = (i__31497__auto___42476 + (1));
i__31497__auto___42476 = G__42477;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sideffects){
return keechma.toolbox.pipeline.core.__GT_DoSideffect.call(null,sideffects);
});

keechma.toolbox.pipeline.core.do_BANG_.cljs$lang$maxFixedArity = (0);

keechma.toolbox.pipeline.core.do_BANG_.cljs$lang$applyTo = (function (seq42474){
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42474));
});

/**
 * Runs a pipeline in a way that blocks the current pipeline until the current pipeline is done. It behaves same as `execute! but blocks the parent pipeline until it's done. Return value and errors will be ignored by the parent pipeline.
 */
keechma.toolbox.pipeline.core.run_pipeline_BANG_ = (function keechma$toolbox$pipeline$core$run_pipeline_BANG_(var_args){
var G__42479 = arguments.length;
switch (G__42479) {
case 1:
return keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (pipeline_key){
return keechma.toolbox.pipeline.core.run_pipeline_BANG_.call(null,pipeline_key,null);
});

keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pipeline_key,args){
return keechma.toolbox.pipeline.core.__GT_RunPipelineSideffect.call(null,pipeline_key,args);
});

keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$lang$maxFixedArity = 2;

keechma.toolbox.pipeline.core.process_error = (function keechma$toolbox$pipeline$core$process_error(err){
if((err instanceof keechma.toolbox.pipeline.core.Error)){
return err;
} else {
return keechma.toolbox.pipeline.core.__GT_Error.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,err,null);

}
});
keechma.toolbox.pipeline.core.is_promise_QMARK_ = (function keechma$toolbox$pipeline$core$is_promise_QMARK_(val){
return cljs.core._EQ_.call(null,promesa.impl.Promise,cljs.core.type.call(null,val));
});
keechma.toolbox.pipeline.core.promise__GT_chan = (function keechma$toolbox$pipeline$core$promise__GT_chan(promise){
var promise_chan = cljs.core.async.chan.call(null);
promesa.core.error.call(null,((function (promise_chan){
return (function (e){
return cljs.core.async.put_BANG_.call(null,promise_chan,keechma.toolbox.pipeline.core.process_error.call(null,e));
});})(promise_chan))
,promesa.core.map.call(null,((function (promise_chan){
return (function (v){
return cljs.core.async.put_BANG_.call(null,promise_chan,(((v == null))?new cljs.core.Keyword("keechma.toolbox.pipeline.core","nil","keechma.toolbox.pipeline.core/nil",-1518367909):v));
});})(promise_chan))
,promise));

return promise_chan;
});
keechma.toolbox.pipeline.core.pipeline_errors = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-sideffect","async-sideffect",-972592540),"Returning sideffects from promises is not permitted. It is possible that application state was modified in the meantime"], null);
keechma.toolbox.pipeline.core.action_ret_val = (function keechma$toolbox$pipeline$core$action_ret_val(action,ctrl,context,app_db_atom,value,error){
try{var ret = (((error == null))?action.call(null,value,cljs.core.deref.call(null,app_db_atom),context):action.call(null,value,cljs.core.deref.call(null,app_db_atom),context,error));
var ret_val = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(ret);
var ret_repr = new cljs.core.Keyword(null,"repr","repr",669525472).cljs$core$IFn$_invoke$arity$1(ret);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pipeline?","pipeline?",1488086785).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ret_val)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),ret_val.call(null,ctrl,app_db_atom,value),new cljs.core.Keyword(null,"promise?","promise?",-1924347409),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),ret_val,new cljs.core.Keyword(null,"repr","repr",669525472),ret_repr,new cljs.core.Keyword(null,"promise?","promise?",-1924347409),keechma.toolbox.pipeline.core.is_promise_QMARK_.call(null,ret_val)], null);
}
}catch (e42481){var err = e42481;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","pipeline-error","keechma.toolbox.pipeline.core/pipeline-error",446844314),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(err.data))){
throw err;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.pipeline.core.process_error.call(null,err),new cljs.core.Keyword(null,"promise?","promise?",-1924347409),false], null);
}
}});
keechma.toolbox.pipeline.core.extract_nil = (function keechma$toolbox$pipeline$core$extract_nil(value){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","nil","keechma.toolbox.pipeline.core/nil",-1518367909),value)){
return null;
} else {
return value;
}
});
keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_ = (function keechma$toolbox$pipeline$core$pending_and_cancelable_QMARK_(promise){
var and__30205__auto__ = promesa.core.pending_QMARK_.call(null,promise);
if(cljs.core.truth_(and__30205__auto__)){
return cljs.core.fn_QMARK_.call(null,promise.cancel);
} else {
return and__30205__auto__;
}
});
keechma.toolbox.pipeline.core.call_sideffect = (function keechma$toolbox$pipeline$core$call_sideffect(sideffect,ctrl,app_db_atom){
try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.pipeline.core.call_BANG_.call(null,sideffect,ctrl,app_db_atom),new cljs.core.Keyword(null,"error?","error?",-460689159),false], null);
}catch (e42482){var err = e42482;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),err,new cljs.core.Keyword(null,"error?","error?",-460689159),true], null);
}});
keechma.toolbox.pipeline.core.run_pipeline = (function keechma$toolbox$pipeline$core$run_pipeline(pipeline,ctrl,app_db_atom,value){
var map__42483 = pipeline;
var map__42483__$1 = ((((!((map__42483 == null)))?((((map__42483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42483):map__42483);
var begin = cljs.core.get.call(null,map__42483__$1,new cljs.core.Keyword(null,"begin","begin",-319034319));
var rescue = cljs.core.get.call(null,map__42483__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var current_promise = cljs.core.atom.call(null,null);
var context = keechma.controller.context.call(null,ctrl);
return promesa.core.promise.call(null,((function (map__42483,map__42483__$1,begin,rescue,current_promise,context){
return (function (resolve,reject,on_cancel){
if(cljs.core.fn_QMARK_.call(null,on_cancel)){
on_cancel.call(null,((function (map__42483,map__42483__$1,begin,rescue,current_promise,context){
return (function (){
var c = cljs.core.deref.call(null,current_promise);
if(cljs.core.truth_(keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_.call(null,c))){
return c.cancel();
} else {
return null;
}
});})(map__42483,map__42483__$1,begin,rescue,current_promise,context))
);
} else {
}

var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__,map__42483,map__42483__$1,begin,rescue,current_promise,context){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__,map__42483,map__42483__$1,begin,rescue,current_promise,context){
return (function (state_42691){
var state_val_42692 = (state_42691[(1)]);
if((state_val_42692 === (65))){
var inst_42624 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42624)){
var statearr_42693_42841 = state_42691__$1;
(statearr_42693_42841[(1)] = (66));

} else {
var statearr_42694_42842 = state_42691__$1;
(statearr_42694_42842[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (70))){
var state_42691__$1 = state_42691;
var statearr_42695_42843 = state_42691__$1;
(statearr_42695_42843[(2)] = null);

(statearr_42695_42843[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (62))){
var inst_42618 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42696_42844 = state_42691__$1;
(statearr_42696_42844[(2)] = inst_42618);

(statearr_42696_42844[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (74))){
var inst_42683 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42697_42845 = state_42691__$1;
(statearr_42697_42845[(2)] = inst_42683);

(statearr_42697_42845[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (7))){
var inst_42497 = (state_42691[(7)]);
var inst_42502 = inst_42497.cljs$lang$protocol_mask$partition0$;
var inst_42503 = (inst_42502 & (64));
var inst_42504 = inst_42497.cljs$core$ISeq$;
var inst_42505 = (cljs.core.PROTOCOL_SENTINEL === inst_42504);
var inst_42506 = (inst_42503) || (inst_42505);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42506)){
var statearr_42698_42846 = state_42691__$1;
(statearr_42698_42846[(1)] = (10));

} else {
var statearr_42699_42847 = state_42691__$1;
(statearr_42699_42847[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (59))){
var inst_42637 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42700_42848 = state_42691__$1;
(statearr_42700_42848[(2)] = inst_42637);

(statearr_42700_42848[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (86))){
var inst_42663 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42663)){
var statearr_42701_42849 = state_42691__$1;
(statearr_42701_42849[(1)] = (87));

} else {
var statearr_42702_42850 = state_42691__$1;
(statearr_42702_42850[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (20))){
var inst_42519 = (state_42691[(8)]);
var inst_42531 = inst_42519.cljs$lang$protocol_mask$partition$;
var inst_42532 = (!inst_42531);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42532)){
var statearr_42703_42851 = state_42691__$1;
(statearr_42703_42851[(1)] = (22));

} else {
var statearr_42704_42852 = state_42691__$1;
(statearr_42704_42852[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (72))){
var inst_42641 = resolve.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","break","keechma.toolbox.pipeline.core/break",-1503986725));
var state_42691__$1 = state_42691;
var statearr_42706_42853 = state_42691__$1;
(statearr_42706_42853[(2)] = inst_42641);

(statearr_42706_42853[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (58))){
var inst_42597 = (state_42691[(9)]);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42597)){
var statearr_42707_42854 = state_42691__$1;
(statearr_42707_42854[(1)] = (63));

} else {
var statearr_42708_42855 = state_42691__$1;
(statearr_42708_42855[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (60))){
var inst_42487 = (state_42691[(10)]);
var inst_42596 = (state_42691[(11)]);
var tmp42705 = inst_42487;
var inst_42485 = new cljs.core.Keyword(null,"rescue","rescue",1135767523);
var inst_42486 = rescue;
var inst_42487__$1 = tmp42705;
var inst_42488 = inst_42596;
var state_42691__$1 = (function (){var statearr_42709 = state_42691;
(statearr_42709[(10)] = inst_42487__$1);

(statearr_42709[(12)] = inst_42488);

(statearr_42709[(13)] = inst_42486);

(statearr_42709[(14)] = inst_42485);

return statearr_42709;
})();
var statearr_42710_42856 = state_42691__$1;
(statearr_42710_42856[(2)] = null);

(statearr_42710_42856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (27))){
var inst_42520 = (state_42691[(15)]);
var inst_42548 = (state_42691[(2)]);
var state_42691__$1 = (function (){var statearr_42714 = state_42691;
(statearr_42714[(16)] = inst_42548);

return statearr_42714;
})();
if(cljs.core.truth_(inst_42520)){
var statearr_42715_42857 = state_42691__$1;
(statearr_42715_42857[(1)] = (28));

} else {
var statearr_42716_42858 = state_42691__$1;
(statearr_42716_42858[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (1))){
var inst_42485 = new cljs.core.Keyword(null,"begin","begin",-319034319);
var inst_42486 = begin;
var inst_42487 = value;
var inst_42488 = null;
var state_42691__$1 = (function (){var statearr_42717 = state_42691;
(statearr_42717[(10)] = inst_42487);

(statearr_42717[(12)] = inst_42488);

(statearr_42717[(13)] = inst_42486);

(statearr_42717[(14)] = inst_42485);

return statearr_42717;
})();
var statearr_42718_42859 = state_42691__$1;
(statearr_42718_42859[(2)] = null);

(statearr_42718_42859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (69))){
var inst_42487 = (state_42691[(10)]);
var inst_42488 = (state_42691[(12)]);
var inst_42486 = (state_42691[(13)]);
var inst_42485 = (state_42691[(14)]);
var inst_42629 = cljs.core.rest.call(null,inst_42486);
var tmp42711 = inst_42487;
var tmp42712 = inst_42488;
var tmp42713 = inst_42485;
var inst_42485__$1 = tmp42713;
var inst_42486__$1 = inst_42629;
var inst_42487__$1 = tmp42711;
var inst_42488__$1 = tmp42712;
var state_42691__$1 = (function (){var statearr_42719 = state_42691;
(statearr_42719[(10)] = inst_42487__$1);

(statearr_42719[(12)] = inst_42488__$1);

(statearr_42719[(13)] = inst_42486__$1);

(statearr_42719[(14)] = inst_42485__$1);

return statearr_42719;
})();
var statearr_42720_42860 = state_42691__$1;
(statearr_42720_42860[(2)] = null);

(statearr_42720_42860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (24))){
var inst_42537 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42721_42861 = state_42691__$1;
(statearr_42721_42861[(2)] = inst_42537);

(statearr_42721_42861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (55))){
var inst_42597 = (state_42691[(9)]);
var state_42691__$1 = state_42691;
var statearr_42722_42862 = state_42691__$1;
(statearr_42722_42862[(2)] = inst_42597);

(statearr_42722_42862[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (85))){
var inst_42557 = (state_42691[(17)]);
var state_42691__$1 = state_42691;
var statearr_42723_42863 = state_42691__$1;
(statearr_42723_42863[(2)] = inst_42557);

(statearr_42723_42863[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (39))){
var inst_42556 = (state_42691[(18)]);
var inst_42639 = cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","break","keechma.toolbox.pipeline.core/break",-1503986725),inst_42556);
var state_42691__$1 = state_42691;
if(inst_42639){
var statearr_42724_42864 = state_42691__$1;
(statearr_42724_42864[(1)] = (72));

} else {
var statearr_42725_42865 = state_42691__$1;
(statearr_42725_42865[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (88))){
var state_42691__$1 = state_42691;
var statearr_42726_42866 = state_42691__$1;
(statearr_42726_42866[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (46))){
var inst_42587 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42728_42867 = state_42691__$1;
(statearr_42728_42867[(2)] = inst_42587);

(statearr_42728_42867[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (4))){
var inst_42487 = (state_42691[(10)]);
var inst_42493 = resolve.call(null,inst_42487);
var state_42691__$1 = state_42691;
var statearr_42731_42868 = state_42691__$1;
(statearr_42731_42868[(2)] = inst_42493);

(statearr_42731_42868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (77))){
var inst_42647 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42647)){
var statearr_42732_42869 = state_42691__$1;
(statearr_42732_42869[(1)] = (78));

} else {
var statearr_42733_42870 = state_42691__$1;
(statearr_42733_42870[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (95))){
var inst_42668 = (state_42691[(19)]);
var inst_42488 = (state_42691[(12)]);
var inst_42485 = (state_42691[(14)]);
var inst_42673 = (state_42691[(2)]);
var tmp42729 = inst_42488;
var tmp42730 = inst_42485;
var inst_42485__$1 = tmp42730;
var inst_42486 = inst_42668;
var inst_42487 = inst_42673;
var inst_42488__$1 = tmp42729;
var state_42691__$1 = (function (){var statearr_42734 = state_42691;
(statearr_42734[(10)] = inst_42487);

(statearr_42734[(12)] = inst_42488__$1);

(statearr_42734[(13)] = inst_42486);

(statearr_42734[(14)] = inst_42485__$1);

return statearr_42734;
})();
var statearr_42735_42871 = state_42691__$1;
(statearr_42735_42871[(2)] = null);

(statearr_42735_42871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (54))){
var inst_42485 = (state_42691[(14)]);
var inst_42607 = cljs.core._EQ_.call(null,inst_42485,new cljs.core.Keyword(null,"begin","begin",-319034319));
var state_42691__$1 = state_42691;
var statearr_42736_42872 = state_42691__$1;
(statearr_42736_42872[(2)] = inst_42607);

(statearr_42736_42872[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (92))){
var inst_42677 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42737_42873 = state_42691__$1;
(statearr_42737_42873[(2)] = inst_42677);

(statearr_42737_42873[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (15))){
var inst_42519 = (state_42691[(8)]);
var inst_42518 = (state_42691[(2)]);
var inst_42519__$1 = cljs.core.get.call(null,inst_42518,new cljs.core.Keyword(null,"value","value",305978217));
var inst_42520 = cljs.core.get.call(null,inst_42518,new cljs.core.Keyword(null,"promise?","promise?",-1924347409));
var inst_42521 = cljs.core.get.call(null,inst_42518,new cljs.core.Keyword(null,"repr","repr",669525472));
var inst_42523 = (inst_42519__$1 == null);
var inst_42524 = cljs.core.not.call(null,inst_42523);
var state_42691__$1 = (function (){var statearr_42738 = state_42691;
(statearr_42738[(20)] = inst_42521);

(statearr_42738[(15)] = inst_42520);

(statearr_42738[(8)] = inst_42519__$1);

return statearr_42738;
})();
if(inst_42524){
var statearr_42739_42874 = state_42691__$1;
(statearr_42739_42874[(1)] = (16));

} else {
var statearr_42740_42875 = state_42691__$1;
(statearr_42740_42875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (48))){
var inst_42574 = (state_42691[(21)]);
var state_42691__$1 = state_42691;
var statearr_42741_42876 = state_42691__$1;
(statearr_42741_42876[(2)] = inst_42574);

(statearr_42741_42876[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (50))){
var inst_42596 = (state_42691[(11)]);
var inst_42600 = keechma.toolbox.pipeline.core.promise__GT_chan.call(null,inst_42596);
var state_42691__$1 = state_42691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42691__$1,(53),inst_42600);
} else {
if((state_val_42692 === (75))){
var inst_42485 = (state_42691[(14)]);
var inst_42644 = cljs.core._EQ_.call(null,inst_42485,new cljs.core.Keyword(null,"begin","begin",-319034319));
var state_42691__$1 = state_42691;
var statearr_42742_42877 = state_42691__$1;
(statearr_42742_42877[(2)] = inst_42644);

(statearr_42742_42877[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (21))){
var inst_42539 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42743_42878 = state_42691__$1;
(statearr_42743_42878[(2)] = inst_42539);

(statearr_42743_42878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (31))){
var inst_42552 = (state_42691[(2)]);
var inst_42553 = keechma.toolbox.pipeline.core.extract_nil.call(null,inst_42552);
var state_42691__$1 = state_42691;
var statearr_42744_42879 = state_42691__$1;
(statearr_42744_42879[(2)] = inst_42553);

(statearr_42744_42879[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (32))){
var inst_42543 = (state_42691[(22)]);
var state_42691__$1 = state_42691;
var statearr_42745_42880 = state_42691__$1;
(statearr_42745_42880[(2)] = inst_42543);

(statearr_42745_42880[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (40))){
var inst_42685 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42746_42881 = state_42691__$1;
(statearr_42746_42881[(2)] = inst_42685);

(statearr_42746_42881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (91))){
var state_42691__$1 = state_42691;
var statearr_42747_42882 = state_42691__$1;
(statearr_42747_42882[(2)] = null);

(statearr_42747_42882[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (56))){
var inst_42610 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42610)){
var statearr_42748_42883 = state_42691__$1;
(statearr_42748_42883[(1)] = (57));

} else {
var statearr_42749_42884 = state_42691__$1;
(statearr_42749_42884[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (33))){
var inst_42520 = (state_42691[(15)]);
var state_42691__$1 = state_42691;
var statearr_42750_42885 = state_42691__$1;
(statearr_42750_42885[(2)] = inst_42520);

(statearr_42750_42885[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (13))){
var inst_42497 = (state_42691[(7)]);
var inst_42515 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42497);
var state_42691__$1 = state_42691;
var statearr_42751_42886 = state_42691__$1;
(statearr_42751_42886[(2)] = inst_42515);

(statearr_42751_42886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (22))){
var inst_42519 = (state_42691[(8)]);
var inst_42534 = cljs.core.native_satisfies_QMARK_.call(null,keechma.toolbox.pipeline.core.ISideffect,inst_42519);
var state_42691__$1 = state_42691;
var statearr_42752_42887 = state_42691__$1;
(statearr_42752_42887[(2)] = inst_42534);

(statearr_42752_42887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (90))){
var inst_42556 = (state_42691[(18)]);
var inst_42486 = (state_42691[(13)]);
var inst_42668 = cljs.core.rest.call(null,inst_42486);
var inst_42669 = (inst_42556 == null);
var state_42691__$1 = (function (){var statearr_42753 = state_42691;
(statearr_42753[(19)] = inst_42668);

return statearr_42753;
})();
if(cljs.core.truth_(inst_42669)){
var statearr_42754_42888 = state_42691__$1;
(statearr_42754_42888[(1)] = (93));

} else {
var statearr_42755_42889 = state_42691__$1;
(statearr_42755_42889[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (36))){
var state_42691__$1 = state_42691;
var statearr_42756_42890 = state_42691__$1;
(statearr_42756_42890[(2)] = null);

(statearr_42756_42890[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (41))){
var inst_42574 = (state_42691[(21)]);
var inst_42579 = inst_42574.cljs$lang$protocol_mask$partition0$;
var inst_42580 = (inst_42579 & (64));
var inst_42581 = inst_42574.cljs$core$ISeq$;
var inst_42582 = (cljs.core.PROTOCOL_SENTINEL === inst_42581);
var inst_42583 = (inst_42580) || (inst_42582);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42583)){
var statearr_42757_42891 = state_42691__$1;
(statearr_42757_42891[(1)] = (44));

} else {
var statearr_42758_42892 = state_42691__$1;
(statearr_42758_42892[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (89))){
var inst_42679 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42759_42893 = state_42691__$1;
(statearr_42759_42893[(2)] = inst_42679);

(statearr_42759_42893[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (43))){
var inst_42590 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42590)){
var statearr_42760_42894 = state_42691__$1;
(statearr_42760_42894[(1)] = (47));

} else {
var statearr_42761_42895 = state_42691__$1;
(statearr_42761_42895[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (61))){
var inst_42596 = (state_42691[(11)]);
var inst_42616 = reject.call(null,inst_42596);
var state_42691__$1 = state_42691;
var statearr_42762_42896 = state_42691__$1;
(statearr_42762_42896[(2)] = inst_42616);

(statearr_42762_42896[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (29))){
var inst_42519 = (state_42691[(8)]);
var state_42691__$1 = state_42691;
var statearr_42763_42897 = state_42691__$1;
(statearr_42763_42897[(2)] = inst_42519);

(statearr_42763_42897[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (44))){
var state_42691__$1 = state_42691;
var statearr_42764_42898 = state_42691__$1;
(statearr_42764_42898[(2)] = true);

(statearr_42764_42898[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (93))){
var inst_42487 = (state_42691[(10)]);
var state_42691__$1 = state_42691;
var statearr_42765_42899 = state_42691__$1;
(statearr_42765_42899[(2)] = inst_42487);

(statearr_42765_42899[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (6))){
var inst_42687 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42766_42900 = state_42691__$1;
(statearr_42766_42900[(2)] = inst_42687);

(statearr_42766_42900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (28))){
var inst_42519 = (state_42691[(8)]);
var inst_42550 = keechma.toolbox.pipeline.core.promise__GT_chan.call(null,inst_42519);
var state_42691__$1 = state_42691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42691__$1,(31),inst_42550);
} else {
if((state_val_42692 === (64))){
var inst_42597 = (state_42691[(9)]);
var state_42691__$1 = state_42691;
var statearr_42767_42901 = state_42691__$1;
(statearr_42767_42901[(2)] = inst_42597);

(statearr_42767_42901[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (51))){
var inst_42596 = (state_42691[(11)]);
var state_42691__$1 = state_42691;
var statearr_42768_42902 = state_42691__$1;
(statearr_42768_42902[(2)] = inst_42596);

(statearr_42768_42902[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (25))){
var inst_42519 = (state_42691[(8)]);
var inst_42545 = cljs.core.reset_BANG_.call(null,current_promise,inst_42519);
var state_42691__$1 = state_42691;
var statearr_42769_42903 = state_42691__$1;
(statearr_42769_42903[(2)] = inst_42545);

(statearr_42769_42903[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (34))){
var inst_42561 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42561)){
var statearr_42770_42904 = state_42691__$1;
(statearr_42770_42904[(1)] = (35));

} else {
var statearr_42771_42905 = state_42691__$1;
(statearr_42771_42905[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (17))){
var inst_42519 = (state_42691[(8)]);
var inst_42541 = cljs.core.native_satisfies_QMARK_.call(null,keechma.toolbox.pipeline.core.ISideffect,inst_42519);
var state_42691__$1 = state_42691;
var statearr_42772_42906 = state_42691__$1;
(statearr_42772_42906[(2)] = inst_42541);

(statearr_42772_42906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (3))){
var inst_42689 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42691__$1,inst_42689);
} else {
if((state_val_42692 === (12))){
var inst_42510 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42773_42907 = state_42691__$1;
(statearr_42773_42907[(2)] = inst_42510);

(statearr_42773_42907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (2))){
var inst_42486 = (state_42691[(13)]);
var inst_42490 = cljs.core.seq.call(null,inst_42486);
var inst_42491 = cljs.core.not.call(null,inst_42490);
var state_42691__$1 = state_42691;
if(inst_42491){
var statearr_42774_42908 = state_42691__$1;
(statearr_42774_42908[(1)] = (4));

} else {
var statearr_42775_42909 = state_42691__$1;
(statearr_42775_42909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (66))){
var inst_42596 = (state_42691[(11)]);
var inst_42626 = reject.call(null,inst_42596);
var state_42691__$1 = state_42691;
var statearr_42776_42910 = state_42691__$1;
(statearr_42776_42910[(2)] = inst_42626);

(statearr_42776_42910[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (23))){
var state_42691__$1 = state_42691;
var statearr_42777_42911 = state_42691__$1;
(statearr_42777_42911[(2)] = false);

(statearr_42777_42911[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (47))){
var inst_42574 = (state_42691[(21)]);
var inst_42592 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42574);
var state_42691__$1 = state_42691;
var statearr_42778_42912 = state_42691__$1;
(statearr_42778_42912[(2)] = inst_42592);

(statearr_42778_42912[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (35))){
var inst_42563 = new cljs.core.Keyword(null,"async-sideffect","async-sideffect",-972592540).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.pipeline.core.pipeline_errors);
var inst_42564 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_42565 = [new cljs.core.Keyword("keechma.toolbox.pipeline.core","pipeline-error","keechma.toolbox.pipeline.core/pipeline-error",446844314)];
var inst_42566 = cljs.core.PersistentHashMap.fromArrays(inst_42564,inst_42565);
var inst_42567 = cljs.core.ex_info.call(null,inst_42563,inst_42566);
var inst_42568 = (function(){throw inst_42567})();
var state_42691__$1 = state_42691;
var statearr_42779_42913 = state_42691__$1;
(statearr_42779_42913[(2)] = inst_42568);

(statearr_42779_42913[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (82))){
var inst_42556 = (state_42691[(18)]);
var inst_42653 = reject.call(null,inst_42556);
var state_42691__$1 = state_42691;
var statearr_42780_42914 = state_42691__$1;
(statearr_42780_42914[(2)] = inst_42653);

(statearr_42780_42914[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (76))){
var inst_42557 = (state_42691[(17)]);
var state_42691__$1 = state_42691;
var statearr_42781_42915 = state_42691__$1;
(statearr_42781_42915[(2)] = inst_42557);

(statearr_42781_42915[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (19))){
var state_42691__$1 = state_42691;
var statearr_42782_42916 = state_42691__$1;
(statearr_42782_42916[(2)] = true);

(statearr_42782_42916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (57))){
var inst_42612 = cljs.core.seq.call(null,rescue);
var state_42691__$1 = state_42691;
if(inst_42612){
var statearr_42783_42917 = state_42691__$1;
(statearr_42783_42917[(1)] = (60));

} else {
var statearr_42784_42918 = state_42691__$1;
(statearr_42784_42918[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (68))){
var inst_42635 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42785_42919 = state_42691__$1;
(statearr_42785_42919[(2)] = inst_42635);

(statearr_42785_42919[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (11))){
var state_42691__$1 = state_42691;
var statearr_42786_42920 = state_42691__$1;
(statearr_42786_42920[(2)] = false);

(statearr_42786_42920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (9))){
var inst_42513 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42513)){
var statearr_42787_42921 = state_42691__$1;
(statearr_42787_42921[(1)] = (13));

} else {
var statearr_42788_42922 = state_42691__$1;
(statearr_42788_42922[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (5))){
var inst_42487 = (state_42691[(10)]);
var inst_42488 = (state_42691[(12)]);
var inst_42486 = (state_42691[(13)]);
var inst_42497 = (state_42691[(7)]);
var inst_42496 = cljs.core.first.call(null,inst_42486);
var inst_42497__$1 = keechma.toolbox.pipeline.core.action_ret_val.call(null,inst_42496,ctrl,context,app_db_atom,inst_42487,inst_42488);
var inst_42499 = (inst_42497__$1 == null);
var inst_42500 = cljs.core.not.call(null,inst_42499);
var state_42691__$1 = (function (){var statearr_42789 = state_42691;
(statearr_42789[(7)] = inst_42497__$1);

return statearr_42789;
})();
if(inst_42500){
var statearr_42790_42923 = state_42691__$1;
(statearr_42790_42923[(1)] = (7));

} else {
var statearr_42791_42924 = state_42691__$1;
(statearr_42791_42924[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (83))){
var inst_42655 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42792_42925 = state_42691__$1;
(statearr_42792_42925[(2)] = inst_42655);

(statearr_42792_42925[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (14))){
var inst_42497 = (state_42691[(7)]);
var state_42691__$1 = state_42691;
var statearr_42793_42926 = state_42691__$1;
(statearr_42793_42926[(2)] = inst_42497);

(statearr_42793_42926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (45))){
var state_42691__$1 = state_42691;
var statearr_42794_42927 = state_42691__$1;
(statearr_42794_42927[(2)] = false);

(statearr_42794_42927[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (53))){
var inst_42602 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42795_42928 = state_42691__$1;
(statearr_42795_42928[(2)] = inst_42602);

(statearr_42795_42928[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (78))){
var inst_42649 = cljs.core.seq.call(null,rescue);
var state_42691__$1 = state_42691;
if(inst_42649){
var statearr_42796_42929 = state_42691__$1;
(statearr_42796_42929[(1)] = (81));

} else {
var statearr_42797_42930 = state_42691__$1;
(statearr_42797_42930[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (26))){
var state_42691__$1 = state_42691;
var statearr_42799_42931 = state_42691__$1;
(statearr_42799_42931[(2)] = null);

(statearr_42799_42931[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (16))){
var inst_42519 = (state_42691[(8)]);
var inst_42526 = inst_42519.keechma$toolbox$pipeline$core$ISideffect$;
var inst_42527 = (cljs.core.PROTOCOL_SENTINEL === inst_42526);
var inst_42528 = (false) || (inst_42527);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42528)){
var statearr_42800_42932 = state_42691__$1;
(statearr_42800_42932[(1)] = (19));

} else {
var statearr_42801_42933 = state_42691__$1;
(statearr_42801_42933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (81))){
var inst_42556 = (state_42691[(18)]);
var inst_42487 = (state_42691[(10)]);
var tmp42798 = inst_42487;
var inst_42485 = new cljs.core.Keyword(null,"rescue","rescue",1135767523);
var inst_42486 = rescue;
var inst_42487__$1 = tmp42798;
var inst_42488 = inst_42556;
var state_42691__$1 = (function (){var statearr_42802 = state_42691;
(statearr_42802[(10)] = inst_42487__$1);

(statearr_42802[(12)] = inst_42488);

(statearr_42802[(13)] = inst_42486);

(statearr_42802[(14)] = inst_42485);

return statearr_42802;
})();
var statearr_42803_42934 = state_42691__$1;
(statearr_42803_42934[(2)] = null);

(statearr_42803_42934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (79))){
var inst_42557 = (state_42691[(17)]);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42557)){
var statearr_42804_42935 = state_42691__$1;
(statearr_42804_42935[(1)] = (84));

} else {
var statearr_42805_42936 = state_42691__$1;
(statearr_42805_42936[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (38))){
var inst_42556 = (state_42691[(18)]);
var inst_42574 = (state_42691[(21)]);
var inst_42574__$1 = keechma.toolbox.pipeline.core.call_sideffect.call(null,inst_42556,ctrl,app_db_atom);
var inst_42576 = (inst_42574__$1 == null);
var inst_42577 = cljs.core.not.call(null,inst_42576);
var state_42691__$1 = (function (){var statearr_42806 = state_42691;
(statearr_42806[(21)] = inst_42574__$1);

return statearr_42806;
})();
if(inst_42577){
var statearr_42807_42937 = state_42691__$1;
(statearr_42807_42937[(1)] = (41));

} else {
var statearr_42808_42938 = state_42691__$1;
(statearr_42808_42938[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (87))){
var inst_42488 = (state_42691[(12)]);
var inst_42665 = reject.call(null,inst_42488);
var state_42691__$1 = state_42691;
var statearr_42809_42939 = state_42691__$1;
(statearr_42809_42939[(2)] = inst_42665);

(statearr_42809_42939[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (30))){
var inst_42556 = (state_42691[(18)]);
var inst_42520 = (state_42691[(15)]);
var inst_42556__$1 = (state_42691[(2)]);
var inst_42557 = (inst_42556__$1 instanceof keechma.toolbox.pipeline.core.Error);
var state_42691__$1 = (function (){var statearr_42810 = state_42691;
(statearr_42810[(18)] = inst_42556__$1);

(statearr_42810[(17)] = inst_42557);

return statearr_42810;
})();
if(cljs.core.truth_(inst_42520)){
var statearr_42811_42940 = state_42691__$1;
(statearr_42811_42940[(1)] = (32));

} else {
var statearr_42812_42941 = state_42691__$1;
(statearr_42812_42941[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (73))){
var inst_42557 = (state_42691[(17)]);
var state_42691__$1 = state_42691;
if(cljs.core.truth_(inst_42557)){
var statearr_42813_42942 = state_42691__$1;
(statearr_42813_42942[(1)] = (75));

} else {
var statearr_42814_42943 = state_42691__$1;
(statearr_42814_42943[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (10))){
var state_42691__$1 = state_42691;
var statearr_42815_42944 = state_42691__$1;
(statearr_42815_42944[(2)] = true);

(statearr_42815_42944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (18))){
var inst_42520 = (state_42691[(15)]);
var inst_42543 = (state_42691[(2)]);
var state_42691__$1 = (function (){var statearr_42816 = state_42691;
(statearr_42816[(22)] = inst_42543);

return statearr_42816;
})();
if(cljs.core.truth_(inst_42520)){
var statearr_42817_42945 = state_42691__$1;
(statearr_42817_42945[(1)] = (25));

} else {
var statearr_42818_42946 = state_42691__$1;
(statearr_42818_42946[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (52))){
var inst_42597 = (state_42691[(9)]);
var inst_42605 = (state_42691[(2)]);
var state_42691__$1 = (function (){var statearr_42819 = state_42691;
(statearr_42819[(23)] = inst_42605);

return statearr_42819;
})();
if(cljs.core.truth_(inst_42597)){
var statearr_42820_42947 = state_42691__$1;
(statearr_42820_42947[(1)] = (54));

} else {
var statearr_42821_42948 = state_42691__$1;
(statearr_42821_42948[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (67))){
var state_42691__$1 = state_42691;
var statearr_42822_42949 = state_42691__$1;
(statearr_42822_42949[(1)] = (69));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (71))){
var inst_42633 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42824_42950 = state_42691__$1;
(statearr_42824_42950[(2)] = inst_42633);

(statearr_42824_42950[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (42))){
var state_42691__$1 = state_42691;
var statearr_42825_42951 = state_42691__$1;
(statearr_42825_42951[(2)] = false);

(statearr_42825_42951[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (80))){
var inst_42681 = (state_42691[(2)]);
var state_42691__$1 = state_42691;
var statearr_42826_42952 = state_42691__$1;
(statearr_42826_42952[(2)] = inst_42681);

(statearr_42826_42952[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (37))){
var inst_42543 = (state_42691[(22)]);
var inst_42571 = (state_42691[(2)]);
var state_42691__$1 = (function (){var statearr_42827 = state_42691;
(statearr_42827[(24)] = inst_42571);

return statearr_42827;
})();
if(cljs.core.truth_(inst_42543)){
var statearr_42828_42953 = state_42691__$1;
(statearr_42828_42953[(1)] = (38));

} else {
var statearr_42829_42954 = state_42691__$1;
(statearr_42829_42954[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (63))){
var inst_42485 = (state_42691[(14)]);
var inst_42621 = cljs.core._EQ_.call(null,inst_42485,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var state_42691__$1 = state_42691;
var statearr_42830_42955 = state_42691__$1;
(statearr_42830_42955[(2)] = inst_42621);

(statearr_42830_42955[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (94))){
var inst_42556 = (state_42691[(18)]);
var state_42691__$1 = state_42691;
var statearr_42831_42956 = state_42691__$1;
(statearr_42831_42956[(2)] = inst_42556);

(statearr_42831_42956[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (8))){
var state_42691__$1 = state_42691;
var statearr_42832_42957 = state_42691__$1;
(statearr_42832_42957[(2)] = false);

(statearr_42832_42957[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (49))){
var inst_42596 = (state_42691[(11)]);
var inst_42595 = (state_42691[(2)]);
var inst_42596__$1 = cljs.core.get.call(null,inst_42595,new cljs.core.Keyword(null,"value","value",305978217));
var inst_42597 = cljs.core.get.call(null,inst_42595,new cljs.core.Keyword(null,"error?","error?",-460689159));
var inst_42598 = keechma.toolbox.pipeline.core.is_promise_QMARK_.call(null,inst_42596__$1);
var state_42691__$1 = (function (){var statearr_42833 = state_42691;
(statearr_42833[(9)] = inst_42597);

(statearr_42833[(11)] = inst_42596__$1);

return statearr_42833;
})();
if(cljs.core.truth_(inst_42598)){
var statearr_42834_42958 = state_42691__$1;
(statearr_42834_42958[(1)] = (50));

} else {
var statearr_42835_42959 = state_42691__$1;
(statearr_42835_42959[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42692 === (84))){
var inst_42556 = (state_42691[(18)]);
var inst_42488 = (state_42691[(12)]);
var inst_42485 = (state_42691[(14)]);
var inst_42658 = cljs.core._EQ_.call(null,inst_42485,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var inst_42659 = cljs.core.not_EQ_.call(null,inst_42488,inst_42556);
var inst_42660 = (inst_42658) && (inst_42659);
var state_42691__$1 = state_42691;
var statearr_42836_42960 = state_42691__$1;
(statearr_42836_42960[(2)] = inst_42660);

(statearr_42836_42960[(1)] = (86));


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
});})(c__33899__auto__,map__42483,map__42483__$1,begin,rescue,current_promise,context))
;
return ((function (switch__33809__auto__,c__33899__auto__,map__42483,map__42483__$1,begin,rescue,current_promise,context){
return (function() {
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto__ = null;
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto____0 = (function (){
var statearr_42837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42837[(0)] = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto__);

(statearr_42837[(1)] = (1));

return statearr_42837;
});
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto____1 = (function (state_42691){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_42691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e42838){if((e42838 instanceof Object)){
var ex__33813__auto__ = e42838;
var statearr_42839_42961 = state_42691;
(statearr_42839_42961[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42962 = state_42691;
state_42691 = G__42962;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto__ = function(state_42691){
switch(arguments.length){
case 0:
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto____0.call(this);
case 1:
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto____1.call(this,state_42691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto____0;
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto____1;
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__,map__42483,map__42483__$1,begin,rescue,current_promise,context))
})();
var state__33901__auto__ = (function (){var statearr_42840 = f__33900__auto__.call(null);
(statearr_42840[(6)] = c__33899__auto__);

return statearr_42840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__,map__42483,map__42483__$1,begin,rescue,current_promise,context))
);

return c__33899__auto__;
});})(map__42483,map__42483__$1,begin,rescue,current_promise,context))
);
});
keechma.toolbox.pipeline.core.make_pipeline = (function keechma$toolbox$pipeline$core$make_pipeline(pipeline){
return cljs.core.with_meta.call(null,cljs.core.partial.call(null,keechma.toolbox.pipeline.core.run_pipeline,pipeline),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pipeline?","pipeline?",1488086785),true], null));
});
keechma.toolbox.pipeline.core.exclusive = (function keechma$toolbox$pipeline$core$exclusive(pipeline){
var current = cljs.core.atom.call(null,null);
return ((function (current){
return (function (ctrl,app_db_atom,value){
var temp__5457__auto___42963 = cljs.core.deref.call(null,current);
if(cljs.core.truth_(temp__5457__auto___42963)){
var c_42964 = temp__5457__auto___42963;
if(cljs.core.truth_(keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_.call(null,c_42964))){
c_42964.cancel();
} else {
}
} else {
}

return cljs.core.reset_BANG_.call(null,current,pipeline.call(null,ctrl,app_db_atom,value));
});
;})(current))
});

//# sourceMappingURL=core.js.map?rel=1515669759116
