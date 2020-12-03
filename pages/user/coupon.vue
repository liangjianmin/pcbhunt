<template>
	<view class="coupon-box">
		<view class="tab row avarage verCenter">
			<view @click="tab(index)" :class="{ curr: active == index }" v-for="(item, index) in itemtext" :key="index" class="box row rowCenter verCenter">{{ item }}</view>
		</view>
		<view class="list" :style="{ display: isAvisible }" v-if="canUseCoupon">
			<template v-if="canUseCoupon.PCBCanUseCouponList.length > 0">
				<view class="box row verCenter" @click="filterCoupon(item.Id,item.DisAmount,index)" v-for="(item, index) in canUseCoupon.PCBCanUseCouponList" :key="index">
					<view class="price column rowCenter">
						<view class="row rowCenter wrap">
							<text class="t1">￥</text>
							<text class="t2">{{ item.DisAmount }}</text>
						</view>
						<text class="t3 row rowCenter">满{{ item.MinOrderAmount }}元可用</text>
					</view>
					<view class="text row verCenter">
						<view class="column">
							<text class="t1">{{ item.CouponName }}</text>
							<text class="t2">使用类型：PCB订单</text>
							<text class="t2">有效期至：{{ item.ExpireTime }}</text>
							<text class="t3">详细说明</text>
						</view>
						<view class="btn row rowCenter verCenter">立即使用</view>
					</view>
					<text class="status1 row rowCenter verCenter">将到期</text>
				</view>
			</template>
			<template v-else>
				<view class="no-data-box column rowCenter">
					<view class="bg"></view>
					<text class="text">很抱歉，暂无数据</text>
				</view>
			</template>
		</view>
		<view class="list" :style="{ display: isBvisible }" v-if="canUseCoupon">
			<template v-if="canUseCoupon.PCBCannotUseCouponList.length > 0">
				<view class="box row verCenter disabled" v-for="(item, index) in canUseCoupon.PCBCannotUseCouponList" :key="index">
					<view class="price column rowCenter">
						<view class="row rowCenter wrap">
							<text class="t1">￥</text>
							<text class="t2">{{ item.DisAmount }}</text>
						</view>
						<text class="t3 row rowCenter">满{{ item.MinOrderAmount }}元可用</text>
					</view>
					<view class="text row verCenter">
						<view class="column">
							<text class="t1">{{ item.CouponName }}</text>
							<text class="t2">使用类型：PCB订单</text>
							<text class="t2">有效期至：{{ item.ExpireTime }}</text>
							<text class="t3">详细说明</text>
						</view>
						<view class="btn row rowCenter verCenter">立即使用</view>
					</view>
					<text class="status3 row rowCenter verCenter">将到期</text>
				</view>
			</template>
			<template v-else>
				<view class="no-data-box column rowCenter">
					<view class="bg"></view>
					<text class="text">很抱歉，暂无数据</text>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
export default {
	data() {
		return {
			IdList: [''],
			UsedCouponId: [],
			active: 0,
			canUseCoupon: {},
			itemtext: ['可用优惠券', '不可用优惠券'],
			isAvisible: 'block',
			isBvisible: 'none',
			coupon:[]
		};
	},
	onLoad(options) {
		console.log(options);
		this.IdList = options.IdList.split(',');
		this.length = options.length * 1;
		this.index = options.index * 1;
		
		// #ifdef H5
		try {
			if (JSON.parse(Util.getCookie('coupon'))) {
				this.coupon = JSON.parse(Util.getCookie('coupon'));
			}
		} catch (e) {
			// error
		}
		
		// #endif
		
		// #ifdef MP-WEIXIN
		try {
			if (JSON.parse(uni.getStorageSync('coupon'))) {
				this.coupon = JSON.parse(uni.getStorageSync('coupon'));
			}
		} catch (e) {
			// error
		}
		// #endif
		
		if (this.coupon.length <= 0) {
			for (let i = 0; i < this.length; i++) {
				this.coupon.push({
					CouponId: '',
					DisAmount: ''
				});
			}
		}
		
		
		if (options.UsedCouponId) {
			this.UsedCouponId = options.UsedCouponId.split(',');
		}
	},
	onShow() {
		this.getData();
	},
	methods: {
		filterCoupon(Id,DisAmount,index){
			this.$set(this.coupon[index], 'CouponId', Id);
			this.$set(this.coupon[index], 'DisAmount', DisAmount);
			
			// #ifdef H5
			Util.setCookie('coupon', JSON.stringify(this.coupon));
			// #endif
			
			// #ifdef MP-WEIXIN
			uni.setStorageSync('coupon', JSON.stringify(this.coupon));
			// #endif
			
			setTimeout(() => {
				uni.navigateBack({
					delta: 1
				});
			}, 500);
		},
		tab(index) {
			this.active = index;
			this.isAvisible = 'none';
			this.isBvisible = 'none';
			if (index == 0) {
				index == 0 ? (this.isAvisible = 'block') : (this.isAvisible = 'none');
			} else if (index == 1) {
				index == 1 ? (this.isBvisible = 'block') : (this.isBvisible = 'none');
			}
			this.getData();
		},
		getData() {
			this.request(API.GetCanUseCoupon, 'POST', { IdList: this.IdList, UsedCouponId: this.UsedCouponId }, true).then(res => {
				if (res.Code === 200) {
					this.canUseCoupon = res.Data;
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/coupon.scss';
</style>
