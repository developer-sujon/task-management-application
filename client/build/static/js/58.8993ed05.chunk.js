"use strict";(self.webpackChunkappname=self.webpackChunkappname||[]).push([[58],{9058:function(e,s,a){a.r(s);var r=a(2791),n=a(6871),l=a(2988),o=a(557),d=a(2507),i=a(329),t=a(184);s.default=function(){var e,s=(0,r.useRef)(),a=(0,n.s0)(),c=d.Z.getOtpEmail(),m=d.Z.getOtp();return(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)("div",{className:"col-md-7 col-lg-6 center-screen",style:{marginTop:"100px"},children:(0,t.jsx)("div",{className:"card w-90 p-4",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h5",{children:"Set New Password"}),(0,t.jsx)("br",{}),(0,t.jsx)("label",{children:"Your email address"}),(0,t.jsx)("input",{readOnly:!0,value:c,placeholder:"User Email",className:"form-control animated fadeInUp",type:"email"}),(0,t.jsx)("br",{}),(0,t.jsx)("label",{children:"New Password"}),(0,t.jsx)("input",{ref:function(s){return e=s},placeholder:"New Password",className:"form-control animated fadeInUp",type:"password"}),(0,t.jsx)("br",{}),(0,t.jsx)("label",{children:"Confirm Password"}),(0,t.jsx)("input",{ref:function(e){return s=e},placeholder:"Confirm Password",className:"form-control animated fadeInUp",type:"password"}),(0,t.jsx)("br",{}),(0,t.jsx)("button",{onClick:function(){o.Z.isEmpty(e.value)?i.Z.errorMessage("Password is Required"):o.Z.isEmpty(s.value)?i.Z.errorMessage("Confirm Password is Required"):s.value!==e.value?i.Z.errorMessage("Password & Confirm Password Not Match"):l.Z.PasswordRecovery(c,m,e.value).then((function(e){e&&(i.Z.successMessage(e.data.message),a("/login"))}))},className:"btn w-100 animated fadeInUp float-end btn-primary",children:"Next"})]})})})})})}}}]);
//# sourceMappingURL=58.8993ed05.chunk.js.map