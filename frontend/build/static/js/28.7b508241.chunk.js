(this["webpackJsonp vls"]=this["webpackJsonp vls"]||[]).push([[28],{109:function(e,t,a){"use strict";var s=a(21),c=a(22),n=a(23),i=a(24),r=a(0),l=a(31),o=a(25),d={items:[{id:"pages",title:"Pages",type:"group",icon:"icon-pages",children:[{id:"dashboard",title:"Dashboard",type:"item",url:"/dashboard",classes:"nav-item",icon:"fa fa-home"},{id:"users",title:"Users",type:"item",url:"/users",classes:"nav-item",icon:"fa fa-users"},{id:"exam",title:"Courses",type:"item",url:"/courses",classes:"nav-item",icon:"fa fa-book"},{id:"exam",title:"Exams",type:"item",url:"/exams",classes:"nav-item",icon:"fa fa-graduation-cap"}]}]},m=a(96),p=a(39),j=a(3),b=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={main:[],item:[]},e.componentWillReceiveProps=function(){d.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t),!1}))},e.getCollapse=function(t){t.children&&t.children.filter((function(a){return a.type&&"collapse"===a.type?e.getCollapse(a):a.type&&"item"===a.type&&document.location.pathname===o.a.basename+a.url&&e.setState({item:a,main:t}),!1}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t,a),!1}))}},{key:"render",value:function(){var e,t,a="",s="Welcome";return this.state.main&&"collapse"===this.state.main.type&&(e=Object(j.jsx)("li",{className:"breadcrumb-item",children:Object(j.jsx)("a",{href:m.a.BLANK_LINK,children:this.state.main.title})})),this.state.item&&"item"===this.state.item.type&&(s=this.state.item.title,t=Object(j.jsx)("li",{className:"breadcrumb-item",children:Object(j.jsx)("a",{href:m.a.BLANK_LINK,children:s})}),!1!==this.state.item.breadcrumbs&&(a=Object(j.jsx)("div",{className:"page-header",children:Object(j.jsx)("div",{className:"page-block",children:Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsxs)("div",{className:"col-md-12",children:[Object(j.jsx)("div",{className:"page-header-title",children:Object(j.jsx)("h5",{className:"m-b-10",children:s})}),Object(j.jsxs)("ul",{className:"breadcrumb",children:[Object(j.jsx)("li",{className:"breadcrumb-item",children:Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("i",{className:"feather icon-home"})})}),e,t]})]})})})}))),document.title=s+" | Datta Able Free React + Redux Admin Template",Object(j.jsx)(p.a,{children:a})}}]),a}(r.Component);t.a=b},322:function(e,t,a){"use strict";a.r(t);var s=a(17),c=a(42),n=a(4),i=a(6),r=a(14),l=a.n(r),o=a(0),d=a(31),m=(a(113),a(120),a(39)),p=a(109),j=a(119),b=(a(57),a(40)),u=a(1),h=a.n(u),x=a(3);t.default=function(e){var t=Object(o.useContext)(b.a).isLoggedIn,a={email:"",password:""},r=Object(o.useState)(a),u=Object(i.a)(r,2),O=u[0],f=u[1],g=Object(o.useState)(!1),v=Object(i.a)(g,2),N=v[0],y=v[1],w=O.email,k=O.password;function L(e){f(Object(n.a)(Object(n.a)({},O),{},Object(c.a)({},e.target.id,e.target.value)))}var C=function(){var e=Object(s.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,y(!0),e.next=5,h.a.post("".concat("http://127.0.0.1:8000","/api/login/"),{email:w,password:k});case 5:s=e.sent,f(Object(n.a)({},a)),localStorage.setItem("jwt_token",s.data.token),window.location.href="/dashboard",y(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0.response.data&&j.b.error(e.t0.response.data.error[0]),y(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){t&&e.history.push("/dashboard")}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.a,{autoClose:3e3,pauseOnHover:!1}),Object(x.jsxs)(m.a,{children:[Object(x.jsx)(p.a,{}),Object(x.jsx)("div",{className:"auth-wrapper",children:Object(x.jsxs)("div",{className:"auth-content",children:[Object(x.jsxs)("div",{className:"auth-bg",children:[Object(x.jsx)("span",{className:"r"}),Object(x.jsx)("span",{className:"r s"}),Object(x.jsx)("span",{className:"r s"}),Object(x.jsx)("span",{className:"r"})]}),Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"card-body text-center",children:[Object(x.jsx)("div",{className:"mb-4",children:Object(x.jsx)(d.b,{to:"/",children:Object(x.jsxs)("p",{style:{color:"#35A9F5",textTransform:"uppercase",fontWeight:"bold",marginTop:"22px",padding:"20px 10px",fontSize:"25px",lineHeight:"21px"},children:["E-learning ",Object(x.jsx)("span",{style:{display:"block",textTransform:"capitalize",fontStyle:"inherit",fontSize:"12px"},children:"Management System"})]})})}),Object(x.jsx)("h3",{className:"mb-4",children:"Login"}),Object(x.jsxs)("form",{onSubmit:C,children:[Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",id:"email",value:w,onChange:L,required:!0})}),Object(x.jsx)("div",{className:"input-group mb-4",children:Object(x.jsx)("input",{type:"password",className:"form-control",placeholder:"password",id:"password",value:k,onChange:L,required:!0})}),Object(x.jsxs)("button",{className:"btn btn-primary shadow-2 mb-4",children:["Login",N&&Object(x.jsx)("div",{class:"spinner-border",role:"status",style:{height:"15px",width:"15px",marginLeft:"5px"},children:Object(x.jsx)("span",{class:"sr-only",children:"Loading..."})})]})]}),Object(x.jsxs)("p",{className:"mb-2 text-muted",children:["Forgot password? ",Object(x.jsx)(d.c,{to:"/forgot-password",children:"Reset"})]}),Object(x.jsxs)("p",{className:"mb-0 text-muted",children:["Don\u2019t have an account? ",Object(x.jsx)(d.c,{to:"/auth/signup",children:"Signup"})]})]})})]})})]})]})}},96:function(e,t,a){"use strict";t.a={BLANK_LINK:"#!"}}}]);
//# sourceMappingURL=28.7b508241.chunk.js.map