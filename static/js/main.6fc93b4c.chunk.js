(this.webpackJsonpfriday_project=this.webpackJsonpfriday_project||[]).push([[0],{14:function(e,t,n){e.exports={nav:"Navbar_nav__3F_zz",item:"Navbar_item__2ehsX",activeLink:"Navbar_activeLink__3dl9h"}},16:function(e,t,n){e.exports={main:"PasswordRecovery_main__2vZuh",mainBlock:"PasswordRecovery_mainBlock__reQMx",title:"PasswordRecovery_title__2zmrz",subTitle:"PasswordRecovery_subTitle__A7aLL",form:"PasswordRecovery_form__3Cpq3",formInput:"PasswordRecovery_formInput__1TdMV",textAfterInput:"PasswordRecovery_textAfterInput__1m3Y-",mainButton:"PasswordRecovery_mainButton__w_w48",askAboutAccount:"PasswordRecovery_askAboutAccount__2DHa5",tryLogin:"PasswordRecovery_tryLogin__2RmXp",formError:"PasswordRecovery_formError__3uCwj"}},17:function(e,t,n){e.exports={main:"NewPassword_main__2CUAN",mainBlock:"NewPassword_mainBlock__RS3PP",title:"NewPassword_title__abATx",subTitle:"NewPassword_subTitle__2Hpgc",form:"NewPassword_form__uvyTc",formInput:"NewPassword_formInput__2sRYK",textAfterInput:"NewPassword_textAfterInput__JX1IF",mainButton:"NewPassword_mainButton__2J3Pe",askAboutAccount:"NewPassword_askAboutAccount__SYMGX",tryLogin:"NewPassword_tryLogin__1Nj_k",formError:"NewPassword_formError__12dAo"}},25:function(e,t,n){e.exports={app:"App_app__3B6xn",navBar:"App_navBar__Uw4Ck"}},28:function(e,t,n){},39:function(e,t,n){e.exports={main:"Profile_main__2R8MS"}},40:function(e,t,n){e.exports={main:"Component404_main__1G5Ai"}},69:function(e,t,n){"use strict";n.r(t);var r,a=n(1),s=(n(28),n(22)),c=n(3),o=n(37),i=n.n(o).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),u=function(e){return i.post("auth/register",e)},l=function(e){return i.post("auth/login",e)},j=function(e){return i.post("auth/forgot",e)},d=function(){return i.post("auth/me")},b=function(e){return i.post("auth/set-new-password",e)},O={isLoggedIn:!1,dataLogin:{_id:"",email:"",name:"",avatar:null,publicCardPacksCount:0,created:"",updated:"",isAdmin:!1,verified:!1,rememberMe:!1,error:""},responseError:"",token:""},_=function(e){return{type:"LOGIN/SET-LOGIN-DATA",value:e}},p=function(e){return{type:"LOGIN/SET-DATA",data:e}},m=function(e){return{type:"LOGIN/SET-RESPONSE-ERROR",responseError:e}},f=function(e){return{type:"LOGIN/SET-RESPONSE-TOKEN",token:e}};!function(e){e.SET_RECOVERY_FlAG="SET_RECOVERY_FlAG",e.SET_RESPONSE_ERROR_PASSWORD="SET_RESPONSE_ERROR_PASSWORD"}(r||(r={}));var h,v={isRecovered:!1,responseError:""},x=function(e){return{type:r.SET_RECOVERY_FlAG,isRecovered:e}},g=function(e){return{type:r.SET_RESPONSE_ERROR_PASSWORD,responseError:e}},E="APP_ACT",R={},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(c.a)({},e);default:return e}},w=n(38);!function(e){e.SET_REGISTRATION_DATA="SET_REGISTRATION_DATA",e.SET_RESPONSE_ERROR="SET_RESPONSE_ERROR"}(h||(h={}));var S,y={isRegistration:!1,responseError:""},A=function(e){return{type:h.SET_RESPONSE_ERROR,responseError:e}},T=function(e){return function(t){u(e).then((function(e){var n;t((n=!0,{type:h.SET_REGISTRATION_DATA,isRegistration:n}))})).catch((function(e){t(A(e.response.data.error))}))}};!function(e){e.IS_AUTH="IS_AUTH"}(S||(S={}));var k={isAuth:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.IS_AUTH:return Object(c.a)(Object(c.a)({},e),{},{isAuth:t.isAuth});default:return e}},I=Object(s.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET-LOGIN-DATA":return Object(c.a)(Object(c.a)({},e),{},{isLoggedIn:t.value});case"LOGIN/SET-DATA":return Object(c.a)(Object(c.a)({},e),{},{dataLogin:t.data});case"LOGIN/SET-RESPONSE-ERROR":return Object(c.a)(Object(c.a)({},e),{},{responseError:t.responseError});case"LOGIN/SET-RESPONSE-TOKEN":return Object(c.a)(Object(c.a)({},e),{},{token:t.token});default:return e}},app:N,registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.SET_REGISTRATION_DATA:return Object(c.a)(Object(c.a)({},e),{},{isRegistration:t.isRegistration});case h.SET_RESPONSE_ERROR:return Object(c.a)(Object(c.a)({},e),{},{responseError:t.responseError});default:return Object(c.a)({},e)}},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_RECOVERY_FlAG:return Object(c.a)(Object(c.a)({},e),{},{isRecovered:t.isRecovered});case r.SET_RESPONSE_ERROR_PASSWORD:return Object(c.a)(Object(c.a)({},e),{},{responseError:t.responseError});default:return e}},isAuth:P}),L=Object(s.c)(I,Object(s.a)(w.a)),C=n(20),B=n.n(C),G=n(4),D=n(25),U=n.n(D),F=n(6),J=n(9),M=n.n(J),K=n(5),Y=n(0),z=function(){var e=Object(a.useState)(""),t=Object(F.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),c=Object(F.a)(s,2),o=c[0],i=c[1],u=Object(a.useState)(!1),j=Object(F.a)(u,2),d=j[0],b=j[1],O=Object(a.useState)("password"),h=Object(F.a)(O,2),v=h[0],x=h[1],g=Object(K.b)(),E=Object(K.c)((function(e){return e.login.isLoggedIn})),R=Object(K.c)((function(e){return e.login.responseError}));if(E)return Object(Y.jsx)(G.a,{to:"/profile"});return Object(Y.jsx)("div",{className:M.a.main,children:Object(Y.jsxs)("div",{className:M.a.mainBlock,children:[Object(Y.jsx)("div",{className:M.a.title,children:"It-incubator"}),Object(Y.jsx)("div",{className:M.a.subTitle,children:"Sign In"}),Object(Y.jsxs)("div",{className:M.a.form,children:[Object(Y.jsx)("div",{className:M.a.formInput,children:Object(Y.jsx)("input",{type:"email",placeholder:"Enter your email",onChange:function(e){r(e.currentTarget.value),g(m(""))}})}),Object(Y.jsxs)("div",{className:M.a.formInput,children:[Object(Y.jsx)("input",{type:v,placeholder:"Enter your password",onChange:function(e){i(e.currentTarget.value),g(m(""))}}),Object(Y.jsx)("span",{className:M.a.photoEye,onClick:function(){"password"===v?x("text"):"text"===v&&x("password")}}),Object(Y.jsx)("span",{className:M.a.formError,children:R})]}),Object(Y.jsxs)("div",{className:M.a.forgotPassword,children:[Object(Y.jsx)("input",{type:"checkbox",checked:d,onChange:function(e){b(e.currentTarget.checked)}}),"RememberMe"]}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{className:M.a.loginButton,onClick:function(){var e;g((e={email:n,password:o,rememberMe:d},function(t){l(e).then((function(e){t(_(!0)),t(p(e.data)),t(f(e.data.token))})).catch((function(e){t(m(e.response.data.error))}))}))},children:"Login"})})]}),Object(Y.jsx)("div",{className:M.a.askAboutAccount,children:Object(Y.jsx)("span",{children:"Don\u2019t have an account?"})}),Object(Y.jsx)("div",{className:M.a.singUp,children:Object(Y.jsx)("span",{children:"Sign Up"})})]})})},H=n(7),V=n.n(H),W=function(){var e=Object(K.c)((function(e){return e.registration.isRegistration})),t=Object(K.c)((function(e){return e.registration.responseError})),n=Object(K.c)((function(e){return e.login.isLoggedIn})),r=Object(K.b)(),s=Object(a.useState)(""),c=Object(F.a)(s,2),o=c[0],i=c[1],u=Object(a.useState)(""),l=Object(F.a)(u,2),j=l[0],d=l[1],b=Object(a.useState)(""),O=Object(F.a)(b,2),_=O[0],p=O[1],m=Object(a.useState)(""),f=Object(F.a)(m,2),h=f[0],v=f[1],x=Object(a.useState)("password"),g=Object(F.a)(x,2),E=g[0],R=g[1],N=Object(a.useState)("password"),w=Object(F.a)(N,2),S=w[0],y=w[1],k=function(){/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(o)?j===_?(r(T({email:o,password:j})),i(""),d(""),p(""),v("")):(d(""),p(""),v("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442")):v("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d")};return e?Object(Y.jsx)(G.a,{to:je.login}):n?Object(Y.jsx)(G.a,{to:je.profile}):Object(Y.jsx)("div",{className:V.a.main,children:Object(Y.jsxs)("div",{className:V.a.mainBlock,children:[Object(Y.jsx)("div",{className:V.a.title,children:"It-incubator"}),Object(Y.jsx)("div",{className:V.a.subTitle,children:"Sign Up"}),Object(Y.jsxs)("div",{className:V.a.form,children:[Object(Y.jsx)("div",{className:V.a.formInput,children:Object(Y.jsx)("input",{type:"email",placeholder:"Enter your email",value:o,onChange:function(e){i(e.currentTarget.value)}})}),Object(Y.jsxs)("div",{className:"".concat(V.a.formInput),children:[Object(Y.jsx)("input",{type:E,placeholder:"Enter your password",value:j,onChange:function(e){d(e.currentTarget.value)}}),Object(Y.jsx)("span",{className:V.a.photoEye,onClick:function(){"password"===E?R("text"):"text"===E&&R("password")}})]}),Object(Y.jsxs)("div",{className:"".concat(V.a.formInput," ").concat(V.a.formInputLastChild),children:[Object(Y.jsx)("input",{type:S,placeholder:"Confirm your password",value:_,onKeyPress:function(e){13===e.charCode&&k()},onChange:function(e){p(e.currentTarget.value)}}),Object(Y.jsx)("span",{className:V.a.photoEye,onClick:function(){"password"===S?y("text"):"text"===S&&y("password")}}),Object(Y.jsx)("span",{className:V.a.formError,children:h||(t||"")})]}),Object(Y.jsxs)("div",{className:V.a.flexButtons,children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{className:V.a.cancelButton,onClick:function(e){i(""),d(""),p(""),v(""),r(A(""))},children:"Cancel"})}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{className:V.a.logisterButton,onClick:k,children:"Register"})})]})]})]})})},Z=n(39),q=n.n(Z),X=function(){var e=Object(K.b)(),t=Object(K.c)((function(e){return e.login.dataLogin})),n=Object(K.c)((function(e){return e.login.isLoggedIn}));return Object(a.useEffect)((function(){t.created||e((function(e){d().then((function(t){e(p(t.data)),e(_(!0)),e(f(t.data.token))})).catch((function(t){return e(_(!1)),t.response.data.error}))}))}),[]),n?Object(Y.jsx)("div",{className:q.a.main,children:JSON.stringify(t)}):Object(Y.jsx)(G.a,{to:je.login})},$=n(16),Q=n.n($),ee=function(){var e=Object(K.c)((function(e){return e.passwordRecovery.isRecovered})),t=Object(K.c)((function(e){return e.passwordRecovery.responseError})),n=Object(K.b)(),r=Object(a.useState)(""),s=Object(F.a)(r,2),c=s[0],o=s[1],i=Object(a.useState)(!1),u=Object(F.a)(i,2),l=u[0],d=u[1];if(e)return Object(Y.jsx)(G.a,{to:"/newPassword"});var b=function(){d(!0)};return l?Object(Y.jsx)(G.a,{to:"/login"}):Object(Y.jsx)("div",{className:Q.a.main,children:Object(Y.jsxs)("div",{className:Q.a.mainBlock,children:[Object(Y.jsx)("div",{className:Q.a.title,children:"It-incubator"}),Object(Y.jsx)("div",{className:Q.a.subTitle,children:"Forgot your password?"}),Object(Y.jsxs)("div",{className:Q.a.form,children:[Object(Y.jsxs)("div",{className:Q.a.formInput,children:[Object(Y.jsx)("input",{type:"email",placeholder:"Enter your email",onChange:function(e){o(e.currentTarget.value),n(g(""))},value:c}),Object(Y.jsx)("span",{className:Q.a.formError,children:t})]}),Object(Y.jsx)("p",{className:Q.a.textAfterInput,children:"Enter your email address and we will send you further instructions"}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{className:Q.a.mainButton,onClick:function(){n(function(e){return function(t){j(e).then((function(e){t(x(!0))})).catch((function(e){t(g(e.response.data.error))}))}}({email:c,from:"test-front-admin <ai73a@yandex.by>)",message:"<div style=\"background-color: lime; padding: 15px\"> \n                        password recovery link: <a href='https://tropicdenis.github.io/friday_project/#//newPassword/$token$''>link</a>\n                      </div>"}))},children:"Send Instructions"})})]}),Object(Y.jsx)("div",{className:Q.a.askAboutAccount,onClick:b,children:Object(Y.jsx)("span",{children:"Did you remember your password?"})}),Object(Y.jsx)("div",{className:Q.a.tryLogin,onClick:b,children:Object(Y.jsx)("span",{children:"Try logging in"})})]})})},te=n(17),ne=n.n(te),re=function(){var e=Object(K.b)();e(x(!1));var t=Object(G.g)().token,n=Object(a.useState)(""),r=Object(F.a)(n,2),s=r[0],c=r[1];return Object(Y.jsx)("div",{className:ne.a.main,children:Object(Y.jsxs)("div",{className:ne.a.mainBlock,children:[Object(Y.jsx)("div",{className:ne.a.title,children:"It-incubator"}),Object(Y.jsx)("div",{className:ne.a.subTitle,children:"Forgot your password?"}),Object(Y.jsxs)("div",{className:ne.a.form,children:[Object(Y.jsxs)("div",{className:ne.a.formInput,children:[Object(Y.jsx)("input",{type:"password",placeholder:"Enter your new password",value:s,onChange:function(e){c(e.currentTarget.value)}}),Object(Y.jsx)("span",{className:ne.a.formError})]}),Object(Y.jsx)("p",{className:ne.a.textAfterInput,children:"Create new password and we will send you further instructions to email"}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{onClick:function(){var n;e((n={newPassword:s,token:t},function(e){b(n).then((function(e){})).catch((function(e){}))}))},className:ne.a.mainButton,children:"Create new password"})})]})]})})},ae=n(40),se=n.n(ae),ce=function(){return Object(Y.jsx)("div",{className:se.a.main,children:"Page not found!"})},oe=n(11),ie=n(14),ue=n.n(ie),le=function(){return Object(Y.jsxs)("nav",{className:ue.a.nav,children:[Object(Y.jsx)("div",{className:"".concat(ue.a.item," ").concat(ue.a.active),children:Object(Y.jsx)(oe.b,{to:"/registration",activeClassName:ue.a.activeLink,children:"Registration"})}),Object(Y.jsx)("div",{className:ue.a.item,children:Object(Y.jsx)(oe.b,{to:"/login",activeClassName:ue.a.activeLink,children:"Login"})}),Object(Y.jsx)("div",{className:ue.a.item,children:Object(Y.jsx)(oe.b,{to:"/profile",activeClassName:ue.a.activeLink,children:"Profile"})}),Object(Y.jsx)("div",{className:ue.a.item,children:Object(Y.jsx)(oe.b,{to:"/passwordRecovery",activeClassName:ue.a.activeLink,children:"PasswordRecovery"})}),Object(Y.jsx)("div",{className:ue.a.item,children:Object(Y.jsx)(oe.b,{to:"/newPassword/",activeClassName:ue.a.activeLink,children:"NewPassword"})})]})},je={login:"/login",registration:"/registration",profile:"/profile",Component404:"/404",passwordRecovery:"/passwordRecovery",newPassword:"/newPassword/:token?"},de=function(){return Object(Y.jsxs)("div",{className:U.a.app,children:[Object(Y.jsxs)("div",{className:U.a.navBar,children:[" ",Object(Y.jsx)(le,{})]}),Object(Y.jsxs)(G.d,{children:[Object(Y.jsx)(G.b,{path:je.login,render:function(){return Object(Y.jsx)(z,{})}}),Object(Y.jsx)(G.b,{path:je.registration,render:function(){return Object(Y.jsx)(W,{})}}),Object(Y.jsx)(G.b,{path:je.profile,render:function(){return Object(Y.jsx)(X,{})}}),Object(Y.jsx)(G.b,{path:je.Component404,render:function(){return Object(Y.jsx)(ce,{})}}),Object(Y.jsx)(G.b,{path:je.passwordRecovery,render:function(){return Object(Y.jsx)(ee,{})}}),Object(Y.jsx)(G.b,{path:je.newPassword,render:function(){return Object(Y.jsx)(re,{})}}),Object(Y.jsx)(G.a,{from:"/",to:je.profile}),Object(Y.jsx)(G.a,{from:"*",to:"/404"})]})]})};B.a.render(Object(Y.jsx)(K.a,{store:L,children:Object(Y.jsx)(oe.a,{children:Object(Y.jsx)(de,{})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={main:"Registartion_main__2nFAq",mainBlock:"Registartion_mainBlock__2ngAa",title:"Registartion_title__10gqU",subTitle:"Registartion_subTitle__2QVU-",form:"Registartion_form__21zcr",formInput:"Registartion_formInput__2GrTG",photoEye:"Registartion_photoEye__27lRL",formInputLastChild:"Registartion_formInputLastChild__2-cEU",formError:"Registartion_formError__3hMlL",flexButtons:"Registartion_flexButtons__3Df7a",cancelButton:"Registartion_cancelButton__jWrpm",logisterButton:"Registartion_logisterButton__2yPZA"}},9:function(e,t,n){e.exports={main:"Login_main__2tAsx",mainBlock:"Login_mainBlock__1G5x2",title:"Login_title__lZBdn",subTitle:"Login_subTitle__14e7c",form:"Login_form__1hhFk",formInput:"Login_formInput__16KSn",photoEye:"Login_photoEye__wLJWK",forgotPassword:"Login_forgotPassword__1fTzC",loginButton:"Login_loginButton__1Sccr",askAboutAccount:"Login_askAboutAccount__nCJ-J",singUp:"Login_singUp__3JpKq",formError:"Login_formError__1GuHw"}}},[[69,1,2]]]);
//# sourceMappingURL=main.6fc93b4c.chunk.js.map