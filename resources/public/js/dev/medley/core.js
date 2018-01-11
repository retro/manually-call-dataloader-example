// Compiled by ClojureScript 1.9.946 {}
goog.provide('medley.core');
goog.require('cljs.core');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(pred,coll){
return cljs.core.reduce.call(null,(function (_,x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.reduced.call(null,x);
} else {
return null;
}
}),null,coll);
});
/**
 * Dissociate a value in a nested assocative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
medley.core.dissoc_in = (function medley$core$dissoc_in(m,ks){
var temp__5455__auto__ = cljs.core.seq.call(null,ks);
if(temp__5455__auto__){
var vec__37186 = temp__5455__auto__;
var seq__37187 = cljs.core.seq.call(null,vec__37186);
var first__37188 = cljs.core.first.call(null,seq__37187);
var seq__37187__$1 = cljs.core.next.call(null,seq__37187);
var k = first__37188;
var ks__$1 = seq__37187__$1;
if(cljs.core.seq.call(null,ks__$1)){
var v = medley.core.dissoc_in.call(null,cljs.core.get.call(null,m,k),ks__$1);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
});
/**
 * Associates a key with a value in a map, if and only if the value is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var G__37194 = arguments.length;
switch (G__37194) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__31519__auto__ = [];
var len__31496__auto___37200 = arguments.length;
var i__31497__auto___37201 = (0);
while(true){
if((i__31497__auto___37201 < len__31496__auto___37200)){
args_arr__31519__auto__.push((arguments[i__31497__auto___37201]));

var G__37202 = (i__31497__auto___37201 + (1));
i__31497__auto___37201 = G__37202;
continue;
} else {
}
break;
}

var argseq__31520__auto__ = (new cljs.core.IndexedSeq(args_arr__31519__auto__.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31520__auto__);

}
});

medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return cljs.core.reduce.call(null,(function (m__$1,p__37195){
var vec__37196 = p__37195;
var k__$1 = cljs.core.nth.call(null,vec__37196,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__37196,(1),null);
return medley.core.assoc_some.call(null,m__$1,k__$1,v__$1);
}),medley.core.assoc_some.call(null,m,k,v),cljs.core.partition.call(null,(2),kvs));
});

medley.core.assoc_some.cljs$lang$applyTo = (function (seq37190){
var G__37191 = cljs.core.first.call(null,seq37190);
var seq37190__$1 = cljs.core.next.call(null,seq37190);
var G__37192 = cljs.core.first.call(null,seq37190__$1);
var seq37190__$2 = cljs.core.next.call(null,seq37190__$1);
var G__37193 = cljs.core.first.call(null,seq37190__$2);
var seq37190__$3 = cljs.core.next.call(null,seq37190__$2);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__37191,G__37192,G__37193,seq37190__$3);
});

medley.core.assoc_some.cljs$lang$maxFixedArity = (3);

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if(!((coll == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
}
});
medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
if(cljs.core.truth_(medley.core.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc_BANG_),cljs.core.transient$.call(null,cljs.core.empty.call(null,coll)),coll));
} else {
return cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc),cljs.core.empty.call(null,coll),coll);
}
});
/**
 * Create a map entry for a key and value pair.
 */
medley.core.map_entry = (function medley$core$map_entry(k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
});
/**
 * Maps a function over the key/value pairs of an associate collection. Expects
 *   a function that takes two arguments, the key and value, and returns the new
 *   key and value as a collection of two elements.
 */
medley.core.map_kv = (function medley$core$map_kv(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
var vec__37204 = f.call(null,k,v);
var k__$1 = cljs.core.nth.call(null,vec__37204,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__37204,(1),null);
return xf.call(null,m,k__$1,v__$1);
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k),v);
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
medley.core.map_vals = (function medley$core$map_vals(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,v));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns true.
 */
