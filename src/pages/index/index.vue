<template>
	<view class="container">
		<!-- 搜索栏 -->
		<view class="search">
			<!-- 搜索栏标签 -->
			<view class="input-box">
				<input type="text" />
			</view>
			<!-- 搜索的结果 -->
			<view class="content"></view>
	</view>
	<!-- 轮播图 -->
	<swiper autoplay indicator-dots>
  		<swiper-item>
    		<image src='/static/uploads/banner1.png'/>
  		</swiper-item>
  		<swiper-item>
    		<image src='/static/uploads/banner2.png'/>
  		</swiper-item>
  		<swiper-item>
    		<image src='/static/uploads/banner3.png'/>
  		</swiper-item>
	</swiper>
	<!-- 导航菜单 -->
	<view class="navs">
		<navigator url="">
			<image src="/static/uploads/icon_index_nav_1@2x.png"/>
		</navigator>
		<navigator url="">
			<image src="/static/uploads/icon_index_nav_2@2x.png"/>
		</navigator>
		<navigator url="">
			<image src="/static/uploads/icon_index_nav_3@2x.png"/>
		</navigator>
		<navigator url="">
			<image src="/static/uploads/icon_index_nav_4@2x.png"/>
		</navigator>
	</view>
	<!-- // 楼层商品 -->
	<view class="floors">
		<view class="floor">
			<!-- 标题 -->
			<view class="title">
				<image src="/static/uploads/pic_floor01_title.png"/>
			</view>
			<!-- 条目 -->
			<view class="items">
				<navigator url="">
					<image src="/static/uploads/pic_floor01_1@2x.png"/>
				</navigator>
				<navigator url="">
					<image src="/static/uploads/pic_floor01_2@2x.png"/>
				</navigator>
				<navigator url="">
					<image src="/static/uploads/pic_floor01_3@2x.png"/>
				</navigator>
				<navigator url="">
					<image src="/static/uploads/pic_floor01_4@2x.png"/>
				</navigator>
				<navigator url="">
					<image src="/static/uploads/pic_floor01_5@2x.png"/>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang='less'>
	.search{
		.input-box{
			background-color: #EB4450;
			padding: 20rpx;
			input{
				background-color: #fff;
				border-radius: 6rpx;
			}
		}
	}
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
</style>
