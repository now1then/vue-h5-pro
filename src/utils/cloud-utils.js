/* eslint-disable */
// 公共函数

/**
 * 加法函数，用来得到精确的加法结果<br>
 * javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1加上arg2的精确结果
 * @example
 *
 * accAdd(0.1, 0.2)
 * // => 0.3
 */
export function accAdd(arg1, arg2) {
  var r1;
  var r2;
  var m;
  var c;

  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    var cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''));
      arg2 = Number(arg2.toString().replace('.', '')) * cm;
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm;
      arg2 = Number(arg2.toString().replace('.', ''));
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''));
    arg2 = Number(arg2.toString().replace('.', ''));
  }
  return (arg1 + arg2) / m;
}

/**
 * 除法函数，用来得到精确的除法结果<br>
 * javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1除以arg2的精确结果
 * @example
 *
 * accDiv(0.2, 0.3)
 * // => 0.6666666666666666
 */
export function accDiv(arg1, arg2) {
  var t1 = 0;
  var t2 = 0;
  var r1;
  var r2;

  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) {
  }
  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) {
  }
  r1 = Number(arg1.toString().replace('.', ''));
  r2 = Number(arg2.toString().replace('.', ''));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

/**
 * 乘法函数，用来得到精确的乘法结果<br>
 * javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1乘以arg2的精确结果
 * @example
 *
 * accMul(0.222, 0.3333)
 * // => 0.0739926
 */
