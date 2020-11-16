<template>
	<view class="h-index-param">
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">工艺边</text>
				<view class="wrap list row mb1">
					<view @click="tab(item.Value, 'EdgeRail')" :val="item.Value" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.EdgeRail == item.Value }"
						 v-for="(item, index) in InitDatas.EdgeRailValues" :key="index">{{ item.Title }}</view>
				</view>
			</view>
			<!-- <view class="pcb-input row verCenter h1">
				<text class="label">单边尺寸</text>
				<view class="wrap list row"><view class="box row rowCenter verCenter curr">5mm</view></view>
			</view> -->
		</view>
		<view class="pcb-box">
			<view class="pcb-input row verCenter h1">
				<text class="label">分割方式</text>
				<view class="wrap list row">
					<view @click="tab(item.Value, 'VCut')" class="box row rowCenter verCenter" :class="{ curr: QuoteObj.VCut == item.Value }"
						 v-for="(item, index) in InitDatas.VCutValues" :key="index">{{ item.Title }}</view>
						</view>
			</view>
			<view class="pcb-input h1"  v-if="getGrooveShow">
				<view class="input-type1 row verCenter">
					<text class="t1">垂直槽间距</text>
					<input type="text" value="" placeholder="请输入" v-model="QuoteObj.GrooveHeight" placeholder-style="color:#CCCCCC;" class="inp" />
					<text class="t1">水平槽间距</text>
					<input type="text" value="" placeholder="请输入" v-model="QuoteObj.GrooveWidth" placeholder-style="color:#CCCCCC;" class="inp" />
				</view>
			</view>
		</view>
		<view class="pcb-box">
			<view class="pcb-input h1">
				<view class="input-type1 row verCenter">
					<text class="t1">拼板数量(set)</text>
					<input type="text" value="" placeholder="请输入" v-model="QuoteObj.Num" placeholder-style="color:#CCCCCC;" class="inp" />
					<text class="t1">单片数量(pcs)</text>
					{{QuoteObj.Num*QuoteObj.PanelWayX*QuoteObj.PanelWayY}}
				</view>
			</view>
			<view class="pcb-input h1">
				<view class="input-type2 row verCenter bothSide">
					<view class="row verCenter">
						<text class="t1">拼板</text>
						<input type="text" value="" placeholder="请输入" v-model="QuoteObj.PanelWayX" placeholder-style="color:#CCCCCC;" class="inp" />
					</view>
					<text class="t2">（纵列片数）PCS</text>
				</view>
			</view>
			<view class="pcb-input h1">
				<view class="input-type2 row verCenter bothSide">
					<view class="row verCenter">
						<text class="t1">拼板</text>
						<input type="text" value="" placeholder="请输入" v-model="QuoteObj.PanelWayY"  placeholder-style="color:#CCCCCC;" class="inp" />
					</view>
					<text class="t2">（横列片数）PCS</text>
				</view>
			</view>
		</view>
		<view class="pcb-boxs">
			<view class="title-bar row bothSide verCenter">
				<text class="t1">拼板尺寸</text>
				<text class="t2" @click="view()">查看拼板效果图</text>
			</view>
			<view class="text">
				<view class="t1">单个板子尺寸</view>
				<view class="row verCenter">
					<text class="t2">高:</text>
					<text class="t3">{{this.QuoteObj.SingleBoardHeight}}cm</text>
					<text class="t2">宽:</text>
					<text class="t4">{{this.QuoteObj.SingleBoardWidth}}cm</text>
				</view>
			</view>
			<view class="text-box column">
				<text class="t1">拼板后的尺寸</text>
				<view class="t2">
					<text class="t2a">高:</text>
					<text class="t2b">{{this.QuoteObj.BoardHeight}}cm</text>
				</view>
				<view class="t2">
					<text class="t2a">宽:</text>
					<text class="t2b">{{this.QuoteObj.BoardWidth}}cm</text>
				</view>
			</view>
		</view>
		<view class="bottom-text">
			*如果您对我们的拼板方式有疑问，请联系我们的在线
			<text>客服人员</text>
		</view>
		<view class="btn-box row bothSide verCenter">
			<navigator url="/pages/index/index" hover-class="none" class="btn-1 row rowCenter verCenter" @click="ret()">返回计价</navigator>
			<view class="btn-2 row rowCenter verCenter" @click="save()">保存</view>
		</view>
		<uni-popup ref="pop" type="center">
			<view class="layer-box">
				<view class="layer-title-box row verCenter rowCenter">
					<text class="title">拼板效果图(单位:cm)</text>
				</view>
				<view class="pic">
					<image src="http://img.ichunt.com/images/ichunt/minProgram/pcb/178e29273d79b6a0dd8fc35f37a91bd0.png" mode="aspectFill" class="im"></image>
				</view>
				<view class="txt-show">
					<text class="t1">*如果您对我们的拼板方式有疑问，请联系我们的在线</text>
					<text class="t2">客服人员</text>
				</view>
				<view class="close row rowCenter verCenter" @click="close()">关闭</view>
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
			InitDatas: {
				EdgeRailValues: [{
						Title: '无',
						Value: 10
					},
					{
						Title: '上下 5mm',
						Value: 20
					},
					{
						Title: '左右 5mm',
						Value: 30
					},
					{
						Title: '四边 5mm',
						Value: 40
					},
				],
				VCutValues: [{
						Title: '无',
						Value: 10
					},
					{
						Title: 'V割',
						Value: 20
					},
					{
						Title: '锣槽',
						Value: 30
					},
					{
						Title: 'V割+锣槽',
						Value: 40
					},
				],
			},
			QuoteObj: {
				SingleBoardWidth: '',
				SingleBoardHeight:'',
				BoardWidth: '',
				BoardHeight:'',
				PanelWayX: '',
				PanelWayY: '',
				VCut: 20,
				EdgeRail: 10,
				GrooveWidth: '2',
				GrooveHeight: '2',
				Num: ''
			}
		};
	},
	onLoad(option) {
		console.log('loading');
		this.QuoteObj.Num=option.num;
		this.QuoteObj.SingleBoardHeight=option.sh;
		this.QuoteObj.SingleBoardWidth=option.sw;
		this.QuoteObj.PanelWayX=option.px;
		this.QuoteObj.PanelWayY=option.py;
		this.QuoteObj.VCut=option.vcut;
		this.QuoteObj.EdgeRail=option.ea;
		this.QuoteObj.GrooveHeight=option.gh;
		this.QuoteObj.GrooveWidth=option.gw;
		console.log(this.QuoteObj);
		const eventChannel = this.getOpenerEventChannel()
		
		// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
		eventChannel.on('acceptDataFromOpenerPage', function(data) {
		 
		})
	},
	computed: {
		getGrooveShow: function() {
			if(this.QuoteObj.VCut==30||this.QuoteObj.VCut==40)
			{
				return true;
			}
			return false;
		},
	},watch: {
		QuoteObj: {
			//监听参数变化 计价处理
			handler:function(val){
				var edgeRail=this.QuoteObj.EdgeRail;
				var edgeRailWidth=1;
				var leftRight=0;
				var upDown=0;
				
				if(edgeRail==30||edgeRail==40)
				{
				  leftRight=edgeRailWidth;
				}
				if(edgeRail==20||edgeRail==40)
				{
				  upDown=edgeRailWidth;
				}
				
				 //水平槽间距
				var grooveWidth= 0;
				//垂直槽间距
				var grooveHeight= 0;
				var vcut=this.QuoteObj.VCut;
				if(vcut==30||vcut==40)
				{
				 grooveWidth = (this.QuoteObj.GrooveWidth/10);
				 grooveHeight = (this.QuoteObj.GrooveHeight/10);
				}
				
				this.QuoteObj.BoardHeight=(this.QuoteObj.SingleBoardHeight*this.QuoteObj.PanelWayX)+upDown+grooveWidth*(this.QuoteObj.PanelWayX-1);
				this.QuoteObj.BoardWidth=(this.QuoteObj.SingleBoardWidth*this.QuoteObj.PanelWayY)+leftRight+grooveHeight*(this.QuoteObj.PanelWayY-1);
				
			},
			deep: true
			},
	},
	onShow() {},
	methods: {
		close(){
			console.log('colose')
			this.$refs.pop.close();
		},
		view(){
			console.log('view')
			this.$refs.pop.open();
		},
		
		tab(index, type) {
			for (var name in this.QuoteObj) {
				if (name == type) {
					console.log(name + '=' + index);
					this.QuoteObj[name] = index;
				}
			}
		},
		check(){
			if(this.QuoteObj.BoardHeight>45||this.QuoteObj.BoardWidth>45)
			{
				uni.showToast({
				    title: '拼版后的尺寸不能大于45cm,请调整拼版样式! ',
				    duration: 2000,
					icon:'none'
				});
				return false;
			}
			else if(this.QuoteObj.BoardHeight<6||this.QuoteObj.BoardWidth<6)
			{
				uni.showToast({
				    title: '拼版尺寸两边必须同时大于6cm,请调整拼版样式! ',
				    duration: 2000,
					icon:'none'
				});
				return false;
			}
			if(this.QuoteObj.VCut==30)
			{
				if(this.QuoteObj.GrooveWidth<2||this.QuoteObj.GrooveWidth>10)
				{
					uni.showToast({
					    title: '水平槽间距需填写2-10之间 ',
					    duration: 2000,
						icon:'none'
					});
				    return false;
				}
				else if(this.QuoteObj.GrooveHeight<2||this.QuoteObj.GrooveHeight>10)
				{
					uni.showToast({
					    title: '垂直槽间距需填写2-10之间 ',
					    duration: 2000,
						icon:'none'
					});
					return false;
				}
			}else if(this.QuoteObj.VCut==40){
				var w=this.QuoteObj.GrooveWidth;
				var h=this.QuoteObj.GrooveHeight;
				if((w!=0&&h!=0)||((w<2 && w>10 && h==0)||(h<2 && h>10&&w==0)))
				{
					uni.showToast({
					    title: '垂直方向和水平方向槽间距需有一个为0 且另一个值在2-10之间',
					    duration: 2000,
						icon:'none'
					});
					return false;
				}
			}
			return true;
		},
		save(){
			if(!this.check())
				return false;
			else{
				console.log('save');
				
				uni.$emit('savepcbset',{
					Num: this.QuoteObj.Num,
					PanelWayX:this.QuoteObj.PanelWayX,
					PanelWayY:this.QuoteObj.PanelWayY,
					VCut:this.QuoteObj.VCut,
					EdgeRail:this.QuoteObj.EdgeRail,
					GrooveHeight:this.QuoteObj.GrooveHeight,
					GrooveWidth:this.QuoteObj.GrooveWidth
				}
				);
				
				// const eventChannel = this.getOpenerEventChannel()
				// eventChannel.emit('savepcbset',
				// {
				// 	Num: this.QuoteObj.Num,
				// 	PanelWayX:this.QuoteObj.PanelWayX,
				// 	PanelWayY:this.QuoteObj.PanelWayY,
				// 	VCut:this.QuoteObj.VCut,
				// 	EdgeRail:this.QuoteObj.EdgeRail,
				// 	GrooveHeight:this.QuoteObj.GrooveHeight,
				// 	GrooveWidth:this.QuoteObj.GrooveWidth
				// },
				// );
				uni.navigateBack({
				    delta: 1
				})
			}
		}
	},
	components: { uniPopup, uniPopupMessage, uniPopupDialog }
};
</script>

<style scoped lang="scss">
@import '../../assets/css/index/param.scss';
</style>
