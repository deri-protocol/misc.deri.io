(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[30],{1869:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var c,a=r(201),n=r(310),s=r(5),i=r(111),o={};function l(e){var t=Object(i.b)(),r=function(e){return o[e]}(e),c=r.address,l=r.abi,d=t.ethereum;return Object(s.useMemo)((function(){if(!c||!l||!d)return null;var e=new n.a(d,"any");return new a.b(c,l,function(e,t){return t?function(e,t){return e.getSigner(t).connectUnchecked()}(e,t):e}(e,t.account))}),[c,l,d])}(c=r(611)).keys().forEach((function(e){var t=e.split("/"),r=t[t.length-1];o[r.substring(0,r.indexOf("."))]=c(e)}))},2501:function(e,t,r){},2720:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r(2),n=r(10),s=r(5),i=r(59),o=r(21),l=r(176),d=r(595),u=r(150),b=r.p+"static/media/time.77d9d1c0.svg",j=(r(2501),r(1869)),h=r(16),m=r(61),f=r(30),p=r(3);t.default=Object(i.b)("wallet","poolManager")(Object(i.c)((function(e){var t=e.wallet,r=e.lang,i=Object(s.useState)(0),O=Object(n.a)(i,2),x=O[0],v=O[1],g=Object(s.useState)(!0),w=Object(n.a)(g,2),C=w[0],k=w[1],N=Object(l.c)(),S=Object(s.useState)(!1),y=Object(n.a)(S,2),R=y[0],E=y[1],U=Object(j.a)("compensation"),D=Object(j.a)("ERC20USDC"),I={processing:"Claim Processing",success:"Claim Reward Executed",error:"Claim Reward Failed"},T={success:"Claim Reward",error:"Transaction Failed"},M=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var r,a,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.isConnected()&&U&&Object(o.j)(t.detail.chainId,42161))){e.next=11;break}return e.next=3,U.compensations(t.detail.account);case 3:return r=e.sent,e.next=6,D.decimals();case 6:a=e.sent,console.log(f.a.from(r._hex).toString()),n=f.a.from(r._hex).toNumber()/Math.pow(10,a),E(+n>0),v(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var r,a,n,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!U||42161!==t.detail.chainId){e.next=22;break}return e.prev=1,e.next=4,U.claim();case 4:r=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0),e.t0.error&&e.t0.error.data&&e.t0.error.data.message&&(a=e.t0.error.data.message,N.error(a)),e.abrupt("return",!1);case 12:if(!r||!r.hash){e.next=16;break}m.a.emit(h.r,{title:I,content:T,hash:r.hash}),e.next=17;break;case 16:return e.abrupt("return",!1);case 17:return e.next=19,r.wait();case 19:n=e.sent,console.log("receipt",n),n&&(console.log("receipt",n),n&&n.transactionHash&&(s=n.transactionHash,n.status?(M(),k(!0),m.a.emit(h.s,{title:I,content:T,context:{success:!0,hash:s,error:"error"}})):m.a.emit(h.s,{title:I,content:T,context:{success:!1,hash:s,error:"error"}})));case 22:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){t.isConnected()&&M()}),[t.chainId,t.account]),Object(s.useEffect)((function(){R?(new Date).getTime()>=16758144e5?k(!0):k(!1):k(!0)}),[R]),Object(p.jsx)("div",{className:"airdrop-box",children:Object(p.jsx)("div",{className:"airdrop-info",children:Object(p.jsxs)("div",{className:"airdrop-info-box",children:[Object(p.jsx)("div",{className:"airdrop-title",children:"DERI Compensation Plan"}),Object(p.jsxs)("div",{children:["A fund has been set up by the treasury to compensate for the loss of liquidity providers due to exploit on 2022-10-28. Refer"," ",Object(p.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri-protocol.medium.com/post-mortem-of-the-2022-10-28-attack-on-deri-protocol-3eb4f1ecd49d",children:"here"})," ","for more details."]}),Object(p.jsxs)("div",{className:"wallet-address",children:[Object(p.jsx)("span",{className:"blue-logo"}),Object(o.n)(t.detail.account)]}),Object(p.jsxs)("div",{className:"wallet-balance",children:["Recovery Amount :"," ",Object(p.jsx)(d.a,{value:x,decimalScale:2,thousandSeparator:!0})," ","USDC"]}),Object(p.jsxs)("div",{className:"airdrop-time position",children:[Object(p.jsx)("div",{className:"time-logo",children:Object(p.jsx)("img",{src:b,alt:""})}),Object(p.jsxs)("div",{className:"time-text",children:[Object(p.jsxs)("div",{className:"time-title",children:[Object(p.jsx)("div",{children:r["start-time"]}),Object(p.jsx)("div",{children:r["expire-time"]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"2022-11-08 00:00:00 UTC"}),Object(p.jsx)("div",{children:"2023-02-08 00:00:00 UTC"})]})]})]}),Object(p.jsx)("div",{className:"claim",children:Object(p.jsx)(u.a,{fontWeight:"bold",disabled:C,label:r.claim,width:277,height:72,fontSize:32,onClick:_,bgColor:void 0,selectedBorderColor:void 0,position:void 0,icon:void 0,className:void 0})})]})})})})))}}]);
//# sourceMappingURL=30.1a8c2967.chunk.js.map