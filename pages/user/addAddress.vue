<template>
	<view class="add-address">
		<view class="list column">
			<view class="box row verCenter">
				<text class="t1">姓名</text>
				<view class="wrap"><input type="text" placeholder="输入收货人姓名" placeholder-style="color:#CCCCCC;" v-model="form.ContactName" /></view>
			</view>
			<view class="box row verCenter">
				<text class="t1">手机号码</text>
				<view class="wrap"><input type="text" placeholder="输入手机号码" placeholder-style="color:#CCCCCC;" v-model="form.ContactMobile" /></view>
			</view>
			<view class="box row verCenter">
				<text class="t1">所在区域</text>
				<view class="wrap">
					<picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray" range-key="ClassName">
						<view class="xb1" v-if="provinceName != '' || cityName != '' || areaName != ''">{{ provinceName }} {{ cityName }} {{ areaName }}</view>
						<view class="xb2" v-else>选中所在省份、城市、区县</view>
						<!-- <input type="text" placeholder="选中所在省份、城市、区县" placeholder-style="color:#CCCCCC;" disabled="disabled"/> -->
					</picker>
				</view>
			</view>
			<view class="box row verCenter">
				<text class="t1">详细地址</text>
				<view class="wrap row bothSide verCenter">
					<input type="text" placeholder="街道、楼牌号等详细地址" placeholder-style="color:#CCCCCC;" v-model="form.Address" />
					<text class="iconfont iconyoujiantou"></text>
				</view>
			</view>
		</view>
		<view class="default row verCenter" @click="toggle">
			<text class="iconfont icontongyi" :class="{ disabled: form.IsDefault == false }"></text>
			<text class="t1">设为默认收货地址</text>
		</view>
		<view class="btn row rowCenter verCenter" @click="submit">保存</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
export default {
	data() {
		return {
			multiArray: [[], [], []],
			multiIndex: [0, 0, 0],
			province: [],
			city: [],
			area: [],
			provinceName: '',
			cityName: '',
			areaName: '',
			form: {
				ContactName: '',
				ContactMobile: '',
				CityNames: '',
				CityCodes: '',
				Address: '',
				IsDefault: true
			}
		};
	},
	onLoad(options) {},
	onShow() {
		this.getProvince();
	},
	methods: {
		toggle() {
			this.form.IsDefault = !this.form.IsDefault;
		},
		bindMultiPickerChange(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.multiIndex = e.detail.value;
			this.provinceName = this.province[e.detail.value[0]].ClassName;
			this.cityName = this.city[e.detail.value[1]].ClassName;
			this.areaName = this.area[e.detail.value[2]].ClassName;

			this.form.CityNames = this.provinceName + '/' + this.cityName + '/' + this.areaName;
			this.form.CityCodes = this.province[e.detail.value[0]].Id + '/' + this.city[e.detail.value[1]].Id + '/' + this.area[e.detail.value[2]].Id;
			this.$forceUpdate();
		},
		bindMultiPickerColumnChange(e) {
			console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
			if (e.detail.column === 0) {
				this.getCity(this.province[e.detail.value].Id);
				this.$set(this.multiIndex, 0, e.detail.value);
				this.multiIndex.splice(1, 1, 0);
				this.multiIndex.splice(2, 1, 0);
				this.$forceUpdate();
			} else if (e.detail.column === 1) {
				this.getArea(this.city[e.detail.value].Id);
				this.$set(this.multiIndex, 1, e.detail.value);
				this.multiIndex.splice(2, 1, 0);
				this.$forceUpdate();
			} else if (e.detail.column === 2) {
				this.$set(this.multiIndex, 2, e.detail.value);
			}
		},
		getProvince() {
			this.request(API.GetProvinceList, 'GET', {}, true).then(res => {
				if (res.Code === 200) {
					this.province = res.Data;
					this.$set(this.multiArray, 0, this.province);
					this.getCity(res.Data[0].Id);
				}
			});
		},
		getCity(proviceId) {
			this.request(API.GetCityList, 'GET', {
				ParId: proviceId
			}).then(res => {
				if (res.Code == 200) {
					this.city = res.Data;
					this.$set(this.multiArray, 1, this.city);
					this.getArea(res.Data[0].Id);
				}
			});
		},
		getArea(cityId) {
			this.request(API.GetAreaList, 'GET', {
				ParId: cityId
			}).then(res => {
				if (res.Code == 200) {
					this.area = res.Data;
					this.$set(this.multiArray, 2, this.area);
					this.$forceUpdate();
				}
			});
		},
		submit() {
			this.request(API.AddModel, 'POST', this.form).then(res => {
				if (res.Code === 200) {
					uni.showToast({
						title: '添加成功',
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
@import '../../assets/css/user/addAddress.scss';
</style>
