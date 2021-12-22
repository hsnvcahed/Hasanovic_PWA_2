(function(e){function t(t){for(var r,s,c=t[0],i=t[1],l=t[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"networkAddress",(function(){return R}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container d-flex flex-column justify-content-center align-items-center mt-5",attrs:{id:"app"}},[n("div",{staticClass:"container d-flex flex-row w-100"},[n("p",[e._v("Get the latest news!")]),n("button",{staticClass:"btn btn-success",on:{click:e.subscribe}},[e._v("Subscribe")])]),n("p",{staticClass:"text-h2 my-1"},[e._v("Employee Database")]),n("img",{staticClass:"my-5",staticStyle:{width:"60%"},attrs:{alt:"no image",src:"/images/employees.jpg"}}),e.offline?n("div",{staticClass:"alert text-center fw-bold alert-danger w-100"},[e._v("You are offline")]):e._e(),n("ButtonGet",{on:{get:e.fetchData}}),n("CardView",{attrs:{offline:!e.offline,employees:e.employees},on:{del:e.delEmployee}})],1)},o=[],s=n("b85c"),c=n("5530"),i=n("1da1"),l=(n("d81d"),n("4de4"),n("38cf"),n("ac1f"),n("5319"),n("d3b7"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("96cf"),n("bc3a")),u=n.n(l),f=n("1d25"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-outline-primary",on:{click:function(t){return e.$emit("get")}}},[e._v("Get Employees")])])},p=[],b={},m=b,v=n("2877"),h=Object(v["a"])(m,d,p,!1,null,"d62479b4",null),g=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.employees.length>0,expression:"employees.length > 0"}]},[n("div",{staticClass:"row justify-content-center mt-4"},e._l(e.employees,(function(t){return n("div",{key:t.email,staticClass:"card p-2 m-2 bg-light",staticStyle:{width:"22rem"}},[n("img",{staticClass:"mx-auto d-block",attrs:{src:t.picture.large,alt:"picture of employee"}}),n("div",{staticClass:"mx-auto d-block mt-2"},[n("h4",[e._v("Name: "+e._s(t.name.title)+" "+e._s(t.name.first)+" "+e._s(t.name.last))]),n("p",{staticClass:"card-text"},[e._v("Email: "+e._s(t.email))]),n("p",{staticClass:"card-text"},[e._v("Phone: "+e._s(t.phone))])]),n("button",{staticClass:"btn btn-outline-danger mx-auto d-block mt-3",on:{click:function(n){return e.$emit("del",t)}}},[e._v("Delete")])])})),0)])])},w=[],x={props:{employees:{type:Array},offline:{type:Boolean}},created:function(){}},k=x,O=(n("e2bc"),Object(v["a"])(k,y,w,!1,null,"764f0aee",null)),_=O.exports,j={name:"app",components:{ButtonGet:g,CardView:_},data:function(){return{employees:[],serverAddress:"",offline:!1}},methods:{setUpIDB:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["a"])("employeesDB",1,{upgrade:function(e,t,n){e.createObjectStore("employees",{keyPath:"id"})}});case 2:e.db=t.sent;case 3:case"end":return t.stop()}}),t)})))()},fetchData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.offline){t.next=28;break}return t.next=3,u.a.get("".concat(e.serverAddress,"/employees"));case 3:return n=t.sent,r=n.data,r=r.map((function(e){return Object(c["a"])(Object(c["a"])({},e),{},{isDeleted:!1})})),e.employees=r,t.next=9,e.db.clear("employees");case 9:a=Object(s["a"])(r),t.prev=10,a.s();case 12:if((o=a.n()).done){t.next=18;break}return i=o.value,t.next=16,e.db.put("employees",i);case 16:t.next=12;break;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](10),a.e(t.t0);case 23:return t.prev=23,a.f(),t.finish(23);case 26:t.next=34;break;case 28:return console.log("GETTING FROM IDB"),console.log("#################"),t.next=32,e.db.getAll("employees");case 32:l=t.sent,e.employees=l.filter((function(e){return!e.isDeleted}));case 34:case"end":return t.stop()}}),t,null,[[10,20,23,26]])})))()},delEmployee:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.offline){n.next=6;break}return r=e.id,n.next=4,u()({url:t.serverAddress+"/employees/".concat(r),method:"DELETE"});case 4:n.next=9;break;case 6:return e.isDeleted=!0,n.next=9,t.db.put("employees",e);case 9:t.fetchData();case 10:case"end":return n.stop()}}),n)})))()},updateAvailable:function(){confirm("New content is available!. Click OK to refresh")&&window.location.reload()},subscribe:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("serviceWorker"in navigator){t.next=3;break}return console.log("no service worker!"),t.abrupt("return");case 3:return t.next=5,navigator.serviceWorker.ready;case 5:return n=t.sent,t.next=8,n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e.urlBase64ToUint8Array("BGiXVWLfnjvogeHNKlXOl_QPH0RD79RTSky1Rge0lMp-ET3n7XsvM1HxXRs-R0Ee-j_UP8m1p6uTFz87J4aIL8Q")});case 8:return r=t.sent,t.next=11,u.a.post("/subscribe",r);case 11:case"end":return t.stop()}}),t)})))()},urlBase64ToUint8Array:function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(n),a=new Uint8Array(r.length),o=0;o<r.length;++o)a[o]=r.charCodeAt(o);return a},isOnline:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.offline=!1,t.next=3,e.db.getAll("employees");case 3:n=t.sent,n=n.filter((function(e){return e.isDeleted})),r=Object(s["a"])(n),t.prev=6,r.s();case 8:if((a=r.n()).done){t.next=14;break}return o=a.value,t.next=12,e.delEmployee(o);case 12:t.next=8;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](6),r.e(t.t0);case 19:return t.prev=19,r.f(),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[6,16,19,22]])})))()}},created:function(){var e=this;document.addEventListener("swUpdated",this.updateAvailable),window.addEventListener("online",(function(){return e.isOnline()})),window.addEventListener("offline",(function(){return e.offline=!0})),this.setUpIDB()}},E=j,C=Object(v["a"])(E,a,o,!1,null,null,null),A=C.exports,D=n("9483");Object(D["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){alert("NEW CONTENT FOUND, PLEASE UPDATE!"),console.log("New content is downloading.")},updated:function(e){document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("ab8b");r["a"].config.productionTip=!1;var R="http://127.0.0.1:3000";new r["a"]({render:function(e){return e(A)}}).$mount("#app")},e2bc:function(e,t,n){"use strict";n("f8b7")},f8b7:function(e,t,n){}});
//# sourceMappingURL=app.2e8e8508.js.map