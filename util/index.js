export default {
	/**
	 * 设置cookie
	 * @param name
	 * @param value
	 * @param iDay
	 */
	setCookie: function(name, value, time, domain) {
		domain = domain ? ";domain=" + domain : "";
		var Days = time;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString() + ";path=/" + domain;
		return true;
	},
	/**
	 * 获取cookie
	 * @param name
	 * @returns {*}
	 */
	getCookie: function(name) {
		var strCookie = document.cookie;
		var arrCookie = strCookie.split("; ");
		for (var i = 0; i < arrCookie.length; i++) {
			var arr = arrCookie[i].split("=");
			if (name == arr[0]) {
				return arr[1];
			}
		}
		return '';
	},
	/**
	 * 删除cookie
	 * @param name
	 */
	delCookie: function(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = this.getCookie(name);
		if (cval != null)
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	},
	/**
	 * *
	 * 数组排序
	 * *
	 * /
	 */
	compare(property, state) {
		return function(a, b) {
			var value1 = a[property];
			var value2 = b[property];
			if (state) {
				return value1 - value2;
			} else {
				return value2 - value1;
			}
		}
	},
	/**
	 * *
	 * 数组去重复
	 * *
	 * /
	 */
	distinct(array) {
		var arr = array,
			result = [],
			i, j, len = arr.length;
		for (i = 0; i < len; i++) {
			for (j = i + 1; j < len; j++) {
				if (arr[i] === arr[j]) {
					j = ++i;
				}
			}
			result.push(arr[i]);
		}
		return result;
	},
	/**
	 * 获取参数
	 * @param value
	 * @returns {*}
	 */
	getRequest: function(value) {

		if (window.location.pathname == "/s/") {
			var url = unescape(location.search);
		} else {
			var url = decodeURI(location.search);
		}
		var object = {};
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			var strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				object[strs[i].split("=")[0]] = strs[i].split("=")[1]
			}
		}
		return object[value];
	},
	/**
	 * @param数字转换成中文大写
	 */
	toChinesNum: function(num) {
		let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']; //changeNum[0] = "零"
		let unit = ["", "十", "百", "千", "万"];
		num = parseInt(num);
		let getWan = (temp) => {
			let strArr = temp.toString().split("").reverse();
			let newNum = "";
			for (var i = 0; i < strArr.length; i++) {
				newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[
					i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum;
			}
			return newNum;
		}
		let overWan = Math.floor(num / 10000);
		let noWan = num % 10000;
		if (noWan.toString().length < 4) noWan = "0" + noWan;
		return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
	}
}
