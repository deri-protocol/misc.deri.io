(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[45],{1618:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=new(0,n(319).GraphQLClient)("https://v4dh.deri.io/graphql",{});function i(e,t){return c.request(e,t)}},2703:function(e,t,n){"use strict";n.r(t);var c,i=n(63),a=n(0),s=n(2),o=n(10),r=(n(597),n(108)),l=n(59),d=n(5),u=n(150),j=n(176),b=n(595),h=n(40),p=n(318),O=n(90),x=n.n(O),m=n(21),v=n(226),f=n(30),g=n(1618),k=n(319),N=n(111),I=n(3);t.default=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.lang,n=Object(N.b)(),l=Object(d.useState)(),O=Object(o.a)(l,2),w=O[0],y=O[1],S=Object(d.useState)([]),C=Object(o.a)(S,2),E=C[0],L=C[1],P=Object(d.useState)(!1),V=Object(o.a)(P,2),D=V[0],F=V[1],q=Object(d.useState)(0),R=Object(o.a)(q,2),T=R[0],B=R[1],U=Object(d.useState)(!1),M=Object(o.a)(U,2),A=M[0],_=M[1],z=Object(d.useState)(!0),H=Object(o.a)(z,2),J=H[0],Y=H[1],$=Object(d.useState)(!1),G=Object(o.a)($,2),W=G[0],Z=G[1],Q=Object(d.useState)(0),K=Object(o.a)(Q,2),X=K[0],ee=K[1],te=Object(d.useState)(0),ne=Object(o.a)(te,2),ce=ne[0],ie=ne[1],ae=Object(d.useState)(""),se=Object(o.a)(ae,2),oe=se[0],re=se[1],le=Object(d.useState)(),de=Object(o.a)(le,2),ue=de[0],je=de[1],be=Object(d.useState)(0),he=Object(o.a)(be,2),pe=he[0],Oe=he[1],xe=Object(d.useState)(!1),me=Object(o.a)(xe,2),ve=me[0],fe=me[1],ge=Object(j.c)(),ke=Object(v.a)("IERC721",42161),Ne=Object(d.useState)(0),Ie=Object(o.a)(Ne,2),we=Ie[0],ye=Ie[1],Se=Object(v.a)("LpTokenId",42161),Ce=Object(v.a)("PairAbi",42161),Ee=Object(v.a)("arbitrumLp",42161),Le=Object(d.useCallback)((function(e){if(!W){var t=document.getElementById("I"),n=document.getElementById("II"),c=document.getElementById("III"),i=document.getElementById("IV"),a=document.getElementById("VI"),s=document.getElementById("VII");"1"===e?t.click():"2"===e?n.click():"3"===e?c.click():"4"===e?i.click():"5"===e?a.click():"6"===e&&s.click(),y(e)}}),[W]),Pe=Object(d.useCallback)(Object(s.a)(Object(a.a)().mark((function e(){var t;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getUserVotingPower",[n.account,we||0]);case 2:t=e.sent,ee(t);case 4:case"end":return e.stop()}}),e)}))),[n.account,we]),Ve=Object(d.useCallback)(Object(s.a)(Object(a.a)().mark((function e(){var t;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getUserVotingResult",[n.account,we||0]);case 2:t=e.sent,console.log("getUserVotingResult",t),"0"!==t.option?(y(t.option),Z(!0)):Z(!1);case 5:case"end":return e.stop()}}),e)}))),[n.account,we]),De=Object(d.useCallback)(Object(s.a)(Object(a.a)().mark((function e(){var t,c,i,r,l,d,u,j,b,h;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke.balanceOf(n.account);case 2:t=e.sent,t=f.a.from(t._hex).toString(),c=[],i=0;case 6:if(!(i<t)){e.next=15;break}return e.next=9,ke.tokenOfOwnerByIndex(n.account,i);case 9:r=e.sent,r=f.a.from(r._hex).toString(),c.push(r);case 12:i++,e.next=6;break;case 15:l=[],d=0;case 17:if(!(d<c.length)){e.next=25;break}return e.next=20,Ee.getPositionInfo(c[d]);case 20:e.sent[0].toLocaleLowerCase()==="0x96C3966534b4377691e11e163A0409Ad01667343".toLocaleLowerCase()&&l.push(c[d]);case 22:d++,e.next=17;break;case 25:return u=l.map(function(){var e=Object(s.a)(Object(a.a)().mark((function e(t){var n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,Se.positions(t);case 3:return c=e.sent,n={tickLower:c.tickLower,tickUpper:c.tickUpper,liquidity:f.a.from(c.liquidity._hex).toString()},e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=28,Promise.all(u);case 28:return u=e.sent,e.next=31,Ce.slot0();case 31:j=(j=e.sent).tick,b=u.map((function(e){var t=Object(m.r)(j,e.tickLower,e.tickUpper,e.liquidity),n=Object(o.a)(t,2),c=n[0],i=n[1];return{deri:c/Math.pow(10,18),eth:i/Math.pow(10,18)}})),h=b.reduce((function(e,t){return e+t.deri}),0),console.log("getArbUniDeri",h),Oe(h);case 37:case"end":return e.stop()}}),e)}))),[Se,Ce,ke,n.account,Ee]),Fe=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,n,c,i,s,o,r,l,d,u,j,b,h;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://vote.deri.io/get_voting_powers");case 2:t=e.sent,console.log("getVotingResult",JSON.parse(t.data[0].votes)),t.data&&t.data[0].votes&&(n=new Date,c=n.getMinutes(),i=n.getHours(),s=1e3*t.data[0].timestamp,o=new Date(s),r=o.getMinutes(),l=o.getHours(),u=i-l,(d=c-r)>=1&&u<=0?re(d):u>0?(j=60-r+Number(c),re(j)):d<1&&("less than 1",re("less than 1")),t=(t=JSON.parse(t.data[0].votes)).map((function(e){return Object(m.a)(e).div(Math.pow(10,18)).toNumber()})),b=Object(m.m)(t),b.max,b.min,h=b.sum,b.maxIndex,B(h),L(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),qe=Object(d.useCallback)(Object(s.a)(Object(a.a)().mark((function e(){var t,s,o,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(k.gql)(c||(c=Object(i.a)(["\n      query ($chainId: Int!, $account: String!) {\n        lpStates(where: { chainId: $chainId, account: $account }) {\n          account\n          b0Amount\n          bAmount\n          bToken\n          cumulativePnl\n          cumulativePnlPerLiquidity\n          cumulativeTime\n          lTokenId\n          lastCumulativePnlOnEngine\n          lastCumulativeTimePerLiquidity\n          liquidity\n        }\n      }\n    "]))),s={account:n.account,chainId:42161},e.next=4,Object(g.a)(t,s);case 4:o=e.sent,console.log(o),o&&o.lpStates.length>0&&(r=o.lpStates.find((function(e){return e.bToken.toLocaleLowerCase()==="0x21e60ee73f17ac0a411ae5d690f908c3ed66fe12".toLocaleLowerCase()})))&&ye(r.lTokenId),F(!0);case 8:case"end":return e.stop()}}),e)}))),[n.account]),Re=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,c,i,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getVotingInfo");case 2:t=e.sent,console.log("getVotingInfo",t),t&&t.length&&(c=t.find((function(e){return+e.chainId===+n.chainId})),i=t.reduce((function(e,t){return t.deadline>e.deadline?t:e}),t[0]),c=c?c.deadline+"000":i.deadline+"000",s=new Date,je(+c),s.getTime()>=+c?(_(!0),fe(!0)):(fe(!1),_(!1)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Te=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log([n.chainId,n.account,w]),e.next=3,h.a.request("vote",[n.chainId,n.account,w],{includeResponse:!0});case 3:e.sent.success?(Pe(),Ve(),Fe(),ge.success("Success")):ge.error("Failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){n.isConnected()&&D&&(Pe(),Ve())}),[n,we,D]),Object(d.useEffect)((function(){Fe(),Re()}),[]),Object(d.useEffect)((function(){n.isConnected()&&w&&!W&&!A?Y(!1):Y(!0)}),[n,w,E,W]),Object(d.useEffect)((function(){var e=0;pe&&X?e=Object(m.a)(pe).plus(X).toNumber():X?e=X:pe&&(e=pe),ie(e)}),[pe,X]),Object(d.useEffect)((function(){n.account&&qe()}),[n.account]),Object(d.useEffect)((function(){ke&&n.account&&Ee&&Se&&Ce&&De()}),[ke,n.account,Ee,Se,Ce]),Object(I.jsxs)("div",{className:"dip-box",children:[Object(I.jsxs)("div",{className:"back-governance",children:[Object(I.jsx)(r.b,{to:"/governance",children:Object(I.jsxs)("div",{className:"icon-back",children:[Object(I.jsx)("img",{alt:"",src:p.default}),Object(I.jsx)("span",{children:t.back})]})}),Object(I.jsx)("div",{className:"poll-detail",children:t["poll-detail"]})]}),Object(I.jsxs)("div",{className:"dip-box-info",children:[Object(I.jsxs)("div",{className:"poll-dip-info ",children:[Object(I.jsxs)("div",{className:"dip-list-title",children:[Object(I.jsxs)("div",{className:"title-text",children:[t.dip,"-013"]}),Object(I.jsxs)("div",{className:"dip-progress",children:[Object(I.jsx)("div",{className:"progress-bg"}),"PROGRESSING"]})]}),Object(I.jsx)("div",{className:"dip-list-des ",children:"Vote for the next iChain for Deri V4"}),Object(I.jsx)("div",{className:"dip-time",children:ue?ve?"Target End Time:".concat(Object(m.S)(ue)," (subject to extension, see below for details)"):Object(I.jsxs)(I.Fragment,{children:[Object(m.e)(ue)," ","(Voting deadline: ",Object(m.S)(ue),")"]}):""})]}),Object(I.jsxs)("div",{className:"dip-option",children:[Object(I.jsxs)("div",{className:"1"===w?"option-check option-checked":"option-check",onClick:function(e){return Le("1")},children:[Object(I.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(I.jsxs)("div",{className:"option-check-text",children:[Object(I.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return Le("1")},checked:"1"===w}),Object(I.jsx)("label",{for:"I"}),Object(I.jsx)("span",{className:"option-title-text",children:"Base"})]}),Object(I.jsxs)("div",{className:"option-num",children:[E[0]?E[0].toFixed(0):0," ",t["deri-voting"]," (",T&&E[0]?(E[0]/T*100).toFixed(0):0,"%)"]})]}),Object(I.jsx)("div",{className:"option-peng-bg",style:{width:"".concat(T&&E[0]?(E[0]/T*100).toFixed(0):0,"%")}})]}),Object(I.jsxs)("div",{className:"2"===w?"option-check option-checked":"option-check",onClick:function(){return Le("2")},children:[Object(I.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(I.jsxs)("div",{className:"option-check-text",children:[Object(I.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return Le("2")},checked:"2"===w}),Object(I.jsx)("label",{for:"II"}),Object(I.jsx)("span",{className:"option-title-text",children:"Blast"})]}),Object(I.jsxs)("div",{className:"option-num",children:[E[1]?E[1].toFixed(0):0,"  ",t["deri-voting"]," (",T&&E[1]?(E[1]/T*100).toFixed(0):0,"%)"]})]}),Object(I.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(T&&E[1]?(E[1]/T*100).toFixed(0):0,"%")}})]}),Object(I.jsxs)("div",{className:"3"===w?"option-check option-checked":"option-check",onClick:function(){return Le("3")},children:[Object(I.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(I.jsxs)("div",{className:"option-check-text",children:[Object(I.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:function(e){return Le("3")},checked:"3"===w}),Object(I.jsx)("label",{for:"III"}),Object(I.jsx)("span",{className:"option-title-text",children:"Metis"})]}),Object(I.jsxs)("div",{className:"option-num",children:[E[2]?E[2].toFixed(0):0,"  ",t["deri-voting"]," (",T&&E[2]?(E[2]/T*100).toFixed(0):0,"%)"]})]}),Object(I.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(T&&E[2]?(E[2]/T*100).toFixed(0):0,"%")}})]}),Object(I.jsxs)("div",{className:"4"===w?"option-check option-checked":"option-check",onClick:function(){return Le("4")},children:[Object(I.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(I.jsxs)("div",{className:"option-check-text",children:[Object(I.jsx)("input",{type:"radio",name:"option",value:"4",id:"IV",onChange:function(e){return Le("4")},checked:"4"===w}),Object(I.jsx)("label",{for:"IV"}),Object(I.jsx)("span",{className:"option-title-text",children:"Optimism"})]}),Object(I.jsxs)("div",{className:"option-num",children:[E[3]?E[3].toFixed(0):0,"  ",t["deri-voting"]," (",T&&E[3]?(E[3]/T*100).toFixed(0):0,"%)"]})]}),Object(I.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(T&&E[3]?(E[3]/T*100).toFixed(0):0,"%")}})]}),Object(I.jsxs)("div",{className:"5"===w?"option-check option-checked":"option-check",onClick:function(){return Le("5")},children:[Object(I.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(I.jsxs)("div",{className:"option-check-text",children:[Object(I.jsx)("input",{type:"radio",name:"option",value:"5",id:"VI",onChange:function(e){return Le("5")},checked:"5"===w}),Object(I.jsx)("label",{for:"VI"}),Object(I.jsx)("span",{className:"option-title-text",children:"ZetaChain"})]}),Object(I.jsxs)("div",{className:"option-num",children:[E[4]?E[4].toFixed(0):0,"  ",t["deri-voting"]," (",T&&E[4]?(E[4]/T*100).toFixed(0):0,"%)"]})]}),Object(I.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(T&&E[4]?(E[4]/T*100).toFixed(0):0,"%")}})]}),Object(I.jsxs)("div",{className:"6"===w?"option-check option-checked":"option-check",onClick:function(){return Le("6")},children:[Object(I.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(I.jsxs)("div",{className:"option-check-text",children:[Object(I.jsx)("input",{type:"radio",name:"option",value:"6",id:"VII",onChange:function(e){return Le("6")},checked:"6"===w}),Object(I.jsx)("label",{for:"VII"}),Object(I.jsx)("span",{className:"option-title-text",children:"zkLink Nova"})]}),Object(I.jsxs)("div",{className:"option-num",children:[E[5]?E[5].toFixed(0):0,"  ",t["deri-voting"]," (",T&&E[5]?(E[5]/T*100).toFixed(0):0,"%)"]})]}),Object(I.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(T&&E[5]?(E[5]/T*100).toFixed(0):0,"%")}})]}),Object(I.jsxs)("div",{className:"power-time",children:["Last updated: ",oe," minutes ago"]}),Object(I.jsxs)("div",{className:"vote-button",children:[Object(I.jsxs)("div",{className:"your-power",children:["Your Voting Power :",Object(I.jsx)(b.a,{value:ce,decimalScale:2})," DERI"]}),Object(I.jsx)(u.a,{disabled:J,label:W?"Vote Submitted":t.vote,onClick:Te,width:"286",fontSize:"18"})]})]}),Object(I.jsxs)("div",{className:"dip-option-des-rules",children:[Object(I.jsx)("div",{className:"description-close-open",children:t.description}),Object(I.jsx)("div",{className:"description-text",children:Object(I.jsx)("div",{className:"ul-description",children:"The \u201ciChain\u201d, one of the two main components of Deri V4, represents the requesting interface and serves as a pivotal entry point for user interactions. It adeptly handles all the user requests, from traders initiating orders and managing margins to liquidity providers adding or removing liquidity. While theoretically any layer 1 or layer 2 can be adopted as an i-Chain, in practice, the community will choose which ones to deploy."})}),Object(I.jsxs)("div",{className:"vote-rules",children:[Object(I.jsx)("div",{className:"rules-title",children:t["voting-rules"]}),Object(I.jsxs)("div",{className:"rules-text",children:[Object(I.jsxs)("div",{className:"rules-margin",children:["Your voting power is the summation of the following balances in your wallet as of the deadline:",Object(I.jsxs)("ul",{className:"no-margin",children:[Object(I.jsx)("li",{children:"DERI balance in your wallet"}),Object(I.jsx)("li",{children:"DERI balance in your LP tokens on Deri Pools"}),Object(I.jsx)("li",{children:"DERI amount contained in your DERI-USDT SLP tokens on SushiSwap"}),Object(I.jsx)("li",{children:"DERI amount contained in your DERI-BUSD CLP tokens on PancakeSwap"}),Object(I.jsx)("li",{children:"DERI amount contained in your DERI-WETH LP tokens on Uniswap V3"})]})]}),Object(I.jsx)("div",{className:"rules-margin",children:"You can choose any of the 8 chains (ETH/Arbitrum/BNBChain/Linea/zkSync/Scroll/Polygon zkEVM/Manta Pacific) to sign your vote by the deadline"}),Object(I.jsx)("div",{className:"rules-margin",children:"Voting Deadline =  2024 Mar 14th 10:00:00AM UTC"}),Object(I.jsx)("div",{className:"rules-margin",children:"When a vote is submitted less than 15 min to the deadline, the deadline will be extended by 15 min. That is, the voting period will continue to extend until there is no vote within the last 15 min."}),Object(I.jsx)("div",{className:"rules-margin",children:"A snapshot will be taken at the block, at the deadline, and used to calculate the result."}),Object(I.jsx)("div",{className:"rules-margin",children:"Please note that, if you had voted before the deadline but then had transferred your DERI, DLT, SushiSwap-LP, Pancake-LP, or Uniswap-LP before the deadline, it would be the balance at the deadline that counts"})]})]}),Object(I.jsxs)("div",{className:"supplementary-notes",children:[Object(I.jsx)("div",{className:"notes-title",children:"Reference Poll Link"}),Object(I.jsx)("div",{className:"notes-text",children:Object(I.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth/proposal/0x32577a2a71f73054be13264a3f2aef1efd2d1f33ab5ed357d2b017dcd07f5167",children:"Snapshot"})})]}),Object(I.jsxs)("div",{className:"supplementary-notes",children:[Object(I.jsx)("div",{className:"notes-title",children:"Discussion"}),Object(I.jsx)("div",{className:"notes-text",children:Object(I.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.com/invite/kb8ZbYgp8M",children:"Discord"})})]})]})]})]})})))}}]);
//# sourceMappingURL=45.9d7c4e40.chunk.js.map