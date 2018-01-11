// Compiled by ClojureScript 1.9.946 {}
goog.provide('keechma.ui_component');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.stuartsierra.dependency');
goog.require('keechma.util');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('keechma.reporter');
keechma.ui_component.make_ex = (function keechma$ui_component$make_ex(msg){
return cljs.core.ex_info.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("keechma.ui-component","error","keechma.ui-component/error",48836802)], null));
});

/**
 * IUIComponent protocol defines functions that can be called on
 *   the UIComponent records.
 * @interface
 */
keechma.ui_component.IUIComponent = function(){};

/**
 * Returns a URL based on the params. It will use the `:url-fn` that is injected
 *  from the outside to generate the URL based on the current app routes.
 */
keechma.ui_component.url = (function keechma$ui_component$url(this$,params){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$url$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$url$arity$2(this$,params);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.url[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,params);
} else {
var m__30951__auto____$1 = (keechma.ui_component.url["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.url",this$);
}
}
}
});

keechma.ui_component.report = (function keechma$ui_component$report(var_args){
var G__37791 = arguments.length;
switch (G__37791) {
case 3:
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.ui_component.report.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,payload){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$report$arity$3 == null)))){
return this$.keechma$ui_component$IUIComponent$report$arity$3(this$,name,payload);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.report[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,name,payload);
} else {
var m__30951__auto____$1 = (keechma.ui_component.report["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,name,payload);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.report",this$);
}
}
}
});

keechma.ui_component.report.cljs$core$IFn$_invoke$arity$4 = (function (this$,name,payload,path){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$report$arity$4 == null)))){
return this$.keechma$ui_component$IUIComponent$report$arity$4(this$,name,payload,path);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.report[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,name,payload,path);
} else {
var m__30951__auto____$1 = (keechma.ui_component.report["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,name,payload,path);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.report",this$);
}
}
}
});

keechma.ui_component.report.cljs$core$IFn$_invoke$arity$5 = (function (this$,name,payload,path,severity){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$report$arity$5 == null)))){
return this$.keechma$ui_component$IUIComponent$report$arity$5(this$,name,payload,path,severity);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.report[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,name,payload,path,severity);
} else {
var m__30951__auto____$1 = (keechma.ui_component.report["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,name,payload,path,severity);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.report",this$);
}
}
}
});

keechma.ui_component.report.cljs$lang$maxFixedArity = 5;


/**
 * Redirects page to the URL generated from params
 */
keechma.ui_component.redirect = (function keechma$ui_component$redirect(this$,params){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$redirect$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$redirect$arity$2(this$,params);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.redirect[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,params);
} else {
var m__30951__auto____$1 = (keechma.ui_component.redirect["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.redirect",this$);
}
}
}
});

/**
 * Returns a subscription based on the key.
 */
keechma.ui_component.subscription = (function keechma$ui_component$subscription(var_args){
var G__37793 = arguments.length;
switch (G__37793) {
case 2:
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$2 = (function (this$,key){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$subscription$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$subscription$arity$2(this$,key);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.subscription[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,key);
} else {
var m__30951__auto____$1 = (keechma.ui_component.subscription["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.subscription",this$);
}
}
}
});

keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3 = (function (this$,key,args){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$subscription$arity$3 == null)))){
return this$.keechma$ui_component$IUIComponent$subscription$arity$3(this$,key,args);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.subscription[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,key,args);
} else {
var m__30951__auto____$1 = (keechma.ui_component.subscription["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,key,args);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.subscription",this$);
}
}
}
});

keechma.ui_component.subscription.cljs$lang$maxFixedArity = 3;


/**
 * Returns a component based on the key.
 */
keechma.ui_component.component = (function keechma$ui_component$component(this$,key){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$component$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$component$arity$2(this$,key);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.component[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,key);
} else {
var m__30951__auto____$1 = (keechma.ui_component.component["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.component",this$);
}
}
}
});

/**
 * Sends a command to the controller.
 */
