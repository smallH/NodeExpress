webpackJsonp([14],{X0j3:function(t,e){},"Xay+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"vx",data:function(){return{setInput:"",getInput:"",axiosInput:""}},methods:{setState:function(){this.$store.commit("DATA",this.setInput)},getState:function(){this.getInput=this.$store.getters.getData},axiosReq:function(){var t=this;this.$store.dispatch("getJson",{}).then(function(e){t.axiosInput=e},function(t){console.log(t)})}},mounted:function(){}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"vx"}},[s("div",{staticClass:"bground"},[s("div",{staticClass:"title"},[t._v("vuex应用")]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"content"},[s("div",[t._v("\r\n\t\t\t\t\tvuex是一套组件状态管理机制，通过this.$store管理应用中的状态(state)与事件(action)。\r\n\t\t\t\t\t在实际开发中，vuex常用的两个功能有：1. 状态：状态存储和获取。2. 事件：实现异步逻辑处理，如API接口请求。\r\n\t\t\t\t\t这里要注意，通过vuex改变组件状态值时，组件是不会自动重新渲染的，要实现自动渲染可以通过...mapGetters实现，功能等同与react-redux中的connect(mapState)：\r\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"code-title"},[t._v("状态存储和获取：")]),t._v(" "),s("div",{staticClass:"param"},[s("div",{staticClass:"param-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.setInput,expression:"setInput"}],attrs:{type:"text"},domProps:{value:t.setInput},on:{input:function(e){e.target.composing||(t.setInput=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"param-btn",on:{click:t.setState}},[t._v("存储")]),t._v(" "),s("div",{staticClass:"param-input left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.getInput,expression:"getInput"}],staticClass:"readonly",attrs:{type:"text",readonly:""},domProps:{value:t.getInput},on:{input:function(e){e.target.composing||(t.getInput=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"param-btn",on:{click:t.getState}},[t._v("获取")])]),t._v(" "),s("div",{staticClass:"code-title"}),t._v(" "),s("div",{staticClass:"md"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"javascript"},[t._v('//存储状态\r\nthis.$store.commit("DATA", somedata);\r\n\r\n//获取状态\r\nthis.state.data = this.$store.getters.getData;')])])]),t._v(" "),s("div",{staticClass:"code-title"},[t._v("事件驱动：")]),t._v(" "),s("div",{staticClass:"md"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"javascript"},[t._v('// 事件触发\r\nlet param = {};\r\nthis.$store.dispatch("getJson", query).then((json) => {\r\n\tconsole.log(json);\r\n}, (error) => {\r\n\tconsole.log(error);\r\n});')])])]),t._v(" "),s("div",{staticClass:"code-title"},[t._v("事件处理：")]),t._v(" "),s("div",{staticClass:"md"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"javascript"},[t._v('// 其中http为网络请求模块\r\nimport { _get, _post, _delete, _put } from "@/assets/js/http";\r\n\r\nlet _prefix = ``; // 请求前缀\r\nexport const getJson = ({commit}, query) => {\r\n\tconst url = `${_prefix}/mockGetJson`;\r\n\treturn _get({\r\n\t\turl,\r\n\t\tquery\r\n\t}, commit)\r\n\t.then(json => {\r\n\t\treturn Promise.resolve(json);\r\n\t})\r\n\t.catch(error => {\r\n\t\treturn Promise.reject(error);\r\n\t});\r\n};')])])])])])])},staticRenderFns:[]};var r=s("C7Lr")(n,a,!1,function(t){s("X0j3")},"data-v-6998f14e",null);e.default=r.exports}});
//# sourceMappingURL=14.98f4774afca7405b7a03.js.map