(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{481:function(s,n,a){"use strict";a.r(n);var t=a(54),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"概念"}},[s._v("概念")]),s._v(" "),a("blockquote",[a("p",[s._v("Shell俗称壳（用来区别于核），是指“为使用者提供操作界面”的软件（命令解析器）。\n接收应用程序或用户命令，然后调用操作系统内核。")])]),s._v(" "),a("h2",{attrs:{id:"解析器"}},[s._v("解析器")]),s._v(" "),a("ul",[a("li",[s._v("提供的解析器"),a("br"),s._v("\n[root@localhost ~]# cat /etc/shells"),a("br"),s._v("\n/bin/sh"),a("br"),s._v("\n/bin/bash"),a("br"),s._v("\n/usr/bin/sh"),a("br"),s._v("\n/usr/bin/bash")]),s._v(" "),a("li",[s._v("默认解析器"),a("br"),s._v("\n[root@localhost ~]# echo $SHELL"),a("br"),s._v("\n/bin/bash")])]),s._v(" "),a("h2",{attrs:{id:"脚本的执行方式差异"}},[s._v("脚本的执行方式差异")]),s._v(" "),a("ul",[a("li",[s._v("利用直接执行的方式来执行脚本"),a("br"),s._v("\n不管是路径执行还是利用bash执行，该脚本都会使用一个新的bash环境来执行脚本内的命令，\n即脚本是在子进程的bash中执行。当子进程执行完毕，在子进程中的各项变量和操作将会结束而不会传回到父进程中。")]),s._v(" "),a("li",[s._v("利用source来执行脚本：在父进程中执行")])]),s._v(" "),a("h2",{attrs:{id:"判断式"}},[s._v("判断式")]),s._v(" "),a("h3",{attrs:{id:"test"}},[s._v("test")]),s._v(" "),a("blockquote",[a("p",[s._v("test执行结果不会显示任何信息，可通过$?或&&及||来展示")])]),s._v(" "),a("table",[a("tr",[a("th",{staticStyle:{width:"200px","text-align":"center"}},[s._v("参数")]),s._v(" "),a("th",{staticStyle:{width:"600px","text-align":"left"}},[s._v("意义")])]),s._v(" "),a("tr",[a("td",{staticStyle:{width:"800px"},attrs:{colspan:"2"}},[s._v("\n                    1.文件类型判断，eg: test -e filename\n            ")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-e")]),s._v(" "),a("td",[s._v("文件是否存在")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-f/d/L/b/c/s/p")]),s._v(" "),a("td",[s._v("文件/目录/链接文件/block device/字符device/socket文件/fifo文件")])]),s._v(" "),a("tr",[a("td",{staticStyle:{width:"800px"},attrs:{colspan:"2"}},[s._v("\n                2.文件权限检测，eg: test -r filename\n        ")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-r/w/x/u/g/k")]),s._v(" "),a("td",[s._v("可读/写/执行/SUID/SGID/Sticky bit")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-s")]),s._v(" "),a("td",[s._v("是否存在且非空")])]),s._v(" "),a("tr",[a("td",{staticStyle:{width:"800px"},attrs:{colspan:"2"}},[s._v("\n                    3.两个文件之间的比较，eg: test file1 -nt file2\n            ")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-nt")]),s._v(" "),a("td",[s._v("newer than")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-ot")]),s._v(" "),a("td",[s._v("older than")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-ef")]),s._v(" "),a("td",[s._v("是否为同一文件，是否指向同一inode")])]),s._v(" "),a("tr",[a("td",{staticStyle:{width:"800px"},attrs:{colspan:"2"}},[s._v("\n                        4.关于两个整数之间的判断，eg: test n2 -eq n2\n                ")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-eq/ne/gt/lt/ge/le")]),s._v(" "),a("td",[s._v("equal/not equal/...")])]),s._v(" "),a("tr",[a("td",{staticStyle:{width:"800px"},attrs:{colspan:"2"}},[s._v("\n                        5.字符串的判断\n                ")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("test -z string")]),s._v(" "),a("td",[s._v("string为空，则为true")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("test [-n] string")]),s._v(" "),a("td",[s._v("string为空，则为false")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("test str1 == str2")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("test str1 != str2")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",{staticStyle:{width:"800px"},attrs:{colspan:"2"}},[s._v("\n                        6.多重条件判断，eg: test -r filename -a -x filename\n                ")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-a/o")]),s._v(" "),a("td",[s._v("and/or")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("!")]),s._v(" "),a("td",[s._v("取反")])])]),s._v(" "),a("h3",{attrs:{id:"判断符号"}},[s._v("判断符号[]")]),s._v(" "),a("ul",[a("li",[s._v("[]内的每个组件都需要有空格来分隔")]),s._v(" "),a("li",[s._v('[]内的变量最好都以双引号括起来: "${HOME}"')]),s._v(" "),a("li",[s._v("[]内的常量最好都以单/双引号括起来")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[yu@103 b]$ [ -r "${HOME}" ] && echo "可读" || echo "不可读"\n可读\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"脚本中的默认变量"}},[s._v("脚本中的默认变量")]),s._v(" "),a("ul",[a("li",[s._v("${n}")])]),s._v(" "),a("blockquote",[a("p",[s._v("n为数字，${0}代表该脚本名，${1-n}为参数")])]),s._v(" "),a("ul",[a("li",[s._v("$#")])]),s._v(" "),a("blockquote",[a("p",[s._v("获取所有输入参数个数，常用于循环")])]),s._v(" "),a("ul",[a("li",[s._v("$@")])]),s._v(" "),a("blockquote",[a("p",[s._v("获取命令行中所有的参数")])]),s._v(" "),a("ul",[a("li",[s._v("$?")])]),s._v(" "),a("blockquote",[a("p",[s._v("最后一次执行的命令的返回状态。若为0，\n证明上一个命令正确执行；若为非0，则反之")])]),s._v(" "),a("h2",{attrs:{id:"运算符"}},[s._v("运算符")]),s._v(" "),a("ul",[a("li",[s._v("$((运算式))或$[运算式]")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost shell]# echo $[(1+2)*3]\n9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("expr  + 、-、*、/、%  需要空格")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost shell]# expr `expr 1 + 2` \\* 3\n9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"流程控制"}},[s._v("流程控制")]),s._v(" "),a("h3",{attrs:{id:"if"}},[s._v("if")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("if [ 条件判断式 ];then \n  程序 \nfi \n或者 \nif [ 条件判断式 ] \n  then \n    程序 \nfi\n")])])]),a("h3",{attrs:{id:"case"}},[s._v("case")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('case $变量名 in \n  "值1"） \n    执行程序1 \n    ;; \n  "值2"） \n    执行程序2 \n    ;; \n  ...\n  *） \n    默认程序 \n    ;; \nesac\n')])])]),a("h3",{attrs:{id:"for"}},[s._v("for")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("语法一：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  for((初始值;循环控制条件;变量变化)) \n    do \n      程序 \n    done\n")])])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost shell]# vi hello.sh \n#!/bin/bash\ncount=0\nfor((i=1;i<=$1;i++))\ndo\n        count=$[$count+i]\ndone\necho $count\n[root@localhost shell]# sh hello.sh 10\n55\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("语法二："),a("span",{attrs:{id:"001"}})]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  for 变量 in 值1 值2 值3… \n    do \n      程序 \n    done\n")])])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[root@localhost shell]# vi hello.sh \n\n#!/bin/bash\nfor arg in $*\n#!/bin/bash\nfor arg in $*\ndo\n        echo $arg\ndone\necho "====\\$*===="\nfor arg in "$*"\ndo\n        echo $arg\ndone\necho "====\\"\\$*\\"===="\nfor arg in $@\ndo\n        echo $arg\ndone\necho "====\\$@===="\nfor arg in "$@"\ndo\n        echo $arg\ndone\necho "====\\"\\$@\\"===="\n~ \n[root@localhost shell]# sh hello.sh a b\na\nb\n====$*====\na b\n===="$*"====\na\nb\n====$@====\na\nb\n===="$@"====\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("$(seq 1 100)，{1..100}可取连续的整数")])]),s._v(" "),a("h3",{attrs:{id:"while"}},[s._v("while")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("while [ 条件判断式 ] \n  do \n    程序\n  done\n")])])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost shell]# vi hello.sh \n\n#!/bin/bash\nsum=0\ni=1\nwhile [ $i -le $1 ]\ndo\n        sum=$[$sum+$i]\n        i=$[$i+1]\ndone\necho $sum\n~ \n[root@localhost shell]# sh hello.sh 10\n55\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"函数"}},[s._v("函数")]),s._v(" "),a("h3",{attrs:{id:"系统函数"}},[s._v("系统函数")]),s._v(" "),a("ul",[a("li",[s._v("basename [path] [suffix] 只剩去掉suffix后的文件名")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost shell]# basename /root/shell/hello.sh .sh\nhello\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("dirname absolutePath\t只剩上一级目录路径")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost shell]# dirname /root/shell/hello.sh \n/root/shell\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"自定义函数"}},[s._v("自定义函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[root@localhost shell]# vi hello.sh \n\n#!/bin/bash\nfunction sum() {\n        echo $[$1+$2]\n}\nread -p "first param " p1\nread -p "second param " p2\nsum p1 p2\n~ \n[root@localhost shell]# sh hello.sh \nfirst param 1\nsecond param 2\n3\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"shell脚本的跟踪与调试"}},[s._v("shell脚本的跟踪与调试")]),s._v(" "),a("ul",[a("li",[s._v("sh [-nvx] scripts.sh\n"),a("ul",[a("li",[s._v("-n: 不要执行脚本，仅查询语法问题")]),s._v(" "),a("li",[s._v("-v: 在执行脚本前，先将脚本文件的内容输出到屏幕")]),s._v(" "),a("li",[s._v("-x: 将使用到的脚本内容显示到屏幕上！！！")])])])]),s._v(" "),a("h2",{attrs:{id:"过往"}},[s._v("过往")]),s._v(" "),a("h3",{attrs:{id:"字符串匹配"}},[s._v("字符串匹配")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[[ "hello.dog" =~ ^.*\\.dog$ ]]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"数组"}},[s._v("数组")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('for index in "${!arr[@]}"\ndo\n    ele=${arr[$index]}\ndone\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('for ele in "${arr[@]}"\ndo\n\ndone\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function fn() {\n    arr=($1)\n    for ele in "${arr[@]}"\n    do\n        # todo\n    done\n}\narrs=("a" "b")\n# 传递一个元素\nfn "${arrs[1]}"\n# 传递整个数组的所有元素\nfn "${arrs[*]}"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"目录递归检索"}},[s._v("目录递归检索")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function retrieve() {\n    for file in `ls "$*" | tr " " "\\?"`\n    do\n        file=`echo $file | tr "\\?" " "`\n        absolute_path="$1"/"$file"\n        if [ -d "$absolute_path" ];then\n            retrieve "$absolute_path"\n        else\n            # todo\n        fi\n    done\n}\nretrieve $(pwd)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"awk"}},[s._v("AWK")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('| awk -v v1="${xx}" -v v2="${oo}" \'BEGIN {\n        FS="[ ]+"\n        printf "$s,%s", $1 $2\n    } {\n        switch($1) {\n            case "a":\n                a = $2\n                // 替换\n                gsub(/(.*\\/)+/, "", a)\n                // 分割\n                split($2, arr, ".")\n                cnt = length(arr)\n                b = substr(a, 5, 2)\n                break;\n            default:\n                // todo\n        }\n    } >> "${file}"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"逐行"}},[s._v("逐行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cat hello.jsp | while read line\ndo\n    echo $line\ndone\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);