keechma.ui_component.send_command = (function keechma$ui_component$send_command(var_args){
var G__37795 = arguments.length;
switch (G__37795) {
case 2:
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$2 = (function (this$,command){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$send_command$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$send_command$arity$2(this$,command);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.send_command[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,command);
} else {
var m__30951__auto____$1 = (keechma.ui_component.send_command["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,command);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.send-command",this$);
}
}
}
});

keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3 = (function (this$,command,args){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$send_command$arity$3 == null)))){
return this$.keechma$ui_component$IUIComponent$send_command$arity$3(this$,command,args);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.send_command[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$,command,args);
} else {
var m__30951__auto____$1 = (keechma.ui_component.send_command["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$,command,args);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.send-command",this$);
}
}
}
});

keechma.ui_component.send_command.cljs$lang$maxFixedArity = 3;


/**
 * Returns a component renderer function that has the component record
 *  partially applied (`ctx`) as the first argument.
 */
keechma.ui_component.renderer = (function keechma$ui_component$renderer(this$){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$renderer$arity$1 == null)))){
return this$.keechma$ui_component$IUIComponent$renderer$arity$1(this$);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.renderer[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$);
} else {
var m__30951__auto____$1 = (keechma.ui_component.renderer["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.renderer",this$);
}
}
}
});

/**
 * Returns a current route data. It will use the `:current-route-fn` that is
 *  injected from the outside to return the data.
 */
keechma.ui_component.current_route = (function keechma$ui_component$current_route(this$){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$current_route$arity$1 == null)))){
return this$.keechma$ui_component$IUIComponent$current_route$arity$1(this$);
} else {
var x__30950__auto__ = (((this$ == null))?null:this$);
var m__30951__auto__ = (keechma.ui_component.current_route[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,this$);
} else {
var m__30951__auto____$1 = (keechma.ui_component.current_route["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.current-route",this$);
}
}
}
});

goog.object.set(keechma.ui_component.IUIComponent,"_",true);

goog.object.set(keechma.ui_component.url,"_",(function (this$,params){
var url_fn = new cljs.core.Keyword(null,"url-fn","url-fn",1228268268).cljs$core$IFn$_invoke$arity$1(this$);
return url_fn.call(null,params);
}));

goog.object.set(keechma.ui_component.report,"_",(function() {
var G__37799 = null;
var G__37799__3 = (function (this$,name,payload){
return keechma.ui_component.report.call(null,this$,name,payload,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__37799__4 = (function (this$,name,payload,cmd_info){
return keechma.ui_component.report.call(null,this$,name,payload,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__37799__5 = (function (this$,name,payload,cmd_info,severity){
var reporter = (function (){var or__30217__auto__ = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(this$);
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
return reporter.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(this$),name], null),payload,cmd_info,severity);
});
G__37799 = function(this$,name,payload,cmd_info,severity){
switch(arguments.length){
case 3:
return G__37799__3.call(this,this$,name,payload);
case 4:
return G__37799__4.call(this,this$,name,payload,cmd_info);
case 5:
return G__37799__5.call(this,this$,name,payload,cmd_info,severity);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37799.cljs$core$IFn$_invoke$arity$3 = G__37799__3;
G__37799.cljs$core$IFn$_invoke$arity$4 = G__37799__4;
G__37799.cljs$core$IFn$_invoke$arity$5 = G__37799__5;
return G__37799;
})()
);

goog.object.set(keechma.ui_component.redirect,"_",(function (this$,params){
return new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973).cljs$core$IFn$_invoke$arity$1(this$).call(null,params);
}));

goog.object.set(keechma.ui_component.current_route,"_",(function (this$){
var current_route_fn = new cljs.core.Keyword(null,"current-route-fn","current-route-fn",787729302).cljs$core$IFn$_invoke$arity$1(this$);
return current_route_fn.call(null);
}));

goog.object.set(keechma.ui_component.subscription,"_",(function() {
var G__37800 = null;
var G__37800__2 = (function (this$,key){
return keechma.ui_component.subscription.call(null,this$,key,cljs.core.PersistentVector.EMPTY);
});
var G__37800__3 = (function (this$,key,args){
var subscription = cljs.core.get_in.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),key], null));
if((subscription == null)){
throw keechma.ui_component.make_ex.call(null,["Can't resolve the subscription with key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''));
} else {
return cljs.core.apply.call(null,subscription,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(this$)], null),args));
}
});
G__37800 = function(this$,key,args){
switch(arguments.length){
case 2:
return G__37800__2.call(this,this$,key);
case 3:
return G__37800__3.call(this,this$,key,args);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37800.cljs$core$IFn$_invoke$arity$2 = G__37800__2;
G__37800.cljs$core$IFn$_invoke$arity$3 = G__37800__3;
return G__37800;
})()
);

goog.object.set(keechma.ui_component.component,"_",(function (this$,key){
var component = cljs.core.get_in.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),key], null));
if((component == null)){
throw keechma.ui_component.make_ex.call(null,["Can't resolve the component with key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''));
} else {
return component;
}
}));

goog.object.set(keechma.ui_component.send_command,"_",(function() {
var G__37801 = null;
var G__37801__2 = (function (this$,command){
return keechma.ui_component.send_command.call(null,this$,command,null);
});
var G__37801__3 = (function (this$,command,args){
var cmd_info = keechma.reporter.cmd_info.call(null);
keechma.ui_component.report.call(null,this$,command,args,cmd_info);

if(cljs.core.vector_QMARK_.call(null,command)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command,args,cmd_info], null));
} else {
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(this$),command], null),args,cmd_info], null));
}

