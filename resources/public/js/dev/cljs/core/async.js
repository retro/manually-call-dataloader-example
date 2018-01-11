// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33959 = arguments.length;
switch (G__33959) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33960 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33960 = (function (f,blockable,meta33961){
this.f = f;
this.blockable = blockable;
this.meta33961 = meta33961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33962,meta33961__$1){
var self__ = this;
var _33962__$1 = this;
return (new cljs.core.async.t_cljs$core$async33960(self__.f,self__.blockable,meta33961__$1));
});

cljs.core.async.t_cljs$core$async33960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33962){
var self__ = this;
var _33962__$1 = this;
return self__.meta33961;
});

cljs.core.async.t_cljs$core$async33960.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33961","meta33961",1583987835,null)], null);
});

cljs.core.async.t_cljs$core$async33960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33960";

cljs.core.async.t_cljs$core$async33960.cljs$lang$ctorPrWriter = (function (this__30888__auto__,writer__30889__auto__,opt__30890__auto__){
return cljs.core._write.call(null,writer__30889__auto__,"cljs.core.async/t_cljs$core$async33960");
});

cljs.core.async.__GT_t_cljs$core$async33960 = (function cljs$core$async$__GT_t_cljs$core$async33960(f__$1,blockable__$1,meta33961){
return (new cljs.core.async.t_cljs$core$async33960(f__$1,blockable__$1,meta33961));
});

}

return (new cljs.core.async.t_cljs$core$async33960(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33966 = arguments.length;
switch (G__33966) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33969 = arguments.length;
switch (G__33969) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33972 = arguments.length;
switch (G__33972) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33974 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33974);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33974,ret){
return (function (){
return fn1.call(null,val_33974);
});})(val_33974,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33976 = arguments.length;
switch (G__33976) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31262__auto___33978 = n;
var x_33979 = (0);
while(true){
if((x_33979 < n__31262__auto___33978)){
(a[x_33979] = (0));

var G__33980 = (x_33979 + (1));
x_33979 = G__33980;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33981 = (i + (1));
i = G__33981;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33982 = (function (flag,meta33983){
this.flag = flag;
this.meta33983 = meta33983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33984,meta33983__$1){
var self__ = this;
var _33984__$1 = this;
return (new cljs.core.async.t_cljs$core$async33982(self__.flag,meta33983__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33984){
var self__ = this;
var _33984__$1 = this;
return self__.meta33983;
});})(flag))
;

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33982.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33983","meta33983",730035025,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33982";

cljs.core.async.t_cljs$core$async33982.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30888__auto__,writer__30889__auto__,opt__30890__auto__){
return cljs.core._write.call(null,writer__30889__auto__,"cljs.core.async/t_cljs$core$async33982");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33982 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33982(flag__$1,meta33983){
return (new cljs.core.async.t_cljs$core$async33982(flag__$1,meta33983));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33982(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33985 = (function (flag,cb,meta33986){
this.flag = flag;
this.cb = cb;
this.meta33986 = meta33986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33987,meta33986__$1){
var self__ = this;
var _33987__$1 = this;
return (new cljs.core.async.t_cljs$core$async33985(self__.flag,self__.cb,meta33986__$1));
});

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33987){
var self__ = this;
var _33987__$1 = this;
return self__.meta33986;
});

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33986","meta33986",1397355647,null)], null);
});

cljs.core.async.t_cljs$core$async33985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33985";

cljs.core.async.t_cljs$core$async33985.cljs$lang$ctorPrWriter = (function (this__30888__auto__,writer__30889__auto__,opt__30890__auto__){
return cljs.core._write.call(null,writer__30889__auto__,"cljs.core.async/t_cljs$core$async33985");
});

cljs.core.async.__GT_t_cljs$core$async33985 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33985(flag__$1,cb__$1,meta33986){
return (new cljs.core.async.t_cljs$core$async33985(flag__$1,cb__$1,meta33986));
});

}

