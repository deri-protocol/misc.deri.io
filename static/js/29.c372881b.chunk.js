(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[29],{1869:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var r,a=c(201),i=c(310),s=c(5),n=c(111),o={};function l(e){var t=Object(n.b)(),c=function(e){return o[e]}(e),r=c.address,l=c.abi,d=t.ethereum;return Object(s.useMemo)((function(){if(!r||!l||!d)return null;var e=new i.a(d,"any");return new a.b(r,l,function(e,t){return t?function(e,t){return e.getSigner(t).connectUnchecked()}(e,t):e}(e,t.account))}),[r,l,d])}(r=c(611)).keys().forEach((function(e){var t=e.split("/"),c=t[t.length-1];o[c.substring(0,c.indexOf("."))]=r(e)}))},2497:function(e,t,c){},2719:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c(2),i=c(10),s=c(5),n=c(59),o=c(21),l=c(176),d=(c(595),c(150)),j=(c(40),c.p+"static/media/time.77d9d1c0.svg"),b=(c.p,c(2497),c(1869)),u=c(16),O=c(61),h=c(3),m=c(177),x=m.BigNumber;m.ethers,m.utils;t.default=Object(n.b)("wallet","poolManager")(Object(n.c)((function(e){var t=e.lang,c=e.wallet,n=void 0===c?{}:c,m=e.type,v=void 0===m?"deri":m,f=Object(s.useState)(0),p=Object(i.a)(f,2),g=(p[0],p[1],Object(s.useState)(!0)),N=Object(i.a)(g,2),w=N[0],C=N[1],k=Object(l.c)(),S=Object(s.useState)({}),U=Object(i.a)(S,2),T=(U[0],U[1],Object(s.useState)(!1)),y=Object(i.a)(T,2),D=(y[0],y[1],Object(s.useState)(!0)),E=Object(i.a)(D,2),I=(E[0],E[1],Object(s.useState)(!1)),R=Object(i.a)(I,2),Y=R[0],B=R[1],H=Object(b.a)("airDrop"),J=(Object(b.a)("ERC20USDC"),{text:"Claim Reward",icon:"USDC"}),M={success:"Claim Reward",error:"Transaction Failed"},W=function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.isConnected()&&H&&Object(o.j)(n.detail.chainId,42161))){e.next=5;break}return e.next=3,H.getBalances(u.Y,[n.detail.account]);case 3:(t=e.sent)[0]&&x.from(t[0]._hex).toNumber()?(console.log(x.from(t[0]._hex).toString()),B(!0)):B(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=Object(s.useCallback)(Object(a.a)(Object(r.a)().mark((function e(){var t,c,a,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConnected()||!H||42161!==n.detail.chainId){e.next=22;break}return e.prev=1,e.next=4,H.claim(u.Y);case 4:t=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0),e.t0.error&&e.t0.error.data&&e.t0.error.data.message&&(c=e.t0.error.data.message,k.error(c)),e.abrupt("return",!1);case 12:if(!t||!t.hash){e.next=16;break}O.a.emit(u.r,{title:J,content:M,hash:t.hash}),e.next=17;break;case 16:return e.abrupt("return",!1);case 17:return e.next=19,t.wait();case 19:a=e.sent,console.log("receipt",a),a&&(console.log("receipt",a),a&&a.transactionHash&&(i=a.transactionHash,a.status?(W(),C(!0),O.a.emit(u.s,{title:J,content:M,context:{success:!0,hash:i,error:"error"}})):O.a.emit(u.s,{title:J,content:M,context:{success:(!1).success,hash:i,error:"error"}})));case 22:case"end":return e.stop()}}),e,null,[[1,7]])}))),[H,n.detail.chainId]);return Object(s.useEffect)((function(){n.isConnected()&&W()}),[n.chainId,n.account]),Object(s.useEffect)((function(){Y?(new Date).getTime()>=16820712e5?C(!0):C(!1):C(!0)}),[Y]),Object(h.jsx)("div",{className:"airdrop-box",children:Object(h.jsx)("div",{className:"airdrop-info",children:Object(h.jsxs)("div",{className:"airdrop-info-box",children:[Object(h.jsx)("div",{className:"airdrop-title",children:"Deri Protocol 2nd Year Anniversary Winners"}),Object(h.jsxs)("div",{className:"wallet-address",children:[Object(h.jsx)("span",{className:"blue-logo"}),Object(o.n)(n.detail.account)]}),"usdc"===v&&Object(h.jsxs)("div",{className:"airdrop-time position",children:[Object(h.jsx)("div",{className:"time-logo",children:Object(h.jsx)("img",{src:j,alt:""})}),Object(h.jsxs)("div",{className:"time-text",children:[Object(h.jsxs)("div",{className:"time-title",children:[Object(h.jsx)("div",{children:t["start-time"]}),Object(h.jsx)("div",{children:t["expire-time"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"2023-04-17 08:00:00 UTC"}),Object(h.jsx)("div",{children:"2023-04-21 10:00:00 UTC"})]})]})]}),"deri"===v&&Object(h.jsxs)("div",{className:"airdrop-time",children:[Object(h.jsx)("div",{className:"time-logo",children:Object(h.jsx)("img",{src:j,alt:""})}),Object(h.jsxs)("div",{className:"time-text",children:[Object(h.jsxs)("div",{className:"time-title",children:[Object(h.jsx)("div",{children:t["start-time"]}),Object(h.jsx)("div",{children:t["expire-time"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"2022-03-09 10:00:00 UTC"}),Object(h.jsx)("div",{children:"2022-03-11 12:00:00 UTC"})]})]})]}),Object(h.jsx)("div",{className:"claim",children:Object(h.jsx)(d.a,{fontWeight:"bold",disabled:w,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:_})})]})})})})))}}]);
//# sourceMappingURL=29.c372881b.chunk.js.map