return null;
});
G__37801 = function(this$,command,args){
switch(arguments.length){
case 2:
return G__37801__2.call(this,this$,command);
case 3:
return G__37801__3.call(this,this$,command,args);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37801.cljs$core$IFn$_invoke$arity$2 = G__37801__2;
G__37801.cljs$core$IFn$_invoke$arity$3 = G__37801__3;
return G__37801;
})()
);

goog.object.set(keechma.ui_component.renderer,"_",(function (this$){
var child_renderers = cljs.core.reduce_kv.call(null,(function (c,k,v){
return cljs.core.assoc.call(null,c,k,keechma.ui_component.component__GT_renderer.call(null,this$,v));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(this$));
var renderer_context = cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"components","components",-1073188942),child_renderers);
return cljs.core.with_meta.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(this$),renderer_context),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword("keechma.ui-component","renderer","keechma.ui-component/renderer",1430319673),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword("keechma.ui-component","context","keechma.ui-component/context",-1874109659),renderer_context], null));
}));

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
 * @implements {keechma.ui_component.IUIComponent}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.ui_component.UIComponent = (function (component_deps,subscription_deps,renderer,__meta,__extmap,__hash){
this.component_deps = component_deps;
this.subscription_deps = subscription_deps;
this.renderer = renderer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.ui_component.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30905__auto__,k__30906__auto__){
var self__ = this;
var this__30905__auto____$1 = this;
return this__30905__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30906__auto__,null);
});

keechma.ui_component.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30907__auto__,k37803,else__30908__auto__){
var self__ = this;
var this__30907__auto____$1 = this;
var G__37807 = k37803;
var G__37807__$1 = (((G__37807 instanceof cljs.core.Keyword))?G__37807.fqn:null);
switch (G__37807__$1) {
case "component-deps":
return self__.component_deps;

break;
case "subscription-deps":
return self__.subscription_deps;

break;
case "renderer":
return self__.renderer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37803,else__30908__auto__);

}
});

