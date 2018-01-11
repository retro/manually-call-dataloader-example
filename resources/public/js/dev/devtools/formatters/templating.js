// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x45027_45028 = value;
x45027_45028.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x45030_45031 = value;
x45030_45031.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x45033_45034 = value;
x45033_45034.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__30205__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30205__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30205__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__31503__auto__ = [];
var len__31496__auto___45041 = arguments.length;
var i__31497__auto___45042 = (0);
while(true){
if((i__31497__auto___45042 < len__31496__auto___45041)){
args__31503__auto__.push((arguments[i__31497__auto___45042]));

var G__45043 = (i__31497__auto___45042 + (1));
i__31497__auto___45042 = G__45043;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__45037_45044 = cljs.core.seq.call(null,items);
var chunk__45038_45045 = null;
var count__45039_45046 = (0);
var i__45040_45047 = (0);
while(true){
if((i__45040_45047 < count__45039_45046)){
var item_45048 = cljs.core._nth.call(null,chunk__45038_45045,i__45040_45047);
if(!((item_45048 == null))){
if(cljs.core.coll_QMARK_.call(null,item_45048)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_45048)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_45048));
}
} else {
}

var G__45049 = seq__45037_45044;
var G__45050 = chunk__45038_45045;
var G__45051 = count__45039_45046;
var G__45052 = (i__45040_45047 + (1));
seq__45037_45044 = G__45049;
chunk__45038_45045 = G__45050;
count__45039_45046 = G__45051;
i__45040_45047 = G__45052;
continue;
} else {
var temp__5457__auto___45053 = cljs.core.seq.call(null,seq__45037_45044);
if(temp__5457__auto___45053){
var seq__45037_45054__$1 = temp__5457__auto___45053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45037_45054__$1)){
var c__31148__auto___45055 = cljs.core.chunk_first.call(null,seq__45037_45054__$1);
var G__45056 = cljs.core.chunk_rest.call(null,seq__45037_45054__$1);
var G__45057 = c__31148__auto___45055;
var G__45058 = cljs.core.count.call(null,c__31148__auto___45055);
var G__45059 = (0);
seq__45037_45044 = G__45056;
chunk__45038_45045 = G__45057;
count__45039_45046 = G__45058;
i__45040_45047 = G__45059;
continue;
} else {
var item_45060 = cljs.core.first.call(null,seq__45037_45054__$1);
if(!((item_45060 == null))){
if(cljs.core.coll_QMARK_.call(null,item_45060)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_45060)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_45060));
}
} else {
}

var G__45061 = cljs.core.next.call(null,seq__45037_45054__$1);
var G__45062 = null;
var G__45063 = (0);
var G__45064 = (0);
seq__45037_45044 = G__45061;
chunk__45038_45045 = G__45062;
count__45039_45046 = G__45063;
i__45040_45047 = G__45064;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq45036){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45036));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__31503__auto__ = [];
var len__31496__auto___45072 = arguments.length;
var i__31497__auto___45073 = (0);
while(true){
if((i__31497__auto___45073 < len__31496__auto___45072)){
args__31503__auto__.push((arguments[i__31497__auto___45073]));

var G__45074 = (i__31497__auto___45073 + (1));
i__31497__auto___45073 = G__45074;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((2) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31504__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__45068_45075 = cljs.core.seq.call(null,children);
var chunk__45069_45076 = null;
var count__45070_45077 = (0);
var i__45071_45078 = (0);
while(true){
if((i__45071_45078 < count__45070_45077)){
var child_45079 = cljs.core._nth.call(null,chunk__45069_45076,i__45071_45078);
if(!((child_45079 == null))){
if(cljs.core.coll_QMARK_.call(null,child_45079)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_45079))));
} else {
var temp__5455__auto___45080 = devtools.formatters.helpers.pref.call(null,child_45079);
if(cljs.core.truth_(temp__5455__auto___45080)){
var child_value_45081 = temp__5455__auto___45080;
template.push(child_value_45081);
} else {
}
}
} else {
}

var G__45082 = seq__45068_45075;
var G__45083 = chunk__45069_45076;
var G__45084 = count__45070_45077;
var G__45085 = (i__45071_45078 + (1));
seq__45068_45075 = G__45082;
chunk__45069_45076 = G__45083;
count__45070_45077 = G__45084;
i__45071_45078 = G__45085;
continue;
} else {
var temp__5457__auto___45086 = cljs.core.seq.call(null,seq__45068_45075);
if(temp__5457__auto___45086){
var seq__45068_45087__$1 = temp__5457__auto___45086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45068_45087__$1)){
var c__31148__auto___45088 = cljs.core.chunk_first.call(null,seq__45068_45087__$1);
var G__45089 = cljs.core.chunk_rest.call(null,seq__45068_45087__$1);
var G__45090 = c__31148__auto___45088;
var G__45091 = cljs.core.count.call(null,c__31148__auto___45088);
var G__45092 = (0);
seq__45068_45075 = G__45089;
chunk__45069_45076 = G__45090;
count__45070_45077 = G__45091;
i__45071_45078 = G__45092;
continue;
} else {
var child_45093 = cljs.core.first.call(null,seq__45068_45087__$1);
if(!((child_45093 == null))){
if(cljs.core.coll_QMARK_.call(null,child_45093)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_45093))));
} else {
var temp__5455__auto___45094 = devtools.formatters.helpers.pref.call(null,child_45093);
if(cljs.core.truth_(temp__5455__auto___45094)){
var child_value_45095 = temp__5455__auto___45094;
template.push(child_value_45095);
} else {
}
}
} else {
}

