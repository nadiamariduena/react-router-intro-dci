(this["webpackJsonpnew-shop-react-test"]=this["webpackJsonpnew-shop-react-test"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":0,"productName":"ARC TABLE","url":"https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","price":679.52,"inventory":3,"tags":"table","label":"WOUD","link":"https://www.woud.dk/arc-coffee-table-white-pigmented-ash/","description":"Woud Design Beistelltisch Arc"},{"id":1,"productName":"VASE CACTUS","url":"./images/Arc_table.jpg","price":100.2,"inventory":21,"tags":"vase, leonel lopez","label":"pottery vase","link":"http://byricardomarcenaroi.blogspot.com/2011/04/ceramic-ceramica-mata-ortiz-pottery.html","description":"Lorem ipsum dolor sit amet"},{"id":2,"productName":"WANDSEKRET\xc4R","url":"./images/WANDSEKRET\xc4R.jpg","price":1.999,"inventory":0,"tags":"desk","label":"WOUD","link":"https://www.pamono.de/multifunctional-pill-schrank-in-schwarz-gelb-von-dalius-razauskas-fuer-emko/?utm_medium=cpc&utm_source=google&utm_campaign=PLA_DE_1519633602_56981826143&utm_content=288977479421_c_&utm_term=pla-294682000766___QYI-287317&gclid=EAIaIQobChMIwfGtp5Ki6gIViKoYCh3RewDXEAQYAiABEgKhHfD_BwE","description":" MULTIFUNCTIONAL PILL"},{"id":3,"productName":"Alessa Daybed ","url":"./images/AlessaDaybed.jpg","price":879.52,"inventory":1,"tags":"bed","label":"Daybed, Cushion + Pillow Set","link":"https://www.moeshomecollection.com/product/rn-1036-23/","description":" Daybed, Cushion + Pillow Set"},{"id":4,"productName":"FORDITE ","url":"./images/fordite.jpg","price":7959.5,"inventory":21,"tags":"rug, design","label":"smeg","link":"https://www.archiproducts.com/en/products/cc-tapis/handmade-custom-rug-fordite_388112","description":"cc-tapis Handmade custom rug"},{"id":5,"productName":"SMEG FAB10","url":"./images/smeg-fridge.jpg","price":899,"inventory":21,"tags":"fridge, vintage","label":"smeg","link":"https://www.ambientedirect.com/smeg/fab10-kuehlschrank-mit-gefrierfach_pid_2728.html?adgt_source=gmc&adgt_medium=product&adgt_campaign=de&adgt_content=020012&src=gmc&lan=de&shop_country=de&art=020012000003&gclid=EAIaIQobChMIjJf57JWi6gIViZntCh29GAWjEAQYFiABEgLnw_D_BwE&et_uk=9f03651e646b44518d30720119e7eacb&aff=gmc&nodds=1","description":"FAB10 K\xfchlschrank mit Gefrierfach"}]')},21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(26),a(16)),i=a(17),m=a(20),u=a(19),s=a(6),p=a(1),d=a(10),g=function(){return r.a.createElement("header",null,r.a.createElement(s.b,{className:"style-link-nav",to:"/Home"},r.a.createElement("h3",null,"logo")),r.a.createElement("div",{className:"text"},r.a.createElement("form",{className:"form-searchfield"},r.a.createElement("input",{className:"input-text",type:"text",placeholder:"hellos"}),r.a.createElement("input",{className:"input-search",type:"submit",value:"search"}))),r.a.createElement("nav",null,r.a.createElement(s.b,{className:"style-link-nav",to:"/product"},r.a.createElement("li",null,"Product")),r.a.createElement(s.b,{className:"style-link-nav",to:"/about"},r.a.createElement("li",null,"About"))))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Home"))},h=function(e){var t=e.data.map((function(e){var t=e.id,a=e.productName,n=e.url,l=e.price,c=(e.inventory,e.tags),o=(e.label,e.link,e.description);return r.a.createElement(s.b,{key:t,to:"/product/".concat(t)},r.a.createElement("li",{className:"quote",key:t},r.a.createElement("h1",null,a),r.a.createElement("img",{className:"img-box",src:n,alt:c}),r.a.createElement("p",null,o),r.a.createElement("h5",null,"\u20ac ",l)))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Product"),r.a.createElement("ul",{className:"container-products"},t))},f=function(e){console.log(e);var t=e.data.filter((function(t){return t.id==e.id})).map((function(e){var t=e.id,a=e.productName,n=e.url,l=(e.price,e.inventory,e.tags);e.label,e.link,e.description;return r.a.createElement("div",{key:t},r.a.createElement("h3",null,a),r.a.createElement("img",{src:n,alt:l}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"product-info"},r.a.createElement("h4",null,"ProductInfo"),t))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"about"},r.a.createElement("h3",null,"About Me")))},w=function(){return r.a.createElement("h4",null,"Coming Soon")},v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement(g,null),r.a.createElement("h1",null,"Online Store"),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:E}),r.a.createElement(p.a,{path:"/about",exact:!0,component:b}),r.a.createElement(p.a,{path:"/product/:id",component:function(e){var t=e.match;return r.a.createElement(f,{data:d,id:t.params.id})}}),r.a.createElement(p.a,{path:"/product",exact:!0,component:function(){return r.a.createElement(h,{data:d})}}),r.a.createElement(p.a,{path:function(){return"/main"},component:w})))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d4cc6748.chunk.js.map