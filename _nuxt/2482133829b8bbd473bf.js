(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1180:function(t,e,o){"use strict";var l=o(402);o.n(l).a},1181:function(t,e,o){(t.exports=o(3)(!1)).push([t.i,"@-webkit-keyframes flash{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes flash{0%{opacity:0}50%{opacity:1}to{opacity:0}}.lifecount .card{width:100%;display:-webkit-box;display:flex;justify-content:space-around;font-size:1.5625rem;text-align:center;margin-bottom:1.25rem}.lifecount .card .name{margin-bottom:.625rem}.lifecount .card small{font-size:1rem;color:#999;margin-left:.3125rem}@media (max-width:450px){.lifecount .card{font-size:1.25rem}}.lifecount .hint{margin:1.0625rem 0}.lifecount li{margin:.5rem 0;list-style:none;line-height:1.5}.lifecount li .block{width:.9375rem!important;height:.9375rem!important;margin:0 .3125rem 0 0}.lifecount .nya-input{width:100%;box-sizing:border-box}.lifecount .nya-input .mx-input{border-radius:0;height:100%;box-sizing:border-box}.lifecount .box{font-size:0;width:31.25rem;height:31.25rem;max-width:100%;margin:0 auto;overflow:hidden}@media (max-width:610px){.lifecount .box{height:25rem;width:25rem}}@media (max-width:360px){.lifecount .box{height:21.875rem;width:21.875rem}}.lifecount .box .flash{-webkit-animation:flash 2s ease infinite;animation:flash 2s ease infinite;background-color:#4fa38c}.lifecount .block{display:inline-block;width:calc(5% - .375rem);height:calc(5% - .375rem);margin:.1875rem}.lifecount .block.past{background-color:#98c3b9}.lifecount .block.sleep{background-color:#c1e8f9}.lifecount .block.work{background-color:#ab9f93}.lifecount .block.child{background-color:#e3a6ab}.lifecount .block.parents{background-color:#7ea1b7}.lifecount .block.surplus{background-color:#e2e2e2}.lifecount .block.retired{background-color:#f8c039}",""])},1570:function(t,e,o){"use strict";o.r(e);var l=o(401).a,n=(o(1180),o(2)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lifecount"},[o("nya-container",{attrs:{title:"人生小格"}},[o("client-only",[o("date-picker",{staticClass:"nya-input",attrs:{editable:!1,placeholder:"选择你的生日","default-value":t.defaultValue,"value-type":"format","not-before":t.from,"not-after":t.to},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),t.dateData?o("nya-container",{attrs:{title:"已经过去了"}},[o("div",{staticClass:"card"},[o("div",{staticClass:"list"},[o("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.past.year)),o("small",[t._v("年")])]),t._v(" "),o("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.past.hour)),o("small",[t._v("时")])])]),t._v(" "),o("div",{staticClass:"list"},[o("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.past.month)),o("small",[t._v("月")])]),t._v(" "),o("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.past.minute)),o("small",[t._v("分")])])]),t._v(" "),o("div",{staticClass:"list"},[o("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.past.day)),o("small",[t._v("天")])]),t._v(" "),o("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.past.second)),o("small",[t._v("秒")])])])])]):t._e(),t._v(" "),t.dateData?o("nya-container",{attrs:{title:"剩下的时间"}},[o("div",{staticClass:"card"},[o("div",{staticClass:"list"},[o("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.have.year)),o("small",[t._v("年")])]),t._v(" "),o("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.have.hour)),o("small",[t._v("时")])])]),t._v(" "),o("div",{staticClass:"list"},[o("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.have.month)),o("small",[t._v("月")])]),t._v(" "),o("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.have.minute)),o("small",[t._v("分")])])]),t._v(" "),o("div",{staticClass:"list"},[o("div",{staticClass:"name"},[t._v("\n                    "+t._s(t.dateData.have.day)),o("small",[t._v("天")])]),t._v(" "),o("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateData.have.second)),o("small",[t._v("秒")])])])])]):t._e(),t._v(" "),t.results?o("nya-container",{attrs:{title:"你的人生进度"}},[o("div",{staticClass:"box"},t._l(t.results.blockArr,(function(e,l){return o("div",{key:l,staticClass:"block",class:[e.type,{retired:323===l&&l>=t.results.length.past},{flash:l===t.results.length.past-1}]})})),0)]):t._e(),t._v(" "),t.results?o("nya-container",{attrs:{title:"分享链接"}},[o("nya-copy",{attrs:{copy:t.share+"\n这是我的人生进度，你也快来查询一下吧~"}},[o("div",{domProps:{textContent:t._s(t.share)}})])],1):t._e(),t._v(" "),o("nya-container",{attrs:{title:"说明"}},[o("li",[o("small",[t._v("参考了小程序"),o("b",[t._v(" lifecount ")]),t._v("而制作的网页版本")])]),t._v(" "),o("li",[o("b",[t._v("假设我们的寿命是80岁,分为400个方块。")])]),t._v(" "),o("div",{staticClass:"hint"},[o("li",[o("div",{staticClass:"block past"}),t._v(" 你已经走过的生命")]),t._v(" "),o("li",[o("div",{staticClass:"block sleep"}),t._v(" 如果你平均每天休息 8 小时，这是你余下生命里睡眠占用的时间")]),t._v(" "),o("li",[o("div",{staticClass:"block work"}),t._v(" 如果你 65 岁退休，退休前平均每天工作 8 小时，这是你余下生命里工作占用的时间")]),t._v(" "),o("li",[o("div",{staticClass:"block retired"}),t._v(" 65 岁，你退休了")]),t._v(" "),o("li",[o("div",{staticClass:"block child"}),t._v(" 如果你 28 岁生孩子，孩子18岁出门上大学，这 18 年里你平均每天能花 5 个小时陪伴孩子，这里是你余下生命里所用去的时间")]),t._v(" "),o("li",[o("div",{staticClass:"block parents"}),t._v(" 如果你每个月能看望父母一天，在他们 80 岁前，这是你的余生里还能陪伴他们的时光")]),t._v(" "),o("li",[o("div",{staticClass:"block surplus"}),t._v(" 除了以上之外，你剩下的所有日子")])]),t._v(" "),o("li",[t._v("数据仅供娱乐，人生苦短，继续努力吧~")])])],1)}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,o){"use strict";(function(t){o(51),o(52),o(25),o(15),o(90);var l,n=o(347),r=o.n(n);l=o(522).default,e.a={name:"Lifecount",components:{DatePicker:l},head:function(){return this.$store.state.currentTool.head},data:function(){return{date:"",defaultValue:r()().subtract(18,"year").format("YYYY-MM-DD"),from:r()().subtract(78,"year").toDate(),to:r()().subtract(1,"year").toDate(),updateDate:null,dateData:!1}},computed:{results:function(){if(!this.date.trim())return!1;var t=[],e=r()(this.date),o=r()(),l=o.diff(e,"day"),n=e.add(80,"year").diff(o,"day"),c=e.add(65,"year").diff(o,"day"),d=e.add(46,"year").diff(o,"day"),f=e.add(52,"year").diff(o,"day"),v=~~(l/72),m=~~(8*n/1728),h=c<=0?0:~~(8*c/1728),_=d<=0?0:~~(5*d/1728),y=f<=0?0:~~(f/31*24/1728),k=400-(m+v+h+_+y);k<=0&&(k=0);var data={past:v,sleep:m,work:h,child:_,parents:y,surplus:k};return Object.keys(data).forEach((function(e){for(var i=0;i<data[e];i++)t.push({type:e})})),{blockArr:t,length:data}},share:function(){return"".concat("http://tools.minesky.top:88").concat(this.$route.path,"?k=").concat(t.from(this.date).toString("base64"))}},watch:{date:function(t){if(!t)return clearInterval(this.updateDate),this.dateData=!1,!1;this.setDateData(),this.updateDate=setInterval(this.setDateData,1e3)}},mounted:function(){if(this.$route.query.k)try{var e=t.from(this.$route.query.k,"base64").toString();this.date=e}catch(t){}},methods:{setDateData:function(){var t=r()(this.date),e=r()(),o=t.add(80,"year");this.dateData={past:{year:e.diff(t,"year",!0).toFixed(1),month:e.diff(t,"month",!0).toFixed(1),day:e.diff(t,"day",!0).toFixed(1),hour:e.diff(t,"hour",!0).toFixed(1),minute:e.diff(t,"minute",!0).toFixed(1),second:e.diff(t,"second",!0).toFixed(1)},have:{year:o.diff(e,"year",!0).toFixed(1),month:o.diff(e,"month",!0).toFixed(1),day:o.diff(e,"day",!0).toFixed(1),hour:o.diff(e,"hour",!0).toFixed(1),minute:o.diff(e,"minute",!0).toFixed(1),second:o.diff(e,"second",!0).toFixed(1)}}}}}}).call(this,o(9).Buffer)},402:function(t,e,o){var content=o(1181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("5a32f6f4",content,!0,{sourceMap:!1})}}]);