// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.controller_manager');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('keechma.util');
goog.require('keechma.controller');
goog.require('keechma.reporter');
keechma.controller_manager.send_command_to = (function keechma$controller_manager$send_command_to(var_args){
var G__40294 = arguments.length;
switch (G__40294) {
case 4:
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4 = (function (reporter,controller,command_name,args){
return keechma.controller_manager.send_command_to.call(null,reporter,controller,command_name,args,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),command_name))?keechma.reporter.cmd_info.call(null):null));
});

keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5 = (function (reporter,controller,command_name,args,origin){
var cmd_info = keechma.reporter.with_origin.call(null,origin);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),command_name)){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name], null),args,origin,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),command_name], null),cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
} else {
reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name,args,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));

return controller;
});

keechma.controller_manager.send_command_to.cljs$lang$maxFixedArity = 5;

keechma.controller_manager.route_command_to_controller = (function keechma$controller_manager$route_command_to_controller(reporter,controllers,command_name,command_args,cmd_info){
var vec__40296 = command_name;
var controller_name = cljs.core.nth.call(null,vec__40296,(0),null);
var command_name__$1 = cljs.core.nth.call(null,vec__40296,(1),null);
var controller = cljs.core.get.call(null,controllers,controller_name);
if(cljs.core.truth_(controller)){
return keechma.controller_manager.send_command_to.call(null,reporter,controller,command_name__$1,command_args,cmd_info);
} else {
throw cljs.core.ex_info.call(null,"Trying to send command to a controller that is not running",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controller","controller",2013778659),controller_name,new cljs.core.Keyword(null,"command","command",-894540724),command_name__$1,new cljs.core.Keyword(null,"args","args",1315556576),command_args], null));
}
});
keechma.controller_manager.report_running_controllers = (function keechma$controller_manager$report_running_controllers(app_db_atom){
var running_controllers = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
return cljs.core.reduce.call(null,((function (running_controllers){
return (function (acc,p__40299){
var vec__40300 = p__40299;
var k = cljs.core.nth.call(null,vec__40300,(0),null);
var v = cljs.core.nth.call(null,vec__40300,(1),null);
return cljs.core.assoc.call(null,acc,k,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(v));
});})(running_controllers))
,cljs.core.PersistentArrayMap.EMPTY,running_controllers);
});
keechma.controller_manager.route_change_execution_plan = (function keechma$controller_manager$route_change_execution_plan(route_params,running_controllers,controllers){
var plan = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wake","wake",1262361182),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.PersistentVector.EMPTY], null);
var running_controller_keys_set = cljs.core.set.call(null,cljs.core.keys.call(null,running_controllers));
return cljs.core.reduce.call(null,((function (plan,running_controller_keys_set){
return (function (acc,p__40303){
var vec__40304 = p__40303;
var topic = cljs.core.nth.call(null,vec__40304,(0),null);
var controller = cljs.core.nth.call(null,vec__40304,(1),null);
var map__40307 = acc;
var map__40307__$1 = ((((!((map__40307 == null)))?((((map__40307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40307):map__40307);
var stop = cljs.core.get.call(null,map__40307__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start = cljs.core.get.call(null,map__40307__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var wake = cljs.core.get.call(null,map__40307__$1,new cljs.core.Keyword(null,"wake","wake",1262361182));
var route_changed = cljs.core.get.call(null,map__40307__$1,new cljs.core.Keyword(null,"route-changed","route-changed",455870141));
var new_params = keechma.controller.params.call(null,controller,route_params);
var running_controller = cljs.core.get.call(null,running_controllers,topic);
var prev_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(running_controller);
if(cljs.core._EQ_.call(null,keechma.controller.SerializedController,cljs.core.type.call(null,running_controller))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"wake","wake",1262361182),cljs.core.assoc.call(null,wake,topic,new_params));
} else {
if(((prev_params == null)) && ((new_params == null))){
return acc;
} else {
if(((prev_params == null)) && (!((new_params == null)))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.assoc.call(null,start,topic,new_params));
} else {
if((!((prev_params == null))) && ((new_params == null))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.assoc.call(null,stop,topic,new_params));
} else {
if(cljs.core.not_EQ_.call(null,new_params,prev_params)){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.assoc.call(null,stop,topic,new_params),new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.assoc.call(null,start,topic,new_params));
} else {
if(cljs.core._EQ_.call(null,new_params,prev_params)){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.conj.call(null,route_changed,topic));
} else {
return acc;

}
}
}
}
}
}
});})(plan,running_controller_keys_set))
,plan,controllers);
});
keechma.controller_manager.apply_stop_controllers = (function keechma$controller_manager$apply_stop_controllers(app_db,reporter,stop){
var running_controllers = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
var stop__$1 = stop;
var app_db__$1 = app_db;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,stop__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
var vec__40309 = s;
var topic = cljs.core.nth.call(null,vec__40309,(0),null);
var params = cljs.core.nth.call(null,vec__40309,(1),null);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"stop","stop",-2140911342)], null),params,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var controller = cljs.core.get.call(null,running_controllers,topic);
var _ = reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(controller),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
var new_app_db = keechma.util.dissoc_in.call(null,keechma.controller.stop.call(null,controller,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(controller),app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
cljs.core.async.close_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller));

var G__40312 = cljs.core.rest.call(null,stop__$1);
var G__40313 = new_app_db;
stop__$1 = G__40312;
app_db__$1 = G__40313;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_or_wake_controllers = (function keechma$controller_manager$apply_start_or_wake_controllers(action,reporter_action,app_db,reporter,controllers,commands_chan,get_running,start_or_wake){
var start_or_wake__$1 = start_or_wake;
var app_db__$1 = app_db;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,start_or_wake__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
var vec__40314 = s;
var topic = cljs.core.nth.call(null,vec__40314,(0),null);
var params = cljs.core.nth.call(null,vec__40314,(1),null);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,reporter_action], null),params,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keecmha","lifecycle","keecmha/lifecycle",-422790813),reporter_action], null),params,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var controller = cljs.core.assoc.call(null,cljs.core.get.call(null,controllers,topic),new cljs.core.Keyword(null,"in-chan","in-chan",1839083771),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"out-chan","out-chan",384315017),commands_chan,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db__$1),new cljs.core.Keyword(null,"name","name",1843675177),topic,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter,new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.partial.call(null,get_running,topic));
var new_app_db = cljs.core.assoc_in.call(null,action.call(null,controller,params,app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null),controller);
var G__40317 = cljs.core.rest.call(null,start_or_wake__$1);
var G__40318 = new_app_db;
start_or_wake__$1 = G__40317;
app_db__$1 = G__40318;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_controllers = cljs.core.partial.call(null,keechma.controller_manager.apply_start_or_wake_controllers,keechma.controller.start,new cljs.core.Keyword(null,"start","start",-355208981));
keechma.controller_manager.apply_wake_controllers = cljs.core.partial.call(null,keechma.controller_manager.apply_start_or_wake_controllers,keechma.controller.wake,new cljs.core.Keyword(null,"wake","wake",1262361182));
keechma.controller_manager.call_handler_on_started_controllers = (function keechma$controller_manager$call_handler_on_started_controllers(app_db_atom,reporter,start){
var seq__40319 = cljs.core.seq.call(null,start);
var chunk__40320 = null;
var count__40321 = (0);
var i__40322 = (0);
while(true){
if((i__40322 < count__40321)){
var vec__40323 = cljs.core._nth.call(null,chunk__40320,i__40322);
var topic = cljs.core.nth.call(null,vec__40323,(0),null);
var _ = cljs.core.nth.call(null,vec__40323,(1),null);
var controller_40329 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller.handler.call(null,controller_40329,app_db_atom,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller_40329),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller_40329));

var G__40330 = seq__40319;
var G__40331 = chunk__40320;
var G__40332 = count__40321;
var G__40333 = (i__40322 + (1));
seq__40319 = G__40330;
chunk__40320 = G__40331;
count__40321 = G__40332;
i__40322 = G__40333;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40319);
if(temp__5457__auto__){
var seq__40319__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40319__$1)){
var c__31148__auto__ = cljs.core.chunk_first.call(null,seq__40319__$1);
var G__40334 = cljs.core.chunk_rest.call(null,seq__40319__$1);
var G__40335 = c__31148__auto__;
var G__40336 = cljs.core.count.call(null,c__31148__auto__);
var G__40337 = (0);
seq__40319 = G__40334;
chunk__40320 = G__40335;
count__40321 = G__40336;
i__40322 = G__40337;
continue;
} else {
var vec__40326 = cljs.core.first.call(null,seq__40319__$1);
var topic = cljs.core.nth.call(null,vec__40326,(0),null);
var _ = cljs.core.nth.call(null,vec__40326,(1),null);
var controller_40338 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller.handler.call(null,controller_40338,app_db_atom,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller_40338),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller_40338));

