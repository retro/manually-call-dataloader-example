// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e41901){if((e41901 instanceof Error)){
var e = e41901;
return "Error: Unable to stringify";
} else {
throw e41901;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__41904 = arguments.length;
switch (G__41904) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__41902_SHARP_){
if(typeof p1__41902_SHARP_ === 'string'){
return p1__41902_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__41902_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31503__auto__ = [];
var len__31496__auto___41907 = arguments.length;
var i__31497__auto___41908 = (0);
while(true){
if((i__31497__auto___41908 < len__31496__auto___41907)){
args__31503__auto__.push((arguments[i__31497__auto___41908]));

var G__41909 = (i__31497__auto___41908 + (1));
i__31497__auto___41908 = G__41909;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41906){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41906));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31503__auto__ = [];
var len__31496__auto___41911 = arguments.length;
var i__31497__auto___41912 = (0);
while(true){
if((i__31497__auto___41912 < len__31496__auto___41911)){
args__31503__auto__.push((arguments[i__31497__auto___41912]));

var G__41913 = (i__31497__auto___41912 + (1));
i__31497__auto___41912 = G__41913;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41910){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41910));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41914){
var map__41915 = p__41914;
var map__41915__$1 = ((((!((map__41915 == null)))?((((map__41915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41915):map__41915);
var message = cljs.core.get.call(null,map__41915__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41915__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30217__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30205__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30205__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30205__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33899__auto___41994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___41994,ch){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___41994,ch){
return (function (state_41966){
var state_val_41967 = (state_41966[(1)]);
if((state_val_41967 === (7))){
var inst_41962 = (state_41966[(2)]);
var state_41966__$1 = state_41966;
var statearr_41968_41995 = state_41966__$1;
(statearr_41968_41995[(2)] = inst_41962);

(statearr_41968_41995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (1))){
var state_41966__$1 = state_41966;
var statearr_41969_41996 = state_41966__$1;
(statearr_41969_41996[(2)] = null);

(statearr_41969_41996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (4))){
var inst_41919 = (state_41966[(7)]);
var inst_41919__$1 = (state_41966[(2)]);
var state_41966__$1 = (function (){var statearr_41970 = state_41966;
(statearr_41970[(7)] = inst_41919__$1);

return statearr_41970;
})();
if(cljs.core.truth_(inst_41919__$1)){
var statearr_41971_41997 = state_41966__$1;
(statearr_41971_41997[(1)] = (5));

} else {
var statearr_41972_41998 = state_41966__$1;
(statearr_41972_41998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (15))){
var inst_41926 = (state_41966[(8)]);
var inst_41941 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41926);
var inst_41942 = cljs.core.first.call(null,inst_41941);
var inst_41943 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41942);
var inst_41944 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41943)].join('');
var inst_41945 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41944);
var state_41966__$1 = state_41966;
var statearr_41973_41999 = state_41966__$1;
(statearr_41973_41999[(2)] = inst_41945);

(statearr_41973_41999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (13))){
var inst_41950 = (state_41966[(2)]);
var state_41966__$1 = state_41966;
var statearr_41974_42000 = state_41966__$1;
(statearr_41974_42000[(2)] = inst_41950);

(statearr_41974_42000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (6))){
var state_41966__$1 = state_41966;
var statearr_41975_42001 = state_41966__$1;
(statearr_41975_42001[(2)] = null);

(statearr_41975_42001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (17))){
var inst_41948 = (state_41966[(2)]);
var state_41966__$1 = state_41966;
var statearr_41976_42002 = state_41966__$1;
(statearr_41976_42002[(2)] = inst_41948);

(statearr_41976_42002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (3))){
var inst_41964 = (state_41966[(2)]);
var state_41966__$1 = state_41966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41966__$1,inst_41964);
} else {
if((state_val_41967 === (12))){
var inst_41925 = (state_41966[(9)]);
var inst_41939 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41925,opts);
var state_41966__$1 = state_41966;
if(cljs.core.truth_(inst_41939)){
var statearr_41977_42003 = state_41966__$1;
(statearr_41977_42003[(1)] = (15));

} else {
var statearr_41978_42004 = state_41966__$1;
(statearr_41978_42004[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (2))){
var state_41966__$1 = state_41966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41966__$1,(4),ch);
} else {
if((state_val_41967 === (11))){
var inst_41926 = (state_41966[(8)]);
var inst_41931 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41932 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41926);
var inst_41933 = cljs.core.async.timeout.call(null,(1000));
var inst_41934 = [inst_41932,inst_41933];
var inst_41935 = (new cljs.core.PersistentVector(null,2,(5),inst_41931,inst_41934,null));
var state_41966__$1 = state_41966;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41966__$1,(14),inst_41935);
} else {
if((state_val_41967 === (9))){
var inst_41926 = (state_41966[(8)]);
var inst_41952 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41953 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41926);
var inst_41954 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41953);
var inst_41955 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41954)].join('');
var inst_41956 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41955);
var state_41966__$1 = (function (){var statearr_41979 = state_41966;
(statearr_41979[(10)] = inst_41952);

return statearr_41979;
})();
var statearr_41980_42005 = state_41966__$1;
(statearr_41980_42005[(2)] = inst_41956);

(statearr_41980_42005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (5))){
var inst_41919 = (state_41966[(7)]);
var inst_41921 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41922 = (new cljs.core.PersistentArrayMap(null,2,inst_41921,null));
var inst_41923 = (new cljs.core.PersistentHashSet(null,inst_41922,null));
var inst_41924 = figwheel.client.focus_msgs.call(null,inst_41923,inst_41919);
var inst_41925 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41924);
var inst_41926 = cljs.core.first.call(null,inst_41924);
var inst_41927 = figwheel.client.autoload_QMARK_.call(null);
var state_41966__$1 = (function (){var statearr_41981 = state_41966;
(statearr_41981[(8)] = inst_41926);

(statearr_41981[(9)] = inst_41925);

return statearr_41981;
})();
if(cljs.core.truth_(inst_41927)){
var statearr_41982_42006 = state_41966__$1;
(statearr_41982_42006[(1)] = (8));

} else {
var statearr_41983_42007 = state_41966__$1;
(statearr_41983_42007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (14))){
var inst_41937 = (state_41966[(2)]);
var state_41966__$1 = state_41966;
var statearr_41984_42008 = state_41966__$1;
(statearr_41984_42008[(2)] = inst_41937);

(statearr_41984_42008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (16))){
var state_41966__$1 = state_41966;
var statearr_41985_42009 = state_41966__$1;
(statearr_41985_42009[(2)] = null);

(statearr_41985_42009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (10))){
var inst_41958 = (state_41966[(2)]);
var state_41966__$1 = (function (){var statearr_41986 = state_41966;
(statearr_41986[(11)] = inst_41958);

return statearr_41986;
})();
var statearr_41987_42010 = state_41966__$1;
(statearr_41987_42010[(2)] = null);

(statearr_41987_42010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41967 === (8))){
var inst_41925 = (state_41966[(9)]);
var inst_41929 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41925,opts);
var state_41966__$1 = state_41966;
if(cljs.core.truth_(inst_41929)){
var statearr_41988_42011 = state_41966__$1;
(statearr_41988_42011[(1)] = (11));

} else {
var statearr_41989_42012 = state_41966__$1;
(statearr_41989_42012[(1)] = (12));

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
});})(c__33899__auto___41994,ch))
;
return ((function (switch__33809__auto__,c__33899__auto___41994,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33810__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33810__auto____0 = (function (){
var statearr_41990 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41990[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33810__auto__);

(statearr_41990[(1)] = (1));

return statearr_41990;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33810__auto____1 = (function (state_41966){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_41966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e41991){if((e41991 instanceof Object)){
var ex__33813__auto__ = e41991;
var statearr_41992_42013 = state_41966;
(statearr_41992_42013[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42014 = state_41966;
state_41966 = G__42014;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33810__auto__ = function(state_41966){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33810__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33810__auto____1.call(this,state_41966);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33810__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33810__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___41994,ch))
})();
var state__33901__auto__ = (function (){var statearr_41993 = f__33900__auto__.call(null);
(statearr_41993[(6)] = c__33899__auto___41994);

return statearr_41993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___41994,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42015_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42015_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42017 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42017){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42016){if((e42016 instanceof Error)){
var e = e42016;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42017], null));
} else {
var e = e42016;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42017))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42018){
var map__42019 = p__42018;
var map__42019__$1 = ((((!((map__42019 == null)))?((((map__42019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42019):map__42019);
var opts = map__42019__$1;
var build_id = cljs.core.get.call(null,map__42019__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42019,map__42019__$1,opts,build_id){
return (function (p__42021){
var vec__42022 = p__42021;
var seq__42023 = cljs.core.seq.call(null,vec__42022);
var first__42024 = cljs.core.first.call(null,seq__42023);
var seq__42023__$1 = cljs.core.next.call(null,seq__42023);
var map__42025 = first__42024;
var map__42025__$1 = ((((!((map__42025 == null)))?((((map__42025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42025):map__42025);
var msg = map__42025__$1;
var msg_name = cljs.core.get.call(null,map__42025__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42023__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42022,seq__42023,first__42024,seq__42023__$1,map__42025,map__42025__$1,msg,msg_name,_,map__42019,map__42019__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42022,seq__42023,first__42024,seq__42023__$1,map__42025,map__42025__$1,msg,msg_name,_,map__42019,map__42019__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42019,map__42019__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42027){
var vec__42028 = p__42027;
var seq__42029 = cljs.core.seq.call(null,vec__42028);
var first__42030 = cljs.core.first.call(null,seq__42029);
var seq__42029__$1 = cljs.core.next.call(null,seq__42029);
var map__42031 = first__42030;
var map__42031__$1 = ((((!((map__42031 == null)))?((((map__42031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42031):map__42031);
var msg = map__42031__$1;
var msg_name = cljs.core.get.call(null,map__42031__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42029__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42033){
var map__42034 = p__42033;
var map__42034__$1 = ((((!((map__42034 == null)))?((((map__42034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42034):map__42034);
var on_compile_warning = cljs.core.get.call(null,map__42034__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42034__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42034,map__42034__$1,on_compile_warning,on_compile_fail){
return (function (p__42036){
var vec__42037 = p__42036;
var seq__42038 = cljs.core.seq.call(null,vec__42037);
var first__42039 = cljs.core.first.call(null,seq__42038);
var seq__42038__$1 = cljs.core.next.call(null,seq__42038);
var map__42040 = first__42039;
var map__42040__$1 = ((((!((map__42040 == null)))?((((map__42040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42040):map__42040);
var msg = map__42040__$1;
var msg_name = cljs.core.get.call(null,map__42040__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42038__$1;
var pred__42042 = cljs.core._EQ_;
var expr__42043 = msg_name;
if(cljs.core.truth_(pred__42042.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42043))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42042.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42043))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42034,map__42034__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__,msg_hist,msg_names,msg){
return (function (state_42132){
var state_val_42133 = (state_42132[(1)]);
if((state_val_42133 === (7))){
var inst_42052 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
if(cljs.core.truth_(inst_42052)){
var statearr_42134_42181 = state_42132__$1;
(statearr_42134_42181[(1)] = (8));

} else {
var statearr_42135_42182 = state_42132__$1;
(statearr_42135_42182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (20))){
var inst_42126 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
var statearr_42136_42183 = state_42132__$1;
(statearr_42136_42183[(2)] = inst_42126);

(statearr_42136_42183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (27))){
var inst_42122 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
var statearr_42137_42184 = state_42132__$1;
(statearr_42137_42184[(2)] = inst_42122);

(statearr_42137_42184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (1))){
var inst_42045 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42132__$1 = state_42132;
if(cljs.core.truth_(inst_42045)){
var statearr_42138_42185 = state_42132__$1;
(statearr_42138_42185[(1)] = (2));

} else {
var statearr_42139_42186 = state_42132__$1;
(statearr_42139_42186[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (24))){
var inst_42124 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
var statearr_42140_42187 = state_42132__$1;
(statearr_42140_42187[(2)] = inst_42124);

(statearr_42140_42187[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (4))){
var inst_42130 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42132__$1,inst_42130);
} else {
if((state_val_42133 === (15))){
var inst_42128 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
var statearr_42141_42188 = state_42132__$1;
(statearr_42141_42188[(2)] = inst_42128);

(statearr_42141_42188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (21))){
var inst_42081 = (state_42132[(2)]);
var inst_42082 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42083 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42082);
var state_42132__$1 = (function (){var statearr_42142 = state_42132;
(statearr_42142[(7)] = inst_42081);

return statearr_42142;
})();
var statearr_42143_42189 = state_42132__$1;
(statearr_42143_42189[(2)] = inst_42083);

(statearr_42143_42189[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (31))){
var inst_42111 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42132__$1 = state_42132;
if(cljs.core.truth_(inst_42111)){
var statearr_42144_42190 = state_42132__$1;
(statearr_42144_42190[(1)] = (34));

} else {
var statearr_42145_42191 = state_42132__$1;
(statearr_42145_42191[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (32))){
var inst_42120 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
var statearr_42146_42192 = state_42132__$1;
(statearr_42146_42192[(2)] = inst_42120);

(statearr_42146_42192[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (33))){
var inst_42107 = (state_42132[(2)]);
var inst_42108 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42109 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42108);
var state_42132__$1 = (function (){var statearr_42147 = state_42132;
(statearr_42147[(8)] = inst_42107);

return statearr_42147;
})();
var statearr_42148_42193 = state_42132__$1;
(statearr_42148_42193[(2)] = inst_42109);

(statearr_42148_42193[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (13))){
var inst_42066 = figwheel.client.heads_up.clear.call(null);
var state_42132__$1 = state_42132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42132__$1,(16),inst_42066);
} else {
if((state_val_42133 === (22))){
var inst_42087 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42088 = figwheel.client.heads_up.append_warning_message.call(null,inst_42087);
var state_42132__$1 = state_42132;
var statearr_42149_42194 = state_42132__$1;
(statearr_42149_42194[(2)] = inst_42088);

(statearr_42149_42194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (36))){
var inst_42118 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
var statearr_42150_42195 = state_42132__$1;
(statearr_42150_42195[(2)] = inst_42118);

(statearr_42150_42195[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (29))){
var inst_42098 = (state_42132[(2)]);
var inst_42099 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42100 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42099);
var state_42132__$1 = (function (){var statearr_42151 = state_42132;
(statearr_42151[(9)] = inst_42098);

return statearr_42151;
})();
var statearr_42152_42196 = state_42132__$1;
(statearr_42152_42196[(2)] = inst_42100);

(statearr_42152_42196[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (6))){
var inst_42047 = (state_42132[(10)]);
var state_42132__$1 = state_42132;
var statearr_42153_42197 = state_42132__$1;
(statearr_42153_42197[(2)] = inst_42047);

(statearr_42153_42197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (28))){
var inst_42094 = (state_42132[(2)]);
var inst_42095 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42096 = figwheel.client.heads_up.display_warning.call(null,inst_42095);
var state_42132__$1 = (function (){var statearr_42154 = state_42132;
(statearr_42154[(11)] = inst_42094);

return statearr_42154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42132__$1,(29),inst_42096);
} else {
if((state_val_42133 === (25))){
var inst_42092 = figwheel.client.heads_up.clear.call(null);
var state_42132__$1 = state_42132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42132__$1,(28),inst_42092);
} else {
if((state_val_42133 === (34))){
var inst_42113 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42132__$1 = state_42132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42132__$1,(37),inst_42113);
} else {
if((state_val_42133 === (17))){
var inst_42072 = (state_42132[(2)]);
var inst_42073 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42074 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42073);
var state_42132__$1 = (function (){var statearr_42155 = state_42132;
(statearr_42155[(12)] = inst_42072);

return statearr_42155;
})();
var statearr_42156_42198 = state_42132__$1;
(statearr_42156_42198[(2)] = inst_42074);

(statearr_42156_42198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (3))){
var inst_42064 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42132__$1 = state_42132;
if(cljs.core.truth_(inst_42064)){
var statearr_42157_42199 = state_42132__$1;
(statearr_42157_42199[(1)] = (13));

} else {
var statearr_42158_42200 = state_42132__$1;
(statearr_42158_42200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (12))){
var inst_42060 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
var statearr_42159_42201 = state_42132__$1;
(statearr_42159_42201[(2)] = inst_42060);

(statearr_42159_42201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (2))){
var inst_42047 = (state_42132[(10)]);
var inst_42047__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42132__$1 = (function (){var statearr_42160 = state_42132;
(statearr_42160[(10)] = inst_42047__$1);

return statearr_42160;
})();
if(cljs.core.truth_(inst_42047__$1)){
var statearr_42161_42202 = state_42132__$1;
(statearr_42161_42202[(1)] = (5));

} else {
var statearr_42162_42203 = state_42132__$1;
(statearr_42162_42203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (23))){
var inst_42090 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42132__$1 = state_42132;
if(cljs.core.truth_(inst_42090)){
var statearr_42163_42204 = state_42132__$1;
(statearr_42163_42204[(1)] = (25));

} else {
var statearr_42164_42205 = state_42132__$1;
(statearr_42164_42205[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (35))){
var state_42132__$1 = state_42132;
var statearr_42165_42206 = state_42132__$1;
(statearr_42165_42206[(2)] = null);

(statearr_42165_42206[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (19))){
var inst_42085 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42132__$1 = state_42132;
if(cljs.core.truth_(inst_42085)){
var statearr_42166_42207 = state_42132__$1;
(statearr_42166_42207[(1)] = (22));

} else {
var statearr_42167_42208 = state_42132__$1;
(statearr_42167_42208[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (11))){
var inst_42056 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
var statearr_42168_42209 = state_42132__$1;
(statearr_42168_42209[(2)] = inst_42056);

(statearr_42168_42209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (9))){
var inst_42058 = figwheel.client.heads_up.clear.call(null);
var state_42132__$1 = state_42132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42132__$1,(12),inst_42058);
} else {
if((state_val_42133 === (5))){
var inst_42049 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42132__$1 = state_42132;
var statearr_42169_42210 = state_42132__$1;
(statearr_42169_42210[(2)] = inst_42049);

(statearr_42169_42210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (14))){
var inst_42076 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42132__$1 = state_42132;
if(cljs.core.truth_(inst_42076)){
var statearr_42170_42211 = state_42132__$1;
(statearr_42170_42211[(1)] = (18));

} else {
var statearr_42171_42212 = state_42132__$1;
(statearr_42171_42212[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (26))){
var inst_42102 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42132__$1 = state_42132;
if(cljs.core.truth_(inst_42102)){
var statearr_42172_42213 = state_42132__$1;
(statearr_42172_42213[(1)] = (30));

} else {
var statearr_42173_42214 = state_42132__$1;
(statearr_42173_42214[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (16))){
var inst_42068 = (state_42132[(2)]);
var inst_42069 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42070 = figwheel.client.heads_up.display_exception.call(null,inst_42069);
var state_42132__$1 = (function (){var statearr_42174 = state_42132;
(statearr_42174[(13)] = inst_42068);

return statearr_42174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42132__$1,(17),inst_42070);
} else {
if((state_val_42133 === (30))){
var inst_42104 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42105 = figwheel.client.heads_up.display_warning.call(null,inst_42104);
var state_42132__$1 = state_42132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42132__$1,(33),inst_42105);
} else {
if((state_val_42133 === (10))){
var inst_42062 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
var statearr_42175_42215 = state_42132__$1;
(statearr_42175_42215[(2)] = inst_42062);

(statearr_42175_42215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (18))){
var inst_42078 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42079 = figwheel.client.heads_up.display_exception.call(null,inst_42078);
var state_42132__$1 = state_42132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42132__$1,(21),inst_42079);
} else {
if((state_val_42133 === (37))){
var inst_42115 = (state_42132[(2)]);
var state_42132__$1 = state_42132;
var statearr_42176_42216 = state_42132__$1;
(statearr_42176_42216[(2)] = inst_42115);

(statearr_42176_42216[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42133 === (8))){
var inst_42054 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42132__$1 = state_42132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42132__$1,(11),inst_42054);
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
});})(c__33899__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33809__auto__,c__33899__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto____0 = (function (){
var statearr_42177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42177[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto__);

(statearr_42177[(1)] = (1));

return statearr_42177;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto____1 = (function (state_42132){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_42132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e42178){if((e42178 instanceof Object)){
var ex__33813__auto__ = e42178;
var statearr_42179_42217 = state_42132;
(statearr_42179_42217[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42218 = state_42132;
state_42132 = G__42218;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto__ = function(state_42132){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto____1.call(this,state_42132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__,msg_hist,msg_names,msg))
})();
var state__33901__auto__ = (function (){var statearr_42180 = f__33900__auto__.call(null);
(statearr_42180[(6)] = c__33899__auto__);

return statearr_42180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__,msg_hist,msg_names,msg))
);

return c__33899__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33899__auto___42247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___42247,ch){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___42247,ch){
return (function (state_42233){
var state_val_42234 = (state_42233[(1)]);
if((state_val_42234 === (1))){
var state_42233__$1 = state_42233;
var statearr_42235_42248 = state_42233__$1;
(statearr_42235_42248[(2)] = null);

(statearr_42235_42248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42234 === (2))){
var state_42233__$1 = state_42233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42233__$1,(4),ch);
} else {
if((state_val_42234 === (3))){
var inst_42231 = (state_42233[(2)]);
var state_42233__$1 = state_42233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42233__$1,inst_42231);
} else {
if((state_val_42234 === (4))){
var inst_42221 = (state_42233[(7)]);
var inst_42221__$1 = (state_42233[(2)]);
var state_42233__$1 = (function (){var statearr_42236 = state_42233;
(statearr_42236[(7)] = inst_42221__$1);

return statearr_42236;
})();
if(cljs.core.truth_(inst_42221__$1)){
var statearr_42237_42249 = state_42233__$1;
(statearr_42237_42249[(1)] = (5));

} else {
var statearr_42238_42250 = state_42233__$1;
(statearr_42238_42250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42234 === (5))){
var inst_42221 = (state_42233[(7)]);
var inst_42223 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42221);
var state_42233__$1 = state_42233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42233__$1,(8),inst_42223);
} else {
if((state_val_42234 === (6))){
var state_42233__$1 = state_42233;
var statearr_42239_42251 = state_42233__$1;
(statearr_42239_42251[(2)] = null);

(statearr_42239_42251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42234 === (7))){
var inst_42229 = (state_42233[(2)]);
var state_42233__$1 = state_42233;
var statearr_42240_42252 = state_42233__$1;
(statearr_42240_42252[(2)] = inst_42229);

(statearr_42240_42252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42234 === (8))){
var inst_42225 = (state_42233[(2)]);
var state_42233__$1 = (function (){var statearr_42241 = state_42233;
(statearr_42241[(8)] = inst_42225);

return statearr_42241;
})();
var statearr_42242_42253 = state_42233__$1;
(statearr_42242_42253[(2)] = null);

(statearr_42242_42253[(1)] = (2));


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
});})(c__33899__auto___42247,ch))
;
return ((function (switch__33809__auto__,c__33899__auto___42247,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33810__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33810__auto____0 = (function (){
var statearr_42243 = [null,null,null,null,null,null,null,null,null];
(statearr_42243[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33810__auto__);

(statearr_42243[(1)] = (1));

return statearr_42243;
});
var figwheel$client$heads_up_plugin_$_state_machine__33810__auto____1 = (function (state_42233){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_42233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e42244){if((e42244 instanceof Object)){
var ex__33813__auto__ = e42244;
var statearr_42245_42254 = state_42233;
(statearr_42245_42254[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42255 = state_42233;
state_42233 = G__42255;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33810__auto__ = function(state_42233){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33810__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33810__auto____1.call(this,state_42233);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33810__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33810__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___42247,ch))
})();
var state__33901__auto__ = (function (){var statearr_42246 = f__33900__auto__.call(null);
(statearr_42246[(6)] = c__33899__auto___42247);

return statearr_42246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___42247,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__){
return (function (state_42261){
var state_val_42262 = (state_42261[(1)]);
if((state_val_42262 === (1))){
var inst_42256 = cljs.core.async.timeout.call(null,(3000));
var state_42261__$1 = state_42261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42261__$1,(2),inst_42256);
} else {
if((state_val_42262 === (2))){
var inst_42258 = (state_42261[(2)]);
var inst_42259 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42261__$1 = (function (){var statearr_42263 = state_42261;
(statearr_42263[(7)] = inst_42258);

return statearr_42263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42261__$1,inst_42259);
} else {
return null;
}
}
});})(c__33899__auto__))
;
return ((function (switch__33809__auto__,c__33899__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33810__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33810__auto____0 = (function (){
var statearr_42264 = [null,null,null,null,null,null,null,null];
(statearr_42264[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33810__auto__);

(statearr_42264[(1)] = (1));

return statearr_42264;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33810__auto____1 = (function (state_42261){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_42261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e42265){if((e42265 instanceof Object)){
var ex__33813__auto__ = e42265;
var statearr_42266_42268 = state_42261;
(statearr_42266_42268[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42269 = state_42261;
state_42261 = G__42269;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33810__auto__ = function(state_42261){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33810__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33810__auto____1.call(this,state_42261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33810__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33810__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__))
})();
var state__33901__auto__ = (function (){var statearr_42267 = f__33900__auto__.call(null);
(statearr_42267[(6)] = c__33899__auto__);

return statearr_42267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__))
);

return c__33899__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__,figwheel_version,temp__5457__auto__){
return (function (state_42276){
var state_val_42277 = (state_42276[(1)]);
if((state_val_42277 === (1))){
var inst_42270 = cljs.core.async.timeout.call(null,(2000));
var state_42276__$1 = state_42276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42276__$1,(2),inst_42270);
} else {
if((state_val_42277 === (2))){
var inst_42272 = (state_42276[(2)]);
var inst_42273 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42274 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42273);
var state_42276__$1 = (function (){var statearr_42278 = state_42276;
(statearr_42278[(7)] = inst_42272);

return statearr_42278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42276__$1,inst_42274);
} else {
return null;
}
}
});})(c__33899__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__33809__auto__,c__33899__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto____0 = (function (){
var statearr_42279 = [null,null,null,null,null,null,null,null];
(statearr_42279[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto__);

(statearr_42279[(1)] = (1));

return statearr_42279;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto____1 = (function (state_42276){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_42276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e42280){if((e42280 instanceof Object)){
var ex__33813__auto__ = e42280;
var statearr_42281_42283 = state_42276;
(statearr_42281_42283[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42284 = state_42276;
state_42276 = G__42284;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto__ = function(state_42276){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto____1.call(this,state_42276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__,figwheel_version,temp__5457__auto__))
})();
var state__33901__auto__ = (function (){var statearr_42282 = f__33900__auto__.call(null);
(statearr_42282[(6)] = c__33899__auto__);

return statearr_42282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__,figwheel_version,temp__5457__auto__))
);

return c__33899__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42285){
var map__42286 = p__42285;
var map__42286__$1 = ((((!((map__42286 == null)))?((((map__42286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42286):map__42286);
var file = cljs.core.get.call(null,map__42286__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42286__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42286__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42288 = "";
var G__42288__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42288),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42288);
var G__42288__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42288__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42288__$1);
if(cljs.core.truth_((function (){var and__30205__auto__ = line;
if(cljs.core.truth_(and__30205__auto__)){
return column;
} else {
return and__30205__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42288__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42288__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42289){
var map__42290 = p__42289;
var map__42290__$1 = ((((!((map__42290 == null)))?((((map__42290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42290):map__42290);
var ed = map__42290__$1;
var formatted_exception = cljs.core.get.call(null,map__42290__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42290__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42290__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42292_42296 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42293_42297 = null;
var count__42294_42298 = (0);
var i__42295_42299 = (0);
while(true){
if((i__42295_42299 < count__42294_42298)){
var msg_42300 = cljs.core._nth.call(null,chunk__42293_42297,i__42295_42299);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42300);

var G__42301 = seq__42292_42296;
var G__42302 = chunk__42293_42297;
var G__42303 = count__42294_42298;
var G__42304 = (i__42295_42299 + (1));
seq__42292_42296 = G__42301;
chunk__42293_42297 = G__42302;
count__42294_42298 = G__42303;
i__42295_42299 = G__42304;
continue;
} else {
var temp__5457__auto___42305 = cljs.core.seq.call(null,seq__42292_42296);
if(temp__5457__auto___42305){
var seq__42292_42306__$1 = temp__5457__auto___42305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42292_42306__$1)){
var c__31148__auto___42307 = cljs.core.chunk_first.call(null,seq__42292_42306__$1);
var G__42308 = cljs.core.chunk_rest.call(null,seq__42292_42306__$1);
var G__42309 = c__31148__auto___42307;
var G__42310 = cljs.core.count.call(null,c__31148__auto___42307);
var G__42311 = (0);
seq__42292_42296 = G__42308;
chunk__42293_42297 = G__42309;
count__42294_42298 = G__42310;
i__42295_42299 = G__42311;
continue;
} else {
var msg_42312 = cljs.core.first.call(null,seq__42292_42306__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42312);

var G__42313 = cljs.core.next.call(null,seq__42292_42306__$1);
var G__42314 = null;
var G__42315 = (0);
var G__42316 = (0);
seq__42292_42296 = G__42313;
chunk__42293_42297 = G__42314;
count__42294_42298 = G__42315;
i__42295_42299 = G__42316;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42317){
var map__42318 = p__42317;
var map__42318__$1 = ((((!((map__42318 == null)))?((((map__42318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42318):map__42318);
var w = map__42318__$1;
var message = cljs.core.get.call(null,map__42318__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/dev/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/dev/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30205__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30205__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30205__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42320 = cljs.core.seq.call(null,plugins);
var chunk__42321 = null;
var count__42322 = (0);
var i__42323 = (0);
while(true){
if((i__42323 < count__42322)){
var vec__42324 = cljs.core._nth.call(null,chunk__42321,i__42323);
var k = cljs.core.nth.call(null,vec__42324,(0),null);
var plugin = cljs.core.nth.call(null,vec__42324,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42330 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42320,chunk__42321,count__42322,i__42323,pl_42330,vec__42324,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42330.call(null,msg_hist);
});})(seq__42320,chunk__42321,count__42322,i__42323,pl_42330,vec__42324,k,plugin))
);
} else {
}

var G__42331 = seq__42320;
var G__42332 = chunk__42321;
var G__42333 = count__42322;
var G__42334 = (i__42323 + (1));
seq__42320 = G__42331;
chunk__42321 = G__42332;
count__42322 = G__42333;
i__42323 = G__42334;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__42320);
if(temp__5457__auto__){
var seq__42320__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42320__$1)){
var c__31148__auto__ = cljs.core.chunk_first.call(null,seq__42320__$1);
var G__42335 = cljs.core.chunk_rest.call(null,seq__42320__$1);
var G__42336 = c__31148__auto__;
var G__42337 = cljs.core.count.call(null,c__31148__auto__);
var G__42338 = (0);
seq__42320 = G__42335;
chunk__42321 = G__42336;
count__42322 = G__42337;
i__42323 = G__42338;
continue;
} else {
var vec__42327 = cljs.core.first.call(null,seq__42320__$1);
var k = cljs.core.nth.call(null,vec__42327,(0),null);
var plugin = cljs.core.nth.call(null,vec__42327,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42339 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42320,chunk__42321,count__42322,i__42323,pl_42339,vec__42327,k,plugin,seq__42320__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42339.call(null,msg_hist);
});})(seq__42320,chunk__42321,count__42322,i__42323,pl_42339,vec__42327,k,plugin,seq__42320__$1,temp__5457__auto__))
);
} else {
}

var G__42340 = cljs.core.next.call(null,seq__42320__$1);
var G__42341 = null;
var G__42342 = (0);
var G__42343 = (0);
seq__42320 = G__42340;
chunk__42321 = G__42341;
count__42322 = G__42342;
i__42323 = G__42343;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__42345 = arguments.length;
switch (G__42345) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42346_42351 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42347_42352 = null;
var count__42348_42353 = (0);
var i__42349_42354 = (0);
while(true){
if((i__42349_42354 < count__42348_42353)){
var msg_42355 = cljs.core._nth.call(null,chunk__42347_42352,i__42349_42354);
figwheel.client.socket.handle_incoming_message.call(null,msg_42355);

var G__42356 = seq__42346_42351;
var G__42357 = chunk__42347_42352;
var G__42358 = count__42348_42353;
var G__42359 = (i__42349_42354 + (1));
seq__42346_42351 = G__42356;
chunk__42347_42352 = G__42357;
count__42348_42353 = G__42358;
i__42349_42354 = G__42359;
continue;
} else {
var temp__5457__auto___42360 = cljs.core.seq.call(null,seq__42346_42351);
if(temp__5457__auto___42360){
var seq__42346_42361__$1 = temp__5457__auto___42360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42346_42361__$1)){
var c__31148__auto___42362 = cljs.core.chunk_first.call(null,seq__42346_42361__$1);
var G__42363 = cljs.core.chunk_rest.call(null,seq__42346_42361__$1);
var G__42364 = c__31148__auto___42362;
var G__42365 = cljs.core.count.call(null,c__31148__auto___42362);
var G__42366 = (0);
seq__42346_42351 = G__42363;
chunk__42347_42352 = G__42364;
count__42348_42353 = G__42365;
i__42349_42354 = G__42366;
continue;
} else {
var msg_42367 = cljs.core.first.call(null,seq__42346_42361__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42367);

var G__42368 = cljs.core.next.call(null,seq__42346_42361__$1);
var G__42369 = null;
var G__42370 = (0);
var G__42371 = (0);
seq__42346_42351 = G__42368;
chunk__42347_42352 = G__42369;
count__42348_42353 = G__42370;
i__42349_42354 = G__42371;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31503__auto__ = [];
var len__31496__auto___42376 = arguments.length;
var i__31497__auto___42377 = (0);
while(true){
if((i__31497__auto___42377 < len__31496__auto___42376)){
args__31503__auto__.push((arguments[i__31497__auto___42377]));

var G__42378 = (i__31497__auto___42377 + (1));
i__31497__auto___42377 = G__42378;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42373){
var map__42374 = p__42373;
var map__42374__$1 = ((((!((map__42374 == null)))?((((map__42374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42374):map__42374);
var opts = map__42374__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42372){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42372));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42379){if((e42379 instanceof Error)){
var e = e42379;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42379;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__42380){
var map__42381 = p__42380;
var map__42381__$1 = ((((!((map__42381 == null)))?((((map__42381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42381):map__42381);
var msg_name = cljs.core.get.call(null,map__42381__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515669758683
