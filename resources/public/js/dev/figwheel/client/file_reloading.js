// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30217__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30217__auto__){
return or__30217__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30217__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
var or__30217__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30217__auto____$1)){
return or__30217__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39407_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39407_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39408 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39409 = null;
var count__39410 = (0);
var i__39411 = (0);
while(true){
if((i__39411 < count__39410)){
var n = cljs.core._nth.call(null,chunk__39409,i__39411);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39412 = seq__39408;
var G__39413 = chunk__39409;
var G__39414 = count__39410;
var G__39415 = (i__39411 + (1));
seq__39408 = G__39412;
chunk__39409 = G__39413;
count__39410 = G__39414;
i__39411 = G__39415;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39408);
if(temp__5457__auto__){
var seq__39408__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39408__$1)){
var c__31148__auto__ = cljs.core.chunk_first.call(null,seq__39408__$1);
var G__39416 = cljs.core.chunk_rest.call(null,seq__39408__$1);
var G__39417 = c__31148__auto__;
var G__39418 = cljs.core.count.call(null,c__31148__auto__);
var G__39419 = (0);
seq__39408 = G__39416;
chunk__39409 = G__39417;
count__39410 = G__39418;
i__39411 = G__39419;
continue;
} else {
var n = cljs.core.first.call(null,seq__39408__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39420 = cljs.core.next.call(null,seq__39408__$1);
var G__39421 = null;
var G__39422 = (0);
var G__39423 = (0);
seq__39408 = G__39420;
chunk__39409 = G__39421;
count__39410 = G__39422;
i__39411 = G__39423;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__39424){
var vec__39425 = p__39424;
var _ = cljs.core.nth.call(null,vec__39425,(0),null);
var v = cljs.core.nth.call(null,vec__39425,(1),null);
var and__30205__auto__ = v;
if(cljs.core.truth_(and__30205__auto__)){
return v.call(null,dep);
} else {
return and__30205__auto__;
}
}),cljs.core.filter.call(null,(function (p__39428){
var vec__39429 = p__39428;
var k = cljs.core.nth.call(null,vec__39429,(0),null);
var v = cljs.core.nth.call(null,vec__39429,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39441_39449 = cljs.core.seq.call(null,deps);
var chunk__39442_39450 = null;
var count__39443_39451 = (0);
var i__39444_39452 = (0);
while(true){
if((i__39444_39452 < count__39443_39451)){
var dep_39453 = cljs.core._nth.call(null,chunk__39442_39450,i__39444_39452);
if(cljs.core.truth_((function (){var and__30205__auto__ = dep_39453;
if(cljs.core.truth_(and__30205__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39453));
} else {
return and__30205__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39453,(depth + (1)),state);
} else {
}

var G__39454 = seq__39441_39449;
var G__39455 = chunk__39442_39450;
var G__39456 = count__39443_39451;
var G__39457 = (i__39444_39452 + (1));
seq__39441_39449 = G__39454;
chunk__39442_39450 = G__39455;
count__39443_39451 = G__39456;
i__39444_39452 = G__39457;
continue;
} else {
var temp__5457__auto___39458 = cljs.core.seq.call(null,seq__39441_39449);
if(temp__5457__auto___39458){
var seq__39441_39459__$1 = temp__5457__auto___39458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39441_39459__$1)){
var c__31148__auto___39460 = cljs.core.chunk_first.call(null,seq__39441_39459__$1);
var G__39461 = cljs.core.chunk_rest.call(null,seq__39441_39459__$1);
var G__39462 = c__31148__auto___39460;
var G__39463 = cljs.core.count.call(null,c__31148__auto___39460);
var G__39464 = (0);
seq__39441_39449 = G__39461;
chunk__39442_39450 = G__39462;
count__39443_39451 = G__39463;
i__39444_39452 = G__39464;
continue;
} else {
var dep_39465 = cljs.core.first.call(null,seq__39441_39459__$1);
if(cljs.core.truth_((function (){var and__30205__auto__ = dep_39465;
if(cljs.core.truth_(and__30205__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39465));
} else {
return and__30205__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39465,(depth + (1)),state);
} else {
}

var G__39466 = cljs.core.next.call(null,seq__39441_39459__$1);
var G__39467 = null;
var G__39468 = (0);
var G__39469 = (0);
seq__39441_39449 = G__39466;
chunk__39442_39450 = G__39467;
count__39443_39451 = G__39468;
i__39444_39452 = G__39469;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39445){
var vec__39446 = p__39445;
var seq__39447 = cljs.core.seq.call(null,vec__39446);
var first__39448 = cljs.core.first.call(null,seq__39447);
var seq__39447__$1 = cljs.core.next.call(null,seq__39447);
var x = first__39448;
var xs = seq__39447__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39446,seq__39447,first__39448,seq__39447__$1,x,xs,get_deps__$1){
return (function (p1__39432_SHARP_){
return clojure.set.difference.call(null,p1__39432_SHARP_,x);
});})(vec__39446,seq__39447,first__39448,seq__39447__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39470 = cljs.core.seq.call(null,provides);
var chunk__39471 = null;
var count__39472 = (0);
var i__39473 = (0);
while(true){
if((i__39473 < count__39472)){
var prov = cljs.core._nth.call(null,chunk__39471,i__39473);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39474_39482 = cljs.core.seq.call(null,requires);
var chunk__39475_39483 = null;
var count__39476_39484 = (0);
var i__39477_39485 = (0);
while(true){
if((i__39477_39485 < count__39476_39484)){
var req_39486 = cljs.core._nth.call(null,chunk__39475_39483,i__39477_39485);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39486,prov);

var G__39487 = seq__39474_39482;
var G__39488 = chunk__39475_39483;
var G__39489 = count__39476_39484;
var G__39490 = (i__39477_39485 + (1));
seq__39474_39482 = G__39487;
chunk__39475_39483 = G__39488;
count__39476_39484 = G__39489;
i__39477_39485 = G__39490;
continue;
} else {
var temp__5457__auto___39491 = cljs.core.seq.call(null,seq__39474_39482);
if(temp__5457__auto___39491){
var seq__39474_39492__$1 = temp__5457__auto___39491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39474_39492__$1)){
var c__31148__auto___39493 = cljs.core.chunk_first.call(null,seq__39474_39492__$1);
var G__39494 = cljs.core.chunk_rest.call(null,seq__39474_39492__$1);
var G__39495 = c__31148__auto___39493;
var G__39496 = cljs.core.count.call(null,c__31148__auto___39493);
var G__39497 = (0);
seq__39474_39482 = G__39494;
chunk__39475_39483 = G__39495;
count__39476_39484 = G__39496;
i__39477_39485 = G__39497;
continue;
} else {
var req_39498 = cljs.core.first.call(null,seq__39474_39492__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39498,prov);

var G__39499 = cljs.core.next.call(null,seq__39474_39492__$1);
var G__39500 = null;
var G__39501 = (0);
var G__39502 = (0);
seq__39474_39482 = G__39499;
chunk__39475_39483 = G__39500;
count__39476_39484 = G__39501;
i__39477_39485 = G__39502;
continue;
}
} else {
}
}
break;
}

var G__39503 = seq__39470;
var G__39504 = chunk__39471;
var G__39505 = count__39472;
var G__39506 = (i__39473 + (1));
seq__39470 = G__39503;
chunk__39471 = G__39504;
count__39472 = G__39505;
i__39473 = G__39506;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39470);
if(temp__5457__auto__){
var seq__39470__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39470__$1)){
var c__31148__auto__ = cljs.core.chunk_first.call(null,seq__39470__$1);
var G__39507 = cljs.core.chunk_rest.call(null,seq__39470__$1);
var G__39508 = c__31148__auto__;
var G__39509 = cljs.core.count.call(null,c__31148__auto__);
var G__39510 = (0);
seq__39470 = G__39507;
chunk__39471 = G__39508;
count__39472 = G__39509;
i__39473 = G__39510;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39470__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39478_39511 = cljs.core.seq.call(null,requires);
var chunk__39479_39512 = null;
var count__39480_39513 = (0);
var i__39481_39514 = (0);
while(true){
if((i__39481_39514 < count__39480_39513)){
var req_39515 = cljs.core._nth.call(null,chunk__39479_39512,i__39481_39514);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39515,prov);

var G__39516 = seq__39478_39511;
var G__39517 = chunk__39479_39512;
var G__39518 = count__39480_39513;
var G__39519 = (i__39481_39514 + (1));
seq__39478_39511 = G__39516;
chunk__39479_39512 = G__39517;
count__39480_39513 = G__39518;
i__39481_39514 = G__39519;
continue;
} else {
var temp__5457__auto___39520__$1 = cljs.core.seq.call(null,seq__39478_39511);
if(temp__5457__auto___39520__$1){
var seq__39478_39521__$1 = temp__5457__auto___39520__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39478_39521__$1)){
var c__31148__auto___39522 = cljs.core.chunk_first.call(null,seq__39478_39521__$1);
var G__39523 = cljs.core.chunk_rest.call(null,seq__39478_39521__$1);
var G__39524 = c__31148__auto___39522;
var G__39525 = cljs.core.count.call(null,c__31148__auto___39522);
var G__39526 = (0);
seq__39478_39511 = G__39523;
chunk__39479_39512 = G__39524;
count__39480_39513 = G__39525;
i__39481_39514 = G__39526;
continue;
} else {
var req_39527 = cljs.core.first.call(null,seq__39478_39521__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39527,prov);

var G__39528 = cljs.core.next.call(null,seq__39478_39521__$1);
var G__39529 = null;
var G__39530 = (0);
var G__39531 = (0);
seq__39478_39511 = G__39528;
chunk__39479_39512 = G__39529;
count__39480_39513 = G__39530;
i__39481_39514 = G__39531;
continue;
}
} else {
}
}
break;
}

var G__39532 = cljs.core.next.call(null,seq__39470__$1);
var G__39533 = null;
var G__39534 = (0);
var G__39535 = (0);
seq__39470 = G__39532;
chunk__39471 = G__39533;
count__39472 = G__39534;
i__39473 = G__39535;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39536_39540 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39537_39541 = null;
var count__39538_39542 = (0);
var i__39539_39543 = (0);
while(true){
if((i__39539_39543 < count__39538_39542)){
var ns_39544 = cljs.core._nth.call(null,chunk__39537_39541,i__39539_39543);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39544);

var G__39545 = seq__39536_39540;
var G__39546 = chunk__39537_39541;
var G__39547 = count__39538_39542;
var G__39548 = (i__39539_39543 + (1));
seq__39536_39540 = G__39545;
chunk__39537_39541 = G__39546;
count__39538_39542 = G__39547;
i__39539_39543 = G__39548;
continue;
} else {
var temp__5457__auto___39549 = cljs.core.seq.call(null,seq__39536_39540);
if(temp__5457__auto___39549){
var seq__39536_39550__$1 = temp__5457__auto___39549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39536_39550__$1)){
var c__31148__auto___39551 = cljs.core.chunk_first.call(null,seq__39536_39550__$1);
var G__39552 = cljs.core.chunk_rest.call(null,seq__39536_39550__$1);
var G__39553 = c__31148__auto___39551;
var G__39554 = cljs.core.count.call(null,c__31148__auto___39551);
var G__39555 = (0);
seq__39536_39540 = G__39552;
chunk__39537_39541 = G__39553;
count__39538_39542 = G__39554;
i__39539_39543 = G__39555;
continue;
} else {
var ns_39556 = cljs.core.first.call(null,seq__39536_39550__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39556);

var G__39557 = cljs.core.next.call(null,seq__39536_39550__$1);
var G__39558 = null;
var G__39559 = (0);
var G__39560 = (0);
seq__39536_39540 = G__39557;
chunk__39537_39541 = G__39558;
count__39538_39542 = G__39559;
i__39539_39543 = G__39560;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30217__auto__ = goog.require__;
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39561__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39562__i = 0, G__39562__a = new Array(arguments.length -  0);
while (G__39562__i < G__39562__a.length) {G__39562__a[G__39562__i] = arguments[G__39562__i + 0]; ++G__39562__i;}
  args = new cljs.core.IndexedSeq(G__39562__a,0,null);
} 
return G__39561__delegate.call(this,args);};
G__39561.cljs$lang$maxFixedArity = 0;
G__39561.cljs$lang$applyTo = (function (arglist__39563){
var args = cljs.core.seq(arglist__39563);
return G__39561__delegate(args);
});
G__39561.cljs$core$IFn$_invoke$arity$variadic = G__39561__delegate;
return G__39561;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__39564_SHARP_,p2__39565_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39564_SHARP_)].join('')),p2__39565_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__39566_SHARP_,p2__39567_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39566_SHARP_)].join(''),p2__39567_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__39568 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39568.addCallback(((function (G__39568){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__39568))
);

G__39568.addErrback(((function (G__39568){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__39568))
);

return G__39568;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39569){if((e39569 instanceof Error)){
var e = e39569;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39569;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39570){if((e39570 instanceof Error)){
var e = e39570;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39570;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39571 = cljs.core._EQ_;
var expr__39572 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39571.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39572))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__39571.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39572))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__39571.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39572))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__39571,expr__39572){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39571,expr__39572))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39574,callback){
var map__39575 = p__39574;
var map__39575__$1 = ((((!((map__39575 == null)))?((((map__39575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39575):map__39575);
var file_msg = map__39575__$1;
var request_url = cljs.core.get.call(null,map__39575__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30217__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__39575,map__39575__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39575,map__39575__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__){
return (function (state_39615){
var state_val_39616 = (state_39615[(1)]);
if((state_val_39616 === (7))){
var inst_39611 = (state_39615[(2)]);
var state_39615__$1 = state_39615;
var statearr_39617_39644 = state_39615__$1;
(statearr_39617_39644[(2)] = inst_39611);

(statearr_39617_39644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (1))){
var state_39615__$1 = state_39615;
var statearr_39618_39645 = state_39615__$1;
(statearr_39618_39645[(2)] = null);

(statearr_39618_39645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (4))){
var inst_39579 = (state_39615[(7)]);
var inst_39579__$1 = (state_39615[(2)]);
var state_39615__$1 = (function (){var statearr_39619 = state_39615;
(statearr_39619[(7)] = inst_39579__$1);

return statearr_39619;
})();
if(cljs.core.truth_(inst_39579__$1)){
var statearr_39620_39646 = state_39615__$1;
(statearr_39620_39646[(1)] = (5));

} else {
var statearr_39621_39647 = state_39615__$1;
(statearr_39621_39647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (15))){
var inst_39593 = (state_39615[(8)]);
var inst_39596 = (state_39615[(9)]);
var inst_39598 = inst_39596.call(null,inst_39593);
var state_39615__$1 = state_39615;
var statearr_39622_39648 = state_39615__$1;
(statearr_39622_39648[(2)] = inst_39598);

(statearr_39622_39648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (13))){
var inst_39605 = (state_39615[(2)]);
var state_39615__$1 = state_39615;
var statearr_39623_39649 = state_39615__$1;
(statearr_39623_39649[(2)] = inst_39605);

(statearr_39623_39649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (6))){
var state_39615__$1 = state_39615;
var statearr_39624_39650 = state_39615__$1;
(statearr_39624_39650[(2)] = null);

(statearr_39624_39650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (17))){
var inst_39602 = (state_39615[(2)]);
var state_39615__$1 = state_39615;
var statearr_39625_39651 = state_39615__$1;
(statearr_39625_39651[(2)] = inst_39602);

(statearr_39625_39651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (3))){
var inst_39613 = (state_39615[(2)]);
var state_39615__$1 = state_39615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39615__$1,inst_39613);
} else {
if((state_val_39616 === (12))){
var state_39615__$1 = state_39615;
var statearr_39626_39652 = state_39615__$1;
(statearr_39626_39652[(2)] = null);

(statearr_39626_39652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (2))){
var state_39615__$1 = state_39615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39615__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39616 === (11))){
var inst_39584 = (state_39615[(10)]);
var inst_39591 = figwheel.client.file_reloading.blocking_load.call(null,inst_39584);
var state_39615__$1 = state_39615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39615__$1,(14),inst_39591);
} else {
if((state_val_39616 === (9))){
var inst_39584 = (state_39615[(10)]);
var state_39615__$1 = state_39615;
if(cljs.core.truth_(inst_39584)){
var statearr_39627_39653 = state_39615__$1;
(statearr_39627_39653[(1)] = (11));

} else {
var statearr_39628_39654 = state_39615__$1;
(statearr_39628_39654[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (5))){
var inst_39579 = (state_39615[(7)]);
var inst_39585 = (state_39615[(11)]);
var inst_39584 = cljs.core.nth.call(null,inst_39579,(0),null);
var inst_39585__$1 = cljs.core.nth.call(null,inst_39579,(1),null);
var state_39615__$1 = (function (){var statearr_39629 = state_39615;
(statearr_39629[(10)] = inst_39584);

(statearr_39629[(11)] = inst_39585__$1);

return statearr_39629;
})();
if(cljs.core.truth_(inst_39585__$1)){
var statearr_39630_39655 = state_39615__$1;
(statearr_39630_39655[(1)] = (8));

} else {
var statearr_39631_39656 = state_39615__$1;
(statearr_39631_39656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (14))){
var inst_39584 = (state_39615[(10)]);
var inst_39596 = (state_39615[(9)]);
var inst_39593 = (state_39615[(2)]);
var inst_39594 = console.log("Loading!",inst_39584);
var inst_39595 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39596__$1 = cljs.core.get.call(null,inst_39595,inst_39584);
var state_39615__$1 = (function (){var statearr_39632 = state_39615;
(statearr_39632[(12)] = inst_39594);

(statearr_39632[(8)] = inst_39593);

(statearr_39632[(9)] = inst_39596__$1);

return statearr_39632;
})();
if(cljs.core.truth_(inst_39596__$1)){
var statearr_39633_39657 = state_39615__$1;
(statearr_39633_39657[(1)] = (15));

} else {
var statearr_39634_39658 = state_39615__$1;
(statearr_39634_39658[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (16))){
var inst_39593 = (state_39615[(8)]);
var inst_39600 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39593);
var state_39615__$1 = state_39615;
var statearr_39635_39659 = state_39615__$1;
(statearr_39635_39659[(2)] = inst_39600);

(statearr_39635_39659[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (10))){
var inst_39607 = (state_39615[(2)]);
var state_39615__$1 = (function (){var statearr_39636 = state_39615;
(statearr_39636[(13)] = inst_39607);

return statearr_39636;
})();
var statearr_39637_39660 = state_39615__$1;
(statearr_39637_39660[(2)] = null);

(statearr_39637_39660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (8))){
var inst_39585 = (state_39615[(11)]);
var inst_39587 = console.log("Evaling!",inst_39585);
var inst_39588 = eval(inst_39585);
var state_39615__$1 = (function (){var statearr_39638 = state_39615;
(statearr_39638[(14)] = inst_39587);

return statearr_39638;
})();
var statearr_39639_39661 = state_39615__$1;
(statearr_39639_39661[(2)] = inst_39588);

(statearr_39639_39661[(1)] = (10));


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
});})(c__33899__auto__))
;
return ((function (switch__33809__auto__,c__33899__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33810__auto__ = null;
var figwheel$client$file_reloading$state_machine__33810__auto____0 = (function (){
var statearr_39640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39640[(0)] = figwheel$client$file_reloading$state_machine__33810__auto__);

(statearr_39640[(1)] = (1));

return statearr_39640;
});
var figwheel$client$file_reloading$state_machine__33810__auto____1 = (function (state_39615){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_39615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e39641){if((e39641 instanceof Object)){
var ex__33813__auto__ = e39641;
var statearr_39642_39662 = state_39615;
(statearr_39642_39662[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39663 = state_39615;
state_39615 = G__39663;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33810__auto__ = function(state_39615){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33810__auto____1.call(this,state_39615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33810__auto____0;
figwheel$client$file_reloading$state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33810__auto____1;
return figwheel$client$file_reloading$state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__))
})();
var state__33901__auto__ = (function (){var statearr_39643 = f__33900__auto__.call(null);
(statearr_39643[(6)] = c__33899__auto__);

return statearr_39643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__))
);

return c__33899__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__39665 = arguments.length;
switch (G__39665) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39667,callback){
var map__39668 = p__39667;
var map__39668__$1 = ((((!((map__39668 == null)))?((((map__39668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39668):map__39668);
var file_msg = map__39668__$1;
var namespace = cljs.core.get.call(null,map__39668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39668,map__39668__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39668,map__39668__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39670){
var map__39671 = p__39670;
var map__39671__$1 = ((((!((map__39671 == null)))?((((map__39671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39671):map__39671);
var file_msg = map__39671__$1;
var namespace = cljs.core.get.call(null,map__39671__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39673){
var map__39674 = p__39673;
var map__39674__$1 = ((((!((map__39674 == null)))?((((map__39674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39674):map__39674);
var file_msg = map__39674__$1;
var namespace = cljs.core.get.call(null,map__39674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30205__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30205__auto__){
var or__30217__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
var or__30217__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30217__auto____$1)){
return or__30217__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30205__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39676,callback){
var map__39677 = p__39676;
var map__39677__$1 = ((((!((map__39677 == null)))?((((map__39677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39677):map__39677);
var file_msg = map__39677__$1;
var request_url = cljs.core.get.call(null,map__39677__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39677__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33899__auto___39727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto___39727,out){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto___39727,out){
return (function (state_39712){
var state_val_39713 = (state_39712[(1)]);
if((state_val_39713 === (1))){
var inst_39686 = cljs.core.seq.call(null,files);
var inst_39687 = cljs.core.first.call(null,inst_39686);
var inst_39688 = cljs.core.next.call(null,inst_39686);
var inst_39689 = files;
var state_39712__$1 = (function (){var statearr_39714 = state_39712;
(statearr_39714[(7)] = inst_39688);

(statearr_39714[(8)] = inst_39687);

(statearr_39714[(9)] = inst_39689);

return statearr_39714;
})();
var statearr_39715_39728 = state_39712__$1;
(statearr_39715_39728[(2)] = null);

(statearr_39715_39728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (2))){
var inst_39695 = (state_39712[(10)]);
var inst_39689 = (state_39712[(9)]);
var inst_39694 = cljs.core.seq.call(null,inst_39689);
var inst_39695__$1 = cljs.core.first.call(null,inst_39694);
var inst_39696 = cljs.core.next.call(null,inst_39694);
var inst_39697 = (inst_39695__$1 == null);
var inst_39698 = cljs.core.not.call(null,inst_39697);
var state_39712__$1 = (function (){var statearr_39716 = state_39712;
(statearr_39716[(10)] = inst_39695__$1);

(statearr_39716[(11)] = inst_39696);

return statearr_39716;
})();
if(inst_39698){
var statearr_39717_39729 = state_39712__$1;
(statearr_39717_39729[(1)] = (4));

} else {
var statearr_39718_39730 = state_39712__$1;
(statearr_39718_39730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (3))){
var inst_39710 = (state_39712[(2)]);
var state_39712__$1 = state_39712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39712__$1,inst_39710);
} else {
if((state_val_39713 === (4))){
var inst_39695 = (state_39712[(10)]);
var inst_39700 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39695);
var state_39712__$1 = state_39712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39712__$1,(7),inst_39700);
} else {
if((state_val_39713 === (5))){
var inst_39706 = cljs.core.async.close_BANG_.call(null,out);
var state_39712__$1 = state_39712;
var statearr_39719_39731 = state_39712__$1;
(statearr_39719_39731[(2)] = inst_39706);

(statearr_39719_39731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (6))){
var inst_39708 = (state_39712[(2)]);
var state_39712__$1 = state_39712;
var statearr_39720_39732 = state_39712__$1;
(statearr_39720_39732[(2)] = inst_39708);

(statearr_39720_39732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (7))){
var inst_39696 = (state_39712[(11)]);
var inst_39702 = (state_39712[(2)]);
var inst_39703 = cljs.core.async.put_BANG_.call(null,out,inst_39702);
var inst_39689 = inst_39696;
var state_39712__$1 = (function (){var statearr_39721 = state_39712;
(statearr_39721[(12)] = inst_39703);

(statearr_39721[(9)] = inst_39689);

return statearr_39721;
})();
var statearr_39722_39733 = state_39712__$1;
(statearr_39722_39733[(2)] = null);

(statearr_39722_39733[(1)] = (2));


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
});})(c__33899__auto___39727,out))
;
return ((function (switch__33809__auto__,c__33899__auto___39727,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto____0 = (function (){
var statearr_39723 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39723[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto__);

(statearr_39723[(1)] = (1));

return statearr_39723;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto____1 = (function (state_39712){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_39712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e39724){if((e39724 instanceof Object)){
var ex__33813__auto__ = e39724;
var statearr_39725_39734 = state_39712;
(statearr_39725_39734[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39735 = state_39712;
state_39712 = G__39735;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto__ = function(state_39712){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto____1.call(this,state_39712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto___39727,out))
})();
var state__33901__auto__ = (function (){var statearr_39726 = f__33900__auto__.call(null);
(statearr_39726[(6)] = c__33899__auto___39727);

return statearr_39726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto___39727,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39736,opts){
var map__39737 = p__39736;
var map__39737__$1 = ((((!((map__39737 == null)))?((((map__39737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39737):map__39737);
var eval_body = cljs.core.get.call(null,map__39737__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30205__auto__ = eval_body;
if(cljs.core.truth_(and__30205__auto__)){
return typeof eval_body === 'string';
} else {
return and__30205__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39739){var e = e39739;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39740_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39740_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39741){
var vec__39742 = p__39741;
var k = cljs.core.nth.call(null,vec__39742,(0),null);
var v = cljs.core.nth.call(null,vec__39742,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39745){
var vec__39746 = p__39745;
var k = cljs.core.nth.call(null,vec__39746,(0),null);
var v = cljs.core.nth.call(null,vec__39746,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39752,p__39753){
var map__39754 = p__39752;
var map__39754__$1 = ((((!((map__39754 == null)))?((((map__39754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39754):map__39754);
var opts = map__39754__$1;
var before_jsload = cljs.core.get.call(null,map__39754__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39754__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39754__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39755 = p__39753;
var map__39755__$1 = ((((!((map__39755 == null)))?((((map__39755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39755):map__39755);
var msg = map__39755__$1;
var files = cljs.core.get.call(null,map__39755__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39755__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39755__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33899__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33900__auto__ = (function (){var switch__33809__auto__ = ((function (c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39909){
var state_val_39910 = (state_39909[(1)]);
if((state_val_39910 === (7))){
var inst_39769 = (state_39909[(7)]);
var inst_39771 = (state_39909[(8)]);
var inst_39772 = (state_39909[(9)]);
var inst_39770 = (state_39909[(10)]);
var inst_39777 = cljs.core._nth.call(null,inst_39770,inst_39772);
var inst_39778 = figwheel.client.file_reloading.eval_body.call(null,inst_39777,opts);
var inst_39779 = (inst_39772 + (1));
var tmp39911 = inst_39769;
var tmp39912 = inst_39771;
var tmp39913 = inst_39770;
var inst_39769__$1 = tmp39911;
var inst_39770__$1 = tmp39913;
var inst_39771__$1 = tmp39912;
var inst_39772__$1 = inst_39779;
var state_39909__$1 = (function (){var statearr_39914 = state_39909;
(statearr_39914[(7)] = inst_39769__$1);

(statearr_39914[(11)] = inst_39778);

(statearr_39914[(8)] = inst_39771__$1);

(statearr_39914[(9)] = inst_39772__$1);

(statearr_39914[(10)] = inst_39770__$1);

return statearr_39914;
})();
var statearr_39915_39998 = state_39909__$1;
(statearr_39915_39998[(2)] = null);

(statearr_39915_39998[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (20))){
var inst_39812 = (state_39909[(12)]);
var inst_39820 = figwheel.client.file_reloading.sort_files.call(null,inst_39812);
var state_39909__$1 = state_39909;
var statearr_39916_39999 = state_39909__$1;
(statearr_39916_39999[(2)] = inst_39820);

(statearr_39916_39999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (27))){
var state_39909__$1 = state_39909;
var statearr_39917_40000 = state_39909__$1;
(statearr_39917_40000[(2)] = null);

(statearr_39917_40000[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (1))){
var inst_39761 = (state_39909[(13)]);
var inst_39758 = before_jsload.call(null,files);
var inst_39759 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39760 = (function (){return ((function (inst_39761,inst_39758,inst_39759,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39749_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39749_SHARP_);
});
;})(inst_39761,inst_39758,inst_39759,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39761__$1 = cljs.core.filter.call(null,inst_39760,files);
var inst_39762 = cljs.core.not_empty.call(null,inst_39761__$1);
var state_39909__$1 = (function (){var statearr_39918 = state_39909;
(statearr_39918[(13)] = inst_39761__$1);

(statearr_39918[(14)] = inst_39759);

(statearr_39918[(15)] = inst_39758);

return statearr_39918;
})();
if(cljs.core.truth_(inst_39762)){
var statearr_39919_40001 = state_39909__$1;
(statearr_39919_40001[(1)] = (2));

} else {
var statearr_39920_40002 = state_39909__$1;
(statearr_39920_40002[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (24))){
var state_39909__$1 = state_39909;
var statearr_39921_40003 = state_39909__$1;
(statearr_39921_40003[(2)] = null);

(statearr_39921_40003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (39))){
var inst_39862 = (state_39909[(16)]);
var state_39909__$1 = state_39909;
var statearr_39922_40004 = state_39909__$1;
(statearr_39922_40004[(2)] = inst_39862);

(statearr_39922_40004[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (46))){
var inst_39904 = (state_39909[(2)]);
var state_39909__$1 = state_39909;
var statearr_39923_40005 = state_39909__$1;
(statearr_39923_40005[(2)] = inst_39904);

(statearr_39923_40005[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (4))){
var inst_39806 = (state_39909[(2)]);
var inst_39807 = cljs.core.List.EMPTY;
var inst_39808 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39807);
var inst_39809 = (function (){return ((function (inst_39806,inst_39807,inst_39808,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39750_SHARP_){
var and__30205__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39750_SHARP_);
if(cljs.core.truth_(and__30205__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39750_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39750_SHARP_)));
} else {
return and__30205__auto__;
}
});
;})(inst_39806,inst_39807,inst_39808,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39810 = cljs.core.filter.call(null,inst_39809,files);
var inst_39811 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39812 = cljs.core.concat.call(null,inst_39810,inst_39811);
var state_39909__$1 = (function (){var statearr_39924 = state_39909;
(statearr_39924[(17)] = inst_39808);

(statearr_39924[(12)] = inst_39812);

(statearr_39924[(18)] = inst_39806);

return statearr_39924;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39925_40006 = state_39909__$1;
(statearr_39925_40006[(1)] = (16));

} else {
var statearr_39926_40007 = state_39909__$1;
(statearr_39926_40007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (15))){
var inst_39796 = (state_39909[(2)]);
var state_39909__$1 = state_39909;
var statearr_39927_40008 = state_39909__$1;
(statearr_39927_40008[(2)] = inst_39796);

(statearr_39927_40008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (21))){
var inst_39822 = (state_39909[(19)]);
var inst_39822__$1 = (state_39909[(2)]);
var inst_39823 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39822__$1);
var state_39909__$1 = (function (){var statearr_39928 = state_39909;
(statearr_39928[(19)] = inst_39822__$1);

return statearr_39928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39909__$1,(22),inst_39823);
} else {
if((state_val_39910 === (31))){
var inst_39907 = (state_39909[(2)]);
var state_39909__$1 = state_39909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39909__$1,inst_39907);
} else {
if((state_val_39910 === (32))){
var inst_39862 = (state_39909[(16)]);
var inst_39867 = inst_39862.cljs$lang$protocol_mask$partition0$;
var inst_39868 = (inst_39867 & (64));
var inst_39869 = inst_39862.cljs$core$ISeq$;
var inst_39870 = (cljs.core.PROTOCOL_SENTINEL === inst_39869);
var inst_39871 = (inst_39868) || (inst_39870);
var state_39909__$1 = state_39909;
if(cljs.core.truth_(inst_39871)){
var statearr_39929_40009 = state_39909__$1;
(statearr_39929_40009[(1)] = (35));

} else {
var statearr_39930_40010 = state_39909__$1;
(statearr_39930_40010[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (40))){
var inst_39884 = (state_39909[(20)]);
var inst_39883 = (state_39909[(2)]);
var inst_39884__$1 = cljs.core.get.call(null,inst_39883,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39885 = cljs.core.get.call(null,inst_39883,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39886 = cljs.core.not_empty.call(null,inst_39884__$1);
var state_39909__$1 = (function (){var statearr_39931 = state_39909;
(statearr_39931[(21)] = inst_39885);

(statearr_39931[(20)] = inst_39884__$1);

return statearr_39931;
})();
if(cljs.core.truth_(inst_39886)){
var statearr_39932_40011 = state_39909__$1;
(statearr_39932_40011[(1)] = (41));

} else {
var statearr_39933_40012 = state_39909__$1;
(statearr_39933_40012[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (33))){
var state_39909__$1 = state_39909;
var statearr_39934_40013 = state_39909__$1;
(statearr_39934_40013[(2)] = false);

(statearr_39934_40013[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (13))){
var inst_39782 = (state_39909[(22)]);
var inst_39786 = cljs.core.chunk_first.call(null,inst_39782);
var inst_39787 = cljs.core.chunk_rest.call(null,inst_39782);
var inst_39788 = cljs.core.count.call(null,inst_39786);
var inst_39769 = inst_39787;
var inst_39770 = inst_39786;
var inst_39771 = inst_39788;
var inst_39772 = (0);
var state_39909__$1 = (function (){var statearr_39935 = state_39909;
(statearr_39935[(7)] = inst_39769);

(statearr_39935[(8)] = inst_39771);

(statearr_39935[(9)] = inst_39772);

(statearr_39935[(10)] = inst_39770);

return statearr_39935;
})();
var statearr_39936_40014 = state_39909__$1;
(statearr_39936_40014[(2)] = null);

(statearr_39936_40014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (22))){
var inst_39822 = (state_39909[(19)]);
var inst_39830 = (state_39909[(23)]);
var inst_39826 = (state_39909[(24)]);
var inst_39825 = (state_39909[(25)]);
var inst_39825__$1 = (state_39909[(2)]);
var inst_39826__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39825__$1);
var inst_39827 = (function (){var all_files = inst_39822;
var res_SINGLEQUOTE_ = inst_39825__$1;
var res = inst_39826__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39822,inst_39830,inst_39826,inst_39825,inst_39825__$1,inst_39826__$1,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39751_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39751_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39822,inst_39830,inst_39826,inst_39825,inst_39825__$1,inst_39826__$1,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39828 = cljs.core.filter.call(null,inst_39827,inst_39825__$1);
var inst_39829 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39830__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39829);
var inst_39831 = cljs.core.not_empty.call(null,inst_39830__$1);
var state_39909__$1 = (function (){var statearr_39937 = state_39909;
(statearr_39937[(23)] = inst_39830__$1);

(statearr_39937[(24)] = inst_39826__$1);

(statearr_39937[(26)] = inst_39828);

(statearr_39937[(25)] = inst_39825__$1);

return statearr_39937;
})();
if(cljs.core.truth_(inst_39831)){
var statearr_39938_40015 = state_39909__$1;
(statearr_39938_40015[(1)] = (23));

} else {
var statearr_39939_40016 = state_39909__$1;
(statearr_39939_40016[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (36))){
var state_39909__$1 = state_39909;
var statearr_39940_40017 = state_39909__$1;
(statearr_39940_40017[(2)] = false);

(statearr_39940_40017[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (41))){
var inst_39884 = (state_39909[(20)]);
var inst_39888 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39889 = cljs.core.map.call(null,inst_39888,inst_39884);
var inst_39890 = cljs.core.pr_str.call(null,inst_39889);
var inst_39891 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39890)].join('');
var inst_39892 = figwheel.client.utils.log.call(null,inst_39891);
var state_39909__$1 = state_39909;
var statearr_39941_40018 = state_39909__$1;
(statearr_39941_40018[(2)] = inst_39892);

(statearr_39941_40018[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (43))){
var inst_39885 = (state_39909[(21)]);
var inst_39895 = (state_39909[(2)]);
var inst_39896 = cljs.core.not_empty.call(null,inst_39885);
var state_39909__$1 = (function (){var statearr_39942 = state_39909;
(statearr_39942[(27)] = inst_39895);

return statearr_39942;
})();
if(cljs.core.truth_(inst_39896)){
var statearr_39943_40019 = state_39909__$1;
(statearr_39943_40019[(1)] = (44));

} else {
var statearr_39944_40020 = state_39909__$1;
(statearr_39944_40020[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (29))){
var inst_39822 = (state_39909[(19)]);
var inst_39830 = (state_39909[(23)]);
var inst_39826 = (state_39909[(24)]);
var inst_39828 = (state_39909[(26)]);
var inst_39825 = (state_39909[(25)]);
var inst_39862 = (state_39909[(16)]);
var inst_39858 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39861 = (function (){var all_files = inst_39822;
var res_SINGLEQUOTE_ = inst_39825;
var res = inst_39826;
var files_not_loaded = inst_39828;
var dependencies_that_loaded = inst_39830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39830,inst_39826,inst_39828,inst_39825,inst_39862,inst_39858,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39860){
var map__39945 = p__39860;
var map__39945__$1 = ((((!((map__39945 == null)))?((((map__39945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39945):map__39945);
var namespace = cljs.core.get.call(null,map__39945__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39830,inst_39826,inst_39828,inst_39825,inst_39862,inst_39858,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39862__$1 = cljs.core.group_by.call(null,inst_39861,inst_39828);
var inst_39864 = (inst_39862__$1 == null);
var inst_39865 = cljs.core.not.call(null,inst_39864);
var state_39909__$1 = (function (){var statearr_39947 = state_39909;
(statearr_39947[(28)] = inst_39858);

(statearr_39947[(16)] = inst_39862__$1);

return statearr_39947;
})();
if(inst_39865){
var statearr_39948_40021 = state_39909__$1;
(statearr_39948_40021[(1)] = (32));

} else {
var statearr_39949_40022 = state_39909__$1;
(statearr_39949_40022[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (44))){
var inst_39885 = (state_39909[(21)]);
var inst_39898 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39885);
var inst_39899 = cljs.core.pr_str.call(null,inst_39898);
var inst_39900 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39899)].join('');
var inst_39901 = figwheel.client.utils.log.call(null,inst_39900);
var state_39909__$1 = state_39909;
var statearr_39950_40023 = state_39909__$1;
(statearr_39950_40023[(2)] = inst_39901);

(statearr_39950_40023[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (6))){
var inst_39803 = (state_39909[(2)]);
var state_39909__$1 = state_39909;
var statearr_39951_40024 = state_39909__$1;
(statearr_39951_40024[(2)] = inst_39803);

(statearr_39951_40024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (28))){
var inst_39828 = (state_39909[(26)]);
var inst_39855 = (state_39909[(2)]);
var inst_39856 = cljs.core.not_empty.call(null,inst_39828);
var state_39909__$1 = (function (){var statearr_39952 = state_39909;
(statearr_39952[(29)] = inst_39855);

return statearr_39952;
})();
if(cljs.core.truth_(inst_39856)){
var statearr_39953_40025 = state_39909__$1;
(statearr_39953_40025[(1)] = (29));

} else {
var statearr_39954_40026 = state_39909__$1;
(statearr_39954_40026[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (25))){
var inst_39826 = (state_39909[(24)]);
var inst_39842 = (state_39909[(2)]);
var inst_39843 = cljs.core.not_empty.call(null,inst_39826);
var state_39909__$1 = (function (){var statearr_39955 = state_39909;
(statearr_39955[(30)] = inst_39842);

return statearr_39955;
})();
if(cljs.core.truth_(inst_39843)){
var statearr_39956_40027 = state_39909__$1;
(statearr_39956_40027[(1)] = (26));

} else {
var statearr_39957_40028 = state_39909__$1;
(statearr_39957_40028[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (34))){
var inst_39878 = (state_39909[(2)]);
var state_39909__$1 = state_39909;
if(cljs.core.truth_(inst_39878)){
var statearr_39958_40029 = state_39909__$1;
(statearr_39958_40029[(1)] = (38));

} else {
var statearr_39959_40030 = state_39909__$1;
(statearr_39959_40030[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (17))){
var state_39909__$1 = state_39909;
var statearr_39960_40031 = state_39909__$1;
(statearr_39960_40031[(2)] = recompile_dependents);

(statearr_39960_40031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (3))){
var state_39909__$1 = state_39909;
var statearr_39961_40032 = state_39909__$1;
(statearr_39961_40032[(2)] = null);

(statearr_39961_40032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (12))){
var inst_39799 = (state_39909[(2)]);
var state_39909__$1 = state_39909;
var statearr_39962_40033 = state_39909__$1;
(statearr_39962_40033[(2)] = inst_39799);

(statearr_39962_40033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (2))){
var inst_39761 = (state_39909[(13)]);
var inst_39768 = cljs.core.seq.call(null,inst_39761);
var inst_39769 = inst_39768;
var inst_39770 = null;
var inst_39771 = (0);
var inst_39772 = (0);
var state_39909__$1 = (function (){var statearr_39963 = state_39909;
(statearr_39963[(7)] = inst_39769);

(statearr_39963[(8)] = inst_39771);

(statearr_39963[(9)] = inst_39772);

(statearr_39963[(10)] = inst_39770);

return statearr_39963;
})();
var statearr_39964_40034 = state_39909__$1;
(statearr_39964_40034[(2)] = null);

(statearr_39964_40034[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (23))){
var inst_39822 = (state_39909[(19)]);
var inst_39830 = (state_39909[(23)]);
var inst_39826 = (state_39909[(24)]);
var inst_39828 = (state_39909[(26)]);
var inst_39825 = (state_39909[(25)]);
var inst_39833 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39835 = (function (){var all_files = inst_39822;
var res_SINGLEQUOTE_ = inst_39825;
var res = inst_39826;
var files_not_loaded = inst_39828;
var dependencies_that_loaded = inst_39830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39830,inst_39826,inst_39828,inst_39825,inst_39833,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39834){
var map__39965 = p__39834;
var map__39965__$1 = ((((!((map__39965 == null)))?((((map__39965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39965):map__39965);
var request_url = cljs.core.get.call(null,map__39965__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39830,inst_39826,inst_39828,inst_39825,inst_39833,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39836 = cljs.core.reverse.call(null,inst_39830);
var inst_39837 = cljs.core.map.call(null,inst_39835,inst_39836);
var inst_39838 = cljs.core.pr_str.call(null,inst_39837);
var inst_39839 = figwheel.client.utils.log.call(null,inst_39838);
var state_39909__$1 = (function (){var statearr_39967 = state_39909;
(statearr_39967[(31)] = inst_39833);

return statearr_39967;
})();
var statearr_39968_40035 = state_39909__$1;
(statearr_39968_40035[(2)] = inst_39839);

(statearr_39968_40035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (35))){
var state_39909__$1 = state_39909;
var statearr_39969_40036 = state_39909__$1;
(statearr_39969_40036[(2)] = true);

(statearr_39969_40036[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (19))){
var inst_39812 = (state_39909[(12)]);
var inst_39818 = figwheel.client.file_reloading.expand_files.call(null,inst_39812);
var state_39909__$1 = state_39909;
var statearr_39970_40037 = state_39909__$1;
(statearr_39970_40037[(2)] = inst_39818);

(statearr_39970_40037[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (11))){
var state_39909__$1 = state_39909;
var statearr_39971_40038 = state_39909__$1;
(statearr_39971_40038[(2)] = null);

(statearr_39971_40038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (9))){
var inst_39801 = (state_39909[(2)]);
var state_39909__$1 = state_39909;
var statearr_39972_40039 = state_39909__$1;
(statearr_39972_40039[(2)] = inst_39801);

(statearr_39972_40039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (5))){
var inst_39771 = (state_39909[(8)]);
var inst_39772 = (state_39909[(9)]);
var inst_39774 = (inst_39772 < inst_39771);
var inst_39775 = inst_39774;
var state_39909__$1 = state_39909;
if(cljs.core.truth_(inst_39775)){
var statearr_39973_40040 = state_39909__$1;
(statearr_39973_40040[(1)] = (7));

} else {
var statearr_39974_40041 = state_39909__$1;
(statearr_39974_40041[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (14))){
var inst_39782 = (state_39909[(22)]);
var inst_39791 = cljs.core.first.call(null,inst_39782);
var inst_39792 = figwheel.client.file_reloading.eval_body.call(null,inst_39791,opts);
var inst_39793 = cljs.core.next.call(null,inst_39782);
var inst_39769 = inst_39793;
var inst_39770 = null;
var inst_39771 = (0);
var inst_39772 = (0);
var state_39909__$1 = (function (){var statearr_39975 = state_39909;
(statearr_39975[(7)] = inst_39769);

(statearr_39975[(32)] = inst_39792);

(statearr_39975[(8)] = inst_39771);

(statearr_39975[(9)] = inst_39772);

(statearr_39975[(10)] = inst_39770);

return statearr_39975;
})();
var statearr_39976_40042 = state_39909__$1;
(statearr_39976_40042[(2)] = null);

(statearr_39976_40042[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (45))){
var state_39909__$1 = state_39909;
var statearr_39977_40043 = state_39909__$1;
(statearr_39977_40043[(2)] = null);

(statearr_39977_40043[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (26))){
var inst_39822 = (state_39909[(19)]);
var inst_39830 = (state_39909[(23)]);
var inst_39826 = (state_39909[(24)]);
var inst_39828 = (state_39909[(26)]);
var inst_39825 = (state_39909[(25)]);
var inst_39845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39847 = (function (){var all_files = inst_39822;
var res_SINGLEQUOTE_ = inst_39825;
var res = inst_39826;
var files_not_loaded = inst_39828;
var dependencies_that_loaded = inst_39830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39830,inst_39826,inst_39828,inst_39825,inst_39845,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39846){
var map__39978 = p__39846;
var map__39978__$1 = ((((!((map__39978 == null)))?((((map__39978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39978):map__39978);
var namespace = cljs.core.get.call(null,map__39978__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39978__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39830,inst_39826,inst_39828,inst_39825,inst_39845,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39848 = cljs.core.map.call(null,inst_39847,inst_39826);
var inst_39849 = cljs.core.pr_str.call(null,inst_39848);
var inst_39850 = figwheel.client.utils.log.call(null,inst_39849);
var inst_39851 = (function (){var all_files = inst_39822;
var res_SINGLEQUOTE_ = inst_39825;
var res = inst_39826;
var files_not_loaded = inst_39828;
var dependencies_that_loaded = inst_39830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39830,inst_39826,inst_39828,inst_39825,inst_39845,inst_39847,inst_39848,inst_39849,inst_39850,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39822,inst_39830,inst_39826,inst_39828,inst_39825,inst_39845,inst_39847,inst_39848,inst_39849,inst_39850,state_val_39910,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39852 = setTimeout(inst_39851,(10));
var state_39909__$1 = (function (){var statearr_39980 = state_39909;
(statearr_39980[(33)] = inst_39845);

(statearr_39980[(34)] = inst_39850);

return statearr_39980;
})();
var statearr_39981_40044 = state_39909__$1;
(statearr_39981_40044[(2)] = inst_39852);

(statearr_39981_40044[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (16))){
var state_39909__$1 = state_39909;
var statearr_39982_40045 = state_39909__$1;
(statearr_39982_40045[(2)] = reload_dependents);

(statearr_39982_40045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (38))){
var inst_39862 = (state_39909[(16)]);
var inst_39880 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39862);
var state_39909__$1 = state_39909;
var statearr_39983_40046 = state_39909__$1;
(statearr_39983_40046[(2)] = inst_39880);

(statearr_39983_40046[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (30))){
var state_39909__$1 = state_39909;
var statearr_39984_40047 = state_39909__$1;
(statearr_39984_40047[(2)] = null);

(statearr_39984_40047[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (10))){
var inst_39782 = (state_39909[(22)]);
var inst_39784 = cljs.core.chunked_seq_QMARK_.call(null,inst_39782);
var state_39909__$1 = state_39909;
if(inst_39784){
var statearr_39985_40048 = state_39909__$1;
(statearr_39985_40048[(1)] = (13));

} else {
var statearr_39986_40049 = state_39909__$1;
(statearr_39986_40049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (18))){
var inst_39816 = (state_39909[(2)]);
var state_39909__$1 = state_39909;
if(cljs.core.truth_(inst_39816)){
var statearr_39987_40050 = state_39909__$1;
(statearr_39987_40050[(1)] = (19));

} else {
var statearr_39988_40051 = state_39909__$1;
(statearr_39988_40051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (42))){
var state_39909__$1 = state_39909;
var statearr_39989_40052 = state_39909__$1;
(statearr_39989_40052[(2)] = null);

(statearr_39989_40052[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (37))){
var inst_39875 = (state_39909[(2)]);
var state_39909__$1 = state_39909;
var statearr_39990_40053 = state_39909__$1;
(statearr_39990_40053[(2)] = inst_39875);

(statearr_39990_40053[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39910 === (8))){
var inst_39769 = (state_39909[(7)]);
var inst_39782 = (state_39909[(22)]);
var inst_39782__$1 = cljs.core.seq.call(null,inst_39769);
var state_39909__$1 = (function (){var statearr_39991 = state_39909;
(statearr_39991[(22)] = inst_39782__$1);

return statearr_39991;
})();
if(inst_39782__$1){
var statearr_39992_40054 = state_39909__$1;
(statearr_39992_40054[(1)] = (10));

} else {
var statearr_39993_40055 = state_39909__$1;
(statearr_39993_40055[(1)] = (11));

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
}
});})(c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33809__auto__,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto____0 = (function (){
var statearr_39994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39994[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto__);

(statearr_39994[(1)] = (1));

return statearr_39994;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto____1 = (function (state_39909){
while(true){
var ret_value__33811__auto__ = (function (){try{while(true){
var result__33812__auto__ = switch__33809__auto__.call(null,state_39909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33812__auto__;
}
break;
}
}catch (e39995){if((e39995 instanceof Object)){
var ex__33813__auto__ = e39995;
var statearr_39996_40056 = state_39909;
(statearr_39996_40056[(5)] = ex__33813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40057 = state_39909;
state_39909 = G__40057;
continue;
} else {
return ret_value__33811__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto__ = function(state_39909){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto____1.call(this,state_39909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33810__auto__;
})()
;})(switch__33809__auto__,c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33901__auto__ = (function (){var statearr_39997 = f__33900__auto__.call(null);
(statearr_39997[(6)] = c__33899__auto__);

return statearr_39997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33901__auto__);
});})(c__33899__auto__,map__39754,map__39754__$1,opts,before_jsload,on_jsload,reload_dependents,map__39755,map__39755__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33899__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40060,link){
var map__40061 = p__40060;
var map__40061__$1 = ((((!((map__40061 == null)))?((((map__40061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40061):map__40061);
var file = cljs.core.get.call(null,map__40061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__40061,map__40061__$1,file){
return (function (p1__40058_SHARP_,p2__40059_SHARP_){
if(cljs.core._EQ_.call(null,p1__40058_SHARP_,p2__40059_SHARP_)){
return p1__40058_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__40061,map__40061__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40064){
var map__40065 = p__40064;
var map__40065__$1 = ((((!((map__40065 == null)))?((((map__40065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40065):map__40065);
var match_length = cljs.core.get.call(null,map__40065__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40065__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40063_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40063_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40067_SHARP_,p2__40068_SHARP_){
return cljs.core.assoc.call(null,p1__40067_SHARP_,cljs.core.get.call(null,p2__40068_SHARP_,key),p2__40068_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_40069 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_40069);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_40069);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40070,p__40071){
var map__40072 = p__40070;
var map__40072__$1 = ((((!((map__40072 == null)))?((((map__40072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40072):map__40072);
var on_cssload = cljs.core.get.call(null,map__40072__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40073 = p__40071;
var map__40073__$1 = ((((!((map__40073 == null)))?((((map__40073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40073):map__40073);
var files_msg = map__40073__$1;
var files = cljs.core.get.call(null,map__40073__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1515669756023
