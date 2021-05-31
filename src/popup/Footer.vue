<template>
	<footer>
		<div class="git">
			<octicon :icon="gitBranch" class="icon"/>
			<span class="repository">
				<a href="https://github.com/tsutoringo/N-yobiko-char-counter" target="_blank">N-yobiko-char-counter</a>
			</span>@<span class="commit-hash"><a :href="`https://github.com/tsutoringo/N-yobiko-char-counter/commit/${commitHash}`" target="_blank">{{commitHash}}</a></span>
		</div>
		<div class="buy-me-a-coffee">
			<a href="https://ko-fi.com/tsutoringo" target="_blank">Buy me a coffee</a>
		</div>
	</footer>
</template>
<script>
import { gitBranch } from 'octicons-vue';

export default {
	name: 'VFooter',
	data: () => ({
		gitBranch
	}),
	computed: {
		commitHash () {
			return process.env.VUE_APP_GIT_HASH;
		}
	}
}
</script>
<style scoped>
footer {
	padding: 6px;
	background-color: #f1f1f1;

	display: flex;
}
footer>.git>.octicon {
	color: #6a737d;
}
footer>.git>* {
	margin: 0 3px;
}

.buy-me-a-coffee {
	margin-left: auto;
}
</style>