return (new cljs.core.async.t_cljs$core$async33985(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33988_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33988_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33989_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33989_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30217__auto__ = wport;
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33990 = (i + (1));
i = G__33990;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30217__auto__ = ret;
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30205__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30205__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30205__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31503__auto__ = [];
var len__31496__auto___33996 = arguments.length;
var i__31497__auto___33997 = (0);
while(true){
if((i__31497__auto___33997 < len__31496__auto___33996)){
args__31503__auto__.push((arguments[i__31497__auto___33997]));

var G__33998 = (i__31497__auto___33997 + (1));
i__31497__auto___33997 = G__33998;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((1) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31504__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33993){
var map__33994 = p__33993;
var map__33994__$1 = ((((!((map__33994 == null)))?((((map__33994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33994):map__33994);
var opts = map__33994__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33991){
var G__33992 = cljs.core.first.call(null,seq33991);
var seq33991__$1 = cljs.core.next.call(null,seq33991);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33992,seq33991__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34000 = arguments.length;
switch (G__34000) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33899__auto___34046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___34046){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___34046){
return (function (state_34024){
var state_val_34025 = (state_34024[(1)]);
if((state_val_34025 === (7))){
var inst_34020 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34026_34047 = state_34024__$1;
(statearr_34026_34047[(2)] = inst_34020);

(statearr_34026_34047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (1))){
var state_34024__$1 = state_34024;
var statearr_34027_34048 = state_34024__$1;
(statearr_34027_34048[(2)] = null);

(statearr_34027_34048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (4))){
var inst_34003 = (state_34024[(7)]);
var inst_34003__$1 = (state_34024[(2)]);
var inst_34004 = (inst_34003__$1 == null);
var state_34024__$1 = (function (){var statearr_34028 = state_34024;
(statearr_34028[(7)] = inst_34003__$1);

return statearr_34028;
})();
if(cljs.core.truth_(inst_34004)){
var statearr_34029_34049 = state_34024__$1;
(statearr_34029_34049[(1)] = (5));

} else {
var statearr_34030_34050 = state_34024__$1;
(statearr_34030_34050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (13))){
var state_34024__$1 = state_34024;
var statearr_34031_34051 = state_34024__$1;
(statearr_34031_34051[(2)] = null);

(statearr_34031_34051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (6))){
var inst_34003 = (state_34024[(7)]);
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34024__$1,(11),to,inst_34003);
} else {
if((state_val_34025 === (3))){
var inst_34022 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34024__$1,inst_34022);
} else {
if((state_val_34025 === (12))){
var state_34024__$1 = state_34024;
var statearr_34032_34052 = state_34024__$1;
(statearr_34032_34052[(2)] = null);

(statearr_34032_34052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (2))){
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34024__$1,(4),from);
} else {
if((state_val_34025 === (11))){
var inst_34013 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
if(cljs.core.truth_(inst_34013)){
var statearr_34033_34053 = state_34024__$1;
(statearr_34033_34053[(1)] = (12));

} else {
var statearr_34034_34054 = state_34024__$1;
(statearr_34034_34054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (9))){
var state_34024__$1 = state_34024;
var statearr_34035_34055 = state_34024__$1;
(statearr_34035_34055[(2)] = null);

(statearr_34035_34055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (5))){
var state_34024__$1 = state_34024;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34036_34056 = state_34024__$1;
(statearr_34036_34056[(1)] = (8));

} else {
var statearr_34037_34057 = state_34024__$1;
(statearr_34037_34057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (14))){
var inst_34018 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34038_34058 = state_34024__$1;
(statearr_34038_34058[(2)] = inst_34018);

(statearr_34038_34058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (10))){
var inst_34010 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34039_34059 = state_34024__$1;
(statearr_34039_34059[(2)] = inst_34010);

(statearr_34039_34059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (8))){
var inst_34007 = cljs.core.async.close_BANG_.call(null,to);
var state_34024__$1 = state_34024;
var statearr_34040_34060 = state_34024__$1;
(statearr_34040_34060[(2)] = inst_34007);

(statearr_34040_34060[(1)] = (10));


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
});})(c__33899__auto___34046))
;
return ((function (switch__33809__auto__,c__33899__auto___34046){
return (function() {
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_34041 = [null,null,null,null,null,null,null,null];
(statearr_34041[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_34041[(1)] = (1));

return statearr_34041;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_34024){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34042){if((e34042 instanceof Object)){
var ex__33813__auto__ = e34042;
var statearr_34043_34061 = state_34024;
(statearr_34043_34061[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34062 = state_34024;
state_34024 = G__34062;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_34024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_34024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___34046))
})();
var state__33901__auto__ = (function (){var statearr_34044 = f__33900__auto__.call(null);
(statearr_34044[(6)] = c__33899__auto___34046);

return statearr_34044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___34046))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34063){
var vec__34064 = p__34063;
var v = cljs.core.nth.call(null,vec__34064,(0),null);
var p = cljs.core.nth.call(null,vec__34064,(1),null);
var job = vec__34064;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33899__auto___34235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___34235,res,vec__34064,v,p,job,jobs,results){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___34235,res,vec__34064,v,p,job,jobs,results){
return (function (state_34071){
var state_val_34072 = (state_34071[(1)]);
if((state_val_34072 === (1))){
var state_34071__$1 = state_34071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34071__$1,(2),res,v);
} else {
if((state_val_34072 === (2))){
var inst_34068 = (state_34071[(2)]);
var inst_34069 = cljs.core.async.close_BANG_.call(null,res);
var state_34071__$1 = (function (){var statearr_34073 = state_34071;
(statearr_34073[(7)] = inst_34068);

return statearr_34073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34071__$1,inst_34069);
} else {
return null;
}
}
});})(c__33899__auto___34235,res,vec__34064,v,p,job,jobs,results))
;
return ((function (switch__33809__auto__,c__33899__auto___34235,res,vec__34064,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0 = (function (){
var statearr_34074 = [null,null,null,null,null,null,null,null];
(statearr_34074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__);

(statearr_34074[(1)] = (1));

return statearr_34074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1 = (function (state_34071){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34075){if((e34075 instanceof Object)){
var ex__33813__auto__ = e34075;
var statearr_34076_34236 = state_34071;
(statearr_34076_34236[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34237 = state_34071;
state_34071 = G__34237;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__ = function(state_34071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1.call(this,state_34071);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___34235,res,vec__34064,v,p,job,jobs,results))
})();
var state__33901__auto__ = (function (){var statearr_34077 = f__33900__auto__.call(null);
(statearr_34077[(6)] = c__33899__auto___34235);

return statearr_34077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___34235,res,vec__34064,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34078){
var vec__34079 = p__34078;
var v = cljs.core.nth.call(null,vec__34079,(0),null);
var p = cljs.core.nth.call(null,vec__34079,(1),null);
var job = vec__34079;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31262__auto___34238 = n;
var __34239 = (0);
while(true){
if((__34239 < n__31262__auto___34238)){
var G__34082_34240 = type;
var G__34082_34241__$1 = (((G__34082_34240 instanceof cljs.core.Keyword))?G__34082_34240.fqn:null);
switch (G__34082_34241__$1) {
case "compute":
var c__33899__auto___34243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34239,c__33899__auto___34243,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (__34239,c__33899__auto___34243,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async){
return (function (state_34095){
var state_val_34096 = (state_34095[(1)]);
if((state_val_34096 === (1))){
var state_34095__$1 = state_34095;
var statearr_34097_34244 = state_34095__$1;
(statearr_34097_34244[(2)] = null);

(statearr_34097_34244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (2))){
var state_34095__$1 = state_34095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34095__$1,(4),jobs);
} else {
if((state_val_34096 === (3))){
var inst_34093 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34095__$1,inst_34093);
} else {
if((state_val_34096 === (4))){
var inst_34085 = (state_34095[(2)]);
var inst_34086 = process.call(null,inst_34085);
var state_34095__$1 = state_34095;
if(cljs.core.truth_(inst_34086)){
var statearr_34098_34245 = state_34095__$1;
(statearr_34098_34245[(1)] = (5));

} else {
var statearr_34099_34246 = state_34095__$1;
(statearr_34099_34246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (5))){
var state_34095__$1 = state_34095;
var statearr_34100_34247 = state_34095__$1;
(statearr_34100_34247[(2)] = null);

(statearr_34100_34247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (6))){
var state_34095__$1 = state_34095;
var statearr_34101_34248 = state_34095__$1;
(statearr_34101_34248[(2)] = null);

(statearr_34101_34248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (7))){
var inst_34091 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
var statearr_34102_34249 = state_34095__$1;
(statearr_34102_34249[(2)] = inst_34091);

(statearr_34102_34249[(1)] = (3));


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
});})(__34239,c__33899__auto___34243,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async))
;
return ((function (__34239,switch__33809__auto__,c__33899__auto___34243,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0 = (function (){
var statearr_34103 = [null,null,null,null,null,null,null];
(statearr_34103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__);

(statearr_34103[(1)] = (1));

return statearr_34103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1 = (function (state_34095){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34104){if((e34104 instanceof Object)){
var ex__33813__auto__ = e34104;
var statearr_34105_34250 = state_34095;
(statearr_34105_34250[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34251 = state_34095;
state_34095 = G__34251;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__ = function(state_34095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1.call(this,state_34095);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__;
})()
;})(__34239,switch__33809__auto__,c__33899__auto___34243,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async))
})();
var state__33901__auto__ = (function (){var statearr_34106 = f__33900__auto__.call(null);
(statearr_34106[(6)] = c__33899__auto___34243);

return statearr_34106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(__34239,c__33899__auto___34243,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async))
);


break;
case "async":
var c__33899__auto___34252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34239,c__33899__auto___34252,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (__34239,c__33899__auto___34252,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async){
return (function (state_34119){
var state_val_34120 = (state_34119[(1)]);
if((state_val_34120 === (1))){
var state_34119__$1 = state_34119;
var statearr_34121_34253 = state_34119__$1;
(statearr_34121_34253[(2)] = null);

(statearr_34121_34253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34120 === (2))){
var state_34119__$1 = state_34119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34119__$1,(4),jobs);
} else {
if((state_val_34120 === (3))){
var inst_34117 = (state_34119[(2)]);
var state_34119__$1 = state_34119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34119__$1,inst_34117);
} else {
if((state_val_34120 === (4))){
var inst_34109 = (state_34119[(2)]);
var inst_34110 = async.call(null,inst_34109);
var state_34119__$1 = state_34119;
if(cljs.core.truth_(inst_34110)){
var statearr_34122_34254 = state_34119__$1;
(statearr_34122_34254[(1)] = (5));

} else {
var statearr_34123_34255 = state_34119__$1;
(statearr_34123_34255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34120 === (5))){
var state_34119__$1 = state_34119;
var statearr_34124_34256 = state_34119__$1;
(statearr_34124_34256[(2)] = null);

(statearr_34124_34256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34120 === (6))){
var state_34119__$1 = state_34119;
var statearr_34125_34257 = state_34119__$1;
(statearr_34125_34257[(2)] = null);

(statearr_34125_34257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34120 === (7))){
var inst_34115 = (state_34119[(2)]);
var state_34119__$1 = state_34119;
var statearr_34126_34258 = state_34119__$1;
(statearr_34126_34258[(2)] = inst_34115);

(statearr_34126_34258[(1)] = (3));


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
});})(__34239,c__33899__auto___34252,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async))
;
return ((function (__34239,switch__33809__auto__,c__33899__auto___34252,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0 = (function (){
var statearr_34127 = [null,null,null,null,null,null,null];
(statearr_34127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__);

(statearr_34127[(1)] = (1));

return statearr_34127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1 = (function (state_34119){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34128){if((e34128 instanceof Object)){
var ex__33813__auto__ = e34128;
var statearr_34129_34259 = state_34119;
(statearr_34129_34259[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34260 = state_34119;
state_34119 = G__34260;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__ = function(state_34119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1.call(this,state_34119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__;
})()
;})(__34239,switch__33809__auto__,c__33899__auto___34252,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async))
})();
var state__33901__auto__ = (function (){var statearr_34130 = f__33900__auto__.call(null);
(statearr_34130[(6)] = c__33899__auto___34252);

return statearr_34130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(__34239,c__33899__auto___34252,G__34082_34240,G__34082_34241__$1,n__31262__auto___34238,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34082_34241__$1)].join('')));

}

var G__34261 = (__34239 + (1));
__34239 = G__34261;
continue;
} else {
}
break;
}

var c__33899__auto___34262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___34262,jobs,results,process,async){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___34262,jobs,results,process,async){
return (function (state_34152){
var state_val_34153 = (state_34152[(1)]);
if((state_val_34153 === (1))){
var state_34152__$1 = state_34152;
var statearr_34154_34263 = state_34152__$1;
(statearr_34154_34263[(2)] = null);

(statearr_34154_34263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (2))){
var state_34152__$1 = state_34152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34152__$1,(4),from);
} else {
if((state_val_34153 === (3))){
var inst_34150 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34152__$1,inst_34150);
} else {
if((state_val_34153 === (4))){
var inst_34133 = (state_34152[(7)]);
var inst_34133__$1 = (state_34152[(2)]);
var inst_34134 = (inst_34133__$1 == null);
var state_34152__$1 = (function (){var statearr_34155 = state_34152;
(statearr_34155[(7)] = inst_34133__$1);

return statearr_34155;
})();
if(cljs.core.truth_(inst_34134)){
var statearr_34156_34264 = state_34152__$1;
(statearr_34156_34264[(1)] = (5));

} else {
var statearr_34157_34265 = state_34152__$1;
(statearr_34157_34265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (5))){
var inst_34136 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34152__$1 = state_34152;
var statearr_34158_34266 = state_34152__$1;
(statearr_34158_34266[(2)] = inst_34136);

(statearr_34158_34266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (6))){
var inst_34138 = (state_34152[(8)]);
var inst_34133 = (state_34152[(7)]);
var inst_34138__$1 = cljs.core.async.chan.call(null,(1));
var inst_34139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34140 = [inst_34133,inst_34138__$1];
var inst_34141 = (new cljs.core.PersistentVector(null,2,(5),inst_34139,inst_34140,null));
var state_34152__$1 = (function (){var statearr_34159 = state_34152;
(statearr_34159[(8)] = inst_34138__$1);

return statearr_34159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34152__$1,(8),jobs,inst_34141);
} else {
if((state_val_34153 === (7))){
var inst_34148 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
var statearr_34160_34267 = state_34152__$1;
(statearr_34160_34267[(2)] = inst_34148);

(statearr_34160_34267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (8))){
var inst_34138 = (state_34152[(8)]);
var inst_34143 = (state_34152[(2)]);
var state_34152__$1 = (function (){var statearr_34161 = state_34152;
(statearr_34161[(9)] = inst_34143);

return statearr_34161;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34152__$1,(9),results,inst_34138);
} else {
if((state_val_34153 === (9))){
var inst_34145 = (state_34152[(2)]);
var state_34152__$1 = (function (){var statearr_34162 = state_34152;
(statearr_34162[(10)] = inst_34145);

return statearr_34162;
})();
var statearr_34163_34268 = state_34152__$1;
(statearr_34163_34268[(2)] = null);

(statearr_34163_34268[(1)] = (2));


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
});})(c__33899__auto___34262,jobs,results,process,async))
;
return ((function (switch__33809__auto__,c__33899__auto___34262,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0 = (function (){
var statearr_34164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__);

(statearr_34164[(1)] = (1));

return statearr_34164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1 = (function (state_34152){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34165){if((e34165 instanceof Object)){
var ex__33813__auto__ = e34165;
var statearr_34166_34269 = state_34152;
(statearr_34166_34269[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34270 = state_34152;
state_34152 = G__34270;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__ = function(state_34152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1.call(this,state_34152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___34262,jobs,results,process,async))
})();
var state__33901__auto__ = (function (){var statearr_34167 = f__33900__auto__.call(null);
(statearr_34167[(6)] = c__33899__auto___34262);

return statearr_34167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___34262,jobs,results,process,async))
);


var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__,jobs,results,process,async){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__,jobs,results,process,async){
return (function (state_34205){
var state_val_34206 = (state_34205[(1)]);
if((state_val_34206 === (7))){
var inst_34201 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
var statearr_34207_34271 = state_34205__$1;
(statearr_34207_34271[(2)] = inst_34201);

(statearr_34207_34271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (20))){
var state_34205__$1 = state_34205;
var statearr_34208_34272 = state_34205__$1;
(statearr_34208_34272[(2)] = null);

(statearr_34208_34272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (1))){
var state_34205__$1 = state_34205;
var statearr_34209_34273 = state_34205__$1;
(statearr_34209_34273[(2)] = null);

(statearr_34209_34273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (4))){
var inst_34170 = (state_34205[(7)]);
var inst_34170__$1 = (state_34205[(2)]);
var inst_34171 = (inst_34170__$1 == null);
var state_34205__$1 = (function (){var statearr_34210 = state_34205;
(statearr_34210[(7)] = inst_34170__$1);

return statearr_34210;
})();
if(cljs.core.truth_(inst_34171)){
var statearr_34211_34274 = state_34205__$1;
(statearr_34211_34274[(1)] = (5));

} else {
var statearr_34212_34275 = state_34205__$1;
(statearr_34212_34275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (15))){
var inst_34183 = (state_34205[(8)]);
var state_34205__$1 = state_34205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34205__$1,(18),to,inst_34183);
} else {
if((state_val_34206 === (21))){
var inst_34196 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
var statearr_34213_34276 = state_34205__$1;
(statearr_34213_34276[(2)] = inst_34196);

(statearr_34213_34276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (13))){
var inst_34198 = (state_34205[(2)]);
var state_34205__$1 = (function (){var statearr_34214 = state_34205;
(statearr_34214[(9)] = inst_34198);

return statearr_34214;
})();
var statearr_34215_34277 = state_34205__$1;
(statearr_34215_34277[(2)] = null);

(statearr_34215_34277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (6))){
var inst_34170 = (state_34205[(7)]);
var state_34205__$1 = state_34205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34205__$1,(11),inst_34170);
} else {
if((state_val_34206 === (17))){
var inst_34191 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
if(cljs.core.truth_(inst_34191)){
var statearr_34216_34278 = state_34205__$1;
(statearr_34216_34278[(1)] = (19));

} else {
var statearr_34217_34279 = state_34205__$1;
(statearr_34217_34279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (3))){
var inst_34203 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34205__$1,inst_34203);
} else {
if((state_val_34206 === (12))){
var inst_34180 = (state_34205[(10)]);
var state_34205__$1 = state_34205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34205__$1,(14),inst_34180);
} else {
if((state_val_34206 === (2))){
var state_34205__$1 = state_34205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34205__$1,(4),results);
} else {
if((state_val_34206 === (19))){
var state_34205__$1 = state_34205;
var statearr_34218_34280 = state_34205__$1;
(statearr_34218_34280[(2)] = null);

(statearr_34218_34280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (11))){
var inst_34180 = (state_34205[(2)]);
var state_34205__$1 = (function (){var statearr_34219 = state_34205;
(statearr_34219[(10)] = inst_34180);

return statearr_34219;
})();
var statearr_34220_34281 = state_34205__$1;
(statearr_34220_34281[(2)] = null);

(statearr_34220_34281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (9))){
var state_34205__$1 = state_34205;
var statearr_34221_34282 = state_34205__$1;
(statearr_34221_34282[(2)] = null);

(statearr_34221_34282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (5))){
var state_34205__$1 = state_34205;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34222_34283 = state_34205__$1;
(statearr_34222_34283[(1)] = (8));

} else {
var statearr_34223_34284 = state_34205__$1;
(statearr_34223_34284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (14))){
var inst_34183 = (state_34205[(8)]);
var inst_34185 = (state_34205[(11)]);
var inst_34183__$1 = (state_34205[(2)]);
var inst_34184 = (inst_34183__$1 == null);
var inst_34185__$1 = cljs.core.not.call(null,inst_34184);
var state_34205__$1 = (function (){var statearr_34224 = state_34205;
(statearr_34224[(8)] = inst_34183__$1);

(statearr_34224[(11)] = inst_34185__$1);

return statearr_34224;
})();
if(inst_34185__$1){
var statearr_34225_34285 = state_34205__$1;
(statearr_34225_34285[(1)] = (15));

} else {
var statearr_34226_34286 = state_34205__$1;
(statearr_34226_34286[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (16))){
var inst_34185 = (state_34205[(11)]);
var state_34205__$1 = state_34205;
var statearr_34227_34287 = state_34205__$1;
(statearr_34227_34287[(2)] = inst_34185);

(statearr_34227_34287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (10))){
var inst_34177 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
var statearr_34228_34288 = state_34205__$1;
(statearr_34228_34288[(2)] = inst_34177);

(statearr_34228_34288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (18))){
var inst_34188 = (state_34205[(2)]);
var state_34205__$1 = state_34205;
var statearr_34229_34289 = state_34205__$1;
(statearr_34229_34289[(2)] = inst_34188);

(statearr_34229_34289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34206 === (8))){
var inst_34174 = cljs.core.async.close_BANG_.call(null,to);
var state_34205__$1 = state_34205;
var statearr_34230_34290 = state_34205__$1;
(statearr_34230_34290[(2)] = inst_34174);

(statearr_34230_34290[(1)] = (10));


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
});})(c__33899__auto__,jobs,results,process,async))
;
return ((function (switch__33809__auto__,c__33899__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0 = (function (){
var statearr_34231 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__);

(statearr_34231[(1)] = (1));

return statearr_34231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1 = (function (state_34205){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34232){if((e34232 instanceof Object)){
var ex__33813__auto__ = e34232;
var statearr_34233_34291 = state_34205;
(statearr_34233_34291[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34292 = state_34205;
state_34205 = G__34292;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__ = function(state_34205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1.call(this,state_34205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__,jobs,results,process,async))
})();
var state__33901__auto__ = (function (){var statearr_34234 = f__33900__auto__.call(null);
(statearr_34234[(6)] = c__33899__auto__);

return statearr_34234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__,jobs,results,process,async))
);

return c__33899__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34294 = arguments.length;
switch (G__34294) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34297 = arguments.length;
switch (G__34297) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34300 = arguments.length;
switch (G__34300) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33899__auto___34349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___34349,tc,fc){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___34349,tc,fc){
return (function (state_34326){
var state_val_34327 = (state_34326[(1)]);
if((state_val_34327 === (7))){
var inst_34322 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34328_34350 = state_34326__$1;
(statearr_34328_34350[(2)] = inst_34322);

(statearr_34328_34350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (1))){
var state_34326__$1 = state_34326;
var statearr_34329_34351 = state_34326__$1;
(statearr_34329_34351[(2)] = null);

(statearr_34329_34351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (4))){
var inst_34303 = (state_34326[(7)]);
var inst_34303__$1 = (state_34326[(2)]);
var inst_34304 = (inst_34303__$1 == null);
var state_34326__$1 = (function (){var statearr_34330 = state_34326;
(statearr_34330[(7)] = inst_34303__$1);

return statearr_34330;
})();
if(cljs.core.truth_(inst_34304)){
var statearr_34331_34352 = state_34326__$1;
(statearr_34331_34352[(1)] = (5));

} else {
var statearr_34332_34353 = state_34326__$1;
(statearr_34332_34353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (13))){
var state_34326__$1 = state_34326;
var statearr_34333_34354 = state_34326__$1;
(statearr_34333_34354[(2)] = null);

(statearr_34333_34354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (6))){
var inst_34303 = (state_34326[(7)]);
var inst_34309 = p.call(null,inst_34303);
var state_34326__$1 = state_34326;
if(cljs.core.truth_(inst_34309)){
var statearr_34334_34355 = state_34326__$1;
(statearr_34334_34355[(1)] = (9));

} else {
var statearr_34335_34356 = state_34326__$1;
(statearr_34335_34356[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (3))){
var inst_34324 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34326__$1,inst_34324);
} else {
if((state_val_34327 === (12))){
var state_34326__$1 = state_34326;
var statearr_34336_34357 = state_34326__$1;
(statearr_34336_34357[(2)] = null);

(statearr_34336_34357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (2))){
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34326__$1,(4),ch);
} else {
if((state_val_34327 === (11))){
var inst_34303 = (state_34326[(7)]);
var inst_34313 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34326__$1,(8),inst_34313,inst_34303);
} else {
if((state_val_34327 === (9))){
var state_34326__$1 = state_34326;
var statearr_34337_34358 = state_34326__$1;
(statearr_34337_34358[(2)] = tc);

(statearr_34337_34358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (5))){
var inst_34306 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34307 = cljs.core.async.close_BANG_.call(null,fc);
var state_34326__$1 = (function (){var statearr_34338 = state_34326;
(statearr_34338[(8)] = inst_34306);

return statearr_34338;
})();
var statearr_34339_34359 = state_34326__$1;
(statearr_34339_34359[(2)] = inst_34307);

(statearr_34339_34359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (14))){
var inst_34320 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34340_34360 = state_34326__$1;
(statearr_34340_34360[(2)] = inst_34320);

(statearr_34340_34360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (10))){
var state_34326__$1 = state_34326;
var statearr_34341_34361 = state_34326__$1;
(statearr_34341_34361[(2)] = fc);

(statearr_34341_34361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (8))){
var inst_34315 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
if(cljs.core.truth_(inst_34315)){
var statearr_34342_34362 = state_34326__$1;
(statearr_34342_34362[(1)] = (12));

} else {
var statearr_34343_34363 = state_34326__$1;
(statearr_34343_34363[(1)] = (13));

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
}
});})(c__33899__auto___34349,tc,fc))
;
return ((function (switch__33809__auto__,c__33899__auto___34349,tc,fc){
return (function() {
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_34344 = [null,null,null,null,null,null,null,null,null];
(statearr_34344[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_34344[(1)] = (1));

return statearr_34344;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_34326){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34345){if((e34345 instanceof Object)){
var ex__33813__auto__ = e34345;
var statearr_34346_34364 = state_34326;
(statearr_34346_34364[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34365 = state_34326;
state_34326 = G__34365;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_34326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_34326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___34349,tc,fc))
})();
var state__33901__auto__ = (function (){var statearr_34347 = f__33900__auto__.call(null);
(statearr_34347[(6)] = c__33899__auto___34349);

return statearr_34347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___34349,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__){
return (function (state_34386){
var state_val_34387 = (state_34386[(1)]);
if((state_val_34387 === (7))){
var inst_34382 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34388_34406 = state_34386__$1;
(statearr_34388_34406[(2)] = inst_34382);

(statearr_34388_34406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (1))){
var inst_34366 = init;
var state_34386__$1 = (function (){var statearr_34389 = state_34386;
(statearr_34389[(7)] = inst_34366);

return statearr_34389;
})();
var statearr_34390_34407 = state_34386__$1;
(statearr_34390_34407[(2)] = null);

(statearr_34390_34407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (4))){
var inst_34369 = (state_34386[(8)]);
var inst_34369__$1 = (state_34386[(2)]);
var inst_34370 = (inst_34369__$1 == null);
var state_34386__$1 = (function (){var statearr_34391 = state_34386;
(statearr_34391[(8)] = inst_34369__$1);

return statearr_34391;
})();
if(cljs.core.truth_(inst_34370)){
var statearr_34392_34408 = state_34386__$1;
(statearr_34392_34408[(1)] = (5));

} else {
var statearr_34393_34409 = state_34386__$1;
(statearr_34393_34409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (6))){
var inst_34373 = (state_34386[(9)]);
var inst_34369 = (state_34386[(8)]);
var inst_34366 = (state_34386[(7)]);
var inst_34373__$1 = f.call(null,inst_34366,inst_34369);
var inst_34374 = cljs.core.reduced_QMARK_.call(null,inst_34373__$1);
var state_34386__$1 = (function (){var statearr_34394 = state_34386;
(statearr_34394[(9)] = inst_34373__$1);

return statearr_34394;
})();
if(inst_34374){
var statearr_34395_34410 = state_34386__$1;
(statearr_34395_34410[(1)] = (8));

} else {
var statearr_34396_34411 = state_34386__$1;
(statearr_34396_34411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (3))){
var inst_34384 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34386__$1,inst_34384);
} else {
if((state_val_34387 === (2))){
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34386__$1,(4),ch);
} else {
if((state_val_34387 === (9))){
var inst_34373 = (state_34386[(9)]);
var inst_34366 = inst_34373;
var state_34386__$1 = (function (){var statearr_34397 = state_34386;
(statearr_34397[(7)] = inst_34366);

return statearr_34397;
})();
var statearr_34398_34412 = state_34386__$1;
(statearr_34398_34412[(2)] = null);

(statearr_34398_34412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (5))){
var inst_34366 = (state_34386[(7)]);
var state_34386__$1 = state_34386;
var statearr_34399_34413 = state_34386__$1;
(statearr_34399_34413[(2)] = inst_34366);

(statearr_34399_34413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (10))){
var inst_34380 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34400_34414 = state_34386__$1;
(statearr_34400_34414[(2)] = inst_34380);

(statearr_34400_34414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (8))){
var inst_34373 = (state_34386[(9)]);
var inst_34376 = cljs.core.deref.call(null,inst_34373);
var state_34386__$1 = state_34386;
var statearr_34401_34415 = state_34386__$1;
(statearr_34401_34415[(2)] = inst_34376);

(statearr_34401_34415[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__33810__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33810__auto____0 = (function (){
var statearr_34402 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34402[(0)] = cljs$core$async$reduce_$_state_machine__33810__auto__);

(statearr_34402[(1)] = (1));

return statearr_34402;
});
var cljs$core$async$reduce_$_state_machine__33810__auto____1 = (function (state_34386){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34403){if((e34403 instanceof Object)){
var ex__33813__auto__ = e34403;
var statearr_34404_34416 = state_34386;
(statearr_34404_34416[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34417 = state_34386;
state_34386 = G__34417;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33810__auto__ = function(state_34386){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33810__auto____1.call(this,state_34386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33810__auto____0;
cljs$core$async$reduce_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33810__auto____1;
return cljs$core$async$reduce_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__))
})();
var state__33901__auto__ = (function (){var statearr_34405 = f__33900__auto__.call(null);
(statearr_34405[(6)] = c__33899__auto__);

return statearr_34405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__))
);

return c__33899__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__,f__$1){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__,f__$1){
return (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (1))){
var inst_34418 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34423__$1,(2),inst_34418);
} else {
if((state_val_34424 === (2))){
var inst_34420 = (state_34423[(2)]);
var inst_34421 = f__$1.call(null,inst_34420);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34423__$1,inst_34421);
} else {
return null;
}
}
});})(c__33899__auto__,f__$1))
;
return ((function (switch__33809__auto__,c__33899__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33810__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33810__auto____0 = (function (){
var statearr_34425 = [null,null,null,null,null,null,null];
(statearr_34425[(0)] = cljs$core$async$transduce_$_state_machine__33810__auto__);

(statearr_34425[(1)] = (1));

return statearr_34425;
});
var cljs$core$async$transduce_$_state_machine__33810__auto____1 = (function (state_34423){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34426){if((e34426 instanceof Object)){
var ex__33813__auto__ = e34426;
var statearr_34427_34429 = state_34423;
(statearr_34427_34429[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34430 = state_34423;
state_34423 = G__34430;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33810__auto__ = function(state_34423){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33810__auto____1.call(this,state_34423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33810__auto____0;
cljs$core$async$transduce_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33810__auto____1;
return cljs$core$async$transduce_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__,f__$1))
})();
var state__33901__auto__ = (function (){var statearr_34428 = f__33900__auto__.call(null);
(statearr_34428[(6)] = c__33899__auto__);

return statearr_34428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__,f__$1))
);

return c__33899__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34432 = arguments.length;
switch (G__34432) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__){
return (function (state_34457){
var state_val_34458 = (state_34457[(1)]);
if((state_val_34458 === (7))){
var inst_34439 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34459_34480 = state_34457__$1;
(statearr_34459_34480[(2)] = inst_34439);

(statearr_34459_34480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (1))){
var inst_34433 = cljs.core.seq.call(null,coll);
var inst_34434 = inst_34433;
var state_34457__$1 = (function (){var statearr_34460 = state_34457;
(statearr_34460[(7)] = inst_34434);

return statearr_34460;
})();
var statearr_34461_34481 = state_34457__$1;
(statearr_34461_34481[(2)] = null);

(statearr_34461_34481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (4))){
var inst_34434 = (state_34457[(7)]);
var inst_34437 = cljs.core.first.call(null,inst_34434);
var state_34457__$1 = state_34457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34457__$1,(7),ch,inst_34437);
} else {
if((state_val_34458 === (13))){
var inst_34451 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34462_34482 = state_34457__$1;
(statearr_34462_34482[(2)] = inst_34451);

(statearr_34462_34482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (6))){
var inst_34442 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
if(cljs.core.truth_(inst_34442)){
var statearr_34463_34483 = state_34457__$1;
(statearr_34463_34483[(1)] = (8));

} else {
var statearr_34464_34484 = state_34457__$1;
(statearr_34464_34484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (3))){
var inst_34455 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34457__$1,inst_34455);
} else {
if((state_val_34458 === (12))){
var state_34457__$1 = state_34457;
var statearr_34465_34485 = state_34457__$1;
(statearr_34465_34485[(2)] = null);

(statearr_34465_34485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (2))){
var inst_34434 = (state_34457[(7)]);
var state_34457__$1 = state_34457;
if(cljs.core.truth_(inst_34434)){
var statearr_34466_34486 = state_34457__$1;
(statearr_34466_34486[(1)] = (4));

} else {
var statearr_34467_34487 = state_34457__$1;
(statearr_34467_34487[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (11))){
var inst_34448 = cljs.core.async.close_BANG_.call(null,ch);
var state_34457__$1 = state_34457;
var statearr_34468_34488 = state_34457__$1;
(statearr_34468_34488[(2)] = inst_34448);

(statearr_34468_34488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (9))){
var state_34457__$1 = state_34457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34469_34489 = state_34457__$1;
(statearr_34469_34489[(1)] = (11));

} else {
var statearr_34470_34490 = state_34457__$1;
(statearr_34470_34490[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (5))){
var inst_34434 = (state_34457[(7)]);
var state_34457__$1 = state_34457;
var statearr_34471_34491 = state_34457__$1;
(statearr_34471_34491[(2)] = inst_34434);

(statearr_34471_34491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (10))){
var inst_34453 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34472_34492 = state_34457__$1;
(statearr_34472_34492[(2)] = inst_34453);

(statearr_34472_34492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (8))){
var inst_34434 = (state_34457[(7)]);
var inst_34444 = cljs.core.next.call(null,inst_34434);
var inst_34434__$1 = inst_34444;
var state_34457__$1 = (function (){var statearr_34473 = state_34457;
(statearr_34473[(7)] = inst_34434__$1);

return statearr_34473;
})();
var statearr_34474_34493 = state_34457__$1;
(statearr_34474_34493[(2)] = null);

(statearr_34474_34493[(1)] = (2));


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
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_34475 = [null,null,null,null,null,null,null,null];
(statearr_34475[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_34475[(1)] = (1));

return statearr_34475;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_34457){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34476){if((e34476 instanceof Object)){
var ex__33813__auto__ = e34476;
var statearr_34477_34494 = state_34457;
(statearr_34477_34494[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34495 = state_34457;
state_34457 = G__34495;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_34457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_34457);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__))
})();
var state__33901__auto__ = (function (){var statearr_34478 = f__33900__auto__.call(null);
(statearr_34478[(6)] = c__33899__auto__);

return statearr_34478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__))
);

return c__33899__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30950__auto__ = (((_ == null))?null:_);
var m__30951__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,_);
} else {
var m__30951__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30950__auto__ = (((m == null))?null:m);
var m__30951__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30951__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30950__auto__ = (((m == null))?null:m);
var m__30951__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,m,ch);
} else {
var m__30951__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30950__auto__ = (((m == null))?null:m);
var m__30951__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,m);
} else {
var m__30951__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34496 = (function (ch,cs,meta34497){
this.ch = ch;
this.cs = cs;
this.meta34497 = meta34497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34498,meta34497__$1){
var self__ = this;
var _34498__$1 = this;
return (new cljs.core.async.t_cljs$core$async34496(self__.ch,self__.cs,meta34497__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34498){
var self__ = this;
var _34498__$1 = this;
return self__.meta34497;
});})(cs))
;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34496.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34497","meta34497",-398361949,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34496";

cljs.core.async.t_cljs$core$async34496.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30888__auto__,writer__30889__auto__,opt__30890__auto__){
return cljs.core._write.call(null,writer__30889__auto__,"cljs.core.async/t_cljs$core$async34496");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34496 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34496(ch__$1,cs__$1,meta34497){
return (new cljs.core.async.t_cljs$core$async34496(ch__$1,cs__$1,meta34497));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34496(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33899__auto___34718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___34718,cs,m,dchan,dctr,done){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___34718,cs,m,dchan,dctr,done){
return (function (state_34633){
var state_val_34634 = (state_34633[(1)]);
if((state_val_34634 === (7))){
var inst_34629 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34635_34719 = state_34633__$1;
(statearr_34635_34719[(2)] = inst_34629);

(statearr_34635_34719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (20))){
var inst_34532 = (state_34633[(7)]);
var inst_34544 = cljs.core.first.call(null,inst_34532);
var inst_34545 = cljs.core.nth.call(null,inst_34544,(0),null);
var inst_34546 = cljs.core.nth.call(null,inst_34544,(1),null);
var state_34633__$1 = (function (){var statearr_34636 = state_34633;
(statearr_34636[(8)] = inst_34545);

return statearr_34636;
})();
if(cljs.core.truth_(inst_34546)){
var statearr_34637_34720 = state_34633__$1;
(statearr_34637_34720[(1)] = (22));

} else {
var statearr_34638_34721 = state_34633__$1;
(statearr_34638_34721[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (27))){
var inst_34574 = (state_34633[(9)]);
var inst_34576 = (state_34633[(10)]);
var inst_34581 = (state_34633[(11)]);
var inst_34501 = (state_34633[(12)]);
var inst_34581__$1 = cljs.core._nth.call(null,inst_34574,inst_34576);
var inst_34582 = cljs.core.async.put_BANG_.call(null,inst_34581__$1,inst_34501,done);
var state_34633__$1 = (function (){var statearr_34639 = state_34633;
(statearr_34639[(11)] = inst_34581__$1);

return statearr_34639;
})();
if(cljs.core.truth_(inst_34582)){
var statearr_34640_34722 = state_34633__$1;
(statearr_34640_34722[(1)] = (30));

} else {
var statearr_34641_34723 = state_34633__$1;
(statearr_34641_34723[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (1))){
var state_34633__$1 = state_34633;
var statearr_34642_34724 = state_34633__$1;
(statearr_34642_34724[(2)] = null);

(statearr_34642_34724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (24))){
var inst_34532 = (state_34633[(7)]);
var inst_34551 = (state_34633[(2)]);
var inst_34552 = cljs.core.next.call(null,inst_34532);
var inst_34510 = inst_34552;
var inst_34511 = null;
var inst_34512 = (0);
var inst_34513 = (0);
var state_34633__$1 = (function (){var statearr_34643 = state_34633;
(statearr_34643[(13)] = inst_34513);

(statearr_34643[(14)] = inst_34510);

(statearr_34643[(15)] = inst_34551);

(statearr_34643[(16)] = inst_34511);

(statearr_34643[(17)] = inst_34512);

return statearr_34643;
})();
var statearr_34644_34725 = state_34633__$1;
(statearr_34644_34725[(2)] = null);

(statearr_34644_34725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (39))){
var state_34633__$1 = state_34633;
var statearr_34648_34726 = state_34633__$1;
(statearr_34648_34726[(2)] = null);

(statearr_34648_34726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (4))){
var inst_34501 = (state_34633[(12)]);
var inst_34501__$1 = (state_34633[(2)]);
var inst_34502 = (inst_34501__$1 == null);
var state_34633__$1 = (function (){var statearr_34649 = state_34633;
(statearr_34649[(12)] = inst_34501__$1);

return statearr_34649;
})();
if(cljs.core.truth_(inst_34502)){
var statearr_34650_34727 = state_34633__$1;
(statearr_34650_34727[(1)] = (5));

} else {
var statearr_34651_34728 = state_34633__$1;
(statearr_34651_34728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (15))){
var inst_34513 = (state_34633[(13)]);
var inst_34510 = (state_34633[(14)]);
var inst_34511 = (state_34633[(16)]);
var inst_34512 = (state_34633[(17)]);
var inst_34528 = (state_34633[(2)]);
var inst_34529 = (inst_34513 + (1));
var tmp34645 = inst_34510;
var tmp34646 = inst_34511;
var tmp34647 = inst_34512;
var inst_34510__$1 = tmp34645;
var inst_34511__$1 = tmp34646;
var inst_34512__$1 = tmp34647;
var inst_34513__$1 = inst_34529;
var state_34633__$1 = (function (){var statearr_34652 = state_34633;
(statearr_34652[(13)] = inst_34513__$1);

(statearr_34652[(14)] = inst_34510__$1);

(statearr_34652[(18)] = inst_34528);

(statearr_34652[(16)] = inst_34511__$1);

(statearr_34652[(17)] = inst_34512__$1);

return statearr_34652;
})();
var statearr_34653_34729 = state_34633__$1;
(statearr_34653_34729[(2)] = null);

(statearr_34653_34729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (21))){
var inst_34555 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34657_34730 = state_34633__$1;
(statearr_34657_34730[(2)] = inst_34555);

(statearr_34657_34730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (31))){
var inst_34581 = (state_34633[(11)]);
var inst_34585 = done.call(null,null);
var inst_34586 = cljs.core.async.untap_STAR_.call(null,m,inst_34581);
var state_34633__$1 = (function (){var statearr_34658 = state_34633;
(statearr_34658[(19)] = inst_34585);

return statearr_34658;
})();
var statearr_34659_34731 = state_34633__$1;
(statearr_34659_34731[(2)] = inst_34586);

(statearr_34659_34731[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (32))){
var inst_34574 = (state_34633[(9)]);
var inst_34576 = (state_34633[(10)]);
var inst_34573 = (state_34633[(20)]);
var inst_34575 = (state_34633[(21)]);
var inst_34588 = (state_34633[(2)]);
var inst_34589 = (inst_34576 + (1));
var tmp34654 = inst_34574;
var tmp34655 = inst_34573;
var tmp34656 = inst_34575;
var inst_34573__$1 = tmp34655;
var inst_34574__$1 = tmp34654;
var inst_34575__$1 = tmp34656;
var inst_34576__$1 = inst_34589;
var state_34633__$1 = (function (){var statearr_34660 = state_34633;
(statearr_34660[(22)] = inst_34588);

(statearr_34660[(9)] = inst_34574__$1);

(statearr_34660[(10)] = inst_34576__$1);

(statearr_34660[(20)] = inst_34573__$1);

(statearr_34660[(21)] = inst_34575__$1);

return statearr_34660;
})();
var statearr_34661_34732 = state_34633__$1;
(statearr_34661_34732[(2)] = null);

(statearr_34661_34732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (40))){
var inst_34601 = (state_34633[(23)]);
var inst_34605 = done.call(null,null);
var inst_34606 = cljs.core.async.untap_STAR_.call(null,m,inst_34601);
var state_34633__$1 = (function (){var statearr_34662 = state_34633;
(statearr_34662[(24)] = inst_34605);

return statearr_34662;
})();
var statearr_34663_34733 = state_34633__$1;
(statearr_34663_34733[(2)] = inst_34606);

(statearr_34663_34733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (33))){
var inst_34592 = (state_34633[(25)]);
var inst_34594 = cljs.core.chunked_seq_QMARK_.call(null,inst_34592);
var state_34633__$1 = state_34633;
if(inst_34594){
var statearr_34664_34734 = state_34633__$1;
(statearr_34664_34734[(1)] = (36));

} else {
var statearr_34665_34735 = state_34633__$1;
(statearr_34665_34735[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (13))){
var inst_34522 = (state_34633[(26)]);
var inst_34525 = cljs.core.async.close_BANG_.call(null,inst_34522);
var state_34633__$1 = state_34633;
var statearr_34666_34736 = state_34633__$1;
(statearr_34666_34736[(2)] = inst_34525);

(statearr_34666_34736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (22))){
var inst_34545 = (state_34633[(8)]);
var inst_34548 = cljs.core.async.close_BANG_.call(null,inst_34545);
var state_34633__$1 = state_34633;
var statearr_34667_34737 = state_34633__$1;
(statearr_34667_34737[(2)] = inst_34548);

(statearr_34667_34737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (36))){
var inst_34592 = (state_34633[(25)]);
var inst_34596 = cljs.core.chunk_first.call(null,inst_34592);
var inst_34597 = cljs.core.chunk_rest.call(null,inst_34592);
var inst_34598 = cljs.core.count.call(null,inst_34596);
var inst_34573 = inst_34597;
var inst_34574 = inst_34596;
var inst_34575 = inst_34598;
var inst_34576 = (0);
var state_34633__$1 = (function (){var statearr_34668 = state_34633;
(statearr_34668[(9)] = inst_34574);

(statearr_34668[(10)] = inst_34576);

(statearr_34668[(20)] = inst_34573);

(statearr_34668[(21)] = inst_34575);

return statearr_34668;
})();
var statearr_34669_34738 = state_34633__$1;
(statearr_34669_34738[(2)] = null);

(statearr_34669_34738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (41))){
var inst_34592 = (state_34633[(25)]);
var inst_34608 = (state_34633[(2)]);
var inst_34609 = cljs.core.next.call(null,inst_34592);
var inst_34573 = inst_34609;
var inst_34574 = null;
var inst_34575 = (0);
var inst_34576 = (0);
var state_34633__$1 = (function (){var statearr_34670 = state_34633;
(statearr_34670[(9)] = inst_34574);

(statearr_34670[(10)] = inst_34576);

(statearr_34670[(27)] = inst_34608);

(statearr_34670[(20)] = inst_34573);

(statearr_34670[(21)] = inst_34575);

return statearr_34670;
})();
var statearr_34671_34739 = state_34633__$1;
(statearr_34671_34739[(2)] = null);

(statearr_34671_34739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (43))){
var state_34633__$1 = state_34633;
var statearr_34672_34740 = state_34633__$1;
(statearr_34672_34740[(2)] = null);

(statearr_34672_34740[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (29))){
var inst_34617 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34673_34741 = state_34633__$1;
(statearr_34673_34741[(2)] = inst_34617);

(statearr_34673_34741[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (44))){
var inst_34626 = (state_34633[(2)]);
var state_34633__$1 = (function (){var statearr_34674 = state_34633;
(statearr_34674[(28)] = inst_34626);

return statearr_34674;
})();
var statearr_34675_34742 = state_34633__$1;
(statearr_34675_34742[(2)] = null);

(statearr_34675_34742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (6))){
var inst_34565 = (state_34633[(29)]);
var inst_34564 = cljs.core.deref.call(null,cs);
var inst_34565__$1 = cljs.core.keys.call(null,inst_34564);
var inst_34566 = cljs.core.count.call(null,inst_34565__$1);
var inst_34567 = cljs.core.reset_BANG_.call(null,dctr,inst_34566);
var inst_34572 = cljs.core.seq.call(null,inst_34565__$1);
var inst_34573 = inst_34572;
var inst_34574 = null;
var inst_34575 = (0);
var inst_34576 = (0);
var state_34633__$1 = (function (){var statearr_34676 = state_34633;
(statearr_34676[(30)] = inst_34567);

(statearr_34676[(9)] = inst_34574);

(statearr_34676[(10)] = inst_34576);

(statearr_34676[(29)] = inst_34565__$1);

(statearr_34676[(20)] = inst_34573);

(statearr_34676[(21)] = inst_34575);

return statearr_34676;
})();
var statearr_34677_34743 = state_34633__$1;
(statearr_34677_34743[(2)] = null);

(statearr_34677_34743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (28))){
var inst_34573 = (state_34633[(20)]);
var inst_34592 = (state_34633[(25)]);
var inst_34592__$1 = cljs.core.seq.call(null,inst_34573);
var state_34633__$1 = (function (){var statearr_34678 = state_34633;
(statearr_34678[(25)] = inst_34592__$1);

return statearr_34678;
})();
if(inst_34592__$1){
var statearr_34679_34744 = state_34633__$1;
(statearr_34679_34744[(1)] = (33));

} else {
var statearr_34680_34745 = state_34633__$1;
(statearr_34680_34745[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (25))){
var inst_34576 = (state_34633[(10)]);
var inst_34575 = (state_34633[(21)]);
var inst_34578 = (inst_34576 < inst_34575);
var inst_34579 = inst_34578;
var state_34633__$1 = state_34633;
if(cljs.core.truth_(inst_34579)){
var statearr_34681_34746 = state_34633__$1;
(statearr_34681_34746[(1)] = (27));

} else {
var statearr_34682_34747 = state_34633__$1;
(statearr_34682_34747[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (34))){
var state_34633__$1 = state_34633;
var statearr_34683_34748 = state_34633__$1;
(statearr_34683_34748[(2)] = null);

(statearr_34683_34748[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (17))){
var state_34633__$1 = state_34633;
var statearr_34684_34749 = state_34633__$1;
(statearr_34684_34749[(2)] = null);

(statearr_34684_34749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (3))){
var inst_34631 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34633__$1,inst_34631);
} else {
if((state_val_34634 === (12))){
var inst_34560 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34685_34750 = state_34633__$1;
(statearr_34685_34750[(2)] = inst_34560);

(statearr_34685_34750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (2))){
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34633__$1,(4),ch);
} else {
if((state_val_34634 === (23))){
var state_34633__$1 = state_34633;
var statearr_34686_34751 = state_34633__$1;
(statearr_34686_34751[(2)] = null);

(statearr_34686_34751[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (35))){
var inst_34615 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34687_34752 = state_34633__$1;
(statearr_34687_34752[(2)] = inst_34615);

(statearr_34687_34752[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (19))){
var inst_34532 = (state_34633[(7)]);
var inst_34536 = cljs.core.chunk_first.call(null,inst_34532);
var inst_34537 = cljs.core.chunk_rest.call(null,inst_34532);
var inst_34538 = cljs.core.count.call(null,inst_34536);
var inst_34510 = inst_34537;
var inst_34511 = inst_34536;
var inst_34512 = inst_34538;
var inst_34513 = (0);
var state_34633__$1 = (function (){var statearr_34688 = state_34633;
(statearr_34688[(13)] = inst_34513);

(statearr_34688[(14)] = inst_34510);

(statearr_34688[(16)] = inst_34511);

(statearr_34688[(17)] = inst_34512);

return statearr_34688;
})();
var statearr_34689_34753 = state_34633__$1;
(statearr_34689_34753[(2)] = null);

(statearr_34689_34753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (11))){
var inst_34510 = (state_34633[(14)]);
var inst_34532 = (state_34633[(7)]);
var inst_34532__$1 = cljs.core.seq.call(null,inst_34510);
var state_34633__$1 = (function (){var statearr_34690 = state_34633;
(statearr_34690[(7)] = inst_34532__$1);

return statearr_34690;
})();
if(inst_34532__$1){
var statearr_34691_34754 = state_34633__$1;
(statearr_34691_34754[(1)] = (16));

} else {
var statearr_34692_34755 = state_34633__$1;
(statearr_34692_34755[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (9))){
var inst_34562 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34693_34756 = state_34633__$1;
(statearr_34693_34756[(2)] = inst_34562);

(statearr_34693_34756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (5))){
var inst_34508 = cljs.core.deref.call(null,cs);
var inst_34509 = cljs.core.seq.call(null,inst_34508);
var inst_34510 = inst_34509;
var inst_34511 = null;
var inst_34512 = (0);
var inst_34513 = (0);
var state_34633__$1 = (function (){var statearr_34694 = state_34633;
(statearr_34694[(13)] = inst_34513);

(statearr_34694[(14)] = inst_34510);

(statearr_34694[(16)] = inst_34511);

(statearr_34694[(17)] = inst_34512);

return statearr_34694;
})();
var statearr_34695_34757 = state_34633__$1;
(statearr_34695_34757[(2)] = null);

(statearr_34695_34757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (14))){
var state_34633__$1 = state_34633;
var statearr_34696_34758 = state_34633__$1;
(statearr_34696_34758[(2)] = null);

(statearr_34696_34758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (45))){
var inst_34623 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34697_34759 = state_34633__$1;
(statearr_34697_34759[(2)] = inst_34623);

(statearr_34697_34759[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (26))){
var inst_34565 = (state_34633[(29)]);
var inst_34619 = (state_34633[(2)]);
var inst_34620 = cljs.core.seq.call(null,inst_34565);
var state_34633__$1 = (function (){var statearr_34698 = state_34633;
(statearr_34698[(31)] = inst_34619);

return statearr_34698;
})();
if(inst_34620){
var statearr_34699_34760 = state_34633__$1;
(statearr_34699_34760[(1)] = (42));

} else {
var statearr_34700_34761 = state_34633__$1;
(statearr_34700_34761[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (16))){
var inst_34532 = (state_34633[(7)]);
var inst_34534 = cljs.core.chunked_seq_QMARK_.call(null,inst_34532);
var state_34633__$1 = state_34633;
if(inst_34534){
var statearr_34701_34762 = state_34633__$1;
(statearr_34701_34762[(1)] = (19));

} else {
var statearr_34702_34763 = state_34633__$1;
(statearr_34702_34763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (38))){
var inst_34612 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34703_34764 = state_34633__$1;
(statearr_34703_34764[(2)] = inst_34612);

(statearr_34703_34764[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (30))){
var state_34633__$1 = state_34633;
var statearr_34704_34765 = state_34633__$1;
(statearr_34704_34765[(2)] = null);

(statearr_34704_34765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (10))){
var inst_34513 = (state_34633[(13)]);
var inst_34511 = (state_34633[(16)]);
var inst_34521 = cljs.core._nth.call(null,inst_34511,inst_34513);
var inst_34522 = cljs.core.nth.call(null,inst_34521,(0),null);
var inst_34523 = cljs.core.nth.call(null,inst_34521,(1),null);
var state_34633__$1 = (function (){var statearr_34705 = state_34633;
(statearr_34705[(26)] = inst_34522);

return statearr_34705;
})();
if(cljs.core.truth_(inst_34523)){
var statearr_34706_34766 = state_34633__$1;
(statearr_34706_34766[(1)] = (13));

} else {
var statearr_34707_34767 = state_34633__$1;
(statearr_34707_34767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (18))){
var inst_34558 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34708_34768 = state_34633__$1;
(statearr_34708_34768[(2)] = inst_34558);

(statearr_34708_34768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (42))){
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34633__$1,(45),dchan);
} else {
if((state_val_34634 === (37))){
var inst_34601 = (state_34633[(23)]);
var inst_34501 = (state_34633[(12)]);
var inst_34592 = (state_34633[(25)]);
var inst_34601__$1 = cljs.core.first.call(null,inst_34592);
var inst_34602 = cljs.core.async.put_BANG_.call(null,inst_34601__$1,inst_34501,done);
var state_34633__$1 = (function (){var statearr_34709 = state_34633;
(statearr_34709[(23)] = inst_34601__$1);

return statearr_34709;
})();
if(cljs.core.truth_(inst_34602)){
var statearr_34710_34769 = state_34633__$1;
(statearr_34710_34769[(1)] = (39));

} else {
var statearr_34711_34770 = state_34633__$1;
(statearr_34711_34770[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (8))){
var inst_34513 = (state_34633[(13)]);
var inst_34512 = (state_34633[(17)]);
var inst_34515 = (inst_34513 < inst_34512);
var inst_34516 = inst_34515;
var state_34633__$1 = state_34633;
if(cljs.core.truth_(inst_34516)){
var statearr_34712_34771 = state_34633__$1;
(statearr_34712_34771[(1)] = (10));

} else {
var statearr_34713_34772 = state_34633__$1;
(statearr_34713_34772[(1)] = (11));

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
});})(c__33899__auto___34718,cs,m,dchan,dctr,done))
;
return ((function (switch__33809__auto__,c__33899__auto___34718,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33810__auto__ = null;
var cljs$core$async$mult_$_state_machine__33810__auto____0 = (function (){
var statearr_34714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34714[(0)] = cljs$core$async$mult_$_state_machine__33810__auto__);

(statearr_34714[(1)] = (1));

return statearr_34714;
});
var cljs$core$async$mult_$_state_machine__33810__auto____1 = (function (state_34633){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34715){if((e34715 instanceof Object)){
var ex__33813__auto__ = e34715;
var statearr_34716_34773 = state_34633;
(statearr_34716_34773[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34774 = state_34633;
state_34633 = G__34774;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33810__auto__ = function(state_34633){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33810__auto____1.call(this,state_34633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33810__auto____0;
cljs$core$async$mult_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33810__auto____1;
return cljs$core$async$mult_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___34718,cs,m,dchan,dctr,done))
})();
var state__33901__auto__ = (function (){var statearr_34717 = f__33900__auto__.call(null);
(statearr_34717[(6)] = c__33899__auto___34718);

return statearr_34717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___34718,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34776 = arguments.length;
switch (G__34776) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30950__auto__ = (((m == null))?null:m);
var m__30951__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,m,ch);
} else {
var m__30951__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30950__auto__ = (((m == null))?null:m);
var m__30951__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,m,ch);
} else {
var m__30951__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30950__auto__ = (((m == null))?null:m);
var m__30951__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,m);
} else {
var m__30951__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30950__auto__ = (((m == null))?null:m);
var m__30951__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,m,state_map);
} else {
var m__30951__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30950__auto__ = (((m == null))?null:m);
var m__30951__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,m,mode);
} else {
var m__30951__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31503__auto__ = [];
var len__31496__auto___34788 = arguments.length;
var i__31497__auto___34789 = (0);
while(true){
if((i__31497__auto___34789 < len__31496__auto___34788)){
args__31503__auto__.push((arguments[i__31497__auto___34789]));

var G__34790 = (i__31497__auto___34789 + (1));
i__31497__auto___34789 = G__34790;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((3) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31504__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34782){
var map__34783 = p__34782;
var map__34783__$1 = ((((!((map__34783 == null)))?((((map__34783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34783):map__34783);
var opts = map__34783__$1;
var statearr_34785_34791 = state;
(statearr_34785_34791[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__34783,map__34783__$1,opts){
return (function (val){
var statearr_34786_34792 = state;
(statearr_34786_34792[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34783,map__34783__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_34787_34793 = state;
(statearr_34787_34793[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34778){
var G__34779 = cljs.core.first.call(null,seq34778);
var seq34778__$1 = cljs.core.next.call(null,seq34778);
var G__34780 = cljs.core.first.call(null,seq34778__$1);
var seq34778__$2 = cljs.core.next.call(null,seq34778__$1);
var G__34781 = cljs.core.first.call(null,seq34778__$2);
var seq34778__$3 = cljs.core.next.call(null,seq34778__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34779,G__34780,G__34781,seq34778__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34794 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34795){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34795 = meta34795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34796,meta34795__$1){
var self__ = this;
var _34796__$1 = this;
return (new cljs.core.async.t_cljs$core$async34794(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34795__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34796){
var self__ = this;
var _34796__$1 = this;
return self__.meta34795;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34794.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34794.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34794.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34794.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34794.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34794.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34794.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34794.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34795","meta34795",1491352973,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34794";

cljs.core.async.t_cljs$core$async34794.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30888__auto__,writer__30889__auto__,opt__30890__auto__){
return cljs.core._write.call(null,writer__30889__auto__,"cljs.core.async/t_cljs$core$async34794");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34794 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34794(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34795){
return (new cljs.core.async.t_cljs$core$async34794(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34795));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34794(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33899__auto___34958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___34958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___34958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34898){
var state_val_34899 = (state_34898[(1)]);
if((state_val_34899 === (7))){
var inst_34813 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
var statearr_34900_34959 = state_34898__$1;
(statearr_34900_34959[(2)] = inst_34813);

(statearr_34900_34959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (20))){
var inst_34825 = (state_34898[(7)]);
var state_34898__$1 = state_34898;
var statearr_34901_34960 = state_34898__$1;
(statearr_34901_34960[(2)] = inst_34825);

(statearr_34901_34960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (27))){
var state_34898__$1 = state_34898;
var statearr_34902_34961 = state_34898__$1;
(statearr_34902_34961[(2)] = null);

(statearr_34902_34961[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (1))){
var inst_34800 = (state_34898[(8)]);
var inst_34800__$1 = calc_state.call(null);
var inst_34802 = (inst_34800__$1 == null);
var inst_34803 = cljs.core.not.call(null,inst_34802);
var state_34898__$1 = (function (){var statearr_34903 = state_34898;
(statearr_34903[(8)] = inst_34800__$1);

return statearr_34903;
})();
if(inst_34803){
var statearr_34904_34962 = state_34898__$1;
(statearr_34904_34962[(1)] = (2));

} else {
var statearr_34905_34963 = state_34898__$1;
(statearr_34905_34963[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (24))){
var inst_34858 = (state_34898[(9)]);
var inst_34849 = (state_34898[(10)]);
var inst_34872 = (state_34898[(11)]);
var inst_34872__$1 = inst_34849.call(null,inst_34858);
var state_34898__$1 = (function (){var statearr_34906 = state_34898;
(statearr_34906[(11)] = inst_34872__$1);

return statearr_34906;
})();
if(cljs.core.truth_(inst_34872__$1)){
var statearr_34907_34964 = state_34898__$1;
(statearr_34907_34964[(1)] = (29));

} else {
var statearr_34908_34965 = state_34898__$1;
(statearr_34908_34965[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (4))){
var inst_34816 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
if(cljs.core.truth_(inst_34816)){
var statearr_34909_34966 = state_34898__$1;
(statearr_34909_34966[(1)] = (8));

} else {
var statearr_34910_34967 = state_34898__$1;
(statearr_34910_34967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (15))){
var inst_34843 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
if(cljs.core.truth_(inst_34843)){
var statearr_34911_34968 = state_34898__$1;
(statearr_34911_34968[(1)] = (19));

} else {
var statearr_34912_34969 = state_34898__$1;
(statearr_34912_34969[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (21))){
var inst_34848 = (state_34898[(12)]);
var inst_34848__$1 = (state_34898[(2)]);
var inst_34849 = cljs.core.get.call(null,inst_34848__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34850 = cljs.core.get.call(null,inst_34848__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34851 = cljs.core.get.call(null,inst_34848__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34898__$1 = (function (){var statearr_34913 = state_34898;
(statearr_34913[(12)] = inst_34848__$1);

(statearr_34913[(10)] = inst_34849);

(statearr_34913[(13)] = inst_34850);

return statearr_34913;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34898__$1,(22),inst_34851);
} else {
if((state_val_34899 === (31))){
var inst_34880 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
if(cljs.core.truth_(inst_34880)){
var statearr_34914_34970 = state_34898__$1;
(statearr_34914_34970[(1)] = (32));

} else {
var statearr_34915_34971 = state_34898__$1;
(statearr_34915_34971[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (32))){
var inst_34857 = (state_34898[(14)]);
var state_34898__$1 = state_34898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34898__$1,(35),out,inst_34857);
} else {
if((state_val_34899 === (33))){
var inst_34848 = (state_34898[(12)]);
var inst_34825 = inst_34848;
var state_34898__$1 = (function (){var statearr_34916 = state_34898;
(statearr_34916[(7)] = inst_34825);

return statearr_34916;
})();
var statearr_34917_34972 = state_34898__$1;
(statearr_34917_34972[(2)] = null);

(statearr_34917_34972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (13))){
var inst_34825 = (state_34898[(7)]);
var inst_34832 = inst_34825.cljs$lang$protocol_mask$partition0$;
var inst_34833 = (inst_34832 & (64));
var inst_34834 = inst_34825.cljs$core$ISeq$;
var inst_34835 = (cljs.core.PROTOCOL_SENTINEL === inst_34834);
var inst_34836 = (inst_34833) || (inst_34835);
var state_34898__$1 = state_34898;
if(cljs.core.truth_(inst_34836)){
var statearr_34918_34973 = state_34898__$1;
(statearr_34918_34973[(1)] = (16));

} else {
var statearr_34919_34974 = state_34898__$1;
(statearr_34919_34974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (22))){
var inst_34857 = (state_34898[(14)]);
var inst_34858 = (state_34898[(9)]);
var inst_34856 = (state_34898[(2)]);
var inst_34857__$1 = cljs.core.nth.call(null,inst_34856,(0),null);
var inst_34858__$1 = cljs.core.nth.call(null,inst_34856,(1),null);
var inst_34859 = (inst_34857__$1 == null);
var inst_34860 = cljs.core._EQ_.call(null,inst_34858__$1,change);
var inst_34861 = (inst_34859) || (inst_34860);
var state_34898__$1 = (function (){var statearr_34920 = state_34898;
(statearr_34920[(14)] = inst_34857__$1);

(statearr_34920[(9)] = inst_34858__$1);

return statearr_34920;
})();
if(cljs.core.truth_(inst_34861)){
var statearr_34921_34975 = state_34898__$1;
(statearr_34921_34975[(1)] = (23));

} else {
var statearr_34922_34976 = state_34898__$1;
(statearr_34922_34976[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (36))){
var inst_34848 = (state_34898[(12)]);
var inst_34825 = inst_34848;
var state_34898__$1 = (function (){var statearr_34923 = state_34898;
(statearr_34923[(7)] = inst_34825);

return statearr_34923;
})();
var statearr_34924_34977 = state_34898__$1;
(statearr_34924_34977[(2)] = null);

(statearr_34924_34977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (29))){
var inst_34872 = (state_34898[(11)]);
var state_34898__$1 = state_34898;
var statearr_34925_34978 = state_34898__$1;
(statearr_34925_34978[(2)] = inst_34872);

(statearr_34925_34978[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (6))){
var state_34898__$1 = state_34898;
var statearr_34926_34979 = state_34898__$1;
(statearr_34926_34979[(2)] = false);

(statearr_34926_34979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (28))){
var inst_34868 = (state_34898[(2)]);
var inst_34869 = calc_state.call(null);
var inst_34825 = inst_34869;
var state_34898__$1 = (function (){var statearr_34927 = state_34898;
(statearr_34927[(15)] = inst_34868);

(statearr_34927[(7)] = inst_34825);

return statearr_34927;
})();
var statearr_34928_34980 = state_34898__$1;
(statearr_34928_34980[(2)] = null);

(statearr_34928_34980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (25))){
var inst_34894 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
var statearr_34929_34981 = state_34898__$1;
(statearr_34929_34981[(2)] = inst_34894);

(statearr_34929_34981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (34))){
var inst_34892 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
var statearr_34930_34982 = state_34898__$1;
(statearr_34930_34982[(2)] = inst_34892);

(statearr_34930_34982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (17))){
var state_34898__$1 = state_34898;
var statearr_34931_34983 = state_34898__$1;
(statearr_34931_34983[(2)] = false);

(statearr_34931_34983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (3))){
var state_34898__$1 = state_34898;
var statearr_34932_34984 = state_34898__$1;
(statearr_34932_34984[(2)] = false);

(statearr_34932_34984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (12))){
var inst_34896 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34898__$1,inst_34896);
} else {
if((state_val_34899 === (2))){
var inst_34800 = (state_34898[(8)]);
var inst_34805 = inst_34800.cljs$lang$protocol_mask$partition0$;
var inst_34806 = (inst_34805 & (64));
var inst_34807 = inst_34800.cljs$core$ISeq$;
var inst_34808 = (cljs.core.PROTOCOL_SENTINEL === inst_34807);
var inst_34809 = (inst_34806) || (inst_34808);
var state_34898__$1 = state_34898;
if(cljs.core.truth_(inst_34809)){
var statearr_34933_34985 = state_34898__$1;
(statearr_34933_34985[(1)] = (5));

} else {
var statearr_34934_34986 = state_34898__$1;
(statearr_34934_34986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (23))){
var inst_34857 = (state_34898[(14)]);
var inst_34863 = (inst_34857 == null);
var state_34898__$1 = state_34898;
if(cljs.core.truth_(inst_34863)){
var statearr_34935_34987 = state_34898__$1;
(statearr_34935_34987[(1)] = (26));

} else {
var statearr_34936_34988 = state_34898__$1;
(statearr_34936_34988[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (35))){
var inst_34883 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
if(cljs.core.truth_(inst_34883)){
var statearr_34937_34989 = state_34898__$1;
(statearr_34937_34989[(1)] = (36));

} else {
var statearr_34938_34990 = state_34898__$1;
(statearr_34938_34990[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (19))){
var inst_34825 = (state_34898[(7)]);
var inst_34845 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34825);
var state_34898__$1 = state_34898;
var statearr_34939_34991 = state_34898__$1;
(statearr_34939_34991[(2)] = inst_34845);

(statearr_34939_34991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (11))){
var inst_34825 = (state_34898[(7)]);
var inst_34829 = (inst_34825 == null);
var inst_34830 = cljs.core.not.call(null,inst_34829);
var state_34898__$1 = state_34898;
if(inst_34830){
var statearr_34940_34992 = state_34898__$1;
(statearr_34940_34992[(1)] = (13));

} else {
var statearr_34941_34993 = state_34898__$1;
(statearr_34941_34993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (9))){
var inst_34800 = (state_34898[(8)]);
var state_34898__$1 = state_34898;
var statearr_34942_34994 = state_34898__$1;
(statearr_34942_34994[(2)] = inst_34800);

(statearr_34942_34994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (5))){
var state_34898__$1 = state_34898;
var statearr_34943_34995 = state_34898__$1;
(statearr_34943_34995[(2)] = true);

(statearr_34943_34995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (14))){
var state_34898__$1 = state_34898;
var statearr_34944_34996 = state_34898__$1;
(statearr_34944_34996[(2)] = false);

(statearr_34944_34996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (26))){
var inst_34858 = (state_34898[(9)]);
var inst_34865 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34858);
var state_34898__$1 = state_34898;
var statearr_34945_34997 = state_34898__$1;
(statearr_34945_34997[(2)] = inst_34865);

(statearr_34945_34997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (16))){
var state_34898__$1 = state_34898;
var statearr_34946_34998 = state_34898__$1;
(statearr_34946_34998[(2)] = true);

(statearr_34946_34998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (38))){
var inst_34888 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
var statearr_34947_34999 = state_34898__$1;
(statearr_34947_34999[(2)] = inst_34888);

(statearr_34947_34999[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (30))){
var inst_34858 = (state_34898[(9)]);
var inst_34849 = (state_34898[(10)]);
var inst_34850 = (state_34898[(13)]);
var inst_34875 = cljs.core.empty_QMARK_.call(null,inst_34849);
var inst_34876 = inst_34850.call(null,inst_34858);
var inst_34877 = cljs.core.not.call(null,inst_34876);
var inst_34878 = (inst_34875) && (inst_34877);
var state_34898__$1 = state_34898;
var statearr_34948_35000 = state_34898__$1;
(statearr_34948_35000[(2)] = inst_34878);

(statearr_34948_35000[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (10))){
var inst_34800 = (state_34898[(8)]);
var inst_34821 = (state_34898[(2)]);
var inst_34822 = cljs.core.get.call(null,inst_34821,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34823 = cljs.core.get.call(null,inst_34821,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34824 = cljs.core.get.call(null,inst_34821,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34825 = inst_34800;
var state_34898__$1 = (function (){var statearr_34949 = state_34898;
(statearr_34949[(16)] = inst_34824);

(statearr_34949[(17)] = inst_34822);

(statearr_34949[(18)] = inst_34823);

(statearr_34949[(7)] = inst_34825);

return statearr_34949;
})();
var statearr_34950_35001 = state_34898__$1;
(statearr_34950_35001[(2)] = null);

(statearr_34950_35001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (18))){
var inst_34840 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
var statearr_34951_35002 = state_34898__$1;
(statearr_34951_35002[(2)] = inst_34840);

(statearr_34951_35002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (37))){
var state_34898__$1 = state_34898;
var statearr_34952_35003 = state_34898__$1;
(statearr_34952_35003[(2)] = null);

(statearr_34952_35003[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (8))){
var inst_34800 = (state_34898[(8)]);
var inst_34818 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34800);
var state_34898__$1 = state_34898;
var statearr_34953_35004 = state_34898__$1;
(statearr_34953_35004[(2)] = inst_34818);

(statearr_34953_35004[(1)] = (10));


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
});})(c__33899__auto___34958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33809__auto__,c__33899__auto___34958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33810__auto__ = null;
var cljs$core$async$mix_$_state_machine__33810__auto____0 = (function (){
var statearr_34954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34954[(0)] = cljs$core$async$mix_$_state_machine__33810__auto__);

(statearr_34954[(1)] = (1));

return statearr_34954;
});
var cljs$core$async$mix_$_state_machine__33810__auto____1 = (function (state_34898){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_34898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e34955){if((e34955 instanceof Object)){
var ex__33813__auto__ = e34955;
var statearr_34956_35005 = state_34898;
(statearr_34956_35005[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35006 = state_34898;
state_34898 = G__35006;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33810__auto__ = function(state_34898){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33810__auto____1.call(this,state_34898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33810__auto____0;
cljs$core$async$mix_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33810__auto____1;
return cljs$core$async$mix_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___34958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33901__auto__ = (function (){var statearr_34957 = f__33900__auto__.call(null);
(statearr_34957[(6)] = c__33899__auto___34958);

return statearr_34957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___34958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30950__auto__ = (((p == null))?null:p);
var m__30951__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30951__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30950__auto__ = (((p == null))?null:p);
var m__30951__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,p,v,ch);
} else {
var m__30951__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35008 = arguments.length;
switch (G__35008) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30950__auto__ = (((p == null))?null:p);
var m__30951__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,p);
} else {
var m__30951__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30950__auto__ = (((p == null))?null:p);
var m__30951__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,p,v);
} else {
var m__30951__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35012 = arguments.length;
switch (G__35012) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30217__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30217__auto__,mults){
return (function (p1__35010_SHARP_){
if(cljs.core.truth_(p1__35010_SHARP_.call(null,topic))){
return p1__35010_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35010_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30217__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35013 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35014){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35014 = meta35014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35015,meta35014__$1){
var self__ = this;
var _35015__$1 = this;
return (new cljs.core.async.t_cljs$core$async35013(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35014__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35015){
var self__ = this;
var _35015__$1 = this;
return self__.meta35014;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35013.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35014","meta35014",553205378,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35013";

cljs.core.async.t_cljs$core$async35013.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30888__auto__,writer__30889__auto__,opt__30890__auto__){
return cljs.core._write.call(null,writer__30889__auto__,"cljs.core.async/t_cljs$core$async35013");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35013 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35013(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35014){
return (new cljs.core.async.t_cljs$core$async35013(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35014));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35013(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33899__auto___35133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___35133,mults,ensure_mult,p){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___35133,mults,ensure_mult,p){
return (function (state_35087){
var state_val_35088 = (state_35087[(1)]);
if((state_val_35088 === (7))){
var inst_35083 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35089_35134 = state_35087__$1;
(statearr_35089_35134[(2)] = inst_35083);

(statearr_35089_35134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (20))){
var state_35087__$1 = state_35087;
var statearr_35090_35135 = state_35087__$1;
(statearr_35090_35135[(2)] = null);

(statearr_35090_35135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (1))){
var state_35087__$1 = state_35087;
var statearr_35091_35136 = state_35087__$1;
(statearr_35091_35136[(2)] = null);

(statearr_35091_35136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (24))){
var inst_35066 = (state_35087[(7)]);
var inst_35075 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35066);
var state_35087__$1 = state_35087;
var statearr_35092_35137 = state_35087__$1;
(statearr_35092_35137[(2)] = inst_35075);

(statearr_35092_35137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (4))){
var inst_35018 = (state_35087[(8)]);
var inst_35018__$1 = (state_35087[(2)]);
var inst_35019 = (inst_35018__$1 == null);
var state_35087__$1 = (function (){var statearr_35093 = state_35087;
(statearr_35093[(8)] = inst_35018__$1);

return statearr_35093;
})();
if(cljs.core.truth_(inst_35019)){
var statearr_35094_35138 = state_35087__$1;
(statearr_35094_35138[(1)] = (5));

} else {
var statearr_35095_35139 = state_35087__$1;
(statearr_35095_35139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (15))){
var inst_35060 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35096_35140 = state_35087__$1;
(statearr_35096_35140[(2)] = inst_35060);

(statearr_35096_35140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (21))){
var inst_35080 = (state_35087[(2)]);
var state_35087__$1 = (function (){var statearr_35097 = state_35087;
(statearr_35097[(9)] = inst_35080);

return statearr_35097;
})();
var statearr_35098_35141 = state_35087__$1;
(statearr_35098_35141[(2)] = null);

(statearr_35098_35141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (13))){
var inst_35042 = (state_35087[(10)]);
var inst_35044 = cljs.core.chunked_seq_QMARK_.call(null,inst_35042);
var state_35087__$1 = state_35087;
if(inst_35044){
var statearr_35099_35142 = state_35087__$1;
(statearr_35099_35142[(1)] = (16));

} else {
var statearr_35100_35143 = state_35087__$1;
(statearr_35100_35143[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (22))){
var inst_35072 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
if(cljs.core.truth_(inst_35072)){
var statearr_35101_35144 = state_35087__$1;
(statearr_35101_35144[(1)] = (23));

} else {
var statearr_35102_35145 = state_35087__$1;
(statearr_35102_35145[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (6))){
var inst_35018 = (state_35087[(8)]);
var inst_35068 = (state_35087[(11)]);
var inst_35066 = (state_35087[(7)]);
var inst_35066__$1 = topic_fn.call(null,inst_35018);
var inst_35067 = cljs.core.deref.call(null,mults);
var inst_35068__$1 = cljs.core.get.call(null,inst_35067,inst_35066__$1);
var state_35087__$1 = (function (){var statearr_35103 = state_35087;
(statearr_35103[(11)] = inst_35068__$1);

(statearr_35103[(7)] = inst_35066__$1);

return statearr_35103;
})();
if(cljs.core.truth_(inst_35068__$1)){
var statearr_35104_35146 = state_35087__$1;
(statearr_35104_35146[(1)] = (19));

} else {
var statearr_35105_35147 = state_35087__$1;
(statearr_35105_35147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (25))){
var inst_35077 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35106_35148 = state_35087__$1;
(statearr_35106_35148[(2)] = inst_35077);

(statearr_35106_35148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (17))){
var inst_35042 = (state_35087[(10)]);
var inst_35051 = cljs.core.first.call(null,inst_35042);
var inst_35052 = cljs.core.async.muxch_STAR_.call(null,inst_35051);
var inst_35053 = cljs.core.async.close_BANG_.call(null,inst_35052);
var inst_35054 = cljs.core.next.call(null,inst_35042);
var inst_35028 = inst_35054;
var inst_35029 = null;
var inst_35030 = (0);
var inst_35031 = (0);
var state_35087__$1 = (function (){var statearr_35107 = state_35087;
(statearr_35107[(12)] = inst_35029);

(statearr_35107[(13)] = inst_35030);

(statearr_35107[(14)] = inst_35053);

(statearr_35107[(15)] = inst_35031);

(statearr_35107[(16)] = inst_35028);

return statearr_35107;
})();
var statearr_35108_35149 = state_35087__$1;
(statearr_35108_35149[(2)] = null);

(statearr_35108_35149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (3))){
var inst_35085 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35087__$1,inst_35085);
} else {
if((state_val_35088 === (12))){
var inst_35062 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35109_35150 = state_35087__$1;
(statearr_35109_35150[(2)] = inst_35062);

(statearr_35109_35150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (2))){
var state_35087__$1 = state_35087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35087__$1,(4),ch);
} else {
if((state_val_35088 === (23))){
var state_35087__$1 = state_35087;
var statearr_35110_35151 = state_35087__$1;
(statearr_35110_35151[(2)] = null);

(statearr_35110_35151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (19))){
var inst_35018 = (state_35087[(8)]);
var inst_35068 = (state_35087[(11)]);
var inst_35070 = cljs.core.async.muxch_STAR_.call(null,inst_35068);
var state_35087__$1 = state_35087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35087__$1,(22),inst_35070,inst_35018);
} else {
if((state_val_35088 === (11))){
var inst_35042 = (state_35087[(10)]);
var inst_35028 = (state_35087[(16)]);
var inst_35042__$1 = cljs.core.seq.call(null,inst_35028);
var state_35087__$1 = (function (){var statearr_35111 = state_35087;
(statearr_35111[(10)] = inst_35042__$1);

return statearr_35111;
})();
if(inst_35042__$1){
var statearr_35112_35152 = state_35087__$1;
(statearr_35112_35152[(1)] = (13));

} else {
var statearr_35113_35153 = state_35087__$1;
(statearr_35113_35153[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (9))){
var inst_35064 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35114_35154 = state_35087__$1;
(statearr_35114_35154[(2)] = inst_35064);

(statearr_35114_35154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (5))){
var inst_35025 = cljs.core.deref.call(null,mults);
var inst_35026 = cljs.core.vals.call(null,inst_35025);
var inst_35027 = cljs.core.seq.call(null,inst_35026);
var inst_35028 = inst_35027;
var inst_35029 = null;
var inst_35030 = (0);
var inst_35031 = (0);
var state_35087__$1 = (function (){var statearr_35115 = state_35087;
(statearr_35115[(12)] = inst_35029);

(statearr_35115[(13)] = inst_35030);

(statearr_35115[(15)] = inst_35031);

(statearr_35115[(16)] = inst_35028);

return statearr_35115;
})();
var statearr_35116_35155 = state_35087__$1;
(statearr_35116_35155[(2)] = null);

(statearr_35116_35155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (14))){
var state_35087__$1 = state_35087;
var statearr_35120_35156 = state_35087__$1;
(statearr_35120_35156[(2)] = null);

(statearr_35120_35156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (16))){
var inst_35042 = (state_35087[(10)]);
var inst_35046 = cljs.core.chunk_first.call(null,inst_35042);
var inst_35047 = cljs.core.chunk_rest.call(null,inst_35042);
var inst_35048 = cljs.core.count.call(null,inst_35046);
var inst_35028 = inst_35047;
var inst_35029 = inst_35046;
var inst_35030 = inst_35048;
var inst_35031 = (0);
var state_35087__$1 = (function (){var statearr_35121 = state_35087;
(statearr_35121[(12)] = inst_35029);

(statearr_35121[(13)] = inst_35030);

(statearr_35121[(15)] = inst_35031);

(statearr_35121[(16)] = inst_35028);

return statearr_35121;
})();
var statearr_35122_35157 = state_35087__$1;
(statearr_35122_35157[(2)] = null);

(statearr_35122_35157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (10))){
var inst_35029 = (state_35087[(12)]);
var inst_35030 = (state_35087[(13)]);
var inst_35031 = (state_35087[(15)]);
var inst_35028 = (state_35087[(16)]);
var inst_35036 = cljs.core._nth.call(null,inst_35029,inst_35031);
var inst_35037 = cljs.core.async.muxch_STAR_.call(null,inst_35036);
var inst_35038 = cljs.core.async.close_BANG_.call(null,inst_35037);
var inst_35039 = (inst_35031 + (1));
var tmp35117 = inst_35029;
var tmp35118 = inst_35030;
var tmp35119 = inst_35028;
var inst_35028__$1 = tmp35119;
var inst_35029__$1 = tmp35117;
var inst_35030__$1 = tmp35118;
var inst_35031__$1 = inst_35039;
var state_35087__$1 = (function (){var statearr_35123 = state_35087;
(statearr_35123[(17)] = inst_35038);

(statearr_35123[(12)] = inst_35029__$1);

(statearr_35123[(13)] = inst_35030__$1);

(statearr_35123[(15)] = inst_35031__$1);

(statearr_35123[(16)] = inst_35028__$1);

return statearr_35123;
})();
var statearr_35124_35158 = state_35087__$1;
(statearr_35124_35158[(2)] = null);

(statearr_35124_35158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (18))){
var inst_35057 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35125_35159 = state_35087__$1;
(statearr_35125_35159[(2)] = inst_35057);

(statearr_35125_35159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (8))){
var inst_35030 = (state_35087[(13)]);
var inst_35031 = (state_35087[(15)]);
var inst_35033 = (inst_35031 < inst_35030);
var inst_35034 = inst_35033;
var state_35087__$1 = state_35087;
if(cljs.core.truth_(inst_35034)){
var statearr_35126_35160 = state_35087__$1;
(statearr_35126_35160[(1)] = (10));

} else {
var statearr_35127_35161 = state_35087__$1;
(statearr_35127_35161[(1)] = (11));

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
});})(c__33899__auto___35133,mults,ensure_mult,p))
;
return ((function (switch__33809__auto__,c__33899__auto___35133,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_35128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35128[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_35128[(1)] = (1));

return statearr_35128;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_35087){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_35087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e35129){if((e35129 instanceof Object)){
var ex__33813__auto__ = e35129;
var statearr_35130_35162 = state_35087;
(statearr_35130_35162[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35163 = state_35087;
state_35087 = G__35163;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_35087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_35087);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___35133,mults,ensure_mult,p))
})();
var state__33901__auto__ = (function (){var statearr_35131 = f__33900__auto__.call(null);
(statearr_35131[(6)] = c__33899__auto___35133);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___35133,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35165 = arguments.length;
switch (G__35165) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35168 = arguments.length;
switch (G__35168) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35171 = arguments.length;
switch (G__35171) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33899__auto___35238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___35238,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___35238,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35210){
var state_val_35211 = (state_35210[(1)]);
if((state_val_35211 === (7))){
var state_35210__$1 = state_35210;
var statearr_35212_35239 = state_35210__$1;
(statearr_35212_35239[(2)] = null);

(statearr_35212_35239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (1))){
var state_35210__$1 = state_35210;
var statearr_35213_35240 = state_35210__$1;
(statearr_35213_35240[(2)] = null);

(statearr_35213_35240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (4))){
var inst_35174 = (state_35210[(7)]);
var inst_35176 = (inst_35174 < cnt);
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35176)){
var statearr_35214_35241 = state_35210__$1;
(statearr_35214_35241[(1)] = (6));

} else {
var statearr_35215_35242 = state_35210__$1;
(statearr_35215_35242[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (15))){
var inst_35206 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35216_35243 = state_35210__$1;
(statearr_35216_35243[(2)] = inst_35206);

(statearr_35216_35243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (13))){
var inst_35199 = cljs.core.async.close_BANG_.call(null,out);
var state_35210__$1 = state_35210;
var statearr_35217_35244 = state_35210__$1;
(statearr_35217_35244[(2)] = inst_35199);

(statearr_35217_35244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (6))){
var state_35210__$1 = state_35210;
var statearr_35218_35245 = state_35210__$1;
(statearr_35218_35245[(2)] = null);

(statearr_35218_35245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (3))){
var inst_35208 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35210__$1,inst_35208);
} else {
if((state_val_35211 === (12))){
var inst_35196 = (state_35210[(8)]);
var inst_35196__$1 = (state_35210[(2)]);
var inst_35197 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35196__$1);
var state_35210__$1 = (function (){var statearr_35219 = state_35210;
(statearr_35219[(8)] = inst_35196__$1);

return statearr_35219;
})();
if(cljs.core.truth_(inst_35197)){
var statearr_35220_35246 = state_35210__$1;
(statearr_35220_35246[(1)] = (13));

} else {
var statearr_35221_35247 = state_35210__$1;
(statearr_35221_35247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (2))){
var inst_35173 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35174 = (0);
var state_35210__$1 = (function (){var statearr_35222 = state_35210;
(statearr_35222[(7)] = inst_35174);

(statearr_35222[(9)] = inst_35173);

return statearr_35222;
})();
var statearr_35223_35248 = state_35210__$1;
(statearr_35223_35248[(2)] = null);

(statearr_35223_35248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (11))){
var inst_35174 = (state_35210[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35210,(10),Object,null,(9));
var inst_35183 = chs__$1.call(null,inst_35174);
var inst_35184 = done.call(null,inst_35174);
var inst_35185 = cljs.core.async.take_BANG_.call(null,inst_35183,inst_35184);
var state_35210__$1 = state_35210;
var statearr_35224_35249 = state_35210__$1;
(statearr_35224_35249[(2)] = inst_35185);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35210__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (9))){
var inst_35174 = (state_35210[(7)]);
var inst_35187 = (state_35210[(2)]);
var inst_35188 = (inst_35174 + (1));
var inst_35174__$1 = inst_35188;
var state_35210__$1 = (function (){var statearr_35225 = state_35210;
(statearr_35225[(10)] = inst_35187);

(statearr_35225[(7)] = inst_35174__$1);

return statearr_35225;
})();
var statearr_35226_35250 = state_35210__$1;
(statearr_35226_35250[(2)] = null);

(statearr_35226_35250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (5))){
var inst_35194 = (state_35210[(2)]);
var state_35210__$1 = (function (){var statearr_35227 = state_35210;
(statearr_35227[(11)] = inst_35194);

return statearr_35227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35210__$1,(12),dchan);
} else {
if((state_val_35211 === (14))){
var inst_35196 = (state_35210[(8)]);
var inst_35201 = cljs.core.apply.call(null,f,inst_35196);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35210__$1,(16),out,inst_35201);
} else {
if((state_val_35211 === (16))){
var inst_35203 = (state_35210[(2)]);
var state_35210__$1 = (function (){var statearr_35228 = state_35210;
(statearr_35228[(12)] = inst_35203);

return statearr_35228;
})();
var statearr_35229_35251 = state_35210__$1;
(statearr_35229_35251[(2)] = null);

(statearr_35229_35251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (10))){
var inst_35178 = (state_35210[(2)]);
var inst_35179 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35210__$1 = (function (){var statearr_35230 = state_35210;
(statearr_35230[(13)] = inst_35178);

return statearr_35230;
})();
var statearr_35231_35252 = state_35210__$1;
(statearr_35231_35252[(2)] = inst_35179);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35210__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (8))){
var inst_35192 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35232_35253 = state_35210__$1;
(statearr_35232_35253[(2)] = inst_35192);

(statearr_35232_35253[(1)] = (5));


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
});})(c__33899__auto___35238,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33809__auto__,c__33899__auto___35238,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_35233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35233[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_35233[(1)] = (1));

return statearr_35233;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_35210){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_35210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e35234){if((e35234 instanceof Object)){
var ex__33813__auto__ = e35234;
var statearr_35235_35254 = state_35210;
(statearr_35235_35254[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35255 = state_35210;
state_35210 = G__35255;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_35210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_35210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___35238,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33901__auto__ = (function (){var statearr_35236 = f__33900__auto__.call(null);
(statearr_35236[(6)] = c__33899__auto___35238);

return statearr_35236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___35238,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35258 = arguments.length;
switch (G__35258) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33899__auto___35312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___35312,out){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___35312,out){
return (function (state_35290){
var state_val_35291 = (state_35290[(1)]);
if((state_val_35291 === (7))){
var inst_35270 = (state_35290[(7)]);
var inst_35269 = (state_35290[(8)]);
var inst_35269__$1 = (state_35290[(2)]);
var inst_35270__$1 = cljs.core.nth.call(null,inst_35269__$1,(0),null);
var inst_35271 = cljs.core.nth.call(null,inst_35269__$1,(1),null);
var inst_35272 = (inst_35270__$1 == null);
var state_35290__$1 = (function (){var statearr_35292 = state_35290;
(statearr_35292[(7)] = inst_35270__$1);

(statearr_35292[(9)] = inst_35271);

(statearr_35292[(8)] = inst_35269__$1);

return statearr_35292;
})();
if(cljs.core.truth_(inst_35272)){
var statearr_35293_35313 = state_35290__$1;
(statearr_35293_35313[(1)] = (8));

} else {
var statearr_35294_35314 = state_35290__$1;
(statearr_35294_35314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (1))){
var inst_35259 = cljs.core.vec.call(null,chs);
var inst_35260 = inst_35259;
var state_35290__$1 = (function (){var statearr_35295 = state_35290;
(statearr_35295[(10)] = inst_35260);

return statearr_35295;
})();
var statearr_35296_35315 = state_35290__$1;
(statearr_35296_35315[(2)] = null);

(statearr_35296_35315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (4))){
var inst_35260 = (state_35290[(10)]);
var state_35290__$1 = state_35290;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35290__$1,(7),inst_35260);
} else {
if((state_val_35291 === (6))){
var inst_35286 = (state_35290[(2)]);
var state_35290__$1 = state_35290;
var statearr_35297_35316 = state_35290__$1;
(statearr_35297_35316[(2)] = inst_35286);

(statearr_35297_35316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (3))){
var inst_35288 = (state_35290[(2)]);
var state_35290__$1 = state_35290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35290__$1,inst_35288);
} else {
if((state_val_35291 === (2))){
var inst_35260 = (state_35290[(10)]);
var inst_35262 = cljs.core.count.call(null,inst_35260);
var inst_35263 = (inst_35262 > (0));
var state_35290__$1 = state_35290;
if(cljs.core.truth_(inst_35263)){
var statearr_35299_35317 = state_35290__$1;
(statearr_35299_35317[(1)] = (4));

} else {
var statearr_35300_35318 = state_35290__$1;
(statearr_35300_35318[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (11))){
var inst_35260 = (state_35290[(10)]);
var inst_35279 = (state_35290[(2)]);
var tmp35298 = inst_35260;
var inst_35260__$1 = tmp35298;
var state_35290__$1 = (function (){var statearr_35301 = state_35290;
(statearr_35301[(11)] = inst_35279);

(statearr_35301[(10)] = inst_35260__$1);

return statearr_35301;
})();
var statearr_35302_35319 = state_35290__$1;
(statearr_35302_35319[(2)] = null);

(statearr_35302_35319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (9))){
var inst_35270 = (state_35290[(7)]);
var state_35290__$1 = state_35290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35290__$1,(11),out,inst_35270);
} else {
if((state_val_35291 === (5))){
var inst_35284 = cljs.core.async.close_BANG_.call(null,out);
var state_35290__$1 = state_35290;
var statearr_35303_35320 = state_35290__$1;
(statearr_35303_35320[(2)] = inst_35284);

(statearr_35303_35320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (10))){
var inst_35282 = (state_35290[(2)]);
var state_35290__$1 = state_35290;
var statearr_35304_35321 = state_35290__$1;
(statearr_35304_35321[(2)] = inst_35282);

(statearr_35304_35321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (8))){
var inst_35270 = (state_35290[(7)]);
var inst_35260 = (state_35290[(10)]);
var inst_35271 = (state_35290[(9)]);
var inst_35269 = (state_35290[(8)]);
var inst_35274 = (function (){var cs = inst_35260;
var vec__35265 = inst_35269;
var v = inst_35270;
var c = inst_35271;
return ((function (cs,vec__35265,v,c,inst_35270,inst_35260,inst_35271,inst_35269,state_val_35291,c__33899__auto___35312,out){
return (function (p1__35256_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35256_SHARP_);
});
;})(cs,vec__35265,v,c,inst_35270,inst_35260,inst_35271,inst_35269,state_val_35291,c__33899__auto___35312,out))
})();
var inst_35275 = cljs.core.filterv.call(null,inst_35274,inst_35260);
var inst_35260__$1 = inst_35275;
var state_35290__$1 = (function (){var statearr_35305 = state_35290;
(statearr_35305[(10)] = inst_35260__$1);

return statearr_35305;
})();
var statearr_35306_35322 = state_35290__$1;
(statearr_35306_35322[(2)] = null);

(statearr_35306_35322[(1)] = (2));


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
});})(c__33899__auto___35312,out))
;
return ((function (switch__33809__auto__,c__33899__auto___35312,out){
return (function() {
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_35307 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35307[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_35307[(1)] = (1));

return statearr_35307;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_35290){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_35290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e35308){if((e35308 instanceof Object)){
var ex__33813__auto__ = e35308;
var statearr_35309_35323 = state_35290;
(statearr_35309_35323[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35324 = state_35290;
state_35290 = G__35324;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_35290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_35290);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___35312,out))
})();
var state__33901__auto__ = (function (){var statearr_35310 = f__33900__auto__.call(null);
(statearr_35310[(6)] = c__33899__auto___35312);

return statearr_35310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___35312,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35326 = arguments.length;
switch (G__35326) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33899__auto___35371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___35371,out){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___35371,out){
return (function (state_35350){
var state_val_35351 = (state_35350[(1)]);
if((state_val_35351 === (7))){
var inst_35332 = (state_35350[(7)]);
var inst_35332__$1 = (state_35350[(2)]);
var inst_35333 = (inst_35332__$1 == null);
var inst_35334 = cljs.core.not.call(null,inst_35333);
var state_35350__$1 = (function (){var statearr_35352 = state_35350;
(statearr_35352[(7)] = inst_35332__$1);

return statearr_35352;
})();
if(inst_35334){
var statearr_35353_35372 = state_35350__$1;
(statearr_35353_35372[(1)] = (8));

} else {
var statearr_35354_35373 = state_35350__$1;
(statearr_35354_35373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35351 === (1))){
var inst_35327 = (0);
var state_35350__$1 = (function (){var statearr_35355 = state_35350;
(statearr_35355[(8)] = inst_35327);

return statearr_35355;
})();
var statearr_35356_35374 = state_35350__$1;
(statearr_35356_35374[(2)] = null);

(statearr_35356_35374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35351 === (4))){
var state_35350__$1 = state_35350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35350__$1,(7),ch);
} else {
if((state_val_35351 === (6))){
var inst_35345 = (state_35350[(2)]);
var state_35350__$1 = state_35350;
var statearr_35357_35375 = state_35350__$1;
(statearr_35357_35375[(2)] = inst_35345);

(statearr_35357_35375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35351 === (3))){
var inst_35347 = (state_35350[(2)]);
var inst_35348 = cljs.core.async.close_BANG_.call(null,out);
var state_35350__$1 = (function (){var statearr_35358 = state_35350;
(statearr_35358[(9)] = inst_35347);

return statearr_35358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35350__$1,inst_35348);
} else {
if((state_val_35351 === (2))){
var inst_35327 = (state_35350[(8)]);
var inst_35329 = (inst_35327 < n);
var state_35350__$1 = state_35350;
if(cljs.core.truth_(inst_35329)){
var statearr_35359_35376 = state_35350__$1;
(statearr_35359_35376[(1)] = (4));

} else {
var statearr_35360_35377 = state_35350__$1;
(statearr_35360_35377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35351 === (11))){
var inst_35327 = (state_35350[(8)]);
var inst_35337 = (state_35350[(2)]);
var inst_35338 = (inst_35327 + (1));
var inst_35327__$1 = inst_35338;
var state_35350__$1 = (function (){var statearr_35361 = state_35350;
(statearr_35361[(10)] = inst_35337);

(statearr_35361[(8)] = inst_35327__$1);

return statearr_35361;
})();
var statearr_35362_35378 = state_35350__$1;
(statearr_35362_35378[(2)] = null);

(statearr_35362_35378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35351 === (9))){
var state_35350__$1 = state_35350;
var statearr_35363_35379 = state_35350__$1;
(statearr_35363_35379[(2)] = null);

(statearr_35363_35379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35351 === (5))){
var state_35350__$1 = state_35350;
var statearr_35364_35380 = state_35350__$1;
(statearr_35364_35380[(2)] = null);

(statearr_35364_35380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35351 === (10))){
var inst_35342 = (state_35350[(2)]);
var state_35350__$1 = state_35350;
var statearr_35365_35381 = state_35350__$1;
(statearr_35365_35381[(2)] = inst_35342);

(statearr_35365_35381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35351 === (8))){
var inst_35332 = (state_35350[(7)]);
var state_35350__$1 = state_35350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35350__$1,(11),out,inst_35332);
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
});})(c__33899__auto___35371,out))
;
return ((function (switch__33809__auto__,c__33899__auto___35371,out){
return (function() {
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_35366 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35366[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_35366[(1)] = (1));

return statearr_35366;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_35350){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_35350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e35367){if((e35367 instanceof Object)){
var ex__33813__auto__ = e35367;
var statearr_35368_35382 = state_35350;
(statearr_35368_35382[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35383 = state_35350;
state_35350 = G__35383;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_35350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_35350);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___35371,out))
})();
var state__33901__auto__ = (function (){var statearr_35369 = f__33900__auto__.call(null);
(statearr_35369[(6)] = c__33899__auto___35371);

return statearr_35369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___35371,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35385 = (function (f,ch,meta35386){
this.f = f;
this.ch = ch;
this.meta35386 = meta35386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35387,meta35386__$1){
var self__ = this;
var _35387__$1 = this;
return (new cljs.core.async.t_cljs$core$async35385(self__.f,self__.ch,meta35386__$1));
});

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35387){
var self__ = this;
var _35387__$1 = this;
return self__.meta35386;
});

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35388 = (function (f,ch,meta35386,_,fn1,meta35389){
this.f = f;
this.ch = ch;
this.meta35386 = meta35386;
this._ = _;
this.fn1 = fn1;
this.meta35389 = meta35389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35390,meta35389__$1){
var self__ = this;
var _35390__$1 = this;
return (new cljs.core.async.t_cljs$core$async35388(self__.f,self__.ch,self__.meta35386,self__._,self__.fn1,meta35389__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35390){
var self__ = this;
var _35390__$1 = this;
return self__.meta35389;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35388.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35388.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35384_SHARP_){
return f1.call(null,(((p1__35384_SHARP_ == null))?null:self__.f.call(null,p1__35384_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35388.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35386","meta35386",290031590,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35385","cljs.core.async/t_cljs$core$async35385",-85550119,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35389","meta35389",-1413361256,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35388";

cljs.core.async.t_cljs$core$async35388.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30888__auto__,writer__30889__auto__,opt__30890__auto__){
return cljs.core._write.call(null,writer__30889__auto__,"cljs.core.async/t_cljs$core$async35388");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35388 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35388(f__$1,ch__$1,meta35386__$1,___$2,fn1__$1,meta35389){
return (new cljs.core.async.t_cljs$core$async35388(f__$1,ch__$1,meta35386__$1,___$2,fn1__$1,meta35389));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35388(self__.f,self__.ch,self__.meta35386,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30205__auto__ = ret;
if(cljs.core.truth_(and__30205__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30205__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35386","meta35386",290031590,null)], null);
});

cljs.core.async.t_cljs$core$async35385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35385";

cljs.core.async.t_cljs$core$async35385.cljs$lang$ctorPrWriter = (function (this__30888__auto__,writer__30889__auto__,opt__30890__auto__){
return cljs.core._write.call(null,writer__30889__auto__,"cljs.core.async/t_cljs$core$async35385");
});

cljs.core.async.__GT_t_cljs$core$async35385 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35385(f__$1,ch__$1,meta35386){
return (new cljs.core.async.t_cljs$core$async35385(f__$1,ch__$1,meta35386));
});

}

return (new cljs.core.async.t_cljs$core$async35385(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35391 = (function (f,ch,meta35392){
this.f = f;
this.ch = ch;
this.meta35392 = meta35392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35393,meta35392__$1){
var self__ = this;
var _35393__$1 = this;
return (new cljs.core.async.t_cljs$core$async35391(self__.f,self__.ch,meta35392__$1));
});

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35393){
var self__ = this;
var _35393__$1 = this;
return self__.meta35392;
});

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35392","meta35392",-7469884,null)], null);
});

cljs.core.async.t_cljs$core$async35391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35391";

cljs.core.async.t_cljs$core$async35391.cljs$lang$ctorPrWriter = (function (this__30888__auto__,writer__30889__auto__,opt__30890__auto__){
return cljs.core._write.call(null,writer__30889__auto__,"cljs.core.async/t_cljs$core$async35391");
});

cljs.core.async.__GT_t_cljs$core$async35391 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35391(f__$1,ch__$1,meta35392){
return (new cljs.core.async.t_cljs$core$async35391(f__$1,ch__$1,meta35392));
});

}

return (new cljs.core.async.t_cljs$core$async35391(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35394 = (function (p,ch,meta35395){
this.p = p;
this.ch = ch;
this.meta35395 = meta35395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35396,meta35395__$1){
var self__ = this;
var _35396__$1 = this;
return (new cljs.core.async.t_cljs$core$async35394(self__.p,self__.ch,meta35395__$1));
});

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35396){
var self__ = this;
var _35396__$1 = this;
return self__.meta35395;
});

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35395","meta35395",-270882638,null)], null);
});

cljs.core.async.t_cljs$core$async35394.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35394";

cljs.core.async.t_cljs$core$async35394.cljs$lang$ctorPrWriter = (function (this__30888__auto__,writer__30889__auto__,opt__30890__auto__){
return cljs.core._write.call(null,writer__30889__auto__,"cljs.core.async/t_cljs$core$async35394");
});

cljs.core.async.__GT_t_cljs$core$async35394 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35394(p__$1,ch__$1,meta35395){
return (new cljs.core.async.t_cljs$core$async35394(p__$1,ch__$1,meta35395));
});

}

return (new cljs.core.async.t_cljs$core$async35394(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35398 = arguments.length;
switch (G__35398) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33899__auto___35438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___35438,out){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___35438,out){
return (function (state_35419){
var state_val_35420 = (state_35419[(1)]);
if((state_val_35420 === (7))){
var inst_35415 = (state_35419[(2)]);
var state_35419__$1 = state_35419;
var statearr_35421_35439 = state_35419__$1;
(statearr_35421_35439[(2)] = inst_35415);

(statearr_35421_35439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35420 === (1))){
var state_35419__$1 = state_35419;
var statearr_35422_35440 = state_35419__$1;
(statearr_35422_35440[(2)] = null);

(statearr_35422_35440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35420 === (4))){
var inst_35401 = (state_35419[(7)]);
var inst_35401__$1 = (state_35419[(2)]);
var inst_35402 = (inst_35401__$1 == null);
var state_35419__$1 = (function (){var statearr_35423 = state_35419;
(statearr_35423[(7)] = inst_35401__$1);

return statearr_35423;
})();
if(cljs.core.truth_(inst_35402)){
var statearr_35424_35441 = state_35419__$1;
(statearr_35424_35441[(1)] = (5));

} else {
var statearr_35425_35442 = state_35419__$1;
(statearr_35425_35442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35420 === (6))){
var inst_35401 = (state_35419[(7)]);
var inst_35406 = p.call(null,inst_35401);
var state_35419__$1 = state_35419;
if(cljs.core.truth_(inst_35406)){
var statearr_35426_35443 = state_35419__$1;
(statearr_35426_35443[(1)] = (8));

} else {
var statearr_35427_35444 = state_35419__$1;
(statearr_35427_35444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35420 === (3))){
var inst_35417 = (state_35419[(2)]);
var state_35419__$1 = state_35419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35419__$1,inst_35417);
} else {
if((state_val_35420 === (2))){
var state_35419__$1 = state_35419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35419__$1,(4),ch);
} else {
if((state_val_35420 === (11))){
var inst_35409 = (state_35419[(2)]);
var state_35419__$1 = state_35419;
var statearr_35428_35445 = state_35419__$1;
(statearr_35428_35445[(2)] = inst_35409);

(statearr_35428_35445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35420 === (9))){
var state_35419__$1 = state_35419;
var statearr_35429_35446 = state_35419__$1;
(statearr_35429_35446[(2)] = null);

(statearr_35429_35446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35420 === (5))){
var inst_35404 = cljs.core.async.close_BANG_.call(null,out);
var state_35419__$1 = state_35419;
var statearr_35430_35447 = state_35419__$1;
(statearr_35430_35447[(2)] = inst_35404);

(statearr_35430_35447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35420 === (10))){
var inst_35412 = (state_35419[(2)]);
var state_35419__$1 = (function (){var statearr_35431 = state_35419;
(statearr_35431[(8)] = inst_35412);

return statearr_35431;
})();
var statearr_35432_35448 = state_35419__$1;
(statearr_35432_35448[(2)] = null);

(statearr_35432_35448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35420 === (8))){
var inst_35401 = (state_35419[(7)]);
var state_35419__$1 = state_35419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35419__$1,(11),out,inst_35401);
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
});})(c__33899__auto___35438,out))
;
return ((function (switch__33809__auto__,c__33899__auto___35438,out){
return (function() {
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_35433 = [null,null,null,null,null,null,null,null,null];
(statearr_35433[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_35433[(1)] = (1));

return statearr_35433;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_35419){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_35419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e35434){if((e35434 instanceof Object)){
var ex__33813__auto__ = e35434;
var statearr_35435_35449 = state_35419;
(statearr_35435_35449[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35450 = state_35419;
state_35419 = G__35450;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_35419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_35419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___35438,out))
})();
var state__33901__auto__ = (function (){var statearr_35436 = f__33900__auto__.call(null);
(statearr_35436[(6)] = c__33899__auto___35438);

return statearr_35436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___35438,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35452 = arguments.length;
switch (G__35452) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__){
return (function (state_35515){
var state_val_35516 = (state_35515[(1)]);
if((state_val_35516 === (7))){
var inst_35511 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
var statearr_35517_35555 = state_35515__$1;
(statearr_35517_35555[(2)] = inst_35511);

(statearr_35517_35555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (20))){
var inst_35481 = (state_35515[(7)]);
var inst_35492 = (state_35515[(2)]);
var inst_35493 = cljs.core.next.call(null,inst_35481);
var inst_35467 = inst_35493;
var inst_35468 = null;
var inst_35469 = (0);
var inst_35470 = (0);
var state_35515__$1 = (function (){var statearr_35518 = state_35515;
(statearr_35518[(8)] = inst_35468);

(statearr_35518[(9)] = inst_35467);

(statearr_35518[(10)] = inst_35470);

(statearr_35518[(11)] = inst_35492);

(statearr_35518[(12)] = inst_35469);

return statearr_35518;
})();
var statearr_35519_35556 = state_35515__$1;
(statearr_35519_35556[(2)] = null);

(statearr_35519_35556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (1))){
var state_35515__$1 = state_35515;
var statearr_35520_35557 = state_35515__$1;
(statearr_35520_35557[(2)] = null);

(statearr_35520_35557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (4))){
var inst_35456 = (state_35515[(13)]);
var inst_35456__$1 = (state_35515[(2)]);
var inst_35457 = (inst_35456__$1 == null);
var state_35515__$1 = (function (){var statearr_35521 = state_35515;
(statearr_35521[(13)] = inst_35456__$1);

return statearr_35521;
})();
if(cljs.core.truth_(inst_35457)){
var statearr_35522_35558 = state_35515__$1;
(statearr_35522_35558[(1)] = (5));

} else {
var statearr_35523_35559 = state_35515__$1;
(statearr_35523_35559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (15))){
var state_35515__$1 = state_35515;
var statearr_35527_35560 = state_35515__$1;
(statearr_35527_35560[(2)] = null);

(statearr_35527_35560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (21))){
var state_35515__$1 = state_35515;
var statearr_35528_35561 = state_35515__$1;
(statearr_35528_35561[(2)] = null);

(statearr_35528_35561[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (13))){
var inst_35468 = (state_35515[(8)]);
var inst_35467 = (state_35515[(9)]);
var inst_35470 = (state_35515[(10)]);
var inst_35469 = (state_35515[(12)]);
var inst_35477 = (state_35515[(2)]);
var inst_35478 = (inst_35470 + (1));
var tmp35524 = inst_35468;
var tmp35525 = inst_35467;
var tmp35526 = inst_35469;
var inst_35467__$1 = tmp35525;
var inst_35468__$1 = tmp35524;
var inst_35469__$1 = tmp35526;
var inst_35470__$1 = inst_35478;
var state_35515__$1 = (function (){var statearr_35529 = state_35515;
(statearr_35529[(8)] = inst_35468__$1);

(statearr_35529[(9)] = inst_35467__$1);

(statearr_35529[(10)] = inst_35470__$1);

(statearr_35529[(12)] = inst_35469__$1);

(statearr_35529[(14)] = inst_35477);

return statearr_35529;
})();
var statearr_35530_35562 = state_35515__$1;
(statearr_35530_35562[(2)] = null);

(statearr_35530_35562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (22))){
var state_35515__$1 = state_35515;
var statearr_35531_35563 = state_35515__$1;
(statearr_35531_35563[(2)] = null);

(statearr_35531_35563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (6))){
var inst_35456 = (state_35515[(13)]);
var inst_35465 = f.call(null,inst_35456);
var inst_35466 = cljs.core.seq.call(null,inst_35465);
var inst_35467 = inst_35466;
var inst_35468 = null;
var inst_35469 = (0);
var inst_35470 = (0);
var state_35515__$1 = (function (){var statearr_35532 = state_35515;
(statearr_35532[(8)] = inst_35468);

(statearr_35532[(9)] = inst_35467);

(statearr_35532[(10)] = inst_35470);

(statearr_35532[(12)] = inst_35469);

return statearr_35532;
})();
var statearr_35533_35564 = state_35515__$1;
(statearr_35533_35564[(2)] = null);

(statearr_35533_35564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (17))){
var inst_35481 = (state_35515[(7)]);
var inst_35485 = cljs.core.chunk_first.call(null,inst_35481);
var inst_35486 = cljs.core.chunk_rest.call(null,inst_35481);
var inst_35487 = cljs.core.count.call(null,inst_35485);
var inst_35467 = inst_35486;
var inst_35468 = inst_35485;
var inst_35469 = inst_35487;
var inst_35470 = (0);
var state_35515__$1 = (function (){var statearr_35534 = state_35515;
(statearr_35534[(8)] = inst_35468);

(statearr_35534[(9)] = inst_35467);

(statearr_35534[(10)] = inst_35470);

(statearr_35534[(12)] = inst_35469);

return statearr_35534;
})();
var statearr_35535_35565 = state_35515__$1;
(statearr_35535_35565[(2)] = null);

(statearr_35535_35565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (3))){
var inst_35513 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35515__$1,inst_35513);
} else {
if((state_val_35516 === (12))){
var inst_35501 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
var statearr_35536_35566 = state_35515__$1;
(statearr_35536_35566[(2)] = inst_35501);

(statearr_35536_35566[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (2))){
var state_35515__$1 = state_35515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35515__$1,(4),in$);
} else {
if((state_val_35516 === (23))){
var inst_35509 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
var statearr_35537_35567 = state_35515__$1;
(statearr_35537_35567[(2)] = inst_35509);

(statearr_35537_35567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (19))){
var inst_35496 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
var statearr_35538_35568 = state_35515__$1;
(statearr_35538_35568[(2)] = inst_35496);

(statearr_35538_35568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (11))){
var inst_35467 = (state_35515[(9)]);
var inst_35481 = (state_35515[(7)]);
var inst_35481__$1 = cljs.core.seq.call(null,inst_35467);
var state_35515__$1 = (function (){var statearr_35539 = state_35515;
(statearr_35539[(7)] = inst_35481__$1);

return statearr_35539;
})();
if(inst_35481__$1){
var statearr_35540_35569 = state_35515__$1;
(statearr_35540_35569[(1)] = (14));

} else {
var statearr_35541_35570 = state_35515__$1;
(statearr_35541_35570[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (9))){
var inst_35503 = (state_35515[(2)]);
var inst_35504 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35515__$1 = (function (){var statearr_35542 = state_35515;
(statearr_35542[(15)] = inst_35503);

return statearr_35542;
})();
if(cljs.core.truth_(inst_35504)){
var statearr_35543_35571 = state_35515__$1;
(statearr_35543_35571[(1)] = (21));

} else {
var statearr_35544_35572 = state_35515__$1;
(statearr_35544_35572[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (5))){
var inst_35459 = cljs.core.async.close_BANG_.call(null,out);
var state_35515__$1 = state_35515;
var statearr_35545_35573 = state_35515__$1;
(statearr_35545_35573[(2)] = inst_35459);

(statearr_35545_35573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (14))){
var inst_35481 = (state_35515[(7)]);
var inst_35483 = cljs.core.chunked_seq_QMARK_.call(null,inst_35481);
var state_35515__$1 = state_35515;
if(inst_35483){
var statearr_35546_35574 = state_35515__$1;
(statearr_35546_35574[(1)] = (17));

} else {
var statearr_35547_35575 = state_35515__$1;
(statearr_35547_35575[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (16))){
var inst_35499 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
var statearr_35548_35576 = state_35515__$1;
(statearr_35548_35576[(2)] = inst_35499);

(statearr_35548_35576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (10))){
var inst_35468 = (state_35515[(8)]);
var inst_35470 = (state_35515[(10)]);
var inst_35475 = cljs.core._nth.call(null,inst_35468,inst_35470);
var state_35515__$1 = state_35515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35515__$1,(13),out,inst_35475);
} else {
if((state_val_35516 === (18))){
var inst_35481 = (state_35515[(7)]);
var inst_35490 = cljs.core.first.call(null,inst_35481);
var state_35515__$1 = state_35515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35515__$1,(20),out,inst_35490);
} else {
if((state_val_35516 === (8))){
var inst_35470 = (state_35515[(10)]);
var inst_35469 = (state_35515[(12)]);
var inst_35472 = (inst_35470 < inst_35469);
var inst_35473 = inst_35472;
var state_35515__$1 = state_35515;
if(cljs.core.truth_(inst_35473)){
var statearr_35549_35577 = state_35515__$1;
(statearr_35549_35577[(1)] = (10));

} else {
var statearr_35550_35578 = state_35515__$1;
(statearr_35550_35578[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__33810__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33810__auto____0 = (function (){
var statearr_35551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35551[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33810__auto__);

(statearr_35551[(1)] = (1));

return statearr_35551;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33810__auto____1 = (function (state_35515){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_35515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e35552){if((e35552 instanceof Object)){
var ex__33813__auto__ = e35552;
var statearr_35553_35579 = state_35515;
(statearr_35553_35579[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35580 = state_35515;
state_35515 = G__35580;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33810__auto__ = function(state_35515){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33810__auto____1.call(this,state_35515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33810__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33810__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__))
})();
var state__33901__auto__ = (function (){var statearr_35554 = f__33900__auto__.call(null);
(statearr_35554[(6)] = c__33899__auto__);

return statearr_35554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__))
);

return c__33899__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35582 = arguments.length;
switch (G__35582) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35585 = arguments.length;
switch (G__35585) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35588 = arguments.length;
switch (G__35588) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33899__auto___35635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___35635,out){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___35635,out){
return (function (state_35612){
var state_val_35613 = (state_35612[(1)]);
if((state_val_35613 === (7))){
var inst_35607 = (state_35612[(2)]);
var state_35612__$1 = state_35612;
var statearr_35614_35636 = state_35612__$1;
(statearr_35614_35636[(2)] = inst_35607);

(statearr_35614_35636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (1))){
var inst_35589 = null;
var state_35612__$1 = (function (){var statearr_35615 = state_35612;
(statearr_35615[(7)] = inst_35589);

return statearr_35615;
})();
var statearr_35616_35637 = state_35612__$1;
(statearr_35616_35637[(2)] = null);

(statearr_35616_35637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (4))){
var inst_35592 = (state_35612[(8)]);
var inst_35592__$1 = (state_35612[(2)]);
var inst_35593 = (inst_35592__$1 == null);
var inst_35594 = cljs.core.not.call(null,inst_35593);
var state_35612__$1 = (function (){var statearr_35617 = state_35612;
(statearr_35617[(8)] = inst_35592__$1);

return statearr_35617;
})();
if(inst_35594){
var statearr_35618_35638 = state_35612__$1;
(statearr_35618_35638[(1)] = (5));

} else {
var statearr_35619_35639 = state_35612__$1;
(statearr_35619_35639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (6))){
var state_35612__$1 = state_35612;
var statearr_35620_35640 = state_35612__$1;
(statearr_35620_35640[(2)] = null);

(statearr_35620_35640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (3))){
var inst_35609 = (state_35612[(2)]);
var inst_35610 = cljs.core.async.close_BANG_.call(null,out);
var state_35612__$1 = (function (){var statearr_35621 = state_35612;
(statearr_35621[(9)] = inst_35609);

return statearr_35621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35612__$1,inst_35610);
} else {
if((state_val_35613 === (2))){
var state_35612__$1 = state_35612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35612__$1,(4),ch);
} else {
if((state_val_35613 === (11))){
var inst_35592 = (state_35612[(8)]);
var inst_35601 = (state_35612[(2)]);
var inst_35589 = inst_35592;
var state_35612__$1 = (function (){var statearr_35622 = state_35612;
(statearr_35622[(7)] = inst_35589);

(statearr_35622[(10)] = inst_35601);

return statearr_35622;
})();
var statearr_35623_35641 = state_35612__$1;
(statearr_35623_35641[(2)] = null);

(statearr_35623_35641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (9))){
var inst_35592 = (state_35612[(8)]);
var state_35612__$1 = state_35612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35612__$1,(11),out,inst_35592);
} else {
if((state_val_35613 === (5))){
var inst_35592 = (state_35612[(8)]);
var inst_35589 = (state_35612[(7)]);
var inst_35596 = cljs.core._EQ_.call(null,inst_35592,inst_35589);
var state_35612__$1 = state_35612;
if(inst_35596){
var statearr_35625_35642 = state_35612__$1;
(statearr_35625_35642[(1)] = (8));

} else {
var statearr_35626_35643 = state_35612__$1;
(statearr_35626_35643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (10))){
var inst_35604 = (state_35612[(2)]);
var state_35612__$1 = state_35612;
var statearr_35627_35644 = state_35612__$1;
(statearr_35627_35644[(2)] = inst_35604);

(statearr_35627_35644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (8))){
var inst_35589 = (state_35612[(7)]);
var tmp35624 = inst_35589;
var inst_35589__$1 = tmp35624;
var state_35612__$1 = (function (){var statearr_35628 = state_35612;
(statearr_35628[(7)] = inst_35589__$1);

return statearr_35628;
})();
var statearr_35629_35645 = state_35612__$1;
(statearr_35629_35645[(2)] = null);

(statearr_35629_35645[(1)] = (2));


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
});})(c__33899__auto___35635,out))
;
return ((function (switch__33809__auto__,c__33899__auto___35635,out){
return (function() {
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_35630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35630[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_35630[(1)] = (1));

return statearr_35630;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_35612){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_35612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e35631){if((e35631 instanceof Object)){
var ex__33813__auto__ = e35631;
var statearr_35632_35646 = state_35612;
(statearr_35632_35646[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35647 = state_35612;
state_35612 = G__35647;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_35612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_35612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___35635,out))
})();
var state__33901__auto__ = (function (){var statearr_35633 = f__33900__auto__.call(null);
(statearr_35633[(6)] = c__33899__auto___35635);

return statearr_35633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___35635,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35649 = arguments.length;
switch (G__35649) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33899__auto___35715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___35715,out){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___35715,out){
return (function (state_35687){
var state_val_35688 = (state_35687[(1)]);
if((state_val_35688 === (7))){
var inst_35683 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35689_35716 = state_35687__$1;
(statearr_35689_35716[(2)] = inst_35683);

(statearr_35689_35716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (1))){
var inst_35650 = (new Array(n));
var inst_35651 = inst_35650;
var inst_35652 = (0);
var state_35687__$1 = (function (){var statearr_35690 = state_35687;
(statearr_35690[(7)] = inst_35652);

(statearr_35690[(8)] = inst_35651);

return statearr_35690;
})();
var statearr_35691_35717 = state_35687__$1;
(statearr_35691_35717[(2)] = null);

(statearr_35691_35717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (4))){
var inst_35655 = (state_35687[(9)]);
var inst_35655__$1 = (state_35687[(2)]);
var inst_35656 = (inst_35655__$1 == null);
var inst_35657 = cljs.core.not.call(null,inst_35656);
var state_35687__$1 = (function (){var statearr_35692 = state_35687;
(statearr_35692[(9)] = inst_35655__$1);

return statearr_35692;
})();
if(inst_35657){
var statearr_35693_35718 = state_35687__$1;
(statearr_35693_35718[(1)] = (5));

} else {
var statearr_35694_35719 = state_35687__$1;
(statearr_35694_35719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (15))){
var inst_35677 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35695_35720 = state_35687__$1;
(statearr_35695_35720[(2)] = inst_35677);

(statearr_35695_35720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (13))){
var state_35687__$1 = state_35687;
var statearr_35696_35721 = state_35687__$1;
(statearr_35696_35721[(2)] = null);

(statearr_35696_35721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (6))){
var inst_35652 = (state_35687[(7)]);
var inst_35673 = (inst_35652 > (0));
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35673)){
var statearr_35697_35722 = state_35687__$1;
(statearr_35697_35722[(1)] = (12));

} else {
var statearr_35698_35723 = state_35687__$1;
(statearr_35698_35723[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (3))){
var inst_35685 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35687__$1,inst_35685);
} else {
if((state_val_35688 === (12))){
var inst_35651 = (state_35687[(8)]);
var inst_35675 = cljs.core.vec.call(null,inst_35651);
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35687__$1,(15),out,inst_35675);
} else {
if((state_val_35688 === (2))){
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35687__$1,(4),ch);
} else {
if((state_val_35688 === (11))){
var inst_35667 = (state_35687[(2)]);
var inst_35668 = (new Array(n));
var inst_35651 = inst_35668;
var inst_35652 = (0);
var state_35687__$1 = (function (){var statearr_35699 = state_35687;
(statearr_35699[(10)] = inst_35667);

(statearr_35699[(7)] = inst_35652);

(statearr_35699[(8)] = inst_35651);

return statearr_35699;
})();
var statearr_35700_35724 = state_35687__$1;
(statearr_35700_35724[(2)] = null);

(statearr_35700_35724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (9))){
var inst_35651 = (state_35687[(8)]);
var inst_35665 = cljs.core.vec.call(null,inst_35651);
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35687__$1,(11),out,inst_35665);
} else {
if((state_val_35688 === (5))){
var inst_35660 = (state_35687[(11)]);
var inst_35652 = (state_35687[(7)]);
var inst_35655 = (state_35687[(9)]);
var inst_35651 = (state_35687[(8)]);
var inst_35659 = (inst_35651[inst_35652] = inst_35655);
var inst_35660__$1 = (inst_35652 + (1));
var inst_35661 = (inst_35660__$1 < n);
var state_35687__$1 = (function (){var statearr_35701 = state_35687;
(statearr_35701[(12)] = inst_35659);

(statearr_35701[(11)] = inst_35660__$1);

return statearr_35701;
})();
if(cljs.core.truth_(inst_35661)){
var statearr_35702_35725 = state_35687__$1;
(statearr_35702_35725[(1)] = (8));

} else {
var statearr_35703_35726 = state_35687__$1;
(statearr_35703_35726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (14))){
var inst_35680 = (state_35687[(2)]);
var inst_35681 = cljs.core.async.close_BANG_.call(null,out);
var state_35687__$1 = (function (){var statearr_35705 = state_35687;
(statearr_35705[(13)] = inst_35680);

return statearr_35705;
})();
var statearr_35706_35727 = state_35687__$1;
(statearr_35706_35727[(2)] = inst_35681);

(statearr_35706_35727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (10))){
var inst_35671 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35707_35728 = state_35687__$1;
(statearr_35707_35728[(2)] = inst_35671);

(statearr_35707_35728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (8))){
var inst_35660 = (state_35687[(11)]);
var inst_35651 = (state_35687[(8)]);
var tmp35704 = inst_35651;
var inst_35651__$1 = tmp35704;
var inst_35652 = inst_35660;
var state_35687__$1 = (function (){var statearr_35708 = state_35687;
(statearr_35708[(7)] = inst_35652);

(statearr_35708[(8)] = inst_35651__$1);

return statearr_35708;
})();
var statearr_35709_35729 = state_35687__$1;
(statearr_35709_35729[(2)] = null);

(statearr_35709_35729[(1)] = (2));


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
});})(c__33899__auto___35715,out))
;
return ((function (switch__33809__auto__,c__33899__auto___35715,out){
return (function() {
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_35710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35710[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_35710[(1)] = (1));

return statearr_35710;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_35687){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_35687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e35711){if((e35711 instanceof Object)){
var ex__33813__auto__ = e35711;
var statearr_35712_35730 = state_35687;
(statearr_35712_35730[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35731 = state_35687;
state_35687 = G__35731;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_35687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_35687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___35715,out))
})();
var state__33901__auto__ = (function (){var statearr_35713 = f__33900__auto__.call(null);
(statearr_35713[(6)] = c__33899__auto___35715);

return statearr_35713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___35715,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35733 = arguments.length;
switch (G__35733) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33899__auto___35803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___35803,out){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___35803,out){
return (function (state_35775){
var state_val_35776 = (state_35775[(1)]);
if((state_val_35776 === (7))){
var inst_35771 = (state_35775[(2)]);
var state_35775__$1 = state_35775;
var statearr_35777_35804 = state_35775__$1;
(statearr_35777_35804[(2)] = inst_35771);

(statearr_35777_35804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35776 === (1))){
var inst_35734 = [];
var inst_35735 = inst_35734;
var inst_35736 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35775__$1 = (function (){var statearr_35778 = state_35775;
(statearr_35778[(7)] = inst_35735);

(statearr_35778[(8)] = inst_35736);

return statearr_35778;
})();
var statearr_35779_35805 = state_35775__$1;
(statearr_35779_35805[(2)] = null);

(statearr_35779_35805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35776 === (4))){
var inst_35739 = (state_35775[(9)]);
var inst_35739__$1 = (state_35775[(2)]);
var inst_35740 = (inst_35739__$1 == null);
var inst_35741 = cljs.core.not.call(null,inst_35740);
var state_35775__$1 = (function (){var statearr_35780 = state_35775;
(statearr_35780[(9)] = inst_35739__$1);

return statearr_35780;
})();
if(inst_35741){
var statearr_35781_35806 = state_35775__$1;
(statearr_35781_35806[(1)] = (5));

} else {
var statearr_35782_35807 = state_35775__$1;
(statearr_35782_35807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35776 === (15))){
var inst_35765 = (state_35775[(2)]);
var state_35775__$1 = state_35775;
var statearr_35783_35808 = state_35775__$1;
(statearr_35783_35808[(2)] = inst_35765);

(statearr_35783_35808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35776 === (13))){
var state_35775__$1 = state_35775;
var statearr_35784_35809 = state_35775__$1;
(statearr_35784_35809[(2)] = null);

(statearr_35784_35809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35776 === (6))){
var inst_35735 = (state_35775[(7)]);
var inst_35760 = inst_35735.length;
var inst_35761 = (inst_35760 > (0));
var state_35775__$1 = state_35775;
if(cljs.core.truth_(inst_35761)){
var statearr_35785_35810 = state_35775__$1;
(statearr_35785_35810[(1)] = (12));

} else {
var statearr_35786_35811 = state_35775__$1;
(statearr_35786_35811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35776 === (3))){
var inst_35773 = (state_35775[(2)]);
var state_35775__$1 = state_35775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35775__$1,inst_35773);
} else {
if((state_val_35776 === (12))){
var inst_35735 = (state_35775[(7)]);
var inst_35763 = cljs.core.vec.call(null,inst_35735);
var state_35775__$1 = state_35775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35775__$1,(15),out,inst_35763);
} else {
if((state_val_35776 === (2))){
var state_35775__$1 = state_35775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35775__$1,(4),ch);
} else {
if((state_val_35776 === (11))){
var inst_35743 = (state_35775[(10)]);
var inst_35739 = (state_35775[(9)]);
var inst_35753 = (state_35775[(2)]);
var inst_35754 = [];
var inst_35755 = inst_35754.push(inst_35739);
var inst_35735 = inst_35754;
var inst_35736 = inst_35743;
var state_35775__$1 = (function (){var statearr_35787 = state_35775;
(statearr_35787[(7)] = inst_35735);

(statearr_35787[(11)] = inst_35753);

(statearr_35787[(8)] = inst_35736);

(statearr_35787[(12)] = inst_35755);

return statearr_35787;
})();
var statearr_35788_35812 = state_35775__$1;
(statearr_35788_35812[(2)] = null);

(statearr_35788_35812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35776 === (9))){
var inst_35735 = (state_35775[(7)]);
var inst_35751 = cljs.core.vec.call(null,inst_35735);
var state_35775__$1 = state_35775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35775__$1,(11),out,inst_35751);
} else {
if((state_val_35776 === (5))){
var inst_35743 = (state_35775[(10)]);
var inst_35739 = (state_35775[(9)]);
var inst_35736 = (state_35775[(8)]);
var inst_35743__$1 = f.call(null,inst_35739);
var inst_35744 = cljs.core._EQ_.call(null,inst_35743__$1,inst_35736);
var inst_35745 = cljs.core.keyword_identical_QMARK_.call(null,inst_35736,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35746 = (inst_35744) || (inst_35745);
var state_35775__$1 = (function (){var statearr_35789 = state_35775;
(statearr_35789[(10)] = inst_35743__$1);

return statearr_35789;
})();
if(cljs.core.truth_(inst_35746)){
var statearr_35790_35813 = state_35775__$1;
(statearr_35790_35813[(1)] = (8));

} else {
var statearr_35791_35814 = state_35775__$1;
(statearr_35791_35814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35776 === (14))){
var inst_35768 = (state_35775[(2)]);
var inst_35769 = cljs.core.async.close_BANG_.call(null,out);
var state_35775__$1 = (function (){var statearr_35793 = state_35775;
(statearr_35793[(13)] = inst_35768);

return statearr_35793;
})();
var statearr_35794_35815 = state_35775__$1;
(statearr_35794_35815[(2)] = inst_35769);

(statearr_35794_35815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35776 === (10))){
var inst_35758 = (state_35775[(2)]);
var state_35775__$1 = state_35775;
var statearr_35795_35816 = state_35775__$1;
(statearr_35795_35816[(2)] = inst_35758);

(statearr_35795_35816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35776 === (8))){
var inst_35735 = (state_35775[(7)]);
var inst_35743 = (state_35775[(10)]);
var inst_35739 = (state_35775[(9)]);
var inst_35748 = inst_35735.push(inst_35739);
var tmp35792 = inst_35735;
var inst_35735__$1 = tmp35792;
var inst_35736 = inst_35743;
var state_35775__$1 = (function (){var statearr_35796 = state_35775;
(statearr_35796[(7)] = inst_35735__$1);

(statearr_35796[(8)] = inst_35736);

(statearr_35796[(14)] = inst_35748);

return statearr_35796;
})();
var statearr_35797_35817 = state_35775__$1;
(statearr_35797_35817[(2)] = null);

(statearr_35797_35817[(1)] = (2));


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
});})(c__33899__auto___35803,out))
;
return ((function (switch__33809__auto__,c__33899__auto___35803,out){
return (function() {
var cljs$core$async$state_machine__33810__auto__ = null;
var cljs$core$async$state_machine__33810__auto____0 = (function (){
var statearr_35798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35798[(0)] = cljs$core$async$state_machine__33810__auto__);

(statearr_35798[(1)] = (1));

return statearr_35798;
});
var cljs$core$async$state_machine__33810__auto____1 = (function (state_35775){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_35775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e35799){if((e35799 instanceof Object)){
var ex__33813__auto__ = e35799;
var statearr_35800_35818 = state_35775;
(statearr_35800_35818[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35819 = state_35775;
state_35775 = G__35819;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
cljs$core$async$state_machine__33810__auto__ = function(state_35775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33810__auto____1.call(this,state_35775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33810__auto____0;
cljs$core$async$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33810__auto____1;
return cljs$core$async$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___35803,out))
})();
var state__33901__auto__ = (function (){var statearr_35801 = f__33900__auto__.call(null);
(statearr_35801[(6)] = c__33899__auto___35803);

return statearr_35801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___35803,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515669749699
