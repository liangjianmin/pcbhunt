<template>
	<view class="cart-detail">
		<view class="prompt row verCenter">
			<text class="iconfont iconnotice"></text>
			<text class="text">关于如何手机端上传文件教程，点击查看</text>
		</view>
		<view class="param-box">
			<view class="box row bothSide verCenter">
				<text class="t1">交期时间</text>
				<text class="t2">{{CartResponse[0].LeadTimeShow}}</text>
			</view>
			<view class="box bor row bothSide verCenter">
				<text class="t1">预计发货</text>
				<text class="t2">{{CartResponse[0].LeadTimeEndShow}}</text>
			</view>
			<view class="text row bothSide verCenter">
				<text class="t1">尺寸：{{CartResponse[0].CartList[0].Cart_DetailPCB.BoardHeight}}*{{CartResponse[0].CartList[0].Cart_DetailPCB.BoardWidth}}cm</text>
				<text class="t2">数量：{{CartResponse[0].CartList[0].Cart_DetailPCB.Num}}{{CartResponse[0].CartList[0].PcbUnitTextShow}}</text>
			</view>
			<view class="text row bothSide verCenter"><text class="t1">层数：{{CartResponse[0].CartList[0].Cart_DetailPCB.BoardLayers}}层</text></view>
		</view>
		<view class="upload row rowCenter verCenter" v-if="CartResponse[0].CartList[0].Cart_DetailPCB.PcbFileName==null">
			<text class="iconfont iconiconxinxiupload"></text>
			<text class="t1">上传工程文件</text>
		</view>
		<view class="uploaddone row bothSide verCenter" v-if="CartResponse[0].CartList[0].Cart_DetailPCB.PcbFileName!=null">
			<text class="t1">{{CartResponse[0].CartList[0].Cart_DetailPCB.PcbFileName}}</text>
			<text class="t2">重新上传</text>
		</view>
		<view class="param-content">
			<view class="top row bothSide verCenter">
				<text class="t1">参数详情</text>
				<text class="t2"></text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">出货方式</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.PcbUnitShow}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">拼版款数</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.PcbKinds}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">板子厚度</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.BoardThickness}}mm</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">铜厚(内/外)</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.InnerCopperThickness}}oz/{{CartResponse[0].CartList[0].Cart_DetailPCB.CopperThickness}}oz</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">线宽/线距</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.LineWeight}}/{{CartResponse[0].CartList[0].Cart_DetailPCB.LineWeight}}mil</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">板材</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.BoardTypeShow}}({{CartResponse[0].CartList[0].Cart_DetailPCB.BoardBrandShow}})</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">最小孔径</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.Vias}}mm</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">阻焊颜色</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.SolderColorShow}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">字符颜色</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.FontColorShow}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">焊盘喷锡</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.SurfaceFinishShow}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">测试选项</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.TestTypeShow}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">金手指倒斜边</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.Goldfinger==true?"需要":"不需要"}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">BGA数量</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.IsBGA==true?"有":"无"}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">阻抗控制</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.ImpedanceSize}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">阻抗报告</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.IsImpedanceReport== true?"需要":"不需要"}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">工艺边参数</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.EdgeRailShow}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">槽间距</text>
				<text class="t2">垂直{{CartResponse[0].CartList[0].Cart_DetailPCB.GrooveHeight}}mm 水平{{CartResponse[0].CartList[0].Cart_DetailPCB.GrooveWidth}}mm </text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">生产确认稿</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.PCBFileConfirm==true?"是":"否"}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">出货报告</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.IsNeedShipReport==true?"需要":"不需要"}}</text>
			</view>
			<view class="box row bothSide verCenter">
				<text class="t1">工艺备注</text>
				<text class="t2">{{CartResponse[0].CartList[0].Cart_DetailPCB.Note}}</text>
			</view>
		</view>
		<view class="text-box column">
			<text>19点前付款的当天计算交期；19点后付款、19点30分后更新文件</text>
			<text>或20点确认工程问题，交期将增加1天；</text>
			<text>周六19点后和周日付款的按照周一的订单计算交期。</text>
		</view>
		<view class="btn-box row bothSide verCenter">
			<view class="text row">
				<text class="price-text">应付总额</text>
				<text class="unit-text">¥</text>
				<text class="num">{{CartResponse[0].CartList[0].ProFee}}</text>
			</view>
			<navigator class="btn-1 row rowCenter verCenter"  open-type="switchTab" url="/pages/cart/index" hover-class="none">返回购物车</navigator>
		</view>
	</view>
