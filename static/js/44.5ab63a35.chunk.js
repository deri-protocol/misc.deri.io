(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[44],{2692:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c(10),a=(c(605),c(108)),o=c(55),r=c(5),l=c(176),d=c(177),j=(c(596),c(40)),b=c(318),u=(c(304),c(3));t.default=Object(o.b)("wallet")(Object(o.c)((function(e){var t=e.wallet,c=e.lang,o=Object(r.useState)(),h=Object(i.a)(o,2),p=h[0],m=h[1],O=Object(r.useState)(),x=Object(i.a)(O,2),v=x[0],f=x[1],g=Object(r.useState)(0),N=Object(i.a)(g,2),k=(N[0],N[1]),y=Object(r.useState)(),I=Object(i.a)(y,2),w=(I[0],I[1]),D=Object(r.useState)(!0),E=Object(i.a)(D,2),S=(E[0],E[1]),R=Object(r.useState)(!0),C=Object(i.a)(R,2),P=C[0],B=C[1],T=Object(r.useState)(),L=Object(i.a)(T,2),_=(L[0],L[1]),q=Object(d.c)(),A=function(e){if(!P){var t=document.getElementById("I"),c=document.getElementById("II");"1"===e?t.click():c.click(),m(e)}},U=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getUserVotingPower",[t.detail.account]);case 2:c=e.sent,_(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getUserVotingResult",[t.detail.account]);case 2:"0"!==(c=e.sent).option?(m(c.option),B(!0)):B(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var t,c,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getVotingResult");case 2:t=e.sent,c=+t.option_1+ +t.option_2,n=+t.option_1>+t.option_2?"1":"2",w(n),k(c),f(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log([t.detail.chainId,t.detail.account,p]),e.next=3,j.a.request("vote",[t.detail.chainId,t.detail.account,p],{includeResponse:!0});case 3:e.sent.success?(U(),M(),V(),q.success("Success")):q.error("Failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t.isConnected()&&(U(),M())}),[t,t.detail]),Object(r.useEffect)((function(){V()}),[]),Object(r.useEffect)((function(){t.isConnected()&&"0"!==p&&p&&!P?S(!1):S(!0)}),[t.detail,p,v,P]),Object(u.jsxs)("div",{className:"dip-box",children:[Object(u.jsxs)("div",{className:"back-governance",children:[Object(u.jsx)(a.b,{to:"/governance",children:Object(u.jsxs)("div",{className:"icon-back",children:[Object(u.jsx)("img",{alt:"",src:b.default}),Object(u.jsx)("span",{children:c.back})]})}),Object(u.jsx)("div",{className:"poll-detail",children:c["poll-detail"]})]}),Object(u.jsxs)("div",{className:"dip-box-info",children:[Object(u.jsxs)("div",{className:"poll-dip-info",children:[Object(u.jsxs)("div",{className:"dip-list-title",children:[Object(u.jsxs)("div",{className:"title-text",children:[c.dip,"-003"]}),Object(u.jsxs)("div",{className:"dip-progress",children:[Object(u.jsx)("div",{className:"executed-bg"}),"FINISHED"]})]}),Object(u.jsx)("div",{className:"dip-list-des",children:"Vote for changing the DERI burning mechanism"}),Object(u.jsx)("div",{className:"dip-time",children:"End Time: 2022 Sat. 28th May 4:00 AM UTC"})]}),Object(u.jsxs)("div",{className:"dip-option",children:[Object(u.jsxs)("div",{className:"1"===p?"option-check option-checked":"option-check",onClick:function(e){return A("1")},children:[Object(u.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(u.jsxs)("div",{className:"option-check-text",children:[Object(u.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",checked:"1"===p}),Object(u.jsx)("label",{for:"I"}),Object(u.jsx)("span",{className:"option-title-text",children:"Remove from circulation Forever"})]}),Object(u.jsxs)("div",{className:"option-num",children:["1371480 ",c["deri-voting"]," (48.53%)"]})]}),Object(u.jsx)("div",{className:"option-peng-bg",style:{width:"48.53%"}})]}),Object(u.jsxs)("div",{className:"2"===p?"option-check option-checked":"option-check",onClick:function(){return A("2")},children:[Object(u.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(u.jsxs)("div",{className:"option-check-text",children:[Object(u.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",checked:"2"===p}),Object(u.jsx)("label",{for:"II"}),Object(u.jsx)("span",{className:"option-title-text",children:"Burn to mining vault (the status quo)"})]}),Object(u.jsxs)("div",{className:"option-num",children:["1454640 ",c["deri-voting"]," (51.47%)"]})]}),Object(u.jsx)("div",{className:"option-peng-bg ",style:{width:"51.47%"}})]}),Object(u.jsxs)("div",{className:"vote-button",children:[Object(u.jsx)("div",{className:"your-power"}),Object(u.jsx)(l.a,{disabled:!0,label:c.vote,onClick:F,width:"286",fontSize:"18"})]})]}),Object(u.jsxs)("div",{className:"dip-option-des-rules",children:[Object(u.jsx)("div",{className:"description-close-open",children:c.description}),Object(u.jsx)("div",{className:"description-text",children:Object(u.jsxs)("div",{className:"ul-description",children:["Based on the community poll on snapshot proposed by a community member, the Deri team has placed an executive proposal (DIP 3) into the governance voting system. DERI Holders should vote for this proposal if they want to change the current DERI burning mechanism.",Object(u.jsx)("br",{}),"The option one proposes to burn to deadlock address, thus removing DERI from circulation forever.",Object(u.jsx)("br",{}),"The option two is the status quo, which is that DERI bought from the secondary market is sent to the mining vault.",Object(u.jsx)("a",{target:"_blank",href:"https://docs.deri.io/library/tokenomics#burning-mechanism",children:"Read more."})]})}),Object(u.jsxs)("div",{className:"vote-rules",children:[Object(u.jsx)("div",{className:"rules-title",children:c["voting-rules"]}),Object(u.jsxs)("div",{className:"rules-text",children:[Object(u.jsxs)("div",{className:"rules-margin",children:["Your voting power is the summation of the following balances in your wallet as of the deadline:",Object(u.jsxs)("ul",{className:"no-margin",children:[Object(u.jsx)("li",{children:"DERI balance"}),Object(u.jsx)("li",{children:"the corresponding DERI amount of your DERI-USDT SLP balance on SushiSwap"}),Object(u.jsx)("li",{children:"the corresponding DERI amount of your DERI-BUSD CLP balance on PancakeSwap"}),Object(u.jsx)("li",{children:"the corresponding DERI amount of your DLT balance in the DERI-based Inno Zone pools (BNB Chain)"})]})]}),Object(u.jsx)("div",{className:"rules-margin",children:"You can choose any of the 3 chains (ETH/BNB Chain/Aribitrum) to sign your vote by the deadline"}),Object(u.jsx)("div",{className:"rules-margin",children:"Voting Deadline: 2022 Sat. 28th May 4:00 AM UTC"}),Object(u.jsx)("div",{className:"rules-margin",children:"A snapshot will be taken at the block, at the deadline, and used to calculate the result. Please note that, if you had voted before the deadline but then had transferred your DERI, SLP, PANCAKE-LP, or DLT before the deadline, it would be the balance at the deadline that counts."})]})]}),Object(u.jsxs)("div",{className:"supplementary-notes",children:[Object(u.jsx)("div",{className:"notes-title",children:"Reference Poll Link"}),Object(u.jsx)("div",{className:"notes-text",children:Object(u.jsx)("a",{target:"_blank",href:"https://snapshot.org/#/deri.eth/proposal/0xcba17b9e16742479631df206adc3f343b9b50979bd70452bb689a3266133ad55",children:"Snapshot"})})]}),Object(u.jsxs)("div",{className:"supplementary-notes",children:[Object(u.jsx)("div",{className:"notes-title",children:"Discussion"}),Object(u.jsx)("div",{className:"notes-text",children:Object(u.jsx)("a",{target:"_blank",href:"https://discord.com/invite/kb8ZbYgp8M",children:"Discord"})})]})]})]})]})})))}}]);
//# sourceMappingURL=44.5ab63a35.chunk.js.map