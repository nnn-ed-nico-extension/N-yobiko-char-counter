<template>
	<div class="root">
		<div class="title">
			<span class="go-back" @click="$router.back()">
				<fa-icon icon="arrow-left"/>
			</span>
			<h2>情報</h2>
		</div>
		<div class="content">
			<section>
				<div class="title">
					作った人
				</div>
				<div class="summary">
					tsutoringo (<a href="https://github.com/tsutoringo" target="_blank">GitHub</a>, <a href="https://twitter.com/tsutoringo" target="_blank">Twitter</a>)
				</div>
			</section>
			<div class="separator"></div>
			<section>
				<div class="title">
					バージョン 
				</div>
				<div class="summary">
					{{extName}} (v{{extVersion}})<br>
					<a :href="baseURL" target="_blank">N-yobiko-char-counter</a> (<a :href="`${baseURL}/commit/${gitHash}`" target="_blank">{{gitHash}}</a>/<a :href="`${baseURL}/tree/${gitBranch}`" target="_blank">{{gitBranch}}</a>)
				</div>
			</section>
			<div class="separator"></div>
			<section>
				<div class="title">
					ID 
				</div>
				<div class="summary">
					{{extID}}
				</div>
			</section>
			<div class="separator"></div>
			<section>
				<div class="title">
					Special Thanks
				</div>
				<div class="summary">
					アイコン作成: <a href="https://twitter.com/Alphakun_" target="_blank">Alphakun_</a>
				</div>
			</section>
			<div class="separator"></div>
			<section>
				<div class="title">
					その他
				</div>
				<div class="summary">
					作成者に寄付: <a href="https://ko-fi.com/tsutoringo" target="_blank">100円のKo-fiを買う</a>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Info'
}
</script>
<style scoped>
.go-back {
	display: flex;
	width: 30px;
	height: 30px;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-right: 5px;
	cursor: pointer;
	transition: background-color 300ms 0s ease;
}

.go-back:hover {
	background-color: #00000040;
}

.root>.title {
	border-bottom: #e9e9e9 1px solid;
	padding: 15px;
	display: flex;
	align-items: center;
}
.root>.title>h2 {
	margin: 0;
}

.content {
	padding: 0 15px;
	font-size: 13px;
}

.content section {
	padding: 15px 5px;
	display: flex;
	vertical-align: center;
	align-items: center;
}

.content section>.title {
	width: 22%;
	text-align: right;
	font-weight: 700;
	margin-right: 15px;
}

.content section h3 {
	margin: 5px 0;
}

.separator {
	width: 100%;
	height: 1px;
	background-color: #e9e9e9;
}
</style>