export function accMul(arg1, arg2) {
  var m = 0;
  var s1 = arg1.toString();
  var s2 = arg2.toString();

  try {
    m += s1.split('.')[1].length;
  } catch (e) {
  }
  try {
    m += s2.split('.')[1].length;
  } catch (e) {
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

/**
 * 减法函数，用来得到精确的减法结果<br>
 * javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1减去arg2的精确结果
 * @example
 *
 * accDiv(0.3, 0.2)
 * // => 0.1
 */
export function accSub(arg1, arg2) {
  var r1;
  var r2;
  var m;
  var n;

  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2)); // last modify by deeka //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

/**
 * 为数字加上单位：万或亿
 *
 * @param {number} number 输入数字.
 * @param {number} decimalDigit 小数点后最多位数，默认为2
 * @return {*} 加上单位后的数字
 * @example
 *
 * addChineseUnit(1000.01)
 * // => 1000.01
 *
 * addChineseUnit(10000)
 * // => 1万
 *
 * addChineseUnit(99000)
 * // => 9.9万
 *
 * addChineseUnit(566000)
 * // => 56.6万
 *
 * addChineseUnit(5660000)
 * // => 566万
 *
 * addChineseUnit(44440000)
 * // => 4444万
 *
 * addChineseUnit(11111000)
 * // => 1111.1万
 *
 * addChineseUnit(444400000)
 * // => 4.44亿
 *
 * addChineseUnit(400000000000000000000000)
 * // => 4000万亿亿
 *
 * addChineseUnit(4000000000000000000000000)
 * // => 4亿亿亿
 */
export function addChineseUnit(number, decimalDigit) {
  if (decimalDigit === void 0) decimalDigit = 2;

  var isNeedAbs = false;
  if (number < 0) {
    isNeedAbs = true;
    number = Math.abs(number);
  }

  var integer = Math.floor(number);
  var digit = getDigit(integer);
  // ['个', '十', '百', '千', '万', '十万', '百万', '千万'];
  var unit = [];

  if (digit > 3) {
    var multiple = Math.floor(digit / 8);
    if (multiple >= 1) {
      var tmp = Math.floor(integer / Math.pow(10, 8 * multiple));
      unit.push(addWan(tmp, number, 8 * multiple, decimalDigit));
      for (var i = 0; i < multiple; i++) {
        unit.push('亿');
      }
      if (isNeedAbs) {
        return '-' + unit.join('');
      } else {
        return unit.join('');
      }
    } else {
      if (isNeedAbs) {
        return '-' + addWan(integer, number, 0, decimalDigit);
      } else {
        return addWan(integer, number, 0, decimalDigit);
      }
    }
  } else {
    if (isNeedAbs) {
      return '-' + number;
    } else {
      return number;
    }
  }
}

export function addWan(integer, number, mutiple, decimalDigit) {
  var digit = getDigit(integer);
  if (digit > 3) {
    var remainder = digit % 8;
    // ‘十万’、‘百万’、‘千万’显示为‘万’
    if (remainder >= 5) {
      remainder = 4;
    }
    return Math.floor(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万';
  } else {
    return Math.floor(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit);
  }
}

export function getDigit(integer) {
  var digit = -1;
  while (integer >= 1) {
    digit++;
    integer = integer / 10;
  }
  return digit;
}

/**
 * 自动为股票代码添加市场后缀
 *
 * @param {string} stock 股票代码
 * @returns {string}
 * @example
 *
 * appendStockSuffix('600570')
 * // => '600570.SS'
 */
export function appendStockSuffix(stock) {
  var regSS = /^(((700|730|900|600|601|580)[\d]{3})|60[\d]{4})$/;
  var regSZ = /^(((000|002|200|300|080|031)[\d]{3}|00[\d]{4}))$/;

  if (regSS.test(stock)) {
    stock = stock + '.SS';
  } else if (regSZ.test(stock)) {
    stock = stock + '.SZ';
  }
  return stock;
}

/**
 * 加密算法
 * 1.所有入参加入集合M，参数名做key, 值做value
 * 2.提供的密钥1（字段名appid）与密钥2（字段名secret）两项，以及当前时间戳（字段名time)也加入集合M,
 * 3.将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序）
 * 4.集合M所有值拼接成字符串，转化成UTF-8编码格式的字节数组, 最后需要取MD5码（signature摘要值）
 *
 * @param {object} params
 * @example
 *
 * const params = { mobile: '15858264900', nickname: 'liwb', appkey: 'ertfgdf345435568123454rtoiko5=' };
 *
 * md5(encrypt(params).toUpperCase());
 * // => md5('APPKEY=ERTFGDF34543545=&MOBILE=15858264903&NICKNAME=LIWB')
 */
export function encrypt(params) {
  // 顺序排列key
  var keys = Object.keys(params).sort();
  var str = [];

  keys.forEach(function (p) {
    str.push(p + '=' + params[p]);
  });

  return str.join('&');
}

/**
 * 将from所有的键值对都添加到to上面去，返回to
 *
 * @param {Object} to
 * @param {Object} from
 * @returns {*}
 * @example
 *
 * const from = {mobile: '15858264903', nickname: 'liwb'};
 * const to = {nickname: 'cklwb'};
 *
 * extend(to, from);
 * // => {nickname: "liwb", mobile: "15858264903"}
 */
export function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * 格式化银行卡<br>
 * 用户在输入银行卡号时，需要以4位4位的形式显示，就是每隔4位加个空格，方便用户校对输入的银行卡是否正确<br>
 * **注：**一般数据库里面存的都是不带格式的原始数据，所以提交的时候记得过滤下空格再提交哦。毕竟格式化这种算是表现层，前端展示的时候处理下就好，业务逻辑什么用到的卡号可不是格式化后的呢。<br>
 * 还原`val.replace(/\s/g, '');`
 *
 * @param {string} val
 * @returns {*}
 * @example
 *
 * formatBankCard('6225365271562822');
 * // => 6225 3652 7156 2822
 */
export function formatBankCard(val) {
  if (typeof val !== 'string') {
    throw new Error('val');
  }

  var len = val.length;
  var reg = /(\d{4})(?=\d)/g;

  if (len < 4) {
    return val;
  } else {
    return val.replace(reg, '$1 ');
  }
}

/**
 * Date 转化为指定格式的String<br>
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)可以用 1-2 个占位符<br>
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *
 * @param {string} date
 * @param {string} fmt
 * @returns {string}
 * @example
 *
 * formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss.S');
 * // => 2006-07-02 08:09:04.423
 *
 * formatDate(Date.now(), 'yyyy-MM-dd E HH:mm:ss');
 * // => 2009-03-10 二 20:09:04
 *
 * formatDate(Date.now(), 'yyyy-MM-dd EE hh:mm:ss');
 * // => 2009-03-10 周二 08:09:04
 *
 * formatDate(Date.now(), 'yyyy-MM-dd EEE hh:mm:ss');
 * // => 2009-03-10 星期二 08:09:04
 *
 * formatDate(Date.now(), 'yyyy-M-d h:m:s.S')
 * // => 2006-7-2 8:9:4.18
 */
export function formatDate(date, fmt) {
  if (date === void 0) date = new Date();
  if (fmt === void 0) fmt = 'yyyy-MM-dd HH:mm:ss';

  date = (typeof date === 'number' || typeof date === 'string') ? new Date(date) : date;

  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds(), // 毫秒
  };
  var week = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d',
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + '']);
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }

  return fmt;
}

/**
 * 将时间转化为几天前,几小时前，几分钟前
 *
 * @param {number} ms
 * @returns {*}
 * @example
 *
 * formatTimeAgo(1505232000000);
 * // => 1天前
 */
