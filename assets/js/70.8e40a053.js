(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{510:function(e,n,a){"use strict";a.r(n);var t=a(54),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("ul",[a("li",[e._v("何用之有\n"),a("ul",[a("li",[e._v("节省空间，坐标引用仓库jar包，无需处处copy jar")]),e._v(" "),a("li",[e._v("自动导入依赖的jar包，无需关注层层依赖")])])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<dependency>\n\t<groupId></groupId> \n\t<artifactId></artifactId> \n\t<version></version> \n\t<scope></scope>\n</dependency>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("ul",[a("li",[a("p",[e._v("scope")]),e._v(" "),a("ul",[a("li",[e._v("compile")]),e._v(" "),a("li",[e._v("test：对主程序不可见，不参与打包，依赖不会传递（a依赖b，b依赖的test的jar在a中不可见） eg:junit")]),e._v(" "),a("li",[e._v("provide：不参与打包，依赖不会传递 eg:servlet api,部署时由servlet容器提供")])])]),e._v(" "),a("li",[a("p",[e._v("依赖原则")]),e._v(" "),a("ul",[a("li",[e._v("路径最短")]),e._v(" "),a("li",[e._v("路径同等时，先声明者优先")])])]),e._v(" "),a("li",[a("p",[e._v("继承")]),e._v(" "),a("ul",[a("li",[e._v("统一管理各模块都相同的依赖")]),e._v(" "),a("li",[e._v("父工程打包方式是pom"),a("code",[e._v("<packaging>pom</packaging>")]),e._v("，用"),a("code",[e._v("<dependencyManagement>( 该标签用于父工程中，让所有在子项目中引用一个依赖而不用显式的列出版本号。 Maven会沿着父子层次向上走，直到找到一个拥有dependencyManagement元素的项目，然后它就会使用这个 dependencyManagement元素中指定的版本号。 这样做的好处就是：如果有多个子项目都引用同一样依赖，则可以避免在每个使用的子项目里都声明一个版本号， 当升级或切换版本时，只需要在顶层父工程中更新，而无需逐一修改子项目；如果某个子项目需要另外的一个版本，只需要声明version即可。 dependencyManagement里只是声明依赖，并不引入，因此子项目需要显示的声明需要用的依赖。)")]),e._v("管理依赖")]),e._v(" "),a("li",[e._v("子工程引用父工程"),a("code",[e._v("<parent><groupId><artifactId><version></parent>")])])])]),e._v(" "),a("li",[a("p",[e._v("聚合")]),e._v(" "),a("ul",[a("li",[e._v("一键mvn操作所有模块")]),e._v(" "),a("li",[a("code",[e._v("<modules></modules>")])])])])])])}),[],!1,null,null,null);n.default=s.exports}}]);