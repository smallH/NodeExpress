webpackJsonp([9],{JdtT:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"filter"}},[i("div",{staticClass:"bground"},[i("div",{staticClass:"title"},[this._v("全局过滤filters")]),this._v(" "),i("div",{staticClass:"line"}),this._v(" "),i("div",{staticClass:"content"},[i("div",[this._v("全局过滤配置是指在root/filters/index.js文件下定义过滤条件函数后，即可在表达式中使用“|”号来添加过滤条件，无需再从组件中引入或额外设置")]),this._v(" "),i("div",{staticClass:"code-title"}),this._v(" "),i("div",{staticClass:"md"},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[i("code",{staticClass:"javascript"},[this._v("// filters/index.js\n\t\t\t\t\t\n// 首字母转为大写\nexport function capitalize(value) {\n\tif(!value) return ''\n\tvalue = value.toString()\n\treturn value.charAt(0).toUpperCase() + value.slice(1)\n}\n\n// Component\n<div>hello|capitalize</div> //最终渲染为<div>Hello</div>")])])])])])])},staticRenderFns:[]};var a=e("VU/8")({name:"filter"},s,!1,function(t){e("euan")},"data-v-a1c55d0a",null);i.default=a.exports},euan:function(t,i){}});
//# sourceMappingURL=9.0b58432d5ef4753ffaea.js.map