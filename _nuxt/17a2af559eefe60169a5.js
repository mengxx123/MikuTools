(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1165:function(e,t,n){"use strict";var r=n(395);n.n(r).a},1166:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".hide_tool .nya-btn{margin:.3125rem;font-weight:400;padding:.3125rem .625rem}.hide_tool .nya-btn.hide{opacity:.5}@media (max-width:600px){.hide_tool .nya-btn{margin:.3125rem;width:calc(50% - .625rem);box-sizing:border-box;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}}",""])},1553:function(e,t,n){"use strict";n.r(t);n(92),n(115);var r=n(441),o=n(18),c=n.n(o),l={name:"HideTool",components:{Search:r.a},head:function(){return this.$store.state.currentTool.head},data:function(){return{searchText:""}},computed:{toolsLost:function(){var e=[];return this.$store.state.tools.forEach((function(t){e=e.concat(t.list)})),e}},methods:{enterFirst:function(e){this.hide(e.path)},hide:function(path){if(["/hide_tool","/links"].includes(path))return this.$swal({type:"error",title:"操作失败",text:"ERROR: 该项目无法隐藏"}),!1;var e=c.a.chain(this.$store.state.setting.hide);-1===e.indexOf(path).value()?e.push(path).value():e.pull(path).value(),this.$store.commit("SET_STORE",{key:"setting.hide",value:e.value()})},handleClass:function(path){return{hide:-1!==this.$store.state.setting.hide.indexOf(path)}}}},h=(n(1165),n(2)),component=Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hide_tool"},[n("Search",{on:{enter:e.enterFirst},scopedSlots:e._u([{key:"default",fn:function(data){return e._l(data.data,(function(t){return n("button",{key:t.path,staticClass:"nya-btn",class:e.handleClass(t.path),attrs:{type:"button"},on:{click:function(n){return e.hide(t.path)}}},[e._v("\n                "+e._s(t.name)+"\n            ")])}))}}]),model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),e._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:!e.searchText,expression:"!searchText"}],attrs:{title:"网站工具隐藏"}},e._l(e.$store.state.tools,(function(t,r){return n("div",{key:r},[e._l(t.list,(function(t){return n("button",{key:t.path,staticClass:"nya-btn",class:e.handleClass(t.path),attrs:{type:"button"},on:{click:function(n){return e.hide(t.path)}}},[e._v("\n                "+e._s(t.name)+"\n            ")])})),e._v(" "),n("hr")],2)})),0),e._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[e._v("如果你不希望某些工具在首页显示，可以点击改至透明后进行隐藏")])])])],1)}),[],!1,null,null,null);t.default=component.exports},351:function(e,t,n){var content=n(394);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("2f79bba4",content,!0,{sourceMap:!1})},393:function(e,t,n){"use strict";var r=n(351);n.n(r).a},394:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".search-component .nya-container{margin-bottom:2.1875rem!important}.search-component .search{margin-bottom:3.125rem;margin-top:1.125rem;width:100%;padding:1rem;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;background-color:#fff;box-shadow:.5rem .875rem 2.375rem rgba(39,44,49,.06),.0625rem .1875rem .5rem rgba(39,44,49,.03);box-sizing:border-box;border-radius:.5rem;-webkit-transition:all .3s ease;transition:all .3s ease}.search-component .search.transparent{background-color:hsla(0,0%,100%,.65)}.search-component .search.focus{background-color:var(--theme);color:#fff;-webkit-transform:scale(1.02);transform:scale(1.02);box-shadow:0 .5rem .625rem rgba(36,159,253,.30196)}.search-component .search.focus input{color:#fff}.search-component .search.focus input::-webkit-input-placeholder{color:#fff}.search-component .search.focus input::-moz-placeholder{color:#fff}.search-component .search.focus input:-ms-input-placeholder{color:#fff}.search-component .search.focus input::-ms-input-placeholder{color:#fff}.search-component .search.focus input::placeholder{color:#fff}.search-component .search i{font-size:1.5625rem;margin-right:.9375rem}.search-component .search input{width:100%;outline:none;border:none;box-shadow:none;background-color:transparent;color:var(--t1)}.search-component .search input::-webkit-input-placeholder{-webkit-transition:color .3s ease;transition:color .3s ease;padding-left:.3125rem}.search-component .search input::-moz-placeholder{-moz-transition:color .3s ease;transition:color .3s ease;padding-left:.3125rem}.search-component .search input:-ms-input-placeholder{-ms-transition:color .3s ease;transition:color .3s ease;padding-left:.3125rem}.search-component .search input::-ms-input-placeholder{-ms-transition:color .3s ease;transition:color .3s ease;padding-left:.3125rem}.search-component .search input::placeholder{-webkit-transition:color .3s ease;transition:color .3s ease;padding-left:.3125rem}.search-component .search-placeholder{position:relative;text-align:center;font-size:1.25rem;font-weight:700;top:-.5rem;letter-spacing:.09375rem;width:100%}",""])},395:function(e,t,n){var content=n(1166);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("2c93e3b8",content,!0,{sourceMap:!1})},441:function(e,t,n){"use strict";n(177),n(34),n(180),n(40);var r={name:"Search",inheritAttrs:!1,props:{value:{default:null,type:[String,Number]}},data:function(){return{focus:!1}},computed:{toolsList:function(){var e=[];return this.$store.state.tools.forEach((function(t){e=e.concat(t.list)})),e},searchList:function(){var e=this;if(!this.value)return[];var t=[],n=this.value.toLowerCase();return this.toolsList.forEach((function(r){return!("/hide_tool"!==e.$route.path&&!e.showBtn(r))&&(r.pinyin.first.find((function(i){return i.indexOf(n)>=0}))?t.push(r):r.pinyin.pinyin.find((function(i){return i.indexOf(n)>=0}))?t.push(r):void(r.name.toLowerCase().indexOf(n)>=0&&t.push(r)))})),t}},mounted:function(){window.addEventListener("keydown",this.ctrlF)},beforeDestroy:function(){window.removeEventListener("keydown",this.ctrlF)},methods:{ctrlF:function(e){70==e.keyCode&&e.ctrlKey&&(e.preventDefault(),this.$refs.search.focus())},enterFirst:function(){if(!this.searchList.length)return!1;this.$emit("enter",this.searchList[0])},showBtn:function(e){return this.$store.state.setting.hide.indexOf(e.path)<0}}},o=(n(393),n(2)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-component"},[n("div",{staticClass:"search",class:{transparent:"none"!==e.$store.state.setting.bg.type&&e.$store.state.setting.bg.transparentEl,focus:e.focus}},[n("i",{staticClass:"eva eva-search-outline"}),e._v(" "),n("input",e._b({ref:"search",attrs:{type:"search",placeholder:"搜索工具"+(e.$store.state.isMobile.any?"":"(Ctrl+F)")},domProps:{value:e.value},on:{change:function(t){return e.$emit("change",t)},input:function(t){return e.$emit("input",t.target.value)},keyup:[function(t){return e.$emit("keyup",t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterFirst(t)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}},"input",e.$attrs,!1))]),e._v(" "),e.value?n("nya-container",{attrs:{title:"搜索结果",icon:"search-outline"}},[e._t("default",null,{data:e.searchList}),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.searchList.length,expression:"!searchList.length"}],staticClass:"search-placeholder"},[e._v("\n            暂无搜索结果\n        ")])],2):e._e()],1)}),[],!1,null,null,null);t.a=component.exports}}]);