keechma.ui_component.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30919__auto__,writer__30920__auto__,opts__30921__auto__){
var self__ = this;
var this__30919__auto____$1 = this;
var pr_pair__30922__auto__ = ((function (this__30919__auto____$1){
return (function (keyval__30923__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,cljs.core.pr_writer,""," ","",opts__30921__auto__,keyval__30923__auto__);
});})(this__30919__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30920__auto__,pr_pair__30922__auto__,"#keechma.ui-component.UIComponent{",", ","}",opts__30921__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),self__.component_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),self__.subscription_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null))], null),self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37802){
var self__ = this;
var G__37802__$1 = this;
return (new cljs.core.RecordIter((0),G__37802__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.Keyword(null,"renderer","renderer",336841071)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30903__auto__){
var self__ = this;
var this__30903__auto____$1 = this;
return self__.__meta;
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30900__auto__){
var self__ = this;
var this__30900__auto____$1 = this;
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30909__auto__){
var self__ = this;
var this__30909__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30901__auto__){
var self__ = this;
var this__30901__auto____$1 = this;
var h__30673__auto__ = self__.__hash;
if(!((h__30673__auto__ == null))){
return h__30673__auto__;
} else {
var h__30673__auto____$1 = ((function (h__30673__auto__,this__30901__auto____$1){
return (function (coll__30902__auto__){
return (1621572408 ^ cljs.core.hash_unordered_coll.call(null,coll__30902__auto__));
});})(h__30673__auto__,this__30901__auto____$1))
.call(null,this__30901__auto____$1);
self__.__hash = h__30673__auto____$1;

return h__30673__auto____$1;
}
});

keechma.ui_component.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37804,other37805){
var self__ = this;
var this37804__$1 = this;
return (!((other37805 == null))) && ((this37804__$1.constructor === other37805.constructor)) && (cljs.core._EQ_.call(null,this37804__$1.component_deps,other37805.component_deps)) && (cljs.core._EQ_.call(null,this37804__$1.subscription_deps,other37805.subscription_deps)) && (cljs.core._EQ_.call(null,this37804__$1.renderer,other37805.renderer)) && (cljs.core._EQ_.call(null,this37804__$1.__extmap,other37805.__extmap));
});

keechma.ui_component.UIComponent.prototype.keechma$ui_component$IUIComponent$ = cljs.core.PROTOCOL_SENTINEL;

keechma.ui_component.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30914__auto__,k__30915__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),null], null), null),k__30915__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30914__auto____$1),self__.__meta),k__30915__auto__);
} else {
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30915__auto__)),null));
}
});

keechma.ui_component.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30912__auto__,k__30913__auto__,G__37802){
var self__ = this;
var this__30912__auto____$1 = this;
var pred__37808 = cljs.core.keyword_identical_QMARK_;
var expr__37809 = k__30913__auto__;
if(cljs.core.truth_(pred__37808.call(null,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),expr__37809))){
return (new keechma.ui_component.UIComponent(G__37802,self__.subscription_deps,self__.renderer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37808.call(null,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),expr__37809))){
return (new keechma.ui_component.UIComponent(self__.component_deps,G__37802,self__.renderer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37808.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__37809))){
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,G__37802,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30913__auto__,G__37802),null));
}
}
}
});

keechma.ui_component.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30917__auto__){
var self__ = this;
var this__30917__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),self__.component_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),self__.subscription_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null))], null),self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30904__auto__,G__37802){
var self__ = this;
var this__30904__auto____$1 = this;
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,G__37802,self__.__extmap,self__.__hash));
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30910__auto__,entry__30911__auto__){
var self__ = this;
var this__30910__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30911__auto__)){
return this__30910__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30911__auto__,(0)),cljs.core._nth.call(null,entry__30911__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30910__auto____$1,entry__30911__auto__);
}
});

keechma.ui_component.UIComponent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-deps","component-deps",1234815365,null),new cljs.core.Symbol(null,"subscription-deps","subscription-deps",-856403448,null),new cljs.core.Symbol(null,"renderer","renderer",1977372598,null)], null);
});

keechma.ui_component.UIComponent.cljs$lang$type = true;

keechma.ui_component.UIComponent.cljs$lang$ctorPrSeq = (function (this__30943__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.ui-component/UIComponent");
});

keechma.ui_component.UIComponent.cljs$lang$ctorPrWriter = (function (this__30943__auto__,writer__30944__auto__){
return cljs.core._write.call(null,writer__30944__auto__,"keechma.ui-component/UIComponent");
});