medley.core.filter_keys = (function medley$core$filter_keys(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns true.
 */
medley.core.filter_vals = (function medley$core$filter_vals(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns false.
 */
medley.core.remove_kv = (function medley$core$remove_kv(pred,coll){
return medley.core.filter_kv.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var G__37208 = arguments.length;
switch (G__37208) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,medley.core.queue.call(null),coll);
});

medley.core.queue.cljs$lang$maxFixedArity = 1;

/**
 * Returns true if x implements clojure.lang.PersistentQueue.
 */
medley.core.queue_QMARK_ = (function medley$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns true if x is a boolean.
 */
medley.core.boolean_QMARK_ = (function medley$core$boolean_QMARK_(x){
return (x === true) || (x === false);
});
/**
 * Return the least argument (as defined by the compare function) in O(n) time.
 */
medley.core.least = (function medley$core$least(var_args){
var G__37214 = arguments.length;
switch (G__37214) {
case 0:
return medley.core.least.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.least.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__31519__auto__ = [];
var len__31496__auto___37216 = arguments.length;
var i__31497__auto___37217 = (0);
while(true){
if((i__31497__auto___37217 < len__31496__auto___37216)){
args_arr__31519__auto__.push((arguments[i__31497__auto___37217]));

var G__37218 = (i__31497__auto___37217 + (1));
i__31497__auto___37217 = G__37218;
continue;
} else {
}
break;
}

var argseq__31520__auto__ = (new cljs.core.IndexedSeq(args_arr__31519__auto__.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31520__auto__);

}
});

medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) < (0))){
return a;
} else {
return b;
}
});

medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.least,medley.core.least.call(null,a,b),more);
});

medley.core.least.cljs$lang$applyTo = (function (seq37211){
var G__37212 = cljs.core.first.call(null,seq37211);
var seq37211__$1 = cljs.core.next.call(null,seq37211);
var G__37213 = cljs.core.first.call(null,seq37211__$1);
var seq37211__$2 = cljs.core.next.call(null,seq37211__$1);
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic(G__37212,G__37213,seq37211__$2);
});

medley.core.least.cljs$lang$maxFixedArity = (2);

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__37223 = arguments.length;
switch (G__37223) {
case 0:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__31519__auto__ = [];
var len__31496__auto___37225 = arguments.length;
var i__31497__auto___37226 = (0);
while(true){
if((i__31497__auto___37226 < len__31496__auto___37225)){
args_arr__31519__auto__.push((arguments[i__31497__auto___37226]));

var G__37227 = (i__31497__auto___37226 + (1));
i__31497__auto___37226 = G__37227;
continue;
} else {
}
break;
}

var argseq__31520__auto__ = (new cljs.core.IndexedSeq(args_arr__31519__auto__.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31520__auto__);

}
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) > (0))){
return a;
} else {
return b;
}
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.greatest,medley.core.greatest.call(null,a,b),more);
});

medley.core.greatest.cljs$lang$applyTo = (function (seq37220){
var G__37221 = cljs.core.first.call(null,seq37220);
var seq37220__$1 = cljs.core.next.call(null,seq37220);
var G__37222 = cljs.core.first.call(null,seq37220__$1);
var seq37220__$2 = cljs.core.next.call(null,seq37220__$1);
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic(G__37221,G__37222,seq37220__$2);
});

medley.core.greatest.cljs$lang$maxFixedArity = (2);

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__37232 = arguments.length;
switch (G__37232) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__31519__auto__ = [];
var len__31496__auto___37234 = arguments.length;
var i__31497__auto___37235 = (0);
while(true){
if((i__31497__auto___37235 < len__31496__auto___37234)){
args_arr__31519__auto__.push((arguments[i__31497__auto___37235]));

var G__37236 = (i__31497__auto___37235 + (1));
i__31497__auto___37235 = G__37236;
continue;
} else {
}
break;
}

var argseq__31520__auto__ = (new cljs.core.IndexedSeq(args_arr__31519__auto__.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31520__auto__);

}
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.call(null,f,a,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
});

medley.core.mapply.cljs$lang$applyTo = (function (seq37229){
var G__37230 = cljs.core.first.call(null,seq37229);
var seq37229__$1 = cljs.core.next.call(null,seq37229);
var G__37231 = cljs.core.first.call(null,seq37229__$1);
var seq37229__$2 = cljs.core.next.call(null,seq37229__$1);
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__37230,G__37231,seq37229__$2);
});

medley.core.mapply.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__37241 = arguments.length;
switch (G__37241) {
case 0:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__31519__auto__ = [];
var len__31496__auto___37243 = arguments.length;
var i__31497__auto___37244 = (0);
while(true){
if((i__31497__auto___37244 < len__31496__auto___37243)){
args_arr__31519__auto__.push((arguments[i__31497__auto___37244]));

var G__37245 = (i__31497__auto___37244 + (1));
i__31497__auto___37244 = G__37245;
continue;
} else {
}
break;
}

var argseq__31520__auto__ = (new cljs.core.IndexedSeq(args_arr__31519__auto__.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31520__auto__);

}
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),medley.core.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
return (s1) || (s2);
}
}),null,null));
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
if(cljs.core.seq.call(null,ss)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,medley.core.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});

