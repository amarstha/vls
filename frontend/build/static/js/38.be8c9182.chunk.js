(this["webpackJsonp vls"]=this["webpackJsonp vls"]||[]).push([[38],{115:function(e,t,a){"use strict";var c=a(32),s=a(21),i=a(22),r=a(23),n=a(24),l=a(0),o=a(170),d=a(107),j=a(231),h=a(106),p=a.n(h),b=a(39),m=a(96),O=a(3),u=function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isOption:e.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},e.cardReloadHandler=function(){e.setState({loadCard:!0}),setInterval((function(){e.setState({loadCard:!1})}),3e3)},e.cardRemoveHandler=function(){e.setState({cardRemove:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){var e,t,a,s,i,r=this,n=[];return this.state.isOption&&(a=Object(O.jsx)("div",{className:"card-header-right",children:Object(O.jsxs)(o.a,{alignRight:!0,className:"btn-group card-option",children:[Object(O.jsx)(o.a.Toggle,{id:"dropdown-basic",className:"btn-icon",children:Object(O.jsx)("i",{className:"feather icon-more-horizontal"})}),Object(O.jsxs)(o.a.Menu,{as:"ul",className:"list-unstyled card-option",children:[Object(O.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){r.setState((function(e){return{fullCard:!e.fullCard}}))},children:[Object(O.jsx)("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),Object(O.jsxs)("a",{href:m.a.BLANK_LINK,children:[" ",this.state.fullCard?"Restore":"Maximize"," "]})]}),Object(O.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){r.setState((function(e){return{collapseCard:!e.collapseCard}}))},children:[Object(O.jsx)("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),Object(O.jsxs)("a",{href:m.a.BLANK_LINK,children:[" ",this.state.collapseCard?"Expand":"Collapse"," "]})]}),Object(O.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler,children:[Object(O.jsx)("i",{className:"feather icon-refresh-cw"}),Object(O.jsx)("a",{href:m.a.BLANK_LINK,children:" Reload "})]}),Object(O.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler,children:[Object(O.jsx)("i",{className:"feather icon-trash"}),Object(O.jsx)("a",{href:m.a.BLANK_LINK,children:" Remove "})]})]})]})})),s=Object(O.jsxs)(d.a.Header,{children:[Object(O.jsx)(d.a.Title,{as:"h5",children:this.props.title}),a]}),this.state.fullCard&&(n=[].concat(Object(c.a)(n),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(n=[].concat(Object(c.a)(n),["card-load"]),t=Object(O.jsx)("div",{className:"card-loader",children:Object(O.jsx)("i",{className:"pct-loader1 anim-rotate"})})),this.state.cardRemove&&(n=[].concat(Object(c.a)(n),["d-none"])),this.props.cardClass&&(n=[].concat(Object(c.a)(n),[this.props.cardClass])),i=Object(O.jsxs)(d.a,{className:n.join(" "),style:e,children:[s,Object(O.jsx)(j.a,{in:!this.state.collapseCard,children:Object(O.jsx)("div",{children:Object(O.jsx)(d.a.Body,{children:this.props.children})})}),t]}),Object(O.jsx)(b.a,{children:i})}}]),a}(l.Component);t.a=p()(u)},260:function(e,t,a){"use strict";a.r(t);var c=a(21),s=a(22),i=a(23),r=a(24),n=a(0),l=a(104),o=a(102),d=a(39),j=a(115),h=a(3),p=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)(d.a,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(j.a,{title:"Quick Installation",isOption:!0,children:[Object(h.jsxs)("p",{children:[" - First of all it's required to install latest Node and npm - ",Object(h.jsx)("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer",children:"nodejs"})]}),Object(h.jsxs)("p",{children:[" - Unzip ",Object(h.jsx)("code",{children:"datta-able-react-lite.zip"})," file, Inside that directory you will find the ",Object(h.jsx)("code",{children:"datta-able-react-lite/"})," folder"]}),Object(h.jsxs)("p",{children:[" - Open your terminal/cmd then navigate to project directory ",Object(h.jsx)("code",{children:"datta-able-react-lite/"})]}),Object(h.jsxs)("p",{children:[" - Install npm packages using command ",Object(h.jsx)("code",{children:"'npm install'"}),",  this will install required node.js third-party plugins into the ",Object(h.jsx)("code",{children:"node_modules/"})," folder."]}),Object(h.jsxs)("p",{children:[" - Compile/Run project using  command  ",Object(h.jsx)("code",{children:"'npm start'"}),", this will compile app in development mode."]}),Object(h.jsxs)("p",{children:[" - Open ",Object(h.jsx)("a",{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:3000"})," to view it on browser."]}),Object(h.jsx)("p",{children:" - Now, You can use Datta Able React Admin Template for your application development. "}),Object(h.jsxs)("div",{className:"theme-bg2 text-white p-3",children:[Object(h.jsx)("p",{children:"The project was built assuming it is hosted at the server root folder of domain/platform i.e http://demo.com."}),Object(h.jsx)("p",{children:"You can control this with the homepage field in your package.json."}),Object(h.jsx)("p",{children:'To deploy build for sub-folder i.e http://demo.com/project-folder-name/ than "homepage" : "http://demo.com/project-folder-name/".'}),Object(h.jsx)("p",{children:"You  also need to set basename in ../src/config.js file."}),Object(h.jsx)("p",{children:"like, basename: '/project-folder-name'"})]}),Object(h.jsxs)("p",{children:[" - Build project using command ",Object(h.jsx)("code",{children:"'npm run build'"}),", It will create ",Object(h.jsx)("code",{children:"build/"})," folder inside datta-able-react-lite/ folder. "]}),Object(h.jsx)("p",{children:" - Your app is ready to be deployed. "})]})})})})}}]),a}(n.Component);t.default=p}}]);
//# sourceMappingURL=38.be8c9182.chunk.js.map