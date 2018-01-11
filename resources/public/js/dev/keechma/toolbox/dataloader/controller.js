// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.toolbox.dataloader.controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('cljs.core.async');
goog.require('keechma.toolbox.dataloader.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('promesa.core');
keechma.toolbox.dataloader.controller.chan__GT_promise = (function keechma$toolbox$dataloader$controller$chan__GT_promise(wait_chan,value){
return promesa.core.promise.call(null,(function (resolve,reject){
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__){
return (function (state_45664){
var state_val_45665 = (state_45664[(1)]);
if((state_val_45665 === (1))){
var state_45664__$1 = state_45664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45664__$1,(2),wait_chan);
} else {
if((state_val_45665 === (2))){
var inst_45661 = (state_45664[(2)]);
var inst_45662 = resolve.call(null);
var state_45664__$1 = (function (){var statearr_45666 = state_45664;
(statearr_45666[(7)] = inst_45661);

return statearr_45666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45664__$1,inst_45662);
} else {
return null;
}
}
});})(c__33899__auto__))
;
return ((function (switch__33809__auto__,c__33899__auto__){
return (function() {
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto__ = null;
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto____0 = (function (){
var statearr_45667 = [null,null,null,null,null,null,null,null];
(statearr_45667[(0)] = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto__);

(statearr_45667[(1)] = (1));

return statearr_45667;
});
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto____1 = (function (state_45664){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_45664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e45668){if((e45668 instanceof Object)){
var ex__33813__auto__ = e45668;
var statearr_45669_45671 = state_45664;
(statearr_45669_45671[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45672 = state_45664;
state_45664 = G__45672;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto__ = function(state_45664){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto____1.call(this,state_45664);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto____0;
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto____1;
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__))
})();
var state__33901__auto__ = (function (){var statearr_45670 = f__33900__auto__.call(null);
(statearr_45670[(6)] = c__33899__auto__);

return statearr_45670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__))
);

return c__33899__auto__;
}));
});
keechma.toolbox.dataloader.controller.wait_dataloader_pipeline_BANG_ = (function keechma$toolbox$dataloader$controller$wait_dataloader_pipeline_BANG_(){
var wait_chan = cljs.core.async.chan.call(null);
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (wait_chan){
return (function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/send-command! [dataloader/id-key :waits] wait-chan)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.dataloader.core.id_key,new cljs.core.Keyword(null,"waits","waits",-716278748)], null),wait_chan)], null);
});})(wait_chan))
,((function (wait_chan){
return (function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(chan->promise wait-chan value)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.dataloader.controller.chan__GT_promise.call(null,wait_chan,value)], null);
});})(wait_chan))
], null)], null));
});
keechma.toolbox.dataloader.controller.run_dataloader_BANG_ = (function keechma$toolbox$dataloader$controller$run_dataloader_BANG_(){
return keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.dataloader.core.id_key,new cljs.core.Keyword(null,"load-data","load-data",-1806350928)], null),null);
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
keechma.toolbox.dataloader.controller.Controller = (function (dataloader,__meta,__extmap,__hash){
this.dataloader = dataloader;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k45674,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__45678 = k45674;
var G__45678__$1 = (((G__45678 instanceof cljs.core.Keyword))?G__45678.fqn:null);
switch (G__45678__$1) {
case "dataloader":
return self__.dataloader;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45674,else__30908__auto__);

}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.toolbox.dataloader.controller.Controller{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),self__.dataloader],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45673){
var self__ = this;
var G__45673__$1 = this;
return (new cljs.core.RecordIter((0),G__45673__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataloader","dataloader",1084918675)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (1993883316 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45675,other45676){
var self__ = this;
var this45675__$1 = this;
return (!((other45676 == null))) && ((this45675__$1.constructor === other45676.constructor)) && (cljs.core._EQ_.call(null,this45675__$1.dataloader,other45676.dataloader)) && (cljs.core._EQ_.call(null,this45675__$1.__extmap,other45676.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__45673){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__45679 = cljs.core.keyword_identical_QMARK_;
var expr__45680 = k__30913__auto__;
if(cljs.core.truth_(pred__45679.call(null,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),expr__45680))){
return (new keechma.toolbox.dataloader.controller.Controller(G__45673,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__45673),null));
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),self__.dataloader],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__45673){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,G__45673,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.toolbox.dataloader.controller.Controller.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dataloader","dataloader",-1569517094,null)], null);
});

keechma.toolbox.dataloader.controller.Controller.cljs$lang$type = true;

