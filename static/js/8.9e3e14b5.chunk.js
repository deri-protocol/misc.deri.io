(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[8],{1742:function(e,t,n){"use strict";t.a=n.p+"static/media/staked.46571832.svg"},1980:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var a,s,r=n(58),c=n(0),i=n(2),o=n(10),l=n(5),b=n(71),d=n(596),u=n(176),j=n(600),p=n(601),m=n(602),x=n(599),f=n(603),O=n(1742),v=n(606),h=(n(2325),n(57)),k=n(251),g=n(30),y=n(20),w=n(90),S=n.n(w),N=n(3),T="0x96C3966534b4377691e11e163A0409Ad01667343";function _(e){var t=e.lang,n=e.pool,a=e.wallet,s=Object(b.g)(),r=["311860","311904"],h=Object(l.useState)({}),w=Object(o.a)(h,2),_=w[0],E=w[1],C=Object(l.useState)(n.address),I=Object(o.a)(C,2),q=I[0],X=I[1],D=Object(l.useState)(!1),L=Object(o.a)(D,2),B=L[0],P=L[1],U=Object(l.useState)(),z=Object(o.a)(U,2),A=z[0],H=z[1],M=Object(l.useState)(!0),R=Object(o.a)(M,2),J=(R[0],R[1]),V=Object(l.useState)([]),Z=Object(o.a)(V,2),G=Z[0],K=Z[1],Y=Object(l.useState)([]),Q=Object(o.a)(Y,2),W=Q[0],$=Q[1],ee=Object(l.useState)(0),te=Object(o.a)(ee,2),ne=te[0],ae=te[1],se=Object(l.useState)(0),re=Object(o.a)(se,2),ce=re[0],ie=re[1],oe=Object(l.useState)(),le=Object(o.a)(oe,2),be=le[0],de=le[1],ue=Object(l.useState)(0),je=Object(o.a)(ue,2),pe=je[0],me=je[1],xe=Object(k.a)("ERC20",42161,"0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12"),fe=Object(k.a)("ERC20",42161,"0x82af49447d8a07e3bd95bd0d56f35241523fbab1"),Oe=Object(k.a)("arbitrumLp",42161),ve=Object(k.a)("LpTokenId",42161),he=Object(k.a)("PairAbi",42161),ke=Object(l.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E({}),e.next=3,n.getPoolInfo(n.address,n.chainId,n.version);case 3:t=e.sent,X(n.address),E(t);case 6:case"end":return e.stop()}}),e)}))),[n]),ge=Object(l.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var t,n,a,s,r,i,o,l,b,d,u,j,p;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E({}),e.next=3,xe.balanceOf(T);case 3:return t=e.sent,e.next=6,fe.balanceOf(T);case 6:return n=e.sent,a="".concat("https://infoapi.deri.io","/stats_for_token"),e.next=10,fetch(a);case 10:return s=e.sent,e.next=13,s.json();case 13:return r=e.sent,"https://sig.oraclum.io/unsigned?symbols=ETHUSD",e.next=17,S.a.get("https://sig.oraclum.io/unsigned?symbols=ETHUSD");case 17:i=e.sent,o=i.data.ETHUSD,l=r.data.price,b=g.a.from(t._hex).toString()/Math.pow(10,18),d=g.a.from(n._hex).toString()/Math.pow(10,18),u=Object(y.a)(b).times(l).toNumber(),j=Object(y.a)(d).times(o).toNumber(),p=u+j,console.log("getLiquidity",p),E({liquidity:p});case 27:case"end":return e.stop()}}),e)}))),[xe,fe]),ye=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||"v3"!==n.version&&"v3_lite"!==n.version){e.next=5;break}return e.next=3,n.getVenusEarned(a,n.address);case 3:t=e.sent,H(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=Object(l.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getIsStaked(a,n);case 2:(t=e.sent)&&(P(t.isStaked),X(t.poolAddress));case 4:case"end":return e.stop()}}),e)}))),[a,n]),Se=Object(l.useCallback)(function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(Object(i.a)(Object(c.a)().mark((function e(){var t,n,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(y.x)(42161),e.next=3,Oe.connect(t);case 3:return n=e.sent,console.log("bTime",n),a=r.map(function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var a,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.next=3,n.getSecondsPerLiquidityInsideX128(t);case 3:return(s=e.sent)&&(a.id=t,a.timestamp=g.a.from(s.timestamp._hex).toString(),a.secondsPerLiquidityInsideX128=g.a.from(s.secondsPerLiquidityInsideX128._hex).toString()),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=8,Promise.all(a);case 8:a=e.sent,$(a);case 10:case"end":return e.stop()}}),e)}))),1e3);case 2:return e.abrupt("return",undefined);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[Oe]),Ne=Object(l.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.map(function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,Oe.getSecondsPerLiquidityInsideX128(t);case 3:return(a=e.sent)&&(n.id=t,n.timestamp=g.a.from(a.timestamp._hex).toString(),n.secondsPerLiquidityInsideX128=g.a.from(a.secondsPerLiquidityInsideX128._hex).toString()),console.log("aTime res",a),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(t);case 3:t=e.sent,Se(),K(t);case 6:case"end":return e.stop()}}),e)}))),[Oe]),Te=Object(l.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var t,n,a,s,l,b,d,u;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.map(function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,ve.positions(t);case 3:return a=e.sent,n={tickLower:a.tickLower,tickUpper:a.tickUpper,liquidity:g.a.from(a.liquidity._hex).toString()},e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(t);case 3:return t=e.sent,e.next=6,he.slot0();case 6:return n=(n=e.sent).tick,a=t.map((function(e){var t=Object(y.p)(n,e.tickLower,e.tickUpper,e.liquidity),a=Object(o.a)(t,2),s=a[0],r=a[1];return{deri:s/Math.pow(10,18),eth:r/Math.pow(10,18)}})),s=a.reduce((function(e,t){return e+t.deri}),0),l=a.reduce((function(e,t){return e+t.eth}),0),"https://sig.oraclum.io/unsigned?symbols=ETHUSD",e.next=14,S.a.get("https://sig.oraclum.io/unsigned?symbols=ETHUSD");case 14:b=e.sent,console.log("ETHUSD",b.data),d=b.data.ETHUSD,u=Object(y.a)(l).times(d).toNumber(),ie(u),me(s);case 20:case"end":return e.stop()}}),e)}))),[ve,r,he]),_e=Object(l.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var t,n,a,s,r,i,o;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(ne&&pe&&ce)){e.next=14;break}return t="".concat("https://infoapi.deri.io","/stats_for_token"),e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,s=a.data.price,r=Object(y.a)(pe).times(s).toNumber(),i=r+ce,o=Object(y.a)(ne).times(s).toNumber(),de(o/i*100);case 14:case"end":return e.stop()}}),e)}))),[ne,pe,ce]),Ee=Object(l.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var t,n,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getTimeRewardInfo",G,W),t=W.map(function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n,a,s,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=G.find((function(e){return e.id===t.id})),a=n.secondsPerLiquidityInsideX128,e.next=4,Oe.getRewardInBetween(t.id,t.timestamp,a,t.secondsPerLiquidityInsideX128);case 4:if(!(s=e.sent)){e.next=8;break}return r={reward:g.a.from(s._hex).toString()/Math.pow(10,18),id:t.id,timestamp:Math.abs(t.timestamp-n.timestamp)},e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(t);case 4:t=e.sent,console.log("getTimeRewardInfo",t),0!==t[0].timestamp&&(n=t.reduce((function(e,t){return e+t.reward}),0),31536e6,a=n/(1e3*t[0].timestamp)*31536e6,ae(a));case 7:case"end":return e.stop()}}),e)}))),[G,W,Oe]),Ce=function(e){e.target.src=v.default};Object(l.useEffect)((function(){"ulp"===n.version&&xe?ge():ke(),a.isConnected()&&(we(),ye())}),[n,a.detail.account,xe,fe]),Object(l.useEffect)((function(){var e=sessionStorage.getItem(n.address);null!==e&&e&&J(!1)}),[n]);Object(l.useEffect)((function(){"ulp"===n.version&&Oe&&(K([]),$([]),de(),Ne())}),[n.version,Oe]),Object(l.useEffect)((function(){"ulp"===n.version&&ve&&he&&Te()}),[ve,n.version,he]),Object(l.useEffect)((function(){ne&&pe&&ce&&_e()}),[ne,pe,ce]),Object(l.useEffect)((function(){G.length&&Oe&&W.length&&Ee()}),[G,W,Oe]);var Fe={BSC:"BNB Chain",ZKSYNC:"zkSync Era"},Ie="ulp"===n.version?"/lppool/".concat(n.chainId,"/").concat(n.address):"/pool/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(n.type,"/").concat(n.address);return Object(N.jsx)("div",{className:"".concat("0x243681B8Cd79E3823fF574e07B2378B8Ab292c1E"===n.address?"showGuide":""," card-box"),children:Object(N.jsxs)("div",{className:"v2_lite_open"===n.version?"card-list open-list":"card-list",onClick:function(){!function(e){"v2_lite_open"!==n.version&&s.push(e)}(Ie)},children:[Object(N.jsxs)("div",{className:"card-header ".concat(n.retired?"".concat(n.version):""," ").concat(n.new?"new":""),children:[Object(N.jsxs)("div",{className:"pool-network-type",children:[Object(N.jsx)("div",{className:"network-logo",children:Object(N.jsx)("img",{alt:"",src:function(e){var t;return"56"===e||"97"===e?t=j.default:"137"===e?t=m.default:"1"===e?t=x.default:"42161"===e||"421611"===e||"421613"===e?t=p.default:"324"===e&&(t=f.default),t}(n.chainId)})}),Object(N.jsxs)("div",{className:"pool-type-network-text",children:[Object(N.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==n.address&&Object(N.jsxs)(N.Fragment,{children:[t[n.type]," ",t[n.zone]]}),"0x1eF92eDA3CFeefb8Dae0DB4507f860d3b73f29BA"===n.address&&Object(N.jsx)(N.Fragment,{children:"DERI-based"}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===n.address&&Object(N.jsx)(N.Fragment,{children:t[n.zone]})]}),Object(N.jsx)("div",{className:"pool-network-text",children:Fe[n.chain.toUpperCase()]?Fe[n.chain.toUpperCase()]:n.chain.toUpperCase()})]})]}),Object(N.jsxs)("div",{className:"base-token-logo",children:[n.isLp&&Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"lp-base-token-bg",children:[Object(N.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[0].bTokenSymbol)}),Object(N.jsx)("span",{className:"lp-con",children:"+"}),Object(N.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[1].bTokenSymbol)})]})}),!n.isLp&&"v3"!==n.version&&"v3_lite"!==n.version&&Object(N.jsx)(N.Fragment,{children:n.bTokens.map((function(e,t){return Object(N.jsx)("div",{className:"base-token-box-bg no-animation-tokens",children:Object(N.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol),children:"v2_lite_open"===n.version&&Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("img",{alt:"",onError:Ce,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})})})},t)}))}),("v3"===n.version||"v3_lite"===n.version)&&!n.singleBtoken&&Object(N.jsx)(F,{bTokens:n.bTokens}),("v3"===n.version||"v3_lite"===n.version)&&n.singleBtoken&&Object(N.jsx)("div",{className:"base-token-box-bg no-animation-tokens",children:Object(N.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[0].bTokenSymbol)})})]})]}),Object(N.jsxs)("div",{className:"card-content",children:[Object(N.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==n.version&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"max-apy-title",children:"v2"===n.version||"v3_lite"===n.version||"v3"===n.version?t["max-apy"]:t.apy}),Object(N.jsx)("div",{className:"max-apy-num",children:Object(N.jsx)(d.a,{value:"ulp"===n.version?be:_.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(N.jsxs)("div",{className:"total-pool-liquidity",children:[Object(N.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(N.jsx)("div",{className:"total-liquidity-num",children:Object(N.jsx)(d.a,{value:_.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===n.type?"ulp"===n.version?0:7:0})})]}),Object(N.jsxs)("div",{className:"your-deri-epoch",children:[B&&q===n.address&&Object(N.jsxs)("div",{className:"staked-box",children:[Object(N.jsx)("img",{src:O.a,alt:""}),t.staked]}),+A>0&&("v3"===n.version||"v3_lite"===n.version)&&Object(N.jsx)("span",{className:"xvs-collectable",children:Object(N.jsxs)("div",{className:"staked-box",children:[Object(N.jsx)(d.a,{width:"50px",value:A,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(N.jsx)("div",{className:"stake-button",children:Object(N.jsx)(u.a,{disabled:"v2_lite_open"===n.version,className:"button",outline:!0,label:"v2_lite_open"===n.version?t.operating:t.stake})})]})]})})}var E=h.a.div(a||(a=Object(r.a)(["\n  @-webkit-keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n\n  @keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px) ;\n        -moz-transform : translateX(100px) ;\n    }\n  }\n  .base-token{\n    margin-left: 0px !important;\n    z-index : -2;\n    visibility: hidden;\n    background-color: #111e34;\n    border : 1px solid #fff;\n  }\n  @media only screen and (max-width: 760px) {\n    .base-token{\n      display:none;\n    }\n  }\n  .base-token-box-bg.explode:hover .move  {\n    -webkit-animation : explode .4s .0s linear;\n    -moz-animation :  explode .4s .0s linear;\n    animation: explode .4s .0s linear;\n    visibility: visible;    \n  }\n  \n  .base-token-box-bg.explode:hover .base-token {\n    z-index : 2 !important;\n  } \n\n"]))),C=h.a.div(s||(s=Object(r.a)(["\n  position: absolute;\n  transform : ",";\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n  border-radius: 50%;\n  .move {\n    transform : translateX(100px) ",";\n  }\n"])),(function(e){return"rotate(".concat(-e.rotate,"deg)")}),(function(e){return"rotate(".concat(e.rotate,"deg)")})),F=function(e){var t=e.bTokens,n=void 0===t?[]:t,a=360/n.length;return Object(N.jsxs)(E,{className:"v3-tokens",children:[Object(N.jsx)("div",{className:"tokens",children:n.filter((function(e,t){return t<3})).map((function(e,t){return Object(N.jsx)("div",{className:"base-token-box-bg",children:Object(N.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol)})},t)}))}),Object(N.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(N.jsxs)("div",{className:"base-token-bg num-token",children:[n.length-3," +"]}),n.map((function(e,t){var n=a*t;return Object(N.jsx)(C,{className:"base-token",rotate:n,width:"100",children:Object(N.jsx)("div",{width:"100",rotate:n,className:"base-token-bg move ".concat(e.bTokenSymbol)})},t)}))]})]})}},1981:function(e,t,n){},2325:function(e,t,n){}}]);
//# sourceMappingURL=8.9e3e14b5.chunk.js.map