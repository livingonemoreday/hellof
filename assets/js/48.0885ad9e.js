(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{478:function(t,a,n){"use strict";n.r(a);var s=n(54),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("通配符代表的是bash操作接口的一个功能，正则表达式是一种字符串处理的表示方式")])]),t._v(" "),n("h2",{attrs:{id:"基础正则"}},[t._v("基础正则")]),t._v(" "),n("table",[n("tr",[n("th",{staticStyle:{width:"200px","text-align":"center"}},[t._v("特殊符号")]),t._v(" "),n("th",{staticStyle:{width:"600px","text-align":"left"}},[t._v("意义")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[:alnum:]")]),t._v(" "),n("td",[t._v("0-9、A-Z、a-z")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[:alpha:]")]),t._v(" "),n("td",[t._v("A-Z、a-z")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[:blank:]")]),t._v(" "),n("td",[t._v("空格键和[Tab]键")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[:graph:]")]),t._v(" "),n("td",[t._v("除空格键和[Tab]键二者外的其他键")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[:digit:]")]),t._v(" "),n("td",[t._v("0-9")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[:lower:]")]),t._v(" "),n("td",[t._v("a-z")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[:upper:]")]),t._v(" "),n("td",[t._v("A-Z")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[:punct:]")]),t._v(" "),n("td",[t._v("标点符号:\"'?!;:#$")])])]),t._v(" "),n("table",[n("tr",[n("th",{staticStyle:{width:"200px","text-align":"center"}},[t._v("RE字符")]),t._v(" "),n("th",{staticStyle:{width:"600px","text-align":"left"}},[t._v("说明")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("^hello")]),t._v(" "),n("td",[t._v("以hello为行首的目标")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("hello$")]),t._v(" "),n("td",[t._v("以hello为行尾的目标")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v(".")]),t._v(" "),n("td",[t._v("一定有一个任意字符")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("\\")]),t._v(" "),n("td",[t._v("转义")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),n("td",[t._v("重复零个到无穷多个的前一个RE字符。eg:ab*,可表示a、ab、abb、...")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[abc]")]),t._v(" "),n("td",[t._v("[]中仅代表一个待查找的字符，可是a或b或c")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[n1-n2]")]),t._v(" "),n("td",[t._v("选取的范围，eg:[A-Z]")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("[^A-Z]")]),t._v(" "),n("td",[t._v("取包括无大写字母的")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("\\{n,m\\}")]),t._v(" "),n("td",[t._v("连续n到m个的前一个RE字符，\\{n\\}连续n个，\\{n,\\}连续n个及以上")])])]),t._v(" "),n("h3",{attrs:{id:"sed"}},[t._v("sed")]),t._v(" "),n("ul",[n("li",[t._v("sed [-nefr] [n1[ ,n2]]function\n"),n("ul",[n("li",[t._v("选项参数：\n"),n("ul",[n("li",[t._v("-n: 使用安静模式，只有经过sed特殊处理的那一行才会被列出，无此参数，则所有来自stdin的数据都会被列到屏幕上")]),t._v(" "),n("li",[t._v("-e: 直接在命令行上进行sed的操作编辑")]),t._v(" "),n("li",[t._v("-f: 直接将sed的操作写在一个文件内，-f filename 则可以执行filename内的sed操作")]),t._v(" "),n("li",[t._v("-r: sed的操作使用的是扩展正则表达式语法。默认使用的是基础正则表达式语法")]),t._v(" "),n("li",[t._v("-i: 直接修改读取的文件内容，而不是由屏幕输出 sed -i '2d' filename")])])]),t._v(" "),n("li",[t._v("n1,n2非一定存在，一般代表选择进行操作的行数")]),t._v(" "),n("li",[t._v("function：\n"),n("ul",[n("li",[t._v("a: 新增，'2a hello' 在第2行下新增一行数据hello")]),t._v(" "),n("li",[t._v("c: 替换，'2,5c hello' 将2-5行替换为hello")]),t._v(" "),n("li",[t._v("d: 删除")]),t._v(" "),n("li",[t._v("i: 插入，'2i hello' 在第2行上新增一行数据hello")]),t._v(" "),n("li",[t._v("p: 打印，将某个选择的数据打印出来，通常p会与参数sed -n 一起运行")]),t._v(" "),n("li",[t._v("s: 替换，'1,20s/old/new/g' 将1-20行中的old用new替换。g为全局之意，无g，则是只替换每一行的第一个")])])])])])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 插入多行时用\\\n[jason@103 ~]$ cat -n /etc/passwd | sed '1i hello \\\nworld' | head -n 3\nhello \nworld\n     1\troot:x:0:0:root:/root:/bin/bash\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 列出第三行，注意需要加-n\n[jason@103 ~]$ cat -n /etc/passwd | sed -n '3p'\n     3\tdaemon:x:2:2:daemon:/sbin:/sbin/nologin\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h2",{attrs:{id:"扩展正则"}},[t._v("扩展正则")]),t._v(" "),n("table",[n("tr",[n("th",{staticStyle:{width:"200px","text-align":"center"}},[t._v("RE字符")]),t._v(" "),n("th",{staticStyle:{width:"600px","text-align":"left"}},[t._v("意义")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),n("td",[t._v("'ab+c': abc,abbc,abbbc,...")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),n("td",[t._v("零个或一个的前一个RE字符，'ab?c': ac,abc")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("|")]),t._v(" "),n("td",[t._v("'ac|abc': ac/abc")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("()")]),t._v(" "),n("td",[t._v("'a(b|c)d': abd/acd")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("()+")]),t._v(" "),n("td",[t._v("'(ab)+c: abc/ababc,....")])])]),t._v(" "),n("p",[t._v("eg:  "),n("code",[t._v("egrep -v '^$|^#' xx.txt(egrep支持扩展正则)")])]),t._v(" "),n("h2",{attrs:{id:"文件格式化"}},[t._v("文件格式化")]),t._v(" "),n("blockquote",[n("p",[t._v("不需要vim编辑，通过数据量重定向配合printf以及awk即可。")])]),t._v(" "),n("h3",{attrs:{id:"printf"}},[t._v("printf")]),t._v(" "),n("ul",[n("li",[t._v("printf '打印格式' 实际内容\n"),n("ul",[n("li",[t._v("\\a: 警告声音输出")]),t._v(" "),n("li",[t._v("\\b: 退格键backspace")]),t._v(" "),n("li",[t._v("\\f: 清楚屏幕")]),t._v(" "),n("li",[t._v("\\n: 输出新一行")]),t._v(" "),n("li",[t._v("\\r: 回车")]),t._v(" "),n("li",[t._v("\\t: 水平TAB按键")]),t._v(" "),n("li",[t._v("\\v: 垂直TAB按键")]),t._v(" "),n("li",[t._v("\\xNN: NN为两位数的字符，可以转换数字为字符")]),t._v(" "),n("li",[t._v("%ns: n个字符")]),t._v(" "),n("li",[t._v("%ni: n个整数位")]),t._v(" "),n("li",[t._v("%N.nf: N个位数，n个小数位树，(N-n-1)个整数位")])])])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[yu@103 ~]$ printf '%10s %5i %5i %5i %8.2f \\n' $(cat a | grep -v 'name')\n         a    80    60    92    77.33 \n         b    75    55    80    70.00 \n         c    60    90    70    73.33 \n[yu@103 ~]$ printf '\\x45\\n'\nE\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h3",{attrs:{id:"awk"}},[t._v("awk")]),t._v(" "),n("blockquote",[n("p",[t._v("sed常作用于一整个行，awk倾向于一行当中分成数个字段来处理。so，awk相当适合处理小型文本数据，其默认的字段分隔符为"),n("code",[t._v("空格键或TAB")])])]),t._v(" "),n("ul",[n("li",[t._v("awk '条件类型1{操作1} 条件类型2{操作2}...' filename\n"),n("ul",[n("li",[t._v("外层只能使用单引号")]),t._v(" "),n("li",[t._v("awk内置变量（无需用$取值）：\n"),n("ul",[n("li",[t._v("NF: 每一行拥有的字段总数")]),t._v(" "),n("li",[t._v("NR: 目前awk所处理的是第几行数据")]),t._v(" "),n("li",[t._v("FS: 分隔字符")])])]),t._v(" "),n("li",[t._v("其工作流：\n"),n("ul",[n("li",[t._v("读入第一行数据（$0表示），分隔符进行分隔，用$1..$n表示每一栏数据")]),t._v(" "),n("li",[t._v("根据条件类型判断是否需要后面的操作")]),t._v(" "),n("li",[t._v("完成所有操作")]),t._v(" "),n("li",[t._v("重复以上直至所有行读取完毕")])])])])])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[yu@103 ~]$ last yu | egrep -v 'vm8|tty1' | head -n 1 | awk '{print $1 \"\\t\" $3}'\nyu\t192.168.125.1\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[yu@103 ~]$ last yu | grep -v 'vm8' | awk 'NF==10 {printf \"%10s %20s \\n\",$1,$3}' | uniq\n        yu        192.168.125.1 \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[yu@103 ~]$ cat /etc/passwd | awk \'{FS=":"} $3<10 {printf "%10s %10s \\n",$1,$3}\'\nroot:x:0:0:xiejuenideai,007,9527,110:/root:/bin/bash            \n       bin          1 \n# FS=":"在第二行才生效，so，we must use BEGIN\n[yu@103 ~]$ cat /etc/passwd | awk \'BEGIN {FS=":"} $3<10 {printf "%10s %10s \\n",$1,$3}\'\n      root          0 \n       bin          1 \n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[yu@103 ~]$ cat a |\\\n> awk \'NR==1 {printf "%4s %10s %10s %10s %10s \\n",$1,$2,$3,$4,"TOTAL"} \\\n> NR!=1 {printf "%4s %10.2f %10.2f %10.2f %10.2f \\n",$1,$2,$3,$4,($2+$3+$4)}\'\nname    chiness    english       math      TOTAL \n   a      80.00      60.00      92.00     232.00 \n   b      75.00      55.00      80.00     210.00 \n   c      60.00      90.00      70.00     220.00 \n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{FS=" *"} 以空格（1-n个）作为分隔 $9 ~ /^[0-9]+$/  $9是否皆是数字\n[yu@104 ~]$ ll /proc | head -n 2 | tail -n +1 | awk \'{FS=" *"} $9 ~ /^[0-9]+$/  {print $0}\'\ndr-xr-xr-x.  9 root    root                  0 12月  1 21:12 1\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h3",{attrs:{id:"文件对比工具"}},[t._v("文件对比工具")]),t._v(" "),n("ul",[n("li",[t._v("diff [-bBi] from-file to-file\n"),n("ul",[n("li",[t._v("以行为单位，通常用于比对同一个文件的新旧版本差异")]),t._v(" "),n("li",[t._v("-b: 忽略仅有多个空白的差异")]),t._v(" "),n("li",[t._v("-B: 忽略空白行的差异")])])]),t._v(" "),n("li",[t._v("cmp [-l] file1 file2\n"),n("ul",[n("li",[t._v("以字节为单位进行比对，so，可比对二进制文件")]),t._v(" "),n("li",[t._v("-l: 将所有不同点的字节处列出，默认输出发现的第一处不同")])])]),t._v(" "),n("li",[t._v("patch [-R] -pN < 补丁文件\n"),n("ul",[n("li",[t._v("diff比较新旧文件的差异制作成补丁文件，再由patch将补丁文件更新旧文件")]),t._v(" "),n("li",[t._v("-R: 还原，将新文件还原为旧版本")]),t._v(" "),n("li",[t._v("-pN: 取消几层目录")])])])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[yu@103 b]$ head a b\n==> a <==\nname\tchiness\tenglish\tmath\taverage\na\t80\t60\t92\t77.33\nc\t60\t90\t70\t3\n\n==> b <==\nname\tchiness\tenglish\tmath\taverage\na\t80\t60\t92\t77.33\nb\t75\t55\t80\t70.00\nc\t60\t90\t70\t3\n[yu@103 b]$ diff b a > b.patch\n[yu@103 b]$ cat b.patch \n3d2   #左边文件b的第三行删除了相对于右边文件的第二行\n< b\t75\t55\t80\t70.00\n[yu@103 b]$ patch -p0 b< b.patch \npatching file b\n[yu@103 b]$ head a b\n==> a <==\nname\tchiness\tenglish\tmath\taverage\na\t80\t60\t92\t77.33\nc\t60\t90\t70\t3\n\n==> b <==\nname\tchiness\tenglish\tmath\taverage\na\t80\t60\t92\t77.33\nc\t60\t90\t70\t3\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);