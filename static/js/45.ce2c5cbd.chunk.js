(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[45],{2695:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(2),i=n(10),a=(n(598),n(108)),o=n(59),r=n(5),l=n(150),d=n(176),j=(n(595),n(40)),u=n(318),b=n(3);t.default=Object(o.b)("wallet")(Object(o.c)((function(e){var t=e.wallet,n=e.lang,o=Object(r.useState)(),h=Object(i.a)(o,2),p=h[0],m=h[1],O=Object(r.useState)(),x=Object(i.a)(O,2),v=x[0],f=x[1],g=Object(r.useState)(0),N=Object(i.a)(g,2),k=(N[0],N[1]),w=Object(r.useState)(),I=Object(i.a)(w,2),y=(I[0],I[1]),D=Object(r.useState)(!1),E=Object(i.a)(D,2),R=E[0],S=E[1],T=Object(r.useState)(!0),C=Object(i.a)(T,2),B=(C[0],C[1]),P=Object(r.useState)(!0),V=Object(i.a)(P,2),q=V[0],L=V[1],U=Object(r.useState)(),_=Object(i.a)(U,2),A=(_[0],_[1]),J=Object(d.c)(),H=function(e){if(!q){var t=document.getElementById("I"),n=document.getElementById("II");"1"===e?t.click():n.click(),m(e)}},M=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getUserVotingPower",[t.detail.account]);case 2:n=e.sent,A(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getUserVotingResult",[t.detail.account]);case 2:n=e.sent,console.log("getUserVotingResult",n),"0"!==n.option?(m(n.option),L(!0)):L(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){var t,n,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getVotingResult");case 2:t=e.sent,console.log("getVotingResult",t),n=+t.option_1+ +t.option_2,c=+t.option_1>+t.option_2?"1":"2",y(c),k(n),f(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){var n,c,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getVotingInfo");case 2:n=e.sent,c=(c=n.find((function(e){return+e.chainId===+t.detail.chainId}))).deadline+"000",(i=new Date).getTime()>=+c?S(!0):S(!1),console.log("getVotingInfo",i.getTime()>=+c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log([t.detail.chainId,t.detail.account,p]),e.next=3,j.a.request("vote",[t.detail.chainId,t.detail.account,p],{includeResponse:!0});case 3:e.sent.success?(M(),Y(),F(),J.success("Success")):J.error("Failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t.isConnected()&&(M(),Z())}),[t,t.detail]),Object(r.useEffect)((function(){F()}),[]),Object(r.useEffect)((function(){t.isConnected()&&p&&!q&&!R?B(!1):B(!0)}),[t.detail,p,v,q]),Object(b.jsxs)("div",{className:"dip-box",children:[Object(b.jsxs)("div",{className:"back-governance",children:[Object(b.jsx)(a.b,{to:"/governance",children:Object(b.jsxs)("div",{className:"icon-back",children:[Object(b.jsx)("img",{alt:"",src:u.default}),Object(b.jsx)("span",{children:n.back})]})}),Object(b.jsx)("div",{className:"poll-detail",children:n["poll-detail"]})]}),Object(b.jsxs)("div",{className:"dip-box-info",children:[Object(b.jsxs)("div",{className:"poll-dip-info",children:[Object(b.jsxs)("div",{className:"dip-list-title",children:[Object(b.jsxs)("div",{className:"title-text",children:[n.dip,"-004"]}),Object(b.jsxs)("div",{className:"dip-progress",children:[Object(b.jsx)("div",{className:"executed-bg"}),"FINISHED"]})]}),Object(b.jsx)("div",{className:"dip-list-des",children:"Revote for changing the DERI burning mechanism"}),Object(b.jsx)("div",{className:"dip-time",children:"Target End Time: 2022 Sat. 4th June 4:00 AM UTC (subject to extension, see below for details)"})]}),Object(b.jsxs)("div",{className:"dip-option",children:[Object(b.jsxs)("div",{className:"1"===p?"option-check option-checked":"option-check",onClick:function(e){return H("1")},children:[Object(b.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(b.jsxs)("div",{className:"option-check-text",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",checked:"1"===p}),Object(b.jsx)("label",{for:"I"}),Object(b.jsx)("span",{className:"option-title-text",children:"Burn to deadlock address"})]}),Object(b.jsxs)("div",{className:"option-num",children:["2997820 ",n["deri-voting"]," (87%)"]})]}),Object(b.jsx)("div",{className:"option-peng-bg",style:{width:"87%"}})]}),Object(b.jsxs)("div",{className:"2"===p?"option-check option-checked":"option-check",onClick:function(){return H("2")},children:[Object(b.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(b.jsxs)("div",{className:"option-check-text",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",checked:"2"===p}),Object(b.jsx)("label",{for:"II"}),Object(b.jsx)("span",{className:"option-title-text",children:"Burn to mining vault (the status quo)"})]}),Object(b.jsxs)("div",{className:"option-num",children:["428618 ",n["deri-voting"]," (13%)"]})]}),Object(b.jsx)("div",{className:"option-peng-bg ",style:{width:"13%"}})]}),Object(b.jsxs)("div",{className:"vote-button",children:[Object(b.jsx)("div",{className:"your-power"}),Object(b.jsx)(l.a,{disabled:!0,label:n.vote,onClick:z,width:"286",fontSize:"18"})]})]}),Object(b.jsxs)("div",{className:"dip-option-des-rules",children:[Object(b.jsx)("div",{className:"description-close-open",children:n.description}),Object(b.jsx)("div",{className:"description-text",children:Object(b.jsxs)("div",{className:"ul-description",children:["Based on the community poll on snapshot proposed by a community member, the Deri team has placed an executive proposal (DIP 4) into the governance voting system. DERI Holders should vote for this proposal if they want to change the current DERI burning mechanism.",Object(b.jsx)("br",{}),"The option one proposes to burn to deadlock address, thus removing DERI from circulation forever.",Object(b.jsx)("br",{}),"The option two is the status quo, which is that DERI bought from the secondary market is sent to the mining vault.",Object(b.jsx)("a",{target:"_blank",href:"https://docs.deri.io/library/tokenomics#burning-mechanism",children:"Read more."})]})}),Object(b.jsxs)("div",{className:"vote-rules",children:[Object(b.jsx)("div",{className:"rules-title",children:n["voting-rules"]}),Object(b.jsxs)("div",{className:"rules-text",children:[Object(b.jsxs)("div",{className:"rules-margin",children:["Your voting power is the summation of the following balances in your wallet as of the deadline:",Object(b.jsxs)("ul",{className:"no-margin",children:[Object(b.jsx)("li",{children:"DERI balance"}),Object(b.jsx)("li",{children:"the corresponding DERI amount of your DERI-USDT SLP balance on SushiSwap"}),Object(b.jsx)("li",{children:"the corresponding DERI amount of your DERI-BUSD CLP balance on PancakeSwap"}),Object(b.jsx)("li",{children:"the corresponding DERI amount of your DLT balance in the DERI-based Inno Zone pools (BNB Chain)"})]})]}),Object(b.jsx)("div",{className:"rules-margin",children:"You can choose any of the 3 chains (ETH/BNB Chain/Aribitrum) to sign your vote by the deadline"}),Object(b.jsx)("div",{className:"rules-margin",children:"Voting Deadline: targeted at 2022 Sat. 4th June 4:00 AM UTC.  When a vote is submitted less than 15 min to the deadline, the deadline will be extended by 15 min. That is, the voting period will continue to extend until there is no vote within the last 15 min."}),Object(b.jsx)("div",{className:"rules-margin",children:"A snapshot will be taken at the block, at the deadline, and used to calculate the result. Please note that, if you had voted before the deadline but then had transferred your DERI, SLP, PANCAKE-LP, or DLT before the deadline, it would be the balance at the deadline that counts."})]})]}),Object(b.jsxs)("div",{className:"supplementary-notes",children:[Object(b.jsx)("div",{className:"notes-title",children:"Reference Poll Link"}),Object(b.jsx)("div",{className:"notes-text",children:Object(b.jsx)("a",{target:"_blank",href:"https://snapshot.org/#/deri.eth/proposal/0x7671323ba773ebc9043e339abb50faef5655597342aef1cbe23a7e9be85fd3bb",rel:"noreferrer",children:"Snapshot"})})]}),Object(b.jsxs)("div",{className:"supplementary-notes",children:[Object(b.jsx)("div",{className:"notes-title",children:"Discussion"}),Object(b.jsx)("div",{className:"notes-text",children:Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.com/invite/kb8ZbYgp8M",children:"Discord"})})]})]})]})]})})))}}]);
//# sourceMappingURL=45.ce2c5cbd.chunk.js.map