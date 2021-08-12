(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b83e7ca","chunk-a66df572"],{1681:function(t,e,a){},"4bd4":function(t,e,a){"use strict";var s=a("5530"),r=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),n=a("7e2b"),i=a("3206");e["a"]=Object(r["a"])(n["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},s={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(s.valid=a(t)))})):s.valid=a(t),s},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(s["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"615b":function(t,e,a){},"8ce9":function(t,e,a){},a844:function(t,e,a){"use strict";var s=a("5530"),r=(a("a9e3"),a("1681"),a("8654")),n=a("58df"),i=Object(n["a"])(r["a"]);e["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b0af:function(t,e,a){"use strict";var s=a("5530"),r=(a("a9e3"),a("0481"),a("615b"),a("10d2")),n=a("297c"),i=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(n["a"],i["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},i["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},ce7e:function(t,e,a){"use strict";var s=a("5530"),r=(a("8ce9"),a("7560"));e["a"]=r["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},d8f4:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-5"},[a("v-card",{staticClass:"px-10",class:t.bottomPadding,attrs:{light:""}},[t.isHr?a("v-row",{staticClass:"marginBottom",attrs:{"data-testid":"isHRCheck"}},[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-select",{attrs:{items:t.statuses,"item-value":"value","item-text":"status",label:"Status",name:"status",rules:t.statusRules,required:""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),a("v-col",{staticClass:"my-auto",attrs:{cols:"12",sm:"3"}},[a("v-btn",{attrs:{block:"",color:"primary",dark:"",disabled:!t.statusChanged},on:{click:t.submitStatusChanged}},[t._v("Change Status")])],1)],1):t._e(),1==t.currentStatus?a("v-divider"):t._e(),1==t.currentStatus?a("v-form",{ref:"formComment",model:{value:t.isCommentValid,callback:function(e){t.isCommentValid=e},expression:"isCommentValid"}},[a("v-row",{staticClass:"mt-10"},[a("v-col",{attrs:{cols:"12"}},[t.ifView?a("v-textarea",{attrs:{name:"comment",label:"Write your comment here",rules:t.commentRules,solo:"",outlined:"","data-testid":"commentBox"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}):t._e()],1)],1),a("v-row",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",dark:"",disabled:!t.isCommentValid,"data-testid":"commentSubmitBtn"},on:{click:t.submitComment}},[t._v("Submit Comment")])],1)],1):t._e()],1)],1)},r=[],n=a("5530"),i=a("2f62"),o=a("9fb0"),u=o.ApiEndpoint,c={props:["type"],data:function(){return{requirementId:this.$route.params.id,statuses:[{status:"Open",value:1},{status:"Closed",value:2}],isCommentValid:!1,status:null,currentStatus:null,comment:null,statusRules:[function(t){return!!t||"Please select Requirement status."}],commentRules:[function(t){return!!t||"Please write a valid comment."},function(t){return t&&t.length>=30||"Comment must be more than 30 characters"}]}},computed:Object(n["a"])(Object(n["a"])({},Object(i["b"])({isHr:"Auth/is_hr",empName:"Auth/emp_name"})),{},{ifView:function(){return!this.type},statusChanged:function(){return this.status!==this.currentStatus},bottomPadding:function(){return 1===this.currentStatus?"pb-10":"pb-3"},marginBottom:function(){return 1===this.currentStatus?"mb-5":""}}),methods:{submitComment:function(){var t=this,e={requirement_id:this.requirementId,comment:this.comment};u.postComment(e).then((function(e){if(200!==e.status)return new Error(e);var a={comment_by:t.empName,comment:t.comment};return t.$refs.formComment.reset(),t.$store.dispatch("Comment/addComment",a),t.$swal({icon:"success",title:"Success",text:e.data.message}),!0})).catch((function(e){t.$swal({icon:"error",title:"Some Error Occured",text:e.response.data.message})}))},submitStatusChanged:function(){var t=this,e={status:this.status};u.updateStatus(this.requirementId,e).then((function(e){return 200!==e.status?new Error(e):(t.$swal({icon:"success",title:"Success",text:e.data.message}),t.currentStatus=t.status,!0)})).catch((function(e){t.$swal({icon:"error",title:"Some Error Occured",text:e.response.data.message})}))}},created:function(){var t=this;u.getRequirementIdData(this.requirementId).then((function(e){return 200!==e.status?new Error(e):(t.status=e.data.data.status,t.currentStatus=e.data.data.status,!0)})).catch((function(e){t.$swal({icon:"error",title:"Some Error Occured",text:e.response.data.message})}))}},l=c,d=a("2877"),h=a("6544"),m=a.n(h),f=a("8336"),p=a("b0af"),v=a("62ad"),b=a("a523"),g=a("ce7e"),w=a("4bd4"),C=a("0fd9"),x=a("b974"),y=a("2fa4"),B=a("a844"),V=Object(d["a"])(l,s,r,!1,null,null,null);e["default"]=V.exports;m()(V,{VBtn:f["a"],VCard:p["a"],VCol:v["a"],VContainer:b["a"],VDivider:g["a"],VForm:w["a"],VRow:C["a"],VSelect:x["a"],VSpacer:y["a"],VTextarea:B["a"]})}}]);
//# sourceMappingURL=chunk-2b83e7ca.0a613bc6.js.map