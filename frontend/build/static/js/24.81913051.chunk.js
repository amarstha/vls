(this["webpackJsonp vls"]=this["webpackJsonp vls"]||[]).push([[24],{102:function(e,t,a){"use strict";var r=a(2),c=a(9),s=a(93),n=a.n(s),l=a(0),o=a.n(l),i=a(94),d=["bsPrefix","className","as"],j=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,l=e.as,b=void 0===l?"div":l,u=Object(c.a)(e,d),h=Object(i.a)(a,"col"),x=[],f=[];return j.forEach((function(e){var t,a,r,c=u[e];if(delete u[e],"object"===typeof c&&null!=c){var s=c.span;t=void 0===s||s,a=c.offset,r=c.order}else t=c;var n="xs"!==e?"-"+e:"";t&&x.push(!0===t?""+h+n:""+h+n+"-"+t),null!=r&&f.push("order"+n+"-"+r),null!=a&&f.push("offset"+n+"-"+a)})),x.length||x.push(h),o.a.createElement(b,Object(r.a)({},u,{ref:t,className:n.a.apply(void 0,[s].concat(x,f))}))}));b.displayName="Col",t.a=b},104:function(e,t,a){"use strict";var r=a(2),c=a(9),s=a(93),n=a.n(s),l=a(0),o=a.n(l),i=a(94),d=["bsPrefix","className","noGutters","as"],j=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,l=e.noGutters,b=e.as,u=void 0===b?"div":b,h=Object(c.a)(e,d),x=Object(i.a)(a,"row"),f=x+"-cols",O=[];return j.forEach((function(e){var t,a=h[e];delete h[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&O.push(""+f+r+"-"+t)})),o.a.createElement(u,Object(r.a)({ref:t},h,{className:n.a.apply(void 0,[s,x,l&&"no-gutters"].concat(O))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},t.a=b},107:function(e,t,a){"use strict";var r=a(2),c=a(9),s=a(93),n=a.n(s),l=a(0),o=a.n(l),i=a(94),d=a(99),j=a(98),b=a(97),u=["bsPrefix","className","variant","as"],h=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,l=e.variant,d=e.as,j=void 0===d?"img":d,b=Object(c.a)(e,u),h=Object(i.a)(a,"card-img");return o.a.createElement(j,Object(r.a)({ref:t,className:n()(l?h+"-"+l:h,s)},b))}));h.displayName="CardImg",h.defaultProps={variant:null};var x=h,f=["bsPrefix","className","bg","text","border","body","children","as"],O=Object(j.a)("h5"),m=Object(j.a)("h6"),p=Object(d.a)("card-body"),v=Object(d.a)("card-title",{Component:O}),g=Object(d.a)("card-subtitle",{Component:m}),N=Object(d.a)("card-link",{Component:"a"}),y=Object(d.a)("card-text",{Component:"p"}),P=Object(d.a)("card-header"),w=Object(d.a)("card-footer"),C=Object(d.a)("card-img-overlay"),k=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,d=e.bg,j=e.text,u=e.border,h=e.body,x=e.children,O=e.as,m=void 0===O?"div":O,v=Object(c.a)(e,f),g=Object(i.a)(a,"card"),N=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return o.a.createElement(b.a.Provider,{value:N},o.a.createElement(m,Object(r.a)({ref:t},v,{className:n()(s,g,d&&"bg-"+d,j&&"text-"+j,u&&"border-"+u)}),h?o.a.createElement(p,null,x):x))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=x,k.Title=v,k.Subtitle=g,k.Body=p,k.Link=N,k.Text=y,k.Header=P,k.Footer=w,k.ImgOverlay=C;t.a=k},309:function(e,t,a){"use strict";a.r(t);var r=a(4),c=a(0),s=a(104),n=a(102),l=a(107),o=a(135),i=a(31),d=(a(13),a(39)),j=(a(110),a(117)),b=a.n(j),u=a(45),h=a(3);t.default=function(){var e=Object(c.useContext)(u.a),t=e.totalEnrollLearners,a=e.page,j=e.totalPage,x=e.onPageChange;console.log(t);var f={totalPages:j,currentPage:a,showMax:5,size:"sm",threeDots:!0,prevNext:!0,onClick:x};return Object(h.jsx)(d.a,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(n.a,{children:Object(h.jsxs)(l.a,{style:{marginTop:"-30px"},children:[Object(h.jsx)(l.a.Header,{children:Object(h.jsx)(l.a.Title,{as:"h5",children:"My Learners"})}),Object(h.jsx)(l.a.Body,{children:Object(h.jsxs)(o.a,{responsive:!0,hover:!0,style:{textAlign:"center"},children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"SN"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"Phone"}),Object(h.jsx)("th",{children:"Registered"}),Object(h.jsx)("th",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:t&&t.results.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:Object(h.jsx)("i",{className:"fas fa-check-circle"})}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.email?e.email:"N/A"}),Object(h.jsx)("td",{children:e.phone?e.phone:"N/A"}),Object(h.jsx)("td",{children:e.created_date?e.created_date.slice(0,10):"N/A"}),Object(h.jsx)("td",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(h.jsx)(i.b,{to:{pathname:"user/".concat(e.id)},className:"pr-2 text-indigo-500",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})})]},t)}))}),Object(h.jsx)(b.a,Object(r.a)({},f))]})})]})})})})}},97:function(e,t,a){"use strict";var r=a(0),c=a.n(r).a.createContext(null);c.displayName="CardContext",t.a=c},98:function(e,t,a){"use strict";var r=a(2),c=a(0),s=a.n(c),n=a(93),l=a.n(n);t.a=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(r.a)({},t,{ref:a,className:l()(t.className,e)}))}))}}}]);
//# sourceMappingURL=24.81913051.chunk.js.map