var G__45096 = cljs.core.next.call(null,seq__45068_45087__$1);
var G__45097 = null;
var G__45098 = (0);
var G__45099 = (0);
seq__45068_45075 = G__45096;
chunk__45069_45076 = G__45097;
count__45070_45077 = G__45098;
i__45071_45078 = G__45099;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq45065){
var G__45066 = cljs.core.first.call(null,seq45065);
var seq45065__$1 = cljs.core.next.call(null,seq45065);
var G__45067 = cljs.core.first.call(null,seq45065__$1);
var seq45065__$2 = cljs.core.next.call(null,seq45065__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__45066,G__45067,seq45065__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__31503__auto__ = [];
var len__31496__auto___45102 = arguments.length;
var i__31497__auto___45103 = (0);
while(true){
if((i__31497__auto___45103 < len__31496__auto___45102)){
args__31503__auto__.push((arguments[i__31497__auto___45103]));

var G__45104 = (i__31497__auto___45103 + (1));
i__31497__auto___45103 = G__45104;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((1) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31504__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq45100){
var G__45101 = cljs.core.first.call(null,seq45100);
var seq45100__$1 = cljs.core.next.call(null,seq45100);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45101,seq45100__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__31503__auto__ = [];
var len__31496__auto___45107 = arguments.length;
var i__31497__auto___45108 = (0);
while(true){
if((i__31497__auto___45108 < len__31496__auto___45107)){
args__31503__auto__.push((arguments[i__31497__auto___45108]));

var G__45109 = (i__31497__auto___45108 + (1));
i__31497__auto___45108 = G__45109;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((1) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31504__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq45105){
var G__45106 = cljs.core.first.call(null,seq45105);
var seq45105__$1 = cljs.core.next.call(null,seq45105);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45106,seq45105__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__45111 = arguments.length;
switch (G__45111) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj45113 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30217__auto__ = start_index;
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return (0);
}
})()};
return obj45113;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__31503__auto__ = [];
var len__31496__auto___45121 = arguments.length;
var i__31497__auto___45122 = (0);
while(true){
if((i__31497__auto___45122 < len__31496__auto___45121)){
args__31503__auto__.push((arguments[i__31497__auto___45122]));

var G__45123 = (i__31497__auto___45122 + (1));
i__31497__auto___45122 = G__45123;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((1) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31504__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__45117){
var vec__45118 = p__45117;
var state_override_fn = cljs.core.nth.call(null,vec__45118,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq45115){
var G__45116 = cljs.core.first.call(null,seq45115);
var seq45115__$1 = cljs.core.next.call(null,seq45115);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__45116,seq45115__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__31344__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_45124_45127 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_45125_45128 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_45124_45127,_STAR_print_fn_STAR_45125_45128,sb__31344__auto__){
return (function (x__31345__auto__){
return sb__31344__auto__.append(x__31345__auto__);
});})(_STAR_print_newline_STAR_45124_45127,_STAR_print_fn_STAR_45125_45128,sb__31344__auto__))
;

try{var _STAR_print_level_STAR_45126_45129 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_45126_45129;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45125_45128;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45124_45127;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31344__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_45130 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_45130;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__45131 = name;
switch (G__45131) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__45133 = tag;
var html_tag = cljs.core.nth.call(null,vec__45133,(0),null);
var style = cljs.core.nth.call(null,vec__45133,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_45136 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_45136;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_45137 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_45138 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_45138;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_45137;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__45139 = initial_value;
var G__45140 = value.call(null);
initial_value = G__45139;
value = G__45140;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__45141 = initial_value;
var G__45142 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__45141;
value = G__45142;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__45143 = initial_value;
var G__45144 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__45143;
value = G__45144;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1515669762254