keechma.ui_component.__GT_UIComponent = (function keechma$ui_component$__GT_UIComponent(component_deps,subscription_deps,renderer){
return (new keechma.ui_component.UIComponent(component_deps,subscription_deps,renderer,null,null,null));
});

keechma.ui_component.map__GT_UIComponent = (function keechma$ui_component$map__GT_UIComponent(G__37806){
return (new keechma.ui_component.UIComponent(new cljs.core.Keyword(null,"component-deps","component-deps",-405716162).cljs$core$IFn$_invoke$arity$1(G__37806),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321).cljs$core$IFn$_invoke$arity$1(G__37806),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__37806),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__37806,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.Keyword(null,"renderer","renderer",336841071))),null));
});

keechma.ui_component.component_dep_graph = (function keechma$ui_component$component_dep_graph(components){
return cljs.core.reduce_kv.call(null,(function (graph,k,v){
if(!(cljs.core.fn_QMARK_.call(null,v))){
var component_deps = new cljs.core.Keyword(null,"component-deps","component-deps",-405716162).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(keechma.util.in_QMARK_.call(null,component_deps,new cljs.core.Keyword(null,"main","main",-2117802661)))){
throw keechma.ui_component.make_ex.call(null,"Nothing can depend on the :main component!");
} else {
return cljs.core.reduce.call(null,((function (component_deps){
return (function (p1__37812_SHARP_,p2__37813_SHARP_){
return com.stuartsierra.dependency.depend.call(null,p1__37812_SHARP_,k,p2__37813_SHARP_);
});})(component_deps))
,graph,component_deps);
}
} else {
return graph;
}
}),com.stuartsierra.dependency.graph.call(null),components);
});
keechma.ui_component.missing_component_deps = (function keechma$ui_component$missing_component_deps(components){
return cljs.core.reduce_kv.call(null,(function (missing,k,v){
if((v == null)){
return cljs.core.conj.call(null,missing,k);
} else {
return missing;
}
}),cljs.core.PersistentVector.EMPTY,components);
});
keechma.ui_component.component_with_deps = (function keechma$ui_component$component_with_deps(component_key,component,system){
var dep_keys = new cljs.core.Keyword(null,"component-deps","component-deps",-405716162).cljs$core$IFn$_invoke$arity$1(component);
if(!(cljs.core.empty_QMARK_.call(null,dep_keys))){
var components = cljs.core.select_keys.call(null,system,dep_keys);
var missing_deps = keechma.ui_component.missing_component_deps.call(null,components);
if(!(cljs.core.empty_QMARK_.call(null,missing_deps))){
throw keechma.ui_component.make_ex.call(null,["Missing dependencies ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",missing_deps))," for component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_key)].join(''));
} else {
return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"components","components",-1073188942),components,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),cljs.core.PersistentVector.EMPTY);
}
} else {
return component;
}
});
/**
 * Resolves a dependency on the UIComponent record. Returns a new version
 *   of the record with the resolved dependency.
 * 
 *   ```clojure
 *   (def news-component (constructor {:component-deps [:user-profile :similar-news]
 *                                  :subscription-deps [:current-news :comments]}))
 * 
 *   (resolve-dep :subscription-deps :subscriptions news-component :current-news (fn []...))
 *   ;; Returns a new version of the `news-component` with the :current-news subscription resolved
 * 
 *   (resolve-dep :component-deps :components news-component :user-profile user-profile-component))
 *   ;; Returns a new version of the `news-component` with the :user-profile component resolved
 *   ```
 * 
 *   Two shorthand functions are defined that allow you to omit first two arguments:
 *   
 *   - `resolve-subscription-dep` - Resolves a subscription dependency
 *   - `resolve-component-dep` - Resolves a component dependency
 *   
 */