export function formatTimeAgo(ms) {
  ms = parseInt(ms);

  var timeNow = Date.now();
  var diff = (timeNow - ms) / 1000;
  var date = new Date();
  var days = Math.round(diff / (24 * 60 * 60));
  var hours = Math.round(diff / (60 * 60));
  var minutes = Math.round(diff / 60);
  var second = Math.round(diff);

  if (days > 0 && days < 2) {
    return days + '天前';
  } else if (days <= 0 && hours > 0) {
    return hours + '小时前';
  } else if (hours <= 0 && minutes > 0) {
    return minutes + '分钟前';
  } else if (minutes <= 0 && second >= 0) {
    return '刚刚';
  } else {
    date.setTime(ms);

    return (date.getFullYear() + '-' + f(date.getMonth() + 1) + '-' + f(date.getDate()) + ' ' + f(date.getHours()) + ':' + f(date.getMinutes()));
  }

  function f(n) {
    return (n < 10) ? '0' + n : n;
  }
}

/**
 * 获取指定时间unix时间戳
 *
 * @param {string} time
 * @returns {number}
 * @example
 *
 * formatDateToTimeStamp('20160126 12:00:00');
 * // => 1453780800000
 *
 * formatDateToTimeStamp('2016-01-26 12:00:00');
 * // => 1453780800000
 *
 * formatDateToTimeStamp('2016.01.26 12:00:00');
 * // => 1453780800000
 *
 * formatDateToTimeStamp('20160126');
 * // => 1453737600000
 *
 * formatDateToTimeStamp('2016-01-26 12:00:00.0');
 * // => 1453780800000
 */
export function formatDateToTimeStamp(time) {
  if (typeof time !== 'string') {
    throw new Error('time数据类型必须是string');
  }

  // 2016-05-23 13:58:02.0
  if (time.length > 19) {
    time = time.substring(0, 19);
  }

  var unixTime;
  var pattern = /-|\./g;
  var year;
  var month;
  var day;
  var reset;

  if (pattern.test(time)) {
    unixTime = time.replace(pattern, '/');
  } else {
    // 若无’-‘，则不处理
    if (!~time.indexOf('-')) {
      year = time.slice(0, 4);
      month = time.slice(4, 6);
      day = time.slice(6, 8);
      reset = time.slice(8);
      unixTime = year + '/' + month + '/' + day + reset;
    }
  }

  return Math.round(new Date(unixTime).getTime());
}

/**
 * 用符号（默认为逗号）格式化金钱
 *
 * @param {string} val
 * @param {string} symbol 默认`,`
 * @returns {string|*|XML|void}
 * @example
 *
 * formatMoney('1234567890');
 * // => 1,234,567,890
 */
export function formatMoney(val, symbol) {
  if (symbol === void 0) symbol = ',';

  return val.replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
}

/**
 * 手机号码中间部分替换成指定符号
 *
 * @param {string} phone
 * @param {string} symbol 默认为`*`
 * @returns {string|*|XML|void}
 * @example
 *
 * formatPhone('15858264903');
 * // => 158****4903
 */
export function formatPhone(phone, symbol) {
  if (symbol === void 0) symbol = '****';

  return phone.replace(/(\d{3})\d{4}(\d{4})/, ('$1' + symbol + '$2'));
}

/**
 * 静态文件路径补全
 *
 * @since 1.0.7
 * @param {string} file 文件名字
 * @returns {string}
 * @example
 *
 * formatCopyfilesPath('logo.png');
 * // => assets/images/copyfiles/logo.png
 */
export function formatCopyfilesPath(file) {
  return ('assets/images/copyfiles/' + file);
}

/**
 * 获取location.href参数
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * window.location.href = 'http://www.baidu.com/?a=1&b=2';
 *
 * getLocationHrefParam('a');
 * // => 1
 */
export function getLocationHrefParam(name) {
  // 构造一个含有目标参数的正则表达式对象
  var r = new RegExp('(\\?|#|&)' + name + '=([^&#]*)(&|#|$)');
  var m = window.location.href.match(r);

  if (r !== null) {
    return decodeURIComponent(!m ? '' : m[2]);
  }
  return null;
}

/**
 * 获取location.search的参数
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * window.location.href = 'http://www.baidu.com/?a=1&b=2';
 *
 * getLocationSearchParam('a');
 * // => 1
 */
