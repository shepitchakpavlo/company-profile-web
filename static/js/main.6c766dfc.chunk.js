(this["webpackJsonpcompany-profile-web"]=this["webpackJsonpcompany-profile-web"]||[]).push([[0],{14:function(n){n.exports=JSON.parse('{"0":{"id":"0","name":"Google","logo":"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg","description":"Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware."},"1":{"id":"1","name":"Amazon","logo":"https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg","description":"Amazon.com, Inc., is an American multinational technology company based in Seattle, Washington, United States, and has 750,000 total employees. It focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence."},"2":{"id":"2","name":"Microsoft","logo":"https://agsol.com/wp-content/uploads/2018/09/new-microsoft-logo-SIZED-SQUARE.jpg","description":"Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services."},"3":{"id":"3","name":"Apple","logo":"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg","description":"Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Four technology companies, alongside Amazon, Google, and Microsoft."},"4":{"id":"4","name":"Samsung","logo":"https://www.art-gsm.ru/upload/iblock/2f6/2f6abed28e64907d257a1f5fb461e312.png","description":"Samsung is a South Korean multinational conglomerate headquartered in Samsung Town, Seoul. It comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol. Samsung was founded by Lee Byung-chul in 1938 as a trading company."}}')},16:function(n,e,t){n.exports=t(29)},21:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),c=t.n(o),i=(t(21),t(1)),u=t(4),l=t(2);function s(){var n=Object(i.a)([""]);return s=function(){return n},n}var m=l.a.img(s()),f=t(7),d=t.n(f);function p(){var n=Object(i.a)(["\n  display: flex;\n  box-sizing: border-box;\n"]);return p=function(){return n},n}var g=l.a.div(p());function b(){var n=Object(i.a)(["\n  \n"]);return b=function(){return n},n}var h=l.a.div(b());function v(){var n=Object(i.a)(["\n  font-size: 10px;\n  font-style: oblique;\n"]);return v=function(){return n},n}function j(){var n=Object(i.a)(["\n  font-size: 10px;\n  font-style: italic;\n"]);return j=function(){return n},n}function O(){var n=Object(i.a)(["\n  font-size: 12px;\n  margin-bottom: 5px;\n"]);return O=function(){return n},n}function w(){var n=Object(i.a)(["\n  flex-direction: column;\n"]);return w=function(){return n},n}function x(){var n=Object(i.a)(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]);return x=function(){return n},n}function y(){var n=Object(i.a)(["\n  width: 85px;\n  object-fit: contain;\n  margin-right: 12px;\n"]);return y=function(){return n},n}function E(){var n=Object(i.a)(["\n  flex-direction: row;\n  align-items: center;\n  border: 1px solid black;\n  padding: 12px;\n"]);return E=function(){return n},n}var S=function(n){var e=n.item,t=n.className,r=new Date(e.publishedAt).toLocaleString();return a.a.createElement(k,{className:t},a.a.createElement(N,{src:e.urlToImage}),a.a.createElement(z,null,a.a.createElement(I,{href:e.url,target:"_blank"},e.title),a.a.createElement(A,null,a.a.createElement(L,null,e.author),a.a.createElement(_,null,r))))},k=Object(l.a)(g)(E()),N=Object(l.a)(m)(y()),A=Object(l.a)(g)(x()),z=Object(l.a)(g)(w()),I=l.a.a(O()),L=Object(l.a)(h)(j()),_=Object(l.a)(h)(v()),q=t(3),B=t.n(q),G=t(5),C=function(){var n=Object(G.a)(B.a.mark((function n(e){var t,r,a;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="http://newsapi.org/v2/top-headlines?q=".concat(e,"&sortBy=publishedAt&apiKey=").concat("1ce4d2efa1394b6091e5773abb201d85"),n.next=3,fetch(t,{mode:"no-cors"});case 3:return r=n.sent,n.next=6,r.json();case 6:return a=n.sent,n.abrupt("return",a.articles);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),R=function(n){var e=a.a.useState(null),t=Object(u.a)(e,2),r=t[0],o=t[1],c=a.a.useState(!1),i=Object(u.a)(c,2),l=i[0],s=i[1],m=a.a.useState(!1),f=Object(u.a)(m,2),d=f[0],p=f[1];return a.a.useEffect((function(){(function(){var e=Object(G.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(null),s(!0),e.prev=2,e.next=5,C(n);case 5:t=e.sent,o(t),s(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),p(!0);case 13:s(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),{news:r,isLoading:l,isError:d}};function W(){var n=Object(i.a)(["\n  margin-top: 12px;\n"]);return W=function(){return n},n}function J(){var n=Object(i.a)(["\n  font-size: 16px;\n  text-decoration: underline;\n"]);return J=function(){return n},n}function K(){var n=Object(i.a)(["\n  color: blue;\n"]);return K=function(){return n},n}function M(){var n=Object(i.a)(["\n  color: green;\n"]);return M=function(){return n},n}function T(){var n=Object(i.a)(["\n  color: red;\n"]);return T=function(){return n},n}function D(){var n=Object(i.a)(["\n  flex-direction: column;\n  border: 1px solid #ccc;\n  padding: 12px;\n"]);return D=function(){return n},n}var U=function(n){var e=n.companyName,t=n.className,r=R(e),o=r.news,c=r.isLoading,i=r.isError;return a.a.createElement(F,{className:t},a.a.createElement(H,null,"News"),i?a.a.createElement(Q,null,"Loading error"):c?a.a.createElement(Z,null,"Loading..."):o&&0!==o.length?o.map((function(n){return a.a.createElement(P,{item:n,key:n.url})})):a.a.createElement($,null,"No news for this company"))};S.propTypes={className:d.a.string,companyName:d.a.string.isRequired};var F=Object(l.a)(g)(D()),Q=Object(l.a)(h)(T()),Z=Object(l.a)(h)(M()),$=Object(l.a)(h)(K()),H=Object(l.a)(h)(J()),P=Object(l.a)(S)(W());function V(){var n=Object(i.a)(["\n  width: 100%;\n  height: 100px;\n  object-fit: contain;\n"]);return V=function(){return n},n}function X(){var n=Object(i.a)(["\n  margin-bottom: 12px;\n"]);return X=function(){return n},n}function Y(){var n=Object(i.a)(["\n  font-weight: bold;\n  font-size: 22px;\n  margin: 12px 0;\n"]);return Y=function(){return n},n}function nn(){var n=Object(i.a)(["\n  flex: 1;\n  flex-direction: column;\n  align-items: stretch;\n  max-width: 400px;\n  padding: 12px;\n"]);return nn=function(){return n},n}var en=function(n){var e=n.profile,t=n.className,r=e.logo,o=e.name,c=e.description;return a.a.createElement(tn,{className:t},a.a.createElement(on,{src:r}),a.a.createElement(rn,null,o),a.a.createElement(an,null,c),a.a.createElement(U,{companyName:o}))},tn=Object(l.a)(g)(nn()),rn=Object(l.a)(h)(Y()),an=Object(l.a)(h)(X()),on=Object(l.a)(m)(V());function cn(){var n=Object(i.a)(["\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 5px;\n  border: 1px solid #ccc;\n  background-color: ",";\n  &:hover {\n    background-color: #ddd;\n  }\n"]);return cn=function(){return n},n}function un(){var n=Object(i.a)(["\n  height: 50px;\n  align-self: stretch;\n"]);return un=function(){return n},n}var ln=function(n){var e=n.items,t=n.onSelect,r=n.selected;return a.a.createElement(sn,null,e.map((function(n){var e=n.name,o=n.id;return a.a.createElement(mn,{isSelected:r===o,onClick:function(){return t(o)},key:o},e)})))},sn=Object(l.a)(g)(un()),mn=Object(l.a)(h)(cn(),(function(n){return n.isSelected?"#ccc":"#f1f1f1"})),fn=t(14);function dn(){var n=Object(i.a)(["\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n"]);return dn=function(){return n},n}var pn=Object.values(fn);var gn=function(){var n=Object(r.useState)(pn[0].id),e=Object(u.a)(n,2),t=e[0],o=e[1];return a.a.createElement(bn,null,a.a.createElement(ln,{items:pn,onSelect:o,selected:t}),a.a.createElement(en,{profile:pn[t]}))},bn=Object(l.a)(g)(dn());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(gn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.6c766dfc.chunk.js.map