keechma.ui_component.resolve_dep = (function keechma$ui_component$resolve_dep(dep_kw,coll_kw,component,key,component_dep){
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_kw,key], null),component_dep),dep_kw,keechma.util.without.call(null,dep_kw.call(null,component),key));
});
/**
 * See [[resolve-dep]].
 */
keechma.ui_component.resolve_subscription_dep = cljs.core.partial.call(null,keechma.ui_component.resolve_dep,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776));
/**
 * See [[resolve-dep]]
 */
keechma.ui_component.resolve_component_dep = cljs.core.partial.call(null,keechma.ui_component.resolve_dep,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.Keyword(null,"components","components",-1073188942));
keechma.ui_component.resolved_system = (function keechma$ui_component$resolved_system(components,sorted_keys){
return cljs.core.reduce.call(null,(function (system,key){
var component = cljs.core.get.call(null,system,key);
if(cljs.core.fn_QMARK_.call(null,component)){
return cljs.core.assoc.call(null,system,key,component);
} else {
return cljs.core.assoc.call(null,system,key,keechma.ui_component.component_with_deps.call(null,key,component,system));
}
}),components,sorted_keys);
});
keechma.ui_component.resolve_component_subscriptions = (function keechma$ui_component$resolve_component_subscriptions(component,subscriptions){
return cljs.core.reduce.call(null,(function (c,dep){
var sub = cljs.core.get.call(null,subscriptions,dep);
if((sub == null)){
throw keechma.ui_component.make_ex.call(null,["Missing subscription: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''));
} else {
return keechma.ui_component.resolve_subscription_dep.call(null,c,dep,sub);
}
}),component,(function (){var or__30217__auto__ = new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});
keechma.ui_component.resolve_subscriptions = (function keechma$ui_component$resolve_subscriptions(components,subscriptions){
return cljs.core.reduce_kv.call(null,(function (components__$1,k,c){
return cljs.core.assoc.call(null,components__$1,k,keechma.ui_component.resolve_component_subscriptions.call(null,c,subscriptions));
}),cljs.core.PersistentArrayMap.EMPTY,components);
});
keechma.ui_component.assoc_name = (function keechma$ui_component$assoc_name(components){
return cljs.core.reduce_kv.call(null,(function (components__$1,k,c){
return cljs.core.assoc.call(null,components__$1,k,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"name","name",1843675177),k));
}),cljs.core.PersistentArrayMap.EMPTY,components);
});
keechma.ui_component.component__GT_renderer = (function keechma$ui_component$component__GT_renderer(parent,component){
return keechma.ui_component.renderer.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973),new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"url-fn","url-fn",1228268268),new cljs.core.Keyword(null,"url-fn","url-fn",1228268268).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"current-route-fn","current-route-fn",787729302),new cljs.core.Keyword(null,"current-route-fn","current-route-fn",787729302).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(parent)));
});
/**
 * Creates a component system.
 * 
 *   Component system is a group of components that are interdependent. Each component
 *   system must define a `:main` component which will be returned from the `system`
 *   function.
 * 
 *   `system` function resolves dependencies between components.
 * 
 *   For example, let's say that your application consists of three components:
 * 
 *   - layout
 *   - sidebar
 *   - chat room list
 * 
 *   Layout is rendering the sidebar component and sidebar component is rendering the 
 *   chat room list component.
 * 
 *   Chat room list component has a subscription dependency on `:chat-rooms` which will
 *   return the list of chat rooms to render.
 * 
 *   Usually you would either pass the chat rooms subscription from layout to sidebar to the
 *   chat room list component, or the chat room list component would have a dependency
 *   on a global `:chat-rooms` subscription.
 * 
 *   Keechma allows you to avoid both of these problems:
 * 
 *   - only the chat room list component will know about it's dependencies
 *   - the dependencies will be injected from the outside by the `system` function 
 * 
 *   ```clojure
 *   (defn layout-renderer [ctx] ;; ctx is `layout-component` record with resolved dependencies
 *   [:div.main
 *   [:div.sidebar [(component ctx :sidebar)]]]) ;; Resolve the `:sidebar` component
 * 
 *   (def layout-component (constructor {:component-deps [:sidebar]
 *   :renderer layout-renderer}))
 * 
 *   (defn sidebar-renderer [ctx]
 *   [:div.sidebar
 *   [(component ctx :chat-room-list)]) ;; Resolve the `:chat-room-list` component
 * 
 *   (def sidebar-component (constructor {:component-deps [:chat-room-list]
 *   :renderer sidebar-renderer}))
 * 
 *   (defn chat-room-list-renderer [ctx]
 *   (let [chat-rooms (subscription ctx :chat-rooms)])) ;; Resolve the `:chat-rooms` subscription
 * 
 *   (def chat-room-list-component (constructor {:subscription-deps [:chat-rooms]}))
 * 
 *   (def main-component (system {:main layout-component ;; Map compnents to keys
 *   :sidebar sidebar-component
 *   :chat-room-list chat-room-list-component}
 *   {:chat-rooms (fn [app-state-atom])})) ;; Map subscriptions to keys
 *   ```
 *   
 *   In the example above `main-component` will be a Reagent component that can be mounted
 *   into the DOM, with all of the dependencies between components resolved.
 * 
 *   `system` function provided everything that components need from the outside, and all of the 
 *   components are reusable by design.
 *   
 */