</template>

<script>
	import {
		API
	} from '@/util/api.js';
	import {
		request
	} from '@/util/util.js';
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';

export default {
	data() {
		return {
			CartRequest:
			{
			  idList: [0],
			  isMerge: false
			},
			CartResponse: [{
				"LeadTime": '',
				"LeadTimeShow": "",
				"LeadTimeEnd": "",
				"LeadTimeEndShow": "",
				"CartList": [{
					"Id": "",
					"IdStr": "",
					"MbId": "",
					"CartNo":"",
					"ProType": "",
					"Num":"",
					"PcbUnit": "",
					"PcbUnitTextShow": "",
					"LeadTime": "",
					"PcbFileName": null,
					"PcbFilePath": null,
					"ProFee": "",
					"IsJoin": "",
					"JoinId": null,
					"ModifyAt": "",
					"IsInvalid": false,
					"LeadTimeEnd": "",
					"Cart_DetailPCB": {
						"Id": 116428756955897856,
						"MbId": 39168815396716544,
						"CartId": 116428756951703552,
						"PCBOrderType": 10,
						"BoardWidth": 10.0000,
						"BoardHeight": 10.0000,
						"BoardThickness": 1.6000,
						"BoardLayers": 2,
						"PcbUnit": 10,
						"PcbUnitShow": "单片出货",
						"PcbUnitTextShow": "PCS",
						"SetType": null,
						"Num": 5,
						"PcbKinds": 1,
						"PanelWayX": 1,
						"PanelWayY": 1,
						"EdgeRail": null,
						"EdgeRailShow": "",
						"EdgeRailWidth": null,
						"AcceptCrossed": true,
						"VCut": 10,
						"VCutShow": "无",
						"BoardType": 10,
						"BoardTypeShow": "FR-4",
						"BoardBrand": 10,
						"BoardBrandShow": "建滔A级",
						"IsNeedShipReport": false,
						"FR4Tg": "TG130",
						"CopperThickness": 1.0000,
						"Vias": 0.4000,
						"SolderColor": 10,
						"SolderColorShow": "绿色",
						"FontColor": 30,
						"FontColorShow": "白色",
						"ImGoldThinckness": null,
						"SurfaceFinish": 20,
						"SurfaceFinishShow": "有铅喷锡",
						"SolderCover": 10,
						"SolderCoverShow": "过孔盖油",
						"ImpedanceSize": "",
						"IsImpedanceReport": false,
						"IsBGA": true,
						"Goldfinger": false,
						"LineWeight": 8.0000,
						"SolderColorBottom": 10,
						"SolderColorBottomShow": "绿",
						"FontColorBottom": 30,
						"FontColorBottomShow": "白",
						"InnerCopperThickness": 1.0000,
						"TestType": 10,
						"TestTypeShow": "AOI+飞针全测",
						"Invoice": "",
						"GrooveHeight": null,
						"GrooveWidth": null,
						"IsSpecialOffer": true,
						"PcbFileName": '',
						"PcbFilePath": '',
						"PCBFileConfirm": false,
						"Note": "",
						"ProWeight": 0.1700,
						"M2Area": 0.0500
					},
					"IsReBuy": false,
					"ReBuyOrderNO": "",
					"AddAt": "2020-11-17T14:46:18.797"
				}],
				"CartDatas": {
					"InvalidCount": 1,
					"AllCount": 1,
					"TotalWeight": 0.1700,
					"NomarlTotalWeight": 0.0,
					"SpecialTotalWeight": 0.1700,
					"NomarlTotalProFee": 0.0,
					"SpecialTotalProFee": 30.0000,
					"MaxSpecialTotalProFee": 30.0000
				}
			}]
	}
	},
	onLoad(options) {
		this.CartRequest.idList=[options.id];
		console.log(options.id);
		console.log(this.CartRequest);
		this.getData();
	},
	onShow() {},
	methods: {
		getData() {
			request(API.cartList, 'Post', JSON.stringify(this.CartRequest), true).then((response) => {
				this.ShowResult(response);
			}, function(res) {
				uni.showToast({
					title: res.Message,
					duration: 2000,
					icon: 'none'
				});
			})
			
		},
		ShowResult(res){
			//console.log(res.Data);
			this.CartResponse=res.Data;
			console.log(this.CartResponse);
		}
	},
	components: { uniSwipeAction, uniPopup, uniPopupMessage, uniPopupDialog }
};
</script>

<style scoped lang="scss">
@import '../../assets/css/cart/detail.scss';
</style>
