(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[27],{1714:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var a=c(1919),s=c(1868),n=c.n(s),i=c(1916),r=(c(1680),c(33)),l=(c(1715),c(3));function o(e){var t=e.page,c=e.count,s=e.onPage,o=e.pageSize,j=e.onShowSizeChange;return Object(l.jsx)("div",{className:"pagination",children:Object(l.jsx)(a.a,{selectComponentClass:i.a,onChange:s,current:t,total:c,pageSize:o,prevIcon:function(){return Object(l.jsx)(r.a,{token:"arrow-left"})},nextIcon:function(){return Object(l.jsx)(r.a,{token:"arrow-right"})},showSizeChanger:!0,onShowSizeChange:j,locale:n.a,pageSizeOptions:["10","20","30","50"]})})}},1715:function(e,t,c){},2499:function(e,t,c){},2721:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(2),n=c(10),i=c(5),r=c(59),l=c(40),o=c(595),j=c(317),d=c(21),p=(c(19),c(1866),c(1680),c.p+"static/media/logo-deri.8af5c8cc.svg"),b=c(1714),u=(c(2499),c(3));t.default=Object(r.b)("wallet")(Object(r.c)((function(e){var t=e.lang,c=e.wallet,r=Object(i.useState)(),O=Object(n.a)(r,2),h=O[0],x=O[1],m=Object(i.useState)(1),f=Object(n.a)(m,2),v=f[0],N=f[1],g=Object(i.useState)([]),w=Object(n.a)(g,2),S=w[0],C=w[1],M=Object(i.useState)([]),k=Object(n.a)(M,2),y=k[0],z=k[1],E=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.request("getUserEarnInfo",[c.detail.account,2]);case 2:(t=e.sent)&&(s=Math.abs(t.pnl)<Math.pow(10,-10)?0:100*(t.pnl-1),x(s));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.request("getEarnTop50Users",[2]);case 2:(t=e.sent)&&(c=t.map((function(e){return e.pnl=Math.abs(e.pnl)<Math.pow(10,-10)?0:100*(e.pnl-1),e.account=Object(d.o)(e.account),e})),C(c));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e;e=1===v?S.slice(0,10*v):S.slice(10*(v-1),10*v),z(e)}),[S,v]),Object(i.useEffect)((function(){c.isConnected()&&E(),I()}),[c.detail,c]),Object(u.jsxs)("div",{className:"testnet-practice",children:[Object(u.jsxs)("div",{className:"practice-info",children:[Object(u.jsx)("div",{className:"practice-title",children:t["practice-to-earn"]}),Object(u.jsx)("div",{className:"practice-time",children:"Mar. 1st 09:00 AM (UTC) \u2014 Mar. 8th 09:00 AM (UTC)"}),Object(u.jsxs)("div",{className:"practice-info-box",children:[Object(u.jsxs)("div",{className:"practice-info-left",children:[Object(u.jsx)("div",{className:"total-rewards-pool",children:Object(u.jsxs)("div",{className:"total-rewards-box",children:[Object(u.jsx)("div",{className:"deri-logo",children:Object(u.jsx)("img",{src:p,alt:"deri"})}),Object(u.jsxs)("div",{className:"total-rewards-num",children:[Object(u.jsx)("div",{className:"total-rewards-pool-title",children:t["total-rewards-pool"]}),Object(u.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(u.jsx)("span",{children:"10,000"}),Object(u.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]})}),Object(u.jsxs)("div",{className:"your-pnl",children:[Object(u.jsx)("span",{children:Object(u.jsx)(j.a,{text:t["your-pnl"],tip:t["your-pnl-tip"],multiline:!0})}),Object(u.jsx)("span",{className:"your-pnl-pen",children:Object(u.jsx)(o.a,{value:h,suffix:"%",decimalScale:2})})]})]}),Object(u.jsxs)("div",{className:"practice-info-right",children:[Object(u.jsxs)("div",{className:"top-pnl-list-box",children:[Object(u.jsx)("div",{className:"top-pnl-list-box-title",children:"Leaderboard"}),Object(u.jsxs)("div",{className:"top-pnl-list",children:[Object(u.jsxs)("div",{className:"top-pnl-list-title",children:[Object(u.jsx)("span",{children:t.no}),Object(u.jsx)("span",{children:t["user-addr"]}),Object(u.jsx)("span",{children:t.pnl})]}),Object(u.jsx)("div",{className:"top-pnl-list-info",children:y.map((function(e,t){return Object(u.jsxs)("div",{className:"top-pnl-list-info-box",children:[Object(u.jsx)("div",{className:"no",children:e.index}),Object(u.jsx)("div",{className:"address",children:e.account}),Object(u.jsx)("div",{className:"pnl",children:Object(u.jsx)(o.a,{value:e.pnl,suffix:"%",decimalScale:2})})]},t)}))})]})]}),Object(u.jsxs)("div",{className:"page-box",children:[Object(u.jsx)(b.a,{page:v,onPage:function(e){N(e)},count:S.length,pageSize:10}),Object(u.jsxs)("div",{className:"remind",children:["* ",t["update-every-hour"]]})]})]})]})]}),Object(u.jsx)("div",{className:"detailed-rules",children:Object(u.jsx)("a",{target:"_blank",href:"https://theontoteam.medium.com/1b958bc5228a",rel:"noreferrer",children:t["detailed-rules"]})})]})})))}}]);
//# sourceMappingURL=27.d8beab52.chunk.js.map