export function getLocationSearchParam(name) {
  // 构造一个含有目标参数的正则表达式对象
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  // 匹配目标参数
  var r = window.location.search.substr(1).match(reg);

  if (r !== null) {
    return decodeURIComponent(r[2]);
  }

  return null;
}

/**
 * 是否为空对象
 *
 * @param {object} o
 * @returns {boolean}
 * @example
 *
 * isEmptyObject({});
 * // => true
 */
export function isEmptyObject(o) {
  var t;

  for (t in o) {
    return !1;
  }

  return !0;
}

/**
 * 根据参数获取对应的值
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * // window.location.href: 'http://www.baidu.com/?a=1&b=2&state=broker:aaaa1111ccc;tenant:asdfasdf;view_tag:2;
 * getUrlNames('state');
 * // => {broker: "aaaa1111ccc", tenant: "asdfasdf", view_tag: "2"}
 */
export function getUrlNames(name) {
  var urlParam = getLocationHrefParam(name);
  var o = {};

  if (urlParam) {
    var str = urlParam.split(';');

    for (var i = 0, len = str.length; i < len; i++) {
      if (str[i].indexOf(':') !== -1) {
        var str1 = str[i].split(':');

        o[str1[0]] = str1[1];
      }
    }
  }

  return !isEmptyObject(o) ? o : '';
}

/**
 * 生成guid
 *
 * @returns {string}
 * @example
 *
 * generateGUID();
 * // => 1e508ed6-6177-498d-c2a3-467f546db6ab
 */
export function generateGUID() {
  var d = Date.now();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });

  return uuid;
}

/**
 * 获取max与min之间的随机数
 *
 * @param {number} min
 * @param {number} max
 * @returns {*}
 * @example
 *
 * getRandomInt(1, 9);
 * // => 2
 */
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * html字符解码
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * htmlDecode('&lt;script&gt;');
 * // => <script>
 */
export function htmlDecode(str) {
  if (typeof str === 'string' && str.length === 0) {
    return;
  }

  var s = str.replace(/&amp;/g, '&');

  return s.replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, '\'')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/<br>/g, '\\n');
}

/**
 * html字符编码
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * htmlEncode('<script>');
 * // => &lt;script&gt;
 */
export function htmlEncode(str) {
  if (typeof str === 'string' && str.length === 0) {
    return;
  }

  var s = str.replace(/&/g, '&amp;');

  return s.replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\'/g, '&#39;')
    .replace(/ /g, '&nbsp;')
    .replace(/\"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

/**
 * 是否是支付宝内核
 *
 * @returns {boolean}
 * @example
 *
 * inAlipay();
 * // => false
 */
export function inAlipay() {
  if (typeof navigator === 'undefined') {
    return;
  }

  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('alipayclient') !== -1;
}

/**
 * 是否是微信内核
 *
 * @returns {boolean}
 * @example
 *
 * inAlipay();
 * // => false
 */
export function inWeixin() {
  if (typeof navigator === 'undefined') {
    return;
  }

  var ua = navigator.userAgent.toLowerCase();

  return ua.indexOf('micromessenger') !== -1;
}

/**
 * 是否为有效的身份证号
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isCardId('411423198807127834');
 * // => true
 */
export function isCardId(val) {
  var reg = /^\d{6}(19|2\d)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X|x)?$/;
  // var reg = /^ [1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]?$/;

  return reg.test(val);
}

/**
 * 是否为数字
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isDigit('abc');
 * // => false
 */
export function isDigit(val) {
  var reg = /^-?\d+\.?\d*$/;

  return reg.test(val);
}

/**
 * 是否为闰年
 *
 * @param {number} val
 * @returns {boolean}
 * @example
 *
 * isLeapYear(2000);
 * // => true
 */
export function isLeapYear(val) {
  if (typeof val !== 'number') {
    throw new Error('val必须为number类型');
  }

  if (val % 4 === 0 && val % 100 !== 0) {
    return true;
  } else {
    return val % 400 === 0;
  }
}

/**
 * 是否为字母
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isLetters('1234');
 * // => false
 */
export function isLetters(val) {
  var reg = /^[a-z]+$/i;

  return reg.test(val);
}

/**
 * 是否为有效的车牌号码
 *
 * 1.常规车牌号：仅允许以汉字开头，后面可录入六个字符，由大写英文字母和阿拉伯数字组成。如：粤B12345；<br>
 * 2.武警车牌：允许前两位为大写英文字母，后面可录入七个字符，由大写英文字母和阿拉伯数字组成，其中第三位可录汉字也可录大写英文字母及阿拉伯数字，如：WJ01警0081、WJ0112345。<br>
 * 3.最后一个为汉字的车牌：允许以汉字开头，后面可录入六个字符，前五位字符，由大写英文字母和阿拉伯数字组成，而最后一个字符为汉字，汉字包括“挂”、“学”、“警”、“军”、“港”、“澳”。<br>如：粤Z1234港。
 * 4.新军车牌：以两位为大写英文字母开头，后面以5位阿拉伯数字组成。如：BA12345。<br>
 * 5.黑龙江车牌存在08或38开头的情况。<br>
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isLicenseNo('浙A12345');
 * // => true
 */
export function isLicenseNo(val) {
  var reg = /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/;

  return reg.test(val);
}

/**
 * 是否为有效的手机号
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isMobile('15898745678');
 * // => true
 */
export function isMobile(val) {
  var reg = /^[1][34578]\d{9}$/;

  return reg.test(val);
}

/**
 * 是否为有效的日期，格式为yyyy-mm-dd
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidDate('2015-01-20');
 * // => true
 */
export function isValidDate(val) {
  var reg = /^\d{4}-\d{2}-\d{2}$/;

  return reg.test(val);
}

/**
 * 是否为有效的邮箱<br>
 * 名称允许汉字、字母、数字，域名只允许英文域名<br>
 * 中文如：杨元庆001Abc@lenovo.com.cn
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidEmail('123456@qq.com');
 * // => true
 */
export function isValidEmail(val) {
  var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i;

  return reg.test(val);
}

/**
 * 是否为有效的密码(6-16位字母加数字组合，不能包含空格)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidPassword('a23456abc');
 * // => true
 */
export function isValidPassword(val) {
  var reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,16}$/;

  return reg.test(val);
}

