(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{480:function(a,s,t){"use strict";t.r(s);var n=t(54),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"仅执行一次"}},[a._v("仅执行一次")]),a._v(" "),t("ul",[t("li",[a._v("atd服务管理单一计划任务")]),a._v(" "),t("li",[a._v("yum install -y at")]),a._v(" "),t("li",[a._v("systemctl restart/enable(是否开机启动)/status atd")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[yu@104 ~]$ systemctl status atd\n● atd.service - Job spooling tools\n   Loaded: loaded (/usr/lib/systemd/system/atd.service; enabled; vendor preset: enabled)\n   Active: active (running) since 一 2019-12-30 22:20:03 CST; 55min ago\n Main PID: 6385 (atd)\n   CGroup: /system.slice/atd.service\n           └─6385 /usr/sbin/atd -f\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("ul",[t("li",[a._v("使用at命令来产生所要运行的任务，并将该任务以文本文件的方式写入/var/spool/at/目录中，该任务便能等待atd这个服务的使用与执行了。\n然，并非所有人皆可执行at计划任务，because of safety，主机被劫持后，往往会写入骇客程序，这些程序可能使用计划任务来搜集系统信息返回给骇客。\n可利用/etc/at.allow和/etc/at.deny来实现对at的使用限制：\n"),t("ul",[t("li",[a._v("先/etc/at.allow，写在此文件中的用户方能使用at")]),a._v(" "),t("li",[a._v("若/etc/at.allow不存在，则查找/etc/at.deny,在此文件中的用户不能使用at")]),a._v(" "),t("li",[a._v("若二文件皆不存在，则只有root可使用at")])])]),a._v(" "),t("li",[a._v("at [-mldv] TIME\n"),t("ul",[t("li",[a._v("-m: at任务完成后，即使没有输出信息，亦发email通知使用者该任务已完成")]),a._v(" "),t("li",[a._v("-l: at -l相当于atq，列出当前系统上的该使用者的所有at计划")]),a._v(" "),t("li",[a._v("-d: at -d jobid相当于atrm jobid，可取消一个at计划中的任务")]),a._v(" "),t("li",[a._v("TIME:\n"),t("ul",[t("li",[a._v("HH:MM")]),a._v(" "),t("li",[a._v("HH:MM YYYY-MM-DD")]),a._v(" "),t("li",[a._v("HH:MM[am|pm] [Month] [Date]")]),a._v(" "),t("li",[a._v("HH:MM[am|pm] + number [minutes|hours|days|weeks]")]),a._v(" "),t("li",[a._v("now+number[minutes|hours|days|weeks]")])])])])]),a._v(" "),t("li",[a._v("at -c 任务号：列出后面接的该项任务的实际命令内容")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('[yu@104 ~]$ w\n 00:10:14 up 19 min,  1 user,  load average: 0.00, 0.01, 0.05\nUSER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT\nyu       pts/0    192.168.125.1    00:09    6.00s  0.09s  0.02s w\n[yu@104 ~]$ at now+2minutes\n# 进入at shell的环境中，最好使用绝对路径来执行\n# at的执行与终端环境无关，所有标准[错误]输出都会发送到执行者的mailbox中，若想在终端看到输出信息，以以下方式\nat> /usr/bin/echo "hello world" >/dev/pts/0\nat> <EOT>\njob 17 at Wed Jan  1 00:12:00 2020\n[yu@104 ~]$ atq\n17\tWed Jan  1 00:12:00 2020 a yu\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("h2",{attrs:{id:"循环执行的任务"}},[a._v("循环执行的任务")]),a._v(" "),t("p",[a._v("由cron(crond)这个系统服务控制")]),a._v(" "),t("h3",{attrs:{id:"用户设置"}},[a._v("用户设置")]),a._v(" "),t("ul",[t("li",[a._v("循环任务使用crontab命令，同at一样，可以限制使用crontab：\n"),t("ul",[t("li",[a._v("/etc/cron.allow记录可使用crontab的账号")]),a._v(" "),t("li",[a._v("/etc/cron.deny（系统默认保留该文件）记录不可使用crontab的账号")])])]),a._v(" "),t("li",[a._v("当用户使用crontab这个命令来建立计划任务之后，该任务会被记录到/var/spool/cron/中。cron执行的每一项任务都会被记录到/var/log/cron这个日志文件中")]),a._v(" "),t("li",[a._v("crontab [-u username] [-l|-e|-r]\n"),t("ul",[t("li",[a._v("-u: 帮某用户建立/删除计划任务，仅root方能如此")]),a._v(" "),t("li",[a._v("-e: 编辑crontab任务")]),a._v(" "),t("li",[a._v("-l: 查看crontab任务")]),a._v(" "),t("li",[a._v("-r: 删除所有crontab任务，若仅删除一项，用-e编辑")])])])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('[yu@104 ~]$ crontab -e\n# 分 时 日期 月份 周（0-7，0/7代表周日） 需要执行的命令\n* * * * * echo "hello world" > /dev/pts/0\n~    \n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("ul",[t("li",[a._v("特殊字符\n"),t("ul",[t("li",[a._v("*: 代表任何时刻都接受")]),a._v(" "),t("li",[a._v(",: 代表分隔时段，eg:0 1,2 * * * 代表1点和2点发生")]),a._v(" "),t("li",[a._v("-: 一段时间范围内，eg:0 1-3 * * * 代表1/2/3点发生")]),a._v(" "),t("li",[a._v("/n: 每隔单位间隔n发生，eg: */5 * * * * 代表每五分钟发生一次")])])])]),a._v(" "),t("h3",{attrs:{id:"系统配置文件"}},[a._v("系统配置文件")])])}),[],!1,null,null,null);s.default=e.exports}}]);