<template>
	<view class="express">
		<view class="list" v-if="shipPriceList.length > 0">
			<view class="box row bothSide verCenter" :class="{ curr: active == index }" @click="tab(index, item.ShipName, item.Id)" v-for="(item, index) in shipPriceList" :key="index">
				<view class="column">
					<text class="t1">{{ item.ShipName }}</text>
					<view>
						<text class="t2">时效(预估)：{{ item.ShipTimes }}</text>
						<text class="t3">运费：￥{{ item.Price }}</text>
					</view>
				</view>
				<text class="iconfont icon1ElementRadioOn"></text>
			</view>
		</view>
		<template v-else>
			<view class="no-data-box column rowCenter">
				<view class="bg"></view>
				<text class="text">很抱歉，暂无优惠券</text>
			</view>
		</template>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import Util from '@/util/index.js';

export default {
	data() {
		return {
			shipPriceList: [],
			active: 0,
			Id: '',
			length: 0,
			index: 0,
			express: [
				{
					ShipName: '',
					ShipId: 0,
					index: -1
				}
			],
			form: {
				ProvinceID: '',
				CityId: '',
				AreaId: '',
				Weight: '',
				IsSpecialOffer:false
			}
		};
	},
	onLoad(options) {
		console.log(options);

		this.form.Weight = options.Weight;
		this.form.ProvinceID = options.ProvinceID;
		this.form.CityId = options.CityId;
		this.form.AreaId = options.AreaId;
		this.form.IsSpecialOffer = options.IsSpecialOffer;

		this.length = options.length * 1;
		this.index = options.index * 1;

		// #ifdef H5
		try {
			if (Util.getCookie('express')) {
				this.express = JSON.parse(decodeURIComponent(Util.getCookie('express')));
			}
		} catch (e) {
			// error
		}

		// #endif

		// #ifdef MP-WEIXIN
		try {
			if (uni.getStorageSync('express')) {
				this.express = JSON.parse(uni.getStorageSync('express'));
			}
		} catch (e) {
			// error
		}
		// #endif
	},
	onShow() {
		this.getData();
	},
	methods: {
		tab(index, ShipName, ShipId) {
			this.active = index;

			this.$set(this.express[0], 'ShipName', ShipName);
			this.$set(this.express[0], 'ShipId', ShipId);
			this.$set(this.express[0], 'index', this.index);

			// #ifdef H5
			Util.setCookie('express', JSON.stringify(this.express));
			// #endif

			// #ifdef MP-WEIXIN
			uni.setStorageSync('express', JSON.stringify(this.express));
			// #endif

			setTimeout(() => {
				uni.navigateBack({
					delta: 1
				});
			}, 500);
		},
		getData() {
			this.request(API.GetShipPriceList, 'GET', this.form, true).then(res => {
				if (res.Code === 200) {
					this.shipPriceList = res.Data;
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/express.scss';
</style>
