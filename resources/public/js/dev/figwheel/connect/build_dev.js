// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('dataloader_example.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__45956__delegate = function (x){
if(cljs.core.truth_(dataloader_example.core.reload)){
return cljs.core.apply.call(null,dataloader_example.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'dataloader-example.core/reload' is missing");
}
};
var G__45956 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__45957__i = 0, G__45957__a = new Array(arguments.length -  0);
while (G__45957__i < G__45957__a.length) {G__45957__a[G__45957__i] = arguments[G__45957__i + 0]; ++G__45957__i;}
  x = new cljs.core.IndexedSeq(G__45957__a,0,null);
} 
return G__45956__delegate.call(this,x);};
G__45956.cljs$lang$maxFixedArity = 0;
G__45956.cljs$lang$applyTo = (function (arglist__45958){
var x = cljs.core.seq(arglist__45958);
return G__45956__delegate(x);
});
G__45956.cljs$core$IFn$_invoke$arity$variadic = G__45956__delegate;
return G__45956;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1515670602405
