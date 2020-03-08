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

</style>
