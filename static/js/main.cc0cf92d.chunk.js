(this["webpackJsonpe2e-dashboard"]=this["webpackJsonpe2e-dashboard"]||[]).push([[0],{209:function(e,t,a){"use strict";var n=a(65),r=Object(n.a)({basename:"/e2e-dashboard"});t.a=r},411:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(672),r=function(e){return e.replace(/-/g," ")},l=function(e,t){return Object(n.a)(new Date(e),new Date(t))}},695:function(e,t,a){e.exports=a(953)},953:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),c=a.n(l),o=a(20),i=a.n(o),s=a(21),u=a(142),m=a(46),d=a(209),p=a(662),h=a.n(p),f="https://api.github.com",g=function(){return"".concat(f,"/repos/litmuschaos/litmus-e2e/actions/workflows")},b=a(411),E=a(993),C=a(235),v=a(258),w=a(988),y=a(1006),k=a(538),x=Object(k.a)((function(e){return{appBar:{position:"sticky",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)"},toolBar:{height:"4.9rem",display:"flex",justifyContent:"space-between",background:e.palette.header,padding:e.spacing(0,7.5),"& *":{color:e.palette.text.secondary},"& nav":{flexGrow:1,marginLeft:e.spacing(15)}},details:{display:"flex",justifyContent:"flex-end"},homeLink:{textDecoration:"none"},chaosText:{fontSize:"1.625rem",color:e.palette.text.secondary,fontWeight:600},projectDropdown:{display:"flex",alignItems:"center","& button":{marginTop:e.spacing(.25)}},projectPopover:{minWidth:"26.3125rem",maxHeight:"23.0625rem",overflowY:"auto","& #hint":{color:e.palette.text.hint}},projectListItem:{"& p":{color:e.palette.text.hint,width:"7.9375rem",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"&:hover":{background:"".concat(e.palette.cards.highlight," !important")}},selectedWrapper:{width:"2rem",height:"2rem",borderRadius:"1rem",backgroundColor:e.palette.background.paper,display:"flex",justifyContent:"center",alignItems:"center"},notSelectedWrapper:{width:"2rem",height:"2rem",borderRadius:"1rem",backgroundColor:e.palette.success.main,display:"flex",justifyContent:"center",alignItems:"center"},active:{background:"".concat(e.palette.cards.highlight," !important")},profileDropdown:{margin:e.spacing(.25,0,0,2.75)},avatarBackground:{backgroundColor:e.palette.primary.light},profileDropdownPopover:{padding:e.spacing(3.25,2.875),minWidth:"21.9375rem",minHeight:"11.3125rem","& #logoutIcon":{marginLeft:e.spacing(1.875)}},profileSet:{marginTop:e.spacing(1),fontSize:"1rem"},profileDropdownRow:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"},profileUnset:{marginTop:e.spacing(1.25),"& a":{textDecoration:"none",color:e.palette.primary.main}},emailUnset:{color:e.palette.text.disabled,fontSize:"1rem"},projectRoleHint:{color:e.palette.text.hint,maxWidth:"6.875rem",fontStyle:"italic",fontSize:"0.75rem"},profileButtons:{marginTop:e.spacing(3.75)}}})),O=function(){var e=x();return c.a.createElement("div",{"data-cy":"headerComponent"},c.a.createElement(w.a,{className:e.appBar},c.a.createElement(y.a,{disableGutters:!0,className:e.toolBar},c.a.createElement(C.a,{to:{pathname:"/home"},className:e.homeLink},c.a.createElement(v.a,{className:e.chaosText,variant:"body1"},"E2E Dashboard")))))},j=a(97),N=a(966),L=a(967),S=a(998),D=a(999),I=Object(k.a)((function(e){return{drawer:{width:"100%",height:"100%"},drawerPaper:{width:"100%",background:e.palette.sidebarMenu,position:"relative"},drawerListItem:{height:"auto",transition:"0.8s","&:hover":{backgroundColor:e.palette.disabledBackground}},active:{backgroundColor:"".concat(e.palette.cards.highlight," !important"),color:e.palette.highlight},listIcon:{paddingLeft:e.spacing(2)},listText:{"& span":{fontWeight:500,fontSize:"0.8rem"}},drawerList:{marginTop:e.spacing(8.375)},quickActions:{width:"80%",border:"1px solid ".concat(e.palette.border.main)},versionlogo:{width:"1.25rem",height:"2.185rem"},versionText:{margin:"auto",marginLeft:e.spacing(1.25),fontSize:"0.75rem"},nested:{paddingLeft:e.spacing(4)}}})),R=function(e){var t=e.children,a=e.handleClick,n=e.label,r=e.selected,l=e.className,o=I();return c.a.createElement(L.a,{button:!0,selected:r,onClick:a,className:"".concat(o.drawerListItem," ").concat(r?o.active:""," ").concat(l)},c.a.createElement(S.a,{className:o.listIcon},t),c.a.createElement(D.a,{primary:n,className:o.listText}))},P=a(987),T=a(664),H=a.n(T),B=a(665),M=a.n(B),Z=function(e){var t=e.children,a=e.handleClick,n=e.label,r=e.litmusIconName,l=e.open,o=I();return c.a.createElement(c.a.Fragment,null,c.a.createElement(L.a,{button:!0,onClick:a,className:o.drawerListItem},c.a.createElement(S.a,{className:o.listIcon},c.a.createElement(u.Icon,{name:r})),c.a.createElement(D.a,{primary:n,className:o.listText}),l?c.a.createElement(H.a,null):c.a.createElement(M.a,null)),c.a.createElement(P.a,{in:l,timeout:"auto",unmountOnExit:!0},c.a.createElement(N.a,{component:"div",disablePadding:!0},t)))},z=["svgRef","title"];function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var V,q=function(e){var t=e.svgRef,a=e.title,l=W(e,z);return c.a.createElement("svg",A({width:16,height:16,viewBox:"0 0 16 16",fill:"none",ref:t},l),a?c.a.createElement("title",null,a):null,n||(n=c.a.createElement("rect",{x:8.13171,y:12.9618,width:6.59726,height:.540759,rx:.27038,stroke:"black",strokeWidth:.540759})),r||(r=c.a.createElement("path",{d:"M6.53976 7.64628L6.89331 7.99983L6.53976 8.35338L0.602772 14.2904L0.250847 13.9385L0.602772 14.2904C0.572514 14.3206 0.572514 14.3686 0.602772 14.3989C0.633024 14.4291 0.680989 14.4291 0.711249 14.3989C0.711257 14.3989 0.711264 14.3989 0.711271 14.3989L7.05604 8.05411C7.07122 8.03893 7.07861 8.02001 7.07861 7.99986C7.07861 7.9797 7.07122 7.96078 7.05605 7.94561L0.711249 1.60082C0.680992 1.57056 0.633028 1.57056 0.602771 1.60082C0.572514 1.63107 0.572514 1.67904 0.602771 1.70929L6.53976 7.64628Z",stroke:"black"})))},G=c.a.forwardRef((function(e,t){return c.a.createElement(q,A({svgRef:t},e))})),U=(a.p,["svgRef","title"]);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var $,_,F,K,X,Q=function(e){var t=e.svgRef,a=e.title,n=J(e,U);return c.a.createElement("svg",Y({width:15,height:15,viewBox:"0 0 15 15",fill:"none",ref:t},n),a?c.a.createElement("title",null,a):null,V||(V=c.a.createElement("path",{d:"M14.5094 11.565C14.8349 10.8784 14.9999 10.1421 14.9999 9.37382C14.9999 6.6314 12.8231 4.38511 10.0972 4.25322C9.48296 2.04048 7.46513 0.49707 5.15635 0.49707C2.31325 0.49707 0.000225769 2.79697 0.000225769 5.6239C0.000225769 6.39217 0.165163 7.12853 0.490703 7.81508L0.00875096 10.2251C-0.0525953 10.5319 0.218043 10.8031 0.524891 10.7424L2.96465 10.26C3.57583 10.5499 4.22597 10.7119 4.90318 10.7443C5.7571 13.8189 9.18678 15.3611 12.0354 14.0099C14.7074 14.5382 14.499 14.5006 14.5604 14.5006C14.8381 14.5006 15.0455 14.2462 14.9913 13.975L14.5094 11.565ZM3.22538 9.40879C3.13747 9.36385 3.03692 9.34982 2.94013 9.36898L0.999548 9.75267L1.38183 7.8411C1.40126 7.74398 1.38731 7.64308 1.34217 7.55487C1.03494 6.95383 0.879111 6.30419 0.879111 5.6239C0.879111 3.28158 2.79787 1.37596 5.15635 1.37596C6.99953 1.37596 8.62265 2.57446 9.18988 4.28849C6.50325 4.63199 4.47979 7.05616 4.73938 9.85158C4.20985 9.80069 3.70256 9.65274 3.22538 9.40879ZM13.6183 11.591L14.0006 13.5026L12.06 13.1189C11.9631 13.0998 11.8627 13.1138 11.7747 13.1587C11.1737 13.4659 10.5241 13.6218 9.84377 13.6218C7.50146 13.6218 5.59583 11.7161 5.59583 9.37382C5.59583 7.0315 7.50146 5.12587 9.84377 5.12587C12.2023 5.12587 14.121 7.0315 14.121 9.37382C14.121 10.0541 13.9652 10.7037 13.658 11.3048C13.6128 11.393 13.5989 11.4939 13.6183 11.591Z",fill:"#1C0732"})))},ee=c.a.forwardRef((function(e,t){return c.a.createElement(Q,Y({svgRef:t},e))})),te=(a.p,["svgRef","title"]);function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var re=function(e){var t=e.svgRef,a=e.title,n=ne(e,te);return c.a.createElement("svg",ae({width:13,height:15,viewBox:"0 0 13 15",fill:"none",ref:t},n),a?c.a.createElement("title",null,a):null,$||($=c.a.createElement("path",{d:"M12.0841 3.6443L8.56859 0.12876C8.48653 0.0466699 8.37453 0 8.25781 0H2.10547C1.37853 0 0.787109 0.591416 0.787109 1.31836V13.6816C0.787109 14.4086 1.37853 15 2.10547 15H10.8945C11.6215 15 12.2129 14.4086 12.2129 13.6816V3.95508C12.2129 3.83525 12.1626 3.72272 12.0841 3.6443ZM8.69727 1.50038L10.7125 3.51562H9.13672C8.8944 3.51562 8.69727 3.31849 8.69727 3.07617V1.50038ZM10.8945 14.1211H2.10547C1.86315 14.1211 1.66602 13.924 1.66602 13.6816V1.31836C1.66602 1.07604 1.86315 0.878906 2.10547 0.878906H7.81836V3.07617C7.81836 3.80312 8.40978 4.39453 9.13672 4.39453H11.334V13.6816C11.334 13.924 11.1368 14.1211 10.8945 14.1211Z",fill:"#1C0732"})),_||(_=c.a.createElement("path",{d:"M9.13672 6.21094H3.86328C3.62059 6.21094 3.42383 6.4077 3.42383 6.65039C3.42383 6.89309 3.62059 7.08984 3.86328 7.08984H9.13672C9.37941 7.08984 9.57617 6.89309 9.57617 6.65039C9.57617 6.4077 9.37941 6.21094 9.13672 6.21094Z",fill:"#1C0732"})),F||(F=c.a.createElement("path",{d:"M9.13672 7.96875H3.86328C3.62059 7.96875 3.42383 8.16551 3.42383 8.4082C3.42383 8.6509 3.62059 8.84766 3.86328 8.84766H9.13672C9.37941 8.84766 9.57617 8.6509 9.57617 8.4082C9.57617 8.16551 9.37941 7.96875 9.13672 7.96875Z",fill:"#1C0732"})),K||(K=c.a.createElement("path",{d:"M9.13672 9.72656H3.86328C3.62059 9.72656 3.42383 9.92332 3.42383 10.166C3.42383 10.4087 3.62059 10.6055 3.86328 10.6055H9.13672C9.37941 10.6055 9.57617 10.4087 9.57617 10.166C9.57617 9.92332 9.37941 9.72656 9.13672 9.72656Z",fill:"#1C0732"})),X||(X=c.a.createElement("path",{d:"M7.37891 11.4844H3.86328C3.62059 11.4844 3.42383 11.6811 3.42383 11.9238C3.42383 12.1665 3.62059 12.3633 3.86328 12.3633H7.37891C7.6216 12.3633 7.81836 12.1665 7.81836 11.9238C7.81836 11.6811 7.6216 11.4844 7.37891 11.4844Z",fill:"#1C0732"})))},le=c.a.forwardRef((function(e,t){return c.a.createElement(re,ae({svgRef:t},e))})),ce=(a.p,function(e){var t=e.scheduledData,a=e.manualData,n=Object(l.useState)("none"),r=Object(s.a)(n,2),o=r[0],i=r[1],p=function(e){console.log("value is",e),i((function(t){return t===e?"none":e}))},h=I(),f=Object(m.g)().pathname.split("/")[1];return c.a.createElement(j.a,{"data-cy":"sidebarComponent",className:h.drawer,variant:"permanent",classes:{paper:h.drawerPaper},anchor:"left"},c.a.createElement(N.a,{className:h.drawerList},c.a.createElement(R,{key:"home",handleClick:function(){d.a.push({pathname:"/home"})},label:"Home",selected:"home"===f},c.a.createElement(u.Icon,{name:"home"})),c.a.createElement("div",{"data-cy":"scheduled-run"},c.a.createElement(Z,{key:"scheduled-run",label:"Sheduled Runs",litmusIconName:"schedule",name:"scheduled-run",open:"scheduled-run"===o,handleClick:function(){return p("scheduled-run")}},t&&t.map((function(e){return c.a.createElement(R,{key:e.id,handleClick:function(){d.a.push({pathname:"/scheduled-runs/".concat(e.name)})},label:e.readableName,selected:f===e.name,className:h.nested},c.a.createElement(u.Icon,{name:"schedule"}))})))),c.a.createElement("div",{"data-cy":"manual-run"},c.a.createElement(Z,{key:"manual-run",label:"Manual Runs",litmusIconName:"userEnable",name:"manual-run",open:"manual-run"===o,handleClick:function(){return p("manual-run")}},a&&a.map((function(e){return c.a.createElement(R,{key:e.id,handleClick:function(){d.a.push({pathname:"/manual-runs/".concat(e.name)})},label:e.readableName,selected:f===e.name,className:h.nested},c.a.createElement(u.Icon,{name:"workflow"}))})))),c.a.createElement("hr",{className:h.quickActions}),c.a.createElement(R,{key:"litmusDocs",handleClick:function(){window.open("https://docs.litmuschaos.io/")},label:"Litmus Docs"},c.a.createElement(le,null)),c.a.createElement(R,{key:"litmusAPIDocs",handleClick:function(){window.open("https://litmuschaos.github.io/litmus/graphql/v2.0.0/api.html")},label:"Litmus API Docs"},c.a.createElement(G,null)),c.a.createElement(R,{key:"Slack",handleClick:function(){window.open("https://app.slack.com/client/T09NY5SBT/CNXNB0ZTN")},label:"Slack"},c.a.createElement(ee,null))))}),oe=Object(k.a)((function(e){return{root:{position:"fixed",overflow:"hidden",height:"100vh",width:"100%",display:"grid",gridTemplateColumns:"20.5em auto",gridTemplateRows:"6.5em auto",gridTemplateAreas:'"header header" "sidebar content"',"& ::-webkit-scrollbar":{width:"0.4rem",height:"0.4rem"},"& ::-webkit-scrollbar-track":{marginTop:e.spacing(1),webkitBoxShadow:"inset 0 0 8px ".concat(e.palette.common.black),backgroundColor:e.palette.border.main},"& ::-webkit-scrollbar-thumb":{backgroundColor:e.palette.highlight,borderRadius:8},"& img":{userDrag:"none"}},header:{gridArea:"header"},content:{gridArea:"content",padding:e.spacing(5,7.5,10),overflowY:"auto"},sidebar:{gridArea:"sidebar",overflowY:"auto"}}})),ie=function(e){var t=e.children,a=e.scheduledData,n=e.manualData,r=oe();return c.a.createElement("div",{className:r.root},c.a.createElement(E.a,null),c.a.createElement("header",{className:r.header},c.a.createElement(O,null)),c.a.createElement("aside",{className:r.sidebar},c.a.createElement(ce,{scheduledData:a,manualData:n})),c.a.createElement("main",{className:r.content},t))},se=Object(k.a)({center:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}),ue=function(e){var t=e.children,a=e.className,n=se();return c.a.createElement("div",{className:"".concat(n.center," ").concat(a)},t)},me=a(991),de=Object(k.a)((function(e){return{spinner:{color:e.palette.primary.main}}})),pe=function(e){var t=e.size,a=e.message,n=de();return c.a.createElement("div",null,c.a.createElement(ue,null,c.a.createElement(me.a,{className:n.spinner,size:t||40})),c.a.createElement(v.a,null,a))},he=function(e){var t=e.children,a=e.style;return c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",{style:null!==a&&void 0!==a?a:{}},c.a.createElement(ue,null,c.a.createElement(pe,null)))},t)},fe=Object(l.lazy)((function(){return a.e(4).then(a.bind(null,1042))})),ge=Object(l.lazy)((function(){return a.e(5).then(a.bind(null,1043))})),be=Object(l.lazy)((function(){return Promise.all([a.e(3),a.e(6)]).then(a.bind(null,1041))})),Ee=function(e){var t=e.scheduledData,a=e.manualData;return c.a.createElement(ie,{scheduledData:t,manualData:a},c.a.createElement(he,{style:{height:"80vh"}},c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:"/home",component:ge}),c.a.createElement(m.b,{exact:!0,path:"/manual-runs",component:be}),c.a.createElement(m.b,{exact:!0,path:"/manual-runs/:pipelineName",component:be}),c.a.createElement(m.b,{exact:!0,path:"/scheduled-runs",component:be}),c.a.createElement(m.b,{exact:!0,path:"/scheduled-runs/:pipelineName",render:function(e){return c.a.createElement(be,Object.assign({},e,{displayVersion:!1}))}}),c.a.createElement(m.b,{exact:!0,path:"/404",component:fe}),c.a.createElement(m.a,{exact:!0,path:"/",to:"/home"}),c.a.createElement(m.a,{to:"/404"}))))},Ce=function(){var e=Object(l.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)([]),o=Object(s.a)(r,2),i=o[0],p=o[1];return Object(l.useEffect)((function(){var e;(e=g(),console.log("url inside sendRequest is",e),h()({method:"GET",url:e,headers:{Accept:"application/vnd.github.v3+json"}}).then((function(e){return console.log("response inside sendRequest is",e.data),e.data})).catch((function(e){console.log("Error inside sendRequest is",e)}))).then((function(e){console.log("data is",e);var t=function(e){if(e){var t=e.total_count,a=[],n=[];return e.workflows.forEach((function(e){null!=e.name.match(/^Scheduled.*Pipeline$/)?a.push({id:e.id,name:e.name,readableName:Object(b.a)(e.name)}):null!=e.name.match(/.*Pipeline$/)&&n.push({id:e.id,name:e.name,readableName:Object(b.a)(e.name)})})),console.log("total_count is",t),console.log("scheduledData is",a),console.log("manualData is",n),{scheduled:a,manual:n}}return{scheduled:null,manual:null}}(e),a=t.scheduled,r=t.manual;n(a),p(r)}))}),[]),c.a.createElement(u.LitmusThemeProvider,null,c.a.createElement(m.c,{history:d.a},c.a.createElement(Ee,{scheduledData:a,manualData:i})))},ve=a(446),we=a(666),ye=a(667),ke=a(669),xe=a(976);ve.a.use(ye.a).use(we.a).use(xe.e).init({lng:"en",fallbackLng:{"en-US":["en"],"en-GB":["en"],"en-UK":["en"],default:["en"]},debug:!0,ns:["translation"],defaultNS:"translation",backend:{loadPath:"".concat("/e2e-dashboard","/locales/{{lng}}/{{ns}}.yaml"),parse:function(e){return ke.a.load(e)}},interpolation:{escapeValue:!1},react:{useSuspense:!1}});ve.a;i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Ce,null)),document.getElementById("root"))}},[[695,1,2]]]);
//# sourceMappingURL=main.cc0cf92d.chunk.js.map