<template>
	<view class="user-login">
		<view class="logo row rowCenter verCenter"><image src="../../static/icon／logo@2x.png" mode="aspectFill"></image></view>
		<view class="form-box column rowCenter">
			<view class="form-input row verCenter mb40">
				<text class="iconfont iconiconloginuser"></text>
				<input type="text" class="inp" placeholder="请输入注册手机号码" placeholder-style="color:#ccc;" v-model="Account" />
			</view>
			<!-- #ifdef H5 -->
			<div id="verCode"></div>
			<!-- #endif -->
			<view class="form-input row verCenter bothSide mb24">
				<view class="row verCenter">
					<text class="iconfont iconiconloginpassword"></text>
					<input type="text" class="inp" placeholder="请输入短信验证码" placeholder-style="color:#ccc;" v-model="ValidCode" />
				</view>
				<button class="code" :value="codetext" @click="getCode()" :class="{ 'code-curr': codeactive }" :disabled="codeactive">{{ codetext }}</button>
			</view>
			<view class="agreement-box row verCenter">
				<text class="iconfont icontongyi"></text>
				<text class="text">同意《用户服务协议》</text>
			</view>
			<view class="btn row verCenter rowCenter" :class="{ disabled: disabled }" @click="submit">登录</view>
		</view>
		<view class="ad"><image src="../../static/login／活动／banner1@2x.png" mode="aspectFill"></image></view>
		<view class="about-box">
			<view class="title">关于我们</view>
			<text class="text">杭州猎板网络科技有限公司总部设在浙江省杭州市拱墅区万达广场，是一家专注于PCB极速打样的智慧工厂，由猎芯网投资控股(猎芯ICHUNT.COM，是中国领先电子元器件B2B交易服务平台，先后获得经纬中国、微光、华诺、京东战投、海通证券等多轮融资)。</text>
		</view>
	</view>
</template>
<script type="text/javascript"></script>
<script>
import { API } from '@/util/api.js';
import Util from '@/util/index.js';

