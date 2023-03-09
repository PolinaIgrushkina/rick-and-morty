"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[412],{591:function(e,r,t){t.d(r,{E:function(){return i},M:function(){return o}});var a=t(861),n=t(757),s=t.n(n),c=t(243).Z.create({baseURL:"https://rickandmortyapi.com/api"}),i=function(){var e=(0,a.Z)(s().mark((function e(){var r,t,a,n=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1&&void 0!==n[1]?n[1]:"",e.prev=2,e.next=5,c.get("/character",{params:{page:r,name:t}});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:if(e.prev=9,e.t0=e.catch(2),404!==e.t0.response.status){e.next=13;break}return e.abrupt("return",alert("There are no characters with this name."));case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/character/".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},412:function(e,r,t){t.r(r),t.d(r,{default:function(){return F}});var a="CharactersPage_page__RTT2-",n=t(861),s=t(439),c=t(757),i=t.n(c),o=t(791),u=t(87),l=t(591),d=t(689),m="ChacartersItem_item__fDrUb",p="ChacartersItem_image__0NIzB",h="ChacartersItem_description__rlHy3",f="ChacartersItem_name__+IWPi",x="ChacartersItem_species__MH8Xf",_=t(184);function g(e){var r=e.image,t=e.name,a=e.id,n=e.species,s=(0,d.TH)();return(0,_.jsx)("li",{children:(0,_.jsx)(u.rU,{to:"/characters/".concat(a),state:{from:s},children:(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("img",{src:r,alt:"Character",className:p}),(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)("h3",{className:f,children:t.slice(0,17)}),(0,_.jsx)("p",{className:x,children:n})]})]})})})}var v="CharactersList_list__Jl0gA",b="CharactersList_buttonscontainer__6bzq0",j="CharactersList_button__+2Hhk",C="CharactersList_disabled__Sbi5D",N="CharactersList_pageTitle__su6iD",w=t(643),k="Loader_loader__+lRPl";var L=function(){return(0,_.jsx)("div",{className:k,children:(0,_.jsx)(w.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})};function y(){var e,r,t=(0,o.useState)([]),a=(0,s.Z)(t,2),c=a[0],d=a[1],m=(0,o.useState)(0),p=(0,s.Z)(m,2),h=p[0],f=p[1],x=(0,o.useState)("init"),w=(0,s.Z)(x,2),k=w[0],y=w[1],S=(0,u.lr)(),Z=(0,s.Z)(S,2),P=Z[0],I=Z[1],D=null!==(e=P.get("page"))&&void 0!==e?e:1,E=null!==(r=P.get("name"))&&void 0!==r?r:"";(0,o.useEffect)((function(){y("loading");try{var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.E)(D,E);case 2:r=e.sent,d(r.results),f(r.info.pages),y("success");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(r){y("error")}}),[D,E]);var H=null===c||void 0===c?void 0:c.sort((function(e,r){return e.name.localeCompare(r.name)})),M=function(e){I({name:E,page:e})};return(0,_.jsxs)(_.Fragment,{children:["init"===k,"success"===k&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("ul",{className:v,children:H.map((function(e){return(0,_.jsx)(g,{image:e.image,name:e.name,id:e.id,species:e.species},e.id)}))}),(0,_.jsxs)("div",{className:b,children:[(0,_.jsx)("button",{disabled:1===Number(D),className:1===Number(D)?C:j,onClick:function(){return M(Number(D)-1)},children:"Prev Page"}),(0,_.jsxs)("p",{className:N,children:["Page ",D]}),(0,_.jsx)("button",{className:Number(D)===h?C:j,onClick:function(){return M(Number(D)+1)},disabled:Number(D)===h,children:"Next Page"})]})]}),"loading"===k&&(0,_.jsx)(L,{}),"error"===k&&(0,_.jsx)("p",{children:"Error! Something went wrong."})]})}var S=t(0),Z=t(869),P=t(841),I=t(479),D="Logo_logo__vDBPO";function E(){return(0,_.jsx)("div",{className:D,children:(0,_.jsxs)("picture",{children:[(0,_.jsx)("source",{srcSet:"".concat(S," 1x, ").concat(Z," 2x"),media:"(min-width: 768px)"}),(0,_.jsx)("source",{srcSet:"".concat(P," 1x, ").concat(I," 2x"),media:"(max-width: 767px)"}),(0,_.jsx)("img",{src:S,alt:"logo"})]})})}var H="Searchbar_form__iqMd-",M="Searchbar_input__GkLZE",T="Searchbar_svg__BhAfq";function B(){var e,r=(0,u.lr)(),t=(0,s.Z)(r,2),a=t[0],n=t[1],c=null!==(e=a.get("name"))&&void 0!==e?e:"";return(0,_.jsxs)("form",{className:H,onSubmit:function(e){e.preventDefault()},children:[(0,_.jsx)("input",{className:M,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Filter by name...",value:c,onChange:function(e){n({name:e.target.value.toLowerCase()})}}),(0,_.jsx)("svg",{className:T,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"M15.5 15H14.71L14.43 14.73C15.41 13.59 16 12.11 16 10.5C16 6.91 13.09 4 9.5 4C5.91 4 3 6.91 3 10.5C3 14.09 5.91 17 9.5 17C11.11 17 12.59 16.41 13.73 15.43L14 15.71V16.5L19 21.49L20.49 20L15.5 15V15ZM9.5 15C7.01 15 5 12.99 5 10.5C5 8.01 7.01 6 9.5 6C11.99 6 14 8.01 14 10.5C14 12.99 11.99 15 9.5 15Z",fill:"black",fillOpacity:"0.54"})})]})}function F(){return(0,_.jsxs)("div",{className:a,children:[(0,_.jsx)(E,{}),(0,_.jsx)(B,{}),(0,_.jsx)(y,{})]})}},0:function(e,r,t){e.exports=t.p+"static/media/desktop-1x.fdb72745f596ac4a045d.png"},869:function(e,r,t){e.exports=t.p+"static/media/desktop-2x.33f1662b1fd59e892152.png"},841:function(e,r,t){e.exports=t.p+"static/media/mobile-1x.5375322a8761d24d7b70.png"},479:function(e,r,t){e.exports=t.p+"static/media/mobile-2x.8456ee62da78e6a7379a.png"}}]);
//# sourceMappingURL=412.323248da.chunk.js.map