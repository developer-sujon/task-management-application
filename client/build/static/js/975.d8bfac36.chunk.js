"use strict";(self.webpackChunkappname=self.webpackChunkappname||[]).push([[975],{3975:function(e,n,s){s.r(n);var a=s(2791),t=s(7022),c=s(8820),l=s(9434),i=s(2988),r=s(9378),d=s(184);n.default=function(){(0,a.useEffect)((function(){i.Z.SetAllTaskRequest()}),[]);var e=(0,l.v9)((function(e){return e.task.allTask}));return(0,d.jsxs)(t.Z,{fluid:!0,className:"content-body",children:[(0,d.jsxs)("div",{className:"row p-0 m-0",children:[(0,d.jsx)("div",{className:"col-12 col-md-3 col-lg-3 px-3",children:(0,d.jsx)("h5",{children:"Task Canceled"})}),(0,d.jsx)("div",{className:"col-12 col-md-3 col-lg-5 px-3",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-8",children:(0,d.jsx)("input",{type:"date",className:"form-control"})}),(0,d.jsx)("div",{className:"col-4",children:(0,d.jsx)("button",{className:"btn btn-primary",children:"Search"})})]})}),(0,d.jsx)("div",{className:"col-12 float-end col-md-4 col-lg-4 px-2",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-8",children:(0,d.jsx)("input",{className:"form-control w-100"})}),(0,d.jsx)("div",{className:"col-4",children:(0,d.jsx)("button",{className:"btn btn-primary w-100",children:"Search"})})]})})]}),(0,d.jsx)("div",{className:"row p-0 m-0",children:e&&e.map((function(e){var n="";return"new"===e.status?n="info":"pending"===e.status?n="primary":"canceled"===e.status?n="danger":"complate"===e.status&&(n="success"),(0,d.jsx)("div",{className:"col-12 col-lg-4 col-sm-6 col-md-4  p-2",children:(0,d.jsx)("div",{className:"card h-100",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsx)("h6",{className:"animated fadeInUp",children:e.title}),(0,d.jsx)("p",{className:"animated fadeInUp",children:e.body}),(0,d.jsxs)("p",{className:"m-0 animated fadeInUp p-0",children:[(0,d.jsx)(c.xHR,{})," ",new Date(e.createdAt).toDateString(),(0,d.jsx)("a",{className:"icon-nav text-primary mx-1",children:(0,d.jsx)(c.$iz,{onClick:function(){return n=e._id,s=e.status,void r.Z.updateTask(n,s).then((function(){i.Z.SetAllTaskRequest()}));var n,s}})}),(0,d.jsx)("a",{className:"icon-nav text-danger mx-1",children:(0,d.jsx)(c.VPh,{onClick:function(){return n=e._id,void r.Z.deleteTask(n).then((function(){i.Z.SetAllTaskRequest()}));var n}})}),(0,d.jsx)("a",{className:"badge float-end bg-".concat(n),children:e.status})]})]})})},e._id)}))})]})}},9378:function(e,n,s){var a=s(5671),t=s(3144),c=s(1830),l=s.n(c),i=s(2988),r=function(){function e(){(0,a.Z)(this,e)}return(0,t.Z)(e,null,[{key:"deleteTask",value:function(e){return l().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){if(n.isConfirmed)return i.Z.deleteTaskRequest(e).then((function(e){e&&l().fire("Deleted!","Your file has been deleted.","success")}))}))}},{key:"updateTask",value:function(e,n){return l().fire({title:"Change Status",input:"select",inputOptions:{new:"New",complate:"Complate",pending:"Pending",canceled:"Canceled"},inputValue:n}).then((function(n){if(n)return i.Z.updateTaskRequest(e,n.value).then((function(e){return e}))}))}}]),e}();n.Z=r}}]);
//# sourceMappingURL=975.d8bfac36.chunk.js.map