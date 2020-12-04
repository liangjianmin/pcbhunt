<template>
	<view class="address">
		<view class="list" v-if="allAddress.length > 0">
			<view class="box row bothSide verCenter" :class="{curr:active==index}" v-for="(item,index) in allAddress" :key="index" @click="tab(index,allAddress[index].Id)">
				<view class="column">
					<view>
						<text class="t1">{{item.ContactName}}</text>
						<text class="t2">{{item.ContactMobile}}</text>
						<text class="iconfont iconiconaddressedit" @click.stop="toUrl(item.Id)"></text>
					</view>
					<text class="t3">{{item.ProvinceName}}{{item.CityName}}{{item.AreaName}}{{item.Address}}</text>
				</view>
				<text class="iconfont icon1ElementRadioOn" v-if="item.IsDefault"></text>
			</view>
		</view>
		<template v-else>
			<view class="no-data-box column rowCenter">
				<view class="bg"></view>
				<text class="text">很抱歉，暂无数据</text>
			</view>
		</template>
		<navigator class="btn row rowCenter verCenter" url="/pages/user/addAddress" hover-class="none">添加新收货人</navigator>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
export default {
	data() {
		return {
			allAddress:[],
			active:0,
			Id:''
		};
	},
	onLoad(options) {},
	onShow() {
		this.getData();
	},
	methods: {
		toUrl(id){
			uni.navigateTo({
				url:'/pages/user/addAddress?Id='+id
			})
		},
		getData() {
			this.request(API.GetAllAddress, 'GET', {},true).then(res => {
				if (res.Code === 200) {
					this.allAddress = res.Data;
				}
			});
		},
		tab(index,Id){
			this.active=index;
			this.request(API.UptDefault, 'GET', {Id:Id},true).then(res => {
				if (res.Code === 200) {
					uni.showToast({
						title: '设置成功',
						icon: 'success',
						duration: 2000
					});
				} else {
					uni.showToast({
						title: res.Message,
						icon: 'none',
						duration: 2000
					});
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/address.scss';
</style>
