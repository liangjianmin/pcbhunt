<template>
	<view class="user-login">
		<view class="logo row rowCenter verCenter"><image src="../../static/icon／logo@2x.png" mode="aspectFill"></image></view>
		<view class="form-box column rowCenter">
			<view class="form-input row verCenter mb40">
				<text class="iconfont iconiconloginuser"></text>
				<input type="text" class="inp" placeholder="请输入注册手机号码" placeholder-style="color:#ccc;" />
			</view>
			<view class="form-input row verCenter bothSide mb24">
				<view class="row verCenter">
					<text class="iconfont iconiconloginpassword"></text>
					<input type="text" class="inp" placeholder="请输入短信验证码" placeholder-style="color:#ccc;" />
				</view>
				<button class="code">发送验证码</button>
			</view>
			<view class="agreement-box row verCenter">
				<text class="iconfont icontongyi"></text>
				<text class="text">同意《用户服务协议》</text>
			</view>
			<view class="btn row verCenter rowCenter">登录</view>
		</view>
		<view class="ad">
			<image src="../../static/login／活动／banner1@2x.png" mode="aspectFill"></image>
		</view>
		<view class="about-box">
			<view class="title">关于我们</view>
			<text class="text">杭州猎板网络科技有限公司总部设在浙江省杭州市拱墅区万达广场，是一家专注于PCB极速打样的智慧工厂，由猎芯网投资控股(猎芯ICHUNT.COM，是中国领先电子元器件B2B交易服务平台，先后获得经纬中国、微光、华诺、京东战投、海通证券等多轮融资)。</text>
		</view>
	</view>
</template>

<script>
import { API } from '@/util/api.js';
export default {
	data() {
		return {};
	},
	onLoad(options) {},
	methods: {}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/user/login.scss';
</style>
