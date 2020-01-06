(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{291:function(t,s,a){"use strict";a.r(s);var n=a(38),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Plugin")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("The plugin mechanism of "),a("code",[t._v("Vapper")]),t._v(" is its own backbone. In fact, the many capabilities of "),a("code",[t._v("Vapper")]),t._v(" itself are also implemented based on the plugin mechanism.")])]),t._v(" "),a("h2",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),a("p",[t._v("Plugins can extend the runtime capabilities of the "),a("code",[t._v("Vapper")]),t._v(" application, such as the "),a("router-link",{attrs:{to:"/using-plugin.html#vapper-plugin-cookie"}},[t._v("@vapper/plugin-cookie")]),t._v(" plugin that injects a "),a("code",[t._v("ctx.$cookie")]),t._v(" property into "),a("router-link",{attrs:{to:"/entry.html#context"}},[t._v("context")]),t._v(" object for handling "),a("code",[t._v("cookie")]),t._v(". Plugins can also extend the capabilities of the "),a("code",[t._v("Vapper")]),t._v(" framework itself, such as the "),a("router-link",{attrs:{to:"/using-plugin.html#vapper-plugin-prerender"}},[t._v("@vapper/plugin-prerender")]),t._v(" plugin, which adds a new "),a("code",[t._v("CLI")]),t._v(" command to the framework to perform prerendering. Plugins can also do a lot of things, such as adding "),a("code",[t._v("server")]),t._v(" middleware, hooking into the various sections of "),a("code",[t._v("Vapper")]),t._v(" startup, and so on.")],1),t._v(" "),a("h2",{attrs:{id:"basic-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic usage")]),t._v(" "),a("p",[t._v("Specify the plugin you want to use via the "),a("code",[t._v("plugins")]),t._v(" option in "),a("code",[t._v("vapper.config.js")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'vapper-plugin-do-something'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("plugins")]),t._v(" option is an array, "),a("code",[t._v("'vapper-plugin-do-something'")]),t._v(" is the name of the plugin, and "),a("code",[t._v("Vapper")]),t._v(" will load the plugin based on that name, so you will need to install it manually.")]),t._v(" "),a("p",[t._v("A plugin can also be a function:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myPlugin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./myPlugin.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myPlugin"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("If you want to pass parameters to the plugin, you need to use a nested array:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'vapper-plugin-do-something'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* options */")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("If a plugin extends the runtime capabilities of the "),a("code",[t._v("Vapper")]),t._v(" application, then it may need to get configuration options at runtime. At this point we need to use the "),a("code",[t._v("pluginRuntimeOptions")]),t._v(" object as described in "),a("router-link",{attrs:{to:"/entry.html#plugin-runtime-options"}},[t._v("Runtime Options for Plugins")]),t._v(". If a plugin extends "),a("code",[t._v("Vapper")]),t._v(" at the framework level, such as registering a new command, then do the same as the code above, but these options are not available at runtime.")],1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("A plugin requires a clear documentation describing how it accepts configuration options.")])]),t._v(" "),a("h2",{attrs:{id:"official-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#official-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Official plugin")]),t._v(" "),a("h3",{attrs:{id:"vapper-plugin-prerender"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vapper-plugin-prerender","aria-hidden":"true"}},[t._v("#")]),t._v(" @vapper/plugin-prerender")]),t._v(" "),a("p",[t._v("The plugin provides prerendering capabilities, you can specify the route that needs to be prerendered, and the plugin will render the matching route to the corresponding "),a("code",[t._v("html")]),t._v(" file. When the request comes in, if the specified route is matched, the pre-rendered "),a("code",[t._v("html")]),t._v(" file will be sent to the client as a static resource.")]),t._v(" "),a("p",[t._v("Pre-rendering has many advantages over rendering on-the-fly, which can send content to the client faster, while also reducing the load on the server. But not all pages are suitable for pre-rendering.")]),t._v(" "),a("h4",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("yarn add @vapper/plugin-prerender\n")])])]),a("h4",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'@vapper/plugin-prerender'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        routes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'/foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Add the "),a("code",[t._v("npm")]),t._v(" script:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"generate"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vapper generate"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This plugin registers the "),a("code",[t._v("vapper generate")]),t._v(' command, which is equivalent to "build + generate".')]),t._v(" "),a("h3",{attrs:{id:"vapper-plugin-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vapper-plugin-cookie","aria-hidden":"true"}},[t._v("#")]),t._v(" @vapper/plugin-cookie")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[a("code",[t._v("@vapper/plugin-cookie")]),t._v(" is internally dependent on "),a("a",{attrs:{href:"https://github.com/jshttp/cookie",target:"_blank",rel:"noopener noreferrer"}},[t._v("jshttp/cookie"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("The plugin extends the runtime of the "),a("code",[t._v("Vapper")]),t._v(" application and adds the "),a("code",[t._v("$cookie")]),t._v(" property to the "),a("router-link",{attrs:{to:"/entry.html#context"}},[t._v("context")]),t._v(" object for isomorphic manipulation of "),a("code",[t._v("cookies")]),t._v(", which can be used both on the server and on the client.")],1),t._v(" "),a("h4",{attrs:{id:"installation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("yarn add @vapper/plugin-cookie\n")])])]),a("h4",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'@vapper/plugin-cookie'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("@vapper/plugin-cookie")]),t._v(" plugin accepts runtime options. To pass options for it, you need to add the "),a("code",[t._v("pluginRuntimeOptions")]),t._v(" property to the factory function exported by the entry file:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Entry file")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createApp")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Read cookie named `foo`")]),t._v("\n  ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Set cookie named `foo`")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ncreateApp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pluginRuntimeOptions "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cookie"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* options */")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("@vapper/plugin-cookie")]),t._v(" plugin reads the "),a("code",[t._v("pluginRuntimeOptions.cookie")]),t._v(" object as a configuration option.")]),t._v(" "),a("p",[t._v("We can add a small amount of code to the entry file to enable us to access cookies on any component instance object:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Entry file")]),t._v("\n\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mixin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createApp")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $cookie"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// other options...")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("The following docs assume that "),a("code",[t._v("$cookie")]),t._v(" is accessible through the component instance("),a("code",[t._v("this")]),t._v(").")])]),t._v(" "),a("h5",{attrs:{id:"read-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-cookie","aria-hidden":"true"}},[t._v("#")]),t._v(" Read cookie")]),t._v(" "),a("p",[t._v("Use the "),a("code",[t._v("$cookie.get")]),t._v(" function to read "),a("code",[t._v("cookie")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Arguments:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("{string}")]),t._v(" key")])])]),t._v(" "),a("li",[a("p",[t._v("Return: "),a("code",[t._v("{string | object}")])])]),t._v(" "),a("li",[a("p",[t._v("Usage:")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'token'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("When abandoning the argument for the "),a("code",[t._v("$cookie.get")]),t._v(" function, it returns an object containing all the "),a("code",[t._v("cookies")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cookies "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// cookies = { token: 'xxx', uid: 'xxx', .... }")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h5",{attrs:{id:"set-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-cookie","aria-hidden":"true"}},[t._v("#")]),t._v(" Set cookie")]),t._v(" "),a("p",[t._v("Use the "),a("code",[t._v("$cookie.set")]),t._v(" function to set one or a set of "),a("code",[t._v("cookies")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Arguments:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("{string | array}")]),t._v(" key")]),t._v(" "),a("li",[a("code",[t._v("{string}")]),t._v(" value")]),t._v(" "),a("li",[a("code",[t._v("{object}")]),t._v(" options")])])]),t._v(" "),a("li",[a("p",[t._v("Usage:")])])]),t._v(" "),a("p",[t._v("Set a single "),a("code",[t._v("cookie")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'token'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'token value'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Set multiple "),a("code",[t._v("cookies")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'token'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'token value'")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/foo'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("All available "),a("code",[t._v("options")]),t._v(" can be viewed at: "),a("a",{attrs:{href:"https://github.com/jshttp/cookie#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("jshttp/cookie#options"),a("OutboundLink")],1)]),t._v(" "),a("h5",{attrs:{id:"delete-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-cookie","aria-hidden":"true"}},[t._v("#")]),t._v(" Delete cookie")]),t._v(" "),a("p",[t._v("Use the "),a("code",[t._v("$coookie.delete")]),t._v(" function to remove single or all "),a("code",[t._v("cookies")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Arguments:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("{string}")]),t._v(" key")]),t._v(" "),a("li",[a("code",[t._v("{object}")]),t._v(" options")])])]),t._v(" "),a("li",[a("p",[t._v("Usage:")])])]),t._v(" "),a("p",[t._v("Delete a single "),a("code",[t._v("cookie")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("delete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'token'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("When abandoning the argument for the "),a("code",[t._v("$cookie.delete")]),t._v(" function, it will delete all "),a("code",[t._v("cookies")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cookie"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("delete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Where "),a("code",[t._v("options")]),t._v(" is: "),a("a",{attrs:{href:"https://github.com/jshttp/cookie#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("jshttp/cookie#options"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"plugin-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-options","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin options:")]),t._v(" "),a("h5",{attrs:{id:"propertyname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#propertyname","aria-hidden":"true"}},[t._v("#")]),t._v(" propertyName")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("'$cookie'")])])]),t._v(" "),a("p",[t._v("Specifies the name of the property injected into the component instance. The default is "),a("code",[t._v("$cookie")]),t._v(", so you can access it via the component instance: "),a("code",[t._v("ctx.$cookie")]),t._v(".")]),t._v(" "),a("h5",{attrs:{id:"fromres"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fromres","aria-hidden":"true"}},[t._v("#")]),t._v(" fromRes")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("This option is only valid on the server side and is used to indicate whether the "),a("code",[t._v("cookie")]),t._v(" in the response object("),a("code",[t._v("res")]),t._v(") is read when the "),a("code",[t._v("cookie.get")]),t._v(" function is used to read "),a("code",[t._v("cookie")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"community-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Community plugin")])])},[],!1,null,null,null);s.default=e.exports}}]);