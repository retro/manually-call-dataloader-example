// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.toolbox.pipeline.controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('cljs.core.async');
goog.require('keechma.toolbox.pipeline.core');
goog.require('clojure.set');
keechma.toolbox.pipeline.controller.pipeline_rename_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"on-start","on-start",-1839785985),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),new cljs.core.Keyword(null,"route-changed","route-changed",455870141),new cljs.core.Keyword(null,"on-route-changed","on-route-changed",-696117904)], null);

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
keechma.toolbox.pipeline.controller.PipelineController = (function (controller_api,pipelines,__meta,__extmap,__hash){
this.controller_api = controller_api;
this.pipelines = pipelines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k42968,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__42972 = k42968;
var G__42972__$1 = (((G__42972 instanceof cljs.core.Keyword))?G__42972.fqn:null);
switch (G__42972__$1) {
case "controller-api":
return self__.controller_api;

break;
case "pipelines":
return self__.pipelines;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42968,else__30908__auto__);

}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.toolbox.pipeline.controller.PipelineController{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),self__.controller_api],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipelines","pipelines",687128919),self__.pipelines],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42967){
var self__ = this;
var G__42967__$1 = this;
return (new cljs.core.RecordIter((0),G__42967__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),new cljs.core.Keyword(null,"pipelines","pipelines",687128919)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,self__.pipelines,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (930798330 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42969,other42970){
var self__ = this;
var this42969__$1 = this;
return (!((other42970 == null))) && ((this42969__$1.constructor === other42970.constructor)) && (cljs.core._EQ_.call(null,this42969__$1.controller_api,other42970.controller_api)) && (cljs.core._EQ_.call(null,this42969__$1.pipelines,other42970.pipelines)) && (cljs.core._EQ_.call(null,this42969__$1.__extmap,other42970.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),null,new cljs.core.Keyword(null,"pipelines","pipelines",687128919),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,self__.pipelines,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__42967){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__42973 = cljs.core.keyword_identical_QMARK_;
var expr__42974 = k__30913__auto__;
if(cljs.core.truth_(pred__42973.call(null,new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),expr__42974))){
return (new keechma.toolbox.pipeline.controller.PipelineController(G__42967,self__.pipelines,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42973.call(null,new cljs.core.Keyword(null,"pipelines","pipelines",687128919),expr__42974))){
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,G__42967,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,self__.pipelines,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__42967),null));
}
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),self__.controller_api],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipelines","pipelines",687128919),self__.pipelines],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__42967){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,self__.pipelines,G__42967,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.toolbox.pipeline.controller.PipelineController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"controller-api","controller-api",-160112175,null),new cljs.core.Symbol(null,"pipelines","pipelines",-1967306850,null)], null);
});

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$type = true;

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.controller/PipelineController");
});

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.toolbox.pipeline.controller/PipelineController");
});

keechma.toolbox.pipeline.controller.__GT_PipelineController = (function keechma$toolbox$pipeline$controller$__GT_PipelineController(controller_api,pipelines){
return (new keechma.toolbox.pipeline.controller.PipelineController(controller_api,pipelines,null,null,null));
});

keechma.toolbox.pipeline.controller.map__GT_PipelineController = (function keechma$toolbox$pipeline$controller$map__GT_PipelineController(G__42971){
return (new keechma.toolbox.pipeline.controller.PipelineController(new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702).cljs$core$IFn$_invoke$arity$1(G__42971),new cljs.core.Keyword(null,"pipelines","pipelines",687128919).cljs$core$IFn$_invoke$arity$1(G__42971),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42971,new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),new cljs.core.Keyword(null,"pipelines","pipelines",687128919))),null));
});

cljs.core._add_method.call(null,keechma.controller.params,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,route_params){
var params_fn = cljs.core.get_in.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),new cljs.core.Keyword(null,"params","params",710516235)], null));
return params_fn.call(null,route_params);
}));
cljs.core._add_method.call(null,keechma.controller.start,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,params,app_db){
var start_fn = cljs.core.get_in.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),new cljs.core.Keyword(null,"start","start",-355208981)], null));
keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"start","start",-355208981),params);

return start_fn.call(null,this$,params,app_db);
}));
cljs.core._add_method.call(null,keechma.controller.stop,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,params,app_db){
var stop_fn = cljs.core.get_in.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null));
keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"stop","stop",-2140911342),params);

