(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{452:function(_,v,i){"use strict";i.r(v);var l=i(54),n=Object(l.a)({},(function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[i("h2",{attrs:{id:"范式"}},[_._v("范式")]),_._v(" "),i("ul",[i("li",[_._v("库表中的字段都是单一属性，不可再分；")]),_._v(" "),i("li",[_._v("库表中不存在非关键字段对任一候选关键字段的部分函数依赖；比如：购物信息表（客户编号、产品名称、产品数量、产品类型...），产品名称决定产品类型。不符合该范式会出现：数据冗余、更新异常（若调整了产品的类型，该购物信息表中所有行的产品类型字段皆需更新）、插入异常（新进产品，暂无人购买，产品名称和类型无法记录到库表中）、删除异常")]),_._v(" "),i("li",[_._v("库表中不存在非关键字段对任一候选关键字段的传递函数依赖。A决定B，B决定C，则C传递函数依赖于A。比如：员工信息表（员工编号、姓名、年龄、所在部门、部门电话），员工编号决定了所在部门，所在部门决定了部门电话。")])]),_._v(" "),i("h2",{attrs:{id:"内置函数"}},[_._v("内置函数")]),_._v(" "),i("blockquote",[i("p",[_._v("DUAL是Oracle中真实存在的一个表，而且仅有一个字段DUMMY。")])]),_._v(" "),i("h3",{attrs:{id:"数值型"}},[_._v("数值型")]),_._v(" "),i("ul",[i("li",[_._v("绝对值、取余、判断数值正负\n"),i("ul",[i("li",[_._v("ABS(n)")]),_._v(" "),i("li",[_._v("MOD(n2, n1)，若n1为0，该函数将返回n2")]),_._v(" "),i("li",[_._v("SIGN(n)，正数返回1，0返回0，负数返回-1")])])]),_._v(" "),i("li",[_._v("三角函数\n"),i("ul",[i("li",[_._v("COS/SIN/TAN(n)/...，n为弧度表示的角度")])])]),_._v(" "),i("li",[_._v("返回以指定数值为准整数的函数\n"),i("ul",[i("li",[_._v("CELL(n)")]),_._v(" "),i("li",[_._v("FLOOR(n)")])])]),_._v(" "),i("li",[_._v("指数、对数\n"),i("ul",[i("li",[_._v("SORT(n)，返回n的平方根")]),_._v(" "),i("li",[_._v("POWER(n2, n1)，n2的n1次幂")]),_._v(" "),i("li",[_._v("LOG(n1, n2)，LOG(10, 100) = 2")])])]),_._v(" "),i("li",[_._v("四舍五入截取函数\n"),i("ul",[i("li",[_._v("ROUND(n, integer)，第二个参数若非整数，会截取整数部分，integer为正时，n四舍五入为integer位小数，若为负，n被四舍五入至小数点向左integer位")]),_._v(" "),i("li",[_._v("TRUNC(n, integer)，第二个参数若非整数，会截取整数部分，integer为正时，n截取到integer位小数，若为负，n截取到小数点向左integer位，被截取位0代替")])])])]),_._v(" "),i("h3",{attrs:{id:"字符型函数"}},[_._v("字符型函数")]),_._v(" "),i("ul",[i("li",[_._v("字符转换\n"),i("ul",[i("li",[_._v("CHR(ASCII CODE)")]),_._v(" "),i("li",[_._v("ASCII(char)")])])]),_._v(" "),i("li",[_._v("获取字符串长度\n"),i("ul",[i("li",[_._v("LENGTH(char)")])])]),_._v(" "),i("li",[_._v("字符串截取\n"),i("ul",[i("li",[_._v("SUBSTR(char, position[, length])，position初始为1，若为负数，则表示从右算起")])])]),_._v(" "),i("li",[_._v("字符串拼接\n"),i("ul",[i("li",[_._v("CONCAT(char1, char2)")])])]),_._v(" "),i("li",[_._v("字符串搜索\n"),i("ul",[i("li",[_._v("INSTR(string, substring[, position[, occurrence]])，在string中搜索substring，occurrence：substring第几次出现，返回值为下标")])])]),_._v(" "),i("li",[_._v("大小写转换\n"),i("ul",[i("li",[_._v("UPPER(char)")]),_._v(" "),i("li",[_._v("LOWER(char)")]),_._v(" "),i("li",[_._v("INITCAP(char)，char的所有单词首字母大写")])])]),_._v(" "),i("li",[_._v("替换\n"),i("ul",[i("li",[_._v("REPLACE(char, search_string[, replacement_string])")])])]),_._v(" "),i("li",[_._v("填充\n"),i("ul",[i("li",[_._v("RPAD(expr1, n[, expr2])，在expr1右边填充expr2直至字符串长度为n，若无expr2，则以空格填充")]),_._v(" "),i("li",[_._v("LPAD(expr1, n[, expr2])")])])]),_._v(" "),i("li",[_._v("删除字符串首尾指定字符\n"),i("ul",[i("li",[_._v("TRIM([LEADING|TRAILING|BOTH（前缀|后缀|前后缀）][trim_character（删除的指定字符，只能为单字符，默认空格） FROM ]target_string)")]),_._v(" "),i("li",[_._v("RTRIM(target_string[, trim_string可为字符串])，将target_string右边出现的trim_string删除，RTRIM('abcbaab', 'ab') = abc")]),_._v(" "),i("li",[_._v("LTRIM")])])])]),_._v(" "),i("h3",{attrs:{id:"日期类型函数"}},[_._v("日期类型函数")]),_._v(" "),i("ul",[i("li",[_._v("SYSDATE")]),_._v(" "),i("li",[_._v("SYSTIMESTAMP")]),_._v(" "),i("li",[_._v("LAST_DAY(date)，date所在月份的最后一天")]),_._v(" "),i("li",[_._v("EXTRACT(YEAR|MINUTE|SECOND FROM datetime)")]),_._v(" "),i("li",[_._v("MONTHS_BETWEEN(date1, date2)，若两日期所在天数是同一天或皆是所在月份的最后一天返回整数，否则返回小数")]),_._v(" "),i("li",[_._v("TRUNC(date[, 'YEAR|MONTH|DAY'])，TRUNC(to_date('20211020', 'yyyymmdd'), 'YEAR') = 20210101")])]),_._v(" "),i("h3",{attrs:{id:"转换函数"}},[_._v("转换函数")]),_._v(" "),i("ul",[i("li",[_._v("TO_CHAR")]),_._v(" "),i("li",[_._v("TO_DATE")]),_._v(" "),i("li",[_._v("TO_NUMBER")])]),_._v(" "),i("h3",{attrs:{id:"null函数"}},[_._v("NULL函数")]),_._v(" "),i("ul",[i("li",[_._v("COALESCE(expr1[, expr2[, ...pexrn]])，返回列表中第一个不为null的表达式")]),_._v(" "),i("li",[_._v("LNNVL(condition)，返回不满足condition的数据行，eg: select * from regions where lnnvl(region_id > 2); = where region_id <= 2")]),_._v(" "),i("li",[_._v("NVL(expr1, expr2)")]),_._v(" "),i("li",[_._v("NVL2(expr1, expr2, expr3)，expr1为null时返回3，否则返回2")])]),_._v(" "),i("h3",{attrs:{id:"集合函数"}},[_._v("集合函数")]),_._v(" "),i("ul",[i("li",[_._v("AVG")]),_._v(" "),i("li",[_._v("COUNT")]),_._v(" "),i("li",[_._v("MAX")]),_._v(" "),i("li",[_._v("SUM")])]),_._v(" "),i("h3",{attrs:{id:"其他函数"}},[_._v("其他函数")]),_._v(" "),i("ul",[i("li",[_._v("SELECT USER FROM DUAL;")]),_._v(" "),i("li",[_._v("DECODE")])])])}),[],!1,null,null,null);v.default=n.exports}}]);