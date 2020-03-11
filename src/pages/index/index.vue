<template>
	<view class="container" :style="{height:pageHeight,overflow:'hidden'}">
		<search @window-height="handleWindowHeight"/>
	<!-- 轮播图 -->
	<swiper autoplay indicator-dots>
  		<swiper-item :key='item.goods_id' v-for="item in swiperData">
    		<image :src='item.image_src'/>
  		</swiper-item>
	</swiper>
	<!-- 导航菜单 -->
	<view class="navs">
		<navigator url="" :key="index" v-for="(item,index) in navsData">
			<image :src="item.image_src"/>
		</navigator>
	</view>
	<!-- // 楼层商品 -->
	<view class="floors">
		<view class="floor" :key="index" v-for="(item,index) in floorData">
			<!-- 标题 -->
			<view class="title">
				<image :src="item.floor_title.image_src"/>
			</view>
			<!-- 条目 -->
			<view class="items">
				<navigator url="" :key="i" v-for="(img,i) in item.product_list">
					<image :src="img.image_src"/>
				</navigator>
			</view>
		</view>
	</view>
	<!-- 回到顶部按钮 -->
	<view class="goTop icon-top" @click="goTop" v-if="scrollTop>100"></view>
	</view>
</template>

<script>
import search from '@/components/search'
	export default {
		data() {
			return {
				title: 'Hello',
				pageHeight:'auto',
				swiperData:[],
				navsData:[],
				floorData:[],
				// 页面滚动的距离
				scrollTop:0
			}

		},
		components:{
			search
		},
		//监听页面的滚动
		onPageScroll(e){
			this.scrollTop = e.scrollTop
		},
		onLoad() {
			this.querySwiperData()
			this.queryNavsData()
			this.queryFloorData()
		},
		methods: {
			goTop(){
				// 调用api可以设置页面的滚动位置
				uni.pageScrollTo({
					scrollTop:0
					})
			},
			handleWindowHeight(data){
				this.pageHeight = data.height +'px'
			},
			async querySwiperData(){
				// 获取轮播图数据
				const {message} = await this.$request({
					path:'home/swiperdata'
				})
				this.swiperData = message
				// //使用插件
				// this.$request()
				// //获取轮播图数据
				// wx.request({
				// 	url:'https://api-ugo-dev.itheima.net/api/public/v1/home/swiperdata',
				// 	success:(res)=>{
				// 		this.swiperData = res.data.message
				// 	}
				// })
			},
			async queryNavsData(){
				// 获取导航菜单数据
				const {message} = await this.$request({
					path:'home/catitems'
				})
				this.navsData = message
				//获取轮播图数据
				// wx.request({
				// 	url:'https://api-ugo-dev.itheima.net/api/public/v1/home/catitems',
				// 	success:(res)=>{
				// 		this.navsData = res.data.message
				// 	}
				// })
			},
			async queryFloorData(){
				// 获取导航栏菜单数据
				const {message} = await this.$request({
					path:'home/floordata'
				})
				this.floorData = message
				//获取轮播图数据
				// wx.request({
				// 	url:'https://api-ugo-dev.itheima.net/api/public/v1/home/floordata',
				// 	success:(res)=>{
				// 		this.floorData = res.data.message
				// 	}
				// })
			}
		}
	}
</script>

<style lang='less'>
	
	swiper{
		height: 340rpx;
		image{
			width: 750rpx;
			height: 340rpx;
		}
	}
	.navs{
		height: 180rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		navigator{
			width: 128rpx;
			height: 140rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.floor{
		.title{
			width: 750rpx;
			height: 60rpx;
			padding: 20rpx 0 0 10rpx;
			box-sizing: border-box;
			background-color: #F4F4F4;
		}
		.items{
			padding: 20rpx 16rpx;
			overflow: hidden;
			navigator{
				float: left;
				padding-left: 10rpx;
				&:first-child{
					width: 232rpx;
					height: 386rpx;
					padding-left: 0;
				}
				&:nth-child(2),
				&:nth-child(5){
					width: 273rpx;
					height: 188rpx;
				}
				&:nth-child(3),
				&:nth-child(4){
					width: 193rpx;
					height: 188rpx;
				}
				&:nth-last-child(-n+2){
					padding-top: 10rpx;
				}
			}
		}
		&:first-child{
			.items{
				navigator{
					width: 232rpx;
					height: 188rpx;
					&:first-child{
						width: 232rpx;
						height: 386rpx;
					}
				}
			}
		}
	}
.goTop {
  position: fixed;
  bottom: 30rpx;
  right: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100rpx;
  height: 100rpx;
  font-size: 48rpx;
  color: #666;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