/**
 * 是否为有效的qq
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidQQ('814563410');
 * // => true
 */
export function isValidQQ(val) {
  var reg = /^[1-9]\d{4,}$/;

  return reg.test(val);
}

/**
 * 是否为有效的url<br>
 *
 * 支持类型:<br>
 * http(s)://(username:password@)(www.)domain.(com/co.uk)(/...)<br>
 * (s)ftp://(username:password@)domain.com/...<br>
 * git://(username:password@)domain.com/...<br>
 * irc(6/s)://host:port/... //<br>
 * afp over TCP/IP: afp://[<user>@]<host>[:<port>][/[<path>]]<br>
 * telnet://<user>:<password>@<host>[:<port>/]<br>
 * smb://[<user>@]<host>[:<port>][/[<path>]][?<param1>=<value1>[;<param2>=<value2>]]<br>
 *
 * @param {string} val
 * @returns {*}
 * @example
 *
 * isValidURI('https://github.com/lodash');
 * // => true
 */
export function isValidURI(url) {
  var protocols = '((https?|s?ftp|irc[6s]?|git|afp|telnet|smb):\\/\\/)?';
  var userInfo = '([a-z0-9]\\w*(\\:[\\S]+)?\\@)?';
  var domain = '([a-z0-9]([\\w]*[a-z0-9])*\\.)?[a-z0-9]\\w*\\.[a-z]{2,}(\\.[a-z]{2,})?';
  var port = '(:\\d{1,5})?';
  var ip = '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}';
  var address = '(\\/\\S*)?';
  var domainType = [protocols, userInfo, domain, port, address];
  var ipType = [protocols, userInfo, ip, port, address];

  var verify = function (type) {
    return new RegExp('^' + type.join('') + '$', 'i').test(url);
  };

  return verify(domainType) || verify(ipType);
}

/**
 * 是否为有效的邮政编码
 *
 * @param val
 * @returns {boolean}
 * @example
 *
 * isValidZipcode('330561');
 * // => true
 */
export function isValidZipcode(val) {
  var reg = /^\d{6}$/;

  return reg.test(val);
}

/**
 * 对整数进行前置补0
 *
 * @param {number} num 数值
 * @param {number} size 要补0的位数
 * @returns {string}
 * @example
 *
 * preZeroFill(12, 3);
 * // => 012
 */
export function preZeroFill(num, size) {
  if (num >= Math.pow(10, size)) {
    return num.toString();
  } else {
    var _str = Array(size + 1).join('0') + num;
    return _str.slice(_str.length - size);
  }
}

/**
 * 将字节转换成友好格式，如Bytes，KB，MB
 *
 * @param {string} bytes
 * @returns {*}
 * @example
 *
 * bytesToSize(10000)
 * // => 9.8 KB
 */
export function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB'];
  if (bytes === 0) {
    return 'n/a';
  }
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

