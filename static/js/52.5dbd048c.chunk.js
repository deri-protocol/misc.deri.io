(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[52],{2671:function(t,e,r){"use strict";r.r(e),r.d(e,"FortmaticConnector",(function(){return c}));var n=r(406),i=r(75);var o={1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan"},c=function(t){var e,n;function c(e){var r,n=e.apiKey,c=e.chainId;return Object.keys(o).includes(c.toString())||Object(i.a)(!1),(r=t.call(this,{supportedChainIds:[c]})||this).apiKey=n,r.chainId=c,r}n=t,(e=c).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=c.prototype;return a.activate=function(){try{var t=function(){return Promise.resolve(e.fortmatic.getProvider().enable().then((function(t){return t[0]}))).then((function(t){return{provider:e.fortmatic.getProvider(),chainId:e.chainId,account:t}}))},e=this,n=function(){if(!e.fortmatic)return Promise.resolve(r.e(58).then(r.t.bind(null,2504,7)).then((function(t){var e;return null!=(e=null==t?void 0:t.default)?e:t}))).then((function(t){e.fortmatic=new t(e.apiKey,1===e.chainId||4===e.chainId?void 0:o[e.chainId])}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(i){return Promise.reject(i)}},a.getProvider=function(){try{return Promise.resolve(this.fortmatic.getProvider())}catch(t){return Promise.reject(t)}},a.getChainId=function(){try{return Promise.resolve(this.chainId)}catch(t){return Promise.reject(t)}},a.getAccount=function(){try{return Promise.resolve(this.fortmatic.getProvider().send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},a.deactivate=function(){},a.close=function(){try{var t=this;return Promise.resolve(t.fortmatic.user.logout()).then((function(){t.emitDeactivate()}))}catch(e){return Promise.reject(e)}},c}(n.a)}}]);
//# sourceMappingURL=52.5dbd048c.chunk.js.map