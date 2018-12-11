webpackJsonp([0],{"Xay+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"vx",data:function(){return{setInput:"",getInput:"",axiosInput:""}},methods:{setState:function(){this.$store.commit("DATA",this.setInput)},getState:function(){this.getInput=this.$store.getters.getData},axiosReq:function(){var t=this;this.$store.dispatch("getJson",{}).then(function(e){t.axiosInput=e},function(t){console.log(t)})}},mounted:function(){}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"vx"}},[s("div",{staticClass:"bground"},[s("div",{staticClass:"title"},[t._v("vuex应用")]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"content"},[s("div",[t._v("vuex是一套mvc机制，store负责管理应用中的状态(state)与事件(action)。在实际开发中，vuex常用的两个功能有：1. 状态存储，如设置状态set、获取状态get。2. 实现逻辑，如数据请求的操作可封装在vuex中。")]),t._v(" "),s("div",{staticClass:"code-title"},[t._v("状态管理：")]),t._v(" "),s("div",{staticClass:"param"},[s("div",{staticClass:"param-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.setInput,expression:"setInput"}],attrs:{type:"text"},domProps:{value:t.setInput},on:{input:function(e){e.target.composing||(t.setInput=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"param-btn",on:{click:t.setState}},[t._v("存储")]),t._v(" "),s("div",{staticClass:"param-input left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.getInput,expression:"getInput"}],staticClass:"readonly",attrs:{type:"text",readonly:""},domProps:{value:t.getInput},on:{input:function(e){e.target.composing||(t.getInput=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"param-btn",on:{click:t.getState}},[t._v("获取")])]),t._v(" "),s("div",{staticClass:"code-title"}),t._v(" "),s("div",{staticClass:"md"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"javascript"},[t._v('// DATA动作在vuex中定义\n//存储状态\nthis.$store.commit("DATA", this.state.data);\n\n//获取状态\nthis.state.data = this.$store.getters.getData;')])])]),t._v(" "),s("div",{staticClass:"code-title"},[t._v("事件驱动：")]),t._v(" "),s("div",{staticClass:"md"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"javascript"},[t._v('// 事件触发\nlet param = {};\nthis.$store.dispatch("getJson", param).then((json) => {\n\tconsole.log(json);\n}, (error) => {\n\tconsole.log(error);\n});')])])]),t._v(" "),s("div",{staticClass:"md"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"javascript"},[t._v('// 事件处理root/vuex/action\n// 其中http为已封装的网络请求模块\nimport { _get, _post, _delete, _put } from "@/assets/js/http";\n\nlet _prefix = ``; // 请求前缀\nexport const getJson = ({\n\tcommit\n}, query) => {\n\tconst url = `${_prefix}/mockGetJson`;\n\treturn _get({\n\t\t\turl,\n\t\t\tquery\n\t\t}, commit)\n\t\t.then(json => {\n\t\t\treturn Promise.resolve(json);\n\t\t})\n\t\t.catch(error => {\n\t\t\treturn Promise.reject(error);\n\t\t});\n};')])])])])])])},staticRenderFns:[]};var i=s("VU/8")(a,n,!1,function(t){s("aKxu")},"data-v-3eb01b97",null);e.default=i.exports},aKxu:function(t,e){}});
//# sourceMappingURL=0.c4961bc155eddfdb6c64.js.map