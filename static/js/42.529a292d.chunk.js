(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[42],{1870:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=new(0,n(321).GraphQLClient)("https://v4dh.deri.io/graphql",{});function a(e,t){return c.request(e,t)}},2700:function(e,t,n){"use strict";n.r(t);var c,a=n(58),i=n(0),s=n(2),o=n(10),r=(n(599),n(108)),l=n(55),d=n(5),u=n(176),j=n(177),b=n(596),h=n(40),p=n(318),O=n(90),m=n.n(O),x=n(20),f=n(232),v=n(30),g=n(1870),k=n(321),N=n(113),w=n(3);t.default=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.lang,n=Object(N.b)(),l=Object(d.useState)(),O=Object(o.a)(l,2),I=O[0],y=O[1],S=Object(d.useState)([]),C=Object(o.a)(S,2),E=C[0],L=C[1],D=Object(d.useState)(0),P=Object(o.a)(D,2),R=P[0],q=P[1],T=Object(d.useState)(!1),V=Object(o.a)(T,2),F=V[0],B=V[1],U=Object(d.useState)(!0),A=Object(o.a)(U,2),M=A[0],_=A[1],H=Object(d.useState)(!1),J=Object(o.a)(H,2),Y=J[0],$=J[1],G=Object(d.useState)(0),W=Object(o.a)(G,2),Z=W[0],z=W[1],K=Object(d.useState)(0),Q=Object(o.a)(K,2),X=Q[0],ee=Q[1],te=Object(d.useState)(""),ne=Object(o.a)(te,2),ce=ne[0],ae=ne[1],ie=Object(d.useState)(),se=Object(o.a)(ie,2),oe=se[0],re=se[1],le=Object(d.useState)(0),de=Object(o.a)(le,2),ue=de[0],je=de[1],be=Object(j.c)(),he=Object(f.a)("IERC721",42161),pe=Object(d.useState)(0),Oe=Object(o.a)(pe,2),me=Oe[0],xe=Oe[1],fe=Object(f.a)("LpTokenId",42161),ve=Object(f.a)("PairAbi",42161),ge=Object(f.a)("arbitrumLp",42161),ke=Object(d.useCallback)((function(e){if(!Y){var t=document.getElementById("I"),n=document.getElementById("II"),c=document.getElementById("III"),a=document.getElementById("IV");"1"===e?t.click():"2"===e?n.click():"3"===e?c.click():"4"===e&&a.click(),y(e)}}),[Y]),Ne=Object(d.useCallback)(Object(s.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getUserVotingPower",[n.account,me||0]);case 2:t=e.sent,z(t);case 4:case"end":return e.stop()}}),e)}))),[n.account,me]),we=Object(d.useCallback)(Object(s.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getUserVotingResult",[n.account,me||0]);case 2:t=e.sent,console.log("getUserVotingResult",t),"0"!==t.option?(y(t.option),$(!0)):$(!1);case 5:case"end":return e.stop()}}),e)}))),[n.account,me]),Ie=Object(d.useCallback)(Object(s.a)(Object(i.a)().mark((function e(){var t,c,a,r,l,d,u,j,b,h;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.balanceOf(n.account);case 2:t=e.sent,t=v.a.from(t._hex).toString(),c=[],a=0;case 6:if(!(a<t)){e.next=15;break}return e.next=9,he.tokenOfOwnerByIndex(n.account,a);case 9:r=e.sent,r=v.a.from(r._hex).toString(),c.push(r);case 12:a++,e.next=6;break;case 15:l=[],d=0;case 17:if(!(d<c.length)){e.next=25;break}return e.next=20,ge.getPositionInfo(c[d]);case 20:e.sent[0].toLocaleLowerCase()==="0x96C3966534b4377691e11e163A0409Ad01667343".toLocaleLowerCase()&&l.push(c[d]);case 22:d++,e.next=17;break;case 25:return u=l.map(function(){var e=Object(s.a)(Object(i.a)().mark((function e(t){var n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,fe.positions(t);case 3:return c=e.sent,n={tickLower:c.tickLower,tickUpper:c.tickUpper,liquidity:v.a.from(c.liquidity._hex).toString()},e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=28,Promise.all(u);case 28:return u=e.sent,e.next=31,ve.slot0();case 31:j=(j=e.sent).tick,b=u.map((function(e){var t=Object(x.r)(j,e.tickLower,e.tickUpper,e.liquidity),n=Object(o.a)(t,2),c=n[0],a=n[1];return{deri:c/Math.pow(10,18),eth:a/Math.pow(10,18)}})),h=b.reduce((function(e,t){return e+t.deri}),0),console.log("getArbUniDeri",h),je(h);case 37:case"end":return e.stop()}}),e)}))),[fe,ve,he,n.account,ge]),ye=function(){var e=Object(s.a)(Object(i.a)().mark((function e(){var t,n,c,a,s,o,r,l,d,u,j,b,h;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://vote.deri.io/get_voting_powers");case 2:t=e.sent,console.log("getVotingResult",JSON.parse(t.data[0].votes)),t.data&&t.data[0].votes&&(n=new Date,c=n.getMinutes(),a=n.getHours(),s=1e3*t.data[0].timestamp,o=new Date(s),r=o.getMinutes(),l=o.getHours(),u=a-l,(d=c-r)>=1&&u<=0?ae(d):u>0?(j=60-r+Number(c),ae(j)):d<1&&("less than 1",ae("less than 1")),t=(t=JSON.parse(t.data[0].votes)).map((function(e){return Object(x.a)(e).div(Math.pow(10,18)).toNumber()})),b=Object(x.m)(t),b.max,b.min,h=b.sum,b.maxIndex,q(h),L(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=Object(d.useCallback)(Object(s.a)(Object(i.a)().mark((function e(){var t,s,o,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(k.gql)(c||(c=Object(a.a)(["\n      query ($chainId: Int!, $account: String!) {\n        lpStates(where: { chainId: $chainId, account: $account }) {\n          account\n          b0Amount\n          bAmount\n          bToken\n          cumulativePnl\n          cumulativePnlPerLiquidity\n          cumulativeTime\n          lTokenId\n          lastCumulativePnlOnEngine\n          lastCumulativeTimePerLiquidity\n          liquidity\n        }\n      }\n    "]))),s={account:n.account,chainId:42161},e.next=4,Object(g.a)(t,s);case 4:o=e.sent,console.log(o),o&&o.lpStates.length>0&&(r=o.lpStates.find((function(e){return e.bToken.toLocaleLowerCase()==="0x21e60ee73f17ac0a411ae5d690f908c3ed66fe12".toLocaleLowerCase()})))&&xe(r.lTokenId);case 7:case"end":return e.stop()}}),e)}))),[n.account]),Ce=function(){var e=Object(s.a)(Object(i.a)().mark((function e(){var t,c,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getVotingInfo");case 2:t=e.sent,console.log("getVotingInfo",t),t&&t.length&&(c=(c=t.find((function(e){return+e.chainId===+n.chainId})))?c.deadline+"000":"0",a=new Date,re(+c),a.getTime()>=+c?B(!0):B(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(s.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log([n.chainId,n.account,I]),e.next=3,h.a.request("vote",[n.chainId,n.account,I],{includeResponse:!0});case 3:e.sent.success?(Ne(),we(),ye(),be.success("Success")):be.error("Failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){n.isConnected()&&(Ne(),we(),Ce())}),[n,me]),Object(d.useEffect)((function(){ye()}),[]),Object(d.useEffect)((function(){n.isConnected()&&I&&!Y&&!F?_(!1):_(!0)}),[n,I,E,Y]),Object(d.useEffect)((function(){var e=0;ue&&Z?e=Object(x.a)(ue).plus(Z).toNumber():Z&&(e=Z),ee(e)}),[ue,Z]),Object(d.useEffect)((function(){n.account&&Se()}),[n.account]),Object(d.useEffect)((function(){he&&n.account&&ge&&fe&&ve&&Ie()}),[he,n.account,ge,fe,ve]),Object(w.jsxs)("div",{className:"dip-box",children:[Object(w.jsxs)("div",{className:"back-governance",children:[Object(w.jsx)(r.b,{to:"/governance",children:Object(w.jsxs)("div",{className:"icon-back",children:[Object(w.jsx)("img",{alt:"",src:p.default}),Object(w.jsx)("span",{children:t.back})]})}),Object(w.jsx)("div",{className:"poll-detail",children:t["poll-detail"]})]}),Object(w.jsxs)("div",{className:"dip-box-info",children:[Object(w.jsxs)("div",{className:"poll-dip-info ",children:[Object(w.jsxs)("div",{className:"dip-list-title",children:[Object(w.jsxs)("div",{className:"title-text",children:[t.dip,"-009"]}),Object(w.jsxs)("div",{className:"dip-progress",children:[Object(w.jsx)("div",{className:"progress-bg"}),"PROGRESSING"]})]}),Object(w.jsx)("div",{className:"dip-list-des ",children:"Vote for Deri V4\u2019s Fourth  i-Chain"}),Object(w.jsx)("div",{className:"dip-time",children:oe?Object(x.e)(oe):null})]}),Object(w.jsxs)("div",{className:"dip-option",children:[Object(w.jsxs)("div",{className:"1"===I?"option-check option-checked":"option-check",onClick:function(e){return ke("1")},children:[Object(w.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(w.jsxs)("div",{className:"option-check-text",children:[Object(w.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return ke("1")},checked:"1"===I}),Object(w.jsx)("label",{for:"I"}),Object(w.jsx)("span",{className:"option-title-text",children:"Base"})]}),Object(w.jsxs)("div",{className:"option-num",children:[E[0]?E[0].toFixed(0):0," ",t["deri-voting"]," (",R&&E[0]?(E[0]/R*100).toFixed(0):0,"%)"]})]}),Object(w.jsx)("div",{className:"option-peng-bg",style:{width:"".concat(R&&E[0]?(E[0]/R*100).toFixed(0):0,"%")}})]}),Object(w.jsxs)("div",{className:"2"===I?"option-check option-checked":"option-check",onClick:function(){return ke("2")},children:[Object(w.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(w.jsxs)("div",{className:"option-check-text",children:[Object(w.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return ke("2")},checked:"2"===I}),Object(w.jsx)("label",{for:"II"}),Object(w.jsx)("span",{className:"option-title-text",children:"BNBChain"})]}),Object(w.jsxs)("div",{className:"option-num",children:[E[1]?E[1].toFixed(0):0,"  ",t["deri-voting"]," (",R&&E[1]?(E[1]/R*100).toFixed(0):0,"%)"]})]}),Object(w.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(R&&E[1]?(E[1]/R*100).toFixed(0):0,"%")}})]}),Object(w.jsxs)("div",{className:"3"===I?"option-check option-checked":"option-check",onClick:function(){return ke("3")},children:[Object(w.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(w.jsxs)("div",{className:"option-check-text",children:[Object(w.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:function(e){return ke("3")},checked:"3"===I}),Object(w.jsx)("label",{for:"III"}),Object(w.jsx)("span",{className:"option-title-text",children:"Mantle"})]}),Object(w.jsxs)("div",{className:"option-num",children:[E[2]?E[2].toFixed(0):0,"  ",t["deri-voting"]," (",R&&E[2]?(E[2]/R*100).toFixed(0):0,"%)"]})]}),Object(w.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(R&&E[2]?(E[2]/R*100).toFixed(0):0,"%")}})]}),Object(w.jsxs)("div",{className:"4"===I?"option-check option-checked":"option-check",onClick:function(){return ke("4")},children:[Object(w.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(w.jsxs)("div",{className:"option-check-text",children:[Object(w.jsx)("input",{type:"radio",name:"option",value:"4",id:"IV",onChange:function(e){return ke("4")},checked:"4"===I}),Object(w.jsx)("label",{for:"IV"}),Object(w.jsx)("span",{className:"option-title-text",children:"Scroll"})]}),Object(w.jsxs)("div",{className:"option-num",children:[E[3]?E[3].toFixed(0):0,"  ",t["deri-voting"]," (",R&&E[3]?(E[3]/R*100).toFixed(0):0,"%)"]})]}),Object(w.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(R&&E[3]?(E[3]/R*100).toFixed(0):0,"%")}})]}),Object(w.jsxs)("div",{className:"power-time",children:["Last updated: ",ce," minutes ago"]}),Object(w.jsxs)("div",{className:"vote-button",children:[Object(w.jsxs)("div",{className:"your-power",children:["Your Voting Power :",Object(w.jsx)(b.a,{value:X,decimalScale:2})," DERI"]}),Object(w.jsx)(u.a,{disabled:M,label:Y?"".concat(t.vote," Submitted"):t.vote,onClick:Ee,width:"286",fontSize:"18"})]})]}),Object(w.jsxs)("div",{className:"dip-option-des-rules",children:[Object(w.jsx)("div",{className:"description-close-open",children:t.description}),Object(w.jsx)("div",{className:"description-text",children:Object(w.jsx)("div",{className:"ul-description",children:"The \u201ci-Chain\u201d, one of the two main components of Deri V4, represents the requesting interface and serves as a pivotal entry point for user interactions. It adeptly handles all the user requests, from traders initiating orders and managing margins to liquidity providers adding or removing liquidity. While theoretically any layer 1 or layer 2 can be adopted as an i-Chain, in practice, the community will choose which ones to deploy."})}),Object(w.jsxs)("div",{className:"vote-rules",children:[Object(w.jsx)("div",{className:"rules-title",children:t["voting-rules"]}),Object(w.jsxs)("div",{className:"rules-text",children:[Object(w.jsxs)("div",{className:"rules-margin",children:["Your voting power is the summation of the following balances in your wallet as of the deadline:",Object(w.jsxs)("ul",{className:"no-margin",children:[Object(w.jsx)("li",{children:"DERI balance"}),Object(w.jsx)("li",{children:"the corresponding DERI amount of your DERI-USDT SLP balance on SushiSwap"}),Object(w.jsx)("li",{children:"the corresponding DERI amount of your DERI-BUSD CLP balance on PancakeSwap"}),Object(w.jsx)("li",{children:"the corresponding DERI amount of your DERI-WETH LP balance on Uniswap V3"}),Object(w.jsx)("li",{children:"the corresponding DERI amount of your DLT balance in the DERI-based Inno Zone pools (BNB Chain)"})]})]}),Object(w.jsx)("div",{className:"rules-margin",children:"You can choose any of the 3 chains (ETH/Arbitrum/BNBChain) to sign your vote by the deadline"}),Object(w.jsx)("div",{className:"rules-margin",children:"Voting Deadline = 2023 Dec 4th 10:00:00AM UTC"}),Object(w.jsx)("div",{className:"rules-margin",children:"When a vote is submitted less than 15 min to the deadline, the deadline will be extended by 15 min. That is, the voting period will continue to extend until there is no vote within the last 15 min."}),Object(w.jsx)("div",{className:"rules-margin",children:"A snapshot will be taken at the block, at the deadline, and used to calculate the result."}),Object(w.jsx)("div",{className:"rules-margin",children:"Please note that, if you had voted before the deadline but then had transferred your DERI, SLP, PANCAKE-LP, Uniswap V3 LP or DLT before the deadline, it would be the balance at the deadline that counts."})]})]}),Object(w.jsxs)("div",{className:"supplementary-notes",children:[Object(w.jsx)("div",{className:"notes-title",children:"Reference Poll Link"}),Object(w.jsx)("div",{className:"notes-text",children:Object(w.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth/proposal/0x07cf364836a21430f1dcfb7e07794a9d167335176a702d17803400e5026bc142",children:"Snapshot"})})]}),Object(w.jsxs)("div",{className:"supplementary-notes",children:[Object(w.jsx)("div",{className:"notes-title",children:"Discussion"}),Object(w.jsx)("div",{className:"notes-text",children:Object(w.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.com/invite/kb8ZbYgp8M",children:"Discord"})})]})]})]})]})})))}}]);
//# sourceMappingURL=42.529a292d.chunk.js.map