/**
 * base64转blob
 *
 * @param {string} dataURL
 * @returns {*}
 * @example
 *
 * const URI = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUvPjwvZGVmcz48cGF0aCBkPSJNOTU5LjQzNiAyNDMuNUwzNzcuNDEzIDg3MC4yNyA2NC4wMiA0NjcuMzQ0bDExNC43MjctOTcuOTMgMTk4LjY2NiAyMDcuMDYgNDkyLjQ4Mi00MjIuNTEgODkuNTQgODkuNTM3em0wIDAiIGZpbGw9IiM0M2E5ZjEiLz48L3N2Zz4=';
 *
 * dataURLToBlob(URI);
 * // => Blob {size: 248, type: "image/svg+xml"}
 */
export function dataURLToBlob(dataURL) {
  var BASE64_MARKER = ';base64,';
  var parts;
  var contentType;
  var raw;

  if (dataURL.indexOf(BASE64_MARKER) === -1) {
    parts = dataURL.split(',');
    contentType = parts[0].split(':')[1];
    raw = decodeURIComponent(parts[1]);

    return new Blob([raw], { type: contentType });
  }

  parts = dataURL.split(BASE64_MARKER);
  contentType = parts[0].split(':')[1];
  raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

/**
 * 获取设备像素比
 *
 * @returns {number}
 * @example
 *
 * // window.navigator.appVersion(5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1)
 * getPixelRatio();
 * // => 2
 */
export function getPixelRatio() {
  var ctx = document.createElement('canvas').getContext('2d');
  var dpr = window.devicePixelRatio || 1;
  var bsr = ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio || 1;

  return dpr / bsr;
}

/**
 * 将文本插入到文本区域的光标位置<br>
 * _应用场景：_如在评论框里，在光标位置里插入emoji等
 *
 * @param {object} dom对象
 * @param {string} str
 * @example
 *
 * <textarea name="textarea" rows="10" cols="50">你好世界~</textarea>
 *
 * const editText = document.querySelector('#editText');
 *
 * insertText(editText, 'hello world');
 * // =>
 */
export function insertAtCaret(dom, str) {
  if (str === void 0) str = '';

  if (document.selection) { // IE
    var sel = document.selection.createRange();
    sel.text = str;
  } else if (typeof dom.selectionStart === 'number' && typeof dom.selectionEnd === 'number') {
    var startPos = dom.selectionStart;
    var endPos = dom.selectionEnd;
    var cursorPos = startPos;
    var tmpStr = dom.value;

    dom.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
    cursorPos += str.length;
    dom.selectionStart = dom.selectionEnd = cursorPos;
  } else {
    dom.value += str;
  }
}

/**
 * 获取移动设备信息，如是否是iOS，android等
 *
 * @returns {{}}
 * @example
 *
 * getDevice();
 * // => {"androidChrome":false,"ipad":false,"iphone":true,"android":false,"ios":true,"os":"ios","osVersion":"9.1","webView":null}
 */
export function getDevice() {
  var device = {};
  var ua = navigator.userAgent;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

  device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false;

  // Android
  if (android) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

  return device;
}

/**
 * 获取浏览器的类型和版本号
 *
 * @returns {{type: string, version: string}}
 * @example
 *
 * getBrowser();
 * // => {type: "chrome", version: "60.0.3112.101"}
 */
export function getBrowser() {
  var ua = navigator.userAgent.toLowerCase();
  var type = 'UNKNOW';
  var v;
  var check = function (regex) {
    return regex.test(ua);
  };

  // IE
  if (check(/msie/) && !check(/opera/)) {
    type = 'ie';
    v = /msie[\/|\s]*([\d+?\.?]+)/.exec(ua);
  } else if ((!check(/webkit/) && check(/gecko/) && check(/firefox/)) && !check(/opera/)) { // firefox
    type = 'firefox';
    v = /firefox[\/|\s]*([\d+?\.?]+)/.exec(ua);
  } else if (check(/\bchrome\b/)) { // chrome
    type = 'chrome';
    v = /chrome[\/|\s]*([\d+?\.?]+)/.exec(ua);
  } else if (check(/applewebkit/) && check(/safari/)) { // safari (!check(/\bchrome\b/) is ensure by non-chrome above)
    type = 'safari';
    v = /version[\/|\s]*([\d+?\.?]+)/.exec(ua);
  } else if (check(/opera/)) {
    type = 'opera';
    v = /version[\/|\s]*([\d+?.?]+)/.exec(ua) || /opera[\/|\s]*([\d+?.?]+)/.exec(ua);
  }

  return {
    type: type,
    version: (v && v[1]) ? v[1] : 'UNKNOW',
  }
}

/**
 * 得到两个时间的时间差（返回天数）
 *
 * @since 1.0.7
 * @param {number} startDay 开始时间戳
 * @param {number} endDay   结束时间戳
 * @returns {number}
 * @example
 *
 * getDiffDay(1501516800000, 1504195200000);
 * // => 31
 */
export function getDiffDay(startDay, endDay) {
  startDay = Number(startDay);
  endDay = Number(endDay);
  return Math.abs(endDay - startDay) / (24 * 1000 * 3600);
}

/**
 * dom操作，元素是包含某个class
 *
 * @since 1.1.5
 * @param el HTML元素
 * @param cls css类名
 * @returns {boolean}
 * @example
 *
 * <div class="box flex"></div>
 * hasClass(document.querySelector('.box'), 'flex');
 * // => true
 */
export function hasClass(el, cls) {
  if (!el || !cls) {
    return false;
  }
  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.');
  }
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

/**
 * dom操作，元素添加某个class
 *
 * @since 1.1.5
 * @param el HTML元素
 * @param cls css类名
 * @example
 *
 * <div class="box flex"></div>
 * addClass(document.querySelector('.box'), 'flex1');
 * // => <div class="box flex flex1"></div>
 */
export function addClass(el, cls) {
  if (!el) {
    return;
  }
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) {
      continue;
    }

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

var trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/**
 * dom操作，元素删除某个class
 *
 * @since 1.1.5
 * @param el HTML元素
 * @param cls css类名
 * @example
 *
 * <div class="box flex"></div>
 * removeClass(document.querySelector('.box'), 'flex');
 * // => <div class="box"></div>
 */
export function removeClass(el, cls) {
  if (!el || !cls) {
    return;
  }
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) {
      continue;
    }

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

/**
 * 中划线转换小驼峰
 *
 * @since 1.1.7
 * @param {string} variable
 * @returns {string}
 * @example
 *
 * toCamelCaseVar('get_account_list');
 * // => getAccountList
 */
export function toCamelCaseVar(variable) {
  return variable.replace(/_+[a-zA-Z]/g, function (str, index) {
    return index ? str.substr(-1).toUpperCase() : str;
  });
}

/**
 * 格式化数字、金额、千分位、保留几位小数、舍入舍去
 *
 * @since 1.0.7
 * @param number 要格式化的数字
 * @param decimals 保留几位小数
 * @param decPoint 小数点符号
 * @param thousandsSep 千分位符号
 * @param roundTag 舍入参数，默认 'ceil' 向上取,'floor'向下取,'round' 四舍五入
 * @returns {XML|void|*|string}
 * @example
 *
 * formatNumber(2, 2, '.', ',');
 * // => 2.00
 */

export function formatNumber(number, decimals, decPoint, thousandsSep, roundTag) {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  roundTag = roundTag || 'ceil'; // 'ceil','floor','round'
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
  var dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
  var re = /(-?\d+)(\d{3})/;
  var s = '';
  var toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec);
    return '' + parseFloat(Math[roundTag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
  };
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2');
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

/**
 * 版本比较
 *
 * @param oldVersion 老版本
 * @param newVersion 新版本
 * @param containEqual 是否包含相等的情况
 * @returns {boolean} newVersion >[=] oldVersion
 * @example
 *
 * compareVersion('1.0.0', '1.0.1')
 */
export function compareVersion(oldVersion, newVersion, containEqual) {
  if (typeof oldVersion !== 'string' || typeof newVersion !== 'string') {
    return false;
  }
  // 分割字符串为['1', '0', '1']格式
  var oldArray = oldVersion.split('.');
  var newArray = newVersion.split('.');
  var o, n;
  // 从左向右对比值，值相同则跳过，不同则返回不同的值
  while (o === n && newArray.length > 0) {
    o = oldArray.shift();
    n = newArray.shift();
  }
  // 返回不同值的比较结果
  if (containEqual) {
    return (n | 0) >= (o | 0);
  } else {
    return (n | 0) > (o | 0);
  }
}

/**
 * 主动防御
 * 对于我们操作的数据，尤其是由 API 接口返回的，时常会有一个很复杂的深层嵌套的数据结构。为了代码的健壮性，很多时候需要对每一层访问都作空值判断，就像这样：
 props.user &&
 props.user.posts &&
 props.user.posts[0] &&
 props.user.posts[0].comments &&
 props.user.posts[0].comments[0]
 代码看起来相当不美观，因此提供了一个非常简洁明了的原生的方式。
 *
 * @param p 属性列表
 * @param o 对象
 * @returns {*} 如果正常访问到，则返回对应的值，否则返回 null。
 * @example
 *
 * var props = {
 *  user: {
 *    post: [{
 *      comments: 'test'
 *    }]
 *  }
 * };
 * getIn(['user', 'post', 0, 'comments'], props);
 * // => test
 */
export function getIn(p, o) {
  return p.reduce(function (xs, x) {
    return (xs && xs[x]) ? xs[x] : null;
  }, o);
}

/**
 * RGB 转换为 Hex
 *
 * @since 1.2.0
 * @param r r值
 * @param g g值
 * @param b b值
 * @returns {string} Hex值
 * @example
 * rgbToHex(0,0,0);
 * // => #000000
 */
export function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Hex 转换为 Rgb
 *
 * @since 1.2.0
 * @param hex
 * @returns {*}
 * @example
 *
 * hexToRgb("#0033ff").g;
 * // => 51
 */
export function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}

/**
 * Anagrams of string（带有重复项）
 * 使用递归。对于给定字符串中的每个字母，为字母创建字谜。使用map（）将字母与每部分字谜组合，然后使用reduce（）将所有字谜组合到一个数组中，最基本情况是字符串长度等于2或1。
 *
 * @since 1.2.1
 * @param str
 * @returns {*}
 * @example
 *
 * anagrams('abc');
 * // => ['abc','acb','bac','bca','cab','cba']
 */
export function anagrams(str) {
  if (str.length <= 2) {
    return str.length === 2 ? [str, str[1] + str[0]] : [str];
  }

  return str.split('').reduce(function (acc, letter, i) {
    return acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(function (val) {
      return letter + val;
    }));
  }, []);
}

