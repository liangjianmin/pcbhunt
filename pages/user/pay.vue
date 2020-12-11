<template>
	<view class="pay-box">
		<view class="pay">
			<view class="box row bothSide verCenter" @click="tab(index)" :class="{ curr: active == index }" v-for="(item, index) in itemtext" :key="index">
				<view class="row verCenter">
					<template v-if="index == 0">
						<text class="iconfont iconiconpayzhifubao1"></text>
					</template>
					<template v-else-if="index == 1">
						<text class="iconfont iconiconpayzhifubao"></text>
					</template>
					<text class="t1">{{ item }}</text>
				</view>
				<text class="iconfont icon1ElementRadioOn"></text>
			</view>
		</view>
		<view class="tip row verCenter">
			<text class="iconfont iconiconpayzhifubao2"></text>
			<text class="t1">对公转账</text>
			<text class="t2">（移动端暂不支持，请至PC端操作）</text>
		</view>
		<view class="btn-box row bothSide verCenter">
			<view class="row verCenter">
				<text class="t1">应付总额</text>
				<text class="t2">¥</text>
				<text class="t3">{{ form.TotalAmout }}</text>
			</view>
			<view class="btn row rowCenter verCenter" @click="submit()">提交订单</view>
		</view>
		<uni-popup ref="pop" type="center">
			<view class="layer-box column rowCenter">
				<view class="iconfont iconwait"></view>
				<navigator class="btn1 row verCenter rowCenter" url="/pages/user/status" hover-class="none">支付完成</navigator>
				<view class="btn2 row verCenter rowCenter">支付遇到问题失败</view>
				<view class="text column">
					<text class="t1">温馨提示：</text>
					<text class="t2">猎板网不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作。</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';

export default {
	data() {
		return {
			itemtext: ['支付宝支付', '微信支付'],
			active: 0,
			form: {
				Tradeno: ['124411882323738624'],
				Ordernostr: {},
				Subject: {},
				TotalAmout: 0.0,
				ItemBody: 'PCB_Order'
			}
		};
	},
	onLoad(options) {
		console.log(this.options);

		let Tradeno = options.MainNo.split(',');
		if (Tradeno.length > 1) {
			this.form.Tradeno = 'mergepay';
		} else {
			this.form.Tradeno = options.MainNo;
		}

		this.form.Ordernostr = options.MainNo.split(',');
		this.form.Subject = '订单：' + options.MainNo;
		this.form.TotalAmout = options.totalAmout * 1;

		this.$nextTick(function() {
			this.$refs.pop.open();
		});
	},
	onShow() {},
	methods: {
		tab(index) {
			this.active = index;
		},
		submit() {
			if (this.active == 0) {
				this.request(API.AliPayRequest, 'POST', this.form, true).then(res => {
					if (res.Code === 200) {
						let divForm = document.getElementsByTagName('divform');
						if (divForm.length) {
							document.body.removeChild(divForm[0]);
						}
						const div = document.createElement('divform');
						div.innerHTML = res.Data;
						document.body.appendChild(div);
						document.forms[0].setAttribute('target', '_blank');
						document.forms[0].submit();
					} else {
						uni.showToast({
							title: res.Message,
							icon: 'none',
							duration: 2000
						});
					}
				});
			} else if (this.active == 1) {
			}
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/pay.scss';
</style>
