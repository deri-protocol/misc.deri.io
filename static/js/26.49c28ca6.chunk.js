(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[26],{1621:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var s,n=c(25),a=c(63),i=c(5),r=c(62),d=c(19),o=c(317),l=c(3),j=r.a.div(s||(s=Object(a.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: ",";\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.inputHeight}),(function(e){return e.unitPadding}));function b(e){var t=e.value,c=e.unit,s=e.unitTip,a=e.max,r=e.step,b=e.onChange,u=e.styles,m=void 0===u?{}:u,h=e.disableNegtive,O=void 0===h||h,g=e.focus,x=e.placeholder,f=void 0===x?"":x,v=e.unitPadding,p=void 0===v?"24px":v,N=e.minTradeVolume,w=e.decimal,k=void 0===w?2:w,I=e.readOnly,_=e.inputWidth,C=void 0===_?"50%":_,y=e.inputHeight,S=void 0===y?"56px":y,E=e.className,W=e.disabled,F=void 0!==W&&W,T=e.onBlur,z=e.onFocus,D=Object(i.useRef)(null);return Object(i.useEffect)((function(){D.current.setCustomValidity(""),D.current&&g&&D.current.focus()}),[g]),Object(l.jsxs)(j,{unitPadding:p,inputWidth:C,inputHeight:S,className:E,style:Object(n.a)({},m),children:[Object(l.jsx)("input",{placeholder:f,type:"number",title:"",onKeyPress:function(e){46!==e.which&&8!==e.which&&0!==e.which&&(e.which<48||e.which>57)&&e.preventDefault()},onBlur:T,onFocus:z,disabled:F,value:t,step:isNaN(r)?0:r,ref:D,onChange:function(e){var t="\\d+\\.\\d{0,".concat(k,"}$"),c=new RegExp(t),s=e.target.value;if(a&&Object(d.bg)(s).gt(a))b&&b(a);else if(O&&(s<0||isNaN(s)))b&&b("");else if(s){if(N>=1)if(s/N>=1)b&&b(Object(d.bg)(s).div(N).integerValue()*N);else b&&b(s*N);else if(/\d+\./.test(s)&&!c.test(s)){var n=s.substring(0,s.indexOf(".")+1+k);b&&b(n)}else b&&b(s)}else b&&b(s)},readOnly:I}),Object(l.jsx)("div",{className:"unit",children:s?Object(l.jsx)(o.a,{tip:s,text:c}):c})]})}},2483:function(e,t,c){},2484:function(e,t,c){},2705:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),a=c(10),i=c(5),r=c(59),d=c(19),o=c(1621),l=c(72),j=c(150),b=c(16),u=c(230),m=c(176),h=(c(2483),c(3));function O(){return Object(h.jsx)("div",{class:"sleepContentView",children:Object(h.jsx)("div",{class:"circle"})})}var g=c(417),x=c(599),f=c(607),v=c.p+"static/media/stage-one.7a1f5b00.svg",p=c.p+"static/media/stage-two.768445a6.svg",N=c.p+"static/media/stage-three.ee3fc1c4.svg",w=c(40),k=c.p+"static/media/succeed.02ebda03.svg",I=c.p+"static/media/faild.e2923f7c.svg";function _(e){var t=e.lang,c=e.wallet,r=e.amount,d=e.balance,o=e.initialize,g=e.isClaim,x=e.setSending,f=e.sending,_=e.setAmount,y=e.setIsClaim,S=e.isWalletConnected,E=Object(u.a)(),W=Object(m.c)(),F=Object(l.g)(),T=Object(i.useState)(!1),z=Object(a.a)(T,2),D=z[0],R=z[1],q=Object(i.useState)(!1),J=Object(a.a)(q,2),P=J[0],V=J[1],A=Object(i.useState)(!1),B=Object(a.a)(A,2),H=B[0],U=B[1],L=Object(i.useState)({}),Z=Object(a.a)(L,2),K=Z[0],M=Z[1],$=Object(i.useState)({}),G=Object(a.a)($,2),Q=G[0],X=G[1],Y=Object(i.useState)(!1),ee=Object(a.a)(Y,2),te=ee[0],ce=ee[1],se=Object(i.useState)(!1),ne=Object(a.a)(se,2),ae=ne[0],ie=ne[1],re=Object(i.useState)(Object(h.jsx)(j.a,{type:b.E,className:"button-bridge",fontSize:"18",label:t.approve})),de=Object(a.a)(re,2),oe=de[0],le=de[1],je=function(){c.connect()},be=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=6;break}return e.next=3,w.a.request("getUserWormholeSignature",[c.detail.account]);case 3:(t=e.sent).valid&&(c.switchNetwork(E[t.toChainId]),y(!0)),V(t.valid);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r&&0!==r){e.next=3;break}return W.error(t["amount-must-be-greater-than-zero"]),e.abrupt("return");case 3:if(!(+r>d)){e.next=6;break}return W.error(t["there-is-not-enough-amount"]),e.abrupt("return");case 6:if(S.isFromConnected){e.next=9;break}return W.error("".concat(t["send-finished-one"]," ").concat(C(o.from_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 9:return x(!0),U(!1),M({stageOne:!1}),e.next=14,w.a.request("freeze",[c.detail.chainId,c.detail.account,o.to_chainId,r],{includeResponse:!0});case 14:e.sent.success?(le(Object(h.jsx)(j.a,{type:b.E,className:"button-bridge",label:t.processing})),M({stageOne:!0,stageTwo:!1}),window.setInterval((function(){be()}),3e3)):(U(!0),x(!1));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.isToConnected){e.next=3;break}return W.error("".concat(t["send-finished-one"]," ").concat(C(o.to_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 3:return ce(!0),U(!1),X({stageOne:!1}),e.next=8,w.a.request("mintDeri",[c.detail.chainId,c.detail.account],{includeResponse:!0});case 8:e.sent.success?(X({stageOne:!0,stageTwo:!1}),le(Object(h.jsx)(j.a,{type:b.E,className:"button-bridge",label:t.processing})),window.setInterval((function(){be()}),3e3)):(ce(!1),U(!0));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){F.push("/bridge")},Oe=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.request("unlockDeri",[c.detail.chainId,c.detail.account],{includeResponse:!0});case 2:e.sent.success?(R(!0),ge()):(R(!1),W.error(t["approve-faild"]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var t,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=5;break}return e.next=3,w.a.request("isDeriUnlocked",[c.detail.chainId,c.detail.account]);case 3:(t=e.sent)&&56!==+c.detail.chainId?(ie(t),R(t.isZero)):56===+c.detail.chainId&&(R(!0),n={allowance:Math.pow(10,18),isZero:!1},ie(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){c.isConnected()&&(ge(),be())}),[c.detail,o]),Object(i.useEffect)((function(){P?M({stageOne:!0,stageTwo:!0,stageThree:!0}):te&&(X({stageOne:!0,stageTwo:!0,stageThree:!0}),x(!1),_(""))}),[P,o]),Object(i.useEffect)((function(){r&&ae&&+ae.allowance>+r?R(!0):R(!1)}),[r]),Object(i.useEffect)((function(){var e;e=c.isConnected()?P?Object(h.jsx)(j.a,{type:b.E,className:"button-bridge",label:t.claim,onClick:me}):D?te?Object(h.jsxs)("button",{className:"complete",onClick:he,children:[" ",Object(h.jsx)("img",{alt:"",src:k})," ",t.complete," "]}):Object(h.jsx)(j.a,{type:b.E,className:"button-bridge",label:t.send,onClick:ue}):Object(h.jsx)(j.a,{type:b.E,className:"button-bridge",label:t.approve,onClick:Oe}):Object(h.jsx)(j.a,{type:b.E,className:"button-bridge",label:t["connect-wallet"],onClick:je}),le(e)}),[P,c.detail,D,r,o,S,te]),Object(h.jsxs)("div",{className:"operate",children:[Object(h.jsxs)("div",{className:"from-to-title",children:[t.bridge," ",r,"  DERI ",t.from.toLowerCase()," ",o.from_network," ",t.to.toLowerCase()," ",o.to_network]}),Object(h.jsx)("div",{className:"btn",children:oe}),Object(h.jsxs)("div",{className:"hint",children:[!g&&Object(h.jsxs)("div",{className:"sending",children:[Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:v})]}),Object(h.jsxs)("div",{className:"stage-text",children:[t["sending-deri-to-wormhole"]," "]})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[f&&Object(h.jsx)(h.Fragment,{children:K.stageOne?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:k})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(O,{})})}),!f&&!H&&Object(h.jsx)("div",{className:"staic"}),H&&Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:I,alt:""})})]})]}),Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:p})]}),Object(h.jsx)("div",{className:"stage-text",children:t["waiting-for-bridge-to-sign"]})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[f&&Object(h.jsx)(h.Fragment,{children:K.stageOne&&Object(h.jsx)(h.Fragment,{children:K.stageTwo?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:k})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(O,{})})})}),(!f||!K.stageOne)&&Object(h.jsx)("div",{className:"staic"})]})]}),Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:N})]}),Object(h.jsx)("div",{className:"stage-text",children:t["bridge-signed"]})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[f&&Object(h.jsx)(h.Fragment,{children:K.stageOne&&K.stageTwo&&Object(h.jsx)(h.Fragment,{children:K.stageThree?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:k})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(O,{})})})}),(!f||!K.stageTwo)&&Object(h.jsx)("div",{className:"staic"})]})]})]}),g&&Object(h.jsxs)("div",{className:"claiming",children:[Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:v})]}),Object(h.jsx)("div",{className:"stage-text",children:t["claim-deri-ing"]})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[te&&Object(h.jsx)(h.Fragment,{children:Q.stageOne?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:k})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(O,{})})}),!te&&!H&&Object(h.jsx)("div",{className:"staic"}),H&&Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:I,alt:""})})]})]}),Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:p})]}),Object(h.jsxs)("div",{className:"stage-text",children:[t["waiting-for-bridge-to-sync"]," "]})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[te&&Object(h.jsx)(h.Fragment,{children:Q.stageOne&&Object(h.jsx)(h.Fragment,{children:Q.stageTwo?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:k})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(O,{})})})}),(!te||!Q.stageOne)&&Object(h.jsx)("div",{className:"staic"})]})]}),Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:N})]}),Object(h.jsx)("div",{className:"stage-text",children:t.finished})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[te&&Object(h.jsx)(h.Fragment,{children:Q.stageOne&&Q.stageTwo&&Object(h.jsx)(h.Fragment,{children:Q.stageThree?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:k})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(O,{})})})}),(!te||!Q.stageTwo)&&Object(h.jsx)("div",{className:"staic"})]})]})]})]})]})}function C(e,t){var c={};switch(e=+e){case 1:c.netWork=t.ethereum,c.chainId=1,c.img=x.default;break;case 56:c.netWork=t.bsc,c.chainId=56,c.img=g.default;break;case 128:c.netWork=t.heco,c.chainId=128,c.img=f.default;break;case 97:c.netWork=t["bsc-testnet"],c.chainId=97,c.img=g.default;break;case 3:c.netWork=t.ropsten,c.chainId=3,c.img=x.default;break;case 256:c.netWork=t["heco-testnet"],c.chainId=256,c.img=f.default}return c}var y=c(595),S=c.p+"static/media/arrow-left.3530813d.svg",E=c.p+"static/media/disabled-down.3f7df0de.svg",W=c(600),F=c(322),T=c(409),z=c(614),D=c(71),R=c.n(D);c(2484);function q(e,t){var c={};switch(e=+e){case 1:c.netWork=t.ethereum,c.chainId=1,c.img=x.default;break;case 56:c.netWork=t.bsc,c.chainId=56,c.img=W.default;break;case 128:c.netWork=t.heco,c.chainId=128,c.img=f.default;break;case 97:c.netWork=t["bsc-testnet"],c.chainId=97,c.img=W.default;break;case 3:c.netWork=t.ropsten,c.chainId=3,c.img=x.default;break;case 256:c.netWork=t["heco-testnet"],c.chainId=256,c.img=f.default}return c}t.default=Object(r.b)("wallet")(Object(r.c)((function(e){var t=e.wallet,c=e.lang,r=Object(i.useState)(""),l=Object(a.a)(r,2),j=l[0],b=l[1],u=Object(i.useState)(0),m=Object(a.a)(u,2),O=m[0],g=m[1],v="prod"!==d.DeriEnv.get(),p=v?[{text:c.ropsten,id:3,img:x.default},{text:c["bsc-testnet"],id:97,img:W.default},{text:c["heco-testnet"],id:256,img:f.default}]:[{text:c.ethereum,id:1,img:x.default},{text:c.bsc,id:56,img:W.default},{text:c.heco,id:128,img:f.default}],N=Object(i.useState)(p),k=Object(a.a)(N,2),I=k[0],C=k[1],D=Object(i.useState)(p),J=Object(a.a)(D,2),P=J[0],V=J[1],A=Object(i.useState)(!1),B=Object(a.a)(A,2),H=B[0],U=B[1],L=Object(i.useState)(v?{from_chainId:97,from_network:c["bsc-testnet"],to_chainId:3,to_network:c.ropsten}:{from_chainId:1,from_network:c.ethereum,to_chainId:56,to_network:c.bsc}),Z=Object(a.a)(L,2),K=Z[0],M=Z[1],$=Object(i.useState)(!1),G=Object(a.a)($,2),Q=G[0],X=G[1],Y=Object(i.useState)(!1),ee=Object(a.a)(Y,2),te=ee[0],ce=ee[1],se=Object(i.useState)(!1),ne=Object(a.a)(se,2),ae=ne[0],ie=ne[1],re=Object(i.useState)(q(K.from_chainId,c).img),de=Object(a.a)(re,2),oe=de[0],le=de[1],je=Object(i.useState)(q(K.to_chainId,c).img),be=Object(a.a)(je,2),ue=be[0],me=be[1],he=R()("from-network-list",{show:te}),Oe=R()("to-network-list",{show:ae}),ge=Object(i.useState)({isFromConnected:!1,isToConnected:!1}),xe=Object(a.a)(ge,2),fe=xe[0],ve=xe[1],pe=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,w.a.request("getUserWormholeSignature",[t.detail.account]);case 3:(n=e.sent).valid&&(M({from_chainId:n.fromChainId,from_network:q(n.fromChainId,c).netWork,to_chainId:n.toChainId,to_network:q(n.toChainId,c).netWork}),le(q(n.fromChainId,c).img),me(q(n.toChainId,c).img),b(Object(d.bg)(n.amount,-18).toString()),U(n.valid));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,w.a.request("getDeriBalance",[t.detail.chainId,t.detail.account]);case 3:c=e.sent,g(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){Ne()}),[t.detail,K]),Object(i.useEffect)((function(){pe()}),[t.detail]),Object(i.useEffect)((function(){var e,s=p.filter((function(e){return e.id===+K.from_chainId}))[0],n=p.filter((function(e){return e.id!==+K.from_chainId}))[0],a=p.filter((function(e){return e.id!==+K.from_chainId}))[1];e=[p.filter((function(e){return e.id===+K.to_chainId}))[0],p.filter((function(e){return e.id!==+K.to_chainId}))[0],p.filter((function(e){return e.id!==+K.to_chainId}))[1]],C([s,n,a]),V(e),le(q(K.from_chainId,c).img),me(q(K.to_chainId,c).img),function(){var e=!!t.isConnected()&&+t.detail.chainId===+K.from_chainId,c=!!t.isConnected()&&+t.detail.chainId===+K.to_chainId;ve({isFromConnected:e,isToConnected:c})}()}),[K,t.detail]),Object(h.jsx)("div",{className:"bridge-big-box",children:Object(h.jsxs)("div",{className:"bridge-box",children:[Object(h.jsxs)("div",{className:"bridge-title",children:[Object(h.jsx)("div",{className:"title",children:c.bridge}),Object(h.jsx)("div",{className:"birdge-des",children:c["bridge-des"]})]}),Object(h.jsxs)("div",{className:"bridge-info",children:[Object(h.jsxs)("div",{className:"select-network-box",children:[Object(h.jsx)("div",{className:"select-network-title",children:c["select-networks"]}),Object(h.jsxs)("div",{className:"select-network-from-to",children:[Object(h.jsxs)("div",{className:"from-network",children:[Object(h.jsx)("div",{className:"from-title",children:c.from}),Object(h.jsxs)("div",{className:"from-dropdown-list",children:[Object(h.jsxs)("div",{className:H?"drop drop-disabled":"drop",onClick:function(){H||ce(!te)},children:[Object(h.jsxs)("div",{className:"network-logo-connected",children:[Object(h.jsx)("img",{src:oe,alt:""}),Object(h.jsx)("span",{children:K.from_network}),Object(h.jsx)("div",{className:Q?"connected-hide":fe.isFromConnected?"connected":"is-connected",children:!Q&&fe.isFromConnected?c.connected:c.unconnected})]}),Object(h.jsx)("img",{className:"down-icon",src:H?E:te?z.default:T.default,alt:""})]}),Object(h.jsx)("ul",{className:he,children:I.map((function(e,t){return Object(h.jsx)(h.Fragment,{children:K.from_network!==e.text?Object(h.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(K));t.to_chainId===e.id?(t.from_chainId=K.to_chainId,t.from_network=K.to_network,t.to_chainId=K.from_chainId,t.to_network=K.from_network):(t.from_chainId=e.id,t.from_network=e.text),M(t),ce(!te)}(e)},children:Object(h.jsxs)("div",{className:"li-logo-network",children:[Object(h.jsx)("img",{alt:"",src:e.img})," ",Object(h.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]}),Object(h.jsx)("div",{className:"arrow",children:Object(h.jsx)("img",{src:S,alt:""})}),Object(h.jsxs)("div",{className:"to-network",children:[Object(h.jsx)("div",{className:"to-title",children:c.to}),Object(h.jsxs)("div",{className:"to-dropdown-list",children:[Object(h.jsxs)("div",{className:H?"drop drop-disabled":"drop",onClick:function(){H||ie(!ae)},children:[Object(h.jsxs)("div",{className:"network-logo-connected",children:[Object(h.jsx)("img",{src:ue,alt:""}),Object(h.jsx)("span",{children:K.to_network}),Object(h.jsx)("div",{className:Q?fe.isToConnected?"connected":"is-connected":"connected-hide",children:Q&&fe.isToConnected?c.connected:c.unconnected})]}),Object(h.jsx)("img",{className:"down-icon",src:H?E:ae?z.default:T.default,alt:""})]}),Object(h.jsx)("ul",{className:Oe,children:P.map((function(e,t){return Object(h.jsx)(h.Fragment,{children:K.to_network!==e.text?Object(h.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(K));t.from_chainId===e.id?(t.from_chainId=K.to_chainId,t.from_network=K.to_network,t.to_chainId=K.from_chainId,t.to_network=K.from_network):(t.to_chainId=e.id,t.to_network=e.text),M(t),ie(!ae)}(e)},children:Object(h.jsxs)("div",{className:"li-logo-network",children:[Object(h.jsx)("img",{alt:"",src:e.img})," ",Object(h.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]})]})]}),Object(h.jsxs)("div",{className:"set-amount",children:[Object(h.jsx)("div",{className:"set-amount-title",children:c["set-amount"]}),Object(h.jsxs)("div",{className:"set-amount-box",children:[Object(h.jsxs)("div",{className:"input-deri",children:[Object(h.jsx)(o.a,{placeholder:"0",value:j,onChange:function(e){b(e)},decimal:18,disabled:H,className:"input-box"}),Object(h.jsxs)("span",{children:[Object(h.jsx)("img",{alt:"",src:F.default,className:"amount-img"})," DERI"]})]}),Object(h.jsxs)("div",{className:"total-deri",children:[c["total-amount"]," ",Object(h.jsx)(y.a,{value:O,decimalScale:4,thousandSeparator:!0})," DERI"]})]})]}),Object(h.jsx)("div",{className:"bridge-operate-hint",children:Object(h.jsx)(_,{lang:c,sending:H,wallet:t,balance:O,isWalletConnected:fe,amount:j,isClaim:Q,initialize:K,setIsClaim:X,setSending:U,setAmount:b})}),Object(h.jsx)("div",{className:"bridge-to-polygon",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"birdge-to-polygon-title",children:[c["bridge-to-polygon"],Object(h.jsx)("span",{className:"polygon-title",children:Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://bridge.arbitrum.io/",children:" Arbitrum"})})," |",Object(h.jsx)("span",{className:"polygon-title",children:Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://wallet.matic.network/bridge",children:" Polygon"})})," |",Object(h.jsx)("span",{className:"polygon-title",children:Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://bridge.zksync.io/",children:" zkSync Era"})})]}),Object(h.jsx)("div",{className:"bridge-to-polygon-des",children:c["bridge-to-polygon-des"]})]})})]})]})})})))}}]);
//# sourceMappingURL=26.49c28ca6.chunk.js.map