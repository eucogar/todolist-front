"use strict";(self.webpackChunktodolist_front=self.webpackChunktodolist_front||[]).push([[572],{781:function(e,t,r){r.d(t,{Z:function(){return s}});r(791);var n=r(184);function s(e){var t=e.children;return(0,n.jsx)("div",{className:"d-flex vh-100 justify-content-center align-items-center",children:(0,n.jsx)("div",{className:"row justify-content-md-center",children:(0,n.jsx)("div",{className:"card p-5 mb-3",style:{width:"30rem"},children:t})})})}},992:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(439),s=r(791),o=r(937),a=r(533),c=r(184);function l(e){var t=(0,s.useContext)(o.V),r=t.stateAuth,l=(t.RemoveError,(0,s.useContext)(a.a)),i=l.stateTodoList,u=(l.RemoveError,(0,s.useState)(!1)),d=(0,n.Z)(u,2),m=d[0],f=d[1],x=(0,s.useState)(""),h=(0,n.Z)(x,2),b=h[0],j=h[1];return(0,s.useEffect)((function(){r.errorMessage.length>0?(j(r.errorMessage),f(!0)):i.errorMessage.length>0&&(j(i.errorMessage),f(!0)),setTimeout((function(){return f(!1)}),5e3)}),[i,r]),(0,s.useEffect)((function(){setTimeout((function(){f(!1)}),2e3)}),[]),(0,c.jsx)("div",{className:"alert alert-danger text-center ".concat(0==m&&" d-none"),role:"alert",children:b})}},630:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(413),s=r(925),o=r(791),a=r(184),c=["type","onSubmit","text","color","small"];function l(e){var t=e.type,r=e.onSubmit,l=e.text,i=e.color,u=e.small,d=(0,s.Z)(e,c),m=(0,o.useRef)(null);return(0,a.jsx)("button",(0,n.Z)((0,n.Z)({type:t,onSubmit:function(){return r}},d),{},{ref:m,className:"btn btn-".concat(i," ").concat(u&&"btn-sm"),children:l}))}},484:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(413),s=r(630),o=(r(791),r(134)),a=r(184);function c(e){var t=e.formMethods,r=e.id,c=e.onSubmit,l=e.btnText,i=e.children,u=e.close,d=e.onSubmitClose;return(0,a.jsx)(o.RV,(0,n.Z)((0,n.Z)({},t),{},{children:(0,a.jsxs)("form",{id:r,onSubmit:t.handleSubmit((function(e){return c(e)})),children:[i,(0,a.jsx)(s.Z,{type:"submit",text:l,color:"primary m-2"},"sucess"),u&&(0,a.jsx)(s.Z,{type:"button",color:"secondary",onClick:d,className:"m-2",text:"cancel"},"cancel")]})}))}},881:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(413),s=(r(791),r(134)),o=r(184);function a(e){var t=e.type,r=e.label,a=e.id,c=e.name,l=e.defaultValue,i=e.placeholder,u=e.textArea,d=(0,s.Gc)(),m=d.register,f=d.formState.errors;return(0,o.jsxs)("div",{className:r?"mb-3":"",children:[r&&(0,o.jsx)("label",{htmlFor:a,className:"form-label",children:r}),u?(0,o.jsx)("textarea",(0,n.Z)((0,n.Z)({id:a,className:"mt-2 form-control border-0"},m(String(c))),{},{name:c,defaultValue:l,placeholder:i})):(0,o.jsx)("input",(0,n.Z)((0,n.Z)({id:a,className:"form-control ".concat(i&&" border-0")},m(String(c))),{},{type:t,name:c,defaultValue:l,placeholder:i})),f[a]&&(0,o.jsx)("span",{className:"d-block text-left",children:"Llene el campo"})]})}},572:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(791),s=r(937),o=r(134),a=r(881),c=r(781),l=r(484),i=r(87),u=r(992),d=r(184);function m(){var e=(0,n.useContext)(s.V).signUp,t=(0,o.cI)({mode:"onChange",defaultValues:{UserName:"",Password:""}}),r=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{label:"Nombre de Usuario",id:"UserName",name:"UserName",type:"text"}),(0,d.jsx)(a.Z,{label:"Contrase\xf1a",id:"Password",name:"Password",type:"password"}),(0,d.jsx)(i.OL,{to:"/",title:"",children:" Login"}),(0,d.jsx)("br",{})]});return(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(u.Z,{}),(0,d.jsx)("h3",{className:"p-2 mb-4 text-center",children:"Registrar Usuario"}),(0,d.jsx)(l.Z,{formMethods:t,onSubmit:e,id:"formLogin",children:r,btnText:"Registrarse"})]})}}}]);
//# sourceMappingURL=572.efec5a71.chunk.js.map