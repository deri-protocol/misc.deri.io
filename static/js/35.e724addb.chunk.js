(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[35],{2484:function(e,s,i){},2704:function(e,s,i){"use strict";i.r(s),i.d(s,"default",(function(){return N}));var t=i(0),c=i(2),a=i(10),n=i(5),d=i.p+"static/media/down.02e6e6af.svg",l=i.p+"static/media/go.10e047e2.svg",r=i.p+"static/media/check.c0590456.svg",j=i.p+"static/media/governance-discussion.4eb7efd0.svg",o=i(40),b=i.p+"static/media/pool-votes.073d8535.svg",p=i.p+"static/media/executive-votes.50e7bf55.svg",x=(i(2484),i(108)),v=i(90),h=i.n(v),O=i(20),m=i(3);function N(e){var s=e.lang,i=e.getLang,v=Object(n.useState)(!0),N=Object(a.a)(v,2),u=N[0],g=N[1],f=Object(n.useState)(!0),w=Object(a.a)(f,2),E=w[0],I=w[1],S=Object(n.useState)(0),k=Object(a.a)(S,2),C=(k[0],k[1]),D=Object(n.useState)(0),V=Object(a.a)(D,2),F=V[0],T=V[1],M=Object(n.useState)(),y=Object(a.a)(M,2),U=y[0],H=y[1],A=Object(n.useState)(""),B=Object(a.a)(A,2),_=B[0],J=B[1],R=function(e){if(e){var s=document.getElementById(e);s&&s.scrollIntoView()}},X=function(){var e=Object(c.a)(Object(t.a)().mark((function e(){var s;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.request("getProposals",[]);case 2:(s=e.sent)&&J(s.count);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(c.a)(Object(t.a)().mark((function e(){var s,i,c,a,n,d;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://vote.deri.io/get_voting_powers");case 2:s=e.sent,s=(s=JSON.parse(s.data[0].votes)).map((function(e){return Object(O.a)(e).div(Math.pow(10,18)).toNumber()})),i=Object(O.l)(s),c=i.max,i.min,a=i.sum,0===(n=i.maxIndex)?d="Arbitrum":1===n?d="BNB Chain":2===n?d="Polygon zkEVM":3===n&&(d="zkSync Era"),H(d),T(c.toFixed(0)),C(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){X(),Y()}),[]),Object(m.jsx)("div",{className:"governance-box",children:Object(m.jsxs)("div",{className:"governance-box-info",children:[Object(m.jsx)("div",{className:"governance-title",children:s.title}),Object(m.jsx)("div",{className:"governance-des",children:s["governance-des"]}),Object(m.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(m.jsxs)("div",{className:"active-pool-votes-num",children:[Object(m.jsx)("div",{className:_?"active-num":"no-active-num",children:_})," ",s["active-pool-votes"]]})}),Object(m.jsxs)("div",{className:"active-esectutive-votes-num",onClick:function(){R("EXECUTIVEVOTES")},children:[Object(m.jsx)("div",{className:"no-active-num",children:"0"}),s["active-esectutive-votes"]]}),Object(m.jsx)("div",{className:"down",children:Object(m.jsx)("img",{src:d,alt:"down"})}),Object(m.jsx)("div",{className:"how-to-participate",children:s["how-to-participate"]}),Object(m.jsxs)("div",{className:"participate-step",children:[Object(m.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(m.jsxs)("div",{className:"step",children:[Object(m.jsxs)("div",{className:"step-one-info",children:[Object(m.jsx)("div",{className:"hover-go",children:Object(m.jsx)("img",{src:l,alt:"go"})}),Object(m.jsx)("div",{className:"step-logo",children:Object(m.jsx)("img",{src:j,alt:"discussion"})}),Object(m.jsx)("div",{className:"step-text",children:s["governance-discussion"]})]}),Object(m.jsxs)("div",{className:"hover",children:[Object(m.jsx)("div",{className:"san"}),s["governance-discussion-hover"]]})]})}),Object(m.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth",children:Object(m.jsxs)("div",{className:"step",children:[Object(m.jsxs)("div",{className:"step-one-info",children:[Object(m.jsx)("div",{className:"hover-go",children:Object(m.jsx)("img",{src:l,alt:"go"})}),Object(m.jsx)("div",{className:"step-logo",children:Object(m.jsx)("img",{src:b,alt:"discussion"})}),Object(m.jsx)("div",{className:"step-text",children:s["poll-votes"]})]}),Object(m.jsxs)("div",{className:"hover",children:[Object(m.jsx)("div",{className:"san"}),s["poll-votes-hover"]]})]})}),Object(m.jsxs)("div",{className:"step",onClick:function(){R("EXECUTIVEVOTES")},children:[Object(m.jsxs)("div",{className:"step-one-info",children:[Object(m.jsx)("div",{className:"hover-go"}),Object(m.jsx)("div",{className:"step-logo",children:Object(m.jsx)("img",{src:p,alt:"discussion"})}),Object(m.jsx)("div",{className:"step-text",children:s["executive-votes"]})]}),Object(m.jsxs)("div",{className:"hover",children:[Object(m.jsx)("div",{className:"san"}),s["executive-votes-hover"]]})]})]}),Object(m.jsx)("div",{id:"EXECUTIVEVOTES",className:"executive-votes",children:s["executive-votes-l"]}),Object(m.jsxs)("div",{className:"dip-list",children:[Object(m.jsxs)("div",{className:"in-progress-executed",children:[Object(m.jsxs)("div",{className:u?"in-progress check":"in-progress",onClick:function(){return g(!u)},children:[s["in-progress"],u?Object(m.jsx)("img",{src:r,alt:""}):""]}),Object(m.jsxs)("div",{className:E?"executed check":"executed",onClick:function(){return I(!E)},children:["FINISHED",E?Object(m.jsx)("img",{src:r,alt:""}):""]})]}),Object(m.jsxs)("div",{className:"dip-list-box",children:[E&&Object(m.jsx)(x.b,{to:"/dipsix",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-006"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Vote for Deri V4\u2019s First i-Chain"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:U}),i("dip-leading-option",{value:F})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2023 Sep 8th 10:00:00AM UTC"})]})}),E&&Object(m.jsx)(x.b,{to:"/dipfive",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-005"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Update transaction fee allocation and introduce a brokerage system to grow the Deri community"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:"YES"}),i("dip-leading-option",{value:2128982})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2023 Apr 21st 10:00:00AM UTC"})]})}),E&&Object(m.jsx)(x.b,{to:"/dipfour",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-004"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Revote for changing the DERI burning mechanism"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:"Burn to deadlock address"}),i("dip-leading-option",{value:2997820})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2022 Sat. 4th June 4:00 AM UTC"})]})}),E&&Object(m.jsx)(x.b,{to:"/dipthree",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-003"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Vote for changing the DERI burning mechanism"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:"Burn to mining vault (the status quo)"}),i("dip-leading-option",{value:1454640})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2022 Sat. 28th May 4:00 AM UTC"})]})}),E&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x.b,{to:"/diptwo",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-002"]}),Object(m.jsxs)("div",{className:"dip-executed",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:s["dip-two-des"]}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:s["dip-two-winner"]}),i("dip-leading-option",{value:"1,440,582 "})]})}),Object(m.jsx)("div",{className:"dip-time",children:s["dip-two-time"]})]})}),Object(m.jsx)(x.b,{to:"/dipone",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-001"]}),Object(m.jsxs)("div",{className:"dip-executed",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:s["dip-one-des"]}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"],Object(m.jsx)("span",{className:"winner-option",children:s["dip-one-winner"]}),i("dip-leading-option",{value:"334,253"})]})}),Object(m.jsx)("div",{className:"dip-time",children:s["dip-one-time"]})]})})]})]})]})]})})}}}]);
//# sourceMappingURL=35.e724addb.chunk.js.map