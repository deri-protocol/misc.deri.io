(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[38],{2487:function(e,t,a){},2713:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(2),i=a(10),n=a(5),r=a(59),l=a(595),d=a(150),j=a(40),o=a(33),b=a(231),x=a(16),h=a(322),p=a.p+"static/media/pancake.e177218b.svg",v=(a.p,a.p+"static/media/uniswap.5495839a.svg"),m=a.p+"static/media/gateio.1570dd44.svg",O=a.p+"static/media/mxc.b59b5e73.svg",u=a.p+"static/media/governance.c99bf238.svg",f=a.p+"static/media/privilege.1beba9ef.svg",w=(a(2487),a(3));function N(e){var t=e.item,a=e.index,s=Object(n.useState)(!1),c=Object(i.a)(s,2),r=c[0],l=c[1];return Object(w.jsxs)("div",{className:"faq-info-box",children:[Object(w.jsxs)("div",{className:"faq-title-img",onClick:function(){l(!r)},children:[Object(w.jsx)("div",{className:"faq-question-title",children:t.label}),Object(w.jsx)("div",{children:Object(w.jsx)(o.a,{token:r?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),r&&Object(w.jsxs)("div",{className:"faq-des",children:[t.labelDes,t.link&&Object(w.jsxs)("a",{rel:"noreferrer",target:"_blank",href:t.link,children:[" ",t.linkLabel]})]})]},a)}t.default=Object(r.b)("wallet")(Object(r.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,r=e.lang,g=Object(n.useState)(),k=Object(i.a)(g,2),y=k[0],A=k[1],D=Object(n.useState)(),_=Object(i.a)(D,2),E=_[0],C=_[1],q=Object(n.useState)(!1),S=Object(i.a)(q,2),I=S[0],F=S[1],T=Object(n.useState)(),R=Object(i.a)(T,2),B=R[0],J=R[1],L=Object(b.a)(),U=[{label:r["what-is-deri"],labelDes:r["what-is-deri-des"]},{label:r["is-deri-erc20-token"],labelDes:r["is-deri-erc20-token-des"]},{label:r["what-deri-token-total"],labelDes:r["what-deri-token-total-des"],link:"https://docs.deri.io/library/tokenomics",linkLabel:r.more}],$=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=13;break}return"DERI",18,e.prev=3,e.next=6,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:y,symbol:"DERI",decimals:18}}});case 6:e.sent?console.log("Thanks for your interest!"):console.log("Your loss!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){var t,a,c,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://infoapi.deri.io","/stats_for_token"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:(c=e.sent)&&((i={}).price=c.data.price,i.market_cap=c.data.market_cap,i.circulating_supply=parseInt(c.data.circulating_supply),i.total_supply=parseInt(c.data.total_supply),C(i));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getDeriBurnedAmount");case 2:t=e.sent,J(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()){e.next=6;break}return e.next=3,a.switchNetwork(L[42161]);case 3:window.open("https://app.uniswap.org/#/tokens/arbitrum/0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12"),e.next=7;break;case 6:window.open("https://app.uniswap.org/#/tokens/arbitrum/0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()){e.next=6;break}return e.next=3,a.switchNetwork(L[56]);case 3:window.open("https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5"),e.next=7;break;case 6:window.open("https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e;a.isConnected()&&(56===+a.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1===+a.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128===+a.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137===+a.detail.chainId?e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e":42161===+a.detail.chainId&&(e="0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12"),A(e))}),[a.detail]),Object(n.useEffect)((function(){var e;return e=window.setInterval((function(){Y()}),3e5),Y(),z(),function(){e&&clearInterval(e)}}),[]),Object(w.jsx)("div",{className:"token-box",children:Object(w.jsxs)("div",{className:"token-info",children:[Object(w.jsxs)("div",{className:"token-header",children:[Object(w.jsxs)("div",{className:"token-header-left",children:[Object(w.jsxs)("div",{className:"logo-title",children:[Object(w.jsx)("img",{alt:"",src:h.default}),Object(w.jsx)("span",{className:"title-text",children:r.title})]}),Object(w.jsxs)("div",{className:"token-header-des",children:[r["deri-is-the-protocol-token"],Object(w.jsxs)("a",{rel:"noopener noreferrer",href:"https://docs.deri.io/tokenomics",target:"_blank",className:"learn-more",children:[" ",r["learn-more"]," "]})]})]}),Object(w.jsx)("div",{className:"token-header-right",children:Object(w.jsx)(d.a,{onClick:function(){$()},type:x.E,width:"242",label:r["add-deri-to-metamask"]})})]}),Object(w.jsxs)("div",{className:"token-info-content",children:[Object(w.jsxs)("div",{className:"top-info-box",children:[Object(w.jsxs)("div",{className:"info-box",children:[Object(w.jsxs)("div",{className:"num",children:["$ ",E?Object(w.jsx)(l.a,{value:E.price,displayType:"text",thousandSeparator:!0,decimalScale:4}):"--"]}),Object(w.jsx)("div",{className:"text",children:r.price})]}),Object(w.jsxs)("div",{className:"info-box min-box",children:[Object(w.jsxs)("div",{className:"num",children:["$ ",E?Object(w.jsx)(l.a,{value:E.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"]}),Object(w.jsx)("div",{className:"text",children:r["market-cap"]})]})]}),Object(w.jsxs)("div",{className:"buttom-info-box",children:[Object(w.jsxs)("div",{className:"info-box",children:[Object(w.jsx)("div",{className:"num",children:E?Object(w.jsx)(l.a,{value:E.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(w.jsx)("div",{className:"text",children:r["circulating-supply"]})]}),Object(w.jsxs)("div",{className:"info-box min-box",children:[Object(w.jsx)("div",{className:"num",children:E?Object(w.jsx)(l.a,{value:E.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(w.jsx)("div",{className:"text",children:r["total-supply"]})]})]})]}),Object(w.jsx)("div",{className:"buy-deri-token",children:r["token-burning"]}),Object(w.jsxs)("div",{className:"token-info-content token-burning-content",children:[Object(w.jsx)("div",{className:"top-info-box  token-burning",children:Object(w.jsxs)("div",{className:"info-box",children:[Object(w.jsx)("div",{className:"num",children:"4,357,036"}),Object(w.jsx)("div",{className:"text",children:r["burned-to-mining-vault"]})]})}),Object(w.jsx)("div",{className:"buttom-info-box  token-burning",children:Object(w.jsxs)("div",{className:"info-box",children:[Object(w.jsxs)("div",{className:"num",children:[Object(w.jsx)(l.a,{value:B,displayType:"text",thousandSeparator:!0,decimalScale:0}),"  ",Object(w.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://etherscan.io/token/0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9?a=0x000000000000000000000000000000000000dead",children:[" ",Object(w.jsx)(o.a,{token:"target"})]})]}),Object(w.jsx)("div",{className:"text",children:r["burned-to-deadlock-address"]})]})})]}),Object(w.jsx)("div",{className:"buy-deri-token",children:r["buy-deri-token"]}),Object(w.jsxs)("div",{className:"buy-deri-token-swap",children:[Object(w.jsx)("a",{target:"_blank",onClick:H,children:Object(w.jsxs)("div",{className:"swap-box",children:[Object(w.jsx)("div",{className:"swap-logo",children:Object(w.jsx)("img",{alt:"",src:p})}),Object(w.jsx)("div",{className:"swap-name",children:r["pancake-swap"]})]})}),Object(w.jsx)("a",{target:"_blank",onClick:G,children:Object(w.jsxs)("div",{className:"swap-box",children:[Object(w.jsx)("div",{className:"swap-logo",children:Object(w.jsx)("img",{alt:"",src:v})}),Object(w.jsx)("div",{className:"swap-name",children:r["uni-swap"]})]})}),Object(w.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.gate.io/tradepro/DERI_USDT",children:Object(w.jsxs)("div",{className:"swap-box",children:[Object(w.jsx)("div",{className:"swap-logo",children:Object(w.jsx)("img",{alt:"",src:m})}),Object(w.jsx)("div",{className:"swap-name",children:r.gate})]})}),Object(w.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.mexc.com/exchange/DERI_USDT",children:Object(w.jsxs)("div",{className:"swap-box",children:[Object(w.jsx)("div",{className:"swap-logo",children:Object(w.jsx)("img",{alt:"",src:O})}),Object(w.jsx)("div",{className:"swap-name",children:r.mexc})]})})]}),Object(w.jsxs)("div",{className:"benefits-faq-box",children:[Object(w.jsxs)("div",{className:"benefits-box",children:[Object(w.jsx)("div",{className:"benefits-title",children:r["benefits-of-deri-token"]}),Object(w.jsxs)("div",{className:"benefits-info",children:[Object(w.jsxs)("div",{className:"governance",children:[Object(w.jsx)("img",{src:u,alt:""}),Object(w.jsxs)("div",{className:"governance-des",children:[Object(w.jsx)("div",{className:"governance-title",children:r.governance}),Object(w.jsx)("div",{className:"governance-text",children:r["governance-des"]})]})]}),Object(w.jsxs)("div",{className:"privilege",children:[Object(w.jsx)("img",{src:f,alt:""}),Object(w.jsxs)("div",{className:"privilege-des",children:[Object(w.jsx)("div",{className:"privilege-title",children:r.privilege}),Object(w.jsx)("div",{className:"privilege-text",children:r["privilege-des"]})]})]})]})]}),Object(w.jsxs)("div",{className:"faq-box",children:[Object(w.jsx)("div",{className:"faq-title",children:r.faq}),Object(w.jsxs)("div",{className:"faq-info",children:[U.map((function(e,t){return Object(w.jsx)(N,{item:e,index:t})})),Object(w.jsxs)("div",{className:"faq-info-box",children:[Object(w.jsxs)("div",{className:"faq-title-img",onClick:function(){F(!I)},children:[Object(w.jsx)("div",{className:"faq-question-title",children:r["what-are-the"]}),Object(w.jsx)("div",{children:Object(w.jsx)(o.a,{token:I?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),I&&Object(w.jsxs)("div",{className:"faq-des",children:[Object(w.jsx)("div",{className:"governance-privilege",children:r.governance}),Object(w.jsx)("div",{children:r["what-are-the-govenance-des"]}),Object(w.jsx)("div",{className:"governance-privilege privilege",children:r.privilege}),Object(w.jsx)("div",{children:r["what-are-the-privilege-des-one"]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("br",{}),r["what-are-the-privilege-des-two"]]}),Object(w.jsx)("div",{className:"specifically",children:r["what-are-the-privilege-des-three"]}),Object(w.jsxs)("div",{className:"specifically-des",children:[Object(w.jsx)("div",{className:"list-style"}),Object(w.jsx)("div",{children:r["what-are-the-privilege-des-three-des-one"]})]}),Object(w.jsxs)("div",{className:"specifically-des",children:[Object(w.jsx)("div",{className:"list-style"}),Object(w.jsx)("div",{children:r["what-are-the-privilege-des-three-des-two"]})]}),Object(w.jsx)("div",{className:"specifically",children:r["what-are-the-privilege-des-four"]})]})]})]})]})]})]})})})))}}]);
//# sourceMappingURL=38.83ad7160.chunk.js.map