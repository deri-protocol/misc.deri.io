(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[34],{2502:function(t,e,a){},2709:function(t,e,a){"use strict";a.r(e);var i=a(0),c=a(2),s=a(10),n=a(59),r=a.p+"static/media/illustration.2d456f8a.svg",o=a.p+"static/media/illustration-m.cd023351.svg",l=a(19),d=(a(2502),a(416)),b=a(262),j=a(321),m=a(150),u=a(111),x=a(5),O=a(16),v=a(169),h=a(72),p=a.p+"static/media/activity1.b3bedb37.png",g=a.p+"static/media/activity2.fc93e0ae.svg",y=a.p+"static/media/activity3.cc263b01.svg",f=(a.p,a.p+"static/media/activity5.973be675.svg"),T=a.p+"static/media/activity6.a11ec1b6.svg",w=a.p+"static/media/activity7.932723c2.svg",C=a.p+"static/media/activity8.984edc12.svg",I=(a.p,a.p+"static/media/activity10.ded6e09d.svg"),N=a.p+"static/media/activity11.0a4ab157.svg",k=a(71),D=a.n(k),S=a(90),E=a.n(S),A=a(33),L=a(21),P=a(3);function M(t){var e=t.info,a=t.wallet,n=Object(x.useState)(""),r=Object(s.a)(n,2),o=r[0],l=r[1],d=Object(x.useState)(!1),b=Object(s.a)(d,2),j=b[0],u=b[1],O=Object(x.useState)(!1),v=Object(s.a)(O,2),h=v[0],p=v[1],g=Object(x.useState)(e.isStart),y=Object(s.a)(g,2),f=y[0],T=y[1],w=Object(x.useCallback)(Object(c.a)(Object(i.a)().mark((function t(){var e,c,s,n,r,o,l,d,b,j,m,x,O;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://anniversary.deri.io/checkin",t.next=3,E.a.get("https://anniversary.deri.io/checkin",{params:{address:a.detail.account}});case 3:e=t.sent,console.log(e.data),e.data&&(u(e.data.result.status),e.data.result.address.toLocaleLowerCase()===a.detail.account.toLocaleLowerCase()&&(c=new Date,s=new Date(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),10),n=s.getTime(),r=new Date(c-864e5),o=r.getFullYear(),l=r.getMonth()+1,d=r.getDate(),b=1e3*e.data.result.timestamp,j=new Date(b),m=j.getFullYear(),x=j.getMonth()+1,O=j.getDate(),m===o&&x===l&&O<=d&&n<c.getTime()&&p(!0)));case 6:case"end":return t.stop()}}),t)}))),[a]),C=Object(x.useCallback)(Object(c.a)(Object(i.a)().mark((function t(){var e,c,s;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://anniversary.deri.io/checkin?address=".concat(a.detail.account),t.next=3,E.a.post(e);case 3:c=t.sent,console.log(c),c.data&&c.data.result.address&&(s=c.data.result.address.toLocaleLowerCase()===a.detail.account.toLocaleLowerCase())&&u(s);case 6:case"end":return t.stop()}}),t)}))),[a.detail.account]),I=Object(x.useCallback)(Object(c.a)(Object(i.a)().mark((function t(){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h?h&&a.detail.account&&(e.isWallet?window.open("https://galxe.com/DeriProtocol/campaign/GChLLU4kcC"):e.link&&window.open(e.link)):e.link&&window.open(e.link);case 1:case"end":return t.stop()}}),t)}))),[e,a.detail.account,j,h]);return Object(x.useEffect)((function(){a.detail.account&&e.isWallet&&(w(),C())}),[a.detail.account]),Object(x.useEffect)((function(){var t;return e&&e.time&&(t=setInterval((function(){var t=(new Date).getTime()/1e3,a=e.time-t,i=parseInt(a/86400),c=parseInt(a/3600%24),s=parseInt(a/60%60);if(i<0||c<0||s<0)return T(!1),!1;var n="".concat(i,"D : ").concat(c,"H : ").concat(s,"M");l(n)}),1e3)),function(){t&&clearInterval(t)}}),[o]),Object(P.jsxs)("div",{className:D()("activity-card-info",{"isStart-activity":!f}),children:[!f&&Object(P.jsx)("div",{className:"has-not-started"}),Object(P.jsxs)("div",{className:"activity-card-info-box",children:[Object(P.jsxs)("div",{className:"activity-card-info-box-header",children:[Object(P.jsx)("div",{className:D()({"color-text":f}),children:e.id}),f&&Object(P.jsx)("div",{className:"timeout",children:o}),!f&&e.time&&Object(P.jsx)("div",{className:"timeout",children:"END"})]}),Object(P.jsx)("div",{className:"activity-card-info-box-img",children:Object(P.jsx)("img",{src:e.img,alt:e.id})}),Object(P.jsx)("div",{className:"activity-card-info-box-text",children:e.text}),Object(P.jsx)("div",{className:"activity-card-info-box-button",children:Object(P.jsx)(m.a,{className:"button-more",onClick:I,label:e.isWallet&&h?"LUCKY DRAW":e.buttonText})})]})]})}e.default=Object(n.b)("wallet","intl")(Object(n.c)((function(t){var e=t.wallet,a=t.intl,i=Object(b.a)(a.dict,"header"),c=Object(u.b)(),n=Object(h.h)(),k=Object(x.useMemo)((function(){return[{id:"ACTIVITY 1",time:1680256800,img:y,text:"2nd Anniversary Mystery Box Campaign and Enjoy up to 100% Transaction Fee Rebate",link:"https://deri-protocol.medium.com/deri-protocol-100-000-worth-of-mystery-box-campaign-31f34e309b08",buttonText:"MORE DETAILS",isStart:!0,isWallet:!0},{id:"ACTIVITY 2",time:1680256800,img:p,text:"2nd Anniversary Special:  Enjoy a 10% Discount on Transaction Fees",link:"https://deri-protocol.medium.com/exclusive-40-000-loyalty-program-for-existing-traders-3c232a3d97d0",buttonText:"MORE DETAILS",isStart:!0},{id:"ACTIVITY 3",time:1680256800,img:g,text:"Maximize Your Profits with Our Exclusive $10,000 Giveaway for Degen Traders",link:"https://deri-protocol.medium.com/exclusive-10-000-giveaway-for-degen-traders-d9167d84c564",buttonText:"MORE DETAILS",isStart:!0},{id:"ACTIVITY 4",time:1677405600,img:f,text:"Best Wishes to DERI and Share a Prize Pool of $300",link:"https://twitter.com/DeriProtocol/status/1628665096208543744",buttonText:"MORE DETAILS",isStart:!0},{id:"ACTIVITY 5",time:1677837600,img:T,text:"Create Birthday Card and Share a Prize Pool of $500",link:"https://forms.gle/Gb9hyq8YbVKdB2eL7",buttonText:"MORE DETAILS",isStart:!0},{id:"ACTIVITY 6",time:1677848400,img:w,text:"Come and Party with AribtrumNews DAO x Deri Protocol",link:"https://galxe.com/DeriProtocol/campaign/GCH4LU4JnW",buttonText:"MORE DETAILS",isStart:!0},{id:"ACTIVITY 7",time:1678118400,img:N,text:"Come and Party with Celer Network x Deri Protocol",link:"https://galxe.com/DeriProtocol/campaign/GCY4cU4bx4",buttonText:"MORE DETAILS",isStart:!0},{id:"ACTIVITY 8",time:1678269600,img:I,text:"Come and Party with Aribtrum Today x Deri Protocol",link:"https://galxe.com/DeriProtocol/campaign/GCQy3U4jMX",buttonText:"MORE DETAILS",isStart:!0},{id:"ACTIVITY 9",time:"",img:C,text:"Come and Party with Aribtrum Space x Deri Protocol",link:"",buttonText:"COMING SOON",isStart:!1}]}),[]),D=Object(j.a)("root",{preventScroll:!0,closeOnOverlayClick:!1}),S=Object(s.a)(D,3),E=S[0],R=S[1],Y=S[2],W=Object(x.useCallback)((function(){var t=v[l.DeriEnv.get()],e=n.pathname,a=t[Object.keys(t).find((function(t){return e.match(new RegExp("^".concat(t)))}))];return!!c.isConnected()&&(a&&!a.includes(c.chainId))}),[c,n]);return Object(P.jsxs)("div",{className:"anniversary-box",children:[Object(P.jsxs)("div",{className:"anniversary-illustration",children:[Object(P.jsxs)("div",{className:"illustration-box",children:[Object(P.jsxs)("div",{className:"illustration-left",children:[Object(P.jsx)("span",{className:"color-text",children:"DERI PROTOCOL"}),Object(P.jsx)("div",{className:"anniversary-title",children:"2nd Anniversary Carnival \ud83e\udd73 \ud83c\udf89"}),Object(P.jsx)("div",{className:"rewards-text",children:"$150,000 Total Rewards!"}),Object(P.jsxs)("div",{className:"trade-type",children:[Object(P.jsx)("span",{children:"FUTURES"}),Object(P.jsx)("span",{className:"option-type",children:"OPTIONS"}),Object(P.jsx)("span",{className:"powers-type",children:"POWERS"}),Object(P.jsx)("span",{children:"GAMMA"})]})]}),Object(P.jsx)("div",{className:"illustration-right",children:Object(P.jsx)("img",{src:Object(L.I)()?o:r,alt:""})})]}),Object(P.jsx)("div",{className:"connect-wallet-box",children:Object(P.jsxs)("div",{className:"connect-wallet-box-conent",children:[Object(P.jsx)("div",{children:"Get Involved in Our Exciting Activities\ud83e\udd1f"}),c.isConnected()?Object(P.jsxs)("div",{className:"acc-wrapper",children:[Object(P.jsx)(A.a,{token:O.Q[c.connector].icon,width:"40"}),Object(P.jsx)("div",{onClick:e.connect,children:Object(L.o)(e.detail.account)})]}):Object(P.jsx)(m.a,{label:"CONNECT WALLET",className:"m-connect",onClick:R,width:405,height:60,fontWeight:700,fontColor:"#FFF",fontSize:"20"})]})})]}),Object(P.jsxs)("div",{className:"anniversary-activity",children:[Object(P.jsxs)("div",{className:"anniversary-activity-title",children:[Object(P.jsx)("span",{className:" color-text",children:"Get Involved in Our Exciting Activities "})," \ud83e\udd73"]}),Object(P.jsx)("div",{className:"anniversary-activity-info",children:k.map((function(t,a){return Object(P.jsx)(M,{info:t,wallet:e},a)}))})]}),Object(P.jsx)(E,{children:Object(P.jsx)(d.a,{walletContext:c,closeModal:Y,lang:i,wallet:e,isWrongNetwork:W})})]})})))}}]);
//# sourceMappingURL=34.59d0a462.chunk.js.map