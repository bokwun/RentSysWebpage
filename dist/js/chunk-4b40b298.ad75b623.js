(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b40b298"],{1511:function(t,s,n){"use strict";n.r(s);var o=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"mainFrame"},[n("pageTopBar"),n("div",{staticClass:"header",staticStyle:{"min-width":"1190px"}},[n("div",{staticClass:"pos2"},[n("div",{staticClass:"logo",on:{click:t.goIndex}},[t._v("\n        XX租房\n      ")]),n("span",{staticClass:"freeRelease",staticStyle:{"font-size":"18px"},on:{click:function(s){return t.goRelease()}}},[t._v("免费发布\n      ")])])]),n("div",{staticClass:"mainBox"},[t._m(0),n("div",{staticClass:"record"},[n("ul",{staticClass:"listUI"},t._l(t.showMsg,(function(s,o){return n("list",{key:o,attrs:{items:s,isUV:t.isUV}})})),1)])]),n("div",{staticClass:"gototop",on:{click:t.gototop}},[n("p",[t._v("返回")]),n("p",[t._v("顶部")])])],1)},e=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"listTitle"},[n("ul",[t._v("\n        我的发布\n      ")])])}],i=n("df62"),a=n("b1ed"),c=n("bc3a"),l=n.n(c),r={data:function(){return{localIP:this.GLOBAL.localIP,userN:"",showMsg:[],isUV:!0}},components:{list:a["a"],pageTopBar:i["a"]},mounted:function(){this.showList()},methods:{showList:function(){var t=this,s=JSON.parse(window.sessionStorage.data);this.userN=s;var n="http://"+this.localIP+"/api/returnUserMsg/"+this.userN.id;l.a.get(n).then((function(s){t.showMsg=s.data.messages})).catch((function(t){console.log(t)}))},goIndex:function(){this.$router.push("/")},gototop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},goRelease:function(){this.$router.push("/addHouseInfo")}}},u=r,d=(n("2b68"),n("2877")),p=Object(d["a"])(u,o,e,!1,null,"23c58112",null);s["default"]=p.exports},"2b68":function(t,s,n){"use strict";var o=n("b77c"),e=n.n(o);e.a},b77c:function(t,s,n){}}]);
//# sourceMappingURL=chunk-4b40b298.ad75b623.js.map