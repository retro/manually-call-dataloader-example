// Compiled by ClojureScript 1.9.946 {}
goog.provide('dataloader_example.edb');
goog.require('cljs.core');
goog.require('entitydb.core');
goog.require('keechma.toolbox.edb');
dataloader_example.edb.edb_schema = cljs.core.PersistentArrayMap.EMPTY;
/**
 * @param {...*} var_args
 */
dataloader_example.edb.get_collection = (function() { 
var dataloader_example$edb$get_collection__delegate = function (db38085,rest38086){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.get_collection),dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38085)], null),rest38086));
};
var dataloader_example$edb$get_collection = function (db38085,var_args){
var rest38086 = null;
if (arguments.length > 1) {
var G__38129__i = 0, G__38129__a = new Array(arguments.length -  1);
while (G__38129__i < G__38129__a.length) {G__38129__a[G__38129__i] = arguments[G__38129__i + 1]; ++G__38129__i;}
  rest38086 = new cljs.core.IndexedSeq(G__38129__a,0,null);
} 
return dataloader_example$edb$get_collection__delegate.call(this,db38085,rest38086);};
dataloader_example$edb$get_collection.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$get_collection.cljs$lang$applyTo = (function (arglist__38130){
var db38085 = cljs.core.first(arglist__38130);
var rest38086 = cljs.core.rest(arglist__38130);
return dataloader_example$edb$get_collection__delegate(db38085,rest38086);
});
dataloader_example$edb$get_collection.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$get_collection__delegate;
return dataloader_example$edb$get_collection;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.get_item_by_id = (function() { 
var dataloader_example$edb$get_item_by_id__delegate = function (db38087,rest38088){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_item_by_id,dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38087)], null),rest38088));
};
var dataloader_example$edb$get_item_by_id = function (db38087,var_args){
var rest38088 = null;
if (arguments.length > 1) {
var G__38131__i = 0, G__38131__a = new Array(arguments.length -  1);
while (G__38131__i < G__38131__a.length) {G__38131__a[G__38131__i] = arguments[G__38131__i + 1]; ++G__38131__i;}
  rest38088 = new cljs.core.IndexedSeq(G__38131__a,0,null);
} 
return dataloader_example$edb$get_item_by_id__delegate.call(this,db38087,rest38088);};
dataloader_example$edb$get_item_by_id.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$get_item_by_id.cljs$lang$applyTo = (function (arglist__38132){
var db38087 = cljs.core.first(arglist__38132);
var rest38088 = cljs.core.rest(arglist__38132);
return dataloader_example$edb$get_item_by_id__delegate(db38087,rest38088);
});
dataloader_example$edb$get_item_by_id.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$get_item_by_id__delegate;
return dataloader_example$edb$get_item_by_id;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.get_named_item = (function() { 
var dataloader_example$edb$get_named_item__delegate = function (db38089,rest38090){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_named_item,dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38089)], null),rest38090));
};
var dataloader_example$edb$get_named_item = function (db38089,var_args){
var rest38090 = null;
if (arguments.length > 1) {
var G__38133__i = 0, G__38133__a = new Array(arguments.length -  1);
while (G__38133__i < G__38133__a.length) {G__38133__a[G__38133__i] = arguments[G__38133__i + 1]; ++G__38133__i;}
  rest38090 = new cljs.core.IndexedSeq(G__38133__a,0,null);
} 
return dataloader_example$edb$get_named_item__delegate.call(this,db38089,rest38090);};
dataloader_example$edb$get_named_item.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$get_named_item.cljs$lang$applyTo = (function (arglist__38134){
var db38089 = cljs.core.first(arglist__38134);
var rest38090 = cljs.core.rest(arglist__38134);
return dataloader_example$edb$get_named_item__delegate(db38089,rest38090);
});
dataloader_example$edb$get_named_item.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$get_named_item__delegate;
return dataloader_example$edb$get_named_item;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.get_item_meta = (function() { 
var dataloader_example$edb$get_item_meta__delegate = function (db38091,rest38092){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_item_meta,dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38091)], null),rest38092));
};
var dataloader_example$edb$get_item_meta = function (db38091,var_args){
var rest38092 = null;
if (arguments.length > 1) {
var G__38135__i = 0, G__38135__a = new Array(arguments.length -  1);
while (G__38135__i < G__38135__a.length) {G__38135__a[G__38135__i] = arguments[G__38135__i + 1]; ++G__38135__i;}
  rest38092 = new cljs.core.IndexedSeq(G__38135__a,0,null);
} 
return dataloader_example$edb$get_item_meta__delegate.call(this,db38091,rest38092);};
dataloader_example$edb$get_item_meta.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$get_item_meta.cljs$lang$applyTo = (function (arglist__38136){
var db38091 = cljs.core.first(arglist__38136);
var rest38092 = cljs.core.rest(arglist__38136);
return dataloader_example$edb$get_item_meta__delegate(db38091,rest38092);
});
dataloader_example$edb$get_item_meta.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$get_item_meta__delegate;
return dataloader_example$edb$get_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.get_named_item_meta = (function() { 
var dataloader_example$edb$get_named_item_meta__delegate = function (db38093,rest38094){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_named_item_meta,dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38093)], null),rest38094));
};
var dataloader_example$edb$get_named_item_meta = function (db38093,var_args){
var rest38094 = null;
if (arguments.length > 1) {
var G__38137__i = 0, G__38137__a = new Array(arguments.length -  1);
while (G__38137__i < G__38137__a.length) {G__38137__a[G__38137__i] = arguments[G__38137__i + 1]; ++G__38137__i;}
  rest38094 = new cljs.core.IndexedSeq(G__38137__a,0,null);
} 
return dataloader_example$edb$get_named_item_meta__delegate.call(this,db38093,rest38094);};
dataloader_example$edb$get_named_item_meta.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$get_named_item_meta.cljs$lang$applyTo = (function (arglist__38138){
var db38093 = cljs.core.first(arglist__38138);
var rest38094 = cljs.core.rest(arglist__38138);
return dataloader_example$edb$get_named_item_meta__delegate(db38093,rest38094);
});
dataloader_example$edb$get_named_item_meta.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$get_named_item_meta__delegate;
return dataloader_example$edb$get_named_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.get_collection_meta = (function() { 
var dataloader_example$edb$get_collection_meta__delegate = function (db38095,rest38096){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_collection_meta,dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38095)], null),rest38096));
};
var dataloader_example$edb$get_collection_meta = function (db38095,var_args){
var rest38096 = null;
if (arguments.length > 1) {
var G__38139__i = 0, G__38139__a = new Array(arguments.length -  1);
while (G__38139__i < G__38139__a.length) {G__38139__a[G__38139__i] = arguments[G__38139__i + 1]; ++G__38139__i;}
  rest38096 = new cljs.core.IndexedSeq(G__38139__a,0,null);
} 
return dataloader_example$edb$get_collection_meta__delegate.call(this,db38095,rest38096);};
dataloader_example$edb$get_collection_meta.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$get_collection_meta.cljs$lang$applyTo = (function (arglist__38140){
var db38095 = cljs.core.first(arglist__38140);
var rest38096 = cljs.core.rest(arglist__38140);
return dataloader_example$edb$get_collection_meta__delegate(db38095,rest38096);
});
dataloader_example$edb$get_collection_meta.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$get_collection_meta__delegate;
return dataloader_example$edb$get_collection_meta;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.insert_item = (function() { 
var dataloader_example$edb$insert_item__delegate = function (db38097,rest38098){
return cljs.core.assoc.call(null,db38097,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_item),dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38097)], null),rest38098)));
};
var dataloader_example$edb$insert_item = function (db38097,var_args){
var rest38098 = null;
if (arguments.length > 1) {
var G__38141__i = 0, G__38141__a = new Array(arguments.length -  1);
while (G__38141__i < G__38141__a.length) {G__38141__a[G__38141__i] = arguments[G__38141__i + 1]; ++G__38141__i;}
  rest38098 = new cljs.core.IndexedSeq(G__38141__a,0,null);
} 
return dataloader_example$edb$insert_item__delegate.call(this,db38097,rest38098);};
dataloader_example$edb$insert_item.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$insert_item.cljs$lang$applyTo = (function (arglist__38142){
var db38097 = cljs.core.first(arglist__38142);
var rest38098 = cljs.core.rest(arglist__38142);
return dataloader_example$edb$insert_item__delegate(db38097,rest38098);
});
dataloader_example$edb$insert_item.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$insert_item__delegate;
return dataloader_example$edb$insert_item;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.insert_named_item = (function() { 
var dataloader_example$edb$insert_named_item__delegate = function (db38099,rest38100){
return cljs.core.assoc.call(null,db38099,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_named_item),dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38099)], null),rest38100)));
};
var dataloader_example$edb$insert_named_item = function (db38099,var_args){
var rest38100 = null;
if (arguments.length > 1) {
var G__38143__i = 0, G__38143__a = new Array(arguments.length -  1);
while (G__38143__i < G__38143__a.length) {G__38143__a[G__38143__i] = arguments[G__38143__i + 1]; ++G__38143__i;}
  rest38100 = new cljs.core.IndexedSeq(G__38143__a,0,null);
} 
return dataloader_example$edb$insert_named_item__delegate.call(this,db38099,rest38100);};
dataloader_example$edb$insert_named_item.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$insert_named_item.cljs$lang$applyTo = (function (arglist__38144){
var db38099 = cljs.core.first(arglist__38144);
var rest38100 = cljs.core.rest(arglist__38144);
return dataloader_example$edb$insert_named_item__delegate(db38099,rest38100);
});
dataloader_example$edb$insert_named_item.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$insert_named_item__delegate;
return dataloader_example$edb$insert_named_item;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.insert_collection = (function() { 
var dataloader_example$edb$insert_collection__delegate = function (db38101,rest38102){
return cljs.core.assoc.call(null,db38101,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_collection),dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38101)], null),rest38102)));
};
var dataloader_example$edb$insert_collection = function (db38101,var_args){
var rest38102 = null;
if (arguments.length > 1) {
var G__38145__i = 0, G__38145__a = new Array(arguments.length -  1);
while (G__38145__i < G__38145__a.length) {G__38145__a[G__38145__i] = arguments[G__38145__i + 1]; ++G__38145__i;}
  rest38102 = new cljs.core.IndexedSeq(G__38145__a,0,null);
} 
return dataloader_example$edb$insert_collection__delegate.call(this,db38101,rest38102);};
dataloader_example$edb$insert_collection.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$insert_collection.cljs$lang$applyTo = (function (arglist__38146){
var db38101 = cljs.core.first(arglist__38146);
var rest38102 = cljs.core.rest(arglist__38146);
return dataloader_example$edb$insert_collection__delegate(db38101,rest38102);
});
dataloader_example$edb$insert_collection.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$insert_collection__delegate;
return dataloader_example$edb$insert_collection;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.append_collection = (function() { 
var dataloader_example$edb$append_collection__delegate = function (db38103,rest38104){
return cljs.core.assoc.call(null,db38103,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.append_collection),dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38103)], null),rest38104)));
};
var dataloader_example$edb$append_collection = function (db38103,var_args){
var rest38104 = null;
if (arguments.length > 1) {
var G__38147__i = 0, G__38147__a = new Array(arguments.length -  1);
while (G__38147__i < G__38147__a.length) {G__38147__a[G__38147__i] = arguments[G__38147__i + 1]; ++G__38147__i;}
  rest38104 = new cljs.core.IndexedSeq(G__38147__a,0,null);
} 
return dataloader_example$edb$append_collection__delegate.call(this,db38103,rest38104);};
dataloader_example$edb$append_collection.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$append_collection.cljs$lang$applyTo = (function (arglist__38148){
var db38103 = cljs.core.first(arglist__38148);
var rest38104 = cljs.core.rest(arglist__38148);
return dataloader_example$edb$append_collection__delegate(db38103,rest38104);
});
dataloader_example$edb$append_collection.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$append_collection__delegate;
return dataloader_example$edb$append_collection;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.prepend_collection = (function() { 
var dataloader_example$edb$prepend_collection__delegate = function (db38105,rest38106){
return cljs.core.assoc.call(null,db38105,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.prepend_collection),dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38105)], null),rest38106)));
};
var dataloader_example$edb$prepend_collection = function (db38105,var_args){
var rest38106 = null;
if (arguments.length > 1) {
var G__38149__i = 0, G__38149__a = new Array(arguments.length -  1);
while (G__38149__i < G__38149__a.length) {G__38149__a[G__38149__i] = arguments[G__38149__i + 1]; ++G__38149__i;}
  rest38106 = new cljs.core.IndexedSeq(G__38149__a,0,null);
} 
return dataloader_example$edb$prepend_collection__delegate.call(this,db38105,rest38106);};
dataloader_example$edb$prepend_collection.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$prepend_collection.cljs$lang$applyTo = (function (arglist__38150){
var db38105 = cljs.core.first(arglist__38150);
var rest38106 = cljs.core.rest(arglist__38150);
return dataloader_example$edb$prepend_collection__delegate(db38105,rest38106);
});
dataloader_example$edb$prepend_collection.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$prepend_collection__delegate;
return dataloader_example$edb$prepend_collection;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.remove_item = (function() { 
var dataloader_example$edb$remove_item__delegate = function (db38107,rest38108){
return cljs.core.assoc.call(null,db38107,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.remove_item),dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38107)], null),rest38108)));
};
var dataloader_example$edb$remove_item = function (db38107,var_args){
var rest38108 = null;
if (arguments.length > 1) {
var G__38151__i = 0, G__38151__a = new Array(arguments.length -  1);
while (G__38151__i < G__38151__a.length) {G__38151__a[G__38151__i] = arguments[G__38151__i + 1]; ++G__38151__i;}
  rest38108 = new cljs.core.IndexedSeq(G__38151__a,0,null);
} 
return dataloader_example$edb$remove_item__delegate.call(this,db38107,rest38108);};
dataloader_example$edb$remove_item.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$remove_item.cljs$lang$applyTo = (function (arglist__38152){
var db38107 = cljs.core.first(arglist__38152);
var rest38108 = cljs.core.rest(arglist__38152);
return dataloader_example$edb$remove_item__delegate(db38107,rest38108);
});
dataloader_example$edb$remove_item.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$remove_item__delegate;
return dataloader_example$edb$remove_item;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.insert_related_collection = (function() { 
var dataloader_example$edb$insert_related_collection__delegate = function (db38109,rest38110){
return cljs.core.assoc.call(null,db38109,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_related_collection),dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38109)], null),rest38110)));
};
var dataloader_example$edb$insert_related_collection = function (db38109,var_args){
var rest38110 = null;
if (arguments.length > 1) {
var G__38153__i = 0, G__38153__a = new Array(arguments.length -  1);
while (G__38153__i < G__38153__a.length) {G__38153__a[G__38153__i] = arguments[G__38153__i + 1]; ++G__38153__i;}
  rest38110 = new cljs.core.IndexedSeq(G__38153__a,0,null);
} 
return dataloader_example$edb$insert_related_collection__delegate.call(this,db38109,rest38110);};
dataloader_example$edb$insert_related_collection.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$insert_related_collection.cljs$lang$applyTo = (function (arglist__38154){
var db38109 = cljs.core.first(arglist__38154);
var rest38110 = cljs.core.rest(arglist__38154);
return dataloader_example$edb$insert_related_collection__delegate(db38109,rest38110);
});
dataloader_example$edb$insert_related_collection.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$insert_related_collection__delegate;
return dataloader_example$edb$insert_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.append_related_collection = (function() { 
var dataloader_example$edb$append_related_collection__delegate = function (db38111,rest38112){
return cljs.core.assoc.call(null,db38111,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.append_related_collection),dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38111)], null),rest38112)));
};
var dataloader_example$edb$append_related_collection = function (db38111,var_args){
var rest38112 = null;
if (arguments.length > 1) {
var G__38155__i = 0, G__38155__a = new Array(arguments.length -  1);
while (G__38155__i < G__38155__a.length) {G__38155__a[G__38155__i] = arguments[G__38155__i + 1]; ++G__38155__i;}
  rest38112 = new cljs.core.IndexedSeq(G__38155__a,0,null);
} 
return dataloader_example$edb$append_related_collection__delegate.call(this,db38111,rest38112);};
dataloader_example$edb$append_related_collection.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$append_related_collection.cljs$lang$applyTo = (function (arglist__38156){
var db38111 = cljs.core.first(arglist__38156);
var rest38112 = cljs.core.rest(arglist__38156);
return dataloader_example$edb$append_related_collection__delegate(db38111,rest38112);
});
dataloader_example$edb$append_related_collection.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$append_related_collection__delegate;
return dataloader_example$edb$append_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.prepend_related_collection = (function() { 
var dataloader_example$edb$prepend_related_collection__delegate = function (db38113,rest38114){
return cljs.core.assoc.call(null,db38113,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.prepend_related_collection),dataloader_example.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38113)], null),rest38114)));
};
var dataloader_example$edb$prepend_related_collection = function (db38113,var_args){
var rest38114 = null;
if (arguments.length > 1) {
var G__38157__i = 0, G__38157__a = new Array(arguments.length -  1);
while (G__38157__i < G__38157__a.length) {G__38157__a[G__38157__i] = arguments[G__38157__i + 1]; ++G__38157__i;}
  rest38114 = new cljs.core.IndexedSeq(G__38157__a,0,null);
} 
return dataloader_example$edb$prepend_related_collection__delegate.call(this,db38113,rest38114);};
dataloader_example$edb$prepend_related_collection.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$prepend_related_collection.cljs$lang$applyTo = (function (arglist__38158){
var db38113 = cljs.core.first(arglist__38158);
var rest38114 = cljs.core.rest(arglist__38158);
return dataloader_example$edb$prepend_related_collection__delegate(db38113,rest38114);
});
dataloader_example$edb$prepend_related_collection.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$prepend_related_collection__delegate;
return dataloader_example$edb$prepend_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.insert_meta = (function() { 
var dataloader_example$edb$insert_meta__delegate = function (db38115,rest38116){
return cljs.core.assoc.call(null,db38115,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.insert_meta,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38115)], null),rest38116)));
};
var dataloader_example$edb$insert_meta = function (db38115,var_args){
var rest38116 = null;
if (arguments.length > 1) {
var G__38159__i = 0, G__38159__a = new Array(arguments.length -  1);
while (G__38159__i < G__38159__a.length) {G__38159__a[G__38159__i] = arguments[G__38159__i + 1]; ++G__38159__i;}
  rest38116 = new cljs.core.IndexedSeq(G__38159__a,0,null);
} 
return dataloader_example$edb$insert_meta__delegate.call(this,db38115,rest38116);};
dataloader_example$edb$insert_meta.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$insert_meta.cljs$lang$applyTo = (function (arglist__38160){
var db38115 = cljs.core.first(arglist__38160);
var rest38116 = cljs.core.rest(arglist__38160);
return dataloader_example$edb$insert_meta__delegate(db38115,rest38116);
});
dataloader_example$edb$insert_meta.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$insert_meta__delegate;
return dataloader_example$edb$insert_meta;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.remove_meta = (function() { 
var dataloader_example$edb$remove_meta__delegate = function (db38117,rest38118){
return cljs.core.assoc.call(null,db38117,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_meta,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38117)], null),rest38118)));
};
var dataloader_example$edb$remove_meta = function (db38117,var_args){
var rest38118 = null;
if (arguments.length > 1) {
var G__38161__i = 0, G__38161__a = new Array(arguments.length -  1);
while (G__38161__i < G__38161__a.length) {G__38161__a[G__38161__i] = arguments[G__38161__i + 1]; ++G__38161__i;}
  rest38118 = new cljs.core.IndexedSeq(G__38161__a,0,null);
} 
return dataloader_example$edb$remove_meta__delegate.call(this,db38117,rest38118);};
dataloader_example$edb$remove_meta.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$remove_meta.cljs$lang$applyTo = (function (arglist__38162){
var db38117 = cljs.core.first(arglist__38162);
var rest38118 = cljs.core.rest(arglist__38162);
return dataloader_example$edb$remove_meta__delegate(db38117,rest38118);
});
dataloader_example$edb$remove_meta.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$remove_meta__delegate;
return dataloader_example$edb$remove_meta;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.remove_named_item = (function() { 
var dataloader_example$edb$remove_named_item__delegate = function (db38119,rest38120){
return cljs.core.assoc.call(null,db38119,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_named_item,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38119)], null),rest38120)));
};
var dataloader_example$edb$remove_named_item = function (db38119,var_args){
var rest38120 = null;
if (arguments.length > 1) {
var G__38163__i = 0, G__38163__a = new Array(arguments.length -  1);
while (G__38163__i < G__38163__a.length) {G__38163__a[G__38163__i] = arguments[G__38163__i + 1]; ++G__38163__i;}
  rest38120 = new cljs.core.IndexedSeq(G__38163__a,0,null);
} 
return dataloader_example$edb$remove_named_item__delegate.call(this,db38119,rest38120);};
dataloader_example$edb$remove_named_item.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$remove_named_item.cljs$lang$applyTo = (function (arglist__38164){
var db38119 = cljs.core.first(arglist__38164);
var rest38120 = cljs.core.rest(arglist__38164);
return dataloader_example$edb$remove_named_item__delegate(db38119,rest38120);
});
dataloader_example$edb$remove_named_item.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$remove_named_item__delegate;
return dataloader_example$edb$remove_named_item;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.remove_collection = (function() { 
var dataloader_example$edb$remove_collection__delegate = function (db38121,rest38122){
return cljs.core.assoc.call(null,db38121,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38121)], null),rest38122)));
};
var dataloader_example$edb$remove_collection = function (db38121,var_args){
var rest38122 = null;
if (arguments.length > 1) {
var G__38165__i = 0, G__38165__a = new Array(arguments.length -  1);
while (G__38165__i < G__38165__a.length) {G__38165__a[G__38165__i] = arguments[G__38165__i + 1]; ++G__38165__i;}
  rest38122 = new cljs.core.IndexedSeq(G__38165__a,0,null);
} 
return dataloader_example$edb$remove_collection__delegate.call(this,db38121,rest38122);};
dataloader_example$edb$remove_collection.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$remove_collection.cljs$lang$applyTo = (function (arglist__38166){
var db38121 = cljs.core.first(arglist__38166);
var rest38122 = cljs.core.rest(arglist__38166);
return dataloader_example$edb$remove_collection__delegate(db38121,rest38122);
});
dataloader_example$edb$remove_collection.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$remove_collection__delegate;
return dataloader_example$edb$remove_collection;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.empty_collection = (function() { 
var dataloader_example$edb$empty_collection__delegate = function (db38123,rest38124){
return cljs.core.assoc.call(null,db38123,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.empty_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38123)], null),rest38124)));
};
var dataloader_example$edb$empty_collection = function (db38123,var_args){
var rest38124 = null;
if (arguments.length > 1) {
var G__38167__i = 0, G__38167__a = new Array(arguments.length -  1);
while (G__38167__i < G__38167__a.length) {G__38167__a[G__38167__i] = arguments[G__38167__i + 1]; ++G__38167__i;}
  rest38124 = new cljs.core.IndexedSeq(G__38167__a,0,null);
} 
return dataloader_example$edb$empty_collection__delegate.call(this,db38123,rest38124);};
dataloader_example$edb$empty_collection.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$empty_collection.cljs$lang$applyTo = (function (arglist__38168){
var db38123 = cljs.core.first(arglist__38168);
var rest38124 = cljs.core.rest(arglist__38168);
return dataloader_example$edb$empty_collection__delegate(db38123,rest38124);
});
dataloader_example$edb$empty_collection.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$empty_collection__delegate;
return dataloader_example$edb$empty_collection;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.remove_related_collection = (function() { 
var dataloader_example$edb$remove_related_collection__delegate = function (db38125,rest38126){
return cljs.core.assoc.call(null,db38125,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_related_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38125)], null),rest38126)));
};
var dataloader_example$edb$remove_related_collection = function (db38125,var_args){
var rest38126 = null;
if (arguments.length > 1) {
var G__38169__i = 0, G__38169__a = new Array(arguments.length -  1);
while (G__38169__i < G__38169__a.length) {G__38169__a[G__38169__i] = arguments[G__38169__i + 1]; ++G__38169__i;}
  rest38126 = new cljs.core.IndexedSeq(G__38169__a,0,null);
} 
return dataloader_example$edb$remove_related_collection__delegate.call(this,db38125,rest38126);};
dataloader_example$edb$remove_related_collection.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$remove_related_collection.cljs$lang$applyTo = (function (arglist__38170){
var db38125 = cljs.core.first(arglist__38170);
var rest38126 = cljs.core.rest(arglist__38170);
return dataloader_example$edb$remove_related_collection__delegate(db38125,rest38126);
});
dataloader_example$edb$remove_related_collection.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$remove_related_collection__delegate;
return dataloader_example$edb$remove_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
dataloader_example.edb.vacuum = (function() { 
var dataloader_example$edb$vacuum__delegate = function (db38127,rest38128){
return cljs.core.assoc.call(null,db38127,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.vacuum,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db38127)], null),rest38128)));
};
var dataloader_example$edb$vacuum = function (db38127,var_args){
var rest38128 = null;
if (arguments.length > 1) {
var G__38171__i = 0, G__38171__a = new Array(arguments.length -  1);
while (G__38171__i < G__38171__a.length) {G__38171__a[G__38171__i] = arguments[G__38171__i + 1]; ++G__38171__i;}
  rest38128 = new cljs.core.IndexedSeq(G__38171__a,0,null);
} 
return dataloader_example$edb$vacuum__delegate.call(this,db38127,rest38128);};
dataloader_example$edb$vacuum.cljs$lang$maxFixedArity = 1;
dataloader_example$edb$vacuum.cljs$lang$applyTo = (function (arglist__38172){
var db38127 = cljs.core.first(arglist__38172);
var rest38128 = cljs.core.rest(arglist__38172);
return dataloader_example$edb$vacuum__delegate(db38127,rest38128);
});
dataloader_example$edb$vacuum.cljs$core$IFn$_invoke$arity$variadic = dataloader_example$edb$vacuum__delegate;
return dataloader_example$edb$vacuum;
})()
;

//# sourceMappingURL=edb.js.map?rel=1515669753811
