(this.webpackJsonpfriday_project=this.webpackJsonpfriday_project||[]).push([[0],{11:function(e,t,n){e.exports={main:"Login_main__2tAsx",mainBlock:"Login_mainBlock__1G5x2",title:"Login_title__lZBdn",subTitle:"Login_subTitle__14e7c",form:"Login_form__1hhFk",formInput:"Login_formInput__16KSn",photoEye:"Login_photoEye__wLJWK",forgotPassword:"Login_forgotPassword__1fTzC",loginButton:"Login_loginButton__1Sccr",askAboutAccount:"Login_askAboutAccount__nCJ-J",singUp:"Login_singUp__3JpKq",formError:"Login_formError__1GuHw"}},16:function(e,t,n){e.exports={main:"PasswordRecovery_main__2vZuh",mainBlock:"PasswordRecovery_mainBlock__reQMx",title:"PasswordRecovery_title__2zmrz",subTitle:"PasswordRecovery_subTitle__A7aLL",form:"PasswordRecovery_form__3Cpq3",formInput:"PasswordRecovery_formInput__1TdMV",textAfterInput:"PasswordRecovery_textAfterInput__1m3Y-",mainButton:"PasswordRecovery_mainButton__w_w48",askAboutAccount:"PasswordRecovery_askAboutAccount__2DHa5",tryLogin:"PasswordRecovery_tryLogin__2RmXp",formError:"PasswordRecovery_formError__3uCwj"}},17:function(e,t,n){e.exports={main:"NewPassword_main__2CUAN",mainBlock:"NewPassword_mainBlock__RS3PP",title:"NewPassword_title__abATx",subTitle:"NewPassword_subTitle__2Hpgc",form:"NewPassword_form__uvyTc",formInput:"NewPassword_formInput__2sRYK",textAfterInput:"NewPassword_textAfterInput__JX1IF",mainButton:"NewPassword_mainButton__2J3Pe",askAboutAccount:"NewPassword_askAboutAccount__SYMGX",tryLogin:"NewPassword_tryLogin__1Nj_k",formError:"NewPassword_formError__12dAo"}},25:function(e,t,n){e.exports={app:"App_app__3B6xn",navBar:"App_navBar__Uw4Ck"}},28:function(e,t,n){e.exports={main:"Packs_main__2OusS",flexCards:"Packs_flexCards__1oujt",flexCardsTitle:"Packs_flexCardsTitle__1KS4g"}},29:function(e,t,n){},40:function(e,t,n){e.exports={main:"Profile_main__2R8MS"}},41:function(e,t,n){e.exports={logoutButton:"LogOut_logoutButton__3HU60"}},42:function(e,t,n){e.exports={main:"Component404_main__1G5Ai"}},43:function(e,t,n){e.exports={main:"OnePack_main__2nR7C",flexCards:"OnePack_flexCards__1By0q",flexCardsTitle:"OnePack_flexCardsTitle__2UEEH"}},7:function(e,t,n){e.exports={main:"Registartion_main__2nFAq",mainBlock:"Registartion_mainBlock__2ngAa",title:"Registartion_title__10gqU",subTitle:"Registartion_subTitle__2QVU-",form:"Registartion_form__21zcr",formInput:"Registartion_formInput__2GrTG",photoEye:"Registartion_photoEye__27lRL",formInputLastChild:"Registartion_formInputLastChild__2-cEU",formError:"Registartion_formError__3hMlL",flexButtons:"Registartion_flexButtons__3Df7a",cancelButton:"Registartion_cancelButton__jWrpm",logisterButton:"Registartion_logisterButton__2yPZA"}},72:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=(n(29),n(22)),s=n(2),o=n(38),i=n.n(o).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),u=function(e){return i.post("auth/register",e)},d=function(e){return i.post("auth/login",e)},l=function(){return i.delete("auth/me",{})},j=function(e){return i.post("auth/forgot",e)},b=function(){return i.post("auth/me")},O=function(e){return i.post("auth/set-new-password",e)},_=function(){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return i.get("cards/pack?page=".concat(e,"&pageCount=").concat(t,"&sortPacks=0updated"))},p=function(e){return i.post("cards/pack",e)},f=function(e){return i.delete("cards/pack?id=".concat(e))},m={status:"succeeded"},h=function(e){return{type:"APP/SET-STATUS",status:e}},x={isLoggedIn:!1,dataLogin:{_id:"",email:"",name:"",avatar:null,publicCardPacksCount:0,created:"",updated:"",isAdmin:!1,verified:!1,rememberMe:!1,error:""},responseError:"",token:""},v=function(e){return{type:"LOGIN/SET-LOGIN-DATA",value:e}},g=function(e){return{type:"LOGIN/SET-DATA",data:e}},E=function(e){return{type:"LOGIN/SET-RESPONSE-ERROR",responseError:e}},R=function(e){return{type:"LOGIN/SET-RESPONSE-TOKEN",token:e}};!function(e){e.SET_RECOVERY_FlAG="SET_RECOVERY_FlAG",e.SET_RESPONSE_ERROR_PASSWORD="SET_RESPONSE_ERROR_PASSWORD"}(c||(c={}));var N,w={isRecovered:!1,responseError:"",isInfo:!0},S=function(e){return{type:c.SET_RECOVERY_FlAG,isRecovered:e}},k=function(e){return{type:c.SET_RESPONSE_ERROR_PASSWORD,responseError:e}},T=n(39);!function(e){e.SET_REGISTRATION_DATA="SET_REGISTRATION_DATA",e.SET_RESPONSE_ERROR="SET_RESPONSE_ERROR"}(N||(N={}));var C,P={isRegistration:!1,responseError:""},y=function(e){return{type:N.SET_RESPONSE_ERROR,responseError:e}},A=function(e){return function(t){t(h("loading")),u(e).then((function(e){var n;t((n=!0,{type:N.SET_REGISTRATION_DATA,isRegistration:n})),t(h("succeeded"))})).catch((function(e){t(y(e.response.data.error))}))}};!function(e){e.IS_AUTH="IS_AUTH"}(C||(C={}));var I,L={isAuth:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.IS_AUTH:return Object(s.a)(Object(s.a)({},e),{},{isAuth:t.isAuth});default:return e}};!function(e){e.GET_CARDS_PACK="GET_CARDS_PACK"}(I||(I={}));var G={cardPacks:[{_id:"",user_id:"",name:"",cardsCount:0,created:"",updated:""}],cardPacksTotalCount:0,maxCardsCount:0,minCardsCount:0,page:0,pageCount:0},D=function(){return function(e){_().then((function(t){var n;e((n=t.data,{type:I.GET_CARDS_PACK,data:n}))})).catch((function(e){}))}},U=Object(r.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET-LOGIN-DATA":return Object(s.a)(Object(s.a)({},e),{},{isLoggedIn:t.value});case"LOGIN/SET-DATA":return Object(s.a)(Object(s.a)({},e),{},{dataLogin:t.data});case"LOGIN/SET-RESPONSE-ERROR":return Object(s.a)(Object(s.a)({},e),{},{responseError:t.responseError});case"LOGIN/SET-RESPONSE-TOKEN":return Object(s.a)(Object(s.a)({},e),{},{token:t.token});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.SET_REGISTRATION_DATA:return Object(s.a)(Object(s.a)({},e),{},{isRegistration:t.isRegistration});case N.SET_RESPONSE_ERROR:return Object(s.a)(Object(s.a)({},e),{},{responseError:t.responseError});default:return Object(s.a)({},e)}},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_RECOVERY_FlAG:return Object(s.a)(Object(s.a)({},e),{},{isRecovered:t.isRecovered});case c.SET_RESPONSE_ERROR_PASSWORD:return Object(s.a)(Object(s.a)({},e),{},{responseError:t.responseError});default:return e}},isAuth:B,cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.GET_CARDS_PACK:return Object(s.a)(Object(s.a)({},e),{},{cardPacks:t.data.cardPacks.map((function(e){return Object(s.a)({},e)}))});default:return e}}}),K=Object(r.c)(U,Object(r.a)(T.a)),F=n(20),J=n.n(F),H=n(5),M=n(25),Y=n.n(M),z=n(6),V=n(11),W=n.n(V),Z=n(3),q=n(0),X=function(){var e=Object(a.useState)(""),t=Object(z.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(z.a)(r,2),o=s[0],i=s[1],u=Object(a.useState)(!1),l=Object(z.a)(u,2),j=l[0],b=l[1],O=Object(a.useState)("password"),_=Object(z.a)(O,2),p=_[0],f=_[1],m=Object(Z.b)(),x=Object(Z.c)((function(e){return e.login.isLoggedIn})),N=Object(Z.c)((function(e){return e.login.responseError}));if(x)return Object(q.jsx)(H.a,{to:ke.profile});return Object(q.jsx)("div",{className:W.a.main,children:Object(q.jsxs)("div",{className:W.a.mainBlock,children:[Object(q.jsx)("div",{className:W.a.title,children:"It-incubator"}),Object(q.jsx)("div",{className:W.a.subTitle,children:"Sign In"}),Object(q.jsxs)("div",{className:W.a.form,children:[Object(q.jsx)("div",{className:W.a.formInput,children:Object(q.jsx)("input",{type:"email",placeholder:"Enter your email",onChange:function(e){c(e.currentTarget.value),m(E(""))}})}),Object(q.jsxs)("div",{className:W.a.formInput,children:[Object(q.jsx)("input",{type:p,placeholder:"Enter your password",onChange:function(e){i(e.currentTarget.value),m(E(""))}}),Object(q.jsx)("span",{className:W.a.photoEye,onClick:function(){"password"===p?f("text"):"text"===p&&f("password")}}),Object(q.jsx)("span",{className:W.a.formError,children:N})]}),Object(q.jsxs)("div",{className:W.a.forgotPassword,children:[Object(q.jsx)("input",{type:"checkbox",checked:j,onChange:function(e){b(e.currentTarget.checked)}}),"RememberMe"]}),Object(q.jsx)("div",{children:Object(q.jsx)("button",{className:W.a.loginButton,onClick:function(){var e;m((e={email:n,password:o,rememberMe:j},function(t){t(h("loading")),d(e).then((function(e){t(v(!0)),t(g(e.data)),t(R(e.data.token)),t(h("succeeded"))})).catch((function(e){t(E(e.response.data.error))}))}))},children:"Login"})})]}),Object(q.jsx)("div",{className:W.a.askAboutAccount,children:Object(q.jsx)("span",{children:"Don\u2019t have an account?"})}),Object(q.jsx)("div",{className:W.a.singUp,children:Object(q.jsx)("span",{children:"Sign Up"})})]})})},$=n(7),Q=n.n($),ee=function(){var e=Object(Z.b)(),t=Object(Z.c)((function(e){return e.registration.isRegistration})),n=Object(Z.c)((function(e){return e.registration.responseError})),c=Object(Z.c)((function(e){return e.login.isLoggedIn})),r=Object(a.useState)(""),s=Object(z.a)(r,2),o=s[0],i=s[1],u=Object(a.useState)(""),d=Object(z.a)(u,2),l=d[0],j=d[1],b=Object(a.useState)(""),O=Object(z.a)(b,2),_=O[0],p=O[1],f=Object(a.useState)(""),m=Object(z.a)(f,2),h=m[0],x=m[1],v=Object(a.useState)("password"),g=Object(z.a)(v,2),E=g[0],R=g[1],N=Object(a.useState)("password"),w=Object(z.a)(N,2),S=w[0],k=w[1],T=function(){/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(o)?l===_?(e(A({email:o,password:l})),i(""),j(""),p(""),x("")):(j(""),p(""),x("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442")):x("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d")};return t?Object(q.jsx)(H.a,{to:ke.login}):c?Object(q.jsx)(H.a,{to:ke.profile}):Object(q.jsx)("div",{className:Q.a.main,children:Object(q.jsxs)("div",{className:Q.a.mainBlock,children:[Object(q.jsx)("div",{className:Q.a.title,children:"It-incubator"}),Object(q.jsx)("div",{className:Q.a.subTitle,children:"Sign Up"}),Object(q.jsxs)("div",{className:Q.a.form,children:[Object(q.jsx)("div",{className:Q.a.formInput,children:Object(q.jsx)("input",{type:"email",placeholder:"Enter your email",value:o,onChange:function(e){i(e.currentTarget.value)}})}),Object(q.jsxs)("div",{className:"".concat(Q.a.formInput),children:[Object(q.jsx)("input",{type:E,placeholder:"Enter your password",value:l,onChange:function(e){j(e.currentTarget.value)}}),Object(q.jsx)("span",{className:Q.a.photoEye,onClick:function(){"password"===E?R("text"):"text"===E&&R("password")}})]}),Object(q.jsxs)("div",{className:"".concat(Q.a.formInput," ").concat(Q.a.formInputLastChild),children:[Object(q.jsx)("input",{type:S,placeholder:"Confirm your password",value:_,onKeyPress:function(e){13===e.charCode&&T()},onChange:function(e){p(e.currentTarget.value)}}),Object(q.jsx)("span",{className:Q.a.photoEye,onClick:function(){"password"===S?k("text"):"text"===S&&k("password")}}),Object(q.jsx)("span",{className:Q.a.formError,children:h||(n||"")})]}),Object(q.jsxs)("div",{className:Q.a.flexButtons,children:[Object(q.jsx)("div",{children:Object(q.jsx)("button",{className:Q.a.cancelButton,onClick:function(t){i(""),j(""),p(""),x(""),e(y(""))},children:"Cancel"})}),Object(q.jsx)("div",{children:Object(q.jsx)("button",{className:Q.a.logisterButton,onClick:T,children:"Register"})})]})]})]})})},te=n(40),ne=n.n(te),ce=n(41),ae=n.n(ce),re=function(){var e=Object(Z.b)(),t=Object(a.useCallback)((function(){e((function(e){e(h("loading")),l().then((function(t){e(v(!1)),e(h("succeeded"))})).catch((function(t){e(E(t.response.data.error))}))}))}),[e]);return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)("button",{className:ae.a.logoutButton,onClick:t,children:"LOGOUT"})})},se=function(){var e=Object(Z.b)(),t=Object(Z.c)((function(e){return e.login.dataLogin})),n=Object(Z.c)((function(e){return e.login.isLoggedIn}));return Object(a.useEffect)((function(){t.created||e((function(e){b().then((function(t){e(g(t.data)),e(v(!0)),e(R(t.data.token))})).catch((function(t){e(v(!1))}))}))}),[]),n?Object(q.jsxs)("div",{className:ne.a.main,children:[JSON.stringify(t),Object(q.jsx)("button",{children:Object(q.jsx)(re,{})})]}):Object(q.jsx)(H.a,{to:ke.login})},oe=n(16),ie=n.n(oe),ue=function(){var e=Object(Z.c)((function(e){return e.passwordRecovery.isRecovered})),t=Object(Z.c)((function(e){return e.passwordRecovery.responseError})),n=Object(Z.b)(),c=Object(a.useState)(""),r=Object(z.a)(c,2),s=r[0],o=r[1],i=Object(a.useState)(!1),u=Object(z.a)(i,2),d=u[0],l=u[1];if(e)return Object(q.jsx)(H.a,{to:"/newPassword"});var b=function(){l(!0)};return d?Object(q.jsx)(H.a,{to:"/login"}):Object(q.jsx)("div",{className:ie.a.main,children:Object(q.jsxs)("div",{className:ie.a.mainBlock,children:[Object(q.jsx)("div",{className:ie.a.title,children:"It-incubator"}),Object(q.jsx)("div",{className:ie.a.subTitle,children:"Forgot your password?"}),Object(q.jsxs)("div",{className:ie.a.form,children:[Object(q.jsxs)("div",{className:ie.a.formInput,children:[Object(q.jsx)("input",{type:"email",placeholder:"Enter your email",onChange:function(e){o(e.currentTarget.value),n(k(""))},value:s}),Object(q.jsx)("span",{className:ie.a.formError,children:t})]}),Object(q.jsx)("p",{className:ie.a.textAfterInput,children:"Enter your email address and we will send you further instructions"}),Object(q.jsx)("div",{children:Object(q.jsx)("button",{className:ie.a.mainButton,onClick:function(){n(function(e){return function(t){t(h("loading")),j(e).then((function(e){t(S(!0)),t(h("succeeded"))})).catch((function(e){t(k(e.response.data.error)),t(h("succeeded"))}))}}({email:s,from:"test-front-admin <ai73a@yandex.by>)",message:"<div style=\"background-color: lime; padding: 15px\"> \n                        password recovery link: <a href='https://tropicdenis.github.io/friday_project/#/newPassword/$token$'>link</a>\n                      </div>"}))},children:"Send Instructions"})})]}),Object(q.jsx)("div",{className:ie.a.askAboutAccount,onClick:b,children:Object(q.jsx)("span",{children:"Did you remember your password?"})}),Object(q.jsx)("div",{className:ie.a.tryLogin,onClick:b,children:Object(q.jsx)("span",{children:"Try logging in"})})]})})},de=n(17),le=n.n(de),je=function(){var e=Object(Z.c)((function(e){return e.passwordRecovery.isInfo})),t=Object(Z.b)();t(S(!1));var n=Object(H.g)().token,c=Object(a.useState)(""),r=Object(z.a)(c,2),s=r[0],o=r[1];return e?Object(q.jsx)("div",{className:le.a.main,children:Object(q.jsxs)("div",{className:le.a.mainBlock,children:[Object(q.jsx)("div",{className:le.a.title,children:"It-incubator"}),Object(q.jsx)("div",{className:le.a.subTitle,children:"Forgot your password?"}),Object(q.jsxs)("div",{className:le.a.form,children:[Object(q.jsxs)("div",{className:le.a.formInput,children:[Object(q.jsx)("input",{type:"password",placeholder:"Enter your new password",value:s,onChange:function(e){o(e.currentTarget.value)}}),Object(q.jsx)("span",{className:le.a.formError})]}),Object(q.jsx)("p",{className:le.a.textAfterInput,children:"Create new password and we will send you further instructions to email"}),Object(q.jsx)("div",{children:Object(q.jsx)("button",{onClick:function(){var e;t((e={password:s,resetPasswordToken:n},function(t){t(h("loading")),O(e).then((function(e){t(h("succeeded"))})).catch((function(e){t(h("succeeded"))}))}))},className:le.a.mainButton,children:"Create new password"})})]})]})}):Object(q.jsx)(H.a,{to:ke.login})},be=n(42),Oe=n.n(be),_e=function(){return Object(q.jsx)("div",{className:Oe.a.main,children:"Page not found!"})},pe=n(9),fe=n(8),me=n.n(fe),he=function(){return Object(q.jsxs)("nav",{className:me.a.nav,children:[Object(q.jsx)("div",{className:"".concat(me.a.item," ").concat(me.a.active),children:Object(q.jsx)(pe.b,{to:"/registration",activeClassName:me.a.activeLink,children:"Registration"})}),Object(q.jsx)("div",{className:me.a.item,children:Object(q.jsx)(pe.b,{to:"/login",activeClassName:me.a.activeLink,children:"Login"})}),Object(q.jsx)("div",{className:me.a.item,children:Object(q.jsx)(pe.b,{to:"/profile",activeClassName:me.a.activeLink,children:"Profile"})}),Object(q.jsx)("div",{className:me.a.item,children:Object(q.jsx)(pe.b,{to:"/passwordRecovery",activeClassName:me.a.activeLink,children:"PasswordRecovery"})}),Object(q.jsx)("div",{className:me.a.item,children:Object(q.jsx)(pe.b,{to:"/newPassword/",activeClassName:me.a.activeLink,children:"NewPassword"})}),Object(q.jsx)("div",{className:me.a.item,children:Object(q.jsx)(pe.b,{to:"/pack/",activeClassName:me.a.activeLink,children:"Pack"})})]})},xe=n.p+"static/media/preloader.b0090460.svg",ve=function(){return Object(q.jsx)("img",{src:xe,alt:""})},ge=n(28),Ee=n.n(ge),Re=n(43),Ne=n.n(Re),we=function(e){return Object(q.jsxs)("div",{className:Ne.a.flexCards,children:[Object(q.jsx)("div",{children:e.name}),Object(q.jsx)("div",{children:e.cardsCount}),Object(q.jsx)("div",{children:e.updated}),Object(q.jsx)("div",{children:Object(q.jsx)("button",{onClick:function(t){e.onClickDeletePack(e.packId)},children:"delete"})}),Object(q.jsx)("div",{children:Object(q.jsx)("button",{children:"update"})}),Object(q.jsx)("div",{children:Object(q.jsx)("a",{href:"#",children:"cards"})})]})},Se=function(){console.log("main Pack");var e=Object(Z.b)(),t=Object(Z.c)((function(e){return e.cards})),n=Object(a.useState)(""),c=Object(z.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){e(D())}),[]);var o={name:r},i=Object(a.useCallback)((function(t){var n;e((n=t,function(e){f(n).then((function(t){e(D())})).catch((function(e){}))}))}),[t]),u=t.cardPacks.map((function(e){return Object(q.jsx)(we,{packId:e._id,name:e.name,cardsCount:e.cardsCount,updated:e.updated,onClickDeletePack:i})}));return Object(q.jsxs)("div",{className:Ee.a.main,children:[Object(q.jsx)("div",{children:"PacksPage"}),Object(q.jsxs)("div",{className:Ee.a.flexCardsTitle,children:[Object(q.jsx)("div",{children:"name"}),Object(q.jsx)("div",{children:"cardsCount"}),Object(q.jsx)("div",{children:"updated"}),Object(q.jsx)("div",{children:Object(q.jsx)("input",{type:"text",value:r,onChange:function(e){s(e.currentTarget.value)}})}),Object(q.jsx)("div",{children:Object(q.jsx)("button",{onClick:function(t){e(function(e){return function(t){p(e).then((function(e){t(D())})).catch((function(e){}))}}({cardsPack:o})),s("")},children:"add"})})]}),Object(q.jsx)("div",{children:u})]})},ke={login:"/login",registration:"/registration",profile:"/profile",Component404:"/404",passwordRecovery:"/passwordRecovery",newPassword:"/newPassword/:token?",pack:"/pack"},Te=function(){var e=Object(Z.c)((function(e){return e.app.status}));return Object(q.jsxs)("div",{className:Y.a.app,children:[Object(q.jsx)("div",{className:Y.a.navBar,children:Object(q.jsx)(he,{})}),"loading"===e&&Object(q.jsx)(ve,{}),Object(q.jsxs)(H.d,{children:[Object(q.jsx)(H.b,{path:ke.login,render:function(){return Object(q.jsx)(X,{})}}),Object(q.jsx)(H.b,{path:ke.registration,render:function(){return Object(q.jsx)(ee,{})}}),Object(q.jsx)(H.b,{path:ke.profile,render:function(){return Object(q.jsx)(se,{})}}),Object(q.jsx)(H.b,{path:ke.Component404,render:function(){return Object(q.jsx)(_e,{})}}),Object(q.jsx)(H.b,{path:ke.passwordRecovery,render:function(){return Object(q.jsx)(ue,{})}}),Object(q.jsx)(H.b,{path:ke.newPassword,render:function(){return Object(q.jsx)(je,{})}}),Object(q.jsx)(H.b,{path:ke.pack,render:function(){return Object(q.jsx)(Se,{})}}),Object(q.jsx)(H.a,{from:"/",to:ke.profile}),Object(q.jsx)(H.a,{from:"*",to:"/404"})]})]})};J.a.render(Object(q.jsx)(Z.a,{store:K,children:Object(q.jsx)(pe.a,{children:Object(q.jsx)(Te,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={nav:"Navbar_nav__3F_zz",item:"Navbar_item__2ehsX",activeLink:"Navbar_activeLink__3dl9h"}}},[[72,1,2]]]);
//# sourceMappingURL=main.2710e7fd.chunk.js.map