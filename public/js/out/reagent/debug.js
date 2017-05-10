// Compiled by ClojureScript 1.9.36 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__24170__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24171__i = 0, G__24171__a = new Array(arguments.length -  0);
while (G__24171__i < G__24171__a.length) {G__24171__a[G__24171__i] = arguments[G__24171__i + 0]; ++G__24171__i;}
  args = new cljs.core.IndexedSeq(G__24171__a,0);
} 
return G__24170__delegate.call(this,args);};
G__24170.cljs$lang$maxFixedArity = 0;
G__24170.cljs$lang$applyTo = (function (arglist__24172){
var args = cljs.core.seq(arglist__24172);
return G__24170__delegate(args);
});
G__24170.cljs$core$IFn$_invoke$arity$variadic = G__24170__delegate;
return G__24170;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24173__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24174__i = 0, G__24174__a = new Array(arguments.length -  0);
while (G__24174__i < G__24174__a.length) {G__24174__a[G__24174__i] = arguments[G__24174__i + 0]; ++G__24174__i;}
  args = new cljs.core.IndexedSeq(G__24174__a,0);
} 
return G__24173__delegate.call(this,args);};
G__24173.cljs$lang$maxFixedArity = 0;
G__24173.cljs$lang$applyTo = (function (arglist__24175){
var args = cljs.core.seq(arglist__24175);
return G__24173__delegate(args);
});
G__24173.cljs$core$IFn$_invoke$arity$variadic = G__24173__delegate;
return G__24173;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map