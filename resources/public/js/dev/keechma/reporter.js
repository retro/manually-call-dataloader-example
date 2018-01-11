// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.reporter');
goog.require('cljs.core');
keechma.reporter.now = (function keechma$reporter$now(){
return (new Date()).getTime();
});
keechma.reporter.cmd_info = (function keechma$reporter$cmd_info(var_args){
var G__37760 = arguments.length;
switch (G__37760) {
case 0:
return keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0 = (function (){
return keechma.reporter.cmd_info.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$1 = (function (info){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null,new cljs.core.Keyword(null,"cmd","cmd",-302931143)),new cljs.core.Keyword(null,"created-at","created-at",-89248644),keechma.reporter.now.call(null),new cljs.core.Keyword(null,"duration","duration",1444101068),(0),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188)], null),info);
});

keechma.reporter.cmd_info.cljs$lang$maxFixedArity = 1;

keechma.reporter.update_duration = (function keechma$reporter$update_duration(info){
var now_time = keechma.reporter.now.call(null);
return cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"duration","duration",1444101068),(now_time - new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(info)));
});
keechma.reporter.with_origin = (function keechma$reporter$with_origin(var_args){
var G__37763 = arguments.length;
switch (G__37763) {
case 1:
return keechma.reporter.with_origin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.reporter.with_origin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.reporter.with_origin.cljs$core$IFn$_invoke$arity$1 = (function (origin){
return keechma.reporter.cmd_info.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"origin-id","origin-id",-1921070119),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(origin)], null));
});

keechma.reporter.with_origin.cljs$core$IFn$_invoke$arity$2 = (function (origin,payload){
return keechma.reporter.cmd_info.call(null,cljs.core.assoc.call(null,payload,new cljs.core.Keyword(null,"origin-id","origin-id",-1921070119),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(origin)));
});

keechma.reporter.with_origin.cljs$lang$maxFixedArity = 2;

keechma.reporter.with_parent = (function keechma$reporter$with_parent(var_args){
var G__37766 = arguments.length;
switch (G__37766) {
case 1:
return keechma.reporter.with_parent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.reporter.with_parent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.reporter.with_parent.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return keechma.reporter.cmd_info.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent)], null));
});

keechma.reporter.with_parent.cljs$core$IFn$_invoke$arity$2 = (function (parent,payload){
return keechma.reporter.cmd_info.call(null,cljs.core.assoc.call(null,payload,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent)));
});

keechma.reporter.with_parent.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=reporter.js.map?rel=1515669753131
