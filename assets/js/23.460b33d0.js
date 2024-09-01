(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{449:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"范式"}},[s._v("范式")]),s._v(" "),a("ul",[a("li",[s._v("库表中的字段都是单一属性，不可再分；")]),s._v(" "),a("li",[s._v("库表中不存在非关键字段对任一候选关键字段的部分函数依赖；比如：购物信息表（客户编号、产品名称、产品数量、产品类型...），产品名称决定产品类型。不符合该范式会出现：数据冗余、更新异常（若调整了产品的类型，该购物信息表中所有行的产品类型字段皆需更新）、插入异常（新进产品，暂无人购买，产品名称和类型无法记录到库表中）、删除异常")]),s._v(" "),a("li",[s._v("库表中不存在非关键字段对任一候选关键字段的传递函数依赖。A决定B，B决定C，则C传递函数依赖于A。比如：员工信息表（员工编号、姓名、年龄、所在部门、部门电话），员工编号决定了所在部门，所在部门决定了部门电话。")])]),s._v(" "),a("h2",{attrs:{id:"内置函数"}},[s._v("内置函数")]),s._v(" "),a("blockquote",[a("p",[s._v("DUAL是Oracle中真实存在的一个表，而且仅有一个字段DUMMY。")])]),s._v(" "),a("h3",{attrs:{id:"数值型"}},[s._v("数值型")]),s._v(" "),a("ul",[a("li",[s._v("绝对值、取余、判断数值正负\n"),a("ul",[a("li",[s._v("ABS(n)")]),s._v(" "),a("li",[s._v("MOD(n2, n1)，若n1为0，该函数将返回n2")]),s._v(" "),a("li",[s._v("SIGN(n)，正数返回1，0返回0，负数返回-1")])])]),s._v(" "),a("li",[s._v("三角函数\n"),a("ul",[a("li",[s._v("COS/SIN/TAN(n)/...，n为弧度表示的角度")])])]),s._v(" "),a("li",[s._v("返回以指定数值为准整数的函数\n"),a("ul",[a("li",[s._v("CELL(n)")]),s._v(" "),a("li",[s._v("FLOOR(n)")])])]),s._v(" "),a("li",[s._v("指数、对数\n"),a("ul",[a("li",[s._v("SORT(n)，返回n的平方根")]),s._v(" "),a("li",[s._v("POWER(n2, n1)，n2的n1次幂")]),s._v(" "),a("li",[s._v("LOG(n1, n2)，LOG(10, 100) = 2")])])]),s._v(" "),a("li",[s._v("四舍五入截取函数\n"),a("ul",[a("li",[s._v("ROUND(n, integer)，第二个参数若非整数，会截取整数部分，integer为正时，n四舍五入为integer位小数，若为负，n被四舍五入至小数点向左integer位")]),s._v(" "),a("li",[s._v("TRUNC(n, integer)，第二个参数若非整数，会截取整数部分，integer为正时，n截取到integer位小数，若为负，n截取到小数点向左integer位，被截取位0代替")])])])]),s._v(" "),a("h3",{attrs:{id:"字符型函数"}},[s._v("字符型函数")]),s._v(" "),a("ul",[a("li",[s._v("字符转换\n"),a("ul",[a("li",[s._v("CHR(ASCII CODE)")]),s._v(" "),a("li",[s._v("ASCII(char)")])])]),s._v(" "),a("li",[s._v("获取字符串长度\n"),a("ul",[a("li",[s._v("LENGTH(char)")])])]),s._v(" "),a("li",[s._v("字符串截取\n"),a("ul",[a("li",[s._v("SUBSTR(char, position[, length])，position初始为1，若为负数，则表示从右算起")])])]),s._v(" "),a("li",[s._v("字符串拼接\n"),a("ul",[a("li",[s._v("CONCAT(char1, char2)")])])]),s._v(" "),a("li",[s._v("字符串搜索\n"),a("ul",[a("li",[s._v("INSTR(string, substring[, position[, occurrence]])，在string中搜索substring，occurrence：substring第几次出现，返回值为下标")])])]),s._v(" "),a("li",[s._v("大小写转换\n"),a("ul",[a("li",[s._v("UPPER(char)")]),s._v(" "),a("li",[s._v("LOWER(char)")]),s._v(" "),a("li",[s._v("INITCAP(char)，char的所有单词首字母大写")])])]),s._v(" "),a("li",[s._v("替换\n"),a("ul",[a("li",[s._v("REPLACE(char, search_string[, replacement_string])")])])]),s._v(" "),a("li",[s._v("填充\n"),a("ul",[a("li",[s._v("RPAD(expr1, n[, expr2])，在expr1右边填充expr2直至字符串长度为n，若无expr2，则以空格填充")]),s._v(" "),a("li",[s._v("LPAD(expr1, n[, expr2])")])])]),s._v(" "),a("li",[s._v("删除字符串首尾指定字符\n"),a("ul",[a("li",[s._v("TRIM([LEADING|TRAILING|BOTH（前缀|后缀|前后缀）][trim_character（删除的指定字符，只能为单字符，默认空格） FROM ]target_string)")]),s._v(" "),a("li",[s._v("RTRIM(target_string[, trim_string可为字符串])，将target_string右边出现的trim_string删除，RTRIM('abcbaab', 'ab') = abc")]),s._v(" "),a("li",[s._v("LTRIM")])])])]),s._v(" "),a("h3",{attrs:{id:"日期类型函数"}},[s._v("日期类型函数")]),s._v(" "),a("ul",[a("li",[s._v("SYSDATE")]),s._v(" "),a("li",[s._v("SYSTIMESTAMP")]),s._v(" "),a("li",[s._v("LAST_DAY(date)，date所在月份的最后一天")]),s._v(" "),a("li",[s._v("EXTRACT(YEAR|MINUTE|SECOND FROM datetime)")]),s._v(" "),a("li",[s._v("MONTHS_BETWEEN(date1, date2)，若两日期所在天数是同一天或皆是所在月份的最后一天返回整数，否则返回小数")]),s._v(" "),a("li",[s._v("TRUNC(date[, 'YEAR|MONTH|DAY'])，TRUNC(to_date('20211020', 'yyyymmdd'), 'YEAR') = 20210101")])]),s._v(" "),a("h3",{attrs:{id:"转换函数"}},[s._v("转换函数")]),s._v(" "),a("ul",[a("li",[s._v("TO_CHAR")]),s._v(" "),a("li",[s._v("TO_DATE")]),s._v(" "),a("li",[s._v("TO_NUMBER")])]),s._v(" "),a("h3",{attrs:{id:"null函数"}},[s._v("NULL函数")]),s._v(" "),a("ul",[a("li",[s._v("COALESCE(expr1[, expr2[, ...pexrn]])，返回列表中第一个不为null的表达式")]),s._v(" "),a("li",[s._v("LNNVL(condition)，返回不满足condition的数据行，eg: select * from regions where lnnvl(region_id > 2); = where region_id <= 2")]),s._v(" "),a("li",[s._v("NVL(expr1, expr2)")]),s._v(" "),a("li",[s._v("NVL2(expr1, expr2, expr3)，expr1为null时返回3，否则返回2")])]),s._v(" "),a("h3",{attrs:{id:"集合函数"}},[s._v("集合函数")]),s._v(" "),a("ul",[a("li",[s._v("AVG")]),s._v(" "),a("li",[s._v("COUNT")]),s._v(" "),a("li",[s._v("MAX")]),s._v(" "),a("li",[s._v("SUM")])]),s._v(" "),a("h3",{attrs:{id:"其他函数"}},[s._v("其他函数")]),s._v(" "),a("ul",[a("li",[s._v("SELECT USER FROM DUAL;")]),s._v(" "),a("li",[s._v("DECODE")])]),s._v(" "),a("h2",{attrs:{id:"plsql"}},[s._v("PLSQL")]),s._v(" "),a("blockquote",[a("p",[s._v("属于第三代语言，过程化的语言。")])]),s._v(" "),a("h3",{attrs:{id:"变量"}},[s._v("变量")]),s._v(" "),a("h4",{attrs:{id:"标量类型"}},[s._v("标量类型")]),s._v(" "),a("ul",[a("li",[s._v("数值类型\n"),a("ul",[a("li",[s._v("NUMBER，可以表示整数和浮点数，NUMBER[(precision[, scale])]，最高精度38位")]),s._v(" "),a("li",[s._v("PLS_INTEGER，BINARY_INTEGER，(-2 << 30) - (2 << 30 - 1)，BINARY溢出的时候能为其指派一个NUMBER类型而不至于发生异常，PLS则会发生异常，建议用PLS")]),s._v(" "),a("li",[s._v("SIMPLE_INTEGER属于PLS_INTEGER的子类型，取值范围相同，区别为该类型不允许为空，若不需要溢出检查且不可能是空，建议使用该类型。")])])]),s._v(" "),a("li",[s._v("字符类型\n"),a("ul",[a("li",[s._v("CHAR，定长，最长32767字节，如果达不到指定的长度，会在右边空格补齐（=NULL时不会），所以数据库提取数据时可能要做空格处理。")]),s._v(" "),a("li",[s._v("VARCHAR2，变长，最长32767字节，如果作为字段存储是4000字节")]),s._v(" "),a("li",[s._v("LONG，32760字节，存储字段是2GB")])])]),s._v(" "),a("li",[s._v("布尔类型，TRUE/FALSE/NULL")]),s._v(" "),a("li",[s._v("日期类型，DATE/TIMESTAMP")]),s._v(" "),a("li",[s._v("%TYPE")])]),s._v(" "),a("h4",{attrs:{id:"符合类型"}},[s._v("符合类型")]),s._v(" "),a("ul",[a("li",[s._v("RECORD")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" emp_record "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v_sal       employees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("salary"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                            v_email     employees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("email"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                            v_hire_date "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),s._v("\n                          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  v_emp_record emp_record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" salary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hire_date\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" v_emp_record\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" employees\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" employee_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'薪资为：'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" v_emp_record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("v_sal\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("',邮箱为：'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" v_emp_record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("v_email\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("',雇用日期为: '")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" v_emp_record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("v_hire_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--exception ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v("\n  v_emp_record employees"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("rowtype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Begin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" v_emp_record "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" employees "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" employee_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9527")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'薪资为：'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" v_emp_record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("salary\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("',邮箱为：'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" v_emp_record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("employee_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--exception")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("索引表类型")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TYPE")]),s._v(" type_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OF")]),s._v(" record类型 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" BINARY_INTEGER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PLS_INTEGER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("VARRAY变长数组")])])])}),[],!1,null,null,null);t.default=e.exports}}]);