/**
 * 大写每个单词的首字母
 *
 * @since 1.2.1
 * @param str
 * @returns {string|*|void|XML}
 * @example
 *
 * capitalizeEveryWord('hello world!');
 * // => 'Hello World!'
 */
export function capitalizeEveryWord(str) {
  return str.replace(/\b[a-z]/g, function (char) {
    return char.toUpperCase();
  });
}

/**
 * 斐波那契数组生成器
 * 创建一个特定长度的空数组，初始化前两个值（0和1）。使用Array.reduce（）向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
 *
 * @since 1.2.1
 * @param num
 * @returns {*}
 * @example
 *
 * fibonacci(5);
 * // => [0,1,1,2,3]
 */
export function fibonacci(num) {
  return Array(num).fill(0).reduce(function (acc, val, i) {
    return acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i);
  }, []);
}

/**
 * 获取滚动位置
 * 如果已定义，请使用pageXOffset和pageYOffset，否则使用scrollLeft和scrollTop，可以省略el来使用window的默认值。
 *
 * @since 1.2.1
 * @param el
 * @returns {{x: Number, y: Number}}
 * @example
 *
 * getScrollPos();
 * // => {x: 0, y: 200}
 */
export function getScrollPos(el) {
  if (el === void 0) el = window;

  return ({
    x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
    y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop,
  });
}

