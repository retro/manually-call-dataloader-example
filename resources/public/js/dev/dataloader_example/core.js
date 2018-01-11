// Compiled by ClojureScript 1.9.946 {}
goog.provide('dataloader_example.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('keechma.app_state');
goog.require('dataloader_example.controllers');
goog.require('dataloader_example.ui');
goog.require('dataloader_example.subscriptions');
dataloader_example.core.app_definition = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"components","components",-1073188942),dataloader_example.ui.ui,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),dataloader_example.controllers.controllers,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),dataloader_example.subscriptions.subscriptions,new cljs.core.Keyword(null,"html-element","html-element",1188696850),document.getElementById("app")], null);
if(typeof dataloader_example.core.running_app !== 'undefined'){
} else {
dataloader_example.core.running_app = cljs.core.atom.call(null,null);
}
dataloader_example.core.start_app_BANG_ = (function dataloader_example$core$start_app_BANG_(){
return cljs.core.reset_BANG_.call(null,dataloader_example.core.running_app,keechma.app_state.start_BANG_.call(null,dataloader_example.core.app_definition));
});
dataloader_example.core.dev_setup = (function dataloader_example$core$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
dataloader_example.core.reload = (function dataloader_example$core$reload(){
var current = cljs.core.deref.call(null,dataloader_example.core.running_app);
if(cljs.core.truth_(current)){
return keechma.app_state.stop_BANG_.call(null,current,dataloader_example.core.start_app_BANG_);
} else {
return dataloader_example.core.start_app_BANG_.call(null);
}
});
dataloader_example.core.main = (function dataloader_example$core$main(){
dataloader_example.core.dev_setup.call(null);

return dataloader_example.core.start_app_BANG_.call(null);
});
goog.exportSymbol('dataloader_example.core.main', dataloader_example.core.main);

//# sourceMappingURL=core.js.map?rel=1515670602396