var G__40339 = cljs.core.next.call(null,seq__40319__$1);
var G__40340 = null;
var G__40341 = (0);
var G__40342 = (0);
seq__40319 = G__40339;
chunk__40320 = G__40340;
count__40321 = G__40341;
i__40322 = G__40342;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.send_route_changed_to_surviving_controllers = (function keechma$controller_manager$send_route_changed_to_surviving_controllers(app_db_atom,reporter,route_changed,route_params){
var seq__40343 = cljs.core.seq.call(null,route_changed);
var chunk__40344 = null;
var count__40345 = (0);
var i__40346 = (0);
while(true){
if((i__40346 < count__40345)){
var topic = cljs.core._nth.call(null,chunk__40344,i__40346);
var controller_40347 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
keechma.controller_manager.send_command_to.call(null,reporter,controller_40347,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params);

var G__40348 = seq__40343;
var G__40349 = chunk__40344;
var G__40350 = count__40345;
var G__40351 = (i__40346 + (1));
seq__40343 = G__40348;
chunk__40344 = G__40349;
count__40345 = G__40350;
i__40346 = G__40351;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40343);
if(temp__5457__auto__){
var seq__40343__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40343__$1)){
var c__31148__auto__ = cljs.core.chunk_first.call(null,seq__40343__$1);
var G__40352 = cljs.core.chunk_rest.call(null,seq__40343__$1);
var G__40353 = c__31148__auto__;
var G__40354 = cljs.core.count.call(null,c__31148__auto__);
var G__40355 = (0);
seq__40343 = G__40352;
chunk__40344 = G__40353;
count__40345 = G__40354;
i__40346 = G__40355;
continue;
} else {
var topic = cljs.core.first.call(null,seq__40343__$1);
var controller_40356 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
keechma.controller_manager.send_command_to.call(null,reporter,controller_40356,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params);

var G__40357 = cljs.core.next.call(null,seq__40343__$1);
var G__40358 = null;
var G__40359 = (0);
var G__40360 = (0);
seq__40343 = G__40357;
chunk__40344 = G__40358;
count__40345 = G__40359;
i__40346 = G__40360;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.apply_route_change = (function keechma$controller_manager$apply_route_change(reporter,route_params,app_db_atom,commands_chan,controllers){
reporter.call(null,new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"out","out",-910545517),null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var app_db_40363 = cljs.core.deref.call(null,app_db_atom);
var execution_plan_40364 = keechma.controller_manager.route_change_execution_plan.call(null,route_params,cljs.core.get_in.call(null,app_db_40363,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null)),controllers);
var map__40361_40365 = execution_plan_40364;
var map__40361_40366__$1 = ((((!((map__40361_40365 == null)))?((((map__40361_40365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40361_40365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40361_40365):map__40361_40365);
var stop_40367 = cljs.core.get.call(null,map__40361_40366__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start_40368 = cljs.core.get.call(null,map__40361_40366__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var wake_40369 = cljs.core.get.call(null,map__40361_40366__$1,new cljs.core.Keyword(null,"wake","wake",1262361182));
var route_changed_40370 = cljs.core.get.call(null,map__40361_40366__$1,new cljs.core.Keyword(null,"route-changed","route-changed",455870141));
var get_running_40371 = ((function (app_db_40363,execution_plan_40364,map__40361_40365,map__40361_40366__$1,stop_40367,start_40368,wake_40369,route_changed_40370){
return (function (topic){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
});})(app_db_40363,execution_plan_40364,map__40361_40365,map__40361_40366__$1,stop_40367,start_40368,wake_40369,route_changed_40370))
;
cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_wake_controllers.call(null,keechma.controller_manager.apply_start_controllers.call(null,keechma.controller_manager.apply_stop_controllers.call(null,cljs.core.assoc.call(null,app_db_40363,new cljs.core.Keyword(null,"route","route",329891309),route_params),reporter,stop_40367),reporter,controllers,commands_chan,get_running_40371,start_40368),reporter,controllers,commands_chan,get_running_40371,wake_40369));

keechma.controller_manager.call_handler_on_started_controllers.call(null,app_db_atom,reporter,cljs.core.concat.call(null,start_40368,wake_40369));

keechma.controller_manager.send_route_changed_to_surviving_controllers.call(null,app_db_atom,reporter,route_changed_40370,route_params);

return reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),keechma.controller_manager.report_running_controllers.call(null,app_db_atom),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
});
keechma.controller_manager.call_ssr_handler_on_started_controllers = (function keechma$controller_manager$call_ssr_handler_on_started_controllers(app_db_atom,reporter,start,ssr_handler_done_cb){
var wait_chan = cljs.core.async.chan.call(null);
var wait_count = (function (){var wait_count = (0);
var start__$1 = start;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,start__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
var vec__40372 = s;
var topic = cljs.core.nth.call(null,vec__40372,(0),null);
var _ = cljs.core.nth.call(null,vec__40372,(1),null);
var controller = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"ssr-handler","ssr-handler",1473540493)], null),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var ret_val = keechma.controller.ssr_handler.call(null,controller,app_db_atom,((function (wait_count,start__$1,vec__40372,topic,_,controller,s,temp__5455__auto__,wait_chan){
return (function (){
return cljs.core.async.put_BANG_.call(null,wait_chan,true);
});})(wait_count,start__$1,vec__40372,topic,_,controller,s,temp__5455__auto__,wait_chan))
,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller));
if(cljs.core._EQ_.call(null,keechma.controller.not_implemented,ret_val)){
var G__40412 = wait_count;
var G__40413 = cljs.core.rest.call(null,start__$1);
wait_count = G__40412;
start__$1 = G__40413;
continue;
} else {
var G__40414 = (wait_count + (1));
var G__40415 = cljs.core.rest.call(null,start__$1);
wait_count = G__40414;
start__$1 = G__40415;
continue;
}
} else {
return wait_count;
}
break;
}
})();
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__,wait_chan,wait_count){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__,wait_chan,wait_count){
return (function (state_40394){
var state_val_40395 = (state_40394[(1)]);
if((state_val_40395 === (7))){
var inst_40382 = (state_40394[(2)]);
var state_40394__$1 = state_40394;
if(cljs.core.truth_(inst_40382)){
var statearr_40396_40416 = state_40394__$1;
(statearr_40396_40416[(1)] = (8));

} else {
var statearr_40397_40417 = state_40394__$1;
(statearr_40397_40417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40395 === (1))){
var inst_40375 = wait_count;
var state_40394__$1 = (function (){var statearr_40398 = state_40394;
(statearr_40398[(7)] = inst_40375);

return statearr_40398;
})();
var statearr_40399_40418 = state_40394__$1;
(statearr_40399_40418[(2)] = null);

(statearr_40399_40418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40395 === (4))){
var inst_40379 = ssr_handler_done_cb.call(null);
var state_40394__$1 = state_40394;
var statearr_40400_40419 = state_40394__$1;
(statearr_40400_40419[(2)] = inst_40379);

(statearr_40400_40419[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40395 === (6))){
var inst_40390 = (state_40394[(2)]);
var state_40394__$1 = state_40394;
var statearr_40401_40420 = state_40394__$1;
(statearr_40401_40420[(2)] = inst_40390);

(statearr_40401_40420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40395 === (3))){
var inst_40392 = (state_40394[(2)]);
var state_40394__$1 = state_40394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40394__$1,inst_40392);
} else {
if((state_val_40395 === (2))){
var inst_40375 = (state_40394[(7)]);
var inst_40377 = cljs.core._EQ_.call(null,(0),inst_40375);
var state_40394__$1 = state_40394;
if(inst_40377){
var statearr_40402_40421 = state_40394__$1;
(statearr_40402_40421[(1)] = (4));

} else {
var statearr_40403_40422 = state_40394__$1;
(statearr_40403_40422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40395 === (9))){
var state_40394__$1 = state_40394;
var statearr_40404_40423 = state_40394__$1;
(statearr_40404_40423[(2)] = null);

(statearr_40404_40423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40395 === (5))){
var state_40394__$1 = state_40394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40394__$1,(7),wait_chan);
} else {
if((state_val_40395 === (10))){
var inst_40388 = (state_40394[(2)]);
var state_40394__$1 = state_40394;
var statearr_40405_40424 = state_40394__$1;
(statearr_40405_40424[(2)] = inst_40388);

(statearr_40405_40424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40395 === (8))){
var inst_40375 = (state_40394[(7)]);
var inst_40384 = (inst_40375 - (1));
var inst_40375__$1 = inst_40384;
var state_40394__$1 = (function (){var statearr_40406 = state_40394;
(statearr_40406[(7)] = inst_40375__$1);

return statearr_40406;
})();
var statearr_40407_40425 = state_40394__$1;
(statearr_40407_40425[(2)] = null);

(statearr_40407_40425[(1)] = (2));


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
});})(c__33899__auto__,wait_chan,wait_count))
;
return ((function (switch__33809__auto__,c__33899__auto__,wait_chan,wait_count){
return (function() {
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto__ = null;
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto____0 = (function (){
var statearr_40408 = [null,null,null,null,null,null,null,null];
(statearr_40408[(0)] = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto__);

(statearr_40408[(1)] = (1));

return statearr_40408;
});
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto____1 = (function (state_40394){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_40394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e40409){if((e40409 instanceof Object)){
var ex__33813__auto__ = e40409;
var statearr_40410_40426 = state_40394;
(statearr_40410_40426[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40427 = state_40394;
state_40394 = G__40427;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto__ = function(state_40394){
switch(arguments.length){
case 0:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto____0.call(this);
case 1:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto____1.call(this,state_40394);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto____0;
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto____1;
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__,wait_chan,wait_count))
})();
var state__33901__auto__ = (function (){var statearr_40411 = f__33900__auto__.call(null);
(statearr_40411[(6)] = c__33899__auto__);

return statearr_40411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__,wait_chan,wait_count))
);

return c__33899__auto__;
});
keechma.controller_manager.start_ssr = (function keechma$controller_manager$start_ssr(routes_chan,commands_chan,app_db_atom,controllers,reporter,done_cb){
var app_db = cljs.core.deref.call(null,app_db_atom);
var route_params = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db);
var execution_plan = keechma.controller_manager.route_change_execution_plan.call(null,route_params,cljs.core.PersistentArrayMap.EMPTY,controllers);
var map__40428 = execution_plan;
var map__40428__$1 = ((((!((map__40428 == null)))?((((map__40428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40428):map__40428);
var start = cljs.core.get.call(null,map__40428__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var get_running = ((function (app_db,route_params,execution_plan,map__40428,map__40428__$1,start){
return (function (topic){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
});})(app_db,route_params,execution_plan,map__40428,map__40428__$1,start))
;
var ssr_handler_done_cb = ((function (app_db,route_params,execution_plan,map__40428,map__40428__$1,start,get_running){
return (function (){
cljs.core.async.close_BANG_.call(null,commands_chan);

return done_cb.call(null);
});})(app_db,route_params,execution_plan,map__40428,map__40428__$1,start,get_running))
;
cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_start_controllers.call(null,app_db,reporter,controllers,commands_chan,get_running,start));

var c__33899__auto___40467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___40467,app_db,route_params,execution_plan,map__40428,map__40428__$1,start,get_running,ssr_handler_done_cb){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___40467,app_db,route_params,execution_plan,map__40428,map__40428__$1,start,get_running,ssr_handler_done_cb){
return (function (state_40453){
var state_val_40454 = (state_40453[(1)]);
if((state_val_40454 === (1))){
var state_40453__$1 = state_40453;
var statearr_40455_40468 = state_40453__$1;
(statearr_40455_40468[(2)] = null);

(statearr_40455_40468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (2))){
var state_40453__$1 = state_40453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40453__$1,(4),commands_chan);
} else {
if((state_val_40454 === (3))){
var inst_40451 = (state_40453[(2)]);
var state_40453__$1 = state_40453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40453__$1,inst_40451);
} else {
if((state_val_40454 === (4))){
var inst_40432 = (state_40453[(7)]);
var inst_40432__$1 = (state_40453[(2)]);
var state_40453__$1 = (function (){var statearr_40456 = state_40453;
(statearr_40456[(7)] = inst_40432__$1);

return statearr_40456;
})();
if(cljs.core.truth_(inst_40432__$1)){
var statearr_40457_40469 = state_40453__$1;
(statearr_40457_40469[(1)] = (5));

} else {
var statearr_40458_40470 = state_40453__$1;
(statearr_40458_40470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (5))){
var inst_40432 = (state_40453[(7)]);
var inst_40437 = cljs.core.nth.call(null,inst_40432,(0),null);
var inst_40438 = cljs.core.nth.call(null,inst_40432,(1),null);
var inst_40439 = cljs.core.nth.call(null,inst_40432,(2),null);
var inst_40440 = cljs.core.deref.call(null,app_db_atom);
var inst_40441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40442 = [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)];
var inst_40443 = (new cljs.core.PersistentVector(null,2,(5),inst_40441,inst_40442,null));
var inst_40444 = cljs.core.get_in.call(null,inst_40440,inst_40443);
var inst_40445 = keechma.controller_manager.route_command_to_controller.call(null,reporter,inst_40444,inst_40437,inst_40438,inst_40439);
var state_40453__$1 = (function (){var statearr_40459 = state_40453;
(statearr_40459[(8)] = inst_40445);

return statearr_40459;
})();
var statearr_40460_40471 = state_40453__$1;
(statearr_40460_40471[(2)] = null);

(statearr_40460_40471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (6))){
var state_40453__$1 = state_40453;
var statearr_40461_40472 = state_40453__$1;
(statearr_40461_40472[(2)] = null);

(statearr_40461_40472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (7))){
var inst_40449 = (state_40453[(2)]);
var state_40453__$1 = state_40453;
var statearr_40462_40473 = state_40453__$1;
(statearr_40462_40473[(2)] = inst_40449);

(statearr_40462_40473[(1)] = (3));


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
});})(c__33899__auto___40467,app_db,route_params,execution_plan,map__40428,map__40428__$1,start,get_running,ssr_handler_done_cb))
;
return ((function (switch__33809__auto__,c__33899__auto___40467,app_db,route_params,execution_plan,map__40428,map__40428__$1,start,get_running,ssr_handler_done_cb){
return (function() {
var keechma$controller_manager$start_ssr_$_state_machine__33810__auto__ = null;
var keechma$controller_manager$start_ssr_$_state_machine__33810__auto____0 = (function (){
var statearr_40463 = [null,null,null,null,null,null,null,null,null];
(statearr_40463[(0)] = keechma$controller_manager$start_ssr_$_state_machine__33810__auto__);

(statearr_40463[(1)] = (1));

return statearr_40463;
});
var keechma$controller_manager$start_ssr_$_state_machine__33810__auto____1 = (function (state_40453){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_40453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e40464){if((e40464 instanceof Object)){
var ex__33813__auto__ = e40464;
var statearr_40465_40474 = state_40453;
(statearr_40465_40474[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40475 = state_40453;
state_40453 = G__40475;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
keechma$controller_manager$start_ssr_$_state_machine__33810__auto__ = function(state_40453){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_ssr_$_state_machine__33810__auto____0.call(this);
case 1:
return keechma$controller_manager$start_ssr_$_state_machine__33810__auto____1.call(this,state_40453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$start_ssr_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_ssr_$_state_machine__33810__auto____0;
keechma$controller_manager$start_ssr_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_ssr_$_state_machine__33810__auto____1;
return keechma$controller_manager$start_ssr_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___40467,app_db,route_params,execution_plan,map__40428,map__40428__$1,start,get_running,ssr_handler_done_cb))
})();
var state__33901__auto__ = (function (){var statearr_40466 = f__33900__auto__.call(null);
(statearr_40466[(6)] = c__33899__auto___40467);

return statearr_40466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___40467,app_db,route_params,execution_plan,map__40428,map__40428__$1,start,get_running,ssr_handler_done_cb))
);


return keechma.controller_manager.call_ssr_handler_on_started_controllers.call(null,app_db_atom,reporter,start,ssr_handler_done_cb);
});
/**
 * Starts the controller manager. Controller manager is the central part
 *   of the application that manages the lifecycle of the controllers and routes
 *   the messages sent to them.
 * 
 *   `start` function receives the following parameters:
 *   
 *   - `route-chan` - Route changes will communicated through this channel
 *   - `commands-chan` - User (UI) commands will be sent through this channel
 *   - `app-db` - application state atom
 *   - `controllers` map of controllers registered for the app
 * 
 *   Each time when the new route data comes through the `route-chan` controller
 *   manager will do the following:
 * 
 *   - call the `params` function on each registered controller
 *   - compare the value returned by the `params` function with the value that
 *   was returned last time when the route changes
 *   - based on the comparison it will do one of the following:
 *  - if the last value was `nil` and the current value is `nil` - do nothing
 *  - if the last value was `nil` and the current value is not `nil` - start the controller
 *  - if the last value was not `nil` and the current value is `nil` - stop the controller
 *  - if the last value was not `nil` and the current value is not `nil` and these values are the same - do nothing
 *  - if the last value was not `nil` and the current value is not `nil` and these values are different - restart the controller (stop the current instance and start the new one)
 * 
 *   Controller manager also acts as a command router. Each time a command comes - through the `commands-chan`
 *   the name of the command should look like this `[:controlnler-key :command-name]`. Controller manager will route the `:command-name` command to the appropriate controller based on the `:controller-key`. Controller key is the key under which the controller was registered in the `controllers` argument.
 *   
 */
keechma.controller_manager.start = (function keechma$controller_manager$start(route_chan,commands_chan,app_db_atom,controllers,reporter){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.reduce.call(null,(function (acc,p__40476){
var vec__40477 = p__40476;
var k = cljs.core.nth.call(null,vec__40477,(0),null);
var _ = cljs.core.nth.call(null,vec__40477,(1),null);
return cljs.core.conj.call(null,acc,k);
}),cljs.core.PersistentVector.EMPTY,controllers),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller_manager.apply_route_change.call(null,reporter,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_db_atom)),app_db_atom,commands_chan,controllers);

var stop_route_block = cljs.core.async.chan.call(null);
var stop_command_block = cljs.core.async.chan.call(null);
var running_chans = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__,stop_route_block,stop_command_block){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__,stop_route_block,stop_command_block){
return (function (state_40512){
var state_val_40513 = (state_40512[(1)]);
if((state_val_40513 === (7))){
var inst_40495 = (state_40512[(2)]);
var state_40512__$1 = state_40512;
if(cljs.core.truth_(inst_40495)){
var statearr_40514_40599 = state_40512__$1;
(statearr_40514_40599[(1)] = (8));

} else {
var statearr_40515_40600 = state_40512__$1;
(statearr_40515_40600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40513 === (1))){
var state_40512__$1 = state_40512;
var statearr_40516_40601 = state_40512__$1;
(statearr_40516_40601[(2)] = null);

(statearr_40516_40601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40513 === (4))){
var inst_40491 = (state_40512[(7)]);
var inst_40488 = (state_40512[(2)]);
var inst_40489 = cljs.core.nth.call(null,inst_40488,(0),null);
var inst_40490 = cljs.core.nth.call(null,inst_40488,(1),null);
var inst_40491__$1 = cljs.core.not_EQ_.call(null,inst_40490,stop_route_block);
var state_40512__$1 = (function (){var statearr_40517 = state_40512;
(statearr_40517[(7)] = inst_40491__$1);

(statearr_40517[(8)] = inst_40489);

return statearr_40517;
})();
if(inst_40491__$1){
var statearr_40518_40602 = state_40512__$1;
(statearr_40518_40602[(1)] = (5));

} else {
var statearr_40519_40603 = state_40512__$1;
(statearr_40519_40603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40513 === (13))){
var inst_40504 = (state_40512[(2)]);
var state_40512__$1 = (function (){var statearr_40520 = state_40512;
(statearr_40520[(9)] = inst_40504);

return statearr_40520;
})();
var statearr_40521_40604 = state_40512__$1;
(statearr_40521_40604[(2)] = null);

(statearr_40521_40604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40513 === (6))){
var inst_40491 = (state_40512[(7)]);
var state_40512__$1 = state_40512;
var statearr_40522_40605 = state_40512__$1;
(statearr_40522_40605[(2)] = inst_40491);

(statearr_40522_40605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40513 === (3))){
var inst_40510 = (state_40512[(2)]);
var state_40512__$1 = state_40512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40512__$1,inst_40510);
} else {
if((state_val_40513 === (12))){
var state_40512__$1 = state_40512;
var statearr_40523_40606 = state_40512__$1;
(statearr_40523_40606[(2)] = null);

(statearr_40523_40606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40513 === (2))){
var inst_40484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40485 = [stop_route_block,route_chan];
var inst_40486 = (new cljs.core.PersistentVector(null,2,(5),inst_40484,inst_40485,null));
var state_40512__$1 = state_40512;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40512__$1,(4),inst_40486);
} else {
if((state_val_40513 === (11))){
var inst_40489 = (state_40512[(8)]);
var inst_40501 = keechma.controller_manager.apply_route_change.call(null,reporter,inst_40489,app_db_atom,commands_chan,controllers);
var state_40512__$1 = state_40512;
var statearr_40524_40607 = state_40512__$1;
(statearr_40524_40607[(2)] = inst_40501);

(statearr_40524_40607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40513 === (9))){
var state_40512__$1 = state_40512;
var statearr_40525_40608 = state_40512__$1;
(statearr_40525_40608[(2)] = null);

(statearr_40525_40608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40513 === (5))){
var inst_40489 = (state_40512[(8)]);
var state_40512__$1 = state_40512;
var statearr_40526_40609 = state_40512__$1;
(statearr_40526_40609[(2)] = inst_40489);

(statearr_40526_40609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40513 === (10))){
var inst_40508 = (state_40512[(2)]);
var state_40512__$1 = state_40512;
var statearr_40527_40610 = state_40512__$1;
(statearr_40527_40610[(2)] = inst_40508);

(statearr_40527_40610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40513 === (8))){
var inst_40489 = (state_40512[(8)]);
var inst_40497 = cljs.core.deref.call(null,app_db_atom);
var inst_40498 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(inst_40497);
var inst_40499 = cljs.core.not_EQ_.call(null,inst_40489,inst_40498);
var state_40512__$1 = state_40512;
if(inst_40499){
var statearr_40528_40611 = state_40512__$1;
(statearr_40528_40611[(1)] = (11));

} else {
var statearr_40529_40612 = state_40512__$1;
(statearr_40529_40612[(1)] = (12));

}

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
});})(c__33899__auto__,stop_route_block,stop_command_block))
;
return ((function (switch__33809__auto__,c__33899__auto__,stop_route_block,stop_command_block){
return (function() {
var keechma$controller_manager$start_$_state_machine__33810__auto__ = null;
var keechma$controller_manager$start_$_state_machine__33810__auto____0 = (function (){
var statearr_40530 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40530[(0)] = keechma$controller_manager$start_$_state_machine__33810__auto__);

(statearr_40530[(1)] = (1));

return statearr_40530;
});
var keechma$controller_manager$start_$_state_machine__33810__auto____1 = (function (state_40512){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_40512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e40531){if((e40531 instanceof Object)){
var ex__33813__auto__ = e40531;
var statearr_40532_40613 = state_40512;
(statearr_40532_40613[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40614 = state_40512;
state_40512 = G__40614;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__33810__auto__ = function(state_40512){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__33810__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__33810__auto____1.call(this,state_40512);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$start_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__33810__auto____0;
keechma$controller_manager$start_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__33810__auto____1;
return keechma$controller_manager$start_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__,stop_route_block,stop_command_block))
})();
var state__33901__auto__ = (function (){var statearr_40533 = f__33900__auto__.call(null);
(statearr_40533[(6)] = c__33899__auto__);

return statearr_40533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__,stop_route_block,stop_command_block))
);

return c__33899__auto__;
})(),(function (){var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__,stop_route_block,stop_command_block){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__,stop_route_block,stop_command_block){
return (function (state_40572){
var state_val_40573 = (state_40572[(1)]);
if((state_val_40573 === (7))){
var inst_40568 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
var statearr_40574_40615 = state_40572__$1;
(statearr_40574_40615[(2)] = inst_40568);

(statearr_40574_40615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (1))){
var state_40572__$1 = state_40572;
var statearr_40575_40616 = state_40572__$1;
(statearr_40575_40616[(2)] = null);

(statearr_40575_40616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (4))){
var inst_40542 = (state_40572[(2)]);
var inst_40543 = cljs.core.nth.call(null,inst_40542,(0),null);
var inst_40544 = cljs.core.nth.call(null,inst_40542,(1),null);
var inst_40545 = cljs.core._EQ_.call(null,inst_40544,stop_command_block);
var state_40572__$1 = (function (){var statearr_40576 = state_40572;
(statearr_40576[(7)] = inst_40543);

return statearr_40576;
})();
if(inst_40545){
var statearr_40577_40617 = state_40572__$1;
(statearr_40577_40617[(1)] = (5));

} else {
var statearr_40578_40618 = state_40572__$1;
(statearr_40578_40618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (6))){
var inst_40551 = (state_40572[(8)]);
var inst_40543 = (state_40572[(7)]);
var inst_40551__$1 = cljs.core.nth.call(null,inst_40543,(0),null);
var inst_40552 = cljs.core.nth.call(null,inst_40543,(1),null);
var inst_40553 = cljs.core.nth.call(null,inst_40543,(2),null);
var inst_40554 = cljs.core.deref.call(null,app_db_atom);
var inst_40555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40556 = [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)];
var inst_40557 = (new cljs.core.PersistentVector(null,2,(5),inst_40555,inst_40556,null));
var inst_40558 = cljs.core.get_in.call(null,inst_40554,inst_40557);
var inst_40559 = (inst_40551__$1 == null);
var inst_40560 = cljs.core.not.call(null,inst_40559);
var state_40572__$1 = (function (){var statearr_40579 = state_40572;
(statearr_40579[(9)] = inst_40558);

(statearr_40579[(8)] = inst_40551__$1);

(statearr_40579[(10)] = inst_40553);

(statearr_40579[(11)] = inst_40552);

return statearr_40579;
})();
if(inst_40560){
var statearr_40580_40619 = state_40572__$1;
(statearr_40580_40619[(1)] = (8));

} else {
var statearr_40581_40620 = state_40572__$1;
(statearr_40581_40620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (3))){
var inst_40570 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40572__$1,inst_40570);
} else {
if((state_val_40573 === (2))){
var inst_40538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40539 = [stop_command_block,commands_chan];
var inst_40540 = (new cljs.core.PersistentVector(null,2,(5),inst_40538,inst_40539,null));
var state_40572__$1 = state_40572;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40572__$1,(4),inst_40540);
} else {
if((state_val_40573 === (9))){
var state_40572__$1 = state_40572;
var statearr_40582_40621 = state_40572__$1;
(statearr_40582_40621[(2)] = null);

(statearr_40582_40621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (5))){
var state_40572__$1 = state_40572;
var statearr_40583_40622 = state_40572__$1;
(statearr_40583_40622[(2)] = null);

(statearr_40583_40622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (10))){
var inst_40565 = (state_40572[(2)]);
var state_40572__$1 = (function (){var statearr_40584 = state_40572;
(statearr_40584[(12)] = inst_40565);

return statearr_40584;
})();
var statearr_40585_40623 = state_40572__$1;
(statearr_40585_40623[(2)] = null);

(statearr_40585_40623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (8))){
var inst_40558 = (state_40572[(9)]);
var inst_40551 = (state_40572[(8)]);
var inst_40553 = (state_40572[(10)]);
var inst_40552 = (state_40572[(11)]);
var inst_40562 = keechma.controller_manager.route_command_to_controller.call(null,reporter,inst_40558,inst_40551,inst_40552,inst_40553);
var state_40572__$1 = state_40572;
var statearr_40586_40624 = state_40572__$1;
(statearr_40586_40624[(2)] = inst_40562);

(statearr_40586_40624[(1)] = (10));


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
});})(c__33899__auto__,stop_route_block,stop_command_block))
;
return ((function (switch__33809__auto__,c__33899__auto__,stop_route_block,stop_command_block){
return (function() {
var keechma$controller_manager$start_$_state_machine__33810__auto__ = null;
var keechma$controller_manager$start_$_state_machine__33810__auto____0 = (function (){
var statearr_40587 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40587[(0)] = keechma$controller_manager$start_$_state_machine__33810__auto__);

(statearr_40587[(1)] = (1));

return statearr_40587;
});
var keechma$controller_manager$start_$_state_machine__33810__auto____1 = (function (state_40572){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_40572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e40588){if((e40588 instanceof Object)){
var ex__33813__auto__ = e40588;
var statearr_40589_40625 = state_40572;
(statearr_40589_40625[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40626 = state_40572;
state_40572 = G__40626;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__33810__auto__ = function(state_40572){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__33810__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__33810__auto____1.call(this,state_40572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$start_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__33810__auto____0;
keechma$controller_manager$start_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__33810__auto____1;
return keechma$controller_manager$start_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__,stop_route_block,stop_command_block))
})();
var state__33901__auto__ = (function (){var statearr_40590 = f__33900__auto__.call(null);
(statearr_40590[(6)] = c__33899__auto__);

return statearr_40590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__,stop_route_block,stop_command_block))
);

return c__33899__auto__;
})()], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"running-chans","running-chans",-1708113388),running_chans,new cljs.core.Keyword(null,"stop","stop",-2140911342),((function (stop_route_block,stop_command_block,running_chans){
return (function (){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"stop","stop",-2140911342),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var controllers__$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
cljs.core.async.close_BANG_.call(null,stop_route_block);

cljs.core.async.close_BANG_.call(null,stop_command_block);

var seq__40591_40627 = cljs.core.seq.call(null,running_chans);
var chunk__40592_40628 = null;
var count__40593_40629 = (0);
var i__40594_40630 = (0);
while(true){
if((i__40594_40630 < count__40593_40629)){
var running_40631 = cljs.core._nth.call(null,chunk__40592_40628,i__40594_40630);
cljs.core.async.close_BANG_.call(null,running_40631);

var G__40632 = seq__40591_40627;
var G__40633 = chunk__40592_40628;
var G__40634 = count__40593_40629;
var G__40635 = (i__40594_40630 + (1));
seq__40591_40627 = G__40632;
chunk__40592_40628 = G__40633;
count__40593_40629 = G__40634;
i__40594_40630 = G__40635;
continue;
} else {
var temp__5457__auto___40636 = cljs.core.seq.call(null,seq__40591_40627);
if(temp__5457__auto___40636){
var seq__40591_40637__$1 = temp__5457__auto___40636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40591_40637__$1)){
var c__31148__auto___40638 = cljs.core.chunk_first.call(null,seq__40591_40637__$1);
var G__40639 = cljs.core.chunk_rest.call(null,seq__40591_40637__$1);
var G__40640 = c__31148__auto___40638;
var G__40641 = cljs.core.count.call(null,c__31148__auto___40638);
var G__40642 = (0);
seq__40591_40627 = G__40639;
chunk__40592_40628 = G__40640;
count__40593_40629 = G__40641;
i__40594_40630 = G__40642;
continue;
} else {
var running_40643 = cljs.core.first.call(null,seq__40591_40637__$1);
cljs.core.async.close_BANG_.call(null,running_40643);

var G__40644 = cljs.core.next.call(null,seq__40591_40637__$1);
var G__40645 = null;
var G__40646 = (0);
var G__40647 = (0);
seq__40591_40627 = G__40644;
chunk__40592_40628 = G__40645;
count__40593_40629 = G__40646;
i__40594_40630 = G__40647;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_stop_controllers.call(null,cljs.core.deref.call(null,app_db_atom),reporter,cljs.core.reduce.call(null,((function (controllers__$1,stop_route_block,stop_command_block,running_chans){
return (function (acc,p__40595){
var vec__40596 = p__40595;
var key = cljs.core.nth.call(null,vec__40596,(0),null);
var controller = cljs.core.nth.call(null,vec__40596,(1),null);
return cljs.core.assoc.call(null,acc,key,cljs.core.PersistentArrayMap.EMPTY);
});})(controllers__$1,stop_route_block,stop_command_block,running_chans))
,cljs.core.PersistentArrayMap.EMPTY,controllers__$1)));
});})(stop_route_block,stop_command_block,running_chans))
], null);
});

//# sourceMappingURL=controller_manager.js.map?rel=1515669756523
