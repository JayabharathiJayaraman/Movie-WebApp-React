(this["webpackJsonpmovie-webapp-react"]=this["webpackJsonpmovie-webapp-react"]||[]).push([[0],{168:function(e,t,c){},169:function(e,t,c){},170:function(e,t,c){},180:function(e,t,c){},182:function(e,t,c){},183:function(e,t,c){},184:function(e,t,c){},188:function(e,t,c){},189:function(e,t,c){},199:function(e,t,c){},494:function(e,t,c){},495:function(e,t,c){},496:function(e,t,c){"use strict";c.r(t);var n,s=c(4),a=c.n(s),r=c(26),i=c.n(r),o=(c(168),c(169),c(13)),l=(c(170),c(18)),u=c(12),j=c(8),b=Object(j.b)("is ligging in"),d=Object(j.b)("is logging out"),h={login:b,logout:d},m=Object(j.c)({currentuser:null},(n={},Object(u.a)(n,b,(function(e,t){return{currentuser:t.payload}})),Object(u.a)(n,d,(function(e,t){return{currentuser:null}})),n)),O=c(7),f=c(2);var x,p,v,g=function(){var e=Object(O.c)((function(e){return e.login.currentuser})),t=0,c=(Object(O.c)((function(e){return e.shopc.map((function(e){try{return t+=parseInt(e.count),console.log("initialshoppingcartitemcount: ",t),t}catch(c){return t}}))})),Object(s.useState)(!1)),n=Object(o.a)(c,2),a=n[0],r=n[1],i=function(){return r(!1)},u=Object(O.b)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("nav",{className:"navbar",children:Object(f.jsxs)("div",{className:"navbar-container",children:[Object(f.jsxs)(l.b,{to:"/",className:"navbarLogo",onClick:i,children:["Movie WebbShop",Object(f.jsx)("i",{class:"fas fa-tv"})]}),Object(f.jsx)("div",{className:"menu-icon",onClick:function(){return r(!a)},children:Object(f.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(f.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(l.b,{to:"/",className:"nav-links",onClick:i,children:"Home"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(l.b,{to:"/movie",className:"nav-links",onClick:i,children:"Movie"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(l.b,{to:"/customerorders",className:"nav-links",onClick:i,children:"Customer Orders"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(l.b,{to:"/userLogIn",className:"nav-links",onClick:i,children:Object(f.jsxs)("button",{onClick:function(){console.log("logout"),u(h.logout())},children:[e?"LogOut":"LogIn",Object(f.jsx)("i",{class:"fas fa-user"})]})})})]}),Object(f.jsxs)("div",{className:"nav-cart",children:[Object(f.jsx)("span",{children:t}),Object(f.jsx)(l.b,{to:"/checkoutIcon",onClick:i,children:Object(f.jsx)("div",{className:"nav-links-cart",children:Object(f.jsx)("i",{class:"fas fa-shopping-cart"})})})]})]})})})},N=c(17),y=(c(180),c(41)),k=c.n(y),w=function(){return Object(f.jsxs)("div",{className:"home",children:[Object(f.jsx)(k.a,{right:!0,cascade:!0,children:Object(f.jsx)("h2",{className:"heading4",children:"Welcome to Movies WebbShop"})}),Object(f.jsxs)("ul",{className:"movieParagarph",children:[Object(f.jsx)("li",{children:"Movies WebbShop breaks from the usual movie download site mould to offer a different kind of service than we are used to."}),Object(f.jsx)("li",{children:"It has also a huge collection of classic movies that will appeal to film buffs and enthusiasts."}),Object(f.jsx)("li",{children:"Choose from thousands of titles and watch your favorite action, comedy, drama and horror movies streamed in Real Player or Windows Media Player formats."}),Object(f.jsx)("li",{children:"Watch hundreds of trailers and erotic movies right on your computer. The quality of the movies you watch from popcornFlix varies. Each movie usually has a broadband and narrowband option."}),Object(f.jsx)("li",{children:" On the plus side that means people with relatively slow connections can still enjoy streaming movies, but those with faster connections will be used to better quality."})]})]})},I=c(15),C=c.n(I),S=c(9),P=c(27),E=(c(84),c(55)),D=Object(j.b)("is fetching"),F=Object(j.b)("success"),T=Object(j.b)("more movies"),M=Object(j.b)("failure"),R={isFetching:D,success:F,clearMovies:T,failure:M},A="normal",B="is fetching",H="success",L="clearMovies",W="failure",Y={status:A,movies:[]},G=Object(j.c)(Y,(x={},Object(u.a)(x,D,(function(e,t){return Object(S.a)(Object(S.a)({},e),{},{status:B})})),Object(u.a)(x,T,(function(e,t){return{status:L,movies:[]}})),Object(u.a)(x,F,(function(e,t){console.log("in success");var c="false";return e.movies.forEach((function(e){e.imdbID===t.payload.imdbID&&(c="true")})),"false"===c?{status:H,movies:[].concat(Object(E.a)(e.movies),[t.payload])}:Object(S.a)(Object(S.a)({},e),{},{status:H})})),Object(u.a)(x,M,(function(e,t){return Object(S.a)(Object(S.a)({},e),{},{status:W})})),x)),K=Object(j.b)("is fetching"),q=Object(j.b)("success"),z=Object(j.b)("failure"),_={isFetching:K,success:q,failure:z},J="is fetching",X="success",Q="failure",U={statush:"normal",selectedmovie:null},V=Object(j.c)(U,(p={},Object(u.a)(p,K,(function(e,t){return Object(S.a)(Object(S.a)({},e),{},{statush:J})})),Object(u.a)(p,q,(function(e,t){return{statush:X,selectedmovie:t.payload}})),Object(u.a)(p,z,(function(e,t){return Object(S.a)(Object(S.a)({},e),{},{statush:Q})})),p)),Z=Object(j.b)("setCurrentScreen"),$={setCurrentScreen:Z},ee=Object(j.c)({currentscreen:"movie"},Object(u.a)({},Z,(function(e,t){return{currentscreen:t.payload}}))),te=Object(j.b)("add to cart"),ce=Object(j.b)("remove from cart"),ne=Object(j.b)("increase amount"),se=Object(j.b)("increase shopCart amount"),ae=Object(j.b)("decreaseAmount"),re=Object(j.b)("clearCart"),ie={addToCart:te,removeFromCart:ce,increaseAmount:ne,increaseAmountShopCart:se,decreaseAmont:ae,clearCart:re},oe=Object(j.c)([],(v={},Object(u.a)(v,te,(function(e,t){return console.log("state",e.length),e.find((function(e){return e.movie.imdbID===t.payload.imdbID}))?e.map((function(e){return e.movie.imdbID===t.payload.imdbID?Object(S.a)(Object(S.a)({},e),{},{count:e.count+1}):e})):[].concat(Object(E.a)(e),[{movie:t.payload,count:1}])})),Object(u.a)(v,ne,(function(e,t){return e.map((function(e){return e.movie.imdbID===t.payload.imdbid?Object(S.a)(Object(S.a)({},e),{},{count:e.count+1}):e}))})),Object(u.a)(v,se,(function(e,t){return e.map((function(e){return e.movie.imdbID===t.payload.imdbid?Object(S.a)(Object(S.a)({},e),{},{count:e.count+1}):e}))})),Object(u.a)(v,ae,(function(e,t){return e.map((function(e){return console.log("333",e.count),e.movie.imdbID===t.payload.imdbid?Object(S.a)(Object(S.a)({},e),{},{count:e.count-1}):e}))})),Object(u.a)(v,ce,(function(e,t){return e.filter((function(e){return e.movie.imdbID!==t.payload.imdbid}))})),Object(u.a)(v,re,(function(){return[]})),v));c(182);function le(e){var t={Price:49};try{var c=parseInt(e.Year),n=(new Date).getFullYear();t=c>n-2?{Price:129}:c>n-5?{Price:99}:{Price:49}}catch(s){t={Price:49}}return console.log("price",Object(S.a)(Object(S.a)({},e),t)),Object(S.a)(Object(S.a)({},e),t)}function ue(e,t){return je.apply(this,arguments)}function je(){return(je=Object(P.a)(C.a.mark((function e(t,c){var n,s,a,r,i,o,l;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R.isFetching()),console.log("Got search word: ",c),n="https://www.omdbapi.com/?apikey=72d7fe9&s="+c,e.prev=3,e.next=6,fetch(n);case 6:return s=e.sent,e.next=9,s.json();case 9:for(a=e.sent,console.log("Got data: ",a),r=Math.floor(parseInt(a.totalResults)/10)+1,i=a.Search,t(R.clearMovies()),i.map((function(e){if("N/A"!==e.Poster){var c=le(e);t(R.success(c))}})),console.log("the moviessss : ",i),o=Math.min(5,r),l=2;l<o+1;l++)console.log("for loop",l),be(t,c,l);e.next=23;break;case 20:e.prev=20,e.t0=e.catch(3),t(R.failure());case 23:case"end":return e.stop()}}),e,null,[[3,20]])})))).apply(this,arguments)}function be(e,t,c){return de.apply(this,arguments)}function de(){return(de=Object(P.a)(C.a.mark((function e(t,c,n){var s,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching page",n),s="https://omdbapi.com/?apikey=72d7fe9&s="+c+"&page="+n,e.prev=2,e.next=5,fetch(s);case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,r.Search.map((function(e){if("N/A"!==e.Poster){var c=le(e);t(R.success(c))}})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),t(R.failure());case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}var he,me=function(e){var t=e.placeholder,c=(Object(O.c)((function(e){return e.movie.movies})),Object(O.b)()),n=Object(s.useState)(""),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(k.a,{right:!0,cascade:!0,children:Object(f.jsx)("div",{className:"ui search",children:Object(f.jsxs)("div",{className:"box",children:[Object(f.jsx)("i",{class:"fas fa-search"}),Object(f.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:function(e){console.log("event",e),"Enter"===e.code?(e.preventDefault(),ue(c,r)):i(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&ue(c,r)}}),Object(f.jsx)("button",{onClick:function(){return ue(c,r)},children:"Search"})]})})})})},Oe=(c(183),function(e){return Object(f.jsxs)("div",{className:"poster",children:[Object(f.jsx)("img",{className:"img",src:e.movie.Poster,alt:"abc"}),Object(f.jsxs)("div",{class:"bottom-right",children:[e.movie.Price," kr"]})]})}),fe=(c(184),c(54)),xe=c.n(fe),pe=c(164),ve=(c(187),pe.a.initializeApp({apiKey:"AIzaSyB5MW-hIcj60cueZhD0KRkQtnK312PMoKE",authDomain:"movie-webapp-cef6b.firebaseapp.com",projectId:"movie-webapp-cef6b",storageBucket:"movie-webapp-cef6b.appspot.com",messagingSenderId:"1004483582988",appId:"1:1004483582988:web:da1aaddec7430f04b32229",measurementId:"G-863BQJNRRM"})),ge=ve.firestore(),Ne=ve.auth(),ye=ge,ke=function(){var e=Object(O.c)((function(e){return e.highlightmovie.selectedmovie})),t=Object(s.useState)([]),c=Object(o.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(!1),i=Object(o.a)(r,2),l=i[0],u=i[1],j=ye.collection("ratings");return Object(s.useEffect)((function(){u(!0),j.onSnapshot((function(t){var c=[];t.forEach((function(t){e.imdbID==t.data().imdbID&&(c.push(t.data()),console.log("comment data",t.data()))})),a(c),u(!1)}))}),[e]),l?Object(f.jsx)("h2",{children:"Loading..."}):Object(f.jsx)("div",{children:n.map((function(e){return Object(f.jsxs)("div",{className:"comment",children:["Comment:",Object(f.jsx)("h3",{children:e.usercomment}),Object(f.jsx)("div",{className:"stars",children:Object(f.jsx)(xe.a,{count:5,size:26,value:e.movierating,edit:!1,color2:"#51E706",color1:"#F8F3F1"})})]})}))})},we=function(e){var t=e.goBack,c=Object(O.c)((function(e){return e.highlightmovie.selectedmovie}));return Object(s.useEffect)((function(){document.querySelector("#overlay").classList.add("show"),console.log(c.Title)}),[c]),Object(f.jsx)("section",{id:"overlay",children:Object(f.jsxs)("div",{className:"figure",children:[Object(f.jsx)("button",{id:"closebutton",className:"styleClose",onClick:function(){!function(){t();var e=document.querySelector("#overlay #closebutton");e&&e.addEventListener("click",(function(){document.querySelector("#overlay").classList.remove("show"),document.body.style.overflow="unset"}))}()},children:"X"}),Object(f.jsxs)("div",{className:"topContainer",children:[Object(f.jsx)("div",{className:"imgDisp",children:Object(f.jsx)("img",{src:c.Poster,alt:c.Title})}),Object(f.jsx)("div",{className:"sideContainer",children:Object(f.jsx)("div",{className:"titlesDisp",children:Object(f.jsxs)("div",{className:"figcaption",children:[Object(f.jsx)("h1",{className:"styleH1txt",children:c.Title}),Object(f.jsx)("br",{}),Object(f.jsx)("h3",{className:"styleH3txt",children:c.Year}),Object(f.jsxs)("h3",{className:"styleH3txt",children:["\xa0|\xa0",c.Runtime]}),Object(f.jsxs)("h3",{className:"styleH3txt",children:["\xa0|\xa0",c.Language]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"alignRatings",children:[Object(f.jsx)("div",{children:Object(f.jsx)("h3",{className:"styleH3txtRate",children:c.imdbRating/2})}),Object(f.jsx)("div",{className:"levelRating",children:Object(f.jsx)(xe.a,{count:5,onChange:function(e){console.log(e)},size:25,value:c.imdbRating/2,edit:!1,color2:"#ffcc33",color1:"#F8F3F1"})})]})]})})})]}),Object(f.jsxs)("div",{className:"bottomContainer clear",children:[Object(f.jsx)("div",{className:"bottomContTitle",children:Object(f.jsx)("h2",{children:"Comments"})}),Object(f.jsx)("div",{className:"commentsBody",children:Object(f.jsx)(ke,{imdb:c.imdbID})}),Object(f.jsx)("div",{className:"clear"})]})]})})},Ie=function(){var e=Object(O.c)((function(e){return e.movie.status})),t=Object(O.c)((function(e){return e.movie.movies})),c=Object(s.useState)(null),n=Object(o.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)(null),l=Object(o.a)(i,2),u=l[0],j=l[1],b=Object(O.b)();function d(){return(d=Object(P.a)(C.a.mark((function e(t){var c,n,s,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(_.isFetching()),c="https://www.omdbapi.com/?apikey=72d7fe9&i="+t,e.prev=2,e.next=5,fetch(c);case 5:return n=e.sent,e.next=8,n.json();case 8:s=e.sent,console.log("Got data: ",s),a=s,b(_.success(a)),console.log("open this movie : ",a),r(Object(f.jsx)(we,{goBack:function(){return r(null)}})),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),b(_.failure());case 19:case"end":return e.stop()}}),e,null,[[2,16]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){e===A?(j("Redo f\xf6r n\xe5gra Movies!"),function(){m.apply(this,arguments)}(b)):e===B?j("V\xe4ntar p\xe5 Movies..."):e===H?(console.log("the movie length: ",t.length),console.log("the movies: ",t),j(t.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(Oe,{movie:e}),Object(f.jsxs)("div",{className:"moviecardbuttons",children:[Object(f.jsx)("button",{className:"infoButton",variant:"outline-secondary",onClick:function(){!function(e){d.apply(this,arguments)}(e.imdbID)},children:"Info"}),Object(f.jsxs)("button",{className:"buyButton",variant:"outline-secondary",onClick:function(){var t;console.log("test info"),t=e,b(ie.addToCart(t))},children:["Buy",Object(f.jsx)("span",{class:"priceTag",children:"\xa0"})]})]})]})})))):j("Kunde inte h\xe4mta Movies")}),[t]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"moviePageTitle",children:Object(f.jsx)(k.a,{left:!0,cascade:!0,children:Object(f.jsx)("p",{children:"Our Exciting Movies"})})}),Object(f.jsx)(me,{placeholder:"SearchMovies"}),a,Object(f.jsx)(k.a,{bottom:!0,children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"four-columns",children:u})})})]});function h(e){var t={Price:49};try{var c=parseInt(e.Year),n=(new Date).getFullYear();t=c>n-2?{Price:129}:c>n-5?{Price:99}:{Price:49}}catch(s){t={Price:49}}return console.log("price",Object(S.a)(Object(S.a)({},e),t)),Object(S.a)(Object(S.a)({},e),t)}function m(){return(m=Object(P.a)(C.a.mark((function e(){var t,c,n,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(R.isFetching()),"https://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=1",e.prev=2,e.next=5,fetch("https://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=1");case 5:return t=e.sent,e.next=8,t.json();case 8:for(c=e.sent,console.log("Got data: ",c),(n=c.Search).map((function(e){if("N/A"!==e.Poster){var t=h(e);b(R.success(t))}})),s=2;s<6;s++)x(s);b($.setCurrentScreen("movie")),console.log("the moviessss : ",n),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),b(R.failure());case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}function x(e){return p.apply(this,arguments)}function p(){return(p=Object(P.a)(C.a.mark((function e(t){var c,n,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(R.isFetching()),c="https://www.omdbapi.com/?apikey=72d7fe9&s=taken&page="+t,e.prev=2,e.next=5,fetch(c);case 5:return n=e.sent,e.next=8,n.json();case 8:s=e.sent,console.log("Got data: ",s),s.Search.map((function(e){if("N/A"!==e.Poster){var t=h(e);b(R.success(t))}})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),b(R.failure());case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}},Ce=(c(188),c(189),function(e){var t=Object(O.b)(),c=Object(O.c)((function(e){return e.shopc}));return Object(f.jsxs)("div",{className:"cartItem",children:[console.log("props",e),Object(f.jsx)("div",{className:"imageButtonsCartItem",children:Object(f.jsx)("img",{className:"posterCartItem",src:e.img,alt:"poster"})}),Object(f.jsxs)("div",{className:"infoCartItem",children:[Object(f.jsxs)("div",{className:"cartItemButtons",children:[Object(f.jsx)("button",{className:"cartItemButton",onClick:function(){console.log("shopcart",c);var n={imdbid:e.imdb};console.log("movieId",n),t(ie.increaseAmountShopCart(n))},children:"Increase"}),Object(f.jsx)("button",{className:"cartItemButton",onClick:function(){console.log("shopcart",c);var n={imdbid:e.imdb};console.log("movieId",n),e.count>1?t(ie.decreaseAmont(n)):t(ie.removeFromCart(n))},children:e.count<2?"Remove":"Decres"})]}),Object(f.jsxs)("div",{className:"cartItemCount",children:["Count: ",e.count]}),Object(f.jsxs)("div",{className:"cartItemPrice",children:["Pris:",(parseInt(e.price)*e.count).toLocaleString(void 0,{minimumFractionDigits:2})," kr!"]}),Object(f.jsx)("div",{className:"cartItemTitle",children:e.title})]})]})}),Se=c(69),Pe=c.n(Se),Ee=c(80),De=c.n(Ee),Fe=Object(j.b)("is adding to shopping history"),Te=Object(j.b)("is resetting to shopping history"),Me={addtousershoppinghistory:Fe,resetusershoppinghistory:Te},Re=Object(j.c)({currentusershoppinghistory:[]},(he={},Object(u.a)(he,Fe,(function(e,t){return{currentusershoppinghistory:[].concat(Object(E.a)(e.currentusershoppinghistory),[t.payload])}})),Object(u.a)(he,Te,(function(e,t){return{currentusershoppinghistory:[]}})),he)),Ae=(c(199),function(){var e=Object(O.b)(),t=Object(s.useState)(!1),c=Object(o.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(s.useState)(""),b=Object(o.a)(j,2),d=b[0],m=b[1],x=Object(s.useState)(!0),p=Object(o.a)(x,2),v=(p[0],p[1]),g=Object(O.c)((function(e){return e.login.currentuser}));function N(e){console.warn(e.target.value),u(e.target.value),null!=e.target.value.length?v(!1):v(!0)}function y(){return(y=Object(P.a)(C.a.mark((function t(c,n){var s,a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("try registering user",c+" "+n),t.next=4,Ne.createUserWithEmailAndPassword(c,n);case 4:s=t.sent,a=s.user,console.log("THIS IS THE RESPONSE",a.uid),e(h.login(a)),console.log("THIS IS THE reducer data after register",g),s&&I(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("error registering user");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function k(){return(k=Object(P.a)(C.a.mark((function t(c,n){var s,a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("try login user",c+" "+n),t.next=4,Ne.signInWithEmailAndPassword(c,n);case 4:s=t.sent,a=s.user,console.log("THIS IS THE RESPONSE",a.uid),e(h.login(a)),console.log("THIS IS THE reducer data after login",g),s&&I(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("error registering user");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function w(e){console.warn(e.target.value),m(e.target.value)}function I(){a(!1)}return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"loginPage",children:Object(f.jsx)("div",{className:"login",children:Object(f.jsx)("form",{className:"login-form",onSubmit:function(e){return function(e){e.preventDefault()}(e)},children:Object(f.jsxs)("ul",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{className:"loginEmail",children:"Email"}),Object(f.jsx)("input",{className:"loginEmailInput",type:"email",onChange:N})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{className:"loginPassword",children:"Password"}),Object(f.jsx)("input",{className:"loginPasswordInput",type:"password",onChange:w})]}),Object(f.jsxs)("div",{className:"buttons",children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",onClick:function(){!function(e,t){k.apply(this,arguments)}(l,d)},children:"LogIn"})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){a(!0)},type:"submit",children:"Register"})}),Object(f.jsx)(Pe.a,{isOpen:n,className:"reg-modal-wrapper",children:Object(f.jsxs)(De.a,{children:[Object(f.jsxs)("div",{className:"modal-header",children:[Object(f.jsx)("h2",{children:"Register Account"}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:I,className:"close",children:"X"})})]}),Object(f.jsxs)("div",{className:"registerDetails",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("label",{className:"email",children:"Email"}),Object(f.jsx)("input",{className:"emailInput",type:"email",onChange:N})]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("label",{className:"password",children:"Password"}),Object(f.jsx)("input",{className:"passwordInput",type:"password",onChange:w})]})]}),Object(f.jsx)("div",{className:"modal-footer",children:Object(f.jsx)("button",{onClick:function(){!function(e,t){y.apply(this,arguments)}(l,d),I()},className:"registerButton",children:"Register"})})]})})]})]})})})})})});c(200);Pe.a.setAppElement("#root");var Be=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),r=Object(o.a)(a,2),i=r[0],u=r[1],j=Object(s.useState)(null),b=Object(o.a)(j,2),d=(b[0],b[1],Object(s.useState)(null)),h=Object(o.a)(d,2),m=(h[0],h[1],Object(s.useState)(!0)),x=Object(o.a)(m,2),p=(x[0],x[1],Object(O.c)((function(e){return e.login.currentuser}))),v=Object(s.useState)(null),g=Object(o.a)(v,2),N=g[0],y=g[1];Object(s.useEffect)((function(){y(p?Object(f.jsx)("button",{onClick:function(){p&&n(!0),u(p.email),console.log("getemail",i)},className:"checkoutButton",type:"submit",children:"Checkout"}):Object(f.jsx)(l.b,{className:"loginCheckout",to:"/userLogIn",children:"Login and Checkout"}))}),[]);var w=0,I=(Object(O.c)((function(e){return e.shopc.map((function(e){try{return w+=parseInt(e.count),console.log("initialshoppingcartitemcount: ",w),w}catch(t){return w}}))})),Object(O.b)()),C=Object(O.c)((function(e){return e.shopc}));console.log("length",C.length);var S="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})),P="xxxxxxxx-xxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}));var E=C.map((function(e){try{return Object(f.jsx)("div",{children:Object(f.jsx)(Ce,{count:e.count,title:e.movie.Title,img:e.movie.Poster,imdb:e.movie.imdbID,price:e.movie.Price})})}catch(t){return[]}}));function D(){console.log("close checkout"),ye.collection("checkout").doc(S).set({key:S,orderNumber:P,email:"email",name:"name",address:"address",orders:C,rated:!1,timestamp:Date.now(),uid:p.uid}).then((function(){console.log("Document successfully written!"),console.log("THIS IS THE reducer data",p)})).catch((function(e){console.error("Error writing document: ",e)})),I(ie.clearCart()),n(!1)}return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"left",children:Object(f.jsx)(k.a,{left:!0,cascade:!0,children:Object(f.jsx)("div",{className:"mainPage",children:E})})}),Object(f.jsx)("div",{className:"right",children:Object(f.jsx)(k.a,{right:!0,cascade:!0,children:Object(f.jsxs)("div",{className:"checkout",children:[Object(f.jsxs)("p",{className:"total",children:["Total(",w,"items):",function(){var e=0;return C.forEach((function(t){e+=t.count*parseFloat(t.movie.Price)})),e}(),"kr"]}),Object(f.jsx)("div",{id:"checkoutDetails",children:Object(f.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault()}(e)},children:Object(f.jsxs)("ul",{className:"form-container",children:[Object(f.jsx)("li",{children:N}),Object(f.jsx)(Pe.a,{isOpen:c,className:"modal-wrapper",children:Object(f.jsxs)(De.a,{children:[Object(f.jsxs)("div",{className:"modal-header",children:[Object(f.jsx)("h2",{children:"Order Confirmation"}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:"close",onClick:D,children:"X"})})]}),Object(f.jsxs)("div",{className:"orderDetails",children:[Object(f.jsx)("h3",{children:"Your order has been placed"}),Object(f.jsxs)("p",{className:"ordernum",children:[Object(f.jsx)("b",{children:"Ordernumber:"})," ",P]}),Object(f.jsxs)("p",{className:"orderemail",children:[Object(f.jsx)("b",{children:"Email:"}),i]})]}),Object(f.jsxs)("div",{className:"modal-footer",children:[Object(f.jsx)("p",{children:"Thankyou for ordering!"}),Object(f.jsx)("button",{onClick:D,className:"btn-close",children:"Close"})]})]})})]})})})]})})})]})})};c(494);var He=function(){return Object(f.jsxs)("div",{className:"footer-container",children:[Object(f.jsx)("div",{class:"footer-links",children:Object(f.jsxs)("div",{className:"footer-link-wrapper",children:[Object(f.jsx)("div",{class:"footer-link-items",children:Object(f.jsx)(l.b,{to:"/",children:"Home"})}),Object(f.jsx)("div",{class:"footer-link-items",children:Object(f.jsx)(l.b,{to:"/movie",children:"Movie"})}),Object(f.jsx)("div",{class:"footer-link-items",children:Object(f.jsx)(l.b,{to:"/customerorders",children:"CustomerOrders"})})]})}),Object(f.jsx)("section",{class:"social-media",children:Object(f.jsxs)("div",{class:"social-media-wrap",children:[Object(f.jsx)("div",{class:"footer-logo",children:Object(f.jsx)(l.b,{to:"/",className:"social-logo",children:"Movie WebbShop"})}),Object(f.jsx)("small",{class:"website-rights",children:"Movie \xa9 2020"}),Object(f.jsxs)("div",{class:"social-icons",children:[Object(f.jsx)(l.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(f.jsx)("i",{class:"fab fa-facebook-f"})}),Object(f.jsx)(l.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(f.jsx)("i",{class:"fab fa-instagram"})}),Object(f.jsx)(l.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(f.jsx)("i",{class:"fab fa-youtube"})}),Object(f.jsx)(l.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(f.jsx)("i",{class:"fab fa-twitter"})}),Object(f.jsx)(l.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(f.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})},Le=(c(495),function(){var e=Object(O.b)(),t=Object(s.useState)(null),c=Object(o.a)(t,2),n=(c[0],c[1],Object(s.useState)(4.3)),a=Object(o.a)(n,2),r=a[0],i=a[1],l=Object(s.useState)("abc"),u=Object(o.a)(l,2),j=u[0],b=u[1],d=Object(O.c)((function(e){return e.login.currentuser})),h=Object(O.c)((function(e){return e.shoppinghistory.currentusershoppinghistory})),m=function(e){console.log(e),i(e),console.log("movierating: ",r)};function x(e){console.warn(e.target.value),b(e.target.value)}var p=function(){var e=Object(P.a)(C.a.mark((function e(t,c,n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ye.collection("ratings").doc().set({imdbID:t,movierating:c,usercomment:n,uid:d.uid}).then((function(){})).catch((function(e){console.error("Error writing document: ",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),v=function(){var t=Object(P.a)(C.a.mark((function t(){var c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Me.resetusershoppinghistory()),c=ye.collection("checkout"),t.next=4,c.get();case 4:t.sent.docs.forEach((function(t){console.log("this is my returned data from db",t.data()),t.data().uid===d.uid&&e(Me.addtousershoppinghistory(t.data().orders))}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){v(),console.log("currentusershppinghistory: ",h)}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"four-columns",children:h.map((function(e){return e.map((function(e){return Object(f.jsxs)("div",{className:"customerOrders",children:[Object(f.jsx)(Oe,{movie:e.movie}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("p",{className:"rating",children:"Rating:  "}),Object(f.jsx)(xe.a,{className:"starsRating",count:5,onChange:m,size:36,value:r,edit:!0,color2:"#51E706",color1:"#F8F3F1"})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"column",children:Object(f.jsx)("p",{className:"comment",children:"Comment:"})}),Object(f.jsx)("input",{className:"commentInput",ref:b,type:"text",onChange:x})]}),Object(f.jsx)("button",{className:"sendRating",onClick:function(){var t,c;t=e.movie.imdbID,c=r,console.log("movieratingssss: ",c),console.log("moviecomment: ",j),console.log("imdbID: ",t),p(t,r,j),alert("Thank you for your rating !!")},children:"Send Rating!"})]})}))}))})})});var We=function(){var e=Object(O.c)((function(e){return e.login.currentuser}));return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{className:"App-header"}),Object(f.jsx)("main",{children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(g,{}),Object(f.jsxs)(N.c,{children:[Object(f.jsx)(N.a,{exact:!0,path:"/",children:Object(f.jsx)(w,{})}),Object(f.jsx)(N.a,{exact:!0,path:"/movie",children:Object(f.jsx)(Ie,{})}),Object(f.jsx)(N.a,{exact:!0,path:"/checkoutIcon",children:Object(f.jsx)(Be,{})}),Object(f.jsx)(N.a,{exact:!0,path:"/userLogIn",children:e?Object(f.jsx)(Be,{}):Object(f.jsx)(Ae,{})}),Object(f.jsx)(N.a,{exact:!0,path:"/customerorders",children:e?Object(f.jsx)(Le,{}):Object(f.jsx)(Ae,{})})]}),Object(f.jsx)(He,{})]})})]})},Ye=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,498)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))},Ge=c(37),Ke=Object(Ge.b)({movie:G,highlightmovie:V,shopc:oe,currentscrn:ee,login:m,shoppinghistory:Re}),qe=Object(j.a)({reducer:Ke});i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(O.a,{store:qe,children:Object(f.jsx)(We,{})})}),document.getElementById("root")),Ye()},84:function(e,t,c){}},[[496,1,2]]]);
//# sourceMappingURL=main.206fd0d4.chunk.js.map