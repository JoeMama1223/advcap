(this["webpackJsonpadventure-capitalist"]=this["webpackJsonpadventure-capitalist"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(6),c=t.n(i),s=(t(17),t(3)),o=t(2);t(24);function u(e){var a=e.timeTaken,t=e.timeAlreadyRun,i=e.onComplete,c=void 0===i?function(){}:i,o=e.autoStart,u=e.uuid,m=Object(n.useState)(a-t),d=Object(s.a)(m,2),p=d[0],b=d[1],f=Object(n.useRef)();return Object(n.useEffect)((function(){if(b(a-t),o){var e=(new Date).getTime()+a-Number(t);return f.current=setInterval((function(){var a=(new Date).getTime();e>a?b(e-a):(clearInterval(f.current),c())}),10),function(){clearInterval(f.current)}}}),[u,o]),r.a.createElement("div",{className:"count-down-timer"},l(p))}var l=function(e){var a=Math.ceil(e/1e3),t=Math.floor(a/3600);a%=3600;var n=Math.floor(a/60),r=a%60;return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")+":"+String(r).padStart(2,"0")};t(25);function m(e){var a=e.timeTaken,t=e.timeAlreadyRun,i=e.uuid,c=e.autoStart,o=Object(n.useState)(0),u=Object(s.a)(o,2),l=u[0],m=u[1],d=Object(n.useRef)();return Object(n.useEffect)((function(){if(m(0),c){var e=(new Date).getTime()-t;return d.current=setInterval((function(){var t=100*((new Date).getTime()-e)/a;m("".concat(t,"%")),t>=100&&clearInterval(d.current)})),function(){clearInterval(d.current)}}}),[i,c]),r.a.createElement("div",{className:"progress-bar"},r.a.createElement("span",{style:{width:l}}))}var d=t(31),p=function(e){return{type:"SET_LAST_RUN",payload:{businessId:e}}};t(26);function b(e){var a=e.id,t=e.name,i=e.price,c=e.lastRun,l=e.timeTaken,b=e.hasManager,f=e.quantityPurchased,v=e.icon,h=e.profit,g=Object(n.useState)(Object(d.a)()),E=Object(s.a)(g,2),y=E[0],O=E[1],j=Object(n.useState)(b),S=Object(s.a)(j,2),N=S[0],k=S[1],w=Object(n.useState)(0),_=Object(s.a)(w,2),T=_[0],R=_[1],I=Object(o.b)(),M=Object(o.c)((function(e){return e.balance})),C=function(e){e.preventDefault(),N||(O(Object(d.a)()),k(!0),I(p(a)))},A=function(){M.amount>=i&&(I({type:"BUY_BUSINESS",payload:{businessId:a,qty:1}}),I({type:"DECREASSE_BALANCE",payload:{amount:i}}))};return Object(n.useEffect)((function(){b&&(O(Object(d.a)()),k(!0),I(p(a)))}),[b]),Object(n.useEffect)((function(){var e=(new Date).getTime();c&&e-c<l&&(R(e-c),k(!0))}),[]),r.a.createElement("div",{className:"business"},!!f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"business-icon",onClick:C},r.a.createElement("img",{src:"/adventure-capitalist/images/"+v,alt:"icon",width:"60"}),r.a.createElement("div",{className:"business-quantity"},f)),r.a.createElement("div",{className:"business-content"},r.a.createElement("div",{className:"business-progress",onClick:C},r.a.createElement(m,{timeTaken:l,timeAlreadyRun:T,uuid:y,autoStart:N}),r.a.createElement("span",{className:"business-profit"},"$",h.toLocaleString())),r.a.createElement("div",{className:"business-buy-and-timer"},r.a.createElement("div",{className:"business-buy"+(M.amount>=i?" active":""),onClick:A},r.a.createElement("span",null,"Buy"),r.a.createElement("span",null,"$",i.toLocaleString())),r.a.createElement("div",{className:"business-timer"},r.a.createElement(u,{timeTaken:l,timeAlreadyRun:T,autoStart:N,uuid:y,onComplete:function(){R(0),k(b),I({type:"INCREASE_BALANCE",payload:{amount:h}}),b&&(O(Object(d.a)()),I(p(a)))}}))))),!f&&r.a.createElement("div",{className:"business-unpurchased"+(M.amount>=i?" active":""),onClick:A,style:{backgroundImage:"url(".concat("/adventure-capitalist","/images/lock.png)")}},r.a.createElement("span",null,t),r.a.createElement("br",null),r.a.createElement("span",{className:"price"},"$",i.toLocaleString())))}t(27);function f(){var e=Object(o.c)((function(e){return e.managers})),a=Object(o.c)((function(e){return e.balance})),t=Object(n.useState)(!1),i=Object(s.a)(t,2),c=i[0],u=i[1],l=function(e){return Object.values(e).sort((function(e,a){return e.order-a.order}))},m=!!l(e).find((function(e){return e.price<=a.amount&&!e.hired})),d=Object(o.b)();return r.a.createElement("div",null,r.a.createElement("div",{className:"manager-btn"+(m?" active":""),onClick:function(){return u(!0)}},"Managers"),c&&r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-close",onClick:function(){return u(!1)}},r.a.createElement("img",{src:"/adventure-capitalist/images/close.png",alt:"Close"})),r.a.createElement("h2",null,"Managers"),r.a.createElement("p",{className:"sub-title"},"Managers make life easier!",r.a.createElement("br",null),"Hire one to run your business for you."),r.a.createElement("div",{className:"manager-list"},l(e).filter((function(e){return!e.hired})).map((function(e){return r.a.createElement("div",{key:e.businessId,className:"manager"},r.a.createElement("div",{className:"manager-info"},r.a.createElement("div",{className:"manager-name"},e.name),r.a.createElement("div",{className:"manager-desc"},e.description),r.a.createElement("div",{className:"manager-price"},"$",e.price.toLocaleString())),r.a.createElement("button",{disabled:e.price>a.amount,onClick:function(){!function(e){e.price<=a.amount&&d(function(e){return{type:"HIRE_MANAGER",payload:{manager:e}}}(e))}(e)}},"Hire"))}))))))}t(28);var v=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(isNaN(e))return 0;for(var t=1;a-- >0;)t*=10;var n=.5*Number.EPSILON*e;return Math.round((e+n)*t)/t};function h(e){var a=e.onClose,t=void 0===a?function(){}:a,n=Object(o.c)((function(e){return e.awayEarning}));return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-close",onClick:function(){return t()}},r.a.createElement("img",{src:"/adventure-capitalist/images/close.png",alt:"Close"})),r.a.createElement("h2",null,"Wecome back!"),r.a.createElement("div",{className:"come-back-info"},"Horay! While you are away for ",r.a.createElement("span",{className:"away-time"},n.awayDuration),", the managers help you earn ",r.a.createElement("span",{className:"earning-amount"},"$",v(n.amount).toLocaleString()),".",r.a.createElement("br",null),r.a.createElement("br",null),"It's amazing!")))}var g=function(){var e=Object(o.c)((function(e){return e.balance})),a=Object(o.c)((function(e){return e.businesses})),t=Object(o.c)((function(e){return e.awayEarning})),i=Object(n.useState)(!1),c=Object(s.a)(i,2),u=c[0],l=c[1];return Object(n.useEffect)((function(){t&&t.amount&&l(!0)}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"side-bar"},r.a.createElement("img",{src:"/adventure-capitalist/images/capitalist.png",alt:"Capitalist"}),r.a.createElement(f,null)),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"balance"},r.a.createElement("span",null,"$",e.amount.toLocaleString())),r.a.createElement("div",{className:"businesses"},function(e){return Object.values(e).sort((function(e,a){return e.order-a.order}))}(a).map((function(e){return r.a.createElement(b,Object.assign({},e,{timeTaken:1e3*e.timeTaken,key:e.id}))}))))),u&&r.a.createElement(h,{onClose:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=t(5),y={amount:0},O=t(4),j=t(1),S={lemonade_stand:{id:"lemonade_stand",order:1,name:"Lemonade stand",price:1,timeTaken:1,quantityPurchased:1,hasManager:!1,profit:1,icon:"lemon.png"},newspaper_delivery:{id:"newspaper_delivery",order:2,name:"Newspaper Deliver",price:30,timeTaken:3,quantityPurchased:0,hasManager:!1,profit:25,icon:"newspaper.png"},car_wash:{id:"car_wash",order:3,name:"Car Wash",price:500,timeTaken:6,quantityPurchased:0,hasManager:!1,profit:300,icon:"car.png"},pizza_delivery:{id:"pizza_delivery",order:4,name:"Pizza Delivery",price:3e3,timeTaken:12,quantityPurchased:0,hasManager:!1,profit:2e3,icon:"pizza.png"},donut_shop:{id:"donut_shop",order:5,name:"Donut Shop",price:5e4,timeTaken:30,quantityPurchased:0,hasManager:!1,profit:2e4,icon:"donut.png"},shrimp_boat:{id:"shrimp_boat",order:6,name:"Shrimp Boat",price:8e5,timeTaken:90,quantityPurchased:0,hasManager:!1,profit:4e5,icon:"boat.png"},hockey_team:{id:"hockey_team",order:7,name:"Hockey Team",price:6e6,timeTaken:600,quantityPurchased:0,hasManager:!1,profit:4e6,icon:"hockey.png"},movie_studio:{id:"movie_studio",order:8,name:"Movie Studio",price:1e8,timeTaken:3600,quantityPurchased:0,hasManager:!1,profit:4e7,icon:"movie.png"},bank:{id:"bank",order:9,name:"Bank",price:5e9,timeTaken:36e3,quantityPurchased:0,hasManager:!1,profit:1e9,icon:"bank.png"},oil_company:{id:"oil_company",order:10,name:"Oil Company",price:153434564431,timeTaken:36e3,quantityPurchased:0,hasManager:!1,profit:51434564431,icon:"company.png"}},N={alex:{id:"alex",order:1,name:"Alex",businessId:"lemonade_stand",description:"Run Lemonade Stands",price:20,hired:!1},catherine:{id:"catherine",order:2,name:"Catherine",businessId:"newspaper_delivery",description:"Run Newspaper Deliveries",price:60,hired:!1},terry:{id:"terry",order:3,name:"Terry",businessId:"car_wash",description:"Run Car Washes",price:1500,hired:!1},peter:{id:"peter",order:4,name:"Peter",businessId:"pizza_delivery",description:"Run Pizza Deliveries",price:6e3,hired:!1},simon:{id:"simon",order:5,name:"Simon",businessId:"donut_shop",description:"Run Donut Shops",price:1e5,hired:!1},trump:{id:"trump",order:6,name:"Trump",businessId:"shrimp_boat",description:"Run Shrimp Boats",price:1e6,hired:!1},stefani:{id:"stefani",order:7,name:"Stefani",businessId:"hockey_team",description:"Run Hockey Teams",price:8e6,hired:!1},louis:{id:"louis",order:8,name:"Louis",businessId:"movie_studio",description:"Run Movie Studios",price:2e8,hired:!1},jessica:{id:"jessica",order:9,name:"Jessica",businessId:"bank",description:"Run Banks",price:8e9,hired:!1},tony:{id:"tony",order:10,name:"Tony",businessId:"oil_company",description:"Run Oil Companies",price:353434564431,hired:!1}},k={amount:0,awayDuration:""},w=Object(E.b)({balance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCREASE_BALANCE":return{amount:v(e.amount+a.payload.amount)};case"DECREASSE_BALANCE":return{amount:v(e.amount-a.payload.amount)};default:return e}},businesses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"BUY_BUSINESS":var t=a.payload.businessId,n=e[t],r=a.payload.qty,i=v(1.1*n.price*r),c=v(n.profit+n.price*r*.3);return Object(j.a)(Object(j.a)({},e),{},Object(O.a)({},t,Object(j.a)(Object(j.a)({},n),{},{quantityPurchased:n.quantityPurchased+r,price:i,profit:c})));case"SET_LAST_RUN":var s=e[a.payload.businessId];return Object(j.a)(Object(j.a)({},e),{},Object(O.a)({},s.id,Object(j.a)(Object(j.a)({},s),{},{lastRun:(new Date).getTime()})));case"HIRE_MANAGER":var o=e[a.payload.manager.businessId];return Object(j.a)(Object(j.a)({},e),{},Object(O.a)({},o.id,Object(j.a)(Object(j.a)({},o),{},{hasManager:!0})));default:return e}},managers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"HIRE_MANAGER":var t=a.payload.manager;return Object(j.a)(Object(j.a)({},e),{},Object(O.a)({},t.id,Object(j.a)(Object(j.a)({},t),{},{hired:!0})));default:return e}},awayEarning:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;return a.type,e}}),_=function(e){function a(e){return e>1?"s":""}var t=Math.floor(e/1e3),n=Math.floor(t/31536e3);if(n)return n+" year"+a(n);var r=Math.floor((t%=31536e3)/86400);if(r)return r+" day"+a(r);var i=Math.floor((t%=86400)/3600);if(i)return i+" hour"+a(i);var c=Math.floor((t%=3600)/60);if(c)return c+" minute"+a(c);var s=t%60;return s?s+" second"+a(s):"less than a second"},T=function(){try{var e=localStorage.getItem("Capitalist_CloseTime");if(null===e)return;return Number(e)}catch(a){return void console.warn(a)}},R=Object(E.c)(w,function(){try{var e=localStorage.getItem("Capitalist_State");if(null===e)return;return function(e){var a=0,t=(new Date).getTime(),n=T()||t;return Object.values(e.businesses).forEach((function(r){if(r.quantityPurchased&&r.hasManager&&r.lastRun){var i=Math.floor((t-r.lastRun)/1e3),c=Math.floor(i/r.timeTaken);a+=c*r.profit,r.lastRun+=c*r.timeTaken*1e3}r.quantityPurchased&&r.hasManager&&!r.lastRun&&(r.lastRun=t),r.quantityPurchased&&!r.hasManager&&r.lastRun&&n-r.lastRun<1e3*r.timeTaken&&t-r.lastRun>=1e3*r.timeTaken&&(a+=r.profit),e.businesses[r.id]=r})),e.balance.amount+=a,e.awayEarning={amount:a,awayDuration:_(t-n)},e}(JSON.parse(e))}catch(a){return void console.warn(a)}}());R.subscribe((function(){!function(e){try{localStorage.setItem("Capitalist_State",JSON.stringify(e))}catch(a){console.warn(a)}}(R.getState())}));var I=R;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:I},r.a.createElement(g,null))),document.getElementById("root")),window.addEventListener("unload",(function(){try{localStorage.setItem("Capitalist_CloseTime",(new Date).getTime())}catch(e){console.warn(e)}})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.82e0df5b.chunk.js.map