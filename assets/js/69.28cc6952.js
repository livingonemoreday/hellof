(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{506:function(s,a,t){"use strict";t.r(a);var n=t(54),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"配置"}},[s._v("配置")]),s._v(" "),t("ul",[t("li",[s._v("git config [--global] [--unset] user.name|user.eamil")]),s._v(" "),t("li",[s._v("git config --list")]),s._v(" "),t("li",[s._v("git init")])]),s._v(" "),t("h2",{attrs:{id:"git-tree-commit对象"}},[s._v("git/tree/commit对象")]),s._v(" "),t("ul",[t("li",[s._v("echo 'hello world' | git hash-object [-w(写入git库.git/object/)] --stdin")]),s._v(" "),t("li",[s._v("git hash-object -w filename")]),s._v(" "),t("li",[s._v("git cat-file -p|-t hashvalue")]),s._v(" "),t("li",[s._v("git update-index [--add(文件首次置于暂存区)] -cacheinfo 100644 git对象的哈希值 filename #置于暂存区")]),s._v(" "),t("li",[s._v("git update-index [--add] filename #直接构建git对象并且置于暂存区")]),s._v(" "),t("li",[s._v("git ls-files -s #查看暂存区")]),s._v(" "),t("li",[s._v("git write-tree #创建树对象")]),s._v(" "),t("li",[s._v("git commit-tree tree对象哈希值 -m 'commit message' #树对象创建提交对象 更新本地库")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" hash-object -w --stdin\nce013625030ba8dba906f756967f9e9ca394464a\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ./.git/objects/ -type f\n./.git/objects/ce/013625030ba8dba906f756967f9e9ca394464a\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -p ce013625030ba8dba906f756967f9e9ca394464a\nhello\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -t ce013625030ba8dba906f756967f9e9ca394464a\nblob\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" hash-object -w hello\nwarning: LF will be replaced by CRLF "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" hello.\nThe "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" will have its original line endings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" your working directory\nce013625030ba8dba906f756967f9e9ca394464a\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ./.git/objects/ -type f\n./.git/objects/ce/013625030ba8dba906f756967f9e9ca394464a\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" update-index --add --cacheinfo "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" ce013625030ba8dba906f756967f9e9ca394464a hello\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-files -s\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" ce013625030ba8dba906f756967f9e9ca394464a "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       hello\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" write-tree\nb4d01e9b0c4a9356736dfddf8830ba9a54f5271c\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ./.git/objects/ -type f\n./.git/objects/b4/d01e9b0c4a9356736dfddf8830ba9a54f5271c\n./.git/objects/ce/013625030ba8dba906f756967f9e9ca394464a\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -p b4d01e9b0c4a9356736dfddf8830ba9a54f5271c\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" blob ce013625030ba8dba906f756967f9e9ca394464a    hello\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -t b4d01e9b0c4a9356736dfddf8830ba9a54f5271c\ntree\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[t("code",[s._v("git对象只有文件内容，tree对象可以关联到文件名，git库中的git对象是增量式的")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit-tree b4d01e9b0c4a9356736dfddf8830ba9a54f5271c -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v("\nf66ce75bc505828f36e2616d1d0d44b4a9406409\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -t f66ce75bc505828f36e2616d1d0d44b4a9406409\ncommit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("git status")]),s._v(" "),t("li",[s._v("git diff [filename] #尚未暂存")]),s._v(" "),t("li",[s._v("git diff --cached|--staged [filename] #已暂存尚未提交")]),s._v(" "),t("li",[s._v("git rm filename #删除工作区/暂存区的文件，不会有git对象生存，因为下次commit的时候是基于暂存区生成快照")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-files -s\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" 78981922613b2afb6025042ff6bd878ac1994e85 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       a\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" 94954abda49de8615a048f8d2e64b5de848e27a1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       hello\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" a\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-files -s\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" 94954abda49de8615a048f8d2e64b5de848e27a1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       hello\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[s._v("git mv oldname newname #rename，不会有git对象生存，修改工作区文件名和暂存区的文件名")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" hello world\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-files -s\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" 94954abda49de8615a048f8d2e64b5de848e27a1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       world\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --cached\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/hello b/world\nsimilarity index "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" from hello\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" to world\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ul",[t("li",[s._v("git log [--pretty=oneline|--oneline]")]),s._v(" "),t("li",[s._v("git reflog")])]),s._v(" "),t("h2",{attrs:{id:"分支"}},[s._v("分支")]),s._v(" "),t("ul",[t("li",[s._v("git branch [-d] [分支名]")]),s._v(" "),t("li",[s._v("git branch -v #查看所有分支的最后一次提交")]),s._v(" "),t("li",[s._v("git branch 分支名 commitHash #在commitHash处新建一个分支")]),s._v(" "),t("li",[s._v("git branch --merged #哪些分支已合并到当前分支")]),s._v(" "),t("li",[s._v("git branch --no-merged #哪些分支尚未合并")]),s._v(" "),t("li",[s._v("git branch 分支名 hashvalue #在hashvalue处创建一个分支")]),s._v(" "),t("li",[s._v("git checkcout [-b(创建并切换)] 分支名")]),s._v(" "),t("li",[s._v("git checkout -- filename #撤销文件工作区中的修改")]),s._v(" "),t("li",[s._v("git push origin --delete hello #删除远程分支hello")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --no-merged\n  world\n\nDELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --merged\n  hello\n* master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("DELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge hello\nCONFLICT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("modify/delete"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": yy deleted "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" HEAD and modified "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" hello. Version hello of yy left "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" tree.\nAutomatic merge failed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" fix conflicts and "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" commit the result.\n\nDELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MERGING"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nYou have unmerged paths.\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fix conflicts and run "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git merge --abort"')]),s._v(" to abort the merge"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nUnmerged paths:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add/rm <file>..."')]),s._v(" as appropriate to mark resolution"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        deleted by us:   yy\n\nno changes added to commit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v(" and/or "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit -a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nDELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MERGING"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" yy\n\nDELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MERGING"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nAll conflicts fixed but you are still merging.\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit"')]),s._v(" to conclude merge"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nChanges to be committed:\n        new file:   yy\n\n\nDELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MERGING"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("fuck\n-------------------------------------------\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master 7a67721"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Merge branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v("\n\nDELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])]),t("h2",{attrs:{id:"存储"}},[s._v("存储")]),s._v(" "),t("ul",[t("li",[s._v("git stash #将未完成的修改（就是没有提交的东西）保存到一个栈上，然后该分支会呈现出clean的状态，自然当前修改的东西也不在工作区")]),s._v(" "),t("li",[s._v("git stash apply [stash@{No.}应用具体的哪个存储，不指定的话应用最近的] #重新应用这些改动")]),s._v(" "),t("li",[s._v("git stash list #查看有哪些存储于栈上")]),s._v(" "),t("li",[s._v("git stash pop #应用最近的存储并将其从栈上扔掉")]),s._v(" "),t("li",[s._v("git stash drop [stash@{No.}不指定就移除最近的一个]")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("DELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stash'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" yy\n\nDELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\nwarning: LF will be replaced by CRLF "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" yy.\nThe "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" will have its original line endings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" your working directory\nSaved working directory and index state WIP on master: 7a67721 Merge branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v("\n\nDELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nnothing to commit, working tree clean\n\nDELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\nstash@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": WIP on master: 7a67721 Merge branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v("\n\nDELL@xiejuenideai MINGW64 ~/Desktop/fenmiantaohua "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply\nOn branch master\nChanges not staged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git restore <file>..."')]),s._v(" to discard changes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" working directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        modified:   yy\n\nno changes added to commit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v(" and/or "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit -a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("ul",[t("li",[s._v("git commit --amend [-m 'message'] #重新提交，git log就不会显示上一次的提交。如果暂存区没有变动，就只会重新重新创建提交对象，这种情况实则只是修改了commit的message，如果暂存区有变动，则会创建tree对象和提交对象，这种情况就是本该一次提交的东西没有修改完全或者修改没有全部纳入暂存区作为一次提交")]),s._v(" "),t("li",[s._v("git reset --hard|mixed|soft hashvalue")])]),s._v(" "),t("h2",{attrs:{id:"标签"}},[s._v("标签")]),s._v(" "),t("ul",[t("li",[s._v("git tag [-l 'tagName'] #列出[tagName之后的]标签")]),s._v(" "),t("li",[s._v("git tag tagName [commitHash] [-m 'message'] #于commitHash(默认HEAD)处创建标签")]),s._v(" "),t("li",[s._v("git show tagName|hashvalue")]),s._v(" "),t("li",[s._v("git push origin tagName|--tags(所有不在远程仓库的本地标签) #git push并不会推送标签")]),s._v(" "),t("li",[s._v("git tag -d tagName #删除本地仓库标签")]),s._v(" "),t("li",[s._v("git push origin :refs/tags/tagName #删除本地标签后更新远程标签")])])])}),[],!1,null,null,null);a.default=e.exports}}]);