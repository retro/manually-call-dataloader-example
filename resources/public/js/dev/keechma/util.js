// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
keechma.util.update_values = (function keechma$util$update_values(var_args){
var args__31503__auto__ = [];
var len__31496__auto___37777 = arguments.length;
var i__31497__auto___37778 = (0);
while(true){
if((i__31497__auto___37778 < len__31496__auto___37777)){
args__31503__auto__.push((arguments[i__31497__auto___37778]));

var G__37779 = (i__31497__auto___37778 + (1));
i__31497__auto___37778 = G__37779;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((2) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((2)),(0),null)):null);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31504__auto__);
});

keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__37773){
var vec__37774 = p__37773;
var k = cljs.core.nth.call(null,vec__37774,(0),null);
var v = cljs.core.nth.call(null,vec__37774,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

keechma.util.update_values.cljs$lang$maxFixedArity = (2);

keechma.util.update_values.cljs$lang$applyTo = (function (seq37770){
var G__37771 = cljs.core.first.call(null,seq37770);
var seq37770__$1 = cljs.core.next.call(null,seq37770);
var G__37772 = cljs.core.first.call(null,seq37770__$1);
var seq37770__$2 = cljs.core.next.call(null,seq37770__$1);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic(G__37771,G__37772,seq37770__$2);
});

/**
 * true if seq contains elm
 */
keechma.util.in_QMARK_ = (function keechma$util$in_QMARK_(seq,elm){
return cljs.core.some.call(null,(function (p1__37780_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__37780_SHARP_);
}),seq);
});
keechma.util.without = (function keechma$util$without(list,val){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,(function (ls_val){
return cljs.core._EQ_.call(null,val,ls_val);
}),list));
});
/**
 * Return a channel which will close on the nth next animation frame.
 */
keechma.util.animation_frame = (function keechma$util$animation_frame(var_args){
var G__37782 = arguments.length;
switch (G__37782) {
case 0:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0 = (function (){
return keechma.util.animation_frame.call(null,(1));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1 = (function (n){
return keechma.util.animation_frame.call(null,n,cljs.core.async.chan.call(null,(1)));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2 = (function (n,out){
window.requestAnimationFrame((function (timestamp){
if(cljs.core._EQ_.call(null,n,(1))){
cljs.core.async.put_BANG_.call(null,out,timestamp);

return cljs.core.async.close_BANG_.call(null,out);
} else {
return keechma.util.animation_frame.call(null,(n - (1)),out);
}
}));

return out;
});

keechma.util.animation_frame.cljs$lang$maxFixedArity = 2;

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
keechma.util.dissoc_in = (function keechma$util$dissoc_in(m,p__37784){
var vec__37785 = p__37784;
var seq__37786 = cljs.core.seq.call(null,vec__37785);
var first__37787 = cljs.core.first.call(null,seq__37786);
var seq__37786__$1 = cljs.core.next.call(null,seq__37786);
var k = first__37787;
var ks = seq__37786__$1;
var keys = vec__37785;
if(ks){
var temp__5455__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var nextmap = temp__5455__auto__;
var newmap = keechma.util.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});

//# sourceMappingURL=util.js.map?rel=1515669753155
