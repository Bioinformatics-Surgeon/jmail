(this.webpackJsonpmobile_ui=this.webpackJsonpmobile_ui||[]).push([[0],{137:function(e,t,n){},1629:function(e,t,n){},1632:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(10),i=n.n(a),s=(n(137),n(60)),o=n(29),l=n(30),u=n(1641),j=n(132),b=n(1640),d=n(1639),m=n(1638),O=n(1636),x=n(1637),h=n(13),f=(O.a.Search,function(){return Object(h.jsx)(O.a,{allowClear:!0,placeholder:"input search text",style:{width:200}})}),p={ml_1:{marginLeft:"16px"},mr_1:{marginRight:"16px"},searchBox:{display:"flex",alignItems:"center"}},g=function(e){var t=e.badgeCount,n=e.icon,r=e.text,a=void 0===r?null:r,i=Object(c.useState)(!1),O=Object(s.a)(i,2),g=O[0],y=O[1],_=function(e){switch(e){case"reload":return Object(h.jsx)(u.a,{onClick:function(){window.location.reload()},style:Object(l.a)({},p.ml_1)});case"search":return Object(h.jsx)(j.a,{onClick:function(){y(!g)},style:Object(l.a)({},p.ml_1)});case"settings":return Object(h.jsx)(b.a,{style:Object(l.a)({},p.ml_1)});case"rightOutline":return Object(h.jsx)(d.a,{style:Object(l.a)({},p.ml_1)});case"mail":return Object(h.jsx)(m.a,{style:Object(l.a)({},p.mr_1)});default:return Object(h.jsx)(h.Fragment,{})}}(n);return Object(h.jsxs)(x.b,{direction:"horizontal",children:[g&&Object(h.jsx)(f,{}),Object(h.jsxs)(o.a,{text:t,style:g?Object.assign(p.ml_1,p.searchBox):Object(l.a)({},p.ml_1),children:[a&&a,_]})]})},y=n(129),_=function(e){var t=e.size,n=void 0===t?"default":t,c=e.icon,r=e.text,a=e.style,i=!!c,s=!!r;return Object(h.jsxs)(y.a,{size:n,style:Object(l.a)({},a),shape:"round",type:"primary",children:[i&&c,s&&r]})},v=(n(107),o.b.Item),C=function(e){var t=e.accounts;return Object(h.jsx)(o.b,{children:t.map((function(e){return Object(h.jsx)(v,{extra:e.userEmails.length,arrow:"horizontal",onClick:function(){},children:e.userEmail},e._id)}))})},w=(n(1629),n(107)),E=function(){for(var e=[],t=0;t<40*Math.random()+10;t++)e.push({_id:t,title:w.lorem.words(),body:w.lorem.paragraph(),from:w.name.findName(),email:w.lorem.paragraph(),time:w.date.recent(),isRead:w.random.boolean()});return e},k=function(){for(var e=[],t=0;t<3;t++)e.push({_id:w.random.uuid(),accountName:w.name.findName(),userName:w.internet.userName(),userEmail:w.internet.email(),userEmails:E()});return e},N=function(){return Object(h.jsx)(o.c,{style:{backgroundColor:"#e4e8ec",position:"fixed",bottom:0,width:"100%"},leftContent:Object(h.jsx)(_,{text:"Account",icon:Object(h.jsx)(g,{icon:"mail"})}),rightContent:Object(h.jsx)(_,{text:"Edit"})})},S=["search","reload","settings"];var z=function(){var e=0,t=[],n=Object(c.useState)(0),r=Object(s.a)(n,2),a=r[0],i=r[1],l=Object(c.useState)(k()),u=Object(s.a)(l,2),j=u[0];return u[1],Object(c.useEffect)((function(){j.forEach((function(n){t=n.userEmails.filter((function(e){return!1===e.isRead})),e+=t.length})),i(e)}),[j]),console.log("Acounts: ",j),Object(h.jsxs)("div",{children:[Object(h.jsx)(o.c,{style:{backgroundColor:"#000"},leftContent:Object(h.jsx)(g,{badgeCount:a,text:"JQ Mail"}),rightContent:S.map((function(e,t){return Object(h.jsx)(g,{icon:e},t)}))}),Object(h.jsxs)(x.b,{direction:"vertical",style:{width:"100%"},children:[Object(h.jsx)(C,{accounts:j}),Object(h.jsx)(N,{})]})]})};n(1630),n(1631);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root"))}},[[1632,1,2]]]);
//# sourceMappingURL=main.c598c397.chunk.js.map