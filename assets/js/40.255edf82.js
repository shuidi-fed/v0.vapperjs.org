(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{276:function(t,s,n){"use strict";n.r(s);var a=n(38),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"常见问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#nginx-配置"}},[t._v("Nginx 配置")])]),n("li",[n("a",{attrs:{href:"#使用-webpack-provideplugin-时的注意事项"}},[t._v("使用 webpack.ProvidePlugin 时的注意事项")])]),n("li",[n("a",{attrs:{href:"#vue-server-render-报错-con-t-read-replace-property-on-undefined"}},[t._v("vue-server-render 报错 con't read 'replace' property on undefined")])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"nginx-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx 配置")]),t._v(" "),n("p",[t._v("如果你在本地开发的项目使用了 "),n("code",[t._v("nginx")]),t._v(" 做代理，并且在某个路径下，例如 "),n("code",[t._v("www.foo.com/bar")]),t._v("，那么你需要额外添加 "),n("code",[t._v("location /_vapper")]),t._v(" 和 "),n("code",[t._v("location/__webpack_hmr")]),t._v("，并将其代理到本地服务地址，例如 "),n("code",[t._v("http://127.0.0.1:4000")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("server "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server_name www.foo.com"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  location /bar "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass      http://127.0.0.1:4000"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  location /_vapper_ "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass      http://127.0.0.1:4000"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  location /__webpack_hmr "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass      http://127.0.0.1:4000"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"使用-webpack-provideplugin-时的注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-webpack-provideplugin-时的注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 webpack.ProvidePlugin 时的注意事项")]),t._v(" "),n("p",[t._v("如果你的项目要使用 "),n("code",[t._v("webpack.ProvidePlugin")]),t._v(" 插件，那么一定要注意区分环境，并为不同的环境提供不同模块格式的包，以 "),n("code",[t._v("Vue")]),t._v(" 为例：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 其他配置...")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("chainWebpack")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// provide")]),t._v("\n    config\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("plugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'provide'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProvidePlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果是 server 端，需要提供 commonjs 模块格式")]),t._v("\n          process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("VAPPER_TARGET")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'server'")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vue/dist/vue.runtime.common.prod.js'")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vue/dist/vue.runtime.esm.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{attrs:{class:"token string"}},[t._v("'default'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("关键在于，我们需要为 "),n("code",[t._v("nodejs")]),t._v(" 环境提供 "),n("code",[t._v("commonjs")]),t._v(" 模块风格的包。")]),t._v(" "),n("h2",{attrs:{id:"vue-server-render-报错-con-t-read-replace-property-on-undefined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-server-render-报错-con-t-read-replace-property-on-undefined","aria-hidden":"true"}},[t._v("#")]),t._v(" vue-server-render 报错 con't read 'replace' property on undefined")]),t._v(" "),n("p",[t._v("详情请查看："),n("a",{attrs:{href:"https://github.com/vuejs/vue/issues/9488",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/vue/issues/9488"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[t._v("解决办法为，将如下代码添加到 "),n("code",[t._v("vue.config.js")]),t._v(" 中：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isProd "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    productionSourceMap"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    css"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        extract"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" isProd"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        sourceMap"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);