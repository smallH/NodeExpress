webpackJsonp([18],{"T+/8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("KvKp"),i={name:"login",methods:{enterBtn:function(){Object(o.b)("api_token","api&token&value"),this.$router.push({path:"/core",query:{name:"admin",pw:"123456"}})}},props:{tObject:{type:Object,default:function(){return{}}},tArray:{type:Array,default:function(){return[]}},tNumber:{type:Number,default:0},tBoolean:{type:Boolean,default:!1},tString:{type:String,default:""}},data:function(){return{}},created:function(){console.log("1.created：实例创建完成，但Dom还不存在"),this.$nextTick(function(){console.log("4.$nextTick：在修改数据之后立即使用$nextTick，可获取更新后的真实Dom")})},beforeMount:function(){console.log("2.beforeMount：虚拟Dom创建完成，但未挂载到页面上")},mounted:function(){console.log("3.mounted：挂载到真实Dom上，并数据渲染完成")},components:{},filters:{},watch:{},computed:{}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"login"}},[e("div",{staticClass:"title"},[this._v("欢迎使用 VueYu 框架 ！")]),this._v(" "),e("div",{staticClass:"btn",on:{click:this.enterBtn}},[this._v("进入 VueYu 框架")])])},staticRenderFns:[]};var r=n("VU/8")(i,u,!1,function(t){n("xwSn")},"data-v-2c440298",null);e.default=r.exports},xwSn:function(t,e){}});
//# sourceMappingURL=18.6ed36a610dd83ef293bc.js.map