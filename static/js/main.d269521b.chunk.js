(this["webpackJsonpx-lab_test"]=this["webpackJsonpx-lab_test"]||[]).push([[0],{30:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),o=n.n(a),s=n(19),i=n.n(s),r=(n(30),n(9)),l=n(12),u=n(7),j=n(2);var b=function(t){var e=t.token,n=t.onSignOut;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(j.b,{path:"/login",children:Object(c.jsx)("p",{className:"header__title",children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"})}),Object(c.jsxs)(j.b,{exact:!0,path:"/",children:[Object(c.jsxs)("p",{className:"header__email",children:["Auth token: ",e]}),Object(c.jsx)("button",{className:"header__button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})},h=function(t){var e=t.sortId;return Object(c.jsx)("button",{className:"table__button",name:"age",onClick:e,children:"Id"})},d=function(t){var e=t.sortName;return Object(c.jsx)("button",{className:"table__button",name:"age",onClick:e,children:"Username"})};function p(t){var e=t.data;return Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"table__table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"table__head",children:[Object(c.jsx)("th",{children:"Id"}),Object(c.jsx)("th",{children:"Username"}),Object(c.jsx)("th",{children:"Superuser"}),Object(c.jsx)("th",{children:"Staff"}),Object(c.jsx)("th",{children:"Active"})]},"head")}),Object(c.jsx)("tbody",{children:e.map((function(t){return Object(c.jsxs)("tr",{className:"table__cell",children:[Object(c.jsx)("td",{children:t.id}),Object(c.jsx)("td",{children:t.username}),Object(c.jsx)("td",{children:"".concat(t.is_superuser)}),Object(c.jsx)("td",{children:"".concat(t.is_staff)}),Object(c.jsx)("td",{children:"".concat(t.is_active)})]},t.id)}))})]})})}var O=function(t){return Object(c.jsxs)("div",{className:"table",children:[Object(c.jsx)("h1",{className:"table__title",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}),Object(c.jsx)("h2",{className:"table__subtitle",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(c.jsxs)("div",{className:"table__buttons",children:[Object(c.jsx)(h,{sortId:t.onIdClick}),Object(c.jsx)(d,{sortName:t.onUsernameClick})]}),Object(c.jsx)(p,{data:t.users})]})};var m=function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("p",{className:"footer__copyright",children:"X-Lab test"})})},f=n(21),x=n(22),_={url:"http://agile-garden-50413.herokuapp.com/api/"},g=new(function(){function t(e){Object(f.a)(this,t),this._url=e.url}return Object(x.a)(t,[{key:"authentication",value:function(t){var e=localStorage.getItem("token");return fetch("".concat(this._url).concat(t),{headers:{Authorization:"Token ".concat(e)}})}},{key:"_getServerData",value:function(t){return t.ok?t.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status)))}},{key:"getProfileData",value:function(){var t=this;return this.authentication("users").then((function(e){return t._getServerData(e)}))}},{key:"getAllData",value:function(){return Promise.all([this.getProfileData()])}}]),t}())(_),v="http://agile-garden-50413.herokuapp.com/api",k=n(23),N=n(24),S=function(t){var e=t.component,n=Object(N.a)(t,["component"]);return Object(c.jsx)(j.b,{children:function(){return n.loggedIn?Object(c.jsx)(e,Object(k.a)({},n)):Object(c.jsx)(j.a,{to:"./login"})}})},C=n.p+"static/media/sucess.a9eb6caf.svg",y=n.p+"static/media/fail.d4ce2a26.svg";var I=function(t){return Object(c.jsx)("section",{className:t.isOpen?"popup popup_opened":"popup",onClick:t.onPopupOverlayClose,children:Object(c.jsx)("div",{className:"popup__container",children:Object(c.jsxs)("div",{className:"popup__area popup__area_tooltip",children:[Object(c.jsx)("img",{className:"popup__tooltip-icon",src:t.isTooltipStatus?C:y,alt:"\u0438\u043a\u043e\u043d\u043a\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430"}),Object(c.jsx)("h2",{className:"popup__tooltip-text",children:t.isTooltipStatus?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(c.jsx)("button",{className:"popup__close",type:"button",onClick:t.onClose})]})})})};function T(t){var e=t.handleLogin,n=Object(a.useState)(""),o=Object(u.a)(n,2),s=o[0],i=o[1],r=Object(a.useState)(""),l=Object(u.a)(r,2),j=l[0],b=l[1];return Object(c.jsxs)("form",{className:"auth",method:"POST",name:"login",onSubmit:function(t){t.preventDefault(),s&&s&&e(j,s)},noValidate:!0,children:[Object(c.jsx)("h2",{className:"auth__head",children:"\u0412\u0445\u043e\u0434"}),Object(c.jsx)("input",{className:"auth__input",type:"email",name:"email",placeholder:"E-mail",value:s,onChange:function(t){i(t.target.value)}}),Object(c.jsx)("input",{className:"auth__input",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:j,onChange:function(t){b(t.target.value)}}),Object(c.jsx)("button",{className:"auth__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})}var P=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],s=e[1],i=Object(a.useState)(!1),r=Object(u.a)(i,2),h=r[0],d=r[1],p=Object(a.useState)(!1),f=Object(u.a)(p,2),x=f[0],_=f[1],k=Object(a.useState)(""),N=Object(u.a)(k,2),C=N[0],y=N[1],P=Object(j.g)();function A(){_(!x)}function D(){d(!1)}Object(a.useEffect)((function(){x&&g.getAllData().then((function(t){var e=Object(u.a)(t,1)[0];s(e)})).catch((function(t){console.log(t)}))}),[x]),Object(a.useEffect)((function(){var t=localStorage.getItem("token");t&&function(t){return console.log(t),fetch("".concat(v,"/users"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(t)}}).then((function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))}))}(t).then((function(e){e&&(y(t),A(),P.push("/"))})).catch((function(t){console.log(t)}))}),[]);var w=o.a.useState(!0),E=Object(u.a)(w,2),L=E[0],F=E[1],U=o.a.useState(!0),z=Object(u.a)(U,2),J=z[0],B=z[1];return Object(c.jsx)("div",{className:"body",onKeyDown:function(t){27===t.keyCode&&D()},tabIndex:"0",children:Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)(b,{token:C,onSignOut:function(){(function(t){return fetch("".concat(v,"/token/logout"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(t)}})})(localStorage.getItem("token")).then((function(t){localStorage.removeItem("token"),console.log(localStorage.removeItem("token")),_(!1),P.push("/x-lab_test/login"),console.log(t+"1")}))}}),Object(c.jsxs)(j.d,{children:[Object(c.jsxs)(j.b,{exact:!0,path:"/x-lab_test/",children:[x?Object(c.jsx)(j.a,{to:"/x-lab_test"}):Object(c.jsx)(j.a,{to:"/x-lab_test/login"}),Object(c.jsx)(S,{exact:!0,path:"/x-lab_test/",users:n,loggedIn:x,component:O,onIdClick:function(){s(L?Object(l.a)(n.sort((function(t,e){return t.id-e.id}))):Object(l.a)(n.sort((function(t,e){return e.id-t.id})))),F(!L)},onUsernameClick:function(){s(J?Object(l.a)(n.sort((function(t,e){return t.username>e.username?1:-1}))):Object(l.a)(n.sort((function(t,e){return t.username<e.username?1:-1})))),B(!J)}})]}),Object(c.jsx)(j.b,{path:"/x-lab_test/login",children:Object(c.jsx)(T,{handleLogin:function(t,e){(function(t,e){return fetch("".concat(v,"/token/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,username:e})}).then((function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))}))})(t,e).then((function(t){t.auth_token&&(A(),localStorage.setItem("token",t.auth_token),P.push("/x-lab_test/"))})).catch((function(t){d(!0),setTimeout((function(){return d(!1)}),2e3),console.log(t)}))}})})]}),Object(c.jsx)(m,{}),Object(c.jsx)(I,{isOpen:h,onClose:D,onPopupOverlayClose:function(t){t.target.classList.contains("popup")&&D()}})]})})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),o(t),s(t)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(r.a,{children:Object(c.jsx)(P,{})})}),document.getElementById("root")),A()}},[[36,1,2]]]);
//# sourceMappingURL=main.d269521b.chunk.js.map