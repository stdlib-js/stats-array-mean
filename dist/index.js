"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var n=s(function(f,i){
var o=require('@stdlib/assert-is-collection/dist'),v=require('@stdlib/array-dtypes/dist'),d=require('@stdlib/array-dtype/dist'),l=require('@stdlib/array-base-assert-contains/dist'),m=require('@stdlib/array-base-join/dist'),c=require('@stdlib/stats-strided-mean/dist').ndarray,a=require('@stdlib/error-tools-fmtprodmsg/dist'),t=v("real_and_generic"),g="generic";function p(e){var r;if(!o(e))throw new TypeError(a('2HL2O',e));if(r=d(e)||g,!l(t,r))throw new TypeError(a('2HLHZ',m(t,'", "'),r));return c(e.length,e,1,0)}i.exports=p
});var q=n();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
