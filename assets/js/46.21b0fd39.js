(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{476:function(v,i,_){"use strict";_.r(i);var l=_(54),t=Object(l.a)({},(function(){var v=this,i=v.$createElement,_=v._self._c||i;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"目录与路径"}},[v._v("目录与路径")]),v._v(" "),_("ul",[_("li",[v._v("-: 代表前一个工作目录")]),v._v(" "),_("li",[v._v("~account: 代表account这个使用者的家目录")]),v._v(" "),_("li",[v._v("mkdir [-mp] 目录名称\n"),_("ul",[_("li",[v._v("-m: 直接设置权限，不使用默认权限umask")]),v._v(" "),_("li",[v._v("-p: 可递归创建")])])])]),v._v(" "),_("h2",{attrs:{id:"文件目录管理"}},[v._v("文件目录管理")]),v._v(" "),_("h3",{attrs:{id:"ls"}},[v._v("ls")]),v._v(" "),_("ul",[_("li",[v._v("ls [-aAdfFhilnrRSt] [--full-time] 文件或目录名称\n"),_("ul",[_("li",[v._v("-a:")]),v._v(" "),_("li",[v._v("-A: 不包括.和..这两个目录")]),v._v(" "),_("li",[v._v("-S: 以文件大小进行排序")]),v._v(" "),_("li",[v._v("-r: 将排序结果反向输出")]),v._v(" "),_("li",[v._v("-R: 递归")]),v._v(" "),_("li",[v._v("-t: 以时间排序")])])])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("ll -s，aa虽然只有43byte大小，但是占据整个数据区块4.0K\n[root@master ~]# ll -sh\n总用量 196M\n4.0K -rw-r--r--. 1 root root   43 11月 22 2021 aa\n4.0K -rw-------. 1 root root 1.6K 11月 16 2021 anaconda-ks.cfg\n 56M -rw-r--r--. 1 root root  56M 3月  12 2022 apache-activemq-5.15.9-bin.tar.gz\n4.0K -rw-r--r--. 1 root root  150 11月 22 2021 bb\n141M -rw-r--r--. 1 root root 141M 1月  27 2022 jdk-8u321-linux-x64.tar.gz\n   0 drwxr-xr-x. 3 root root   51 1月  27 2022 zookeeper\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br")])]),_("h3",{attrs:{id:"cp"}},[v._v("cp")]),v._v(" "),_("ul",[_("li",[v._v("cp [-adfilprsu] source destination\n"),_("ul",[_("li",[v._v("-a: 相当于-dr --preserve=all")]),v._v(" "),_("li",[v._v("-i: 若目标文件destination已存在，则在覆盖时会先询问操作的进行")]),v._v(" "),_("li",[v._v("-p: 连同文件的属性（权限/用户/时间）一起复制过去")]),v._v(" "),_("li",[v._v("-r: 递归，用于目录的复制操作")]),v._v(" "),_("li",[v._v("-d: 若source为link file，则复制link file，而非文件本身")]),v._v(" "),_("li",[v._v("-u: destination比source旧才更新，或destination不存在才复制")]),v._v(" "),_("li",[v._v("--preserve=all: 除了-p的权限参数外，还有SELinux属性")]),v._v(" "),_("li",[v._v("若源文件source不止一个，则destination必须时目录")])])])]),v._v(" "),_("h3",{attrs:{id:"rm"}},[v._v("rm")]),v._v(" "),_("ul",[_("li",[v._v("rm [-fir] 文件或目录\n"),_("ul",[_("li",[v._v("-i: 交互模式，删除前总会询问")])])])]),v._v(" "),_("h3",{attrs:{id:"mv"}},[v._v("mv")]),v._v(" "),_("ul",[_("li",[v._v("mv [-fiu] source destination\n"),_("ul",[_("li",[v._v("-u: 若目标文件已存在，且source较新，才会覆盖")])])])]),v._v(" "),_("h2",{attrs:{id:"文件内容查看"}},[v._v("文件内容查看")]),v._v(" "),_("h3",{attrs:{id:"cat"}},[v._v("cat")]),v._v(" "),_("ul",[_("li",[v._v("cat [-AbEnTv] filename\n"),_("ul",[_("li",[v._v("-A: 等同于-vET")]),v._v(" "),_("li",[v._v("-E: 将结尾的换行符$显示出来")]),v._v(" "),_("li",[v._v("-T: 将[Tab]按键以^T显示出来，windows的换行符为^M$")]),v._v(" "),_("li",[v._v("-v: 列出一些看不出来的特殊字符")]),v._v(" "),_("li",[v._v("-n: 打印行号，连同空白行也会有行号")]),v._v(" "),_("li",[v._v("-b: 打印行号，仅针对非空白行")])])]),v._v(" "),_("li",[v._v("tac反向显示")])]),v._v(" "),_("h3",{attrs:{id:"more"}},[v._v("more")]),v._v(" "),_("h3",{attrs:{id:"less"}},[v._v("less")]),v._v(" "),_("ul",[_("li",[v._v("/hello: 向下查找字符串hello")]),v._v(" "),_("li",[v._v("?hello: 向上查找字符串hello")]),v._v(" "),_("li",[v._v("n: 重复前一个查找")]),v._v(" "),_("li",[v._v("N: 反向重复前一个查找")]),v._v(" "),_("li",[v._v("g/G: 至首/尾行")])]),v._v(" "),_("h3",{attrs:{id:"head"}},[v._v("head")]),v._v(" "),_("ul",[_("li",[v._v("head -n 10 filename: 显示前10行")]),v._v(" "),_("li",[v._v("head -n -10 filename: 后面10行不显示")])]),v._v(" "),_("h3",{attrs:{id:"tail"}},[v._v("tail")]),v._v(" "),_("ul",[_("li",[v._v("tail -f filename: 监听")]),v._v(" "),_("li",[v._v("tail -n 10 filename: 显示最后10行")]),v._v(" "),_("li",[v._v("tail -n +10 filename: 显示从10行开始的数据")])]),v._v(" "),_("h3",{attrs:{id:"od-非纯文本"}},[v._v("od(非纯文本)")]),v._v(" "),_("ul",[_("li",[v._v("od [-t TYPE] filename，TYPE取值\n"),_("ul",[_("li",[v._v("c: 使用ASCII字符来输出")])])])]),v._v(" "),_("h3",{attrs:{id:"touch"}},[v._v("touch")]),v._v(" "),_("ul",[_("li",[v._v("文件时间参数,默认ls显示的时mtime\n"),_("ul",[_("li",[v._v("修改时间（mtime)")]),v._v(" "),_("li",[v._v("状态时间（ctime)")]),v._v(" "),_("li",[v._v("读取时间（atime)")])])]),v._v(" "),_("li",[v._v("touch [-acdmt] filename\n"),_("ul",[_("li",[v._v("-a: 仅自定义atime")]),v._v(" "),_("li",[v._v("-c：仅修改文件时间，若文件不存在则不建立新文件")]),v._v(" "),_("li",[v._v('-d: -d "2 days ago"')]),v._v(" "),_("li",[v._v("-t: -t 20191111")]),v._v(" "),_("li",[v._v("-m: 仅修改mtime")])])])]),v._v(" "),_("h2",{attrs:{id:"umask"}},[v._v("umask")]),v._v(" "),_("blockquote",[_("p",[v._v("用于用户在建立文件或目录时的权限默认值")])]),v._v(" "),_("ul",[_("li",[v._v("umask [-S]")])]),v._v(" "),_("h2",{attrs:{id:"隐藏属性"}},[v._v("隐藏属性")]),v._v(" "),_("ul",[_("li",[v._v("chattr [+-=] [ASacdistu] filename\n"),_("ul",[_("li",[v._v("-/+/=: 删除/新增/赋予特殊参数")]),v._v(" "),_("li",[v._v("a: 当设置a后，该文件只能增加数据，而不能删除也不能修改数据，仅有root用户才能设置该属性")]),v._v(" "),_("li",[v._v("i: 让文件不能被删除/改名/设置链接/写入/新增数据，仅有root方能设置")])])]),v._v(" "),_("li",[v._v("lsattr [-adR] filename")])]),v._v(" "),_("h2",{attrs:{id:"特殊权限"}},[v._v("特殊权限")]),v._v(" "),_("h3",{attrs:{id:"suid-set-uid-4"}},[v._v("SUID(Set UID 4)")]),v._v(" "),_("blockquote",[_("p",[v._v("s出现在文件拥有者的x权限上时，eg:"),_("br"),v._v("\n[yu@103 ~]$ ls -ld /usr/bin/passwd"),_("br"),v._v("\n-rwsr-xr-x. 1 root root 27832 6月  10 2014 /usr/bin/passwd")])]),v._v(" "),_("ul",[_("li",[v._v("SUID权限仅对二进制程序有效，不能够用在shell脚本上")]),v._v(" "),_("li",[v._v("执行者对于该程序需要具有x权限")]),v._v(" "),_("li",[v._v("本权限仅在执行该程序的过程中有效")]),v._v(" "),_("li",[v._v("执行者将具有该程序拥有者的权限")])]),v._v(" "),_("h3",{attrs:{id:"sgid-set-gid-2"}},[v._v("SGID(Set GID 2)")]),v._v(" "),_("blockquote",[_("p",[v._v("s出现在拥有者的x权限上，对文件目录皆可进行设置")])]),v._v(" "),_("h3",{attrs:{id:"sbit-sticky-bit-1"}},[v._v("SBIT(Sticky Bit 1)")]),v._v(" "),_("blockquote",[_("p",[v._v("只针对目录，t出现在其他组人的x权限上，用户在该目录下建立的文件或目录，只有自己和root才有权力删除")])]),v._v(" "),_("h3",{attrs:{id:"file观察文件类型"}},[v._v("file观察文件类型")]),v._v(" "),_("h2",{attrs:{id:"查找"}},[v._v("查找")]),v._v(" "),_("h3",{attrs:{id:"which"}},[v._v("which")]),v._v(" "),_("blockquote",[_("p",[v._v("根据PATH环境变量规范的路径查找")])]),v._v(" "),_("h3",{attrs:{id:"whereis"}},[v._v("whereis")]),v._v(" "),_("blockquote",[_("p",[v._v("之查找系统中某些特定目录下的文件，eg:/bin/sbin;/usr/share/man")])]),v._v(" "),_("h3",{attrs:{id:"locate-updatedb"}},[v._v("locate/updatedb")]),v._v(" "),_("blockquote",[_("p",[v._v("由数据库/var/lib/mlocate里面的数据查找，该数据库默认每天执行一次更新，可用updatedb手动更新")])]),v._v(" "),_("ul",[_("li",[v._v("locate [-ir] keyword\n"),_("ul",[_("li",[v._v("-r: 后面可接正则表达式的显示方式")]),v._v(" "),_("li",[v._v("-l: 仅输出几行，-l 5")])])])]),v._v(" "),_("h3",{attrs:{id:"find"}},[v._v("find")]),v._v(" "),_("p",[v._v("find [PATH] [option] [action]")]),v._v(" "),_("ul",[_("li",[v._v("时间相关的选项:-atime/ctime/mtime\n"),_("ul",[_("li",[v._v("-mtime n: 在n天前的那一天内被修改过内容的文件")]),v._v(" "),_("li",[v._v("-mtime +n: 在n天之前被修改过内容的文件")]),v._v(" "),_("li",[v._v("-mtime -n: 在n天之内被修改过内容的文件")]),v._v(" "),_("li",[v._v("-newer file: 比file还要新的文件")])])]),v._v(" "),_("li",[v._v("使用者或用户组名称相关\n"),_("ul",[_("li",[v._v("-uid n:")]),v._v(" "),_("li",[v._v("-gid n:")]),v._v(" "),_("li",[v._v("-user name:")]),v._v(" "),_("li",[v._v("-group name:")]),v._v(" "),_("li",[v._v("-nouser: 文件拥有者不在/etc/passwd中的")]),v._v(" "),_("li",[v._v("-nogroup:")])])]),v._v(" "),_("li",[v._v("文件权限及名称有关\n"),_("ul",[_("li",[v._v("-name filename")]),v._v(" "),_("li",[v._v("-size [+-] nc/k: 为数字，c为Byte，k为kB")]),v._v(" "),_("li",[v._v("-type Type: f/b/c/d/l/s/p")]),v._v(" "),_("li",[v._v("-perm mode: 文件权限刚好为mode")]),v._v(" "),_("li",[v._v("-perm -mode: 文件权限全部囊括mode")]),v._v(" "),_("li",[v._v("-perm /mode: 文件权限包含任一mode的权限")])])]),v._v(" "),_("li",[v._v("额外进行的操作\n"),_("ul",[_("li",[v._v("-exec command:")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("  [yu@103 ~]$ find /usr/bin /usr/sbin -perm /7000 -exec ls -l {} \\;  \n  # {}代表find找到的内容\n  # -exec ;是关键词，因;有特殊意义，所以\\转义\n  -r-xr-sr-x. 1 root tty 15344 6月  10 2014 /usr/bin/wall\n  ...\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])])]),v._v(" "),_("li",[v._v("find相当消耗硬盘资源，so能用其他命令查找则用其他")])])])}),[],!1,null,null,null);i.default=t.exports}}]);