medley.core.interleave_all.cljs$lang$applyTo = (function (seq37238){
var G__37239 = cljs.core.first.call(null,seq37238);
var seq37238__$1 = cljs.core.next.call(null,seq37238);
var G__37240 = cljs.core.first.call(null,seq37238__$1);
var seq37238__$2 = cljs.core.next.call(null,seq37238__$1);
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__37239,G__37240,seq37238__$2);
});

medley.core.interleave_all.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__37247 = arguments.length;
switch (G__37247) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__37253 = null;
var G__37253__0 = (function (){
return rf.call(null);
});
var G__37253__1 = (function (result){
return rf.call(null,result);
});
var G__37253__2 = (function (result,x){
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),fx));

return rf.call(null,result,x);
}
});
G__37253 = function(result,x){
switch(arguments.length){
case 0:
return G__37253__0.call(this);
case 1:
return G__37253__1.call(this,result);
case 2:
return G__37253__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37253.cljs$core$IFn$_invoke$arity$0 = G__37253__0;
G__37253.cljs$core$IFn$_invoke$arity$1 = G__37253__1;
G__37253.cljs$core$IFn$_invoke$arity$2 = G__37253__2;
return G__37253;
})()
;})(seen))
});
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__37248,seen__$1){
while(true){
var vec__37249 = p__37248;
var x = cljs.core.nth.call(null,vec__37249,(0),null);
var xs__$1 = vec__37249;
var temp__5457__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5457__auto__){
var s = temp__5457__auto__;
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,fx)){
var G__37254 = cljs.core.rest.call(null,s);
var G__37255 = seen__$1;
p__37248 = G__37254;
seen__$1 = G__37255;
continue;
} else {
return cljs.core.cons.call(null,x,medley$core$step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,fx)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

medley.core.distinct_by.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var G__37257 = arguments.length;
switch (G__37257) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return ((function (pv){
return (function() {
var G__37259 = null;
var G__37259__0 = (function (){
return rf.call(null);
});
var G__37259__1 = (function (result){
return rf.call(null,result);
});
var G__37259__2 = (function (result,x){
var prior = cljs.core.deref.call(null,pv);
var fx = f.call(null,x);
cljs.core.vreset_BANG_.call(null,pv,fx);

if(cljs.core._EQ_.call(null,prior,fx)){
return result;
} else {
return rf.call(null,result,x);
}
});
G__37259 = function(result,x){
switch(arguments.length){
case 0:
return G__37259__0.call(this);
case 1:
return G__37259__1.call(this,result);
case 2:
return G__37259__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37259.cljs$core$IFn$_invoke$arity$0 = G__37259__0;
G__37259.cljs$core$IFn$_invoke$arity$1 = G__37259__1;
G__37259.cljs$core$IFn$_invoke$arity$2 = G__37259__2;
return G__37259;
})()
;})(pv))
});
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,medley.core.dedupe_by.call(null,f),coll);
});

medley.core.dedupe_by.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var G__37261 = arguments.length;
switch (G__37261) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__37263 = null;
var G__37263__0 = (function (){
return rf.call(null);
});
var G__37263__1 = (function (result){
return rf.call(null,result);
});
var G__37263__2 = (function (result,x){
var result__$1 = rf.call(null,result,x);
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,result__$1);
} else {
return result__$1;
}
});
G__37263 = function(result,x){
switch(arguments.length){
case 0:
return G__37263__0.call(this);
case 1:
return G__37263__1.call(this,result);
case 2:
return G__37263__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37263.cljs$core$IFn$_invoke$arity$0 = G__37263__0;
G__37263.cljs$core$IFn$_invoke$arity$1 = G__37263__1;
G__37263.cljs$core$IFn$_invoke$arity$2 = G__37263__2;
return G__37263;
})()
});
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5457__auto__ = cljs.core.seq.call(null,coll);
if(temp__5457__auto__){
var s = temp__5457__auto__;
var x = cljs.core.first.call(null,s);
return cljs.core.cons.call(null,x,((cljs.core.not.call(null,pred.call(null,x)))?medley.core.take_upto.call(null,pred,cljs.core.rest.call(null,s)):null));
} else {
return null;
}
}),null,null));
});

medley.core.take_upto.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of the items in coll starting *after* the first item
 *   for which `(pred item)` returns true.
 */
