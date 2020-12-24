<template>
	<view class="transfer">
		<painter :board="base" ref="painter" width="702rpx" height="1000rpx" class="box" />
		<image :src="path" class="im" />
		<!-- #ifdef MP-WEIXIN -->
		<view class="btn1 row rowCenter verCenter">保存到相册</view>
		<!-- #endif -->

		<!-- #ifdef H5 -->
		<view class="btn1 row rowCenter verCenter">长按保存图片</view>
		<!-- #endif -->
		<navigator url="/pages/user/index" open-type="switchTab" hover-class="none" class="btn2 row rowCenter verCenter">查看订单</navigator>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import painter from '@/components/painter/index.vue';
import Util from '@/util/index.js';
import { pathToBase64, base64ToPath } from '../../util/gsq-image-tools.js';

export default {
	data() {
		return {
			base: {
				width: '702rpx',
				height: '1000rpx',
				left: '48rpx',
				background: '#FFFFFF',
				views: [
					{
						type: 'view',
						css: {
							fontSize: '32rpx',
							color: '#323233'
						},
						views: [
							{
								type: 'text',
								text: '猎板网订单对公转账',
								css: {
									display: 'block',
									fontSize: '36rpx',
									textAlign: 'left',
									top: '30rpx',
									left: '78rpx',
									height: '110rpx'
								}
							},
							{
								type: 'text',
								text: '猎板网订单对公转账',
								css: {
									display: 'block',
									fontSize: '36rpx',
									textAlign: 'left',
									top: '30rpx',
									left: '78rpx',
									height: '110rpx'
								}
							},
							{
								type: 'text',
								text: '订单编号',
								css: {
									left: '78rpx',
									top: '134rpx',
									textAlign: 'left'
								}
							},
							{
								type: 'text',
								text: '',
								css: {
									width: '408rpx',
									left: '250rpx',
									top: '134rpx',
									textAlign: 'right',
									color: '#666666'
								}
							},
							{
								type: 'text',
								text: '订单金额',
								css: {
									left: '78rpx',
									top: '220rpx',
									textAlign: 'left'
								}
							},
							{
								type: 'text',
								text: '',
								css: {
									width: '408rpx',
									left: '250rpx',
									top: '220rpx',
									textAlign: 'right',
									color: '#FF6010'
								}
							},
							{
								type: 'text',
								text: '订单金额',
								css: {
									left: '78rpx',
									top: '298rpx',
									textAlign: 'left'
								}
							},
							{
								type: 'text',
								text: '',
								css: {
									width: '408rpx',
									left: '250rpx',
									top: '298rpx',
									textAlign: 'right',
									color: '#666666'
								}
							},
							{
								type: 'text',
								text: '收款户名',
								css: {
									left: '78rpx',
									top: '376rpx',
									textAlign: 'left'
								}
							},
							{
								type: 'text',
								text: '',
								css: {
									width: '408rpx',
									left: '250rpx',
									top: '376rpx',
									textAlign: 'right',
									color: '#666666'
								}
							},
							{
								type: 'text',
								text: '收款银行',
								css: {
									left: '78rpx',
									top: '454rpx',
									textAlign: 'left'
								}
							},
							{
								type: 'text',
								text: '',
								css: {
									width: '408rpx',
									left: '250rpx',
									top: '454rpx',
									textAlign: 'right',
									color: '#666666'
								}
							},
							{
								type: 'text',
								text: '收款账号',
								css: {
									left: '78rpx',
									top: '532rpx',
									textAlign: 'left'
								}
							},
							{
								type: 'text',
								text: '',
								css: {
									width: '408rpx',
									left: '250rpx',
									top: '532rpx',
									textAlign: 'right',
									color: '#666666'
								}
							},
							{
								type: 'text',
								text: '订单时间',
								css: {
									left: '78rpx',
									top: '610rpx',
									textAlign: 'left'
								}
							},
							{
								type: 'text',
								text: '',
								css: {
									width: '408rpx',
									left: '250rpx',
									top: '610rpx',
									textAlign: 'right',
									color: '#666666'
								}
							},
							{
								type: 'text',
								text: '提示：',
								css: {
									left: '78rpx',
									top: '688rpx',
									textAlign: 'left',
									color: '#666666',
									fontSize: '24rpx'
								}
							},
							{
								type: 'text',
								text: '使用快捷对公转款支付后，请直接将应付金额转款到您的专属转账子账号，无需填写转账备注信息。',
								css: {
									left: '78rpx',
									top: '736rpx',
									width: '578rpx',
									textAlign: 'left',
									color: '#666666',
									fontSize: '24rpx'
								}
							},
							{
								type: 'image',
								src: '../../static/bb.png',
								css: {
									left: '430rpx',
									top: '736rpx',
									width: '246rpx',
									height: '246rpx',
									radius: '50%'
								}
							}
						]
					}
				]
			},
			path: '',
			orderMain: ''
		};
	},
	onLoad(options) {
		this.orderMain = options.orderMain;
	},
	onShow() {
		this.getData();
	},
	methods: {
		getData() {
			this.request(API.GetPublicAccount, 'POST', { orderMain: this.orderMain }, true).then(res => {
				if (res.Code === 200) {
					this.publicAccount = res.Data;
					this.base.views[0].views[3].text = res.Data.MainNo;
					this.base.views[0].views[5].text = res.Data.AllFee + '元';
					this.base.views[0].views[7].text = res.Data.AllFeeZh;
					this.base.views[0].views[9].text = res.Data.AccountName || '';
					this.base.views[0].views[11].text = res.Data.AccountBank || '';
					this.base.views[0].views[13].text = res.Data.AccountNo || '';
					this.base.views[0].views[15].text = res.Data.OrderTime;

					this.$nextTick(() => {
						setTimeout(() => {
							this.canvasToTempFilePath();
						}, 1000);
					});
				}
			});
		},
		getSaveImg() {},
		onRender() {
			// 支持通过调用render传入参数
			const painter = this.$refs.painter;
			painter.render(this.base);
		},
		canvasToTempFilePath() {
			const painter = this.$refs.painter;
			// 支持通过调用canvasToTempFilePath方法传入参数 调取生成图片
			painter.canvasToTempFilePath().then(res => (this.path = res.tempFilePath));
		}
	},
	components: {
		painter
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/transfer.scss';
</style>
