(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[44],{2695:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),s=n(10),a=(n(600),n(108)),o=n(55),r=n(5),l=n(176),d=n(177),u=(n(596),n(40)),j=n(318),b=n(90),h=n.n(b),p=n(20),O=n(234),m=n(30),x=n(3);t.default=Object(o.b)("wallet")(Object(o.c)((function(e){var t=e.wallet,n=e.lang,o=Object(r.useState)(),b=Object(s.a)(o,2),f=b[0],v=b[1],g=Object(r.useState)([]),N=Object(s.a)(g,2),k=N[0],w=N[1],I=Object(r.useState)(0),y=Object(s.a)(I,2),S=(y[0],y[1]),E=Object(r.useState)(),C=Object(s.a)(E,2),D=(C[0],C[1],Object(r.useState)(!1)),L=Object(s.a)(D,2),R=L[0],V=L[1],P=Object(r.useState)(!0),T=Object(s.a)(P,2),U=(T[0],T[1]),q=Object(r.useState)(!1),B=Object(s.a)(q,2),A=B[0],M=B[1],_=Object(r.useState)(0),H=Object(s.a)(_,2),J=H[0],z=H[1],W=Object(r.useState)(0),Y=Object(s.a)(W,2),F=(Y[0],Y[1]),Z=Object(r.useState)(""),K=Object(s.a)(Z,2),G=(K[0],K[1]),Q=Object(r.useState)(0),X=Object(s.a)(Q,2),$=X[0],ee=X[1],te=Object(d.c)(),ne=Object(O.a)("IERC721",42161),ce=Object(O.a)("LpTokenId",42161),ie=Object(O.a)("PairAbi",42161),se=Object(O.a)("arbitrumLp",42161),ae=Object(r.useCallback)((function(e){if(!A){var t=document.getElementById("I"),n=document.getElementById("II"),c=document.getElementById("III"),i=document.getElementById("VI");"1"===e?t.click():"2"===e?n.click():"3"===e?c.click():"4"===e&&i.click(),v(e)}}),[A]),oe=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserVotingPower",[t.detail.account]);case 2:n=e.sent,z(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserVotingResult",[t.detail.account]);case 2:n=e.sent,console.log("getUserVotingResult",n),"0"!==n.option?(v(n.option),M(!0)):M(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=Object(r.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var n,a,o,r,l,d,u,j,b,h;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.balanceOf(t.detail.account);case 2:n=e.sent,n=m.a.from(n._hex).toString(),a=[],o=0;case 6:if(!(o<n)){e.next=15;break}return e.next=9,ne.tokenOfOwnerByIndex(t.detail.account,o);case 9:r=e.sent,r=m.a.from(r._hex).toString(),a.push(r);case 12:o++,e.next=6;break;case 15:l=[],d=0;case 17:if(!(d<a.length)){e.next=25;break}return e.next=20,se.getPositionInfo(a[d]);case 20:e.sent[0].toLocaleLowerCase()==="0x96C3966534b4377691e11e163A0409Ad01667343".toLocaleLowerCase()&&l.push(a[d]);case 22:d++,e.next=17;break;case 25:return u=l.map(function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n,i;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,ce.positions(t);case 3:return i=e.sent,n={tickLower:i.tickLower,tickUpper:i.tickUpper,liquidity:m.a.from(i.liquidity._hex).toString()},e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=28,Promise.all(u);case 28:return u=e.sent,e.next=31,ie.slot0();case 31:j=(j=e.sent).tick,b=u.map((function(e){var t=Object(p.q)(j,e.tickLower,e.tickUpper,e.liquidity),n=Object(s.a)(t,2),c=n[0],i=n[1];return{deri:c/Math.pow(10,18),eth:i/Math.pow(10,18)}})),h=b.reduce((function(e,t){return e+t.deri}),0),console.log("getArbUniDeri",h),ee(h);case 37:case"end":return e.stop()}}),e)}))),[ce,ie,ne,t.detail.account,se]),de=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var t,n,i,s,a,o,r,l,d,u,j,b,O;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://vote.deri.io/get_voting_powers");case 2:t=e.sent,console.log("getVotingResult",JSON.parse(t.data[0].votes)),t.data&&t.data[0].votes&&(n=new Date,i=n.getMinutes(),s=n.getHours(),a=1e3*t.data[0].timestamp,o=new Date(a),r=o.getMinutes(),l=o.getHours(),u=s-l,(d=i-r)>=1&&u<=0?G(d):u>0?(j=60-r+Number(i),G(j)):d<1&&("less than 1",G("less than 1")),t=(t=JSON.parse(t.data[0].votes)).map((function(e){return Object(p.a)(e).div(Math.pow(10,18)).toNumber()})),b=Object(p.l)(t),b.max,b.min,O=b.sum,b.maxIndex,S(O),w(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var n,i;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getVotingInfo");case 2:n=e.sent,console.log("getVotingInfo",n),n&&n.length&&(i=(i=n.find((function(e){return+e.chainId===+t.detail.chainId}))).dedeadline+"000",(new Date).getTime()>=+i?V(!0):V(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log([t.detail.chainId,t.detail.account,f]),e.next=3,u.a.request("vote",[t.detail.chainId,t.detail.account,f],{includeResponse:!0});case 3:e.sent.success?(oe(),re(),de(),te.success("Success")):te.error("Failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t.isConnected()&&(oe(),ue())}),[t,t.detail]),Object(r.useEffect)((function(){de()}),[]),Object(r.useEffect)((function(){t.isConnected()&&f&&!A&&!R?U(!1):U(!0)}),[t.detail,f,k,A]),Object(r.useEffect)((function(){var e=0;$&&J?e=Object(p.a)($).plus(J).toNumber():J&&(e=J),F(e)}),[$,J]),Object(r.useEffect)((function(){ne&&t.detail.account&&se&&ce&&ie&&le()}),[ne,t.detail.account,se,ce,ie]),Object(x.jsxs)("div",{className:"dip-box",children:[Object(x.jsxs)("div",{className:"back-governance",children:[Object(x.jsx)(a.b,{to:"/governance",children:Object(x.jsxs)("div",{className:"icon-back",children:[Object(x.jsx)("img",{alt:"",src:j.default}),Object(x.jsx)("span",{children:n.back})]})}),Object(x.jsx)("div",{className:"poll-detail",children:n["poll-detail"]})]}),Object(x.jsxs)("div",{className:"dip-box-info",children:[Object(x.jsxs)("div",{className:"poll-dip-info ",children:[Object(x.jsxs)("div",{className:"dip-list-title",children:[Object(x.jsxs)("div",{className:"title-text",children:[n.dip,"-007"]}),Object(x.jsxs)("div",{className:"dip-progress",children:[Object(x.jsx)("div",{className:"executed-bg"}),"FINISHED"]})]}),Object(x.jsx)("div",{className:"dip-list-des ",children:"Vote for Deri V4\u2019s Second i-Chain"}),Object(x.jsx)("div",{className:"dip-time",children:"Target End Time: 2023 Sep 15th 10:00:00AM UTC (subject to extension, see below for details)"})]}),Object(x.jsxs)("div",{className:"dip-option",children:[Object(x.jsxs)("div",{className:"1"===f?"option-check option-checked":"option-check",onClick:function(e){return ae("1")},children:[Object(x.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(x.jsxs)("div",{className:"option-check-text",children:[Object(x.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return ae("1")},checked:"1"===f}),Object(x.jsx)("label",{for:"I"}),Object(x.jsx)("span",{className:"option-title-text",children:"Base"})]}),Object(x.jsxs)("div",{className:"option-num",children:["311283 ",n["deri-voting"]," (7%)"]})]}),Object(x.jsx)("div",{className:"option-peng-bg",style:{width:"7%"}})]}),Object(x.jsxs)("div",{className:"2"===f?"option-check option-checked":"option-check",onClick:function(){return ae("2")},children:[Object(x.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(x.jsxs)("div",{className:"option-check-text",children:[Object(x.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return ae("2")},checked:"2"===f}),Object(x.jsx)("label",{for:"II"}),Object(x.jsx)("span",{className:"option-title-text",children:"Optimism"})]}),Object(x.jsxs)("div",{className:"option-num",children:["1370037 ",n["deri-voting"]," (31%)"]})]}),Object(x.jsx)("div",{className:"option-peng-bg ",style:{width:"31%"}})]}),Object(x.jsxs)("div",{className:"3"===f?"option-check option-checked":"option-check",onClick:function(){return ae("3")},children:[Object(x.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(x.jsxs)("div",{className:"option-check-text",children:[Object(x.jsx)("input",{type:"radio",name:"option",value:"2",id:"III",onChange:function(e){return ae("3")},checked:"3"===f}),Object(x.jsx)("label",{for:"III"}),Object(x.jsx)("span",{className:"option-title-text",children:"Polygon zkEVM"})]}),Object(x.jsxs)("div",{className:"option-num",children:["281852 ",n["deri-voting"]," (6%)"]})]}),Object(x.jsx)("div",{className:"option-peng-bg ",style:{width:"6%"}})]}),Object(x.jsxs)("div",{className:"4"===f?"option-check option-checked":"option-check",onClick:function(){return ae("4")},children:[Object(x.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(x.jsxs)("div",{className:"option-check-text",children:[Object(x.jsx)("input",{type:"radio",name:"option",value:"2",id:"VI",onChange:function(e){return ae("4")},checked:"4"===f}),Object(x.jsx)("label",{for:"VI"}),Object(x.jsx)("span",{className:"option-title-text",children:"zkSync Era"})]}),Object(x.jsxs)("div",{className:"option-num",children:["2408544 ",n["deri-voting"]," (55%)"]})]}),Object(x.jsx)("div",{className:"option-peng-bg ",style:{width:"55%"}})]}),Object(x.jsx)("div",{className:"power-time"}),Object(x.jsx)("div",{className:"vote-button",children:Object(x.jsx)(l.a,{disabled:!0,label:n.vote,onClick:je,width:"286",fontSize:"18"})})]}),Object(x.jsxs)("div",{className:"dip-option-des-rules",children:[Object(x.jsx)("div",{className:"description-close-open",children:n.description}),Object(x.jsx)("div",{className:"description-text",children:Object(x.jsx)("div",{className:"ul-description",children:"The \u201ci-Chain\u201d, one of the two main components of Deri V4, represents the requesting interface and serves as a pivotal entry point for user interactions. It adeptly handles all the user requests, from traders initiating orders and managing margins to liquidity providers adding or removing liquidity. While theoretically any layer 1 or layer 2 can be adopted as an i-Chain, in practice, the community will choose which ones to deploy."})}),Object(x.jsxs)("div",{className:"vote-rules",children:[Object(x.jsx)("div",{className:"rules-title",children:n["voting-rules"]}),Object(x.jsxs)("div",{className:"rules-text",children:[Object(x.jsxs)("div",{className:"rules-margin",children:["Your voting power is the summation of the following balances in your wallet as of the deadline:",Object(x.jsxs)("ul",{className:"no-margin",children:[Object(x.jsx)("li",{children:"DERI balance"}),Object(x.jsx)("li",{children:"the corresponding DERI amount of your DERI-USDT SLP balance on SushiSwap"}),Object(x.jsx)("li",{children:"the corresponding DERI amount of your DERI-BUSD CLP balance on PancakeSwap"}),Object(x.jsx)("li",{children:"the corresponding DERI amount of your DERI-WETH LP balance on Uniswap V3"}),Object(x.jsx)("li",{children:"the corresponding DERI amount of your DLT balance in the DERI-based Inno Zone pools (BNB Chain)"})]})]}),Object(x.jsx)("div",{className:"rules-margin",children:"You can choose any of the 3 chains (ETH/Arbitrum/BNBChain) to sign your vote by the deadline"}),Object(x.jsx)("div",{className:"rules-margin",children:"Voting Deadline = 2023 Sep 15th 10:00:00AM UTC"}),Object(x.jsx)("div",{className:"rules-margin",children:"When a vote is submitted less than 15 min to the deadline, the deadline will be extended by 15 min. That is, the voting period will continue to extend until there is no vote within the last 15 min."}),Object(x.jsx)("div",{className:"rules-margin",children:"A snapshot will be taken at the block, at the deadline, and used to calculate the result."}),Object(x.jsx)("div",{className:"rules-margin",children:"Please note that, if you had voted before the deadline but then had transferred your DERI, SLP, PANCAKE-LP, Uniswap V3 LP or DLT before the deadline, it would be the balance at the deadline that counts."})]})]}),Object(x.jsxs)("div",{className:"supplementary-notes",children:[Object(x.jsx)("div",{className:"notes-title",children:"Reference Poll Link"}),Object(x.jsx)("div",{className:"notes-text",children:Object(x.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth/proposal/0x0f3567162f347ac566aab415473a5dd3c00944060f09ab7d2f6e953606b7964b",children:"Snapshot"})})]}),Object(x.jsxs)("div",{className:"supplementary-notes",children:[Object(x.jsx)("div",{className:"notes-title",children:"Discussion"}),Object(x.jsx)("div",{className:"notes-text",children:Object(x.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.com/invite/kb8ZbYgp8M",children:"Discord"})})]})]})]})]})})))}}]);
//# sourceMappingURL=44.b8a01586.chunk.js.map