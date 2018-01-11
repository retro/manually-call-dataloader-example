// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.preload');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.core');
devtools.preload.config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formatters","formatters",-1875637118),new cljs.core.Keyword(null,"hints","hints",-991113151)], null),new cljs.core.Keyword(null,"fn-symbol","fn-symbol",1764040739),"F",new cljs.core.Keyword(null,"print-config-overrides","print-config-overrides",-274716965),true], null);
devtools.prefs.merge_prefs_BANG_.call(null,devtools.preload.config);
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"suppress-preload-install","suppress-preload-install",1724845090)))){
devtools.core.install_BANG_.call(null);
} else {
}

//# sourceMappingURL=preload.js.map?rel=1515669763041
