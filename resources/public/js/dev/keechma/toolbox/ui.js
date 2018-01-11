// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.toolbox.ui');
goog.require('cljs.core');
goog.require('keechma.ui_component');
/**
 * Read and defer a component subscription
 */
keechma.toolbox.ui.sub_GT_ = (function keechma$toolbox$ui$sub_GT_(var_args){
var args__31503__auto__ = [];
var len__31496__auto___37997 = arguments.length;
var i__31497__auto___37998 = (0);
while(true){
if((i__31497__auto___37998 < len__31496__auto___37997)){
args__31503__auto__.push((arguments[i__31497__auto___37998]));

var G__37999 = (i__31497__auto___37998 + (1));
i__31497__auto___37998 = G__37999;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((2) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31504__auto__);
});

keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,subscription,args){
return cljs.core.deref.call(null,keechma.ui_component.subscription.call(null,ctx,subscription,args));
});

keechma.toolbox.ui.sub_GT_.cljs$lang$maxFixedArity = (2);

keechma.toolbox.ui.sub_GT_.cljs$lang$applyTo = (function (seq37994){
var G__37995 = cljs.core.first.call(null,seq37994);
var seq37994__$1 = cljs.core.next.call(null,seq37994);
var G__37996 = cljs.core.first.call(null,seq37994__$1);
var seq37994__$2 = cljs.core.next.call(null,seq37994__$1);
return keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic(G__37995,G__37996,seq37994__$2);
});

/**
 * Send a command to the controller
 */
keechma.toolbox.ui._LT_cmd = (function keechma$toolbox$ui$_LT_cmd(var_args){
var args__31503__auto__ = [];
var len__31496__auto___38003 = arguments.length;
var i__31497__auto___38004 = (0);
while(true){
if((i__31497__auto___38004 < len__31496__auto___38003)){
args__31503__auto__.push((arguments[i__31497__auto___38004]));

var G__38005 = (i__31497__auto___38004 + (1));
i__31497__auto___38004 = G__38005;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((2) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31504__auto__);
});

keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,command,args){
return cljs.core.apply.call(null,keechma.ui_component.send_command,ctx,command,args);
});

keechma.toolbox.ui._LT_cmd.cljs$lang$maxFixedArity = (2);

keechma.toolbox.ui._LT_cmd.cljs$lang$applyTo = (function (seq38000){
var G__38001 = cljs.core.first.call(null,seq38000);
var seq38000__$1 = cljs.core.next.call(null,seq38000);
var G__38002 = cljs.core.first.call(null,seq38000__$1);
var seq38000__$2 = cljs.core.next.call(null,seq38000__$1);
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic(G__38001,G__38002,seq38000__$2);
});

/**
 * Read current route data. Derefs the route subscription
 */
keechma.toolbox.ui.route_GT_ = (function keechma$toolbox$ui$route_GT_(ctx){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,keechma.ui_component.current_route.call(null,ctx)));
});

//# sourceMappingURL=ui.js.map?rel=1515669753712