export default {
	data() {
		return {
			Account: '',
			ValidCode: '',
			nc_token: '',
			csessionid: '',
			sig: '',
			WebPromotion: '',
			WebPromotiond: '',
			smsCode: '',
			codetext: '获取验证码',
			codeactive: false,
			disabled: true
		};
	},
	onLoad(options) {
		console.log(options);
		//注册来源  15天缓存

		var c = options.C || options.c;
		var d = options.D || options.d;

		if (c) {
			this.WebPromotion = c;
			if (!Util.getCookie('WebPromotion')) {
				Util.setCookie('WebPromotion', c, 15);
			}
		}
		if (d) {
			this.WebPromotiond = d;
			if (!Util.getCookie('WebPromotiond')) {
				Util.setCookie('WebPromotiond', d, 15);
			}
		}
	},
	watch: {
		Account(val) {
			if (this.Account && this.ValidCode) {
				this.disabled = false;
			}else{
				this.disabled = true;
			}
		},
		ValidCode(val) {
			if (this.Account && this.ValidCode) {
				this.disabled = false;
			}else{
				this.disabled = true;
			}
		}
	},
	mounted() {
		var self = this;

		// #ifdef H5
		this.$nextTick(() => {
			var nc_token = ['FFFF0N00000000009674', new Date().getTime(), Math.random()].join(':');

			var nc = NoCaptcha.init({
				//声明滑动验证需要渲染的目标元素ID。
				renderTo: '#verCode',
				//应用类型标识。它和使用场景标识（scene字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
				appkey: 'FFFF0N00000000009674',
				//使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的scene值，请务必正确填写。
				scene: 'nc_register_h5',
				//滑动验证码的主键，请勿将该字段定义为固定值。确保每个用户每次打开页面时，其token值都是不同的。系统默认的格式为：”您的appkey”+”时间戳”+”随机数”。
				token: nc_token,
				//业务键字段，可为空。为便于线上问题的排查，建议您按照线上问题定位文档中推荐的方法配置该字段值。
				trans: { key1: 'code200' },
				//语言，默认值为cn（中文）。HTML5应用类型默认支持简体中文、繁体中文、英文语言。
				is_Opt: 0,
				language: 'cn',
				//内部网络请求的超时时间。一般情况建议保持默认值（10000ms）。
				timeout: 10000,
				//允许服务器超时重复次数，默认5次。
				retryTimes: 5,
				//验证通过后，验证码组件是否自动隐藏，默认不隐藏（false）。
				bannerHidden: false,
				//是否默认不渲染，默认值false。当设置为true时，不自动渲染，需要自行调用show方法进行渲染。
				initHidden: false,
				//前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将请求标识（token）、会话ID（sessionid）、签名串（sig）字段记录下来，随业务请求一同发送至您的服务端调用验签。
				callback: function(data) {
					window.console && console.log(nc_token);
					window.console && console.log(data.csessionid);
					window.console && console.log(data.sig);
					self.nc_token = nc_token;
					self.csessionid = data.csessionid;
					self.sig = data.sig;
				},
				error: function(s) {}
			});
			NoCaptcha.setEnabled(true);
			//请务必在此处调用一次reset()方法。
			nc.reset();
			//用于配置滑动验证的自定义文案。详细信息，请参见自定义文案与多语言文档。
			NoCaptcha.upLang('cn', {
				//加载状态提示。
				LOADING: '加载中...',
				//等待滑动状态提示。
				SLIDER_LABEL: '请向右滑动验证',
				//验证通过状态提示。
				CHECK_Y: '验证通过',
				//验证失败触发拦截状态提示。
				ERROR_TITLE: '非常抱歉，这出错了...'
			});
		});
		// #endif
	},
	methods: {
		getCode() {
			var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;

			if (!this.Account) {
				uni.showModal({
					title: '提示',
					content: '请输入手机号',
					showCancel: false
				});

				return;
			}

			if (!myreg.test(this.Account)) {
				uni.showModal({
					title: '提示',
					content: '请输入正确手机号',
					showCancel: false
				});

				return;
			}

			if (!this.nc_token) {
				uni.showModal({
					title: '提示',
					content: '请滑动验证过后再操作！',
					showCancel: false
				});

				return;
			}
			
			uni.showLoading({
				title: ''
			});
			
			this.request(API.MessageSendValidCodeAfs,'POST',{
					Mobile: this.Account,
					afs_nc_token: this.nc_token,
					afs_nc_sessionid: this.csessionid,
					afs_nc_sign: this.sig
			}).then(res => {
				uni.hideLoading();
				
				if (res.Code === 200) {
					this.countdDown(); //倒计时开始
				} else {
					uni.showToast({
						title: res.Message,
						duration: 2000,
						icon: 'none'
					});
				}
			});
		},
		countdDown() {
			var me = this;
			var wait = 60;
			me.disabled = true;
			me.codeactive = true;
			me.codetext = wait + '秒后获取';
			var clock = setInterval(doLoop, 1000);

			function doLoop() {
				wait--;
				if (wait > 0) {
					me.codetext = wait + '秒后获取';
					me.codeactive = true;
				} else {
					clearInterval(clock);
					me.disabled = false;
					me.codeactive = false;
					me.codetext = '重新获取';
					wait = 60;
				}
			}
		},
		submit() {
			var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;

			if (!this.Account) {
				uni.showModal({
					title: '提示',
					content: '请输入手机号',
					showCancel: false
				});
				return;
			}

			if (!myreg.test(this.Account)) {
				uni.showModal({
					title: '提示',
					content: '请输入正确手机号',
					showCancel: false
				});
				return;
			}
			
			this.request(API.UserMessageLogin,'POST',{
					Mobile: this.Account,
					ValidCode: this.ValidCode,
					afs_nc_token: this.nc_token,
					afs_nc_sessionid: this.csessionid,
					afs_nc_sign: this.sig,
					WebPromotion: this.WebPromotion,
					WebPromotiond: this.WebPromotiond
			}).then((res) => {
				if (res.Code === 200) {
					Util.setCookie('token',res.Data.Token);
				} else {
					uni.showToast({
						icon:'warn',
						title: res.Message,
						duration: 200000
					});
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/login.scss';
</style>
