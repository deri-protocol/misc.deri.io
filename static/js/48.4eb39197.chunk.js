(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[48],{2696:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),a=n(10),s=(n(598),n(108)),o=n(59),r=n(5),l=n(150),d=n(176),u=(n(595),n(40)),j=n(318),b=n(90),h=n.n(b),p=n(21),O=n(231),m=n(30),x=n(3);t.default=Object(o.b)("wallet")(Object(o.c)((function(e){var t=e.wallet,n=e.lang,o=Object(r.useState)(),b=Object(a.a)(o,2),f=b[0],v=b[1],g=Object(r.useState)([]),N=Object(a.a)(g,2),k=N[0],w=N[1],I=Object(r.useState)(0),y=Object(a.a)(I,2),S=(y[0],y[1]),E=Object(r.useState)(),C=Object(a.a)(E,2),D=(C[0],C[1],Object(r.useState)(!1)),L=Object(a.a)(D,2),V=L[0],P=L[1],R=Object(r.useState)(!0),B=Object(a.a)(R,2),T=(B[0],B[1]),U=Object(r.useState)(!0),A=Object(a.a)(U,2),q=A[0],M=A[1],_=Object(r.useState)(0),z=Object(a.a)(_,2),H=z[0],J=z[1],F=Object(r.useState)(0),W=Object(a.a)(F,2),Y=(W[0],W[1]),Z=Object(r.useState)(""),K=Object(a.a)(Z,2),G=(K[0],K[1]),Q=Object(r.useState)(0),X=Object(a.a)(Q,2),$=X[0],ee=X[1],te=Object(d.c)(),ne=Object(O.a)("IERC721",42161),ce=Object(O.a)("LpTokenId",42161),ie=Object(O.a)("PairAbi",42161),ae=Object(O.a)("arbitrumLp",42161),se=Object(r.useCallback)((function(e){if(!q){var t=document.getElementById("I"),n=document.getElementById("II"),c=document.getElementById("III"),i=document.getElementById("VI");"1"===e?t.click():"2"===e?n.click():"3"===e?c.click():"4"===e&&i.click(),v(e)}}),[q]),oe=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserVotingPower",[t.detail.account]);case 2:n=e.sent,J(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserVotingResult",[t.detail.account]);case 2:n=e.sent,console.log("getUserVotingResult",n),"0"!==n.option&&(v(n.option),M(!0));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=Object(r.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var n,s,o,r,l,d,u,j,b,h;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.balanceOf(t.detail.account);case 2:n=e.sent,n=m.a.from(n._hex).toString(),s=[],o=0;case 6:if(!(o<n)){e.next=15;break}return e.next=9,ne.tokenOfOwnerByIndex(t.detail.account,o);case 9:r=e.sent,r=m.a.from(r._hex).toString(),s.push(r);case 12:o++,e.next=6;break;case 15:l=[],d=0;case 17:if(!(d<s.length)){e.next=25;break}return e.next=20,ae.getPositionInfo(s[d]);case 20:e.sent[0].toLocaleLowerCase()==="0x96C3966534b4377691e11e163A0409Ad01667343".toLocaleLowerCase()&&l.push(s[d]);case 22:d++,e.next=17;break;case 25:return u=l.map(function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n,i;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,ce.positions(t);case 3:return i=e.sent,n={tickLower:i.tickLower,tickUpper:i.tickUpper,liquidity:m.a.from(i.liquidity._hex).toString()},e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=28,Promise.all(u);case 28:return u=e.sent,e.next=31,ie.slot0();case 31:j=(j=e.sent).tick,b=u.map((function(e){var t=Object(p.r)(j,e.tickLower,e.tickUpper,e.liquidity),n=Object(a.a)(t,2),c=n[0],i=n[1];return{deri:c/Math.pow(10,18),eth:i/Math.pow(10,18)}})),h=b.reduce((function(e,t){return e+t.deri}),0),console.log("getArbUniDeri",h),ee(h);case 37:case"end":return e.stop()}}),e)}))),[ce,ie,ne,t.detail.account,ae]),de=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var t,n,i,a,s,o,r,l,d,u,j,b,O;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://vote.deri.io/get_voting_powers");case 2:t=e.sent,console.log("getVotingResult",JSON.parse(t.data[0].votes)),t.data&&t.data[0].votes&&(n=new Date,i=n.getMinutes(),a=n.getHours(),s=1e3*t.data[0].timestamp,o=new Date(s),r=o.getMinutes(),l=o.getHours(),u=a-l,(d=i-r)>=1&&u<=0?G(d):u>0?(j=60-r+Number(i),G(j)):d<1&&("less than 1",G("less than 1")),t=(t=JSON.parse(t.data[0].votes)).map((function(e){return Object(p.a)(e).div(Math.pow(10,18)).toNumber()})),b=Object(p.m)(t),b.max,b.min,O=b.sum,b.maxIndex,S(O),w(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var n,i;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getVotingInfo");case 2:n=e.sent,console.log("getVotingInfo",n),n&&n.length&&(i=(i=n.find((function(e){return+e.chainId===+t.detail.chainId}))).deadline+"000",(new Date).getTime()>=+i?P(!0):P(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log([t.detail.chainId,t.detail.account,f]),e.next=3,u.a.request("vote",[t.detail.chainId,t.detail.account,f],{includeResponse:!0});case 3:e.sent.success?(oe(),re(),de(),te.success("Success")):te.error("Failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t.isConnected()&&(oe(),ue())}),[t,t.detail]),Object(r.useEffect)((function(){de()}),[]),Object(r.useEffect)((function(){t.isConnected()&&f&&!q&&!V?T(!1):T(!0)}),[t.detail,f,k,q]),Object(r.useEffect)((function(){var e=0;$&&H?e=Object(p.a)($).plus(H).toNumber():H&&(e=H),Y(e)}),[$,H]),Object(r.useEffect)((function(){ne&&t.detail.account&&ae&&ce&&ie&&le()}),[ne,t.detail.account,ae,ce,ie]),Object(x.jsxs)("div",{className:"dip-box",children:[Object(x.jsxs)("div",{className:"back-governance",children:[Object(x.jsx)(s.b,{to:"/governance",children:Object(x.jsxs)("div",{className:"icon-back",children:[Object(x.jsx)("img",{alt:"",src:j.default}),Object(x.jsx)("span",{children:n.back})]})}),Object(x.jsx)("div",{className:"poll-detail",children:n["poll-detail"]})]}),Object(x.jsxs)("div",{className:"dip-box-info",children:[Object(x.jsxs)("div",{className:"poll-dip-info ",children:[Object(x.jsxs)("div",{className:"dip-list-title",children:[Object(x.jsxs)("div",{className:"title-text",children:[n.dip,"-006"]}),Object(x.jsxs)("div",{className:"dip-progress",children:[Object(x.jsx)("div",{className:"executed-bg"}),"FINISHED"]})]}),Object(x.jsx)("div",{className:"dip-list-des ",children:"Vote for Deri V4\u2019s First i-Chain"}),Object(x.jsx)("div",{className:"dip-time",children:"Target End Time: 2023 Sep 8th 10:00:00AM UTC (subject to extension, see below for details)"})]}),Object(x.jsxs)("div",{className:"dip-option",children:[Object(x.jsxs)("div",{className:"1"===f?"option-check option-checked":"option-check",onClick:function(e){return se("1")},children:[Object(x.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(x.jsxs)("div",{className:"option-check-text",children:[Object(x.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return se("1")},checked:"1"===f}),Object(x.jsx)("label",{for:"I"}),Object(x.jsx)("span",{className:"option-title-text",children:"Arbitrum"})]}),Object(x.jsxs)("div",{className:"option-num",children:["1447532 ",n["deri-voting"]," (64%)"]})]}),Object(x.jsx)("div",{className:"option-peng-bg",style:{width:"64%"}})]}),Object(x.jsxs)("div",{className:"2"===f?"option-check option-checked":"option-check",onClick:function(){return se("2")},children:[Object(x.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(x.jsxs)("div",{className:"option-check-text",children:[Object(x.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return se("2")},checked:"2"===f}),Object(x.jsx)("label",{for:"II"}),Object(x.jsx)("span",{className:"option-title-text",children:"BNB Chain"})]}),Object(x.jsxs)("div",{className:"option-num",children:["214422 ",n["deri-voting"]," (9%)"]})]}),Object(x.jsx)("div",{className:"option-peng-bg ",style:{width:"9%"}})]}),Object(x.jsxs)("div",{className:"3"===f?"option-check option-checked":"option-check",onClick:function(){return se("3")},children:[Object(x.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(x.jsxs)("div",{className:"option-check-text",children:[Object(x.jsx)("input",{type:"radio",name:"option",value:"2",id:"III",onChange:function(e){return se("3")},checked:"3"===f}),Object(x.jsx)("label",{for:"III"}),Object(x.jsx)("span",{className:"option-title-text",children:"Polygon zkEVM"})]}),Object(x.jsxs)("div",{className:"option-num",children:["286756 ",n["deri-voting"]," (13%)"]})]}),Object(x.jsx)("div",{className:"option-peng-bg ",style:{width:"13%"}})]}),Object(x.jsxs)("div",{className:"4"===f?"option-check option-checked":"option-check",onClick:function(){return se("4")},children:[Object(x.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(x.jsxs)("div",{className:"option-check-text",children:[Object(x.jsx)("input",{type:"radio",name:"option",value:"2",id:"VI",onChange:function(e){return se("4")},checked:"4"===f}),Object(x.jsx)("label",{for:"VI"}),Object(x.jsx)("span",{className:"option-title-text",children:"zkSync Era"})]}),Object(x.jsxs)("div",{className:"option-num",children:["311015 ",n["deri-voting"]," (14%)"]})]}),Object(x.jsx)("div",{className:"option-peng-bg ",style:{width:"14%"}})]}),Object(x.jsx)("div",{className:"vote-button",children:Object(x.jsx)(l.a,{disabled:!0,label:n.vote,onClick:je,width:"286",fontSize:"18"})})]}),Object(x.jsxs)("div",{className:"dip-option-des-rules",children:[Object(x.jsx)("div",{className:"description-close-open",children:n.description}),Object(x.jsx)("div",{className:"description-text",children:Object(x.jsx)("div",{className:"ul-description",children:"The \u201ci-Chain\u201d, one of the two main components of Deri V4, represents the requesting interface and serves as a pivotal entry point for user interactions. It adeptly handles all the user requests, from traders initiating orders and managing margins to liquidity providers adding or removing liquidity. While theoretically any layer 1 or layer 2 (e.g. Arbitrum, BNBChain,Polygon zkEVM, and zkSync Era) can be adopted as an i-Chain, in practice, the community will choose which ones to deploy."})}),Object(x.jsxs)("div",{className:"vote-rules",children:[Object(x.jsx)("div",{className:"rules-title",children:n["voting-rules"]}),Object(x.jsxs)("div",{className:"rules-text",children:[Object(x.jsxs)("div",{className:"rules-margin",children:["Your voting power is the summation of the following balances in your wallet as of the deadline:",Object(x.jsxs)("ul",{className:"no-margin",children:[Object(x.jsx)("li",{children:"DERI balance"}),Object(x.jsx)("li",{children:"the corresponding DERI amount of your DERI-USDT SLP balance on SushiSwap"}),Object(x.jsx)("li",{children:"the corresponding DERI amount of your DERI-BUSD CLP balance on PancakeSwap"}),Object(x.jsx)("li",{children:"the corresponding DERI amount of your DERI-WETH LP balance on Uniswap V3"}),Object(x.jsx)("li",{children:"the corresponding DERI amount of your DLT balance in the DERI-based Inno Zone pools (BNB Chain)"})]})]}),Object(x.jsx)("div",{className:"rules-margin",children:"You can choose any of the 3 chains (ETH/Arbitrum/BNBChain) to sign your vote by the deadline"}),Object(x.jsx)("div",{className:"rules-margin",children:"Voting Deadline = 2023 Sep 8th 10:00:00AM UTC"}),Object(x.jsx)("div",{className:"rules-margin",children:"When a vote is submitted less than 15 min to the deadline, the deadline will be extended by 15 min. That is, the voting period will continue to extend until there is no vote within the last 15 min."}),Object(x.jsx)("div",{className:"rules-margin",children:"A snapshot will be taken at the block, at the deadline, and used to calculate the result."}),Object(x.jsx)("div",{className:"rules-margin",children:"Please note that, if you had voted before the deadline but then had transferred your DERI, SLP, PANCAKE-LP, Uniswap V3 LP or DLT before the deadline, it would be the balance at the deadline that counts."})]})]}),Object(x.jsxs)("div",{className:"supplementary-notes",children:[Object(x.jsx)("div",{className:"notes-title",children:"Reference Poll Link"}),Object(x.jsx)("div",{className:"notes-text",children:Object(x.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth/proposal/0x3eb5a59b02d1f038ebcead8405e442632ecdd835552e076b3066ab9fc185fbb9",children:"Snapshot"})})]}),Object(x.jsxs)("div",{className:"supplementary-notes",children:[Object(x.jsx)("div",{className:"notes-title",children:"Discussion"}),Object(x.jsx)("div",{className:"notes-text",children:Object(x.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.com/invite/kb8ZbYgp8M",children:"Discord"})})]})]})]})]})})))}}]);
//# sourceMappingURL=48.4eb39197.chunk.js.map