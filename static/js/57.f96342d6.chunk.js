(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[57],{2678:function(e,t,r){"use strict";r.r(t),r.d(t,"WalletLinkConnector",(function(){return c}));var n=r(406);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){var t,n;function c(t){var r,n=t.url,o=t.appName,i=t.appLogoUrl,c=t.darkMode,h=t.supportedChainIds;return(r=e.call(this,{supportedChainIds:h})||this).url=n,r.appName=o,r.appLogoUrl=i,r.darkMode=c||!1,r.handleChainChanged=r.handleChainChanged.bind(a(r)),r.handleAccountsChanged=r.handleAccountsChanged.bind(a(r)),r}n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n);var h=c.prototype;return h.activate=function(){try{var e=this,t=function(){return Promise.resolve(e.provider.request({method:"eth_requestAccounts"})).then((function(t){var r=t[0];return e.provider.on("chainChanged",e.handleChainChanged),e.provider.on("accountsChanged",e.handleAccountsChanged),{provider:e.provider,account:r}}))},n=function(){if(window.ethereum&&!0===window.ethereum.isCoinbaseWallet)e.provider=window.ethereum;else{var t=function(){if(!e.walletLink)return Promise.resolve(Promise.all([r.e(5),r.e(14),r.e(62)]).then(r.t.bind(null,2621,7)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(t){e.walletLink=new t(o({appName:e.appName,darkMode:e.darkMode},e.appLogoUrl?{appLogoUrl:e.appLogoUrl}:{})),e.provider=e.walletLink.makeWeb3Provider(e.url,1)}))}();if(t&&t.then)return t.then((function(){}))}}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(i){return Promise.reject(i)}},h.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},h.getChainId=function(){try{return Promise.resolve(this.provider.chainId)}catch(e){return Promise.reject(e)}},h.getAccount=function(){try{return Promise.resolve(this.provider.request({method:"eth_requestAccounts"})).then((function(e){return e[0]}))}catch(e){return Promise.reject(e)}},h.deactivate=function(){this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged)},h.close=function(){try{return this.provider.close(),this.emitDeactivate(),Promise.resolve()}catch(e){return Promise.reject(e)}},h.handleChainChanged=function(e){this.emitUpdate({chainId:e})},h.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},c}(n.a)}}]);
//# sourceMappingURL=57.f96342d6.chunk.js.map