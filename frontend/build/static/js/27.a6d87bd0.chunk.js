(this["webpackJsonp vls"]=this["webpackJsonp vls"]||[]).push([[27],{102:function(e,t,a){"use strict";var r=a(2),s=a(9),c=a(93),n=a.n(c),i=a(0),o=a.n(i),l=a(94),d=["bsPrefix","className","as"],j=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.as,b=void 0===i?"div":i,h=Object(s.a)(e,d),x=Object(l.a)(a,"col"),u=[],m=[];return j.forEach((function(e){var t,a,r,s=h[e];if(delete h[e],"object"===typeof s&&null!=s){var c=s.span;t=void 0===c||c,a=s.offset,r=s.order}else t=s;var n="xs"!==e?"-"+e:"";t&&u.push(!0===t?""+x+n:""+x+n+"-"+t),null!=r&&m.push("order"+n+"-"+r),null!=a&&m.push("offset"+n+"-"+a)})),u.length||u.push(x),o.a.createElement(b,Object(r.a)({},h,{ref:t,className:n.a.apply(void 0,[c].concat(u,m))}))}));b.displayName="Col",t.a=b},103:function(e,t,a){"use strict";var r=a(2),s=a(9),c=a(93),n=a.n(c),i=a(0),o=a.n(i),l=a(94),d=["bsPrefix","className","noGutters","as"],j=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.noGutters,b=e.as,h=void 0===b?"div":b,x=Object(s.a)(e,d),u=Object(l.a)(a,"row"),m=u+"-cols",f=[];return j.forEach((function(e){var t,a=x[e];delete x[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&f.push(""+m+r+"-"+t)})),o.a.createElement(h,Object(r.a)({ref:t},x,{className:n.a.apply(void 0,[c,u,i&&"no-gutters"].concat(f))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},t.a=b},105:function(e,t,a){"use strict";var r=a(2),s=a(9),c=a(93),n=a.n(c),i=a(0),o=a.n(i),l=a(94),d=a(99),j=a(97),b=a(98),h=["bsPrefix","className","variant","as"],x=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.variant,d=e.as,j=void 0===d?"img":d,b=Object(s.a)(e,h),x=Object(l.a)(a,"card-img");return o.a.createElement(j,Object(r.a)({ref:t,className:n()(i?x+"-"+i:x,c)},b))}));x.displayName="CardImg",x.defaultProps={variant:null};var u=x,m=["bsPrefix","className","bg","text","border","body","children","as"],f=Object(j.a)("h5"),O=Object(j.a)("h6"),v=Object(d.a)("card-body"),p=Object(d.a)("card-title",{Component:f}),g=Object(d.a)("card-subtitle",{Component:O}),w=Object(d.a)("card-link",{Component:"a"}),N=Object(d.a)("card-text",{Component:"p"}),y=Object(d.a)("card-header"),k=Object(d.a)("card-footer"),C=Object(d.a)("card-img-overlay"),P=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,d=e.bg,j=e.text,h=e.border,x=e.body,u=e.children,f=e.as,O=void 0===f?"div":f,p=Object(s.a)(e,m),g=Object(l.a)(a,"card"),w=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return o.a.createElement(b.a.Provider,{value:w},o.a.createElement(O,Object(r.a)({ref:t},p,{className:n()(c,g,d&&"bg-"+d,j&&"text-"+j,h&&"border-"+h)}),x?o.a.createElement(v,null,u):u))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=u,P.Title=p,P.Subtitle=g,P.Body=v,P.Link=w,P.Text=N,P.Header=y,P.Footer=k,P.ImgOverlay=C;t.a=P},261:function(e,t,a){"use strict";a.r(t);var r=a(4),s=a(0),c=a(103),n=a(102),i=a(105),o=a(131),l=a(31),d=a(13),j=a(39),b=a(109),h=a.n(b),x=a(114),u=a.n(x),m=a(45),f=a(3);t.default=function(){var e=Object(s.useContext)(m.a),t=e.totalUsers,a=e.page,b={totalPages:e.totalPage,currentPage:a,showMax:5,size:"sm",threeDots:!0,prevNext:!0,onClick:e.onPageChange};return Object(f.jsx)(j.a,{children:Object(f.jsx)(c.a,{children:Object(f.jsx)(n.a,{children:Object(f.jsxs)(i.a,{style:{marginTop:"-30px"},children:[Object(f.jsx)(i.a.Header,{children:Object(f.jsx)(i.a.Title,{as:"h5",children:"Users"})}),Object(f.jsx)(i.a.Body,{children:Object(f.jsxs)(o.a,{responsive:!0,hover:!0,style:{textAlign:"center"},children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"SN"}),Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Email"}),Object(f.jsx)("th",{children:"Phone"}),Object(f.jsx)("th",{children:"Registered"}),Object(f.jsx)("th",{children:"Role"}),Object(f.jsx)("th",{children:"Action"})]})}),Object(f.jsx)("tbody",{children:t&&t.results.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"row",children:Object(f.jsx)("i",{className:"fas fa-check-circle"})}),Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.email?e.email:"N/A"}),Object(f.jsx)("td",{children:e.phone?e.phone:"N/A"}),Object(f.jsx)("td",{children:e.created_date?e.created_date.slice(0,10):"N/A"}),Object(f.jsxs)("td",{children:[e.is_active&&e.is_staff&&e.is_admin&&Object(f.jsx)("p",{className:"label theme-bg2 text-white f-12 text-center",children:"Admin"}),e.is_active&&e.is_staff&&!e.is_admin&&Object(f.jsx)("p",{className:"label theme-bg2 text-white f-12 text-center",children:"Trainer"}),e.is_active&&!e.is_staff&&!e.is_admin&&Object(f.jsx)("p",{className:"label theme-bg2 text-white f-12 text-center",children:"Learner"})]}),Object(f.jsxs)("td",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(f.jsx)(l.b,{to:{pathname:"user/".concat(e.id)},className:"pr-2 text-indigo-500",children:Object(f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})}),Object(f.jsx)(l.b,{to:{pathname:"/user/edit/".concat(e.id)},className:"pr-2 text-indigo-500",children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),Object(f.jsx)("button",{onClick:function(){return t=e.id,void h()({title:"Are you sure?",text:"Once deleted, you will not be able to recover data!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e&&(Object(d.f)(t),window.location.reload())}));var t},className:"pr-2 text-indigo-500",children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})]},t)}))}),Object(f.jsx)(u.a,Object(r.a)({},b))]})})]})})})})}},97:function(e,t,a){"use strict";var r=a(2),s=a(0),c=a.n(s),n=a(93),i=a.n(n);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(r.a)({},t,{ref:a,className:i()(t.className,e)}))}))}},98:function(e,t,a){"use strict";var r=a(0),s=a.n(r).a.createContext(null);s.displayName="CardContext",t.a=s}}]);
//# sourceMappingURL=27.a6d87bd0.chunk.js.map