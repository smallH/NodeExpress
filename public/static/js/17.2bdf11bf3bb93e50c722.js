webpackJsonp([17],{"6rvO":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"proxy"}},[s("div",{staticClass:"bground"},[s("div",{staticClass:"title"},[t._v("proxy代理服务")]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"content"},[s("div",[t._v("proxy代理服务是指通过代理实现访问非同域下的后台数据的服务，仅用于开发环境。基于前后端分离原则，开发过程中联调时常常存在跨域请求的问题，使用proxy代理服务可以将请求模拟至同一域名下，解决了跨域联调问题。要使用代理服务，需要配置proxy项：")]),t._v(" "),s("div",{staticClass:"code-title"},[t._v("假设服务端的域名和端口为http://127.17.5.117:3000，打开root/config/index.js文件，配置proxyTable项如下：")]),t._v(" "),s("div",{staticClass:"md"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"javascript"},[t._v("dev: {\n\t...\n\tproxyTable: {\n\t\t'/api': {\n\t\t\ttarget: 'http://127.17.5.117:3000',\n\t\t\tsecure: false,\n\t\t\tchangeOrigin: true,\n\t\t\tpathRewrite: {\n\t\t\t\t'^/api': ''\n\t\t\t},\n\t\t\tonProxyReq(proxyReq, req, res) {\n\t\t\t\tproxyReq.setHeader('Referer', 'http://127.17.5.117:3000');\n\t\t\t\tproxyReq.setHeader('Origin', 'http://127.17.5.117:3000');\n\t\t\t},\n\t\t\tonProxyRes(proxyRes, req, res) {\n\t\t\t\tproxyRes.headers['Access-Control-Request-Origin'] = '*';\n\t\t\t\tproxyRes.headers['Access-Control-Request-Headers'] = '*';\n\t\t\t}\n\t\t}\n\t},\n\t...\n}")])])]),t._v(" "),s("div",{staticClass:"code-title"},[t._v("配置后，重启项目，访问本项目自身域名就等效于访问非同域下的http://127.17.5.117:3000且不会有跨域访问的错误：")]),t._v(" "),s("div",{staticClass:"md"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s("code",{staticClass:"javascript"},[t._v("import axios from 'axios'\n\nlet path = \"http://127.0.0.1/api/mockGetJson\"; // 等同于访问http://127.17.5.117:3000/api/mockGetJson且不会有跨域错误\naxios.get(path).then(function(resp) {\n\tconsole.log(resp.data);\n}).catch(error => {\n\tconsole.log(error);\n});")])])])])])])},staticRenderFns:[]};var n=s("VU/8")({name:"proxy"},r,!1,function(t){s("FtwW")},"data-v-277648fa",null);e.default=n.exports},FtwW:function(t,e){}});
//# sourceMappingURL=17.2bdf11bf3bb93e50c722.js.map