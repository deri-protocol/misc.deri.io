(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[6],{1642:function(e,t,s){"use strict";s.d(t,"a",(function(){return j}));var c,a=s(10),i=s(58),r=s(57),n=s(5),l=s(32),d=s(3),o=r.a.div(c||(c=Object(i.a)(["\n    cursor: pointer;\n    width:","px;\n    height:","px;\n    display:flex;\n    .tab-title{\n      position: relative;\n    }\n    .bet-new{\n      width:30px;\n      height:14px;\n      border-radius:20px;\n      font-size:10px;\n      display: flex;\n      background-color: #CD7A37;\n      color:#E0ECFF;\n      position: relative;\n      top: -6px;\n      align-items: center;\n      text-transform: capitalize;\n      justify-content: center;\n    }\n    .tab-left.inactive{\n      border-radius:0px 0px 4px 0px;\n    }\n    .tab-right.inactive{\n      border-radius:0px 0px 0px 4px;\n    }\n    .tab-left.active{\n      border-radius:0px 4px 0px 0px;\n      ",";\n    }\n    .tab-right.active{\n      border-radius:4px 0px 0px 0px;\n      ",";\n    }\n    .inactive,.active{\n      width:50%;\n      box-sizing: content-box;\n      font-size:","px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      img{\n        margin-right:","px\n      }\n    }\n    .inactive{\n      background:",";\n      ","\n    }\n    .active {\n      color: ",";\n      background : ",";\n      ",";\n    }\n    .icon-tab{\n      margin-right:20px;\n      width:25px;\n      height:25px;\n    }\n  "])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.borderR}),(function(e){return e.borderL}),(function(e){return e.size}),(function(e){return e.iconMarginRight}),(function(e){return e.inactiveBgColor}),(function(e){return e.borderB}),(function(e){return e.activeFontColor}),(function(e){return e.activeBgColor}),(function(e){return e.borderT}));function j(e){var t=e.tabSet,s=e.inactiveBgColor,c=e.iconMarginRight,i=e.activeBgColor,r=(e.icon,e.className),j=e.width,b=void 0===j?238:j,u=e.height,m=void 0===u?47:u,O=e.size,x=void 0===O?16:O,h=e.borderTop,v=void 0!==h&&h,p=e.borderBottom,N=void 0!==p&&p,f=e.divider,g=void 0!==f&&f,w=e.activeIndex,S=void 0===w?0:w,C=Object.keys(t),y=Object(n.useState)(C[S]),k=Object(a.a)(y,2),Q=k[0],D=k[1],E=Object(n.useState)(),P=Object(a.a)(E,2),A=P[0],T=P[1],I=Object(n.useState)(),R=Object(a.a)(I,2),B=R[0],L=R[1],F=Object(n.useState)(),M=Object(a.a)(F,2),U=M[0],q=M[1],z=Object(n.useState)(),K=Object(a.a)(z,2),J=K[0],Y=K[1],$=Object(n.useState)(),H=Object(a.a)($,2),W=H[0],Z=H[1],_=Object(n.useState)(),G=Object(a.a)(_,2),V=G[0],X=G[1];return Object(n.useEffect)((function(){var e=Object.keys(t);D(e[S])}),[t,S]),Object(n.useEffect)((function(){var e=Object.keys(t),s=Q||e[S];if(t[s]){T(t[s].style);var c=v?"border-top:1px solid ".concat(t[s].borderColor):"border-top:0",a=N?"border-bottom:1px solid ".concat(t[s].borderColor):"border-bottom:0",i=g?"border-left:1px solid ".concat(t[s].borderColor):"border-left:0",r=g?"border-right:1px solid ".concat(t[s].borderColor):"border-right:0",n=t[s].fontColor?t[s].fontColor:"#FFFFFF";L(c),q(i),Y(a),Z(r),X(n)}}),[t,Q]),Object(d.jsxs)("div",{style:A,className:r,children:[Object(d.jsx)(o,{className:"tab-header",iconMarginRight:c,width:b,height:m,activeFontColor:V,activeBgColor:i,inactiveBgColor:s,size:x,borderT:B,borderB:J,borderL:U,borderR:W,children:C.map((function(e,s){return Object(d.jsxs)("div",{className:"tab-title ".concat(t[e].direction||t[e].className,e===Q?" active":" inactive"),onClick:function(t){return function(e,t){D(e)}(e)},children:[t[e].icon?Object(d.jsx)(l.a,{width:t[e].iconWidth,height:t[e].iconHeight,token:e===Q?t[e].icon:t[e].inicon}):"","  ",e,t[e].isBet?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("span",{className:"bet-new",children:"Beta"})}):null]},s)}))}),t[Q]?t[Q].content:""]})}},1831:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var c,a=s(58),i=s(57),r=(s(5),s(3)),n=i.a.div(c||(c=Object(a.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function l(e){var t=e.startTimestamp,s=e.nowTimestamp,c=e.endTimestamp,a=parseInt((s-t)/(c-t)*100);return Object(r.jsx)("div",{className:"time-slider",children:Object(r.jsx)(n,{width:a})})}},2490:function(e,t,s){},2491:function(e,t,s){},2492:function(e,t,s){},2493:function(e,t,s){},2663:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return w}));var c=s(0),a=s(2),i=s(10),r=s(5),n=(s(2490),s.p+"static/media/logo-deri.8af5c8cc.svg"),l=(s(1831),s(55)),d=(s(2491),s(177)),o=s(18),j=s(596),b=s(40),u=s(176),m=s(3);var O=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,s=e.lang,n=Object(r.useState)(""),l=Object(i.a)(n,2),O=l[0],x=l[1],h=Object(r.useState)(""),v=Object(i.a)(h,2),p=v[0],N=v[1],f=Object(r.useState)(""),g=Object(i.a)(f,2),w=g[0],S=g[1],C=Object(r.useState)(""),y=Object(i.a)(C,2),k=y[0],Q=y[1],D=Object(r.useState)(!0),E=Object(i.a)(D,2),P=E[0],A=E[1],T=Object(d.c)(),I=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var s,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("getUserStakingClaimInfo",[t.detail.account,3]);case 2:(s=e.sent)&&(a=+s.claimed+ +s.locked+ +s.claimable,N(s.claimed),S(s.locked),Q(s.claimable),x(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var s,a,i,r,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(+k.claimable>0)){e.next=2;break}return e.abrupt("return");case 2:if(s=new Date((new Date).toLocaleDateString()).getTime()+666e5,a=new Date((new Date).toLocaleDateString()).getTime()+648e5,!((i=parseInt(Date.now()))<s&&i>a)){e.next=8;break}return T.error("Claiming DERI is disabled during first 30 minutes of each epoch"),e.abrupt("return");case 8:return e.next=10,b.a.request("claimMyStaking",[t.detail.account,3],{includeResponse:!0});case 10:if((r=e.sent)&&r.success){e.next=16;break}return T.error("Claim fail"),e.abrupt("return",!1);case 16:T.success("Claim success"),n=Object(o.bg)(p).plus(Object(o.bg)(k)).toString(),N(n),Q(0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){A(!(+k>0))}),[k]),Object(r.useEffect)((function(){t.isConnected()&&I()}),[t,t.detail]),Object(m.jsxs)("div",{className:"trade-claim",children:[Object(m.jsx)("div",{className:"rewards-claim",children:s.rewards}),Object(m.jsxs)("div",{className:"rewards-info",children:[Object(m.jsxs)("div",{className:"lg-rewards-info",children:[Object(m.jsxs)("div",{className:"my-rewards",children:[Object(m.jsx)("div",{className:"claim-title",children:s["my-rewards"]}),Object(m.jsxs)("div",{className:"claim-num",children:[Object(m.jsx)(j.a,{value:O,decimalScale:2})," DERI"]})]}),Object(m.jsxs)("div",{className:"claimed-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["claimed-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(j.a,{value:p,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"locked-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["lcked-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(j.a,{value:w,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"claimable-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["claimable-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(j.a,{value:k,decimalScale:2})})]}),Object(m.jsx)("div",{className:"cliam-button",children:Object(m.jsx)(u.a,{width:"102",height:"34",label:s.claim,disabled:P,onClick:function(){return R()}})})]}),Object(m.jsxs)("div",{className:"md-rewards-info",children:[Object(m.jsxs)("div",{className:"top-rewards-info",children:[Object(m.jsxs)("div",{className:"my-rewards",children:[Object(m.jsx)("div",{className:"claim-title",children:s["my-rewards"]}),Object(m.jsxs)("div",{className:"claim-num",children:[Object(m.jsx)(j.a,{value:O,decimalScale:2})," DERI"]})]}),Object(m.jsx)("div",{className:"cliam-button",children:Object(m.jsx)(u.a,{width:"102",height:"34",label:s.claim,disabled:P,onClick:function(){return R()}})})]}),Object(m.jsxs)("div",{className:"bottom-rewards-info",children:[Object(m.jsxs)("div",{className:"claimed-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["claimed-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(j.a,{value:p,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"locked-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["lcked-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(j.a,{value:w,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"claimable-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["claimable-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(j.a,{value:k,decimalScale:2})})]})]})]})]})]})})));function x(e){var t=e.lang,s=Object(r.useState)({}),l=Object(i.a)(s,2),d=l[0],o=l[1],j=Object(r.useState)(0),u=Object(i.a)(j,2),x=(u[0],u[1],Object(r.useState)("")),h=Object(i.a)(x,2);h[0],h[1];Object(r.useEffect)((function(){v()}),[]);var v=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var t,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("getStakingAddressCount",[3]);case 2:t=e.sent,s={one:!0,two:!1,three:!1,four:!1},t.addressCount>1500&&(s.two=!0),t.addressCount>3e3&&(s.three=!0),t.addressCount>5e3&&(s.four=!0),o(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"staking",children:[Object(m.jsx)("div",{className:"title-timeout",children:Object(m.jsxs)("div",{className:"title-time-text",children:[Object(m.jsxs)("div",{className:"title-text",children:[Object(m.jsxs)("div",{className:"title-epoch",children:[t.title," (Epoch 3)"]}),Object(m.jsx)("div",{className:"time xs-hide"})]}),Object(m.jsxs)("div",{className:"start-end-time-epoch",children:[Object(m.jsx)("div",{className:"satrt-end-time",children:"10:00:00 AM, December 8th 2021  to 10:00:00 AM, January 5th 2022  UTC"}),Object(m.jsx)("div",{className:"epoch xs-hide"})]}),Object(m.jsxs)("div",{className:"xs-show",children:[Object(m.jsx)("div",{className:"epoch"}),Object(m.jsx)("div",{className:"time"})]})]})}),Object(m.jsx)("div",{className:"claim",children:Object(m.jsx)(O,{lang:t})}),Object(m.jsxs)("div",{className:"rewards-box",children:[Object(m.jsxs)("div",{className:"total-rewards-pool",children:[Object(m.jsx)("div",{className:"deri-logo-bg",children:Object(m.jsx)("img",{alt:"",src:n})}),Object(m.jsxs)("div",{className:"total-rewards-num",children:[Object(m.jsx)("div",{className:"total-rewards-pool-title",children:"TOTAL REWARDS POOL"}),Object(m.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(m.jsx)("span",{children:"2,000,000"}),Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]}),Object(m.jsxs)("div",{className:"open-lock-rewards",children:[Object(m.jsxs)("div",{className:"top-open-lock-box",children:[Object(m.jsxs)("div",{className:"lock-open open",children:[Object(m.jsx)("div",{className:"lock-logo open-logo ",children:"OPEN"}),Object(m.jsx)("div",{className:"address-num",children:"< 1500 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"500,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"25% UNLOCKED"})]}),Object(m.jsxs)("div",{className:d.two?"lock-open open":"lock-open",children:[Object(m.jsx)("div",{className:d.two?"lock-logo open-logo":"lock-logo ",children:d.two?"OPEN":"LOCK"}),Object(m.jsx)("div",{className:"address-num",children:"1,500 - 3000 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"1,000,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"50% UNLOCKED"})]})]}),Object(m.jsxs)("div",{className:"bottom-open-lock-box",children:[Object(m.jsxs)("div",{className:d.three?"lock-open open":"lock-open",children:[Object(m.jsx)("div",{className:d.three?"lock-logo open-logo":"lock-logo",children:d.three?"OPEN":"LOCK"}),Object(m.jsx)("div",{className:"address-num",children:"3000 - 5000 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"1,500,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"75% UNLOCKED"})]}),Object(m.jsxs)("div",{className:d.four?"lock-open open":"lock-open",children:[Object(m.jsx)("div",{className:d.four?"lock-logo open-logo":"lock-logo",children:d.four?"OPEN":"LOCK"}),Object(m.jsx)("div",{className:"address-num",children:"> 5,000 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"2,000,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"100% UNLOCKED"})]})]})]})]}),Object(m.jsx)("div",{className:"stage-points",children:Object(m.jsxs)("div",{className:"stage-points-info",children:[Object(m.jsxs)("div",{className:"top-stage-points",children:[Object(m.jsxs)("div",{className:"points-box",children:[Object(m.jsx)("div",{className:"stage-box",children:"1 ST"}),Object(m.jsx)("div",{className:"points-num",children:"10,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 8  - 10 AM, Dec 15 UTC"})]}),Object(m.jsxs)("div",{className:"points-box xs-last",children:[Object(m.jsx)("div",{className:"stage-box",children:"2 ND"}),Object(m.jsx)("div",{className:"points-num",children:"20,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 15  - 10 AM, Dec 22 UTC"})]})]}),Object(m.jsxs)("div",{className:"bottom-stage-points",children:[Object(m.jsxs)("div",{className:"points-box",children:[Object(m.jsx)("div",{className:"stage-box",children:"3 RD"}),Object(m.jsx)("div",{className:"points-num",children:"30,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 22  - 10 AM, Dec 29 UTC"})]}),Object(m.jsxs)("div",{className:"points-box last xs-last",children:[Object(m.jsx)("div",{className:"stage-box",children:"4 TH"}),Object(m.jsx)("div",{className:"points-num",children:"50,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 29  - 10 AM, Jan 5 UTC,2022"})]})]})]})})]})}var h=s(1642),v=s(20),p=s(317);function N(e){var t=e.lang,s=e.List;return Object(m.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(m.jsxs)("div",{className:"list-box",children:[Object(m.jsxs)("div",{className:"list-box-title",children:[Object(m.jsx)("span",{className:"no",children:t.no}),Object(m.jsx)("span",{className:"address",children:t["user-addr"]}),Object(m.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(m.jsx)("span",{className:"avgcoeff",children:t["avg-coeff"]}),Object(m.jsx)(p.a,{text:t.score,className:"score score-hover",tip:"estimated points based on the current weights"})]}),Object(m.jsx)("div",{className:"list-info",children:s.map((function(e,t){return Object(m.jsxs)("div",{className:"list-info-box",children:[Object(m.jsxs)("div",{className:"no",children:[1===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(m.jsx)("div",{className:"address",children:e.userAddr}),Object(m.jsxs)("div",{className:"feespaid",children:["$ ",Object(m.jsx)(j.a,{value:e.feesPaid,decimalScale:0,thousandSeparator:!0})]}),Object(m.jsx)("div",{className:"avgcoeff",children:Object(m.jsx)(j.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(m.jsx)("div",{className:"score",children:Object(m.jsx)(j.a,{value:e.score,decimalScale:2,thousandSeparator:!0})})]},t)}))})]})})}function f(e){var t=e.lang,s=e.List;return Object(m.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(m.jsxs)("div",{className:"list-box",children:[Object(m.jsxs)("div",{className:"list-box-title",children:[Object(m.jsx)("span",{className:"no",children:t.no}),Object(m.jsx)("span",{className:"address",children:t["user-addr"]}),Object(m.jsx)("span",{className:"pnl",children:"PnL"})]}),Object(m.jsx)("div",{className:"list-info",children:s.map((function(e,t){return Object(m.jsxs)("div",{className:"list-info-box",children:[Object(m.jsxs)("div",{className:"no",children:[1===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(m.jsx)("div",{className:"address",children:e.userAddr}),Object(m.jsxs)("div",{className:"pnl",children:["$ ",Object(m.jsx)(j.a,{value:e.pnl,decimalScale:2,thousandSeparator:!0})]})]},t)}))})]})})}s.p,s(2492);var g=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,s=e.lang,l=Object(r.useState)([]),d=Object(i.a)(l,2),o=d[0],u=d[1],O=Object(r.useState)([]),x=Object(i.a)(O,2),g=x[0],w=x[1],S=Object(r.useState)(""),C=Object(i.a)(S,2),y=C[0],k=C[1],Q=Object(r.useState)(""),D=Object(i.a)(Q,2),E=D[0],P=D[1],A=Object(r.useState)(""),T=Object(i.a)(A,2),I=T[0],R=T[1],B=Object(r.useState)({}),L=Object(i.a)(B,2),F=L[0],M=L[1],U=Object(r.useState)(""),q=Object(i.a)(U,2),z=q[0],K=q[1],J=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("getUserStakingReward",[t.detail.account,3]);case 2:(s=e.sent)&&k(s.rewardDERI);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("getUserStakingInfo",[t.detail.account,3]);case 2:s=e.sent,P(s.score),R(s.feePaid),K(s.coef);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("getUserStakingContribution",[t.detail.account,3]);case 2:(s=e.sent)&&M(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var t,s,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("getStakingTop10Users",[3]);case 2:(t=e.sent)&&(s=t.top10.map((function(e,t){var s={};return s.no=e.no,e.userAddr=Object(v.m)(e.userAddr),s.userAddr=e.userAddr,s.feesPaid=e.feePaid,s.avgCoeff=e.evgCoeff,s.score=e.score,s.specialRewardsA=e.specialRewardsA,s})),a=t.top10Pnl.map((function(e,t){var s={};return s.no=e.no,e.userAddr=Object(v.m)(e.userAddr),s.userAddr=e.userAddr,s.pnl=e.pnl,s.specialRewardsB=e.specialRewardsB,s})),w(a),u(s));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){H()}),3e4),H(),function(){e&&clearInterval(e)}}),[]),Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){t.isConnected()&&(J(),Y(),$())}),3e4),t.isConnected()&&(J(),Y(),$()),function(){e&&clearInterval(e)}}),[t.detail.account]);var W={"Top 10 Points":{content:Object(m.jsx)(N,{lang:s,List:o})},"Top 10 Pnl":{content:Object(m.jsx)(f,{lang:s,List:g})}};return Object(m.jsxs)("div",{className:"trading",children:[Object(m.jsx)("div",{className:"trading-left",children:Object(m.jsx)("div",{className:"top-ponts-pnl",children:Object(m.jsx)(h.a,{tabSet:W,activeBgColor:"#203B60"})})}),Object(m.jsxs)("div",{className:"trading-right",children:[Object(m.jsxs)("div",{className:"your-estimated-rewards",children:[Object(m.jsx)("div",{className:"your-estimated-rewards-title",children:Object(m.jsxs)("span",{children:[s["your-rstimated-rewards"]," "]})}),Object(m.jsx)("div",{className:"your-rewards-info",children:Object(m.jsxs)("div",{className:"your-deri",children:[Object(m.jsx)("span",{className:"deri-logo-bg",children:Object(m.jsx)("img",{alt:"",src:n})}),Object(m.jsxs)("span",{className:"span",children:[" ",y?Object(m.jsx)(j.a,{decimalScale:2,value:y,thousandSeparator:!0}):"--"," "]})]})})]}),Object(m.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(m.jsx)("div",{className:"your-score-fee-coeff-title",children:"Your Trading Data"}),Object(m.jsxs)("div",{className:"your-score-fee-coeff-info",children:[Object(m.jsxs)("div",{className:"your-score",children:[Object(m.jsx)("div",{className:"your-score-title",children:Object(m.jsx)(p.a,{text:s["your-scored"],tip:"estimated points based on the current weights"})}),Object(m.jsx)("div",{className:"your-score-num",children:E?Object(m.jsx)(j.a,{value:E,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(m.jsxs)("div",{className:"your-fee",children:[Object(m.jsx)("div",{className:"your-fee-title",children:Object(m.jsx)(p.a,{text:s["your-fees-paid"],tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC"})}),Object(m.jsxs)("div",{className:"your-fee-num",children:["$  ",I?Object(m.jsx)(j.a,{value:I,decimalScale:2,thousandSeparator:!0}):"--"]})]}),Object(m.jsxs)("div",{className:"your-coeff",children:[Object(m.jsx)("div",{className:"your-coeff-title",children:Object(m.jsx)(p.a,{multiline:!0,text:s["your-coeff"],tip:s["boosting-factor-two"]})}),Object(m.jsx)("div",{className:"your-coeff-num",children:z?Object(m.jsx)(j.a,{value:z,decimalScale:4,thousandSeparator:!0}):"--"})]})]})]}),Object(m.jsx)("div",{className:"raise-score",children:Object(m.jsxs)("div",{className:"raise-score-box",children:[Object(m.jsxs)("div",{className:"raise-score-title-link",children:[Object(m.jsx)("div",{className:"raise-score-title",children:s["raise-score"]}),Object(m.jsxs)("div",{className:"raise-score-link",children:[Object(m.jsx)("a",{className:"fist-a",tip:s["staking-hover"],href:"https://deri.io/#/pool/v2_lite/56/future/0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",children:s.staking}),Object(m.jsx)("a",{tip:s["futures-hover"],href:"https://deri.io/#/lite/trade/futures",children:s.futures}),Object(m.jsx)("a",{tip:s["options-hover"],href:"https://deri.io/#/lite/trade/options",children:s.options})]})]}),Object(m.jsxs)("div",{className:"raise-score-des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share \xa0",Object(m.jsx)(p.a,{text:"this quarter's points",multiline:!0,className:"raise-hover",tip:s["the-quarter-points"]}),"\xa0per their transaction fees multiplied by the\xa0",Object(m.jsx)(p.a,{text:"boosting factors",className:"raise-hover",multiline:!0,tip:s["boosting-factor"]}),"."]})]})}),Object(m.jsx)("div",{className:"total-your-contrib",children:Object(m.jsxs)("div",{className:"your-contrib",children:[Object(m.jsxs)("div",{className:"stage",children:[Object(m.jsx)("div",{className:"stage-title"}),Object(m.jsx)("div",{className:"stage-title",children:"1st"}),Object(m.jsx)("div",{className:"stage-title",children:"2nd"}),Object(m.jsx)("div",{className:"stage-title",children:"3rd"}),Object(m.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(m.jsxs)("div",{className:"total-score-box",children:[Object(m.jsx)("div",{className:"total-score",children:"Total Score"}),Object(m.jsx)("div",{className:"total-score",children:F.Q1Contrib&&"0"!==F.Q1Contrib?Object(m.jsx)(j.a,{value:F.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"total-score",children:F.Q2Contrib&&"0"!==F.Q2Contrib?Object(m.jsx)(j.a,{value:F.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"total-score",children:F.Q3Contrib&&"0"!==F.Q3Contrib?Object(m.jsx)(j.a,{value:F.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"total-score",children:F.Q4Contrib&&"0"!==F.Q4Contrib?Object(m.jsx)(j.a,{value:F.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(m.jsxs)("div",{className:"your-score-box",children:[Object(m.jsx)("div",{className:"your-score",children:"Your Score"}),Object(m.jsx)("div",{className:"your-score",children:F.userQ1Contrib&&"0"!==F.Q1Contrib?Object(m.jsx)(j.a,{value:F.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"your-score",children:F.userQ2Contrib&&"0"!==F.Q2Contrib?Object(m.jsx)(j.a,{value:F.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"your-score",children:F.userQ3Contrib&&"0"!==F.Q3Contrib?Object(m.jsx)(j.a,{value:F.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"your-score",children:F.userQ4Contrib&&"0"!==F.Q4Contrib?Object(m.jsx)(j.a,{value:F.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(m.jsxs)("div",{className:"your-point-box",children:[Object(m.jsx)("div",{className:"your-point",children:"Your Points"}),Object(m.jsx)("div",{className:"your-point",children:F.userQ1Point&&"0"!==F.Q1Contrib?Object(m.jsx)(p.a,{text:Object(m.jsx)(j.a,{value:F.userQ1Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:F.userQ1Point?" = (".concat(F.userQ1Contrib," / ").concat(F.Q1Contrib,") * 10,000"):""}):"--"}),Object(m.jsx)("div",{className:"your-point",children:F.userQ2Point&&"0"!==F.Q2Contrib?Object(m.jsx)(p.a,{text:Object(m.jsx)(j.a,{value:F.userQ2Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:F.userQ1Point?" = (".concat(F.userQ2Contrib," / ").concat(F.Q2Contrib,") * 20,000"):""}):"--"}),Object(m.jsx)("div",{className:"your-point",children:F.userQ3Point&&"0"!==F.Q3Contrib?Object(m.jsx)(p.a,{text:Object(m.jsx)(j.a,{value:F.userQ3Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:F.userQ1Point?" = (".concat(F.userQ3Contrib," / ").concat(F.Q3Contrib,") * 30,000"):""}):"--"}),Object(m.jsx)("div",{className:"your-point",children:F.userQ4Point&&"0"!==F.Q4Contrib?Object(m.jsx)(p.a,{text:Object(m.jsx)(j.a,{value:F.userQ4Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:F.userQ1Point?" = (".concat(F.userQ4Contrib," / ").concat(F.Q4Contrib,") * 50,000"):""}):"--"})]})]})})]})]})})));s(2493);function w(e){var t=e.lang;return Object(m.jsx)("div",{className:"three",children:Object(m.jsxs)("div",{className:"finished",children:[Object(m.jsx)(x,{lang:t}),Object(m.jsx)(g,{lang:t}),Object(m.jsx)("div",{className:"detailed-rules",children:Object(m.jsx)("a",{href:"https://deri-protocol.medium.com/deri-protocol-trade-to-earn-epoch-3-7b237845e4dc",children:"Detailed Rules"})})]})})}}}]);
//# sourceMappingURL=6.5e3d1afe.chunk.js.map