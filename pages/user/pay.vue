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
			<view class="layer-box">
				<view class="layer-title-box row verCenter rowCenter">
					<text class="title">计价工艺免责声明</text>
					<view class="layer-btn" @click="close()">确定</view>
				</view>
				<view class="txt column">
					<text>猎板重构了传统PCB工厂生产管理模式，以互联网+工业4.0技术为依托，利用大数据、云计算、物联网等新技术，全面实现了线上线下协同生产。其利用数据化技术自主研发的PCB在线计价、、自助下单、上传文件、查看订单进度等生产管理系统，缩短了传统生产交期，为用户提供1-8层PCB板24小时极速打样、48小时小批量生产服务。</text>
					<text>猎板以“让电子制造更高效”为企业使命，秉承“ 诚信为本，质量第一”的发展理念,为用户提供更优质的PCB定制服务。我们承诺：不流入不良品、不生产不良品、不流出不良品，用心做好每一块板。</text>
					<text>猎板极速PCB智慧工厂年产能25万平方米，占地面积数万平方米，核心设备数量160+，员工人数200+，多层线路板工程师50+。猎板深知产品的交期和品质的重要性，坚持使用行业一线品牌设备 (台湾东台钻机、台湾竞铭自动沉铜、台湾竞铭电镀线等)，坚持优质的设备工艺配置，选用真空蚀刻、高解析光源灯组、进口西风精铣主轴.</text>
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
		
		this.$nextTick(function(){
			//this.$refs.pop.open();
		})
	},
	onShow() {
		//this.PayNotify();
	},
	methods: {
		tab(index) {
			this.active = index;
		},
		PayNotify() {
			var notify = setInterval(() => {
				this.request(API.AliPayNotify, 'POST').then(res => {
					if (res.Code === 200) {
						clearInterval(notify);
					}
				});
			}, 1000);
		},
		submit() {
			if (this.active == 0) {
				this.request(API.AliPayRequest, 'POST', this.form, true).then(res => {
					if (res.Code === 200) {
						this.PayNotify();
						window.location.href = res.Data;
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
