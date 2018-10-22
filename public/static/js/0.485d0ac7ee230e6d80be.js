webpackJsonp([0],{"4ySI":function(n,e){n.exports="<script>\n    // 全局注册\n    Vue.directive('focus',{});\n\n    //局部注册\n    var app = new Vue({\n        el:'#app',\n        directives:{\n            focus:{}\n        }\n    });\n<\/script>"},"85ki":function(n,e){n.exports='\x3c!-- 组件嵌套 --\x3e\n<tabs v-model="activeKey">\n    <pane label="标签一" name="1" />\n    <pane label="标签二" name="2" />\n    <pane label="标签三" name="3" />\n</tabs>\n'},ANzR:function(n,e){n.exports='<script>\n    el： 指令所绑定的元素，可以用来直接操作DOM.\n    bind： 一个对象，包含以下属性：\n        name： 指令名，不包括v-前缀\n        value：指令的绑定值，例如v-my-directive="1+1"，value的值是2\n        oldValue：指令绑定的前一个值，仅在update和componentUpdate钩子中可用。无论值是否改变都可用\n        expression：绑定值的字符串形式。例如v-my-directive="1+1"，expression的值时"1+1"\n        arg：传给指令的参数。例如v-my-directive:foo，arg的值是foo\n        modifiers：一个包含修饰符的对象。例如v-my-directive.foo.bar，修饰符对象modifiers的值是{foo:true,bar:true}\n    vnode：Vue编译生成的虚拟节点\n    oldVnode：上一个虚拟节点仅在update和componentUpdate钩子中可用\n<\/script>'},BHIs:function(n,e){n.exports='<script>\n    // 正常通信 \n    this.$emit("dispevent",param); // 抛出事件\n    <my-comp @dispevent="eventHandle"></my-comp> // 接听事件\n\n    // v-model双向绑定语法糖通信\n    this.$emit("input",param); // 抛出事件\n    <my-comp v-model="value"></my-comp> // 接听事件\n<\/script>'},EI3E:function(n,e){n.exports='\x3c!-- tabs组件 --\x3e\n<div class="tabs">\n    <div class="tabs-bar">\n        <div v-for="(item,index) in navList" @click="handleClick(index)">{{item.label}}</div>\n    </div>\n    <div class="tabs-content">\n        \x3c!-- 不具名slot，即不设name --\x3e\n        <slot></slot>\n    </div>\n</div>\n\n<script>\n    // 获取子组件pane核心代码\n    data:function(){\n        return {\n            navList:[]\n        }\n    },\n    methods:{\n        getTabs(){\n            return this.$children.filter(function(item){\n                return item.$options.name === \'pane\';\n            });\n        },\n        updateNav(){\n            this.navList = [];\n            var _this = this;\n            this.getTabs().forEach(function(pane,index){\n                _this.navList.push({\n                    label:pane.label,\n                    name:pane.name || index\n                });\n            });\n        }\n    }\n<\/script>'},GRcx:function(n,e){},"J/ZD":function(n,e){n.exports='\x3c!-- 循环语句 --\x3e\n<template v-for="item in filterItems">\n    <li>{{item.name}}</li>\n</template>\n\n\x3c!-- 计算属性过滤 --\x3e\n<script>\n    data() {\n        return {\n            items: [{\n                name: "大熊猫"\n            }, {\n                name: "北极熊"\n            }, {\n                name: "黑豹"\n            }]\n        }\n    }，\n    computed: {\n        filterItems: function() {\n            return this.items.filter(function(item) {\n                return item.name.match(/熊/); // 筛选出带\'熊\'字的项\n            });\n        }\n    }\n<\/script>'},Kc2Z:function(n,e){n.exports='<input type="text" v-model.lazy="message" />\n<p>输入内容为：{{message}}</p>'},MoEH:function(n,e){n.exports='<input type="radio" :checked="picked" :value="value" />\n<input type="checkbox" v-model="picked" :value="value" />\n\n<script>\n    data() {\n        return {\n            picked: true|false, // 单独使用时匹配格式为真假\n            value: "A"\n        }\n    }\n<\/script>'},MoN1:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("bOdI"),s=t.n(i),v=t("wzRu"),d=t.n(v),a=t("sWPh"),o=t.n(a),c=t("J/ZD"),r=t.n(c),l=t("R1u/"),p=t.n(l),m=t("MoEH"),u=t.n(m),_=t("Kc2Z"),f=t.n(_),b=t("QSN7"),h=t.n(b),x=t("sH4W"),M=t.n(x),g=t("O4qf"),y=t.n(g),D=t("cMhI"),k=t.n(D),C=t("BHIs"),I=t.n(C),z=t("atov"),S=t.n(z),V=t("qqz2"),$=t.n(V),E=t("r5EJ"),T=t.n(E),w=t("mI4B"),H=t.n(w),O=t("Towu"),N=t.n(O),R=t("85ki"),j=t.n(R),q=t("EI3E"),A=t.n(q),L=t("4ySI"),W=t.n(L),J=t("V3jz"),U=t.n(J),B=t("ANzR"),Z=t.n(B),K=t("SqMD"),P=t.n(K),F=t("WjrI"),G=t.n(F),Q={name:"TestScope",data:function(){return{}},props:{book:{type:Object}},methods:{redo:function(n){return n+".后缀"}}},X={render:function(){var n=this.$createElement;return(this._self._c||n)("div",[this._t("book",null,{bookName:this.redo(this.book.name)})],2)},staticRenderFns:[]};var Y={name:"learn",data:function(){return{size:"large",disabled:!0,type:"name",items:[{name:"大熊猫"},{name:"北极熊"},{name:"黑豹"}],message:"",book:{name:"我的故乡"},dynclassesMD:d.a,vonceMD:o.a,vforMD:r.a,vinputMD:p.a,vmodelMD1:u.a,vmodelMD2:f.a,vmodelMD3:h.a,vmodelMD4:M.a,vcompMD1:y.a,vcompMD2:k.a,vcompMD3:I.a,vcompMD4:S.a,vcompMD5:$.a,vnexttickMD:T.a,sscopeMD1:H.a,sscopeMD2:N.a,snestingMD1:j.a,snestingMD2:A.a,vdireMD1:W.a,vdireMD2:U.a,vdireMD3:Z.a,vdireMD4:P.a,vdireMD5:G.a}},computed:{dynclasses:function(){var n;return["btn","md",(n={},s()(n,"btn-"+this.size,""!==this.size),s()(n,"disabled",this.disabled),n)]},filterItems:function(){return this.items.filter(function(n){return n.name.match(/熊/)})},sortedItems:function(){return this.items.sort(function(n,e){return n.name.length>e.name.length})}},components:{TestScope:t("VU/8")(Q,X,!1,function(n){t("GRcx")},"data-v-ce228ce0",null).exports},methods:{handleToggleClick:function(){this.type="name"===this.type?"mail":"name"},handleInput:function(n){this.message=n.target.value}},mounted:function(){this.msg="go!"}},nn={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"learn"}},[t("div",{staticClass:"bground"},[t("div",{staticClass:"title"},[n._v("常用知识点")]),n._v(" "),t("div",{staticClass:"line"}),n._v(" "),t("div",{staticClass:"content"},[t("div",[n._v("关于vue的常用知识点总结与透析。")]),n._v(" "),t("div",{staticClass:"code-title"},[n._v("### 动态类名")]),n._v(" "),t("div",{staticClass:"page-4"},[t("div",[n._v('动态类名，如果表达式较长或逻辑复杂，应尽可能地优先使用计算属性。下列代码中 ["btn-" + this.size] 就是通过使用计算属性给元素动态设置类名：btn-large。')]),n._v(" "),t("div",{class:n.dynclasses},[n._v("我是通过计算出来的，我的字体比较大")])]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.dynclassesMD))])])])]),n._v(" "),t("div",{staticClass:"code-title"},[n._v("### 内置指令")]),n._v(" "),t("div",{staticClass:"page-5"},[t("div",[n._v("1.v-once指令：不需要表达式的指令，作用是使元素或组件只渲染一次，渲染后不随数据的变化而重新渲染，视为静态内容。该指令在业务中很少使用，当需要优化性能时可能会用到。")]),n._v(" "),n._m(0),n._v(" "),t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vonceMD))])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("2.v-if、v-else-if、v-else指令：条件渲染指令，当条件为真时当前元素、组件及所有子节点将被渲染。出于效率考虑，会尽可能地复用已有元素而非重新渲染，当给元素添加key属性后，则一定会重新渲染，。")]),n._v(" "),t("div",[n._v("input元素复用：")]),n._v(" "),t("div",["name"===n.type?t("div",[t("label",[n._v("用户名：")]),n._v(" "),t("input",{attrs:{placeholder:"用户名(请先均输入文本)"}})]):t("div",[t("label",[n._v("邮   箱：")]),n._v(" "),t("input",{attrs:{placeholder:"邮箱(请先均输入文本)"}})])]),n._v(" "),t("div",[n._v("input元素不复用：")]),n._v(" "),t("div",["name"===n.type?t("div",{key:"name-input"},[t("label",[n._v("用户名：")]),n._v(" "),t("input",{attrs:{placeholder:"用户名(请先均输入文本)"}})]):t("div",{key:"mail-input"},[t("label",[n._v("邮   箱：")]),n._v(" "),t("input",{attrs:{placeholder:"邮箱(请先均输入文本)"}})])]),n._v(" "),t("button",{staticStyle:{"margin-top":"5px"},on:{click:n.handleToggleClick}},[n._v("切换输出类型")]),n._v(" "),t("br"),t("br"),n._v(" "),t("div",[n._v("3.v-show指令：与v-if的用法基本一致，只不过v-show是改变了元素的CSS属性display。选择情形：v-if更适合条件不经常改变的场景，因为它切换开销相对较大，而v-show适用于频繁切换条件。")]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("4.使用v-for指令循环时实现过滤与排序")]),n._v(" "),t("div",[t("ul",[n._l(n.filterItems,function(e){return[t("li",[n._v(n._s(e.name))])]})],2)]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vforMD))])])])])]),n._v(" "),t("div",{staticClass:"code-title"},[n._v("### 关于v-model知识点")]),n._v(" "),t("div",[n._v("1.@input代替v-model：使用v-model时，如果是中文输入法，一般在没有选定词组前，Vue不会更新数据，当敲下汉字时才会触发更新。如果希望总是实时更新，可以用@input代替v-model。")]),n._v(" "),t("div",[t("input",{attrs:{type:"text"},on:{input:n.handleInput}}),n._v(" "),t("p",[n._v("输入内容为："+n._s(n.message))])]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vinputMD))])])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("2.单选与复选中的v-model细节：单选和复选单独使用时，直接绑定真假即可，即picked匹配为true|false，代码如下。当组合使用时均用到v-model，v-model与input标签value属性匹配，单选组合picked匹配格式为字符串，复选组合picked匹配为字符串数组。")]),n._v(" "),t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vmodelMD1))])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("3.v-model修饰符：与事件修饰符类似，v-model也有修饰符，用于控制数据同步的时机。使用.lazy修饰符会转变为change事件中同步，此时message并不是实时改变，而是在失焦或按回车时更新")]),n._v(" "),t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vmodelMD2))])])]),t("br"),n._v(" "),t("div",[n._v("使用.number修饰符可以将输入转换为Number类型，否则默认均为String类型")]),n._v(" "),t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vmodelMD3))])])]),t("br"),n._v(" "),t("div",[n._v("使用.trim修饰符可以自动过滤输入的首尾空格")]),n._v(" "),t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vmodelMD4))])])]),n._v(" "),t("div",{staticClass:"code-title"},[n._v("### 关于组件知识点")]),n._v(" "),t("div",[n._v("1.组件入参大小写细节：由于HTML特性不区分大小写，当组件的入参props命名为驼峰式命名时，在组件应用时要转为短横分隔命名才会生效，实际业务中建议应尽量使用小写命名。")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vcompMD1))])])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("2.组件入参变量，如果直接传递数字、布尔值、数组、对象，而不使用v-bind，传递的仅仅是字符串。")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vcompMD2))])])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("3.组件通信原则，通过props入参，通过$emit往外抛出事件。")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vcompMD3))])])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("4.事件管理实现除了使用vuex外，还可以使用bus事件管理器，具体看项目规模按需选择。")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vcompMD4))])])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("5.除了通过双向绑定，watch监听变量变化外，也可以通过$refs手动去调用子组件内部的方法或修改变量。")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vcompMD5))])])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("6.一种特殊的slot用法，作用域插槽：使用场景是内容渲染权由使用者掌握，但数据可以通过子组件临时变量获取。即入参json属性数据需要通过子组件方法计算或封装才可使用，但实际上是由使用者渲染时，可以通过这种方法解决。实际业务中，这类slot用法较少。")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.sscopeMD1))])])]),n._v(" "),t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.sscopeMD2))])])])]),n._v(" "),t("div",[t("test-scope",{attrs:{book:n.book},scopedSlots:n._u([{key:"book",fn:function(e){return[t("div",[n._v(n._s(e.bookName))])]}}])})],1),n._v(" "),t("br"),n._v(" "),t("div",[n._v("7.$nextTick机制：Vue在观察到数据变化时并不是直接更新DOM，而是开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。在缓冲时会除去重复数据，从而避免不必要的计算和DOM操作。然后，在下一个事件循环tick中，Vue刷新队列并执行实际（已去重的）工作。所以如果用一个for循环来动态改变数据100次，其实它只会应用最后一次改变。")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vnexttickMD))])])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("8.组件嵌套子组件，可以通过this.$children获取子组件数量及data数据，自定义组件嵌套，一般使用不具名的slot标签。")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.snestingMD1))])])]),n._v(" "),t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.snestingMD2))])])])]),n._v(" "),t("div",{staticClass:"code-title"},[n._v("### 关于自定义指令知识点")]),n._v(" "),t("div",[n._v("1.自定义指令分为全局和局部注册")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vdireMD1))])])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("2.自定义指令包括5种钩子函数：bind、inserted、update、componentUpadate、unbind。")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vdireMD2))])])]),n._v(" "),t("div",[n._v("每个钩子函数都有以下几个参数可用：")]),n._v(" "),t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vdireMD3))])])])]),n._v(" "),t("br"),n._v(" "),t("div",[n._v("3.自定义指令为绑定函数时的处理方法：如点击组件范围外，触发隐藏函数事件。")]),n._v(" "),t("div",[t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vdireMD4))])])]),n._v(" "),t("div",[n._v("注册v-clickoutside指令：")]),n._v(" "),t("div",{staticClass:"md"},[t("pre",[t("code",[n._v(n._s(n.vdireMD5))])])])])])])])},staticRenderFns:[function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"md"},[this._v("我始终只被渲染一次")])}]};var en=t("VU/8")(Y,nn,!1,function(n){t("TAdv")},"data-v-5d09e0e9",null);e.default=en.exports},O4qf:function(n,e){n.exports='\x3c!-- 组件使用入参 --\x3e\n<div>\n    <base-select :place-holder="param"></base-select>\n</div>\n\n\x3c!-- 如给组件base-select.vue设定参数 --\x3e\n<script>\n    props: {\n        placeHolder: {\n            type: String,\n            default: "请选择"\n        }\n    }\n<\/script>\n'},QSN7:function(n,e){n.exports='<input type="number" v-model.number="message" />\n<p>{{typeof message}}</p>'},"R1u/":function(n,e){n.exports='\x3c!-- 用@input替代v-model --\x3e\n<div>\n    <input type="text" @input="handleInput" />\n    <p>输入内容为：{{message}}</p>\n</div>\n\n<script>\n    methods: {\n        handleInput: function(e) {\n            this.message = e.target.value;\n        }\n    }\n<\/script>'},SqMD:function(n,e){n.exports='\x3c!-- 自定义指令v-clickoutside --\x3e\n<div v-clickoutside="handleClose">\n    // 组件范围内\n<div>    \n// 组件范围外\n\n<script>\n    methods:{\n        handleClose: function(){\n            this.show = false;\n        }\n    }\n<\/script>'},TAdv:function(n,e){},Towu:function(n,e){n.exports='\x3c!-- 组件test-scope.vue --\x3e\n<template>\n    <div>\n        <slot name="book" :book-name="redo(book.name)"></slot>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: "TestScope",\n        data() {\n            return {}\n        },\n        props: {\n            book: {\n                type: Object\n            }\n        },\n        methods: {\n            redo: function(name) {\n                return(name + ".后缀"); // 封装属性\n            }\n        }\n    }\n<\/script>\n\n<style lang="stylus" rel="stylesheet/stylus" scoped></style>'},V3jz:function(n,e){n.exports="<script>\n    // 钩子函数\n    Vue.directive('focus',{\n        bind:function(el, binding, vnode){}\n    });\n<\/script>"},WjrI:function(n,e){n.exports="<script>\n    Vue.directive('clickoutside',{\n        bind: function(el, binding, vnode){\n            function documentHandler(e){\n                if(el.contains(e.target)){\n                    return false;\n                }\n                if(binding.expression){\n                    binding.value(e); // 执行回调函数\n                }\n            }\n            el.__vueClickOutside__ = documentHandler;\n            document.addEventListener('click',documentHandler);\n        },\n        unbind: function(el, binding){\n            document.removeEventListener('click', el.__vueClickOutside__);\n            delect el.__vueClickOutside__;\n        }\n    });\n<\/script>"},atov:function(n,e){n.exports='<script>\n    // bug事件管理器\n    var bus = new Vue();\n    bus.$emit("on-message","发送事件");\n    bus.$on("on-message",function(msg){\n        // 接收事件\n    });\n<\/script>'},cMhI:function(n,e){n.exports='<div>\n    \x3c!-- 传入的是字符串，长度length为 7 --\x3e\n    <my-comp message="[1,2,3]"></my-comp>\n    \x3c!-- 传入的是数组，长度length为 3 --\x3e\n    <my-comp :message="[1,2,3]"></my-comp>\n</div>'},mI4B:function(n,e){n.exports='<test-scope :book="book">\n    <template slot="book" scope="props">\n        <div>{{props.bookName}}</div>\n    </template>\n</test-scope>\n\n<script>\n    data() {\n        return {\n            book: {\n                name: "我的故乡"\n            }\n        }\n    }\n<\/script>'},qqz2:function(n,e){n.exports='\x3c!-- 设置唯一命名 --\x3e\n<div>\n    <my-copm ref="compA"><my-copm>\n</div>\n<script>\n    //调用\n    this.$refs.compA.method();\n<\/script>\n'},r5EJ:function(n,e){n.exports="<script>\n    this.$nextTick(function(){\n        // 上一次队列循环渲染结束                        \n    });\n<\/script>\n"},sH4W:function(n,e){n.exports='<input type="text" v-model.trim="message" />\n<p>输入内容为：{{message}}</p>'},sWPh:function(n,e){n.exports="\x3c!-- 仅渲染一次 --\x3e\n<div v-once>我始终只被渲染一次</div>"},wzRu:function(n,e){n.exports='\x3c!-- 类名绑定计算属性 --\x3e\n<div :class="dynclasses">我是通过计算出来的，我的字体比较大</div>\n\n<script>\n    data() {\n        return {\n            size: "large"\n        }\n    },\n    computed: {\n        dynclasses: function() {\n            return ["btn",\n                {\n                    ["btn-" + this.size]: this.size !== "",\n                    ["disabled"]: this.disabled\n                }\n            ]\n        }\n    }\n<\/script>'}});
//# sourceMappingURL=0.485d0ac7ee230e6d80be.js.map