keechma.ui_component.system = (function keechma$ui_component$system(var_args){
var G__37815 = arguments.length;
switch (G__37815) {
case 1:
return keechma.ui_component.system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.ui_component.system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.ui_component.system.cljs$core$IFn$_invoke$arity$1 = (function (components){
return keechma.ui_component.system.call(null,components,cljs.core.PersistentArrayMap.EMPTY);
});

keechma.ui_component.system.cljs$core$IFn$_invoke$arity$2 = (function (components,subscriptions){
if((new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(components) == null)){
throw keechma.ui_component.make_ex.call(null,"System must have a :main component!");
} else {
var graph = keechma.ui_component.component_dep_graph.call(null,components);
var sorted_keys = com.stuartsierra.dependency.topo_sort.call(null,graph);
var components_with_resolved_deps = keechma.ui_component.resolve_subscriptions.call(null,keechma.ui_component.assoc_name.call(null,components),subscriptions);
return new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(keechma.ui_component.resolved_system.call(null,components_with_resolved_deps,sorted_keys));
}
});

keechma.ui_component.system.cljs$lang$maxFixedArity = 2;

/**
 * Createas a UIComponent record. Accepts `opts` as the argument. `opts` is
 *   a map that can have the following params:
 * 
 *   - `:component-deps` - Which child component is this component dependent on
 *   - `:subscription-deps` - Which subscriptions is this component dependent on
 *   - `:topic` - On which topic should this component send commands (to the controller)
 *   - `:renderer` - A renderer function (Reagent component)
 * 
 *   The UIComponent record is a way to list all the dependencies for a component. When
 *   the application is started each component's renderer function will be partiall 
 *   applied with a verion of it's UIComponent that has the component and subscription
 *   dependencies resolved.
 * 
 *   This allows you to write components that are completely decoupled from the rest
 *   of the application.
 * 
 *   When you want to resolve injected component or subscription dependencies, you can
 *   use the functions defined on the `UIComponent` protocol:
 * 
 *   ```clojure
 *   (def render [ctx] ;; `ctx` is a UIComponent with resolved dependencies
 *  (let [child-component (component ctx :component-key)
 *        subscription (subscription ctx :subscription-key)])
 * 
 *   (def component (constructor {:renderer render
 *                             :component-deps [:component-key]
 *                             :subscription-deps [:subscription-key]))
 *   ```
 *   
 */
keechma.ui_component.constructor$ = (function keechma$ui_component$constructor(opts){
var defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"MISSING RENDERER!"], null);
})], null);
return keechma.ui_component.map__GT_UIComponent.call(null,cljs.core.merge.call(null,defaults,opts));
});

//# sourceMappingURL=ui_component.js.map?rel=1515669753275
