(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[36],{2485:function(e,s,i){},2709:function(e,s,i){"use strict";i.r(s),i.d(s,"default",(function(){return N}));var t=i(0),c=i(2),a=i(10),d=i(5),n=i.p+"static/media/down.02e6e6af.svg",l=i.p+"static/media/go.10e047e2.svg",j=i.p+"static/media/check.c0590456.svg",r=i.p+"static/media/governance-discussion.4eb7efd0.svg",o=i(40),b=i.p+"static/media/pool-votes.073d8535.svg",p=i.p+"static/media/executive-votes.50e7bf55.svg",x=(i(2485),i(108)),v=i(90),h=i.n(v),O=i(21),m=i(3);function N(e){var s=e.lang,i=e.getLang,v=Object(d.useState)(!0),N=Object(a.a)(v,2),g=N[0],u=N[1],f=Object(d.useState)(!0),w=Object(a.a)(f,2),S=w[0],E=w[1],I=Object(d.useState)(0),k=Object(a.a)(I,2),C=(k[0],k[1]),D=Object(d.useState)(0),V=Object(a.a)(D,2),F=(V[0],V[1]),T=Object(d.useState)(),M=Object(a.a)(T,2),U=(M[0],M[1]),H=Object(d.useState)(""),A=Object(a.a)(H,2),y=A[0],B=A[1],_=function(e){if(e){var s=document.getElementById(e);s&&s.scrollIntoView()}},J=function(){var e=Object(c.a)(Object(t.a)().mark((function e(){var s;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.request("getProposals",[]);case 2:(s=e.sent)&&B(s.count);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(c.a)(Object(t.a)().mark((function e(){var s,i,c,a,d,n;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://vote.deri.io/get_voting_powers");case 2:s=e.sent,s=(s=JSON.parse(s.data[0].votes)).map((function(e){return Object(O.a)(e).div(Math.pow(10,18)).toNumber()})),i=Object(O.m)(s),c=i.max,i.min,a=i.sum,0===(d=i.maxIndex)?n="Base":1===d?n="BNBChain":2===d?n="Mantle":3===d&&(n="Scroll"),U(n),F(c.toFixed(0)),C(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){J(),R()}),[]),Object(m.jsx)("div",{className:"governance-box",children:Object(m.jsxs)("div",{className:"governance-box-info",children:[Object(m.jsx)("div",{className:"governance-title",children:s.title}),Object(m.jsx)("div",{className:"governance-des",children:s["governance-des"]}),Object(m.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(m.jsxs)("div",{className:"active-pool-votes-num",children:[Object(m.jsx)("div",{className:y?"active-num":"no-active-num",children:y})," ",s["active-pool-votes"]]})}),Object(m.jsxs)("div",{className:"active-esectutive-votes-num",onClick:function(){_("EXECUTIVEVOTES")},children:[Object(m.jsx)("div",{className:"no-active-num",children:"0"}),s["active-esectutive-votes"]]}),Object(m.jsx)("div",{className:"down",children:Object(m.jsx)("img",{src:n,alt:"down"})}),Object(m.jsx)("div",{className:"how-to-participate",children:s["how-to-participate"]}),Object(m.jsxs)("div",{className:"participate-step",children:[Object(m.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(m.jsxs)("div",{className:"step",children:[Object(m.jsxs)("div",{className:"step-one-info",children:[Object(m.jsx)("div",{className:"hover-go",children:Object(m.jsx)("img",{src:l,alt:"go"})}),Object(m.jsx)("div",{className:"step-logo",children:Object(m.jsx)("img",{src:r,alt:"discussion"})}),Object(m.jsx)("div",{className:"step-text",children:s["governance-discussion"]})]}),Object(m.jsxs)("div",{className:"hover",children:[Object(m.jsx)("div",{className:"san"}),s["governance-discussion-hover"]]})]})}),Object(m.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth",children:Object(m.jsxs)("div",{className:"step",children:[Object(m.jsxs)("div",{className:"step-one-info",children:[Object(m.jsx)("div",{className:"hover-go",children:Object(m.jsx)("img",{src:l,alt:"go"})}),Object(m.jsx)("div",{className:"step-logo",children:Object(m.jsx)("img",{src:b,alt:"discussion"})}),Object(m.jsx)("div",{className:"step-text",children:s["poll-votes"]})]}),Object(m.jsxs)("div",{className:"hover",children:[Object(m.jsx)("div",{className:"san"}),s["poll-votes-hover"]]})]})}),Object(m.jsxs)("div",{className:"step",onClick:function(){_("EXECUTIVEVOTES")},children:[Object(m.jsxs)("div",{className:"step-one-info",children:[Object(m.jsx)("div",{className:"hover-go"}),Object(m.jsx)("div",{className:"step-logo",children:Object(m.jsx)("img",{src:p,alt:"discussion"})}),Object(m.jsx)("div",{className:"step-text",children:s["executive-votes"]})]}),Object(m.jsxs)("div",{className:"hover",children:[Object(m.jsx)("div",{className:"san"}),s["executive-votes-hover"]]})]})]}),Object(m.jsx)("div",{id:"EXECUTIVEVOTES",className:"executive-votes",children:s["executive-votes-l"]}),Object(m.jsxs)("div",{className:"dip-list",children:[Object(m.jsxs)("div",{className:"in-progress-executed",children:[Object(m.jsxs)("div",{className:g?"in-progress check":"in-progress",onClick:function(){return u(!g)},children:[s["in-progress"],g?Object(m.jsx)("img",{src:j,alt:""}):""]}),Object(m.jsxs)("div",{className:S?"executed check":"executed",onClick:function(){return E(!S)},children:["FINISHED",S?Object(m.jsx)("img",{src:j,alt:""}):""]})]}),Object(m.jsxs)("div",{className:"dip-list-box",children:[S&&Object(m.jsx)(x.b,{to:"/dipnine",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-009"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"})," FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Vote for Deri V4\u2019s Fourth i-Chain"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:"Scroll"}),i("dip-leading-option",{value:2273245})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2023 Dec 4th 10:00:00AM UTC"})]})}),S&&Object(m.jsx)(x.b,{to:"/dipeight",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-008"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"})," FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Vote for Deri V4\u2019s Third i-Chain"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:"Linea"}),i("dip-leading-option",{value:5479407})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2023 Nov 9th 10:00:00AM UTC"})]})}),S&&Object(m.jsx)(x.b,{to:"/dipseven",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-007"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"})," FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Vote for Deri V4\u2019s Second i-Chain"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:"zkSync Era"}),i("dip-leading-option",{value:2408544})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2023 Sep 15th 10:00:00AM UTC"})]})}),S&&Object(m.jsx)(x.b,{to:"/dipsix",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-006"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Vote for Deri V4\u2019s First i-Chain"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:"Arbitrum"}),i("dip-leading-option",{value:1447532})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2023 Sep 8th 10:00:00AM UTC"})]})}),S&&Object(m.jsx)(x.b,{to:"/dipfive",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-005"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Update transaction fee allocation and introduce a brokerage system to grow the Deri community"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:"YES"}),i("dip-leading-option",{value:2128982})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2023 Apr 21st 10:00:00AM UTC"})]})}),S&&Object(m.jsx)(x.b,{to:"/dipfour",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-004"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Revote for changing the DERI burning mechanism"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:"Burn to deadlock address"}),i("dip-leading-option",{value:2997820})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2022 Sat. 4th June 4:00 AM UTC"})]})}),S&&Object(m.jsx)(x.b,{to:"/dipthree",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-003"]}),Object(m.jsxs)("div",{className:"dip-progress",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:"Vote for changing the DERI burning mechanism"}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:"Burn to mining vault (the status quo)"}),i("dip-leading-option",{value:1454640})]})}),Object(m.jsx)("div",{className:"dip-time",children:"2022 Sat. 28th May 4:00 AM UTC"})]})}),S&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x.b,{to:"/diptwo",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-002"]}),Object(m.jsxs)("div",{className:"dip-executed",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:s["dip-two-des"]}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"]," ",Object(m.jsx)("span",{className:"winner-option",children:s["dip-two-winner"]}),i("dip-leading-option",{value:"1,440,582 "})]})}),Object(m.jsx)("div",{className:"dip-time",children:s["dip-two-time"]})]})}),Object(m.jsx)(x.b,{to:"/dipone",children:Object(m.jsxs)("div",{className:"dip-list-box-info",children:[Object(m.jsxs)("div",{className:"dip-list-title",children:[Object(m.jsxs)("div",{className:"title-text",children:[s.dip,"-001"]}),Object(m.jsxs)("div",{className:"dip-executed",children:[Object(m.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(m.jsx)("div",{className:"dip-list-des",children:s["dip-one-des"]}),Object(m.jsx)("div",{className:"leading-option",children:Object(m.jsxs)("span",{children:[s["leading-option"],Object(m.jsx)("span",{className:"winner-option",children:s["dip-one-winner"]}),i("dip-leading-option",{value:"334,253"})]})}),Object(m.jsx)("div",{className:"dip-time",children:s["dip-one-time"]})]})})]})]})]})]})})}}}]);
//# sourceMappingURL=36.6f7e2afe.chunk.js.map