/**
 * 获取数组的最后一项
 *
 * @since 1.2.1
 * @param array
 * @returns {boolean}
 * @example
 *
 * tail(['1,2,3']);
 * // => '3';
 */
export function last(array) {
  return Array.isArray(array) && array.slice(-1)[0];
}

/**
 * 测试函数所花费的时间
 *
 * @since 1.2.1
 * @param callback
 * @returns {*}
 * @example
 *
 * timeTaken(() => Math.pow(2, 10));
 * // => 1024
 */
export function timeTaken(callback) {
  if (typeof callback !== 'function') {
    throw new Error('callback 必须为可执行的函数');
  }
  console.time('timeTaken');
  var r = callback();
  console.timeEnd('timeTaken');

  return r;
}

/**
 * 数组转换为键值对的对象
 *
 * @since 1.2.1
 * @param array
 * @returns {*}
 * @example
 *
 * objectFromPairs([['a',1],['b',2]]);
 * // => {a: 1, b: 2}
 */
export function objectFromPairs(array) {
  return Array.isArray(array) && array.reduce(function (a, v) {
    return (a[v[0]] = v[1], a);
  }, {});
}

/**
 * 滚动到顶部
 * 使用document.documentElement.scrollTop或document.body.scrollTop获取到顶部的距离。从顶部滚动一小部分距离。
 使用window.requestAnimationFrame（）来滚动。
 *
 * @since 1.2.1
 * @example
 *
 * scrollToTop();
 */
export function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}