return stop_fn.call(null,this$,params,app_db);
}));
cljs.core._add_method.call(null,keechma.controller.handler,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,app_db_atom,in_chan,_){
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__){
return (function (state_43007){
var state_val_43008 = (state_43007[(1)]);
if((state_val_43008 === (7))){
var inst_42993 = (state_43007[(7)]);
var inst_42989 = (state_43007[(2)]);
var inst_42990 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42991 = [new cljs.core.Keyword(null,"pipelines","pipelines",687128919),inst_42989];
var inst_42992 = (new cljs.core.PersistentVector(null,2,(5),inst_42990,inst_42991,null));
var inst_42993__$1 = cljs.core.get_in.call(null,this$,inst_42992);
var state_43007__$1 = (function (){var statearr_43009 = state_43007;
(statearr_43009[(7)] = inst_42993__$1);

return statearr_43009;
})();
if(cljs.core.truth_(inst_42993__$1)){
var statearr_43010_43030 = state_43007__$1;
(statearr_43010_43030[(1)] = (8));

} else {
var statearr_43011_43031 = state_43007__$1;
(statearr_43011_43031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (1))){
var state_43007__$1 = state_43007;
var statearr_43012_43032 = state_43007__$1;
(statearr_43012_43032[(2)] = null);

(statearr_43012_43032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (4))){
var inst_42985 = (state_43007[(8)]);
var inst_42983 = (state_43007[(9)]);
var inst_42982 = (state_43007[(2)]);
var inst_42983__$1 = cljs.core.nth.call(null,inst_42982,(0),null);
var inst_42984 = cljs.core.nth.call(null,inst_42982,(1),null);
var inst_42985__$1 = cljs.core.get.call(null,keechma.toolbox.pipeline.controller.pipeline_rename_map,inst_42983__$1);
var state_43007__$1 = (function (){var statearr_43013 = state_43007;
(statearr_43013[(10)] = inst_42984);

(statearr_43013[(8)] = inst_42985__$1);

(statearr_43013[(9)] = inst_42983__$1);

return statearr_43013;
})();
if(cljs.core.truth_(inst_42985__$1)){
var statearr_43014_43033 = state_43007__$1;
(statearr_43014_43033[(1)] = (5));

} else {
var statearr_43015_43034 = state_43007__$1;
(statearr_43015_43034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (13))){
var inst_43003 = (state_43007[(2)]);
var state_43007__$1 = state_43007;
var statearr_43016_43035 = state_43007__$1;
(statearr_43016_43035[(2)] = inst_43003);

(statearr_43016_43035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (6))){
var inst_42983 = (state_43007[(9)]);
var state_43007__$1 = state_43007;
var statearr_43017_43036 = state_43007__$1;
(statearr_43017_43036[(2)] = inst_42983);

(statearr_43017_43036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (3))){
var inst_43005 = (state_43007[(2)]);
var state_43007__$1 = state_43007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43007__$1,inst_43005);
} else {
if((state_val_43008 === (12))){
var state_43007__$1 = state_43007;
var statearr_43018_43037 = state_43007__$1;
(statearr_43018_43037[(2)] = null);

(statearr_43018_43037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (2))){
var state_43007__$1 = state_43007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43007__$1,(4),in_chan);
} else {
if((state_val_43008 === (11))){
var state_43007__$1 = state_43007;
var statearr_43019_43038 = state_43007__$1;
(statearr_43019_43038[(2)] = null);

(statearr_43019_43038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (9))){
var state_43007__$1 = state_43007;
var statearr_43020_43039 = state_43007__$1;
(statearr_43020_43039[(2)] = null);

(statearr_43020_43039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (5))){
var inst_42985 = (state_43007[(8)]);
var state_43007__$1 = state_43007;
var statearr_43021_43040 = state_43007__$1;
(statearr_43021_43040[(2)] = inst_42985);

(statearr_43021_43040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (10))){
var inst_42983 = (state_43007[(9)]);
var inst_42998 = (state_43007[(2)]);
var state_43007__$1 = (function (){var statearr_43022 = state_43007;
(statearr_43022[(11)] = inst_42998);

return statearr_43022;
})();
if(cljs.core.truth_(inst_42983)){
var statearr_43023_43041 = state_43007__$1;
(statearr_43023_43041[(1)] = (11));

} else {
var statearr_43024_43042 = state_43007__$1;
(statearr_43024_43042[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (8))){
var inst_42984 = (state_43007[(10)]);
var inst_42993 = (state_43007[(7)]);
var inst_42995 = inst_42993.call(null,this$,app_db_atom,inst_42984);
var state_43007__$1 = state_43007;
var statearr_43025_43043 = state_43007__$1;
(statearr_43025_43043[(2)] = inst_42995);

(statearr_43025_43043[(1)] = (10));


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
});})(c__33899__auto__))
;
return ((function (switch__33809__auto__,c__33899__auto__){
return (function() {
var keechma$toolbox$pipeline$controller$state_machine__33810__auto__ = null;
var keechma$toolbox$pipeline$controller$state_machine__33810__auto____0 = (function (){
var statearr_43026 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43026[(0)] = keechma$toolbox$pipeline$controller$state_machine__33810__auto__);

(statearr_43026[(1)] = (1));

return statearr_43026;
});
var keechma$toolbox$pipeline$controller$state_machine__33810__auto____1 = (function (state_43007){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_43007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e43027){if((e43027 instanceof Object)){
var ex__33813__auto__ = e43027;
var statearr_43028_43044 = state_43007;
(statearr_43028_43044[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43045 = state_43007;
state_43007 = G__43045;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
keechma$toolbox$pipeline$controller$state_machine__33810__auto__ = function(state_43007){
switch(arguments.length){
case 0:
return keechma$toolbox$pipeline$controller$state_machine__33810__auto____0.call(this);
case 1:
return keechma$toolbox$pipeline$controller$state_machine__33810__auto____1.call(this,state_43007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$pipeline$controller$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$pipeline$controller$state_machine__33810__auto____0;
keechma$toolbox$pipeline$controller$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$pipeline$controller$state_machine__33810__auto____1;
return keechma$toolbox$pipeline$controller$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__))
})();
var state__33901__auto__ = (function (){var statearr_43029 = f__33900__auto__.call(null);
(statearr_43029[(6)] = c__33899__auto__);

return statearr_43029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__))
);

return c__33899__auto__;
}));
keechma.toolbox.pipeline.controller.default_start_stop = (function keechma$toolbox$pipeline$controller$default_start_stop(this$,params,app_db){
return app_db;
});
keechma.toolbox.pipeline.controller.default_params = (function keechma$toolbox$pipeline$controller$default_params(route_params){
return null;
});
keechma.toolbox.pipeline.controller.prepare_controller_api = (function keechma$toolbox$pipeline$controller$prepare_controller_api(controller_api){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stop","stop",-2140911342),keechma.toolbox.pipeline.controller.default_start_stop,new cljs.core.Keyword(null,"start","start",-355208981),keechma.toolbox.pipeline.controller.default_start_stop,new cljs.core.Keyword(null,"params","params",710516235),keechma.toolbox.pipeline.controller.default_params], null),((cljs.core.fn_QMARK_.call(null,controller_api))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),controller_api], null):controller_api));
});
keechma.toolbox.pipeline.controller.redundant_pipeline_message = (function keechma$toolbox$pipeline$controller$redundant_pipeline_message(pipeline){
return ["You can't have `:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pipeline),"` ","and `:on-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pipeline),"` ","pipeline defined. Use `:on-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pipeline),"`, `:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pipeline),"` is deprecated."].join('');
});
keechma.toolbox.pipeline.controller.prepare_pipelines = (function keechma$toolbox$pipeline$controller$prepare_pipelines(pipelines){
if(cljs.core.truth_((function (){var and__30205__auto__ = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(pipelines);
if(cljs.core.truth_(and__30205__auto__)){
return new cljs.core.Keyword(null,"on-stop","on-stop",1520114515).cljs$core$IFn$_invoke$arity$1(pipelines);
} else {
return and__30205__auto__;
}
})())){
throw keechma.toolbox.pipeline.controller.redundant_pipeline_message.call(null,"stop");
} else {
}

if(cljs.core.truth_((function (){var and__30205__auto__ = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(pipelines);
if(cljs.core.truth_(and__30205__auto__)){
return new cljs.core.Keyword(null,"on-start","on-start",-1839785985).cljs$core$IFn$_invoke$arity$1(pipelines);
} else {
return and__30205__auto__;
}
})())){
throw keechma.toolbox.pipeline.controller.redundant_pipeline_message.call(null,"start");
} else {
}

if(cljs.core.truth_((function (){var and__30205__auto__ = new cljs.core.Keyword(null,"route-changed","route-changed",455870141).cljs$core$IFn$_invoke$arity$1(pipelines);
if(cljs.core.truth_(and__30205__auto__)){
return new cljs.core.Keyword(null,"on-route-changed","on-route-changed",-696117904).cljs$core$IFn$_invoke$arity$1(pipelines);
} else {
return and__30205__auto__;
}
})())){
throw keechma.toolbox.pipeline.controller.redundant_pipeline_message.call(null,"route-changed");
} else {
}

return clojure.set.rename_keys.call(null,pipelines,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"on-start","on-start",-1839785985),new cljs.core.Keyword(null,"route-changed","route-changed",455870141),new cljs.core.Keyword(null,"on-route-changed","on-route-changed",-696117904)], null));
});
keechma.toolbox.pipeline.controller.make_constructor = (function keechma$toolbox$pipeline$controller$make_constructor(controller_api,pipelines){
return (function (){
return keechma.toolbox.pipeline.controller.__GT_PipelineController.call(null,keechma.toolbox.pipeline.controller.prepare_controller_api.call(null,controller_api),keechma.toolbox.pipeline.controller.prepare_pipelines.call(null,pipelines));
});
});
/**
 * 
 * Constructor for the pipeline controller.
 * 
 * Pipeline controllers are special type of Keechma controllers that handle their commands with pipelines. Pipelines allow you to model a command / action as a series of steps. Pipelines know how to handle promises and they themselves return a promise.
 * 
 * Pipelines allow you to split async actions into distinct steps:
 * 
 * - Pipeline processing
 * - Sideffects
 * 
 * If a pipeline processing step returns a promise (for instance from an AJAX request), pipeline will wait until that promise is resolved before proceeding to the next step.
 * 
 * Simple example
 * 
 * ```clojure
 * (ns some-namespace
 *   (:require [keechma.toolbox.pipeline.controller :as pp-controller]
 *          [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]])
 * 
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (pp/commit! (assoc-in app-db [:kv :current-user-status] :loading))
 *          (load-user-from-server)
 *          (pp/commit! (->app-db
 *                         (assoc-in [:kv :current-user-status] :loaded)
 *                         (assoc-in [:kv :current-user] value))))})
 * ```
 * 
 * In the previous example three things happened:
 * 
 * 1. We stored current user status as `:loading` in the app-db
 * 2. We loaded user from the server
 * 3. We stored the current user status and the current user in the app-db
 * 
 * `value` always holds the returned (or resolved) value from the previous processing step - unless the function returns `nil` in that case, value is bound to the previous value. Also, we had to use the `commit!` sideffect function to mutate the app-db.
 * 
 * `value` and `app-db` arguments are always bound to the current pipeline value and to the current version of app-db. This means that in every processing step, value and app-db point to the results of the previous processing step.`
 * 
 * If we want to handle errors or rejections in pipelines, we can use the `rescue!` block:
 * 
 * ```clojure
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (pp/commit! (assoc-in app-db [:kv :current-user-status] :loading))
 *          (load-user-from-server)
 *          (pp/commit! (->app-db
 *                         (assoc-in [:kv :current-user-status] :loaded)
 *                         (assoc-in [:kv :current-user] value)))
 *          (rescue! [error]
 *            (pp/commit! (assoc-in app-db [:kv :current-user-status] :error))})
 * ```
 * 
 * Rescue block will catch any errors that happen in the pipeline - including the promises that were rejected. Steps in the rescue block have access to value and app-db arguments.
 * 
 * **Nesting pipelines**
 * 
 * Sometimes you need to run the pipeline only if some condition is true. In that case you can nest pipelines:
 * 
 * ```clojure
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (when (= value true)
 *            (pipeline! [value app-db]
 *              (some-api-call)
 *              (pp/commit! (mutate-app-db app-db)))))}) 
 * ```
 * 
 * **Pipeline sideffects**
 * 
 * Pipelines can have various sideffects:
 * 
 * 1. `commit!` - commits the new app-db version in the global app-db atom
 * 2. `send-command!` - sends command to another controller
 * 3. `execute!` - executes command in the current controller
 * 4. `redirect!` - redirects to a different URL
 * 
 * **Exclusive pipelines**
 * 
 * In some cases you want to always run only one pipeline at a time. One example of that behavior is the live search. 
 * 
 * Let's say that you want to implement it as a command that runs on every key press. After the command is ran, it should wait for 500msec before calling the API. If the command is called again in these 500msec, stop the pipeline and run a new one.
 * 
 * Here's how you would implement this feature:
 * 
 * ```clojure
 * (def search-controller
 *   (pp-controller/constructor
 * (fn [] true)
 * {:search (pp/exclusive
 *           (pipeline! [value app-db]
 *             (when-not (empty? value)
 *               (pipeline! [value app-db]
 *                 (delay-pipeline 500)
 *                 (movie-search value)
 *                 (println "SEARCH RESULTS:" value)))))}))
 * ```
 *   
 */
keechma.toolbox.pipeline.controller.constructor$ = (function keechma$toolbox$pipeline$controller$constructor(controller_api,pipelines){
var c = keechma.toolbox.pipeline.controller.make_constructor.call(null,controller_api,pipelines);
return c.call(null);
});

//# sourceMappingURL=controller.js.map?rel=1515669759249
