(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[23],{110:function(e,t,r){"use strict";r.r(t);var n=r(1574);r.d(t,"formatBytes32String",(function(){return n.a})),r.d(t,"parseBytes32String",(function(){return n.b}));var a=r(1576);r.d(t,"nameprep",(function(){return a.a}));var c=r(81);r.d(t,"_toEscapedUtf8String",(function(){return c.d})),r.d(t,"toUtf8Bytes",(function(){return c.f})),r.d(t,"toUtf8CodePoints",(function(){return c.g})),r.d(t,"toUtf8String",(function(){return c.h})),r.d(t,"Utf8ErrorFuncs",(function(){return c.b})),r.d(t,"Utf8ErrorReason",(function(){return c.c})),r.d(t,"UnicodeNormalizationForm",(function(){return c.a}))},1863:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.formatBytes32String=t.Utf8ErrorFuncs=t.toUtf8String=t.toUtf8CodePoints=t.toUtf8Bytes=t._toEscapedUtf8String=t.nameprep=t.hexDataSlice=t.hexDataLength=t.hexZeroPad=t.hexValue=t.hexStripZeros=t.hexConcat=t.isHexString=t.hexlify=t.base64=t.base58=t.TransactionDescription=t.LogDescription=t.Interface=t.SigningKey=t.HDNode=t.defaultPath=t.isBytesLike=t.isBytes=t.zeroPad=t.stripZeros=t.concat=t.arrayify=t.shallowCopy=t.resolveProperties=t.getStatic=t.defineReadOnly=t.deepCopy=t.checkProperties=t.poll=t.fetchJson=t._fetchData=t.RLP=t.Logger=t.checkResultErrors=t.FormatTypes=t.ParamType=t.FunctionFragment=t.EventFragment=t.ErrorFragment=t.ConstructorFragment=t.Fragment=t.defaultAbiCoder=t.AbiCoder=void 0,t.Indexed=t.Utf8ErrorReason=t.UnicodeNormalizationForm=t.SupportedAlgorithm=t.mnemonicToSeed=t.isValidMnemonic=t.entropyToMnemonic=t.mnemonicToEntropy=t.getAccountPath=t.verifyTypedData=t.verifyMessage=t.recoverPublicKey=t.computePublicKey=t.recoverAddress=t.computeAddress=t.getJsonWalletAddress=t.TransactionTypes=t.serializeTransaction=t.parseTransaction=t.accessListify=t.joinSignature=t.splitSignature=t.soliditySha256=t.solidityKeccak256=t.solidityPack=t.shuffled=t.randomBytes=t.sha512=t.sha256=t.ripemd160=t.keccak256=t.computeHmac=t.commify=t.parseUnits=t.formatUnits=t.parseEther=t.formatEther=t.isAddress=t.getCreate2Address=t.getContractAddress=t.getIcapAddress=t.getAddress=t._TypedDataEncoder=t.id=t.isValidName=t.namehash=t.hashMessage=t.dnsEncode=t.parseBytes32String=void 0;var i=r(198);Object.defineProperty(t,"AbiCoder",{enumerable:!0,get:function(){return i.AbiCoder}}),Object.defineProperty(t,"checkResultErrors",{enumerable:!0,get:function(){return i.checkResultErrors}}),Object.defineProperty(t,"ConstructorFragment",{enumerable:!0,get:function(){return i.ConstructorFragment}}),Object.defineProperty(t,"defaultAbiCoder",{enumerable:!0,get:function(){return i.defaultAbiCoder}}),Object.defineProperty(t,"ErrorFragment",{enumerable:!0,get:function(){return i.ErrorFragment}}),Object.defineProperty(t,"EventFragment",{enumerable:!0,get:function(){return i.EventFragment}}),Object.defineProperty(t,"FormatTypes",{enumerable:!0,get:function(){return i.FormatTypes}}),Object.defineProperty(t,"Fragment",{enumerable:!0,get:function(){return i.Fragment}}),Object.defineProperty(t,"FunctionFragment",{enumerable:!0,get:function(){return i.FunctionFragment}}),Object.defineProperty(t,"Indexed",{enumerable:!0,get:function(){return i.Indexed}}),Object.defineProperty(t,"Interface",{enumerable:!0,get:function(){return i.Interface}}),Object.defineProperty(t,"LogDescription",{enumerable:!0,get:function(){return i.LogDescription}}),Object.defineProperty(t,"ParamType",{enumerable:!0,get:function(){return i.ParamType}}),Object.defineProperty(t,"TransactionDescription",{enumerable:!0,get:function(){return i.TransactionDescription}});var o=r(45);Object.defineProperty(t,"getAddress",{enumerable:!0,get:function(){return o.getAddress}}),Object.defineProperty(t,"getCreate2Address",{enumerable:!0,get:function(){return o.getCreate2Address}}),Object.defineProperty(t,"getContractAddress",{enumerable:!0,get:function(){return o.getContractAddress}}),Object.defineProperty(t,"getIcapAddress",{enumerable:!0,get:function(){return o.getIcapAddress}}),Object.defineProperty(t,"isAddress",{enumerable:!0,get:function(){return o.isAddress}});var s=c(r(233));t.base64=s;var d=r(159);Object.defineProperty(t,"base58",{enumerable:!0,get:function(){return d.Base58}});var l=r(9);Object.defineProperty(t,"arrayify",{enumerable:!0,get:function(){return l.arrayify}}),Object.defineProperty(t,"concat",{enumerable:!0,get:function(){return l.concat}}),Object.defineProperty(t,"hexConcat",{enumerable:!0,get:function(){return l.hexConcat}}),Object.defineProperty(t,"hexDataSlice",{enumerable:!0,get:function(){return l.hexDataSlice}}),Object.defineProperty(t,"hexDataLength",{enumerable:!0,get:function(){return l.hexDataLength}}),Object.defineProperty(t,"hexlify",{enumerable:!0,get:function(){return l.hexlify}}),Object.defineProperty(t,"hexStripZeros",{enumerable:!0,get:function(){return l.hexStripZeros}}),Object.defineProperty(t,"hexValue",{enumerable:!0,get:function(){return l.hexValue}}),Object.defineProperty(t,"hexZeroPad",{enumerable:!0,get:function(){return l.hexZeroPad}}),Object.defineProperty(t,"isBytes",{enumerable:!0,get:function(){return l.isBytes}}),Object.defineProperty(t,"isBytesLike",{enumerable:!0,get:function(){return l.isBytesLike}}),Object.defineProperty(t,"isHexString",{enumerable:!0,get:function(){return l.isHexString}}),Object.defineProperty(t,"joinSignature",{enumerable:!0,get:function(){return l.joinSignature}}),Object.defineProperty(t,"zeroPad",{enumerable:!0,get:function(){return l.zeroPad}}),Object.defineProperty(t,"splitSignature",{enumerable:!0,get:function(){return l.splitSignature}}),Object.defineProperty(t,"stripZeros",{enumerable:!0,get:function(){return l.stripZeros}});var u=r(232);Object.defineProperty(t,"_TypedDataEncoder",{enumerable:!0,get:function(){return u._TypedDataEncoder}}),Object.defineProperty(t,"dnsEncode",{enumerable:!0,get:function(){return u.dnsEncode}}),Object.defineProperty(t,"hashMessage",{enumerable:!0,get:function(){return u.hashMessage}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return u.id}}),Object.defineProperty(t,"isValidName",{enumerable:!0,get:function(){return u.isValidName}}),Object.defineProperty(t,"namehash",{enumerable:!0,get:function(){return u.namehash}});var b=r(78);Object.defineProperty(t,"defaultPath",{enumerable:!0,get:function(){return b.defaultPath}}),Object.defineProperty(t,"entropyToMnemonic",{enumerable:!0,get:function(){return b.entropyToMnemonic}}),Object.defineProperty(t,"getAccountPath",{enumerable:!0,get:function(){return b.getAccountPath}}),Object.defineProperty(t,"HDNode",{enumerable:!0,get:function(){return b.HDNode}}),Object.defineProperty(t,"isValidMnemonic",{enumerable:!0,get:function(){return b.isValidMnemonic}}),Object.defineProperty(t,"mnemonicToEntropy",{enumerable:!0,get:function(){return b.mnemonicToEntropy}}),Object.defineProperty(t,"mnemonicToSeed",{enumerable:!0,get:function(){return b.mnemonicToSeed}});var f=r(293);Object.defineProperty(t,"getJsonWalletAddress",{enumerable:!0,get:function(){return f.getJsonWalletAddress}});var j=r(42);Object.defineProperty(t,"keccak256",{enumerable:!0,get:function(){return j.keccak256}});var m=r(15);Object.defineProperty(t,"Logger",{enumerable:!0,get:function(){return m.Logger}});var p=r(229);Object.defineProperty(t,"computeHmac",{enumerable:!0,get:function(){return p.computeHmac}}),Object.defineProperty(t,"ripemd160",{enumerable:!0,get:function(){return p.ripemd160}}),Object.defineProperty(t,"sha256",{enumerable:!0,get:function(){return p.sha256}}),Object.defineProperty(t,"sha512",{enumerable:!0,get:function(){return p.sha512}});var x=r(268);Object.defineProperty(t,"solidityKeccak256",{enumerable:!0,get:function(){return x.keccak256}}),Object.defineProperty(t,"solidityPack",{enumerable:!0,get:function(){return x.pack}}),Object.defineProperty(t,"soliditySha256",{enumerable:!0,get:function(){return x.sha256}});var O=r(320);Object.defineProperty(t,"randomBytes",{enumerable:!0,get:function(){return O.randomBytes}}),Object.defineProperty(t,"shuffled",{enumerable:!0,get:function(){return O.shuffled}});var h=r(14);Object.defineProperty(t,"checkProperties",{enumerable:!0,get:function(){return h.checkProperties}}),Object.defineProperty(t,"deepCopy",{enumerable:!0,get:function(){return h.deepCopy}}),Object.defineProperty(t,"defineReadOnly",{enumerable:!0,get:function(){return h.defineReadOnly}}),Object.defineProperty(t,"getStatic",{enumerable:!0,get:function(){return h.getStatic}}),Object.defineProperty(t,"resolveProperties",{enumerable:!0,get:function(){return h.resolveProperties}}),Object.defineProperty(t,"shallowCopy",{enumerable:!0,get:function(){return h.shallowCopy}});var g=c(r(116));t.RLP=g;var y=r(103);Object.defineProperty(t,"computePublicKey",{enumerable:!0,get:function(){return y.computePublicKey}}),Object.defineProperty(t,"recoverPublicKey",{enumerable:!0,get:function(){return y.recoverPublicKey}}),Object.defineProperty(t,"SigningKey",{enumerable:!0,get:function(){return y.SigningKey}});var v=r(110);Object.defineProperty(t,"formatBytes32String",{enumerable:!0,get:function(){return v.formatBytes32String}}),Object.defineProperty(t,"nameprep",{enumerable:!0,get:function(){return v.nameprep}}),Object.defineProperty(t,"parseBytes32String",{enumerable:!0,get:function(){return v.parseBytes32String}}),Object.defineProperty(t,"_toEscapedUtf8String",{enumerable:!0,get:function(){return v._toEscapedUtf8String}}),Object.defineProperty(t,"toUtf8Bytes",{enumerable:!0,get:function(){return v.toUtf8Bytes}}),Object.defineProperty(t,"toUtf8CodePoints",{enumerable:!0,get:function(){return v.toUtf8CodePoints}}),Object.defineProperty(t,"toUtf8String",{enumerable:!0,get:function(){return v.toUtf8String}}),Object.defineProperty(t,"Utf8ErrorFuncs",{enumerable:!0,get:function(){return v.Utf8ErrorFuncs}});var k=r(57);Object.defineProperty(t,"accessListify",{enumerable:!0,get:function(){return k.accessListify}}),Object.defineProperty(t,"computeAddress",{enumerable:!0,get:function(){return k.computeAddress}}),Object.defineProperty(t,"parseTransaction",{enumerable:!0,get:function(){return k.parse}}),Object.defineProperty(t,"recoverAddress",{enumerable:!0,get:function(){return k.recoverAddress}}),Object.defineProperty(t,"serializeTransaction",{enumerable:!0,get:function(){return k.serialize}}),Object.defineProperty(t,"TransactionTypes",{enumerable:!0,get:function(){return k.TransactionTypes}});var P=r(199);Object.defineProperty(t,"commify",{enumerable:!0,get:function(){return P.commify}}),Object.defineProperty(t,"formatEther",{enumerable:!0,get:function(){return P.formatEther}}),Object.defineProperty(t,"parseEther",{enumerable:!0,get:function(){return P.parseEther}}),Object.defineProperty(t,"formatUnits",{enumerable:!0,get:function(){return P.formatUnits}}),Object.defineProperty(t,"parseUnits",{enumerable:!0,get:function(){return P.parseUnits}});var N=r(235);Object.defineProperty(t,"verifyMessage",{enumerable:!0,get:function(){return N.verifyMessage}}),Object.defineProperty(t,"verifyTypedData",{enumerable:!0,get:function(){return N.verifyTypedData}});var S=r(82);Object.defineProperty(t,"_fetchData",{enumerable:!0,get:function(){return S._fetchData}}),Object.defineProperty(t,"fetchJson",{enumerable:!0,get:function(){return S.fetchJson}}),Object.defineProperty(t,"poll",{enumerable:!0,get:function(){return S.poll}});var C=r(229);Object.defineProperty(t,"SupportedAlgorithm",{enumerable:!0,get:function(){return C.SupportedAlgorithm}});var w=r(110);Object.defineProperty(t,"UnicodeNormalizationForm",{enumerable:!0,get:function(){return w.UnicodeNormalizationForm}}),Object.defineProperty(t,"Utf8ErrorReason",{enumerable:!0,get:function(){return w.Utf8ErrorReason}})},229:function(e,t,r){"use strict";r.r(t);var n=r(263);r.d(t,"computeHmac",(function(){return n.a})),r.d(t,"ripemd160",(function(){return n.b})),r.d(t,"sha256",(function(){return n.c})),r.d(t,"sha512",(function(){return n.d}));var a=r(414);r.d(t,"SupportedAlgorithm",(function(){return a.a}))},232:function(e,t,r){"use strict";r.r(t);var n=r(191);r.d(t,"id",(function(){return n.a}));var a=r(227);r.d(t,"dnsEncode",(function(){return a.a})),r.d(t,"namehash",(function(){return a.d})),r.d(t,"isValidName",(function(){return a.c}));var c=r(1573);r.d(t,"messagePrefix",(function(){return c.b})),r.d(t,"hashMessage",(function(){return c.a})),r.d(t,"ensNormalize",(function(){return a.b}));var i=r(415);r.d(t,"_TypedDataEncoder",(function(){return i.a}))},2503:function(e,t,r){},2504:function(e,t,r){},2721:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(2),c=r(10),i=r(5),o=r(59),s=r(33),d=(r(2503),r(16)),l=r(21),u=r(226),b=r(30),f=r(90),j=r.n(f),m=r(595),p=r(71),x=r.n(p),O=(r(139),r(1863)),h=(r(2504),r(150)),g=r(61),y=r(3);function v(e){var t=e.closeRegisterModal,r=e.contract,o=e.registerAfter,l=Object(i.useState)(""),u=Object(c.a)(l,2),b=u[0],f=u[1],j=Object(i.useState)(""),m=Object(c.a)(j,2),p=m[0],x=m[1],v=Object(i.useState)(""),k=Object(c.a)(v,2),P=k[0],N=k[1],S=Object(i.useState)(""),C=Object(c.a)(S,2),w=C[0],E=C[1],U=Object(i.useState)(!1),T=Object(c.a)(U,2),F=T[0],R=T[1],A=Object(i.useState)(!0),D=Object(c.a)(A,2),B=D[0],_=D[1],M=Object(i.useState)(!0),I=Object(c.a)(M,2),L=I[0],z=I[1],H=Object(i.useState)(!0),Z=Object(c.a)(H,2),K=Z[0],V=Z[1],J=Object(i.useState)(""),G=Object(c.a)(J,2),W=G[0],Y=G[1],$=Object(i.useState)(""),q=Object(c.a)($,2),Q=q[0],X=q[1],ee={text:"Generate Code",icon:""},te={success:"Generate Code",error:"Transaction Failed"},re=Object(i.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P){e.next=6;break}return e.next=3,r.recruiterAddresses(P);case 3:"0x0000000000000000000000000000000000000000"!==e.sent?(z(!0),X("")):(z(!1),X("Invalid recruiter code")),R(!1);case 6:case"end":return e.stop()}}),e)}))),[P,r]),ne=Object(i.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=6;break}return e.next=3,r.brokerAddresses(w);case 3:"0x0000000000000000000000000000000000000000"===e.sent?(_(!0),Y("")):(_(!1),Y("Code is not available")),R(!1);case 6:case"end":return e.stop()}}),e)}))),[w,r]),ae=Object(i.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){var a,c,i,s;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p||!B){e.next=21;break}return a=b||"DERI",e.prev=2,e.next=5,r.registerBroker(p,a);case 5:c=e.sent,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",!1);case 11:if(!c||!c.hash){e.next=15;break}g.a.emit(d.r,{title:ee,content:te,hash:c.hash}),e.next=16;break;case 15:return e.abrupt("return",!1);case 16:return e.next=18,c.wait();case 18:i=e.sent,console.log("receipt",i),i&&(console.log("receipt",i),i&&i.transactionHash&&(s=i.transactionHash,i.status?(o(),t(),g.a.emit(d.s,{title:ee,content:te,context:{success:!0,hash:s,error:"error"}})):g.a.emit(d.s,{title:ee,content:te,context:{success:(!1).success,hash:s,error:"error"}})));case 21:case"end":return e.stop()}}),e,null,[[2,8]])}))),[b,p,r]);return Object(i.useEffect)((function(){w&&(R(!0),ne())}),[w]),Object(i.useEffect)((function(){P&&(R(!0),re())}),[P]),Object(i.useEffect)((function(){V(!(B&&!F&&p&&L))}),[B,F,p,b]),Object(y.jsxs)("div",{className:"register-modal-box",children:[Object(y.jsxs)("div",{className:"register-modal-header",children:["Generate Code",Object(y.jsx)(s.a,{token:"close-modal-icon",onClick:function(){return t()}})]}),Object(y.jsxs)("div",{className:"register-modal-info",children:[Object(y.jsx)("div",{children:Object(y.jsx)("input",{placeholder:"Enter a code",value:p,onChange:function(e){var t=e.target.value;if(t){var r=/^[a-zA-Z0-9_]+$/.test(t);if(console.log(r),!r)return!1;var n=Object(O.toUtf8Bytes)(t),a=Object(O.keccak256)(n);E(a)}console.log(t),x(t)}})}),Object(y.jsx)("div",{className:"register-title",children:"Broker Recruiter Code (Required)"}),Object(y.jsx)("div",{children:Object(y.jsx)("input",{placeholder:"DERI",value:b,onChange:function(e){var t=e.target.value;if(console.log(t),t){var r=/^[a-zA-Z0-9_]+$/.test(t);if(console.log(r),!r)return!1;var n=Object(O.toUtf8Bytes)(t),a=Object(O.keccak256)(n);N(a)}else z(!0),X("");f(t)}})}),Object(y.jsxs)("div",{className:"confirm-btn",children:[Object(y.jsxs)("div",{className:"noLegitimateText",children:[W||Q?Object(y.jsx)(s.a,{token:"code-error"}):null,"  ",W||Q]}),Object(y.jsx)(h.a,{width:"100%",disabled:K,height:48,fontSize:16,label:F?"Checking...":"CONFIRM",onClick:ae})]})]})]})}var k=r(262),P=r(424),N=r(270),S=r(321);t.default=Object(o.b)("wallet","intl")(Object(o.c)((function(e){var t=e.wallet,r=e.intl,o=Object(k.a)(r.dict,"header"),f=Object(i.useState)("broker"),p=Object(c.a)(f,2),O=p[0],h=p[1],C=Object(i.useState)({}),w=Object(c.a)(C,2),E=w[0],U=w[1],T=Object(i.useState)(""),F=Object(c.a)(T,2),R=F[0],A=F[1],D=Object(i.useState)({}),B=Object(c.a)(D,2),_=B[0],M=B[1],I=Object(i.useState)(0),L=Object(c.a)(I,2),z=L[0],H=L[1],Z=Object(i.useState)(0),K=Object(c.a)(Z,2),V=K[0],J=K[1],G=Object(i.useState)(!1),W=Object(c.a)(G,2),Y=W[0],$=W[1],q=Object(i.useState)(""),Q=Object(c.a)(q,2),X=Q[0],ee=Q[1],te=Object(i.useState)(""),re=Object(c.a)(te,2),ne=re[0],ae=re[1],ce=Object(i.useState)(""),ie=Object(c.a)(ce,2),oe=ie[0],se=ie[1],de=Object(i.useState)(!1),le=Object(c.a)(de,2),ue=le[0],be=le[1],fe=Object(S.a)("root",{preventScroll:!0,closeOnOverlayClick:!1}),je=Object(c.a)(fe,3),me=je[0],pe=je[1],xe=je[2],Oe=Object(i.useRef)(),he={56:"0x9A4f119904C6926EFE76F64BB70E35198a4dFF5f",42161:"0x772Fc767b6ff9841175922dE11DCaF9365091d2C"},ge={56:56,42161:42161},ye=ge[t.detail.chainId]?ge[t.detail.chainId]:42161,ve=he[ye];console.log(ye);var ke=Object(u.a)("RebateImplementation",ye,ve),Pe=42161===ye?"USDC":"BUSD",Ne={text:"Claim Reward",icon:Pe},Se={success:"Claim Reward",error:"Transaction Failed"},Ce=Object(i.useCallback)((function(e){var t="broker"===O?"https://misc.deri.io/?ref=".concat(e,"&chainId=").concat(ye):e;console.log("onCopy",navigator),navigator.clipboard.writeText(t),$(!0),setTimeout((function(){return $(!1)}),5e3)}),[O,ye]),we=Object(i.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){var t,r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(l.a)(V).gt(0)){e.next=2;break}return e.abrupt("return",!1);case 2:if(!ke){e.next=32;break}if(be(!0),e.prev=4,"broker"!==O){e.next=11;break}return e.next=8,ke.claimBrokerRebate();case 8:t=e.sent,e.next=14;break;case 11:return e.next=13,ke.claimRecruiterRebate();case 13:t=e.sent;case 14:e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(4),be(!1),e.abrupt("return",!1);case 20:if(!t||!t.hash){e.next=24;break}g.a.emit(d.r,{title:Ne,content:Se,hash:t.hash}),e.next=26;break;case 24:return be(!1),e.abrupt("return",!1);case 26:return e.next=28,t.wait();case 28:r=e.sent,console.log("receipt",r),r&&(console.log("receipt",r),r&&r.transactionHash&&(a=r.transactionHash,r.status?(Ee(),g.a.emit(d.s,{title:Ne,content:Se,context:{success:!0,hash:a,error:"error"}})):g.a.emit(d.s,{title:Ne,content:Se,context:{success:(!1).success,hash:a,error:"error"}}))),be(!1);case 32:case"end":return e.stop()}}),e,null,[[4,16]])}))),[V,O,ke]),Ee=Object(i.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){var r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ke||!t.detail.account){e.next=12;break}if("broker"!==O){e.next=8;break}return e.next=4,ke.brokerClaimed(t.detail.account);case 4:(r=e.sent)&&(r=b.a.from(r._hex).toString()/Math.pow(10,18),H(r)),e.next=12;break;case 8:return e.next=10,ke.recruiterClaimed(t.detail.account);case 10:(r=e.sent)&&(r=b.a.from(r._hex).toString()/Math.pow(10,18),H(r));case 12:case"end":return e.stop()}}),e)}))),[ke,t.detail.account,O]),Ue=Object(i.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ke||!t.detail.account){e.next=11;break}if("broker"!==O){e.next=7;break}return e.next=4,ke.brokerInfos(t.detail.account);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,ke.recruiterInfos(t.detail.account);case 9:r=e.sent;case 10:r&&(a={code:r.code,id:r.id},U(a));case 11:case"end":return e.stop()}}),e)}))),[ke,t.detail.account,O,Oe.current]),Te=Object(i.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){var r,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ke||!t.detail.account){e.next=11;break}if("broker"!==O){e.next=7;break}return e.next=4,ke.brokerFees(t.detail.account);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,ke.recruiterFees(t.detail.account);case 9:r=e.sent;case 10:r&&(r=b.a.from(r._hex).toString()/Math.pow(10,18),a="",r>=10&&r<1e3?a="one":r>=1e3&&r<2e3?a="two":r>=2e3&&r<4e3?a="three":r>=4e3&&r<6e3?a="four":r>=6e3&&r<1e4?a="five":r>=1e4&&(a="six"),ae(a),se(r));case 11:case"end":return e.stop()}}),e)}))),[ke,t.detail.account,O]),Fe=Object(i.useCallback)((function(){t.detail.account&&ke&&pe()}),[t.detail.account,ke,O]),Re=Object(i.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){var r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.detail.account){e.next=5;break}return e.next=3,j.a.get("https://referral.deri.io/referral_count",{params:{chainId:t.detail.chainId,account:t.detail.account,role:O}});case 3:(r=e.sent).data&&ee(r.data.count);case 5:case"end":return e.stop()}}),e)}))),[O,t.detail.account,t.detail.chainId]),Ae=Object(i.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){var r,a,c,i;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ke||!t.detail.account){e.next=11;break}if("broker"!==O){e.next=7;break}return e.next=4,ke.getBrokerRebate(t.detail.account);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,ke.getRecruiterRebate(t.detail.account);case 9:r=e.sent;case 10:r&&(console.log("getBrokerRebate",r),a="broker"===O?r.totalBrokerRebate._hex:r.totalRecruiterRebate._hex,c="broker"===O?r.currentBrokerRate._hex:r.currentRecruiterRate._hex,i={currentRate:b.a.from(c).toString()/Math.pow(10,18),totalRebate:b.a.from(a).toString()/Math.pow(10,18)},M(i));case 11:case"end":return e.stop()}}),e)}))),[ke,t.detail.account,O]),De=Object(i.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){var t,r,a,c,i,o,s,d,l;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ke){e.next=5;break}return e.next=3,ke.updatedTimestamp();case 3:(t=e.sent)&&(t=b.a.from(t._hex).toString()/Math.pow(10,6),t*=1e3,r=new Date(t),a=r.getUTCFullYear(),c=r.getUTCMonth()+1,i=r.getUTCDate(),o=r.getUTCHours(),s=r.getUTCMinutes(),d=r.getUTCSeconds(),c<10&&(c="0".concat(c)),i<10&&(i="0".concat(i)),o<10&&(o="0".concat(o)),s<10&&(s="0".concat(s)),d<10&&(s="0".concat(s)),l=" ".concat(c,".").concat(i,".").concat(a," ").concat(o,":").concat(s,":").concat(d),A(l));case 5:case"end":return e.stop()}}),e)}))),[ke]),Be=Object(i.useCallback)((function(){h("broker"===O?"broker_recruiter":"broker")}),[O]);return Object(i.useEffect)((function(){ke&&t.detail.account&&t.detail.chainId&&t.detail.chainId===ye&&(console.log(t.detail.chainId,ye),Ue(),Ae(),Te(),Ee())}),[ke,t.detail.account,O,t.detail.chainId,ye]),Object(i.useEffect)((function(){if(_.totalRebate){var e=Object(l.a)(_.totalRebate).minus(z).toNumber();J(e)}else J(0)}),[z,_]),Object(i.useEffect)((function(){ke&&De()}),[ke]),Object(i.useEffect)((function(){t.detail.account&&Re()}),[t.detail.account,t.detail.chainId,O]),Object(y.jsxs)("div",{className:"rebate-box",children:[Object(y.jsxs)("div",{className:"rebate-box-info",children:[Object(y.jsxs)("div",{className:"rebate-box-info-titile",children:[Object(y.jsx)("span",{children:"Referrals"}),Object(y.jsxs)("span",{className:"rebate-des",children:["Earn rebates through the DERI referral program.",Object(y.jsx)("br",{}),"For more information, please read the",Object(y.jsxs)("a",{href:"https://deri-protocol.medium.com/introducing-the-deri-protocol-referral-program-a9341a127c69",target:"_blank",rel:"noreferrer",children:[" "," referral program details."]})]})]}),Object(y.jsxs)("div",{className:"rebate-box-header",children:[Object(y.jsxs)("div",{className:"rebate-avatar",children:[Object(y.jsx)(s.a,{token:"rebate"}),ne?Object(y.jsx)(s.a,{token:"explained-".concat(ne),className:"explained-logo"}):null]}),Object(y.jsxs)("div",{className:"rebate-account-reward-info",children:[Object(y.jsxs)("div",{className:"rebate-reward",children:["You have ",Object(y.jsxs)("span",{className:x()("reward-btn",{"no-reward":0===V}),onClick:we,children:[ue&&Object(y.jsx)(N.a,{}),V.toFixed(2)," ",Object(y.jsx)("span",{className:"token-icon-reward",children:Object(y.jsx)(s.a,{token:Pe})})]})," unclaimed ",Pe," reward"]}),Object(y.jsxs)("div",{className:"rebate-code",children:["Referral Code",E.code?Object(y.jsxs)("div",{className:"code-hash-copy",children:[Object(y.jsxs)("div",{className:"code-hash",children:[E.code,Object(y.jsx)(s.a,{token:"copy-code",className:x()({"copy-code-pc":Y}),onClick:function(){return Ce(E.code)}}),Y?Object(y.jsxs)("div",{className:"copied-box copied-m",children:[Object(y.jsx)(s.a,{token:"copied-logo"}),"Copied"]}):null]}),Y?Object(y.jsxs)("div",{className:"copied-box copied-pc",children:[Object(y.jsx)(s.a,{token:"copied-logo"}),"Copied"]}):null]}):"broker"===O?Object(y.jsx)("div",{className:x()("no-code-hash",{"no-wallet":!t.isConnected()}),onClick:Fe,children:"Generate  Code"}):Object(y.jsxs)("a",{className:"no-recruiter-code-hash",target:"_blank",href:"https://forms.gle/BRWmZbzbexG9L1LJ6",rel:"noreferrer",children:[Object(y.jsx)(s.a,{token:"go-recruiter"})," Apply"]})]})]}),Object(y.jsx)("div",{className:"broker-recruiter",onClick:Be,children:Object(y.jsx)("div",{className:x()({"broker-type":"broker"===O,"recruiter-type":"broker"!==O}),children:"broker"===O?"Broker":Object(y.jsxs)(y.Fragment,{children:["Broker",Object(y.jsx)("br",{}),"Recruiter"]})})})]}),Object(y.jsxs)("div",{className:"rebate-box-use-info",children:[Object(y.jsxs)("div",{className:"rebate-box-user-info-header",children:[Object(y.jsxs)("div",{className:"rebate-box-user-info-title",children:["My Referral Stats ",Object(y.jsxs)("span",{className:"rebate-box-user-info-title-time-pc",children:["\uff08Last Updated: ",R," UTC\uff09"]}),Object(y.jsxs)("span",{className:"rebate-box-user-info-title-time-m",children:["Last Updated: ",R," UTC"]})]}),Object(y.jsx)(P.a,{lang:o,isShowWalletModal:!1})]}),Object(y.jsxs)("div",{className:"rebate-box-use-info-box",children:[Object(y.jsx)("div",{className:"total-rebate-bg",children:Object(y.jsxs)("div",{className:"total-rebate-box",children:[Object(y.jsx)(s.a,{token:"rebate-total-users"}),Object(y.jsxs)("div",{className:"total-rebate-box-info",children:[Object(y.jsx)("div",{className:"total-rebate-box-info-num",children:Object(y.jsx)(m.a,{value:X})}),Object(y.jsx)("div",{className:"total-rebate-box-info-title",children:"Total Users"})]})]})}),Object(y.jsx)("div",{className:"total-rebate-bg",children:Object(y.jsxs)("div",{className:"total-rebate-box total-fee-box",children:[Object(y.jsx)(s.a,{token:"rebate-total-fee"}),Object(y.jsxs)("div",{className:"total-rebate-box-info",children:[Object(y.jsx)("div",{className:"total-rebate-box-info-num",children:Object(y.jsx)(m.a,{value:oe,decimalScale:0===+oe?0:2})}),Object(y.jsx)("div",{className:"total-rebate-box-info-title",children:"Total Transaction Fee"})]})]})}),Object(y.jsx)("div",{className:"total-rebate-bg",children:Object(y.jsxs)("div",{className:"total-rebate-box total-rewards-box",children:[Object(y.jsx)(s.a,{token:"rebate-total-rewards"}),Object(y.jsxs)("div",{className:"total-rebate-box-info",children:[Object(y.jsx)("div",{className:"total-rebate-box-info-num",children:Object(y.jsx)(m.a,{value:_.totalRebate,decimalScale:0===+_.totalRebate?0:2})}),Object(y.jsx)("div",{className:"total-rebate-box-info-title",children:"Total Rewards"})]})]})})]})]}),Object(y.jsxs)("div",{className:"rebate-box-explained",children:[Object(y.jsxs)("div",{className:"rebate-box-explained-title",children:["Tiers Explained ",Object(y.jsx)("a",{href:"https://deri-protocol.medium.com/introducing-the-deri-protocol-referral-program-a9341a127c69",target:"_blank",rel:"noreferrer",children:Object(y.jsx)(s.a,{token:"rebate-warn"})})]}),Object(y.jsxs)("div",{className:"rebate-box-explained-list",children:[Object(y.jsxs)("div",{className:"rebate-box-explained-list-box rebate-explained-margin-box",children:[Object(y.jsx)("div",{className:"explained-box",children:Object(y.jsxs)("div",{className:"explained-box-info explained-one",children:[Object(y.jsx)("div",{className:"explained-logo",children:Object(y.jsx)(s.a,{token:"explained-one"})}),Object(y.jsxs)("div",{className:"explained-text",children:[Object(y.jsx)("div",{className:"explained-rate",children:"20% commission rate"}),Object(y.jsx)("div",{className:"explained-range-usd",children:"For transaction fee range of 10-1000 USD"})]})]})}),Object(y.jsx)("div",{className:"explained-box",children:Object(y.jsxs)("div",{className:"explained-box-info explained-two",children:[Object(y.jsx)("div",{className:"explained-logo",children:Object(y.jsx)(s.a,{token:"explained-two"})}),Object(y.jsxs)("div",{className:"explained-text",children:[Object(y.jsx)("div",{className:"explained-rate",children:"20% - 24% commission rate"}),Object(y.jsx)("div",{className:"explained-range-usd",children:"For transaction fee range of 1000-2000 USD"})]})]})})]}),Object(y.jsxs)("div",{className:"rebate-box-explained-list-box",children:[Object(y.jsx)("div",{className:"explained-box",children:Object(y.jsxs)("div",{className:"explained-box-info explained-three",children:[Object(y.jsx)("div",{className:"explained-logo",children:Object(y.jsx)(s.a,{token:"explained-three"})}),Object(y.jsxs)("div",{className:"explained-text",children:[Object(y.jsx)("div",{className:"explained-rate",children:"24% - 28% commission rate"}),Object(y.jsx)("div",{className:"explained-range-usd",children:"For transaction fee range of 2000-4000 USD"})]})]})}),Object(y.jsx)("div",{className:"explained-box",children:Object(y.jsxs)("div",{className:"explained-box-info explained-four",children:[Object(y.jsx)("div",{className:"explained-logo",children:Object(y.jsx)(s.a,{token:"explained-four"})}),Object(y.jsxs)("div",{className:"explained-text",children:[Object(y.jsx)("div",{className:"explained-rate",children:"28% - 32% commission rate"}),Object(y.jsx)("div",{className:"explained-range-usd",children:"For transaction fee range of 4000-6000 USD"})]})]})})]}),Object(y.jsxs)("div",{className:"rebate-box-explained-list-box",children:[Object(y.jsx)("div",{className:"explained-box",children:Object(y.jsxs)("div",{className:"explained-box-info explained-five",children:[Object(y.jsx)("div",{className:"explained-logo",children:Object(y.jsx)(s.a,{token:"explained-five"})}),Object(y.jsxs)("div",{className:"explained-text",children:[Object(y.jsx)("div",{className:"explained-rate",children:"32%-40% commission rate"}),Object(y.jsx)("div",{className:"explained-range-usd",children:"For transaction fee range of 6000-10000 USD"})]})]})}),Object(y.jsx)("div",{className:"explained-box",children:Object(y.jsxs)("div",{className:"explained-box-info explained-six",children:[Object(y.jsx)("div",{className:"explained-logo",children:Object(y.jsx)(s.a,{token:"explained-six"})}),Object(y.jsxs)("div",{className:"explained-text",children:[Object(y.jsx)("div",{className:"explained-rate",children:"40% commission rate"}),Object(y.jsx)("div",{className:"explained-range-usd",children:"For transaction fee range of 10000 USD and above"})]})]})})]})]})]})]}),Object(y.jsx)(s.a,{token:"copied-logo",className:"loaded-copied-logo"}),Object(y.jsx)(me,{children:Object(y.jsx)(v,{closeRegisterModal:xe,contract:ke,registerAfter:function(){Ue(),Ae(),Te(),Ee()}})})]})})))},320:function(e,t,r){"use strict";r.r(t);var n=r(291);r.d(t,"randomBytes",(function(){return n.a}));var a=r(1575);r.d(t,"shuffled",(function(){return a.a}))}}]);
//# sourceMappingURL=23.29c18758.chunk.js.map