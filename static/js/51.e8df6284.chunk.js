(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[51],{2713:function(e,t,a){"use strict";a.r(t);var n=a(259),c=a(0),r=a(2),s=a(10),i=a(5),o=a(72),l=a(59),u=a(176),b=a(1643),d=a(21),j=a(144),p=a(409),f=a(230),O=a(19),h=(a(1985),a(1742),a(318)),x=a(601),m=a(1986),v=a(595),k=a.p+"static/media/no-nft.502d585f.svg",g=a(270),w=a(33),N=a(1703),y=a(150),S=a(16),E=a(231),I=a(30),L=(a(1984),a(24));var T=a(61),C=a(90),P=a.n(C),A=a(3),D=j[O.DeriEnv.get()].chainInfo,q=j[O.DeriEnv.get()].chainInfo,H="0x96C3966534b4377691e11e163A0409Ad01667343";var R=function(e){e.wallet;var t,a=e.type,n=e.lang,o=e.getLang,l=e.afterTransaction,u=e.tokenIdList,b=(e.alert,e.setActiveIndex),j=e.NFTContract,p=e.PoolContract,f=e.address,O=Object(i.useState)(!1),h=Object(s.a)(O,2),x=h[0],m=h[1],v=Object(i.useState)([]),g=Object(s.a)(v,2),w=g[0],N=g[1],E=Object(i.useState)(!1),I=Object(s.a)(E,2),C=I[0],P=I[1],D=Object(i.useState)(n.approve),q=Object(s.a)(D,2),H=q[0],R=q[1],F=(t=j,Object(i.useMemo)((function(){return function(){var e=Object(r.a)(Object(c.a)().mark((function e(a,n,r){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t[a].apply(t,Object(L.a)(n).concat([r])));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()}),[t])),_=["#824A4A","#69985E","#93A1B8","#377DFF","#59AE99"],U=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t,a,n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=0;case 2:if(!(a<u.length)){e.next=13;break}return e.next=5,j.getApproved(u[a]);case 5:n=e.sent,console.log("getApproved",n),r={},r=n&&n.toLocaleLowerCase()===f.toLocaleLowerCase()?{id:u[a],isApproved:!0}:{id:u[a],isApproved:!1},t.push(r);case 10:a++,e.next=2;break;case 13:console.log(t),N(t);case 15:case"end":return e.stop()}}),e)}))),[u,j]),M=Object(i.useCallback)(function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){var a,n,r,s,i,o,l;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={text:"Approve",icon:"DERI"},n={success:"Approve ".concat(t),error:"Transaction failed"},t=+t,e.prev=3,r=[f,t],e.next=7,Object(d.v)(j,"approve",r);case 7:return s=e.sent,console.log(s),e.next=11,F("approve",r,{gasLimit:s});case 11:if(i=e.sent,console.log("approve",i),!i||!i.hash){e.next=17;break}T.a.emit(S.r,{title:a,content:n,hash:i.hash}),e.next=18;break;case 17:return e.abrupt("return",!1);case 18:return e.next=20,i.wait();case 20:if(o=e.sent,console.log("receipt",o),!o){e.next=33;break}if(console.log("receipt",o),!o||!o.transactionHash){e.next=33;break}if(l=o.transactionHash,!o.status){e.next=31;break}return T.a.emit(S.s,{title:a,content:n,context:{success:!0,hash:l,error:"error"}}),e.abrupt("return",!0);case 31:return T.a.emit(S.s,{title:a,content:n,context:{success:(!1).success,hash:l,error:"error"}}),e.abrupt("return",!1);case 33:e.next=39;break;case 35:return e.prev=35,e.t0=e.catch(3),console.error(e.t0),e.abrupt("return",!1);case 39:case"end":return e.stop()}}),e,null,[[3,35]])})));return function(t){return e.apply(this,arguments)}}(),[j]),B=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=w.find((function(e){return!e.isApproved})))){e.next=6;break}return e.next=4,M(t.id);case 4:e.sent,U();case 6:case"end":return e.stop()}}),e)}))),[w]),X=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t,r,s,i,u,b,j;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={text:n["add-liquidity-state"],icon:"DERI"},r={success:"".concat(o("add-baseToken-liquidity",{baseToken:"UNISWAP-LP"})),error:n["transaction-failed"]},e.prev=2,e.next=5,Object(d.v)(p,"deposit",[]);case 5:return s=e.sent,e.next=8,p["deposit()"]({gasLimit:s});case 8:if(i=e.sent,console.log("deposit",i),!i||!i.hash){e.next=14;break}T.a.emit(S.r,{title:t,content:r,hash:i.hash}),e.next=15;break;case 14:return e.abrupt("return",!1);case 15:return e.next=17,i.wait();case 17:if(u=e.sent,console.log("receipt",u),!u){e.next=32;break}if(console.log("receipt",u),!u||!u.transactionHash){e.next=32;break}if(b=u.transactionHash,j="add"===a?0:1,l&&l(j),!u.status){e.next=30;break}return T.a.emit(S.s,{title:t,content:r,context:{success:!0,hash:b,error:"error"}}),e.abrupt("return",!0);case 30:return T.a.emit(S.s,{title:t,content:r,context:{success:(!1).success,hash:b,error:"error"}}),e.abrupt("return",!1);case 32:e.next=38;break;case 34:return e.prev=34,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",!1);case 38:case"end":return e.stop()}}),e,null,[[2,34]])}))),[p,a]),z=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t,r,s,i,u,b,j;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={text:n["remove-liquidity-state"],icon:"DERI"},r={success:"".concat(o("remove-baseToken-liquidity",{baseToken:"UNISWAP-LP"})),error:n["transaction-failed"]},e.prev=2,e.next=5,Object(d.v)(p,"withdraw",[]);case 5:return s=e.sent,e.next=8,p["withdraw()"]({gasLimit:s});case 8:if(i=e.sent,console.log("withdraw",i),!i||!i.hash){e.next=14;break}T.a.emit(S.r,{title:t,content:r,hash:i.hash}),e.next=15;break;case 14:return e.abrupt("return",!1);case 15:return e.next=17,i.wait();case 17:if(u=e.sent,console.log("receipt",u),!u){e.next=32;break}if(console.log("receipt",u),b="add"===a?0:1,l&&l(b),!u||!u.transactionHash){e.next=32;break}if(j=u.transactionHash,!u.status){e.next=30;break}return T.a.emit(S.s,{title:t,content:r,context:{success:!0,hash:j,error:"error"}}),e.abrupt("return",!0);case 30:return T.a.emit(S.s,{title:t,content:r,context:{success:(!1).success,hash:j,error:"error"}}),e.abrupt("return",!1);case 32:e.next=38;break;case 34:return e.prev=34,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",!1);case 38:case"end":return e.stop()}}),e,null,[[2,34]])}))),[p,a]);return Object(i.useEffect)((function(){if(w.length){var e=w.find((function(e){return!e.isApproved}));if(e){var t="".concat(n.approve," ").concat(e.id);R(t)}else P(!0)}}),[w]),Object(i.useEffect)((function(){j&&u&&u.length&&"add"===a&&U()}),[u,j,a]),Object(i.useEffect)((function(){m(!u.length),P(!u.length),"remove"===a?(P(!0),b(1)):b(0)}),[u,a]),Object(A.jsxs)("div",{className:"operate-liquidity-lp operate-liquidity",children:[u&&u.length?Object(A.jsxs)("div",{className:"add-remove-nft-box",children:[Object(A.jsxs)("div",{className:"unstaked-nft",children:["Your ","add"===a?"unstaked":"staked"," DERI/ETH LP NFTs"]}),Object(A.jsx)("div",{className:"tokenIdList",children:u&&u.map((function(e,t){return Object(A.jsxs)("div",{className:"tokenId-box",children:[Object(A.jsx)("div",{className:"color-box",style:{backgroundColor:_[t]}}),Object(A.jsx)("div",{className:"tokenId-text",children:e})]},"index")}))})]}):Object(A.jsxs)("div",{className:"no-nft-box",children:[Object(A.jsx)("img",{src:k,alt:""}),Object(A.jsx)("div",{children:"add"===a?"No DERI-ETH LP NFT in your wallet":"No DERI-ETH LP NFT staked"})]}),Object(A.jsx)("div",{className:"add-remove-btn",children:C?Object(A.jsx)(y.a,{width:"331",fontSize:"18",disabled:x,label:"add"===a?"STAKE ALL LP NFTS":"UNSTAKE ALL LP NFTS",type:S.E,onClick:"add"===a?X:z}):Object(A.jsx)(y.a,{width:"331",fontSize:"18",disabled:x,label:H,type:S.E,onClick:B})})]})};t.default=Object(l.b)("wallet","poolManager")(Object(l.c)((function(e){var t=e.lang,a=e.wallet,l=void 0===a?{}:a,j=e.poolManager,O=e.getLang,k=Object(o.i)(),y=k.chainId,L=k.address,C=Object(i.useState)("show"),F=Object(s.a)(C,2),_=F[0],U=F[1],M=Object(u.c)(),B="UNISWAP-LP",X=Object(i.useState)(""),z=Object(s.a)(X,2),W=z[0],J=z[1],K=Object(i.useState)([]),$=Object(s.a)(K,2),Y=$[0],G=$[1],Q=Object(i.useState)(""),V=Object(s.a)(Q,2),Z=V[0],ee=V[1],te=Object(i.useState)(0),ae=Object(s.a)(te,2),ne=ae[0],ce=ae[1],re=Object(f.a)(),se=Object(i.useState)(!1),ie=Object(s.a)(se,2),oe=ie[0],le=ie[1],ue=Object(i.useState)([]),be=Object(s.a)(ue,2),de=be[0],je=be[1],pe=Object(i.useState)([]),fe=Object(s.a)(pe,2),Oe=fe[0],he=fe[1],xe=Object(i.useState)([]),me=Object(s.a)(xe,2),ve=me[0],ke=me[1],ge=Object(i.useState)([]),we=Object(s.a)(ge,2),Ne=we[0],ye=we[1],Se=Object(i.useState)(0),Ee=Object(s.a)(Se,2),Ie=Ee[0],Le=Ee[1],Te=Object(i.useState)(0),Ce=Object(s.a)(Te,2),Pe=Ce[0],Ae=Ce[1],De=Object(i.useState)(0),qe=Object(s.a)(De,2),He=qe[0],Re=qe[1],Fe=Object(i.useState)(0),_e=Object(s.a)(Fe,2),Ue=_e[0],Me=_e[1],Be=Object(i.useState)(),Xe=Object(s.a)(Be,2),ze=Xe[0],We=Xe[1],Je=D[y]&&D[y].name,Ke=Object(E.a)("ERC20",y,"0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12"),$e=Object(E.a)("ERC20",y,"0x82af49447d8a07e3bd95bd0d56f35241523fbab1"),Ye=Object(E.a)("IERC721",y),Ge=Object(E.a)("arbitrumLp",y),Qe=Object(E.a)("LpTokenId",y),Ve=Object(E.a)("PairAbi",y),Ze=Object(i.useRef)(),et=Object(i.useRef)(),tt=function(){var e=Object(r.a)(Object(c.a)().mark((function e(){var t,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ge["getRewardInfo(address)"](l.detail.account);case 2:(t=e.sent)&&(a=I.a.from(t._hex).toString()/Math.pow(10,18),ce(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),at=Object(i.useCallback)(function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(Object(r.a)(Object(c.a)().mark((function e(){var t,a,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.z)(y),e.next=3,Ge.connect(t);case 3:return a=e.sent,n=Oe.map(function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,a.getSecondsPerLiquidityInsideX128(t);case 3:return(r=e.sent)&&(n.id=t,n.timestamp=I.a.from(r.timestamp._hex).toString(),n.secondsPerLiquidityInsideX128=I.a.from(r.secondsPerLiquidityInsideX128._hex).toString()),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=7,Promise.all(n);case 7:n=e.sent,ye(n);case 9:case"end":return e.stop()}}),e)}))),1e3);case 2:return e.abrupt("return",undefined);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[Oe,Ge]),nt=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Oe.map(function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){var a,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.next=3,Ge.getSecondsPerLiquidityInsideX128(t);case 3:return(n=e.sent)&&(a.id=t,a.timestamp=I.a.from(n.timestamp._hex).toString(),a.secondsPerLiquidityInsideX128=I.a.from(n.secondsPerLiquidityInsideX128._hex).toString()),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(t);case 3:t=e.sent,at(),ke(t);case 6:case"end":return e.stop()}}),e)}))),[Oe,Ge]),ct=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t,a,n,i,o,l,u,b;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Oe.map(function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){var a,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.next=3,Qe.positions(t);case 3:return n=e.sent,a={tickLower:n.tickLower,tickUpper:n.tickUpper,liquidity:I.a.from(n.liquidity._hex).toString()},e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(t);case 3:return t=e.sent,e.next=6,Ve.slot0();case 6:return a=(a=e.sent).tick,n=t.map((function(e){var t=Object(d.r)(a,e.tickLower,e.tickUpper,e.liquidity),n=Object(s.a)(t,2),c=n[0],r=n[1];return{deri:c/Math.pow(10,18),eth:r/Math.pow(10,18)}})),i=n.reduce((function(e,t){return e+t.deri}),0),o=n.reduce((function(e,t){return e+t.eth}),0),"https://sig.oraclum.io/unsigned?symbols=ETHUSD",e.next=14,P.a.get("https://sig.oraclum.io/unsigned?symbols=ETHUSD");case 14:l=e.sent,u=l.data.ETHUSD,b=Object(d.a)(o).times(u).toNumber(),Ae(b),Re(i);case 19:case"end":return e.stop()}}),e)}))),[Qe,Oe,Ve]),rt=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t,a,n,r,s,i,o;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Ie&&He&&Pe)){e.next=14;break}return t="".concat("https://infoapi.deri.io","/stats_for_token"),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,r=n.data.price,s=Object(d.a)(He).times(r).toNumber(),i=s+Pe,o=Object(d.a)(Ie).times(r).toNumber(),We(o/i*100);case 14:case"end":return e.stop()}}),e)}))),[Ie,He,Pe]),st=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t,a,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("bTimeRewardInfo aTimeRewardInfo",Ne,ve),t=Ne.map(function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){var a,n,r,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ve.find((function(e){return e.id===t.id})),n=a.secondsPerLiquidityInsideX128,e.next=4,Ge.getRewardInBetween(t.id,t.timestamp,n,t.secondsPerLiquidityInsideX128);case 4:if(!(r=e.sent)){e.next=8;break}return s={reward:I.a.from(r._hex).toString()/Math.pow(10,18),id:t.id,timestamp:Math.abs(t.timestamp-a.timestamp)},e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(t);case 4:0!==(t=e.sent)[0].timestamp&&(a=t.reduce((function(e,t){return e+t.reward}),0),31536e6,n=a/(1e3*t[0].timestamp)*31536e6,Le(n));case 6:case"end":return e.stop()}}),e)}))),[ve,Ne,Ge]),it=function(e){tt(),bt(),dt(),jt(),Me(e)},ot=Object(i.useMemo)((function(){var e;return e={},Object(n.a)(e,t.add,{content:Object(A.jsx)(R,{type:"add",getLang:O,setActiveIndex:Me,afterTransaction:it,wallet:l,alert:M,address:L,lang:t,NFTContract:Ye,PoolContract:Ge,tokenIdList:de}),style:{background:"linear-gradient(200.74deg, rgba(97, 122, 255, 0.1) -4.65%, rgba(223, 229, 255, 0) 50.94%, rgba(85, 91, 237, 0.05) 105.4%)"},borderColor:"#203B60",icon:"add-icon",iconWidth:"25",iconHeight:"25",inicon:"inactive-add",direction:"tab-left"}),Object(n.a)(e,t.remove,{content:Object(A.jsx)(R,{type:"remove",getLang:O,setActiveIndex:Me,afterTransaction:it,wallet:l,alert:M,address:L,lang:t,PoolContract:Ge,NFTContract:Ye,tokenIdList:Oe}),style:{background:"linear-gradient(200.74deg, rgba(97, 122, 255, 0.1) -4.65%, rgba(223, 229, 255, 0) 50.94%, rgba(85, 91, 237, 0.05) 105.4%)"},borderColor:"#203B60",icon:"remove-icon",iconWidth:"25",iconHeight:"25",iconMarginRight:"20",inicon:"inactive-remove",direction:"tab-right"}),e}),[t,l,O,it,Me,de,M,Oe,Ye,Ge,L]),lt=function(){var e=Object(r.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.loadDoubleMingingPool();case 2:t=(t=(t=j.lpPools).filter((function(e){return e.address===L})))[0],t.symbols.map((function(e){var t=[];return t.push(e.symbol),t})).join(","),J(t),G(t.bTokens);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ut=function(){var e=Object(r.a)(Object(c.a)().mark((function e(){var a,n,r,s,i,o,l;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==+ne){e.next=3;break}return M.error(t["no-deri-to-claim-yet"]),e.abrupt("return");case 3:return le(!0),a={text:"Claim Deri",icon:"DERI"},n={success:t["claim-deri-reward"],error:t["transaction-failed"]},e.prev=6,r=[L],e.next=10,Object(d.v)(Ge,"claim",r);case 10:return s=e.sent,e.next=13,Ge.claim({gasLimit:s});case 13:if(i=e.sent,console.log("claim",i),!i||!i.hash){e.next=19;break}T.a.emit(S.r,{title:a,content:n,hash:i.hash}),e.next=22;break;case 19:return tt(),le(!1),e.abrupt("return",!1);case 22:return e.next=24,i.wait();case 24:o=e.sent,console.log("receipt",o),o&&(console.log("receipt",o),o&&o.transactionHash&&(l=o.transactionHash,o.status?(T.a.emit(S.s,{title:a,content:n,context:{success:!0,hash:l,error:"error"}}),i.success&&ce(0)):T.a.emit(S.s,{title:a,content:n,context:{success:(!1).success,hash:l,error:"error"}}))),e.next=32;break;case 29:e.prev=29,e.t0=e.catch(6),console.error(e.t0);case 32:tt(),le(!1);case 34:case"end":return e.stop()}}),e,null,[[6,29]])})));return function(){return e.apply(this,arguments)}}(),bt=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t,a,n,r,s,i;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.detail.account){e.next=27;break}return e.next=3,Ye.balanceOf(l.detail.account);case 3:t=e.sent,t=I.a.from(t._hex).toString(),a=[],n=0;case 7:if(!(n<t)){e.next=16;break}return e.next=10,Ye.tokenOfOwnerByIndex(l.detail.account,n);case 10:r=e.sent,r=I.a.from(r._hex).toString(),a.push(r);case 13:n++,e.next=7;break;case 16:s=[],i=0;case 18:if(!(i<a.length)){e.next=26;break}return e.next=21,Ge.getPositionInfo(a[i]);case 21:e.sent[0].toLocaleLowerCase()===H.toLocaleLowerCase()&&s.push(a[i]);case 23:i++,e.next=18;break;case 26:je(s);case 27:case"end":return e.stop()}}),e)}))),[Ye,l.detail.account,Ge]),dt=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.detail.account){e.next=7;break}return e.next=3,Ge.getUserTokenIds(l.detail.account);case 3:t=(t=e.sent).map((function(e){return I.a.from(e._hex).toString()})),console.log("getStakedTokenIdList",t),he(t);case 7:case"end":return e.stop()}}),e)}))),[Ge,l.detail.account]),jt=Object(i.useCallback)(Object(r.a)(Object(c.a)().mark((function e(){var t,a,n,r,s,i,o,l,u,b,j,p;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ke.balanceOf(H);case 2:return t=e.sent,e.next=5,$e.balanceOf(H);case 5:return a=e.sent,n="".concat("https://infoapi.deri.io","/stats_for_token"),"https://sig.oraclum.io/unsigned?symbols=ETHUSD",e.next=10,P.a.get("https://sig.oraclum.io/unsigned?symbols=ETHUSD");case 10:return r=e.sent,s=r.data.ETHUSD,e.next=14,fetch(n);case 14:return i=e.sent,e.next=17,i.json();case 17:o=e.sent,l=o.data.price,u=I.a.from(t._hex).toString()/Math.pow(10,18),b=I.a.from(a._hex).toString()/Math.pow(10,18),j=Object(d.a)(u).times(l).toNumber(),p=Object(d.a)(b).times(s).toNumber(),ee(j+p);case 25:case"end":return e.stop()}}),e)}))),[Ke,$e]);return Object(i.useEffect)((function(){if(l.detail.chainId&&l.detail.chainId!==y&&l.switchNetwork(re[y]),l.isConnected()&&Ge){var e=window.setInterval(tt,3e4);return tt(),function(){return clearInterval(e)}}}),[l.detail.chainId,l.detail.account,Ge]),Object(i.useEffect)((function(){Oe.length&&Ge&&nt()}),[Oe,Ge,l]),Object(i.useEffect)((function(){Oe.length&&Qe&&Ve&&ct()}),[Qe,Oe,Ve,l]),Object(i.useEffect)((function(){Ie&&He&&Pe&&rt()}),[Ie,He,Pe]),Object(i.useEffect)((function(){ve.length&&Ge&&Ne.length&&st()}),[ve,Ne,Ge]),Object(i.useEffect)((function(){lt()}),[]),Object(i.useEffect)((function(){l.isConnected()||!Z||Oe||We(12.43)}),[Z,l&&Oe]),Object(i.useEffect)((function(){Ge&&!et.current&&l.detail.account&&(dt(),et.current=!0)}),[Ge,l.detail.account]),Object(i.useEffect)((function(){Ye&&l.detail.account&&Ge&&!Ze.current&&(bt(),et.current=!0)}),[Ye,l.detail.account,Ge]),Object(i.useEffect)((function(){Ke&&$e&&jt()}),[Ke,$e]),Object(A.jsxs)("div",{className:"pool-detail",children:[Object(A.jsx)("div",{className:"back-pool",children:Object(A.jsxs)("div",{className:"icon-back",onClick:function(){window.history.back(-1)},children:[Object(A.jsx)("img",{alt:"",src:h.default}),Object(A.jsx)("span",{children:t.back})]})}),Object(A.jsxs)("div",{className:"pool-deatail-info",children:[Object(A.jsxs)("div",{className:"pool-detail-basetoken-info",children:[Object(A.jsxs)("div",{className:"pool-info-text",children:[Object(A.jsxs)("div",{className:"pool-network-type",children:[Object(A.jsx)("div",{className:"network-logo",children:Object(A.jsx)("img",{alt:"",src:x.default})}),Object(A.jsxs)("div",{className:"pool-type-network-text",children:[Object(A.jsxs)("div",{className:"pool-type-text",children:[t[W.type]," ",t[W.zone]]}),Object(A.jsx)("div",{className:"pool-network-text",children:Je})]})]}),Object(A.jsxs)("div",{className:"pool-des",children:["Stake Uniswap ",Object(A.jsx)("a",{rel:"norelerror",target:"_blank",href:"https://app.uniswap.org/#/add/ETH/0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12/3000",children:"DERI-ETH "})," LP NFTs to earn $DERI rewards.",Object(A.jsx)("br",{}),Object(A.jsx)("a",{rel:"norelerror",target:"_blank",href:"https://docs.deri.io/library/faqs/mining-faq#is-dex-liquidity-mining-on-sushiswap-sushiswap-onsen-and-pancakeswap-deri-risk-free",children:Object(A.jsxs)("span",{className:"learn-more",children:[" ",t["learn-more"]]})})]})]}),Object(A.jsxs)("div",{className:"select-basetoken-info",children:[Object(A.jsxs)("div",{className:"select-coin-title-search",children:[Object(A.jsxs)("div",{className:"select-coin-title",children:[" ",t["select-the-coin"]]}),Object(A.jsx)("div",{className:"search-box",children:Object(A.jsx)(N.a,{list:Y,searchName:"bTokenSymbol",onChange:function(){}})})]}),Object(A.jsxs)("div",{className:"coin-search",children:[Object(A.jsx)("div",{className:"slide-icon left",children:Object(A.jsx)(w.a,{token:"arrow-left",width:"24",height:"24"})}),Object(A.jsx)("div",{className:"coin-list",children:Y.length?Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{className:"coin-box checked-base",children:Object(A.jsxs)("div",{className:"base-apy-info",children:[Object(A.jsxs)("div",{className:"lp-btoken-logo",children:[Object(A.jsx)("div",{className:"btoken-logo ".concat(Y[0].bTokenSymbol)}),Object(A.jsx)("span",{className:"conect-logo",children:"+"}),Object(A.jsx)("div",{className:"btoken-logo ".concat(Y[1].bTokenSymbol)})]}),Object(A.jsxs)("div",{className:"apy-base-staked",children:[Object(A.jsx)("div",{className:"base-name",children:B}),Object(A.jsxs)("div",{className:"base-apy",children:[t.apy," \xa0 ",Object(A.jsx)(v.a,{value:ze,suffix:"%",decimalScale:2})]})]})]})})}):null}),Object(A.jsx)("div",{className:"slide-icon right",children:Object(A.jsx)(w.a,{token:"arrow-right",width:"24",height:"24"})})]})]})]}),Object(A.jsxs)("div",{className:"pool-detail-add-remove-info",children:[Object(A.jsxs)("div",{className:"mining-deri-liquidity",children:[Object(A.jsx)("div",{className:"btoken-liquidity",children:Y.length&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:"lp-btoken-logo",children:[Object(A.jsx)("div",{className:"btoken-logo ".concat(Y[0].bTokenSymbol)}),Object(A.jsx)("span",{className:"conect-logo",children:"+"}),Object(A.jsx)("div",{className:"btoken-logo ".concat(Y[1].bTokenSymbol)})]}),Object(A.jsx)("div",{className:"manage-stake",children:Object(A.jsxs)("div",{className:"manage",children:[t.manage," ",B," ",t.liquidity]})})]})}),Object(A.jsx)("div",{className:"deri-current-epoch",children:Object(A.jsx)("div",{className:"mining-pool-claim",children:Object(A.jsxs)("div",{className:"mining-claim-info",children:[Object(A.jsxs)("span",{children:[" ",t["you-have"]]}),Object(A.jsxs)("span",{className:"".concat(0===+ne?"no-deri":""," mining-pool-num"),onClick:ut,children:[oe&&Object(A.jsx)(g.a,{}),Object(A.jsx)(v.a,{firstTime:!1,value:ne,decimalScale:2}),Object(A.jsx)("img",{src:m.a,alt:"deri"})]}),Object(A.jsx)("span",{children:t["claim-in-pool"]})]})})})]}),Object(A.jsxs)("div",{className:"mining-add-remove-liquidity",children:[Object(A.jsxs)("div",{className:"pool-info",children:[Object(A.jsxs)("div",{className:"pool-info-title",children:[Object(A.jsx)("div",{className:"pool-info-title-text",children:t["pool-info"]}),Object(A.jsxs)("div",{className:"down-up",children:["show"===_&&Object(A.jsx)("span",{onClick:function(){return U("hide")},children:Object(A.jsx)("img",{className:"up-icon",alt:"",src:p.default})}),"hide"===_&&Object(A.jsx)("span",{onClick:function(){return U("show")},children:Object(A.jsx)("img",{alt:"",src:p.default})})]})]}),Object(A.jsxs)("div",{className:"'pool-info-text' ".concat(_),children:[Object(A.jsxs)("div",{className:"pool-info-text-one",children:[Object(A.jsxs)("div",{className:"info-box",children:[Object(A.jsx)("div",{className:"info-box-title",children:t.apy}),Object(A.jsx)("div",{className:"info-box-num",children:Object(A.jsx)(v.a,{value:ze,suffix:"%",decimalScale:2})})]}),Object(A.jsxs)("div",{className:"info-box",children:[Object(A.jsx)("div",{className:"info-box-title",children:t["pool-liquidity"]}),Object(A.jsxs)("div",{className:"info-box-num",children:["$ ",Object(A.jsx)(v.a,{value:Z,displayType:"text",decimalScale:0,thousandSeparator:!0})]})]}),Object(A.jsxs)("div",{className:"info-box",children:[Object(A.jsx)("div",{className:"info-box-title",children:t["staked-balance"]}),Object(A.jsxs)("div",{className:"info-box-num",children:[Oe.length," ",Object(A.jsx)("a",{href:"https://arbiscan.io/address/0xC36442b4a4522E871399CD717aBDD847Ab11FE88",children:"DERI/ETH LP NFTs"})]})]})]}),Object(A.jsx)("div",{className:"pool-info-text-two",children:Object(A.jsxs)("div",{className:"info-box",children:[Object(A.jsx)("div",{className:"info-box-title",children:t["contract-address"]}),Object(A.jsx)("div",{className:"info-box-num",children:Object(A.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(q[y]&&q[y].viewUrl,"/address/").concat(L),children:Object(d.o)(L)})})]})})]})]}),Object(A.jsx)("div",{className:"add-remove-liquidity",children:Object(A.jsx)(b.a,{tabSet:ot,iconMarginRight:"20",width:379,size:18,inactiveBgColor:"#0c192d",icon:"",borderBottom:!0,divider:!0,activeIndex:Ue})})]})]})]})]})})))}}]);
//# sourceMappingURL=51.e8df6284.chunk.js.map