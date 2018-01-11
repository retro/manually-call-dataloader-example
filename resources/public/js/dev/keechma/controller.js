// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.controller');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('keechma.reporter');
keechma.controller.not_implemented = new cljs.core.Keyword("keechma.controller","not-implemented","keechma.controller/not-implemented",1337990552);
/**
 * Helper function to dispatch commands from the `handler` function.
 * 
 *   Most of the time, handler function will just dispatch the commands
 *   to other functions. This functions provides a shortcut for that case.
 * 
 *   ```clojure
 *   (defrecord Controller []
 *  IController
 *  (handler [_ app-db-atom in-chan _]
 *    (dispatcher app-db-atom in-chan {:command-name some-fn})))
 *   ```
 */
keechma.controller.dispatcher = (function keechma$controller$dispatcher(app_db_atom,in_chan,actions){
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__){
return (function (state_40242){
var state_val_40243 = (state_40242[(1)]);
if((state_val_40243 === (7))){
var inst_40226 = (state_40242[(7)]);
var inst_40233 = (state_40242[(2)]);
var state_40242__$1 = (function (){var statearr_40244 = state_40242;
(statearr_40244[(8)] = inst_40233);

return statearr_40244;
})();
if(cljs.core.truth_(inst_40226)){
var statearr_40245_40260 = state_40242__$1;
(statearr_40245_40260[(1)] = (8));

} else {
var statearr_40246_40261 = state_40242__$1;
(statearr_40246_40261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (1))){
var state_40242__$1 = state_40242;
var statearr_40247_40262 = state_40242__$1;
(statearr_40247_40262[(2)] = null);

(statearr_40247_40262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (4))){
var inst_40228 = (state_40242[(9)]);
var inst_40226 = (state_40242[(7)]);
var inst_40225 = (state_40242[(2)]);
var inst_40226__$1 = cljs.core.nth.call(null,inst_40225,(0),null);
var inst_40227 = cljs.core.nth.call(null,inst_40225,(1),null);
var inst_40228__$1 = cljs.core.get.call(null,actions,inst_40226__$1);
var state_40242__$1 = (function (){var statearr_40248 = state_40242;
(statearr_40248[(10)] = inst_40227);

(statearr_40248[(9)] = inst_40228__$1);

(statearr_40248[(7)] = inst_40226__$1);

return statearr_40248;
})();
if(cljs.core.truth_(inst_40228__$1)){
var statearr_40249_40263 = state_40242__$1;
(statearr_40249_40263[(1)] = (5));

} else {
var statearr_40250_40264 = state_40242__$1;
(statearr_40250_40264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (6))){
var state_40242__$1 = state_40242;
var statearr_40251_40265 = state_40242__$1;
(statearr_40251_40265[(2)] = null);

(statearr_40251_40265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (3))){
var inst_40240 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40242__$1,inst_40240);
} else {
if((state_val_40243 === (2))){
var state_40242__$1 = state_40242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40242__$1,(4),in_chan);
} else {
if((state_val_40243 === (9))){
var state_40242__$1 = state_40242;
var statearr_40252_40266 = state_40242__$1;
(statearr_40252_40266[(2)] = null);

(statearr_40252_40266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (5))){
var inst_40227 = (state_40242[(10)]);
var inst_40228 = (state_40242[(9)]);
var inst_40230 = inst_40228.call(null,app_db_atom,inst_40227);
var state_40242__$1 = state_40242;
var statearr_40253_40267 = state_40242__$1;
(statearr_40253_40267[(2)] = inst_40230);

(statearr_40253_40267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (10))){
var inst_40238 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40254_40268 = state_40242__$1;
(statearr_40254_40268[(2)] = inst_40238);

(statearr_40254_40268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (8))){
var state_40242__$1 = state_40242;
var statearr_40255_40269 = state_40242__$1;
(statearr_40255_40269[(2)] = null);

(statearr_40255_40269[(1)] = (2));


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
});})(c__33899__auto__))
;
return ((function (switch__33809__auto__,c__33899__auto__){
return (function() {
var keechma$controller$dispatcher_$_state_machine__33810__auto__ = null;
var keechma$controller$dispatcher_$_state_machine__33810__auto____0 = (function (){
var statearr_40256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40256[(0)] = keechma$controller$dispatcher_$_state_machine__33810__auto__);

(statearr_40256[(1)] = (1));

return statearr_40256;
});
var keechma$controller$dispatcher_$_state_machine__33810__auto____1 = (function (state_40242){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_40242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e40257){if((e40257 instanceof Object)){
var ex__33813__auto__ = e40257;
var statearr_40258_40270 = state_40242;
(statearr_40258_40270[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40271 = state_40242;
state_40242 = G__40271;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
keechma$controller$dispatcher_$_state_machine__33810__auto__ = function(state_40242){
switch(arguments.length){
case 0:
return keechma$controller$dispatcher_$_state_machine__33810__auto____0.call(this);
case 1:
return keechma$controller$dispatcher_$_state_machine__33810__auto____1.call(this,state_40242);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller$dispatcher_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller$dispatcher_$_state_machine__33810__auto____0;
keechma$controller$dispatcher_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller$dispatcher_$_state_machine__33810__auto____1;
return keechma$controller$dispatcher_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__))
})();
var state__33901__auto__ = (function (){var statearr_40259 = f__33900__auto__.call(null);
(statearr_40259[(6)] = c__33899__auto__);

return statearr_40259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__))
);

return c__33899__auto__;
});

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
keechma.controller.SerializedController = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k40273,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__40277 = k40273;
var G__40277__$1 = (((G__40277 instanceof cljs.core.Keyword))?G__40277.fqn:null);
switch (G__40277__$1) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40273,else__30908__auto__);

}
});

keechma.controller.SerializedController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.controller.SerializedController{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40272){
var self__ = this;
var G__40272__$1 = this;
return (new cljs.core.RecordIter((0),G__40272__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.controller.SerializedController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.controller.SerializedController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (2020583419 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.controller.SerializedController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40274,other40275){
var self__ = this;
var this40274__$1 = this;
return (!((other40275 == null))) && ((this40274__$1.constructor === other40275.constructor)) && (cljs.core._EQ_.call(null,this40274__$1.params,other40275.params)) && (cljs.core._EQ_.call(null,this40274__$1.__extmap,other40275.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__40272){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__40278 = cljs.core.keyword_identical_QMARK_;
var expr__40279 = k__30913__auto__;
if(cljs.core.truth_(pred__40278.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__40279))){
return (new keechma.controller.SerializedController(G__40272,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__40272),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__40272){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,G__40272,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.controller.SerializedController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
});

keechma.controller.SerializedController.cljs$lang$type = true;

keechma.controller.SerializedController.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.controller/SerializedController");
});

keechma.controller.SerializedController.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.controller/SerializedController");
});

keechma.controller.__GT_SerializedController = (function keechma$controller$__GT_SerializedController(params){
return (new keechma.controller.SerializedController(params,null,null,null));
});

keechma.controller.map__GT_SerializedController = (function keechma$controller$map__GT_SerializedController(G__40276){
return (new keechma.controller.SerializedController(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__40276),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__40276,new cljs.core.Keyword(null,"params","params",710516235))),null));
});

