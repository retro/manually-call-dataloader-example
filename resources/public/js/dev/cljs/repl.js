// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41613){
var map__41614 = p__41613;
var map__41614__$1 = ((((!((map__41614 == null)))?((((map__41614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41614):map__41614);
var m = map__41614__$1;
var n = cljs.core.get.call(null,map__41614__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41614__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41616_41638 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41617_41639 = null;
var count__41618_41640 = (0);
var i__41619_41641 = (0);
while(true){
if((i__41619_41641 < count__41618_41640)){
var f_41642 = cljs.core._nth.call(null,chunk__41617_41639,i__41619_41641);
cljs.core.println.call(null,"  ",f_41642);

var G__41643 = seq__41616_41638;
var G__41644 = chunk__41617_41639;
var G__41645 = count__41618_41640;
var G__41646 = (i__41619_41641 + (1));
seq__41616_41638 = G__41643;
chunk__41617_41639 = G__41644;
count__41618_41640 = G__41645;
i__41619_41641 = G__41646;
continue;
} else {
var temp__5457__auto___41647 = cljs.core.seq.call(null,seq__41616_41638);
if(temp__5457__auto___41647){
var seq__41616_41648__$1 = temp__5457__auto___41647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41616_41648__$1)){
var c__31148__auto___41649 = cljs.core.chunk_first.call(null,seq__41616_41648__$1);
var G__41650 = cljs.core.chunk_rest.call(null,seq__41616_41648__$1);
var G__41651 = c__31148__auto___41649;
var G__41652 = cljs.core.count.call(null,c__31148__auto___41649);
var G__41653 = (0);
seq__41616_41638 = G__41650;
chunk__41617_41639 = G__41651;
count__41618_41640 = G__41652;
i__41619_41641 = G__41653;
continue;
} else {
var f_41654 = cljs.core.first.call(null,seq__41616_41648__$1);
cljs.core.println.call(null,"  ",f_41654);

var G__41655 = cljs.core.next.call(null,seq__41616_41648__$1);
var G__41656 = null;
var G__41657 = (0);
var G__41658 = (0);
seq__41616_41638 = G__41655;
chunk__41617_41639 = G__41656;
count__41618_41640 = G__41657;
i__41619_41641 = G__41658;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41659 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30217__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30217__auto__)){
return or__30217__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41659);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41659)))?cljs.core.second.call(null,arglists_41659):arglists_41659));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41620_41660 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41621_41661 = null;
var count__41622_41662 = (0);
var i__41623_41663 = (0);
while(true){
if((i__41623_41663 < count__41622_41662)){
var vec__41624_41664 = cljs.core._nth.call(null,chunk__41621_41661,i__41623_41663);
var name_41665 = cljs.core.nth.call(null,vec__41624_41664,(0),null);
var map__41627_41666 = cljs.core.nth.call(null,vec__41624_41664,(1),null);
var map__41627_41667__$1 = ((((!((map__41627_41666 == null)))?((((map__41627_41666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41627_41666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41627_41666):map__41627_41666);
var doc_41668 = cljs.core.get.call(null,map__41627_41667__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41669 = cljs.core.get.call(null,map__41627_41667__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41665);

cljs.core.println.call(null," ",arglists_41669);

if(cljs.core.truth_(doc_41668)){
cljs.core.println.call(null," ",doc_41668);
} else {
}

var G__41670 = seq__41620_41660;
var G__41671 = chunk__41621_41661;
var G__41672 = count__41622_41662;
var G__41673 = (i__41623_41663 + (1));
seq__41620_41660 = G__41670;
chunk__41621_41661 = G__41671;
count__41622_41662 = G__41672;
i__41623_41663 = G__41673;
continue;
} else {
var temp__5457__auto___41674 = cljs.core.seq.call(null,seq__41620_41660);
if(temp__5457__auto___41674){
var seq__41620_41675__$1 = temp__5457__auto___41674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41620_41675__$1)){
var c__31148__auto___41676 = cljs.core.chunk_first.call(null,seq__41620_41675__$1);
var G__41677 = cljs.core.chunk_rest.call(null,seq__41620_41675__$1);
var G__41678 = c__31148__auto___41676;
var G__41679 = cljs.core.count.call(null,c__31148__auto___41676);
var G__41680 = (0);
seq__41620_41660 = G__41677;
chunk__41621_41661 = G__41678;
count__41622_41662 = G__41679;
i__41623_41663 = G__41680;
continue;
} else {
var vec__41629_41681 = cljs.core.first.call(null,seq__41620_41675__$1);
var name_41682 = cljs.core.nth.call(null,vec__41629_41681,(0),null);
var map__41632_41683 = cljs.core.nth.call(null,vec__41629_41681,(1),null);
var map__41632_41684__$1 = ((((!((map__41632_41683 == null)))?((((map__41632_41683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41632_41683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41632_41683):map__41632_41683);
var doc_41685 = cljs.core.get.call(null,map__41632_41684__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41686 = cljs.core.get.call(null,map__41632_41684__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41682);

cljs.core.println.call(null," ",arglists_41686);

if(cljs.core.truth_(doc_41685)){
cljs.core.println.call(null," ",doc_41685);
} else {
}

var G__41687 = cljs.core.next.call(null,seq__41620_41675__$1);
var G__41688 = null;
var G__41689 = (0);
var G__41690 = (0);
seq__41620_41660 = G__41687;
chunk__41621_41661 = G__41688;
count__41622_41662 = G__41689;
i__41623_41663 = G__41690;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__41634 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41635 = null;
var count__41636 = (0);
var i__41637 = (0);
while(true){
if((i__41637 < count__41636)){
var role = cljs.core._nth.call(null,chunk__41635,i__41637);
var temp__5457__auto___41691__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___41691__$1)){
var spec_41692 = temp__5457__auto___41691__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41692));
} else {
}

var G__41693 = seq__41634;
var G__41694 = chunk__41635;
var G__41695 = count__41636;
var G__41696 = (i__41637 + (1));
seq__41634 = G__41693;
chunk__41635 = G__41694;
count__41636 = G__41695;
i__41637 = G__41696;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__41634);
if(temp__5457__auto____$1){
var seq__41634__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41634__$1)){
var c__31148__auto__ = cljs.core.chunk_first.call(null,seq__41634__$1);
var G__41697 = cljs.core.chunk_rest.call(null,seq__41634__$1);
var G__41698 = c__31148__auto__;
var G__41699 = cljs.core.count.call(null,c__31148__auto__);
var G__41700 = (0);
seq__41634 = G__41697;
chunk__41635 = G__41698;
count__41636 = G__41699;
i__41637 = G__41700;
continue;
} else {
var role = cljs.core.first.call(null,seq__41634__$1);
var temp__5457__auto___41701__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___41701__$2)){
var spec_41702 = temp__5457__auto___41701__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41702));
} else {
}

var G__41703 = cljs.core.next.call(null,seq__41634__$1);
var G__41704 = null;
var G__41705 = (0);
var G__41706 = (0);
seq__41634 = G__41703;
chunk__41635 = G__41704;
count__41636 = G__41705;
i__41637 = G__41706;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1515669758166
