(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[42],{1867:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=new(0,n(321).GraphQLClient)("https://v4dh.deri.io/graphql",{});function a(e,t){return c.request(e,t)}},2698:function(e,t,n){"use strict";n.r(t);var c,a=n(63),i=n(0),s=n(2),o=n(10),r=(n(598),n(108)),l=n(59),d=n(5),u=n(150),j=n(176),b=n(595),h=n(40),p=n(318),O=n(90),m=n.n(O),x=n(21),v=n(231),f=n(30),g=n(1867),k=n(321),N=n(113),w=n(3);t.default=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.lang,n=Object(N.b)(),l=Object(d.useState)(),O=Object(o.a)(l,2),I=O[0],y=O[1],S=Object(d.useState)([]),C=Object(o.a)(S,2),L=C[0],D=C[1],E=Object(d.useState)(!1),P=Object(o.a)(E,2),q=P[0],R=P[1],T=Object(d.useState)(0),V=Object(o.a)(T,2),F=V[0],U=V[1],A=Object(d.useState)(!1),B=Object(o.a)(A,2),M=B[0],_=B[1],H=Object(d.useState)(!0),J=Object(o.a)(H,2),Y=J[0],$=J[1],G=Object(d.useState)(!1),W=Object(o.a)(G,2),z=W[0],Q=W[1],Z=Object(d.useState)(0),K=Object(o.a)(Z,2),X=K[0],ee=K[1],te=Object(d.useState)(0),ne=Object(o.a)(te,2),ce=ne[0],ae=ne[1],ie=Object(d.useState)(""),se=Object(o.a)(ie,2),oe=se[0],re=se[1],le=Object(d.useState)(),de=Object(o.a)(le,2),ue=de[0],je=de[1],be=Object(d.useState)(0),he=Object(o.a)(be,2),pe=he[0],Oe=he[1],me=Object(d.useState)(!1),xe=Object(o.a)(me,2),ve=xe[0],fe=xe[1],ge=Object(j.c)(),ke=Object(v.a)("IERC721",42161),Ne=Object(d.useState)(0),we=Object(o.a)(Ne,2),Ie=we[0],ye=we[1],Se=Object(v.a)("LpTokenId",42161),Ce=Object(v.a)("PairAbi",42161),Le=Object(v.a)("arbitrumLp",42161),De=Object(d.useCallback)((function(e){if(!z){var t=document.getElementById("I"),n=document.getElementById("II"),c=document.getElementById("III"),a=document.getElementById("IV");"1"===e?t.click():"2"===e?n.click():"3"===e?c.click():"4"===e&&a.click(),y(e)}}),[z]),Ee=Object(d.useCallback)(Object(s.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getUserVotingPower",[n.account,Ie||0]);case 2:t=e.sent,ee(t);case 4:case"end":return e.stop()}}),e)}))),[n.account,Ie]),Pe=Object(d.useCallback)(Object(s.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getUserVotingResult",[n.account,Ie||0]);case 2:t=e.sent,console.log("getUserVotingResult",t),"0"!==t.option?(y(t.option),Q(!0)):Q(!1);case 5:case"end":return e.stop()}}),e)}))),[n.account,Ie]),qe=Object(d.useCallback)(Object(s.a)(Object(i.a)().mark((function e(){var t,c,a,r,l,d,u,j,b,h;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke.balanceOf(n.account);case 2:t=e.sent,t=f.a.from(t._hex).toString(),c=[],a=0;case 6:if(!(a<t)){e.next=15;break}return e.next=9,ke.tokenOfOwnerByIndex(n.account,a);case 9:r=e.sent,r=f.a.from(r._hex).toString(),c.push(r);case 12:a++,e.next=6;break;case 15:l=[],d=0;case 17:if(!(d<c.length)){e.next=25;break}return e.next=20,Le.getPositionInfo(c[d]);case 20:e.sent[0].toLocaleLowerCase()==="0x96C3966534b4377691e11e163A0409Ad01667343".toLocaleLowerCase()&&l.push(c[d]);case 22:d++,e.next=17;break;case 25:return u=l.map(function(){var e=Object(s.a)(Object(i.a)().mark((function e(t){var n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,Se.positions(t);case 3:return c=e.sent,n={tickLower:c.tickLower,tickUpper:c.tickUpper,liquidity:f.a.from(c.liquidity._hex).toString()},e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=28,Promise.all(u);case 28:return u=e.sent,e.next=31,Ce.slot0();case 31:j=(j=e.sent).tick,b=u.map((function(e){var t=Object(x.r)(j,e.tickLower,e.tickUpper,e.liquidity),n=Object(o.a)(t,2),c=n[0],a=n[1];return{deri:c/Math.pow(10,18),eth:a/Math.pow(10,18)}})),h=b.reduce((function(e,t){return e+t.deri}),0),console.log("getArbUniDeri",h),Oe(h);case 37:case"end":return e.stop()}}),e)}))),[Se,Ce,ke,n.account,Le]),Re=function(){var e=Object(s.a)(Object(i.a)().mark((function e(){var t,n,c,a,s,o,r,l,d,u,j,b,h;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://vote.deri.io/get_voting_powers");case 2:t=e.sent,console.log("getVotingResult",JSON.parse(t.data[0].votes)),t.data&&t.data[0].votes&&(n=new Date,c=n.getMinutes(),a=n.getHours(),s=1e3*t.data[0].timestamp,o=new Date(s),r=o.getMinutes(),l=o.getHours(),u=a-l,(d=c-r)>=1&&u<=0?re(d):u>0?(j=60-r+Number(c),re(j)):d<1&&("less than 1",re("less than 1")),t=(t=JSON.parse(t.data[0].votes)).map((function(e){return Object(x.a)(e).div(Math.pow(10,18)).toNumber()})),b=Object(x.m)(t),b.max,b.min,h=b.sum,b.maxIndex,U(h),D(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Te=Object(d.useCallback)(Object(s.a)(Object(i.a)().mark((function e(){var t,s,o,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(k.gql)(c||(c=Object(a.a)(["\n      query ($chainId: Int!, $account: String!) {\n        lpStates(where: { chainId: $chainId, account: $account }) {\n          account\n          b0Amount\n          bAmount\n          bToken\n          cumulativePnl\n          cumulativePnlPerLiquidity\n          cumulativeTime\n          lTokenId\n          lastCumulativePnlOnEngine\n          lastCumulativeTimePerLiquidity\n          liquidity\n        }\n      }\n    "]))),s={account:n.account,chainId:42161},e.next=4,Object(g.a)(t,s);case 4:o=e.sent,console.log(o),o&&o.lpStates.length>0&&(r=o.lpStates.find((function(e){return e.bToken.toLocaleLowerCase()==="0x21e60ee73f17ac0a411ae5d690f908c3ed66fe12".toLocaleLowerCase()})))&&ye(r.lTokenId),R(!0);case 8:case"end":return e.stop()}}),e)}))),[n.account]),Ve=function(){var e=Object(s.a)(Object(i.a)().mark((function e(){var t,c,a,s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getVotingInfo");case 2:t=e.sent,console.log("getVotingInfo",t),t&&t.length&&(c=t.find((function(e){return+e.chainId===+n.chainId})),a=t.reduce((function(e,t){return t.deadline>e.deadline?t:e}),t[0]),c=c?c.deadline+"000":a.deadline,s=new Date,je(+c),s.getTime()>=+c?(_(!0),fe(!0)):_(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(s.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log([n.chainId,n.account,I]),e.next=3,h.a.request("vote",[n.chainId,n.account,I],{includeResponse:!0});case 3:e.sent.success?(Ee(),Pe(),Re(),ge.success("Success")):ge.error("Failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){n.isConnected()&&q&&(Ee(),Pe(),Ve())}),[n,Ie,q]),Object(d.useEffect)((function(){Re()}),[]),Object(d.useEffect)((function(){n.isConnected()&&I&&!z&&!M?$(!1):$(!0)}),[n,I,L,z]),Object(d.useEffect)((function(){var e=0;pe&&X?e=Object(x.a)(pe).plus(X).toNumber():X&&(e=X),ae(e)}),[pe,X]),Object(d.useEffect)((function(){n.account&&Te()}),[n.account]),Object(d.useEffect)((function(){ke&&n.account&&Le&&Se&&Ce&&qe()}),[ke,n.account,Le,Se,Ce]),Object(w.jsxs)("div",{className:"dip-box",children:[Object(w.jsxs)("div",{className:"back-governance",children:[Object(w.jsx)(r.b,{to:"/governance",children:Object(w.jsxs)("div",{className:"icon-back",children:[Object(w.jsx)("img",{alt:"",src:p.default}),Object(w.jsx)("span",{children:t.back})]})}),Object(w.jsx)("div",{className:"poll-detail",children:t["poll-detail"]})]}),Object(w.jsxs)("div",{className:"dip-box-info",children:[Object(w.jsxs)("div",{className:"poll-dip-info ",children:[Object(w.jsxs)("div",{className:"dip-list-title",children:[Object(w.jsxs)("div",{className:"title-text",children:[t.dip,"-009"]}),Object(w.jsxs)("div",{className:"dip-progress",children:[Object(w.jsx)("div",{className:"progress-bg"}),"PROGRESSING"]})]}),Object(w.jsx)("div",{className:"dip-list-des ",children:"Vote for Deri V4\u2019s Fourth  i-Chain"}),Object(w.jsx)("div",{className:"dip-time",children:ue?ve?Object(x.e)(ue):Object(w.jsxs)(w.Fragment,{children:[Object(x.e)(ue)," ","(Voting deadline: 2023 Dec 4th 10:00:00AM UTC)"]}):"Voting deadline: 2023 Dec 4th 10:00:00AM UTC"})]}),Object(w.jsxs)("div",{className:"dip-option",children:[Object(w.jsxs)("div",{className:"1"===I?"option-check option-checked":"option-check",onClick:function(e){return De("1")},children:[Object(w.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(w.jsxs)("div",{className:"option-check-text",children:[Object(w.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return De("1")},checked:"1"===I}),Object(w.jsx)("label",{for:"I"}),Object(w.jsx)("span",{className:"option-title-text",children:"Base"})]}),Object(w.jsxs)("div",{className:"option-num",children:[L[0]?L[0].toFixed(0):0," ",t["deri-voting"]," (",F&&L[0]?(L[0]/F*100).toFixed(0):0,"%)"]})]}),Object(w.jsx)("div",{className:"option-peng-bg",style:{width:"".concat(F&&L[0]?(L[0]/F*100).toFixed(0):0,"%")}})]}),Object(w.jsxs)("div",{className:"2"===I?"option-check option-checked":"option-check",onClick:function(){return De("2")},children:[Object(w.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(w.jsxs)("div",{className:"option-check-text",children:[Object(w.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return De("2")},checked:"2"===I}),Object(w.jsx)("label",{for:"II"}),Object(w.jsx)("span",{className:"option-title-text",children:"BNBChain"})]}),Object(w.jsxs)("div",{className:"option-num",children:[L[1]?L[1].toFixed(0):0,"  ",t["deri-voting"]," (",F&&L[1]?(L[1]/F*100).toFixed(0):0,"%)"]})]}),Object(w.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(F&&L[1]?(L[1]/F*100).toFixed(0):0,"%")}})]}),Object(w.jsxs)("div",{className:"3"===I?"option-check option-checked":"option-check",onClick:function(){return De("3")},children:[Object(w.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(w.jsxs)("div",{className:"option-check-text",children:[Object(w.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:function(e){return De("3")},checked:"3"===I}),Object(w.jsx)("label",{for:"III"}),Object(w.jsx)("span",{className:"option-title-text",children:"Mantle"})]}),Object(w.jsxs)("div",{className:"option-num",children:[L[2]?L[2].toFixed(0):0,"  ",t["deri-voting"]," (",F&&L[2]?(L[2]/F*100).toFixed(0):0,"%)"]})]}),Object(w.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(F&&L[2]?(L[2]/F*100).toFixed(0):0,"%")}})]}),Object(w.jsxs)("div",{className:"4"===I?"option-check option-checked":"option-check",onClick:function(){return De("4")},children:[Object(w.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(w.jsxs)("div",{className:"option-check-text",children:[Object(w.jsx)("input",{type:"radio",name:"option",value:"4",id:"IV",onChange:function(e){return De("4")},checked:"4"===I}),Object(w.jsx)("label",{for:"IV"}),Object(w.jsx)("span",{className:"option-title-text",children:"Scroll"})]}),Object(w.jsxs)("div",{className:"option-num",children:[L[3]?L[3].toFixed(0):0,"  ",t["deri-voting"]," (",F&&L[3]?(L[3]/F*100).toFixed(0):0,"%)"]})]}),Object(w.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(F&&L[3]?(L[3]/F*100).toFixed(0):0,"%")}})]}),Object(w.jsxs)("div",{className:"power-time",children:["Last updated: ",oe," minutes ago"]}),Object(w.jsxs)("div",{className:"vote-button",children:[Object(w.jsxs)("div",{className:"your-power",children:["Your Voting Power :",Object(w.jsx)(b.a,{value:ce,decimalScale:2})," DERI"]}),Object(w.jsx)(u.a,{disabled:Y,label:z?"".concat(t.vote," Submitted"):t.vote,onClick:Fe,width:"286",fontSize:"18"})]})]}),Object(w.jsxs)("div",{className:"dip-option-des-rules",children:[Object(w.jsx)("div",{className:"description-close-open",children:t.description}),Object(w.jsx)("div",{className:"description-text",children:Object(w.jsx)("div",{className:"ul-description",children:"The \u201ci-Chain\u201d, one of the two main components of Deri V4, represents the requesting interface and serves as a pivotal entry point for user interactions. It adeptly handles all the user requests, from traders initiating orders and managing margins to liquidity providers adding or removing liquidity. While theoretically any layer 1 or layer 2 can be adopted as an i-Chain, in practice, the community will choose which ones to deploy."})}),Object(w.jsxs)("div",{className:"vote-rules",children:[Object(w.jsx)("div",{className:"rules-title",children:t["voting-rules"]}),Object(w.jsxs)("div",{className:"rules-text",children:[Object(w.jsxs)("div",{className:"rules-margin",children:["Your voting power is the summation of the following balances in your wallet as of the deadline:",Object(w.jsxs)("ul",{className:"no-margin",children:[Object(w.jsx)("li",{children:"DERI balance in your wallet"}),Object(w.jsx)("li",{children:"DERI balance in your LP tokens on Deri Pools"}),Object(w.jsx)("li",{children:"DERI amount contained in your DERI-USDT SLP tokens on SushiSwap"}),Object(w.jsx)("li",{children:"DERI amount contained in your DERI-BUSD CLP tokens on PancakeSwap"}),Object(w.jsx)("li",{children:"DERI amount contained in your DERI-WETH LP tokens on Uniswap V3"})]})]}),Object(w.jsx)("div",{className:"rules-margin",children:"You can choose any of the 5 chains (ETH/Arbitrum/BNBChain/Linea/zkSync) to sign your vote by the deadline"}),Object(w.jsx)("div",{className:"rules-margin",children:"Voting Deadline = 2023 Dec 4th 10:00:00AM UTC"}),Object(w.jsx)("div",{className:"rules-margin",children:"When a vote is submitted less than 15 min to the deadline, the deadline will be extended by 15 min. That is, the voting period will continue to extend until there is no vote within the last 15 min."}),Object(w.jsx)("div",{className:"rules-margin",children:"A snapshot will be taken at the block, at the deadline, and used to calculate the result."}),Object(w.jsx)("div",{className:"rules-margin",children:"Please note that, if you had voted before the deadline but then had transferred your DERI, DLT, SushiSwap-LP, Pancake-LP, or Uniswap-LP before the deadline, it would be the balance at the deadline that counts"})]})]}),Object(w.jsxs)("div",{className:"supplementary-notes",children:[Object(w.jsx)("div",{className:"notes-title",children:"Reference Poll Link"}),Object(w.jsx)("div",{className:"notes-text",children:Object(w.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth/proposal/0x07cf364836a21430f1dcfb7e07794a9d167335176a702d17803400e5026bc142",children:"Snapshot"})})]}),Object(w.jsxs)("div",{className:"supplementary-notes",children:[Object(w.jsx)("div",{className:"notes-title",children:"Discussion"}),Object(w.jsx)("div",{className:"notes-text",children:Object(w.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.com/invite/kb8ZbYgp8M",children:"Discord"})})]})]})]})]})})))}}]);
//# sourceMappingURL=42.894ca4d7.chunk.js.map