medley.core.drop_upto = (function medley$core$drop_upto(var_args){
var G__37265 = arguments.length;
switch (G__37265) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_.call(null,true);
return ((function (dv){
return (function() {
var G__37267 = null;
var G__37267__0 = (function (){
return rf.call(null);
});
var G__37267__1 = (function (result){
return rf.call(null,result);
});
var G__37267__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref.call(null,dv))){
if(cljs.core.truth_(pred.call(null,x))){
cljs.core.vreset_BANG_.call(null,dv,false);
} else {
}

return result;
} else {
return rf.call(null,result,x);
}
});
G__37267 = function(result,x){
switch(arguments.length){
case 0:
return G__37267__0.call(this);
case 1:
return G__37267__1.call(this,result);
case 2:
return G__37267__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37267.cljs$core$IFn$_invoke$arity$0 = G__37267__0;
G__37267.cljs$core$IFn$_invoke$arity$1 = G__37267__1;
G__37267.cljs$core$IFn$_invoke$arity$2 = G__37267__2;
return G__37267;
})()
;})(dv))
});
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred),coll));
});

medley.core.drop_upto.cljs$lang$maxFixedArity = 2;

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var G__37269 = arguments.length;
switch (G__37269) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (i){
return (function() {
var G__37271 = null;
var G__37271__0 = (function (){
return rf.call(null);
});
var G__37271__1 = (function (result){
return rf.call(null,result);
});
var G__37271__2 = (function (result,x){
return rf.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._vreset_BANG_.call(null,i,(cljs.core._deref.call(null,i) + (1))),x], null));
});
G__37271 = function(result,x){
switch(arguments.length){
case 0:
return G__37271__0.call(this);
case 1:
return G__37271__1.call(this,result);
case 2:
return G__37271__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37271.cljs$core$IFn$_invoke$arity$0 = G__37271__0;
G__37271.cljs$core$IFn$_invoke$arity$1 = G__37271__1;
G__37271.cljs$core$IFn$_invoke$arity$2 = G__37271__2;
return G__37271;
})()
;})(i))
});
});

medley.core.indexed.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
});

medley.core.indexed.cljs$lang$maxFixedArity = 1;

/**
 * Returns the absolute value of a number.
 */
medley.core.abs = (function medley$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Atomically swaps the value of the atom to be `(apply f x args)`, where x is
 *   the current value of the atom, then returns the original value of the atom.
 *   This function therefore acts like an atomic `deref` then `swap!`.
 */
medley.core.deref_swap_BANG_ = (function medley$core$deref_swap_BANG_(var_args){
var G__37277 = arguments.length;
switch (G__37277) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__31519__auto__ = [];
var len__31496__auto___37279 = arguments.length;
var i__31497__auto___37280 = (0);
while(true){
if((i__31497__auto___37280 < len__31496__auto___37279)){
args_arr__31519__auto__.push((arguments[i__31497__auto___37280]));

var G__37281 = (i__31497__auto___37280 + (1));
i__31497__auto___37280 = G__37281;
continue;
} else {
}
break;
}

var argseq__31520__auto__ = (new cljs.core.IndexedSeq(args_arr__31519__auto__.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31520__auto__);

}
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref.call(null,atom);
cljs.core.reset_BANG_.call(null,atom,f.call(null,value));

return value;
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.call(null,atom,(function (p1__37272_SHARP_){
return cljs.core.apply.call(null,f,p1__37272_SHARP_,args);
}));
});

medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq37274){
var G__37275 = cljs.core.first.call(null,seq37274);
var seq37274__$1 = cljs.core.next.call(null,seq37274);
var G__37276 = cljs.core.first.call(null,seq37274__$1);
var seq37274__$2 = cljs.core.next.call(null,seq37274__$1);
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37275,G__37276,seq37274__$2);
});

medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.call(null,atom,cljs.core.constantly.call(null,newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message.call(null,ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-clause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause.call(null,ex);
});
/**
 * Returns true if the value is a UUID.
 */
medley.core.uuid_QMARK_ = (function medley$core$uuid_QMARK_(x){
return (x instanceof cljs.core.UUID);
});
/**
 * Returns a UUID generated from the supplied string. Same as `cljs.core/uuid`
 *   in ClojureScript, while in Clojure it returns a `java.util.UUID` object.
 */
medley.core.uuid = (function medley$core$uuid(s){
return cljs.core.uuid.call(null,s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid.call(null);
});

//# sourceMappingURL=core.js.map?rel=1515669752556
