(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[20],{1623:function(e,t,c){"use strict";c.d(t,"a",(function(){return h}));var n,a=c(25),i=c(63),s=c(5),r=c(62),o=c(19),l=c(317),d=c(3),u=r.a.div(n||(n=Object(i.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: ",";\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.inputHeight}),(function(e){return e.unitPadding}));function h(e){var t=e.value,c=e.unit,n=e.unitTip,i=e.max,r=e.step,h=e.onChange,b=e.styles,j=void 0===b?{}:b,f=e.disableNegtive,p=void 0===f||f,O=e.focus,v=e.placeholder,x=void 0===v?"":v,m=e.unitPadding,k=void 0===m?"24px":m,g=e.minTradeVolume,y=e.decimal,N=void 0===y?2:y,C=e.readOnly,w=e.inputWidth,I=void 0===w?"50%":w,E=e.inputHeight,S=void 0===E?"56px":E,F=e.className,T=e.disabled,D=void 0!==T&&T,P=e.onBlur,B=e.onFocus,_=Object(s.useRef)(null);return Object(s.useEffect)((function(){_.current.setCustomValidity(""),_.current&&O&&_.current.focus()}),[O]),Object(d.jsxs)(u,{unitPadding:k,inputWidth:I,inputHeight:S,className:F,style:Object(a.a)({},j),children:[Object(d.jsx)("input",{placeholder:x,type:"number",title:"",onKeyPress:function(e){46!==e.which&&8!==e.which&&0!==e.which&&(e.which<48||e.which>57)&&e.preventDefault()},onBlur:P,onFocus:B,disabled:D,value:t,step:isNaN(r)?0:r,ref:_,onChange:function(e){var t="\\d+\\.\\d{0,".concat(N,"}$"),c=new RegExp(t),n=e.target.value;if(i&&Object(o.bg)(n).gt(i))h&&h(i);else if(p&&(n<0||isNaN(n)))h&&h("");else if(n){if(g>=1)if(n/g>=1)h&&h(Object(o.bg)(n).div(g).integerValue()*g);else h&&h(n*g);else if(/\d+\./.test(n)&&!c.test(n)){var a=n.substring(0,n.indexOf(".")+1+N);h&&h(a)}else h&&h(n)}else h&&h(n)},readOnly:C}),Object(d.jsx)("div",{className:"unit",children:n?Object(d.jsx)(l.a,{tip:n,text:c}):c})]})}},1703:function(e,t,c){"use strict";var n,a,i,s,r=c(25),o=c(10),l=c(195),d=c(63),u=c(5),h=c(62),b=c(71),j=c.n(b),f=c(3),p=["className","onChange","checked"],O=h.a.div(n||(n=Object(d.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]))),v=h.a.svg(a||(a=Object(d.a)(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n"]))),x=h.a.input.attrs({type:"checkbox"})(i||(i=Object(d.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]))),m=h.a.div(s||(s=Object(d.a)(["\n  background: ",";\n  border: 2px solid #5577FD;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  cursor : pointer;\n  position : relative;\n\n  ",":focus + & {\n    box-shadow: 0 0 0 3px pink;\n  }\n\n  "," {\n    visibility: ",";\n    display: flex;\n    position : absolute;\n\n  }\n"])),(function(e){return e.checked?"#5577FD":"none"}),x,v,(function(e){return e.checked?"visible":"hidden"}));t.a=function(e){var t=e.className,c=e.onChange,n=e.checked,a=Object(l.a)(e,p),i=Object(u.useState)(n),s=Object(o.a)(i,2),d=s[0],h=s[1];Object(u.useEffect)((function(){h(n)}),[n]);var b=j()("c-checkbox",{checked:d});return Object(f.jsxs)(O,{className:t,children:[Object(f.jsx)(x,Object(r.a)(Object(r.a)({checked:d},a),{},{onChange:c})),Object(f.jsx)(m,{checked:d,className:b,onClick:function(){var e=!d;h(e),c&&c(e)},children:Object(f.jsx)(v,{className:"icon",viewBox:"0 0 24 24",children:Object(f.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})}},1742:function(e,t,c){},1743:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(1820),a=c.n(n),i=(c(1824),c(1825),c(317)),s=c(3);function r(e){var t=e.label,c=e.className,n=e.checked,r=e.onClick,o=e.tip,l=function(e){r&&r(!n)};return Object(s.jsxs)("div",{className:"l-toggle",children:[o?Object(s.jsx)(i.a,{tip:o,children:Object(s.jsx)("span",{className:"label-text",children:t})}):Object(s.jsx)("span",{className:"label-text",children:t}),Object(s.jsx)(a.a,{onClick:l,checked:n,className:c,onChange:l,icons:!1})]})}},1820:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},a=function(){function e(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,c,n){return c&&e(t.prototype,c),n&&e(t,n),t}}(),i=c(5),s=h(i),r=h(c(71)),o=h(c(29)),l=h(c(1821)),d=h(c(1822)),u=c(1823);function h(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return c.handleClick=c.handleClick.bind(c),c.handleTouchStart=c.handleTouchStart.bind(c),c.handleTouchMove=c.handleTouchMove.bind(c),c.handleTouchEnd=c.handleTouchEnd.bind(c),c.handleFocus=c.handleFocus.bind(c),c.handleBlur=c.handleBlur.bind(c),c.previouslyChecked=!(!e.checked&&!e.defaultChecked),c.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},c}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var c=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:c})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,u.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var c=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>c?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<c&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var c=this.props.icons;return c?void 0===c[e]?t.defaultProps.icons[e]:c[e]:null}},{key:"render",value:function(){var e=this,t=this.props,c=t.className,a=(t.icons,function(e,t){var c={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(c[n]=e[n]);return c}(t,["className","icons"])),i=(0,r.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},c);return s.default.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},s.default.createElement("div",{className:"react-toggle-track"},s.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),s.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),s.default.createElement("div",{className:"react-toggle-thumb"}),s.default.createElement("input",n({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(i.PureComponent);t.default=b,b.displayName="Toggle",b.defaultProps={icons:{checked:s.default.createElement(l.default,null),unchecked:s.default.createElement(d.default,null)}},b.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},1821:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=c(5),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(){return i.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1822:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=c(5),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(){return i.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},1823:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var c=t[0];return{x:c.clientX,y:c.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},1824:function(e,t,c){},1825:function(e,t,c){},1826:function(e,t,c){"use strict";t.a=c.p+"static/media/skip.b1792439.svg"},1827:function(e,t,c){"use strict";c.d(t,"a",(function(){return x}));var n=c(0),a=c(2),i=c(10),s=c(5),r=c(139),o=c(228),l=c(71),d=c.n(l),u=c(150),h=c(1623),b=c(33),j=c(595),f=c(19),p=c(40),O=(c(1828),c(423)),v=c(3);function x(e){var t=e.wallet,c=e.alert,l=Object(s.useState)(0),x=Object(i.a)(l,2),m=x[0],k=x[1],g=Object(s.useState)(!1),y=Object(i.a)(g,2),N=y[0],C=y[1],w=Object(s.useState)(!1),I=Object(i.a)(w,2),E=I[0],S=I[1],F=Object(s.useState)(!1),T=Object(i.a)(F,2),D=T[0],P=T[1],B=Object(s.useState)(!1),_=Object(i.a)(B,2),R=_[0],L=_[1],A=Object(s.useState)(),H=Object(i.a)(A,2),q=H[0],M=H[1],U=Object(s.useState)(),X=Object(i.a)(U,2),V=X[0],z=X[1],Y=Object(s.useState)(),G=Object(i.a)(Y,2),W=G[0],Q=G[1],Z=Object(s.useState)(),J=Object(i.a)(Z,2),K=J[0],$=J[1],ee=Object(s.useState)("REMOVE LIQUIDITY"),te=Object(i.a)(ee,2),ce=te[0],ne=te[1],ae=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var c,a,i;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.request("getLiquidityInfo",[t.detail.chainId,"0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",t.detail.account,0]);case 2:c=e.sent,a=c.shares?Object(f.bg)(c.shares):Object(f.bg)(0),i=a.isNaN()?Object(f.bg)(0):a.multipliedBy(c.shareValue),M(a.toString()),z(i.toFixed(4));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var c,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.request("getLiquidityInfo",[t.detail.chainId,"0x1eF92eDA3CFeefb8Dae0DB4507f860d3b73f29BA",t.detail.account,"DERI"]);case 2:c=e.sent,console.log("getLiquidityInfo",c),a=c.shares?Object(f.bg)(c.shares):Object(f.bg)(0),$(a.toString());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.request("getBTokenBalance",[t.detail.chainId,"0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",t.detail.account,0]);case 2:c=e.sent,console.log("getBTokenBalance",c),Q(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var a,i,s,o;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),0!==m){e.next=21;break}return i=[t.detail.chainId,"0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",t.detail.account,q,void 0,!0],e.next=5,p.a.request("removeLiquidity",i,{includeResponse:!0,write:!0,subject:"REMOVE LIQUIDITY"});case 5:if(a=e.sent,se(),C(!1),a&&a.success){e.next=15;break}if(""!==a.response.transactionHash){e.next=11;break}return e.abrupt("return",!1);case 11:return c.error("Transaction Failed  : ".concat(a.response.error),{timeout:3e5,isTransaction:!0,transactionHash:a.response.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(a.response.transactionHash),title:"Remove Liquidity Failed"}),e.abrupt("return",!1);case 15:k(m+1),S(!0),c.success("Remove DERI Liquidity",{timeout:8e3,isTransaction:!0,transactionHash:a.response.data.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(a.response.data.transactionHash),title:"Remove Liquidity Executed"});case 18:return e.abrupt("return",!0);case 21:if(1!==m){e.next=39;break}return s=[t.detail.chainId,"0x1eF92eDA3CFeefb8Dae0DB4507f860d3b73f29BA",t.detail.account,"DERI"],e.next=25,p.a.request("unlock",s,{write:!0,subject:"APPROVE"});case 25:if(a=e.sent,C(!1),!a){e.next=37;break}if(!a.status){e.next=34;break}k(m+1),P(!0),c.success("Approve DERI",{timeout:8e3,isTransaction:!0,transactionHash:a.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(a.transactionHash),title:"Approve Executed"}),e.next=37;break;case 34:if(""!==a.transactionHash){e.next=36;break}return e.abrupt("return",!1);case 36:c.error("Transaction Failed ".concat(a.error),{timeout:3e5,isTransaction:!0,transactionHash:a.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(a.transactionHash),title:"Approve Failed"});case 37:e.next=58;break;case 39:if(2!==m){e.next=58;break}return o=[t.detail.chainId,"0x1eF92eDA3CFeefb8Dae0DB4507f860d3b73f29BA",t.detail.account,W,"DERI"],e.next=43,p.a.request("addLiquidity",o,{includeResponse:!0,write:!0,subject:"ADD LIQUIDITY"});case 43:if(a=e.sent,C(!1),se(),ie(),a&&a.success){e.next=54;break}if(""!==a.response.transactionHash){e.next=50;break}return e.abrupt("return",!1);case 50:return c.error("Transaction Failed  : ".concat(a.response.error),{timeout:3e5,isTransaction:!0,transactionHash:a.response.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(a.response.transactionHash),title:"Add Liquidity Failed"}),e.abrupt("return",!1);case 54:L(!0),Object(r.a)("LiquidityGuidance"),c.success("Add DERI Liquidity",{timeout:8e3,isTransaction:!0,transactionHash:a.response.data.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(a.response.data.transactionHash),title:"Add Liquidity Executed"});case 57:return e.abrupt("return",!0);case 58:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){t.isConnected()&&(ae(),se())}),[t]),Object(s.useEffect)((function(){1===m?ne("APPROVE"):2===m&&ne("ADD LIQUIDITY")}),[m]),Object(v.jsxs)("div",{className:"guidance-modal",children:[Object(v.jsxs)("div",{className:"title-close",children:[Object(v.jsx)("div",{className:"title-text",children:"Migrate Liquidity"}),Object(v.jsx)("div",{className:"close",children:Object(v.jsx)("img",{src:o.default,alt:"",onClick:function(){return Object(r.a)("LiquidityGuidance")}})})]}),Object(v.jsxs)("div",{className:"step-box",children:[Object(v.jsxs)("div",{className:d()("remove",{pending:0===m&&N,success:0!==m&&E}),children:[0===m&&N&&Object(v.jsx)(O.a,{borderColor:"rgba(89, 174, 153, 0.5)",bgColor:"rgba(89, 174, 153, 0.3)"}),0!==m&&E&&Object(v.jsx)(b.a,{token:"Guidance-success"}),"REMOVE"]}),Object(v.jsx)("div",{className:d()("hr",{"hr-success":0!==m&&E})}),Object(v.jsxs)("div",{className:d()("approve",{pending:1===m&&N,success:2===m&&D}),children:[1===m&&N&&Object(v.jsx)(O.a,{borderColor:"rgba(89, 174, 153, 0.5)",bgColor:"rgba(89, 174, 153, 0.3)"}),2===m&&D&&Object(v.jsx)(b.a,{token:"Guidance-success"}),"APPROVE"]}),Object(v.jsx)("div",{className:d()("hr",{"hr-success":2===m&&D})}),Object(v.jsxs)("div",{className:d()("add",{pending:2===m&&N,success:R}),children:[2===m&&N&&Object(v.jsx)(O.a,{borderColor:"rgba(89, 174, 153, 0.5)",bgColor:"rgba(89, 174, 153, 0.3)"}),R&&Object(v.jsx)(b.a,{token:"Guidance-success"}),"ADD"]})]}),Object(v.jsxs)("div",{className:"guidance-info",children:[Object(v.jsxs)("div",{className:"now-step",children:[0===m&&" Step 1: remove liquidity from the retired Future Inno Pool",1===m&&" Step 2: approve DERI to the new Inno Pool",2===m&&" Step 3: add DERI to the new Inno Pool"]}),0===m&&Object(v.jsxs)("div",{className:"pool-type",children:[Object(v.jsx)("div",{className:"pool-title",children:"Pool"}),Object(v.jsx)("div",{className:"pool-type-text",children:" Future Inno"})]}),Object(v.jsxs)("div",{className:"balance-box",children:[Object(v.jsx)("div",{className:"balance-title",children:"Your Staked Balance"}),Object(v.jsxs)("div",{className:"balance-num",children:[0===m&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(j.a,{value:q,decimalScale:2})," shares (",Object(v.jsx)(j.a,{value:V})," DERI)"]}),0!==m&&Object(v.jsx)(j.a,{value:R?K:W,suffix:" DERI"})]})]}),Object(v.jsxs)("div",{className:"operate-box",children:[Object(v.jsx)("div",{className:"input-box",children:Object(v.jsx)(h.a,{inputWidth:"332px",disabled:0===m,decimal:18,unit:0===m?"SHARES":"DERI",value:0===m?q:W,onChange:function(e){return Q(e)}})}),Object(v.jsx)(u.a,{width:"332",disabled:2===m&&!(+W>0),label:ce,onClick:re,fontSize:"18"})]})]})]})}},1828:function(e,t,c){},2328:function(e,t,c){},2713:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(24),i=c(2),s=c(10),r=c(5),o=c(59),l=c(150),d=c(231),u=c(176),h=c(40),b=c(21),j=c(317),f=c.p+"static/media/oldDeri.d9dd2f9f.svg",p=(c(1742),c(3));function O(e){var t=e.lang,c=e.getLang,a=e.poolShow,o=void 0===a||a,O=e.wallet,v=void 0===O?{}:O,x=Object(u.c)(),m=Object(r.useState)({}),k=Object(s.a)(m,2),g=k[0],y=k[1],N=Object(r.useState)(!1),C=Object(s.a)(N,2),w=C[0],I=C[1],E=Object(r.useState)(""),S=Object(s.a)(E,2),F=(S[0],S[1],Object(r.useState)(!1)),T=Object(s.a)(F,2),D=T[0],P=T[1],B=Object(d.a)(g.chainId),_=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){var t,c,a,i,s,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.isConnected()){e.next=10;break}return e.next=3,h.a.request("getUserInfoAll",[v.detail.account]);case 3:t=e.sent,c=(+t.total).toFixed(2),a=t.valid?(+t.amount).toFixed(2):0,i=t.lp,s=(+t.trade).toFixed(2),r=t.chainId,y({claimed:c,unclaimed:a,harvestDeriLp:i,harvestDeriTrade:s,chainId:r});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.isConnected()){e.next=5;break}return e.next=3,h.a.request("getUserLastClaimInfo",[v.detail.account]);case 3:(t=e.sent)&&P(!t.claimed);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==B.name){e.next=3;break}return x.error("".concat(t["wrong-network"])),e.abrupt("return");case 3:if(Object(b.k)(v.detail.chainId,g.chainId)){e.next=6;break}return x.error("".concat(t["your-deri-is-on"]," ").concat(B.name," ").concat(t["connect-to"]," ").concat(B.name," ").concat(t["to-claim"])),e.abrupt("return");case 6:if(0!==+g.unclaimed){e.next=9;break}return x.error(t["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return x.error(t["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,h.a.request("mintDToken",[v.detail.chainId,v.detail.account],{includeResponse:!0,write:!0,subject:t["claim-deri-title"],title:{text:"Claim Deri",icon:"DERI"},content:{success:t["claim-deri-reward"],error:t["transaction-failed"]}});case 15:e.sent;case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.isConnected()){e.next=7;break}return e.next=3,L();case 3:e.sent&&I(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,v.connect();case 10:return t=e.sent,e.abrupt("return",!!t);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=window.setInterval((function(){_(),R()}),18e4);return _(),function(){return clearInterval(e)}}),[v.detail.account]),Object(p.jsx)("div",{className:"mining-claim",children:Object(p.jsxs)("div",{className:"mining-claim-info",children:[Object(p.jsxs)("div",{className:"deri-num-slider",children:[Object(p.jsxs)("div",{className:"deri-claim-time",children:[t["old-deri-farms"],Object(p.jsx)(j.a,{tip:t["old-deri-farms-tip"],multiline:!0,children:Object(p.jsx)("span",{children:Object(p.jsx)("img",{src:f})})})]}),Object(p.jsx)("div",{className:"deri-claim-text",children:c("old-pool-deri",{num:w?0:g.unclaimed&&D?g.unclaimed:0})})]}),o&&Object(p.jsx)("div",{className:"cliam-button",children:Object(p.jsx)(l.a,{icon:"ClaimDeri",fontWeight:"bold",disabled:0===+g.unclaimed||!D,label:t["claim-all"],onClick:A})})]})})}var v,x=c(63),m=c(409),k=(c(197),c(62)),g=c(71),y=c.n(g),N=k.a.div(v||(v=Object(x.a)(["\ncursor:pointer;\nfont-weight: 600;\n.dropdown-menu{\n  display:none\n}\n.dropdown-menu.show{\n  margin-top:8px;\n  background: #203B60;\n  display:block;\n  border-radius:4px;\n  z-index:8;\n  position:relative;\n  .dropdown-item{\n    padding:0 24px;\n  }\n}\n.btn{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  color:#FFFFFF;\n\n}\n.dropdown-item:hover{\n  color:#FFFFFF\n}\n"])));function C(e){var t=e.selectList,c=void 0===t?[]:t,n=e.onChange,a=Object(r.useState)(!1),i=Object(s.a)(a,2),o=i[0],l=i[1],d=Object(r.useState)(c[0].text),u=Object(s.a)(d,2),h=u[0],b=u[1],j=y()("dropdown-menu",{show:o});return Object(p.jsxs)(N,{children:[Object(p.jsxs)("div",{onClick:function(){l(!o)},className:"btn checked",children:[h,Object(p.jsx)("img",{src:m.default,alt:""})]}),Object(p.jsx)("div",{className:j,children:c.map((function(e,t){return Object(p.jsx)("div",{className:"dropdown-item",onClick:function(){!function(e){b(e.text),n(e.index),l(!1)}(e)},children:e.text},t)}))})]})}var w=c(1743),I=c(1703),E=c(600),S=(c(602),c(601)),F=c(599),T=c(603),D=c(1982),P=(c(2328),c.p+"static/media/filter-close.80f134f0.svg");function B(e){var t=e.lang,c=(e.isShowFilter,e.checkedStaked),n=e.setCheckedStaked,a=e.setIsShowFilter,i=e.curTabPool,s=e.checkedPolygon,r=e.checkedETH,o=(e.checkedOption,e.checkedFutureMain,e.checkedFutureInno,e.checkedBSC),l=e.checkedArb,d=(e.setCheckedOption,e.setCheckedFutureMain,e.setCheckedFutureInno,e.setCheckedPolygon,e.setCheckedBSC),u=e.setCheckedArb,h=e.setCheckedETH,b=e.clearFilter,j=e.setCheckedZkSync;e.checkedZkSync;return Object(p.jsxs)("div",{className:"filter-modal",children:[Object(p.jsx)("div",{className:"close-filter-modal",children:Object(p.jsx)("span",{className:"close-icon",onClick:function(){a()},children:Object(p.jsx)("img",{alt:"",src:P})})}),Object(p.jsxs)("div",{className:"staked-only",children:[Object(p.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(p.jsx)("div",{children:Object(p.jsx)(w.a,{className:"l-toggle",checked:c,onClick:function(e){n(e)}})})]}),Object(p.jsx)("div",{className:"select-pool-type-network",children:Object(p.jsxs)("div",{className:"network",children:[Object(p.jsx)("div",{className:"type-cols",children:t.network}),Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[Object(p.jsx)("img",{alt:"",src:E.default})," BNB Chain"]}),Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{checked:o,className:"l-checkbox",onChange:function(e){d(e)}})})]}),"deri"!==i&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[" ",Object(p.jsx)("img",{alt:"",src:S.default})," Arbitrum"]}),Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{checked:l,className:"l-checkbox",onChange:function(e){u(e)}})})]}),Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[Object(p.jsx)("img",{alt:"",src:T.default})," zkSync Era"]}),Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{checked:s,className:"l-checkbox",onChange:function(e){j(e)}})})]})]}),"deri"===i&&Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[Object(p.jsx)("img",{alt:"",src:F.default})," Ethereum"]}),Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{checked:r,className:"l-checkbox",onChange:function(e){h(e)}})})]})]})}),Object(p.jsx)("div",{className:"select-footer",children:Object(p.jsx)("div",{className:"clear-all-filter",onClick:function(){b()},children:t["clear-all-filter"]})})]})}var _=c.p+"static/media/filter.c289b063.svg",R=(c(1983),c(33));c(267),c(1826),c(19),c(139),c(228),c(610),c(34),c(1827);t.default=Object(o.b)("wallet","poolManager")(Object(o.c)((function(e){var t=e.lang,c=e.getLang,o=e.wallet,l=void 0===o?{}:o,d=e.poolManager,u=Object(r.useState)("amm"),j=Object(s.a)(u,2),f=j[0],v=j[1],x=Object(r.useState)(!1),k=Object(s.a)(x,2),g=k[0],y=k[1],N=Object(r.useState)(t["deri-pool-title"]),P=Object(s.a)(N,2),L=P[0],A=P[1],H=Object(r.useState)([]),q=Object(s.a)(H,2),M=q[0],U=q[1],X=Object(r.useState)(!1),V=Object(s.a)(X,2),z=V[0],Y=V[1],G=Object(r.useState)(!1),W=Object(s.a)(G,2),Q=W[0],Z=W[1],J=Object(r.useState)(!1),K=Object(s.a)(J,2),$=K[0],ee=K[1],te=Object(r.useState)(!1),ce=Object(s.a)(te,2),ne=ce[0],ae=ce[1],ie=Object(r.useState)(!1),se=Object(s.a)(ie,2),re=se[0],oe=se[1],le=Object(r.useState)(!1),de=Object(s.a)(le,2),ue=de[0],he=de[1],be=Object(r.useState)(!1),je=Object(s.a)(be,2),fe=je[0],pe=je[1],Oe=Object(r.useState)(!1),ve=Object(s.a)(Oe,2),xe=ve[0],me=ve[1],ke=Object(r.useState)(!1),ge=Object(s.a)(ke,2),ye=ge[0],Ne=ge[1],Ce=Object(r.useState)(!1),we=Object(s.a)(Ce,2),Ie=we[0],Ee=we[1],Se=Object(r.useState)([]),Fe=Object(s.a)(Se,2),Te=Fe[0],De=Fe[1],Pe=Object(r.useState)([]),Be=Object(s.a)(Pe,2),_e=Be[0],Re=Be[1],Le=Object(r.useState)(!1),Ae=Object(s.a)(Le,2),He=(Ae[0],Ae[1]),qe=[{text:t["deri-pool-title"],index:"official"}],Me=function(e){"official"===e?(U(d.ammPools),y(!1)):"open"===e&&(U([]),Ve(),y(!0))},Ue=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){var t,c,s,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(a.a)(d.ammPools),Object(a.a)(d.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(i.a)(Object(n.a)().mark((function e(t){var c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[t.chainId,t.address,l.detail.account],e.next=3,h.a.request("getUserStakeInfo",c);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:c=(c=e.sent).filter((function(e){return e})),s=c.filter((function(e){return"lp"!==e.type})),r=c.filter((function(e){return"lp"===e.type})),De(s),Re(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Xe=function(){Y(!1),ee(!1),ae(!1),me(!1),oe(!1),Ne(!1),he(!1),pe(!1)};Object(r.useEffect)((function(){l.isConnected()&&Ue()}),[l.detail,d,f]),Object(r.useEffect)((function(){var e=[],t="amm"===f?d.ammPools:d.lpShowPools;if(z){var c=t.filter((function(e){return"option"===e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(c))}if($){var n=t.filter((function(e){return("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(n))}if(ne){var i=t.filter((function(e){return"v2_lite"===e.version||"v3_lite"===e.version}));e=[].concat(Object(a.a)(e),Object(a.a)(i))}if(re){if(z){var s=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&"option"===e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(s))}if($){var r=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(r))}if(ne){var o=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(a.a)(e),Object(a.a)(o))}if(!z&&!$&&!ne){var l=t.filter((function(e){return 56===+e.chainId||97===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(l))}}if(ue){if(z){var u=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId||421613===+e.chainId)&&"option"===e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(u))}if($){var h=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId||421613===+e.chainId)&&"v3"===e.version&&"option"!==e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(h))}if(ne){var b=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId||421613===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(a.a)(e),Object(a.a)(b))}if(!z&&!$&&!ne){var j=t.filter((function(e){return 42161===+e.chainId||421611===+e.chainId||421613===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(j))}}if(xe){if(z){var p=t.filter((function(e){return 137===+e.chainId&&"option"===e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(p))}if($){var O=t.filter((function(e){return 137===+e.chainId&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(O))}if(ne){var v=t.filter((function(e){return 137===+e.chainId&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(a.a)(e),Object(a.a)(v))}if(!z&&!$&&!ne){var x=t.filter((function(e){return 137===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(x))}}if(fe){if(z){var m=t.filter((function(e){return 324===+e.chainId&&"option"===e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(m))}if($){var k=t.filter((function(e){return 324===+e.chainId&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(k))}if(ne){var g=t.filter((function(e){return 324===+e.chainId&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(a.a)(e),Object(a.a)(g))}if(!z&&!$&&!ne){var y=t.filter((function(e){return 324===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(y))}}if(re&&xe&&ue&&fe){e=[];var N=t.filter((function(e){return 137===+e.chainId||56===+e.chainId||42161===+e.chainId||324===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(N))}if(ye){var C=t.filter((function(e){return 1===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(C))}z||$||ne||re||xe||ye||ue||fe||(e=t),U(e)}),[z,$,ne,re,fe,xe,ye,ue]);var Ve=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.loadOpen();case 2:U(d.openPools);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){A(g?t["open-pool-title"]:t["deri-pool-title"])}),[g]),Object(r.useEffect)((function(){d.load()}),[]),Object(r.useEffect)((function(){"amm"===f?g||(U([]),U(Ie?Te:d.ammPools)):"deri"===f&&(U([]),U(Ie?_e:d.lpShowPools))}),[f,Ie]),Object(r.useEffect)((function(){U(d.ammPools)}),[d.pools]),Object(r.useEffect)((function(){l.isConnected()&&("true"===Object(b.t)("poolClaim")?He(!1):M&&He(!0))}),[l,M,l.detail]),Object(p.jsx)("div",{className:"pool-box",children:Object(p.jsxs)("div",{className:"pool-info",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("div",{className:"left-header-info",children:Object(p.jsxs)("div",{className:"pool-title",children:[Object(p.jsx)("div",{className:"pool-title-text",children:L}),Object(p.jsx)("div",{className:"pool-title-select-text",children:!g&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"pool-test-des",children:t["pool-title-des"]})})}),Object(p.jsx)("div",{className:"select-pool-ves",children:Object(p.jsx)(C,{selectList:qe,onChange:Me})}),Object(p.jsx)("div",{className:"simple-select-ves",children:Object(p.jsx)("img",{alt:"",src:m.default})})]})}),Object(p.jsxs)("div",{className:"pool-card-claim-bg",children:[!g&&Object(p.jsx)("div",{className:"pool-tab",children:Object(p.jsxs)("div",{className:"pool-tab-info",children:[Object(p.jsxs)("div",{className:"tab-mining",children:[Object(p.jsx)("div",{className:"amm"===f?"pool-active":"pool-unactive",onClick:function(){v("amm")},children:t["amm-liquidity-mining"]}),Object(p.jsx)("div",{className:"deri"===f?"pool-active":"pool-unactive",onClick:function(){v("deri")},children:t["deri-liquidity-mining"]})]}),Object(p.jsxs)("div",{className:"simple-tab-mining",children:[Object(p.jsx)("div",{className:"amm"===f?"pool-active":"pool-unactive",onClick:function(){v("amm")},children:t.amm}),Object(p.jsx)("div",{className:"deri"===f?"pool-active":"pool-unactive",onClick:function(){v("deri")},children:t["type-deri"]})]}),Object(p.jsxs)("div",{className:"filter",children:[Object(p.jsx)("img",{alt:"",src:_,className:"filter-img",onClick:function(){Z(!Q)}}),Q&&Object(p.jsx)(B,{curTabPool:f,lang:t,isShowFilter:Q,checkedStaked:Ie,setCheckedStaked:Ee,setIsShowFilter:Z,setCheckedOption:Y,setCheckedFutureMain:ee,setCheckedFutureInno:ae,setCheckedPolygon:me,setCheckedBSC:oe,setCheckedArb:he,setCheckedETH:Ne,setCheckedZkSync:pe,clearFilter:Xe,checkedPolygon:xe,checkedETH:ye,checkedOption:z,checkedFutureMain:$,checkedFutureInno:ne,checkedBSC:re,checkedArb:ue,checkedZkSync:fe})]})]})}),Object(p.jsx)("div",{className:"pool-card",children:M.map((function(e,c){return Object(p.jsx)(D.a,{wallet:l,lang:t,pool:e},c)}))}),!g&&Object(p.jsx)(O,{lang:t,wallet:l,getLang:c}),Object(p.jsx)("div",{className:!0})]})]}),Object(p.jsx)("div",{className:"right",children:Object(p.jsxs)("div",{className:"right-info",children:[Object(p.jsxs)("div",{className:"select-pool-ves-staked",children:[Object(p.jsx)("div",{className:"select-pool-ves",children:Object(p.jsx)(C,{selectList:qe,onChange:Me})}),!g&&Object(p.jsxs)("div",{className:"staked-only",children:[Object(p.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(p.jsx)("div",{children:Object(p.jsx)(w.a,{className:"l-toggle",checked:Ie,onClick:function(e){Ee(e)}})})]})]}),!g&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"select-pool-type-network",children:Object(p.jsxs)("div",{className:"network",children:[Object(p.jsx)("div",{className:"type-cols",children:t.network}),Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[" ",Object(p.jsx)("img",{alt:"",src:E.default})," BNB Chain"]}),Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{checked:re,className:"l-checkbox",onChange:function(e){oe(e)}})})]}),"deri"!==f&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[" ",Object(p.jsx)("img",{alt:"",src:S.default})," Arbitrum"]}),Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{checked:ue,className:"l-checkbox",onChange:function(e){he(e)}})})]}),Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[" ",Object(p.jsx)("img",{alt:"",src:T.default})," zkSync Era"]}),Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{checked:fe,className:"l-checkbox",onChange:function(e){pe(e)}})})]})]}),"deri"===f&&Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[Object(p.jsx)("img",{alt:"",src:F.default})," Ethereum"]}),Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{checked:ye,className:"l-checkbox",onChange:function(e){Ne(e)}})})]})]})}),Object(p.jsxs)("div",{className:"select-footer",children:[Object(p.jsx)("div",{className:"clear-all-filter",onClick:Xe,children:t["clear-all-filter"]}),Object(p.jsx)("div",{className:"deri-logo",children:Object(p.jsx)(R.a,{token:"pool-deri-logo",width:"72",height:"84"})})]})]})]})})]})})})))}}]);
//# sourceMappingURL=20.b4004bcc.chunk.js.map