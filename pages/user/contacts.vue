<template>
	<view class="add-address">
		<view class="list column">
			<view class="box row verCenter">
				<text class="t1">联系人姓名</text>
				<view class="wrap"><input type="text" placeholder="必填" placeholder-style="color:#CCCCCC;" v-model="ContactNameTech" /></view>
			</view>
			<view class="box row verCenter">
				<text class="t1">联系电话</text>
				<view class="wrap"><input type="text" placeholder="必填" placeholder-style="color:#CCCCCC;" v-model="ContactMobileTech" /></view>
			</view>
			<view class="box row verCenter">
				<text class="t1">QQ号</text>
				<view class="wrap"><input type="text" placeholder="必填" placeholder-style="color:#CCCCCC;" v-model="ContactQQTech" /></view>
			</view>
		</view>
		<view class="btn row rowCenter verCenter" @click="submit">确认</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
import Util from '@/util/index.js';

export default {
	data() {
		return {
			ContactNameTech: '',
			ContactMobileTech: '',
			ContactQQTech: ''
		};
	},
	onLoad(options) {
		 // #ifdef H5
		 this.ContactNameTech = decodeURI(Util.getCookie('ContactNameTech'));
		 this.ContactMobileTech = Util.getCookie('ContactMobileTech');
		 this.ContactQQTech = Util.getCookie('ContactQQTech');
		 // #endif
		 
		 // #ifdef MP-WEIXIN
		 this.ContactNameTech = uni.getStorageSync('ContactNameTech') || '';
		 this.ContactMobileTech = uni.getStorageSync('ContactMobileTech') || '';
		 this.ContactQQTech = uni.getStorageSync('ContactQQTech') || '';
		 // #endif
	},
	methods: {
		submit() {
			var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (!this.ContactNameTech) {
				uni.showToast({
					title: '请填写联系人姓名',
					icon: 'none',
					duration: 2000
				});
				return false;
			}

			if (!this.ContactMobileTech) {
				uni.showToast({
					title: '请填写联系电话',
					icon: 'none',
					duration: 2000
				});
				return false;
			}

			if (!myreg.test(this.ContactMobileTech)) {
				uni.showToast({
					title: '请填写正确手机号',
					icon: 'none',
					duration: 2000
				});
				return false;
			}

			if (!this.ContactQQTech) {
				uni.showToast({
					title: '请填QQ号',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			
			// #ifdef H5
			Util.setCookie('ContactNameTech', this.ContactNameTech);
			Util.setCookie('ContactMobileTech', this.ContactMobileTech);
			Util.setCookie('ContactQQTech', this.ContactQQTech);
			// #endif
			
			// #ifdef MP-WEIXIN
			uni.setStorageSync('ContactNameTech', this.ContactNameTech);
			uni.setStorageSync('ContactMobileTech', this.ContactMobileTech);
			uni.setStorageSync('ContactQQTech', this.ContactQQTech);
			// #endif
			
			setTimeout(()=>{
				uni.navigateBack({
				    delta: 1
				});
			},100)
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/contacts.scss';
</style>
