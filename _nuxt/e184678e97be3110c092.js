(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1508:function(t,e,o){t.exports=o.p+"img/ca6bff7.svg"},1509:function(t,e,o){t.exports=o.p+"img/6f65d00.svg"},1510:function(t,e,o){t.exports=o.p+"img/5ce59e3.svg"},1511:function(t,e,o){t.exports=o.p+"img/b4b0a1a.svg"},1512:function(t,e,o){"use strict";var r=o(436);o.n(r).a},1513:function(t,e,o){(t.exports=o(3)(!1)).push([t.i,".search_help{position:absolute;left:0;top:0;width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-top:9.375rem;box-sizing:border-box}.search_help .footer{position:fixed;left:0;width:100%;text-align:center;bottom:1.25rem;font-size:1.25rem}.search_help .logo{display:block;margin:0 auto 2.5rem;height:5.9375rem}.search_help .search-box{width:43.75rem;max-width:100%}.search_help .search-box input{display:inline-block;padding:.9375rem 1.25rem;outline:none;border:none;background-color:transparent;box-sizing:border-box}.search_help .search-box .search-input{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;border-radius:.375rem;box-shadow:0 .0625rem .375rem 0 rgba(32,33,36,.28);-webkit-transition:all .3s ease;transition:all .3s ease}.search_help .search-box .search-input.force{-webkit-transform:scale(1.08);transform:scale(1.08)}.search_help .search-box .search-input input{width:calc(100% - 3.125rem)}.search_help .search-box .search-input i{display:inline-block;font-size:1.25rem}@media (max-width:600px){.search_help .search-box{width:100%;padding:0 1.25rem;box-sizing:border-box}}.search_help .info{margin-top:3.125rem;font-size:1.5625rem}.search_help .mouse{position:fixed;left:0;top:0;font-size:2.5rem;-webkit-transform:scaleX(-1);transform:scaleX(-1);-webkit-transition:all 1s linear;transition:all 1s linear}",""])},1564:function(t,e,o){"use strict";o.r(e);o(111);var r={name:"SearchHelp",layout:"blank",head:function(){return{title:this.title}},data:function(){return{title:"帮你百度 - ".concat("MikuTools"),k:"",s:"",n:0,px:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",inputVal:"",info:["第一步：找到搜索框，并点击它","第二步：输入想要查找的内容","第三步：点击搜索按钮，立即前往","学会了吗，是不是很简单"],Logo:{google:o(1508),pornhub:o(1509),baidu:o(1510),github:o(1511)}}},computed:{url:function(){var t=this.$route.query.k,s=this.$route.query.s;return"github"===s?"https://github.com/search?q=".concat(t):"google"===s?"https://www.google.com/search?q=".concat(t):"baidu"===s?"https://www.baidu.com/s?wd=".concat(t):"pornhub"===s?"https://www.pornhub.com/video/search?search=".concat(t):""}},mounted:function(){this.$route.query.s&&this.$route.query.k?(this.k=this.$route.query.k,this.s=this.$route.query.s,this.step1()):this.$swal({type:"error",title:"出现错误",text:"ERROR: 参数不正确"})},methods:{step1:function(){this.n++;var t=this.$refs.input.getBoundingClientRect();this.$refs.mouse.style.transform="translateX(".concat(t.left+20,"px) translateY(").concat(t.top+15,"px) scale(-1,1)"),setTimeout(this.step2,2e3)},step2:function(){var t=this;this.n++,this.$refs.mouse.style.opacity=.3,this.$refs.input.focus(),setTimeout((function(){var s=t.k.split(""),e=200*s.length;s.forEach((function(e,i){setTimeout((function(){t.inputVal=t.k.slice(0,i+1)}),200*i)})),setTimeout(t.step3,e+1e3)}),500)},step3:function(){var t=this,e=this.$refs.searchIcon.getBoundingClientRect();this.$refs.mouse.style.opacity=1,setTimeout((function(){t.n++,t.$refs.mouse.style.transform="translateX(".concat(e.left-15,"px) translateY(").concat(e.top,"px) scale(-1,1)"),setTimeout(t.step4,2e3)}),800)},step4:function(){var t=this;this.n++,setTimeout((function(){window.location.href=t.url}),1e3)}}},n=(o(1512),o(2)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search_help"},[o("div",{ref:"mouse",staticClass:"mouse"},[o("i",{staticClass:"eva eva-navigation-2"})]),t._v(" "),o("div",{staticClass:"search-box"},[o("img",{staticClass:"logo",attrs:{src:t.s?t.Logo[t.s]:t.px,alt:"Logo"}}),t._v(" "),o("div",{staticClass:"search-input",class:2===t.n?"force":""},[o("input",{ref:"input",staticClass:"input-box",attrs:{type:"search"},domProps:{value:t.inputVal}}),t._v(" "),o("i",{ref:"searchIcon",staticClass:"eva eva-search-outline"})])]),t._v(" "),o("div",{staticClass:"info"},[t._v("\n        "+t._s(t.info[t.n-1])+"\n    ")]),t._v(" "),o("div",{staticClass:"footer"},[o("span",[t._v("帮你百度 - BY")]),t._v(" "),o("a",{attrs:{href:t.$store.state.env.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("MikuTools")])])])}),[],!1,null,null,null);e.default=component.exports},436:function(t,e,o){var content=o(1513);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("60008dce",content,!0,{sourceMap:!1})}}]);