keechma.toolbox.dataloader.controller.Controller.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.dataloader.controller/Controller");
});

keechma.toolbox.dataloader.controller.Controller.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.toolbox.dataloader.controller/Controller");
});

keechma.toolbox.dataloader.controller.__GT_Controller = (function keechma$toolbox$dataloader$controller$__GT_Controller(dataloader){
return (new keechma.toolbox.dataloader.controller.Controller(dataloader,null,null,null));
});

keechma.toolbox.dataloader.controller.map__GT_Controller = (function keechma$toolbox$dataloader$controller$map__GT_Controller(G__45677){
return (new keechma.toolbox.dataloader.controller.Controller(new cljs.core.Keyword(null,"dataloader","dataloader",1084918675).cljs$core$IFn$_invoke$arity$1(G__45677),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__45677,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675))),null));
});

cljs.core._add_method.call(null,keechma.controller.params,keechma.toolbox.dataloader.controller.Controller,(function (this$,route_params){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_params);
}));
cljs.core._add_method.call(null,keechma.controller.start,keechma.toolbox.dataloader.controller.Controller,(function (this$,route_params,app_db){
keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"load-data","load-data",-1806350928));

return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.handler,keechma.toolbox.dataloader.controller.Controller,(function (this$,app_db_atom,in_chan,out_chan){
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__){
return (function (state_45757){
var state_val_45758 = (state_45757[(1)]);
if((state_val_45758 === (7))){
var inst_45753 = (state_45757[(2)]);
var state_45757__$1 = state_45757;
var statearr_45759_45808 = state_45757__$1;
(statearr_45759_45808[(2)] = inst_45753);

(statearr_45759_45808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (20))){
var inst_45719 = (state_45757[(7)]);
var inst_45728 = cljs.core.first.call(null,inst_45719);
var inst_45729 = cljs.core.async.close_BANG_.call(null,inst_45728);
var inst_45730 = cljs.core.next.call(null,inst_45719);
var inst_45706 = inst_45730;
var inst_45707 = null;
var inst_45708 = (0);
var inst_45709 = (0);
var state_45757__$1 = (function (){var statearr_45760 = state_45757;
(statearr_45760[(8)] = inst_45709);

(statearr_45760[(9)] = inst_45707);

(statearr_45760[(10)] = inst_45708);

(statearr_45760[(11)] = inst_45706);

(statearr_45760[(12)] = inst_45729);

return statearr_45760;
})();
var statearr_45761_45809 = state_45757__$1;
(statearr_45761_45809[(2)] = null);

(statearr_45761_45809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (1))){
var inst_45683 = cljs.core.PersistentVector.EMPTY;
var inst_45684 = inst_45683;
var state_45757__$1 = (function (){var statearr_45762 = state_45757;
(statearr_45762[(13)] = inst_45684);

return statearr_45762;
})();
var statearr_45763_45810 = state_45757__$1;
(statearr_45763_45810[(2)] = null);

(statearr_45763_45810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (4))){
var inst_45690 = (state_45757[(14)]);
var inst_45691 = (state_45757[(15)]);
var inst_45690__$1 = (state_45757[(2)]);
var inst_45691__$1 = cljs.core.nth.call(null,inst_45690__$1,(0),null);
var inst_45692 = cljs.core.nth.call(null,inst_45690__$1,(1),null);
var state_45757__$1 = (function (){var statearr_45764 = state_45757;
(statearr_45764[(14)] = inst_45690__$1);

(statearr_45764[(16)] = inst_45692);

(statearr_45764[(15)] = inst_45691__$1);

return statearr_45764;
})();
if(cljs.core.truth_(inst_45691__$1)){
var statearr_45765_45811 = state_45757__$1;
(statearr_45765_45811[(1)] = (5));

} else {
var statearr_45766_45812 = state_45757__$1;
(statearr_45766_45812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (15))){
var inst_45738 = (state_45757[(2)]);
var state_45757__$1 = state_45757;
var statearr_45770_45813 = state_45757__$1;
(statearr_45770_45813[(2)] = inst_45738);

(statearr_45770_45813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (21))){
var inst_45733 = (state_45757[(2)]);
var state_45757__$1 = state_45757;
var statearr_45771_45814 = state_45757__$1;
(statearr_45771_45814[(2)] = inst_45733);

(statearr_45771_45814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (13))){
var inst_45709 = (state_45757[(8)]);
var inst_45707 = (state_45757[(9)]);
var inst_45708 = (state_45757[(10)]);
var inst_45706 = (state_45757[(11)]);
var inst_45714 = cljs.core._nth.call(null,inst_45707,inst_45709);
var inst_45715 = cljs.core.async.close_BANG_.call(null,inst_45714);
var inst_45716 = (inst_45709 + (1));
var tmp45767 = inst_45707;
var tmp45768 = inst_45708;
var tmp45769 = inst_45706;
var inst_45706__$1 = tmp45769;
var inst_45707__$1 = tmp45767;
var inst_45708__$1 = tmp45768;
var inst_45709__$1 = inst_45716;
var state_45757__$1 = (function (){var statearr_45772 = state_45757;
(statearr_45772[(8)] = inst_45709__$1);

(statearr_45772[(9)] = inst_45707__$1);

(statearr_45772[(10)] = inst_45708__$1);

(statearr_45772[(11)] = inst_45706__$1);

(statearr_45772[(17)] = inst_45715);

return statearr_45772;
})();
var statearr_45773_45815 = state_45757__$1;
(statearr_45773_45815[(2)] = null);

(statearr_45773_45815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (22))){
var inst_45692 = (state_45757[(16)]);
var inst_45684 = (state_45757[(13)]);
var inst_45744 = cljs.core.conj.call(null,inst_45684,inst_45692);
var inst_45684__$1 = inst_45744;
var state_45757__$1 = (function (){var statearr_45774 = state_45757;
(statearr_45774[(13)] = inst_45684__$1);

return statearr_45774;
})();
var statearr_45775_45816 = state_45757__$1;
(statearr_45775_45816[(2)] = null);

(statearr_45775_45816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (6))){
var state_45757__$1 = state_45757;
var statearr_45776_45817 = state_45757__$1;
(statearr_45776_45817[(2)] = null);

(statearr_45776_45817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (17))){
var state_45757__$1 = state_45757;
var statearr_45777_45818 = state_45757__$1;
(statearr_45777_45818[(2)] = null);

(statearr_45777_45818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (3))){
var inst_45755 = (state_45757[(2)]);
var state_45757__$1 = state_45757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45757__$1,inst_45755);
} else {
if((state_val_45758 === (12))){
var inst_45740 = (state_45757[(2)]);
var inst_45741 = cljs.core.PersistentVector.EMPTY;
var inst_45684 = inst_45741;
var state_45757__$1 = (function (){var statearr_45779 = state_45757;
(statearr_45779[(13)] = inst_45684);

(statearr_45779[(18)] = inst_45740);

return statearr_45779;
})();
var statearr_45780_45819 = state_45757__$1;
(statearr_45780_45819[(2)] = null);

(statearr_45780_45819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (2))){
var state_45757__$1 = state_45757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45757__$1,(4),in_chan);
} else {
if((state_val_45758 === (23))){
var inst_45684 = (state_45757[(13)]);
var tmp45778 = inst_45684;
var inst_45684__$1 = tmp45778;
var state_45757__$1 = (function (){var statearr_45781 = state_45757;
(statearr_45781[(13)] = inst_45684__$1);

return statearr_45781;
})();
var statearr_45782_45820 = state_45757__$1;
(statearr_45782_45820[(2)] = null);

(statearr_45782_45820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (19))){
var inst_45719 = (state_45757[(7)]);
var inst_45723 = cljs.core.chunk_first.call(null,inst_45719);
var inst_45724 = cljs.core.chunk_rest.call(null,inst_45719);
var inst_45725 = cljs.core.count.call(null,inst_45723);
var inst_45706 = inst_45724;
var inst_45707 = inst_45723;
var inst_45708 = inst_45725;
var inst_45709 = (0);
var state_45757__$1 = (function (){var statearr_45784 = state_45757;
(statearr_45784[(8)] = inst_45709);

(statearr_45784[(9)] = inst_45707);

(statearr_45784[(10)] = inst_45708);

(statearr_45784[(11)] = inst_45706);

return statearr_45784;
})();
var statearr_45785_45821 = state_45757__$1;
(statearr_45785_45821[(2)] = null);

(statearr_45785_45821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (11))){
var inst_45709 = (state_45757[(8)]);
var inst_45708 = (state_45757[(10)]);
var inst_45711 = (inst_45709 < inst_45708);
var inst_45712 = inst_45711;
var state_45757__$1 = state_45757;
if(cljs.core.truth_(inst_45712)){
var statearr_45786_45822 = state_45757__$1;
(statearr_45786_45822[(1)] = (13));

} else {
var statearr_45787_45823 = state_45757__$1;
(statearr_45787_45823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (9))){
var inst_45690 = (state_45757[(14)]);
var inst_45692 = (state_45757[(16)]);
var inst_45684 = (state_45757[(13)]);
var inst_45691 = (state_45757[(15)]);
var inst_45694 = (function (){var waits = inst_45684;
var vec__45686 = inst_45690;
var command = inst_45691;
var args = inst_45692;
return ((function (waits,vec__45686,command,args,inst_45690,inst_45692,inst_45684,inst_45691,state_val_45758,c__33899__auto__){
return (function (){
return keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"loaded-data","loaded-data",-1515086713));
});
;})(waits,vec__45686,command,args,inst_45690,inst_45692,inst_45684,inst_45691,state_val_45758,c__33899__auto__))
})();
var inst_45695 = new cljs.core.Keyword(null,"dataloader","dataloader",1084918675).cljs$core$IFn$_invoke$arity$1(this$);
var inst_45696 = keechma.controller.context.call(null,this$);
var inst_45697 = inst_45695.call(null,app_db_atom,inst_45696);
var inst_45698 = promesa.core.map.call(null,inst_45694,inst_45697);
var tmp45783 = inst_45684;
var inst_45684__$1 = tmp45783;
var state_45757__$1 = (function (){var statearr_45788 = state_45757;
(statearr_45788[(19)] = inst_45698);

(statearr_45788[(13)] = inst_45684__$1);

return statearr_45788;
})();
var statearr_45789_45824 = state_45757__$1;
(statearr_45789_45824[(2)] = null);

(statearr_45789_45824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (5))){
var inst_45691 = (state_45757[(15)]);
var state_45757__$1 = state_45757;
var G__45790_45825 = inst_45691;
var G__45790_45826__$1 = (((G__45790_45825 instanceof cljs.core.Keyword))?G__45790_45825.fqn:null);
switch (G__45790_45826__$1) {
case "load-data":
var statearr_45791_45828 = state_45757__$1;
(statearr_45791_45828[(1)] = (9));


break;
case "loaded-data":
var statearr_45792_45829 = state_45757__$1;
(statearr_45792_45829[(1)] = (10));


break;
case "waits":
var statearr_45793_45830 = state_45757__$1;
(statearr_45793_45830[(1)] = (22));


break;
default:
var statearr_45794_45831 = state_45757__$1;
(statearr_45794_45831[(1)] = (23));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (14))){
var inst_45719 = (state_45757[(7)]);
var inst_45706 = (state_45757[(11)]);
var inst_45719__$1 = cljs.core.seq.call(null,inst_45706);
var state_45757__$1 = (function (){var statearr_45795 = state_45757;
(statearr_45795[(7)] = inst_45719__$1);

return statearr_45795;
})();
if(inst_45719__$1){
var statearr_45796_45832 = state_45757__$1;
(statearr_45796_45832[(1)] = (16));

} else {
var statearr_45797_45833 = state_45757__$1;
(statearr_45797_45833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (16))){
var inst_45719 = (state_45757[(7)]);
var inst_45721 = cljs.core.chunked_seq_QMARK_.call(null,inst_45719);
var state_45757__$1 = state_45757;
if(inst_45721){
var statearr_45798_45834 = state_45757__$1;
(statearr_45798_45834[(1)] = (19));

} else {
var statearr_45799_45835 = state_45757__$1;
(statearr_45799_45835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (10))){
var inst_45684 = (state_45757[(13)]);
var inst_45705 = cljs.core.seq.call(null,inst_45684);
var inst_45706 = inst_45705;
var inst_45707 = null;
var inst_45708 = (0);
var inst_45709 = (0);
var state_45757__$1 = (function (){var statearr_45800 = state_45757;
(statearr_45800[(8)] = inst_45709);

(statearr_45800[(9)] = inst_45707);

(statearr_45800[(10)] = inst_45708);

(statearr_45800[(11)] = inst_45706);

return statearr_45800;
})();
var statearr_45801_45836 = state_45757__$1;
(statearr_45801_45836[(2)] = null);

(statearr_45801_45836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (18))){
var inst_45736 = (state_45757[(2)]);
var state_45757__$1 = state_45757;
var statearr_45802_45837 = state_45757__$1;
(statearr_45802_45837[(2)] = inst_45736);

(statearr_45802_45837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45758 === (8))){
var inst_45750 = (state_45757[(2)]);
var state_45757__$1 = state_45757;
var statearr_45803_45838 = state_45757__$1;
(statearr_45803_45838[(2)] = inst_45750);

(statearr_45803_45838[(1)] = (7));


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
});})(c__33899__auto__))
;
return ((function (switch__33809__auto__,c__33899__auto__){
return (function() {
var keechma$toolbox$dataloader$controller$state_machine__33810__auto__ = null;
var keechma$toolbox$dataloader$controller$state_machine__33810__auto____0 = (function (){
var statearr_45804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45804[(0)] = keechma$toolbox$dataloader$controller$state_machine__33810__auto__);

(statearr_45804[(1)] = (1));

return statearr_45804;
});
var keechma$toolbox$dataloader$controller$state_machine__33810__auto____1 = (function (state_45757){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_45757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e45805){if((e45805 instanceof Object)){
var ex__33813__auto__ = e45805;
var statearr_45806_45839 = state_45757;
(statearr_45806_45839[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45840 = state_45757;
state_45757 = G__45840;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
keechma$toolbox$dataloader$controller$state_machine__33810__auto__ = function(state_45757){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$controller$state_machine__33810__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$controller$state_machine__33810__auto____1.call(this,state_45757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$dataloader$controller$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$controller$state_machine__33810__auto____0;
keechma$toolbox$dataloader$controller$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$controller$state_machine__33810__auto____1;
return keechma$toolbox$dataloader$controller$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__))
})();
var state__33901__auto__ = (function (){var statearr_45807 = f__33900__auto__.call(null);
(statearr_45807[(6)] = c__33899__auto__);

return statearr_45807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__))
);

return c__33899__auto__;
}));
/**
 * Dataloader controller constructor
 */
keechma.toolbox.dataloader.controller.constructor$ = (function keechma$toolbox$dataloader$controller$constructor(datasources,edb_schema){
return keechma.toolbox.dataloader.controller.__GT_Controller.call(null,keechma.toolbox.dataloader.core.make_dataloader.call(null,datasources,edb_schema));
});
/**
 * 
 * 
 * Registers dataloader controller to the controller map
 * 
 * ```clojure
 *  (def app
 *   {:controllers (-> {}
 *                  (keechma.toolbox.dataloader.controller/register datasources-map edb-schema))})
 * ```
 * 
 *   `keechma.toolbox.dataloader.controller/register` function expects three arguments:
 * 
 * - controller map
 * - datasources map
 * - EDB schema
 * 
 * It returns a new version of the controller map with the dataloader controller registered.
 * 
 * **Datasources**
 * 
 * Datasource is an abstraction of any data that is loaded from the "outside" world. It can be an API endpoint, local storage value or any other data that is not present in the application state.
 * 
 * Dataloader allows you to declaratively list your datasources. It then determines when and how the datasources should be loaded. Datasources can be defined as a graph, where datasources can depend on other datasources. This removes any need to manually load data in the correct order. When datasources params or depenedencies change, dataloader will invalidate that datasource and reload it.
 * 
 * Dataloader checks it's datasources on each route change. If the datasource `params` function returns a result different from the previous result, this datasource (and any datasources that depend on it) will be reloaded.
 * 
 * Dataloader can be manually triggered by sending the `:load-data` command to the dataloader controller.
 * 
 * **Example**
 * 
 * ```clojure
 * 
 * (defn promised-datasource
 *  ([] (promised-datasource nil))
 *  ([data]
 *   (fn [params]
 *  (map (fn [loader-params]
 *         (p/promise (fn [resolve reject]
 *                      (let [value (or data (:params loader-params))]
 *                        (js/setTimeout #(resolve value) 1)))))
 *       params))))
 * 
 * (def simple-promised-datasource (promised-datasource))
 * 
 * (def simple-datasources
 *  {:jwt
 *   {:target [:kv :jwt]
 * :loader (promised-datasource)
 * :processor (fn [value datasource]
 *              (str value "!"))
 * :params (fn [prev route _]
 *           (or (:jwt route) "JWT"))}
 * 
 *   :current-user
 *   {:target [:kv :user :current]
 * :deps   [:jwt]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt]}]
 *           {:jwt jwt
 *            :current-user-id 1})}
 * 
 *   :users
 *   {:target [:kv :user :list]
 * :deps   [:jwt]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt]}]
 *           {:jwt jwt
 *            :users [{:id 1} {:id 2}]})}
 * 
 *   :current-user-favorites
 *   {:target [:kv :favorites :current]
 * :deps   [:jwt :current-user]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt current-user]}]
 *           {:jwt jwt
 *            :current-user current-user
 *            :favorites [{:id 3} {:id 4}]})}})
 * ```
 * 
 * A lot of stuff is happening in this example, so let's explain them one by one.
 * 
 * `promised-datasource` function is used as an example loader. The important thing to note here is that loader functions accept an array of requests. This means that you can use this function as an optimization point, a place where you can optimize the requests - remove duplicates or combine them into one request. Loader function should return a list of promises or results (these can be combined). Dataloader will wait for each promise to resolve, and then continue loading the dependent datasources.
 * 
 * Datasources are registered in the map, and the key under which the datasource is registered can be used by the other datasources to depend on it.
 * 
 * Each datasource map can have the following attributes:
 * 
 * - `:target` - where to store the returned data
 * - `:params` - function that returns the params needed to load the data
 * - `:loader` - function that is used to load the data, this function gets a list of requests
 * - `:deps` - list of datasources that the datasource depends on
 * - `:processor` - function that processes the result data before it gets stored in the app-db
 * 
 * **`:target` attribute**
 * 
 * Target attribute tells dataloader where it should store the loaded data. It has three different forms:
 * 
 * - general path - `[:kv :user]` - it will be stored under this path in the app-db
 * - EntityDB collection path - `[:edb/collection :user/list]` - If the first element of the target vector is `:edb/collection` keyword, the results will be treated as the EntityDB collection and the second element of the vector will be split on `/` to determine where this collection should be stored. If the second element of the target vector looked like `:user/list` the data would be stored in the collection named `:list` for the entity named `:user`.
 * - EntityDB named item - `[:edb/named-item :user/current]` - this will store the EntityDB named item, using the same rules like the EntityDB collection target to determine where the item should be stored.
 * 
 * **`:params` attribute**
 * 
 * Params function returns the params needed to load the datasource. It receives three arguments:
 * 
 * - previously loaded value
 * - current route
 * - datasource dependencies
 * 
 * This function is called to determine the current datasource state. If the returned value is different from the previously returned value, the datasource will be reloaded. Loader function receives the params, and it has to make sense of it. Even if your params fn returns `nil`, loader function will be called. It is loader function's responsobility to decide what the returned params mean.
 * 
 * **`:loader`** attribute:
 * 
 * Loader function is responsible for the data loading. This is where you should place your AJAX request functions. Loader function will receive a vector of requests (one element for each "triggered" datasource). Each request comes from a datasource, and it contains the following attributes:
 * 
 * - `:params` - value returned from the "params" function
 * - `:prev` - previously loaded value
 * - `:datasource` - key under which the datasource is registered
 * - `:app-db` - current app-db state
 * - `:target` - path where data will be stored in the app-db
 * 
 * Loader function should return a vector (one item for each request). Values in the returned vector can be either promises or resolved values.
 * 
 * 
 * **Manually triggering the Dataloader**
 * 
 * In some cases you will want to manually trigger the dataloader without the route change. For instance you might obtain a JWT token as a result of some user's action, and then reload all datasources that depend on it. Dataloader controller can manually trigger the dataloader. You can achieve this by sending the `:load-data` command to the dataloader controller:
 * 
 * ```clojure
 * (ns some.namespace
 *   (:require [keechma.toolbox.dataloader.core :as dataloader]
 *      [keechma.controller :as controller]))
 * 
 * (defn trigger-dataloader [ctrl]
 *   (controller/send-command ctrl [dataloader/id-key :load-data])) ;; dataloader controller will be registered under the dataloader/id-key keyword
 * ```
 * 
 * This will reload all invalidated datasources.
 */
keechma.toolbox.dataloader.controller.register = (function keechma$toolbox$dataloader$controller$register(var_args){
var G__45842 = arguments.length;
switch (G__45842) {
case 2:
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$2 = (function (datasources,edb_schema){
return keechma.toolbox.dataloader.controller.register.call(null,cljs.core.PersistentArrayMap.EMPTY,datasources,edb_schema);
});

keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3 = (function (controllers,datasources,edb_schema){
return cljs.core.assoc.call(null,controllers,keechma.toolbox.dataloader.core.id_key,keechma.toolbox.dataloader.controller.constructor$.call(null,datasources,edb_schema));
});

keechma.toolbox.dataloader.controller.register.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=controller.js.map?rel=1515670174228
