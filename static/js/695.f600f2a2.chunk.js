"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[695],{591:function(e,a,r){r.d(a,{E:function(){return i},M:function(){return l}});var n=r(861),t=r(757),s=r.n(t),c=r(243).Z.create({baseURL:"https://rickandmortyapi.com/api"}),i=function(){var e=(0,n.Z)(s().mark((function e(){var a,r,n,t=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:1,r=t.length>1&&void 0!==t[1]?t[1]:"",e.prev=2,e.next=5,c.get("/character",{params:{page:a,name:r}});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:if(e.prev=9,e.t0=e.catch(2),404!==e.t0.response.status){e.next=13;break}return e.abrupt("return",alert("There are no characters with this name."));case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(a){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/character/".concat(a));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},695:function(e,a,r){r.r(a),r.d(a,{default:function(){return j}});var n=r(861),t=r(439),s=r(757),c=r.n(s),i=r(591),l=r(791),o=r(87),u=r(689),d="CharacterDetailsPage_page__GBC0d",h="CharacterDetailsPage_goBack__myI0C",v="CharacterDetailsPage_image__XZFt4",p="CharacterDetailsPage_name__amoLb",m="CharacterDetailsPage_informations__Q9kEx",f="CharacterDetailsPage_block__JrKEW",x="CharacterDetailsPage_attribute__Re4lt",_="CharacterDetailsPage_value__AMSvW",g=r(184);function j(){var e,a,r,s=null!==(e=null===(a=(0,u.TH)().state)||void 0===a?void 0:a.from)&&void 0!==e?e:"/characters",j=(0,u.UO)().id,N=(0,l.useState)({}),w=(0,t.Z)(N,2),k=w[0],C=w[1];return(0,l.useEffect)((function(){function e(){return(e=(0,n.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.M)(j);case 2:a=e.sent,C(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]),(0,g.jsxs)("div",{className:d,children:[(0,g.jsxs)(o.rU,{to:s,className:h,children:[(0,g.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)("path",{d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",fill:"black"})}),"Go back"]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:null===k||void 0===k?void 0:k.image,alt:"Character",className:v}),(0,g.jsx)("h1",{className:p,children:null===k||void 0===k?void 0:k.name}),(0,g.jsx)("h3",{className:m,children:"Informations"}),(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("p",{className:x,children:"Gender"}),(0,g.jsx)("p",{className:_,children:null===k||void 0===k?void 0:k.gender})]}),(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("p",{className:x,children:"Status"}),(0,g.jsx)("p",{className:_,children:null===k||void 0===k?void 0:k.status})]}),(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("p",{className:x,children:"Specie"}),(0,g.jsx)("p",{className:_,children:null===k||void 0===k?void 0:k.species})]}),(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("p",{className:x,children:"Origin"}),(0,g.jsx)("p",{className:_,children:null===k||void 0===k||null===(r=k.origin)||void 0===r?void 0:r.name})]}),(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("p",{className:x,children:"Type"}),(0,g.jsxs)("p",{className:_,children:[(null===k||void 0===k?void 0:k.type)||" Unknown"," "]})]})]})]})}},861:function(e,a,r){function n(e,a,r,n,t,s,c){try{var i=e[s](c),l=i.value}catch(o){return void r(o)}i.done?a(l):Promise.resolve(l).then(n,t)}function t(e){return function(){var a=this,r=arguments;return new Promise((function(t,s){var c=e.apply(a,r);function i(e){n(c,t,s,i,l,"next",e)}function l(e){n(c,t,s,i,l,"throw",e)}i(void 0)}))}}r.d(a,{Z:function(){return t}})}}]);
//# sourceMappingURL=695.f600f2a2.chunk.js.map