<template>
	<view class="user-login">
		<view class="logo row rowCenter verCenter"><image src="../../static/icon／logo@2x.png" mode="aspectFill"></image></view>
		<view class="form-box column rowCenter">
			<view class="form-input row verCenter mb40">
				<text class="iconfont iconiconloginuser"></text>
				<input type="text" class="inp" placeholder="请输入注册手机号码" placeholder-style="color:#ccc;" v-model="Account" />
			</view>
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
			<text class="text">
				杭州猎板网络科技有限公司总部设在浙江省杭州市拱墅区万达广场，是一家专注于PCB极速打样的智慧工厂，由猎芯网投资控股(猎芯ICHUNT.COM，是中国领先电子元器件B2B交易服务平台，先后获得经纬中国、微光、华诺、京东战投、海通证券等多轮融资)。
			</text>
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
			backpage: '',
			backtype: '',
			url: [],
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
		this.backpage = options.backpage;
		this.backtype = options.backtype;
		if (options) {
			for (let i in options) {
				if (i !== 'backpage' && i !== 'backtype') {
					this.url.push('&' + i + '=' + options[i]);
				}
			}
		}

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
			} else {
				this.disabled = true;
			}
		},
		ValidCode(val) {
			if (this.Account && this.ValidCode) {
				this.disabled = false;
			} else {
				this.disabled = true;
			}
		}
	},
	mounted() {
		var self = this;

		// 实例化nvc 对无痕验证进行初始化操作
		AWSC.use('nvc', function(state, module) {
			// 初始化 调用module.init进行初始化
			window.nvc = module.init({
				// 应用类型标识。它和使用场景标识（scene字段）一起决定了无痕验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
				appkey: 'FFFF0N0N000000009674',
				//使用场景标识。它和应用类型标识（appkey字段）一起决定了无痕验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的scene值，请务必正确填写。
				scene: 'nvc_register_h5',
				// 二次验证获取人机信息串，跟随业务请求一起上传至业务服务器，由业务服务器进行验签。
				success: function(data) {
					window.console && console.log(data);
				},
				// 前端二次验证失败时触发该回调参数
				fail: function(failCode) {
					window.console && console.log(failCode);
				},
				// 前端二次验证加载异常时触发该回调参数。
				error: function(errorCode) {
					window.console && console.log(errorCode);
				}
			});
		});
	},
	methods: {
		getCode() {
			var self = this;
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
			
			uni.showLoading({
				title: ''
			});

			window.nvc.getNVCValAsync(function(nvcVal) {
				self.request(API.MessageSendValidCodeAfs, 'POST', {
					Mobile: self.Account,
					NvcVal: nvcVal
				}).then(res => {
					uni.hideLoading();

					if (res.Code === 200) {
						self.countdDown(); //倒计时开始
					} else {
						uni.showToast({
							title: res.Message,
							duration: 2000,
							icon: 'none'
						});
					}
				});
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

			this.request(API.UserMessageLogin, 'POST', {
				Mobile: this.Account,
				ValidCode: this.ValidCode,
				afs_nc_token: this.nc_token,
				afs_nc_sessionid: this.csessionid,
				afs_nc_sign: this.sig,
				WebPromotion: this.WebPromotion,
				WebPromotiond: this.WebPromotiond
			}).then(res => {
				if (res.Code === 200) {
					// #ifdef H5
					Util.setCookie('token', res.Data.Token);
					// #endif

					// #ifdef MP-WEIXIN
					uni.setStorage('token', res.Data.Token);
					// #endif

					if (this.backtype == 1) {
						uni.reLaunch({
							url: this.backpage + '?jump=1' + this.url.join('')
						});
					} else if (this.backtype == 2) {
						uni.switchTab({
							url: this.backpage
						});
					} else {
						uni.switchTab({
							url: '/pages/index/index'
						});
					}
				} else {
					uni.showToast({
						icon: 'warn',
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
