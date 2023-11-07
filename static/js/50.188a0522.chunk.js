(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[50],{2674:function(e,n,t){"use strict";t.r(n),t.d(n,"NoEthereumProviderError",(function(){return v})),t.d(n,"ProvidedConnector",(function(){return m})),t.d(n,"UserRejectedRequestError",(function(){return l}));var r=t(406);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function u(e,n){return u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},u(e,n)}function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,n,t){return h=a()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&u(o,t.prototype),o},h.apply(null,arguments)}function s(e){var n="function"===typeof Map?new Map:void 0;return s=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return h(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)},s(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function f(e,n){try{var t=e()}catch(r){return n(r)}return t&&t.then?t.then(void 0,n):t}function p(e){return e.hasOwnProperty("result")?e.result:e}var v=function(e){function n(){var n;return(n=e.call(this)||this).name=n.constructor.name,n.message="No Ethereum provider was passed to the constructor or found on window.ethereum.",n}return i(n,e),n}(s(Error)),l=function(e){function n(){var n;return(n=e.call(this)||this).name=n.constructor.name,n.message="The user rejected the request.",n}return i(n,e),n}(s(Error)),m=function(e){function n(n){var t,r=n.provider,o=void 0===r?window.ethereum:r,i=n.supportedChainIds;return(t=e.call(this,{supportedChainIds:i})||this).provider=o,t.handleNetworkChanged=t.handleNetworkChanged.bind(d(t)),t.handleChainChanged=t.handleChainChanged.bind(d(t)),t.handleAccountsChanged=t.handleAccountsChanged.bind(d(t)),t.handleClose=t.handleClose.bind(d(t)),t}i(n,e);var t=n.prototype;return t.handleChainChanged=function(e){this.emitUpdate({chainId:e,provider:this.provider})},t.handleAccountsChanged=function(e){0===e.length?this.emitDeactivate():this.emitUpdate({account:e[0]})},t.handleClose=function(e,n){this.emitDeactivate()},t.handleNetworkChanged=function(e){this.emitUpdate({chainId:e,provider:this.provider})},t.activate=function(){try{var e,n=function(n){if(t)return n;function i(){return o({provider:r.provider},e?{account:e}:{})}var c=function(){if(!e)return Promise.resolve(r.provider.enable().then((function(e){return e&&p(e)[0]}))).then((function(n){e=n}))}();return c&&c.then?c.then(i):i()},t=!1,r=this;if(!r.provider)throw new v;r.provider.on&&(r.provider.on("chainChanged",r.handleChainChanged),r.provider.on("accountsChanged",r.handleAccountsChanged),r.provider.on("close",r.handleClose),r.provider.on("networkChanged",r.handleNetworkChanged)),r.provider.isMetaMask&&(r.provider.autoRefreshOnNetworkChange=!1);var i=f((function(){return Promise.resolve(r.provider.send("eth_requestAccounts").then((function(e){return p(e)[0]}))).then((function(n){e=n}))}),(function(e){if(4001===e.code)throw new l}));return Promise.resolve(i&&i.then?i.then(n):n(i))}catch(c){return Promise.reject(c)}},t.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},t.getChainId=function(){try{var e,n=function(){function n(){if(!e)try{e=p(t.provider.send({method:"net_version"}))}catch(n){}return e||(e=t.provider.isDapper?p(t.provider.cachedResults.net_version):t.provider.chainId||t.provider.networkVersion||t.provider._chainId),e}var r=function(){if(!e){var n=f((function(){return Promise.resolve(t.provider.send("net_version").then(p)).then((function(n){e=n}))}),(function(){}));if(n&&n.then)return n.then((function(){}))}}();return r&&r.then?r.then(n):n()},t=this;if(!t.provider)throw new v;var r=f((function(){return Promise.resolve(t.provider.send("eth_chainId").then(p)).then((function(n){e=n}))}),(function(){}));return Promise.resolve(r&&r.then?r.then(n):n())}catch(o){return Promise.reject(o)}},t.getAccount=function(){try{var e,n=function(){function n(){return e||(e=p(t.provider.send({method:"eth_accounts"}))[0]),e}var r=function(){if(!e){var n=f((function(){return Promise.resolve(t.provider.enable().then((function(e){return p(e)[0]}))).then((function(n){e=n}))}),(function(){}));if(n&&n.then)return n.then((function(){}))}}();return r&&r.then?r.then(n):n()},t=this;if(!t.provider)throw new v;var r=f((function(){return Promise.resolve(t.provider.send("eth_accounts").then((function(e){return p(e)[0]}))).then((function(n){e=n}))}),(function(){}));return Promise.resolve(r&&r.then?r.then(n):n())}catch(o){return Promise.reject(o)}},t.deactivate=function(){this.provider&&this.provider.removeListener&&(this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged),this.provider.removeListener("close",this.handleClose),this.provider.removeListener("networkChanged",this.handleNetworkChanged))},t.isAuthorized=function(){try{var e=this;return e.provider?Promise.resolve(f((function(){return Promise.resolve(e.provider.send("eth_accounts").then((function(e){return p(e).length>0})))}),(function(){return!1}))):Promise.resolve(!1)}catch(n){return Promise.reject(n)}},n}(r.a)}}]);
//# sourceMappingURL=50.188a0522.chunk.js.map