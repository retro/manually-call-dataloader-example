// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30950__auto__ = (((value == null))?null:value);
var m__30951__auto__ = (devtools.format._header[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,value);
} else {
var m__30951__auto____$1 = (devtools.format._header["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30950__auto__ = (((value == null))?null:value);
var m__30951__auto__ = (devtools.format._has_body[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,value);
} else {
var m__30951__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30950__auto__ = (((value == null))?null:value);
var m__30951__auto__ = (devtools.format._body[goog.typeOf(x__30950__auto__)]);
if(!((m__30951__auto__ == null))){
return m__30951__auto__.call(null,value);
} else {
var m__30951__auto____$1 = (devtools.format._body["_"]);
if(!((m__30951__auto____$1 == null))){
return m__30951__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5457__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__5457__auto__)){
var o__43123__auto__ = temp__5457__auto__;
var temp__5457__auto____$1 = goog.object.get(o__43123__auto__,"formatters");
if(cljs.core.truth_(temp__5457__auto____$1)){
var o__43123__auto____$1 = temp__5457__auto____$1;
var temp__5457__auto____$2 = goog.object.get(o__43123__auto____$1,"templating");
if(cljs.core.truth_(temp__5457__auto____$2)){
var o__43122__auto__ = temp__5457__auto____$2;
return goog.object.get(o__43122__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5457__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__5457__auto__)){
var o__43123__auto__ = temp__5457__auto__;
var temp__5457__auto____$1 = goog.object.get(o__43123__auto__,"formatters");
if(cljs.core.truth_(temp__5457__auto____$1)){
var o__43123__auto____$1 = temp__5457__auto____$1;
var temp__5457__auto____$2 = goog.object.get(o__43123__auto____$1,"templating");
if(cljs.core.truth_(temp__5457__auto____$2)){
var o__43122__auto__ = temp__5457__auto____$2;
return goog.object.get(o__43122__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5457__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__5457__auto__)){
var o__43123__auto__ = temp__5457__auto__;
var temp__5457__auto____$1 = goog.object.get(o__43123__auto__,"formatters");
if(cljs.core.truth_(temp__5457__auto____$1)){
var o__43123__auto____$1 = temp__5457__auto____$1;
var temp__5457__auto____$2 = goog.object.get(o__43123__auto____$1,"templating");
if(cljs.core.truth_(temp__5457__auto____$2)){
var o__43122__auto__ = temp__5457__auto____$2;
return goog.object.get(o__43122__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5457__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__5457__auto__)){
var o__43123__auto__ = temp__5457__auto__;
var temp__5457__auto____$1 = goog.object.get(o__43123__auto__,"formatters");
if(cljs.core.truth_(temp__5457__auto____$1)){
var o__43123__auto____$1 = temp__5457__auto____$1;
var temp__5457__auto____$2 = goog.object.get(o__43123__auto____$1,"templating");
if(cljs.core.truth_(temp__5457__auto____$2)){
var o__43122__auto__ = temp__5457__auto____$2;
return goog.object.get(o__43122__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5457__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__5457__auto__)){
var o__43123__auto__ = temp__5457__auto__;
var temp__5457__auto____$1 = goog.object.get(o__43123__auto__,"formatters");
if(cljs.core.truth_(temp__5457__auto____$1)){
var o__43123__auto____$1 = temp__5457__auto____$1;
var temp__5457__auto____$2 = goog.object.get(o__43123__auto____$1,"templating");
if(cljs.core.truth_(temp__5457__auto____$2)){
var o__43122__auto__ = temp__5457__auto____$2;
return goog.object.get(o__43122__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5457__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__5457__auto__)){
var o__43123__auto__ = temp__5457__auto__;
var temp__5457__auto____$1 = goog.object.get(o__43123__auto__,"formatters");
if(cljs.core.truth_(temp__5457__auto____$1)){
var o__43123__auto____$1 = temp__5457__auto____$1;
var temp__5457__auto____$2 = goog.object.get(o__43123__auto____$1,"markup");
if(cljs.core.truth_(temp__5457__auto____$2)){
var o__43122__auto__ = temp__5457__auto____$2;
return goog.object.get(o__43122__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5457__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__5457__auto__)){
var o__43123__auto__ = temp__5457__auto__;
var temp__5457__auto____$1 = goog.object.get(o__43123__auto__,"formatters");
if(cljs.core.truth_(temp__5457__auto____$1)){
var o__43123__auto____$1 = temp__5457__auto____$1;
var temp__5457__auto____$2 = goog.object.get(o__43123__auto____$1,"markup");
if(cljs.core.truth_(temp__5457__auto____$2)){
var o__43122__auto__ = temp__5457__auto____$2;
return goog.object.get(o__43122__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31503__auto__ = [];
var len__31496__auto___43144 = arguments.length;
var i__31497__auto___43145 = (0);
while(true){
if((i__31497__auto___43145 < len__31496__auto___43144)){
args__31503__auto__.push((arguments[i__31497__auto___43145]));

var G__43146 = (i__31497__auto___43145 + (1));
i__31497__auto___43145 = G__43146;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq43143){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43143));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31503__auto__ = [];
var len__31496__auto___43148 = arguments.length;
var i__31497__auto___43149 = (0);
while(true){
if((i__31497__auto___43149 < len__31496__auto___43148)){
args__31503__auto__.push((arguments[i__31497__auto___43149]));

var G__43150 = (i__31497__auto___43149 + (1));
i__31497__auto___43149 = G__43150;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq43147){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43147));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31503__auto__ = [];
var len__31496__auto___43152 = arguments.length;
var i__31497__auto___43153 = (0);
while(true){
if((i__31497__auto___43153 < len__31496__auto___43152)){
args__31503__auto__.push((arguments[i__31497__auto___43153]));

var G__43154 = (i__31497__auto___43153 + (1));
i__31497__auto___43153 = G__43154;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq43151){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43151));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31503__auto__ = [];
var len__31496__auto___43156 = arguments.length;
var i__31497__auto___43157 = (0);
while(true){
if((i__31497__auto___43157 < len__31496__auto___43156)){
args__31503__auto__.push((arguments[i__31497__auto___43157]));

var G__43158 = (i__31497__auto___43157 + (1));
i__31497__auto___43157 = G__43158;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq43155){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43155));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31503__auto__ = [];
var len__31496__auto___43160 = arguments.length;
var i__31497__auto___43161 = (0);
while(true){
if((i__31497__auto___43161 < len__31496__auto___43160)){
args__31503__auto__.push((arguments[i__31497__auto___43161]));

var G__43162 = (i__31497__auto___43161 + (1));
i__31497__auto___43161 = G__43162;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq43159){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43159));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31503__auto__ = [];
var len__31496__auto___43164 = arguments.length;
var i__31497__auto___43165 = (0);
while(true){
if((i__31497__auto___43165 < len__31496__auto___43164)){
args__31503__auto__.push((arguments[i__31497__auto___43165]));

var G__43166 = (i__31497__auto___43165 + (1));
i__31497__auto___43165 = G__43166;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq43163){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43163));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31503__auto__ = [];
var len__31496__auto___43168 = arguments.length;
var i__31497__auto___43169 = (0);
while(true){
if((i__31497__auto___43169 < len__31496__auto___43168)){
args__31503__auto__.push((arguments[i__31497__auto___43169]));

var G__43170 = (i__31497__auto___43169 + (1));
i__31497__auto___43169 = G__43170;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq43167){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43167));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31503__auto__ = [];
var len__31496__auto___43178 = arguments.length;
var i__31497__auto___43179 = (0);
while(true){
if((i__31497__auto___43179 < len__31496__auto___43178)){
args__31503__auto__.push((arguments[i__31497__auto___43179]));

var G__43180 = (i__31497__auto___43179 + (1));
i__31497__auto___43179 = G__43180;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((1) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31504__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__43174){
var vec__43175 = p__43174;
var state_override = cljs.core.nth.call(null,vec__43175,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__43175,state_override){
return (function (p1__43171_SHARP_){
return cljs.core.merge.call(null,p1__43171_SHARP_,state_override);
});})(vec__43175,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq43172){
var G__43173 = cljs.core.first.call(null,seq43172);
var seq43172__$1 = cljs.core.next.call(null,seq43172);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__43173,seq43172__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31503__auto__ = [];
var len__31496__auto___43182 = arguments.length;
var i__31497__auto___43183 = (0);
while(true){
if((i__31497__auto___43183 < len__31496__auto___43182)){
args__31503__auto__.push((arguments[i__31497__auto___43183]));

var G__43184 = (i__31497__auto___43183 + (1));
i__31497__auto___43183 = G__43184;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((0) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31504__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq43181){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43181));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31503__auto__ = [];
var len__31496__auto___43187 = arguments.length;
var i__31497__auto___43188 = (0);
while(true){
if((i__31497__auto___43188 < len__31496__auto___43187)){
args__31503__auto__.push((arguments[i__31497__auto___43188]));

var G__43189 = (i__31497__auto___43188 + (1));
i__31497__auto___43188 = G__43189;
continue;
} else {
}
break;
}

var argseq__31504__auto__ = ((((1) < args__31503__auto__.length))?(new cljs.core.IndexedSeq(args__31503__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31504__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq43185){
var G__43186 = cljs.core.first.call(null,seq43185);
var seq43185__$1 = cljs.core.next.call(null,seq43185);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__43186,seq43185__$1);
});


//# sourceMappingURL=format.js.map?rel=1515669759517