keechma.controller.record_type = (function keechma$controller$record_type(var_args){
var args__31503__auto__ = [];
var len__31496__auto___40284 = arguments.length;
var i__31497__auto___40285 = (0);
while(true){
if((i__31497__auto___40285 < len__31496__auto___40284)){
args__31503__auto__.push((arguments[i__31497__auto___40285]));

var G__40286 = (i__31497__auto___40285 + (1));
i__31497__auto___40285 = G__40286;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((1) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((1)),(0),null)):null);
return keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31504__auto__);
});

keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic = (function (record,args){
return cljs.core.type.call(null,record);
});

keechma.controller.record_type.cljs$lang$maxFixedArity = (1);

keechma.controller.record_type.cljs$lang$applyTo = (function (seq40282){
var G__40283 = cljs.core.first.call(null,seq40282);
var seq40282__$1 = cljs.core.next.call(null,seq40282);
return keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic(G__40283,seq40282__$1);
});

if(typeof keechma.controller.params !== 'undefined'){
} else {
/**
 * Receives the `route-params` and returns either the `params` for the controller or `nil`
 */
keechma.controller.params = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","params"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.start !== 'undefined'){
} else {
/**
 * Called when the controller is started. Receives the controller `params` (returned by the
 *   `params` function) and the application state. It must return the application state.
 */
keechma.controller.start = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","start"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.wake !== 'undefined'){
} else {
/**
 * Called when the controller is started from the saved state stored on the server. It will be
 * called instead of the `start` function if the `ssr-handler` function is implemented. This
 * allows you to manually revive the serialized data if needed. Usually this function is not
 * needed, but if you for instance start the inner application from the controller, you can
 * use this function to wake the inner app.
 */
keechma.controller.wake = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","wake"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.stop !== 'undefined'){
} else {
/**
 * Called when the controller is stopped. Receives the controller `params` (returned by the
 *   `params` function) and the application state. It must return the application state.
 */
keechma.controller.stop = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","stop"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.handler !== 'undefined'){
} else {
/**
 * Called after the `start` function. You can listen to the commands on the `in-chan` 
 *   inside the `go` block. This is the function in which you implement anything that reacts
 *   to the user commands (coming from the UI).
 */
keechma.controller.handler = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","handler"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.ssr_handler !== 'undefined'){
} else {
/**
 * Called in after the `start` (instead of the `handler` function) function in the server
 *   side context. This function should call the `done` callback when it has completed the 
 *   server side data loading. Returning `::not-implemented` which is a default behavior will
 *   mark the controller as non server side.
 */
keechma.controller.ssr_handler = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","ssr-handler"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.context !== 'undefined'){
} else {
/**
 * Return the context passed to the application.
 */
keechma.controller.context = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","context"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.report !== 'undefined'){
} else {
keechma.controller.report = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","report"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.execute !== 'undefined'){
} else {
/**
 * Puts the command on the controller's `in-chan` which is passed as an argument to the 
 *   `handler` function. Can be called from the `start` and `stop` functions.
 */
keechma.controller.execute = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","execute"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.send_command !== 'undefined'){
} else {
/**
 * Sends a command to another controller
 */
keechma.controller.send_command = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","send-command"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.is_running_QMARK_ !== 'undefined'){
} else {
/**
 * Returns `true` if this controller is still running. You can use this if you have some
 *   kind of async action, and you want to make sure that the controller is still running 
 *   when you receive the results.
 */
keechma.controller.is_running_QMARK_ = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","is-running?"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
if(typeof keechma.controller.redirect !== 'undefined'){
} else {
/**
 * Redirects the page to the URL based on the params.
 */
keechma.controller.redirect = (function (){var method_table__31272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31275__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31276__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","redirect"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31276__auto__,method_table__31272__auto__,prefer_table__31273__auto__,method_cache__31274__auto__,cached_hierarchy__31275__auto__));
})();
}
cljs.core._add_method.call(null,keechma.controller.params,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,route_params){
return route_params;
}));
cljs.core._add_method.call(null,keechma.controller.start,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.wake,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.stop,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,app_db_atom,in_chan,out_chan){
return null;
}));
cljs.core._add_method.call(null,keechma.controller.ssr_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,app_db_atom,done,in_chan,out_chan){
return keechma.controller.not_implemented;
}));
cljs.core._add_method.call(null,keechma.controller.context,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__40287 = null;
var G__40287__1 = (function (controller){
return new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(controller);
});
var G__40287__2 = (function (controller,key){
var key_vec = ((cljs.core.vector_QMARK_.call(null,key))?key:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));
return cljs.core.get_in.call(null,controller,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),key_vec));
});
G__40287 = function(controller,key){
switch(arguments.length){
case 1:
return G__40287__1.call(this,controller);
case 2:
return G__40287__2.call(this,controller,key);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__40287.cljs$core$IFn$_invoke$arity$1 = G__40287__1;
G__40287.cljs$core$IFn$_invoke$arity$2 = G__40287__2;
return G__40287;
})()
);
cljs.core._add_method.call(null,keechma.controller.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__40288 = null;
var G__40288__4 = (function (controller,direction,name,payload){
return keechma.controller.report.call(null,controller,direction,name,payload,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__40288__5 = (function (controller,direction,name,payload,cmd_info){
return keechma.controller.report.call(null,controller,direction,name,payload,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__40288__6 = (function (controller,direction,name,payload,cmd_info,severity){
var reporter = (function (){var or__30217__auto__ = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(controller);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return ((function (or__30217__auto__){
return (function (_,___$1,___$2,___$3,___$4,___$5,___$6,___$7){
return null;
});
;})(or__30217__auto__))
}
})();
var topic = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller);
return reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),direction,topic,name,payload,cmd_info,severity);
});
G__40288 = function(controller,direction,name,payload,cmd_info,severity){
switch(arguments.length){
case 4:
return G__40288__4.call(this,controller,direction,name,payload);
case 5:
return G__40288__5.call(this,controller,direction,name,payload,cmd_info);
case 6:
return G__40288__6.call(this,controller,direction,name,payload,cmd_info,severity);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__40288.cljs$core$IFn$_invoke$arity$4 = G__40288__4;
G__40288.cljs$core$IFn$_invoke$arity$5 = G__40288__5;
G__40288.cljs$core$IFn$_invoke$arity$6 = G__40288__6;
return G__40288;
})()
);
cljs.core._add_method.call(null,keechma.controller.execute,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__40289 = null;
var G__40289__2 = (function (controller,command_name){
return keechma.controller.execute.call(null,controller,command_name,null);
});
var G__40289__3 = (function (controller,command_name,args){
var cmd_info = keechma.reporter.cmd_info.call(null);
keechma.controller.report.call(null,controller,new cljs.core.Keyword(null,"in","in",-1531184865),command_name,args,cmd_info);

return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));
});
G__40289 = function(controller,command_name,args){
switch(arguments.length){
case 2:
return G__40289__2.call(this,controller,command_name);
case 3:
return G__40289__3.call(this,controller,command_name,args);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__40289.cljs$core$IFn$_invoke$arity$2 = G__40289__2;
G__40289.cljs$core$IFn$_invoke$arity$3 = G__40289__3;
return G__40289;
})()
);
cljs.core._add_method.call(null,keechma.controller.send_command,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__40290 = null;
var G__40290__2 = (function (controller,command_name){
return keechma.controller.send_command.call(null,controller,command_name,null,null);
});
var G__40290__3 = (function (controller,command_name,args){
return keechma.controller.send_command.call(null,controller,command_name,args,null);
});
var G__40290__4 = (function (controller,command_name,args,origin){
var out_chan = new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller);
var cmd_info = keechma.reporter.cmd_info.call(null);
keechma.controller.report.call(null,controller,new cljs.core.Keyword(null,"out","out",-910545517),command_name,args,cmd_info);

cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));

return controller;
});
G__40290 = function(controller,command_name,args,origin){
switch(arguments.length){
case 2:
return G__40290__2.call(this,controller,command_name);
case 3:
return G__40290__3.call(this,controller,command_name,args);
case 4:
return G__40290__4.call(this,controller,command_name,args,origin);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__40290.cljs$core$IFn$_invoke$arity$2 = G__40290__2;
G__40290.cljs$core$IFn$_invoke$arity$3 = G__40290__3;
G__40290.cljs$core$IFn$_invoke$arity$4 = G__40290__4;
return G__40290;
})()
);
cljs.core._add_method.call(null,keechma.controller.is_running_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller){
return cljs.core._EQ_.call(null,controller,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(controller).call(null));
}));
cljs.core._add_method.call(null,keechma.controller.redirect,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params){
return new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973).cljs$core$IFn$_invoke$arity$1(controller).call(null,params);
}));

//# sourceMappingURL=controller.js.map?rel=1515669756344
