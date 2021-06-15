<template>
	<footer>
		<div class="git">
			<octicon :icon="gitBranch" class="icon"/>
			<span class="repository">
				<a href="https://github.com/tsutoringo/N-yobiko-char-counter" target="_blank">N-yobiko-char-counter</a>
			</span>@<span class="commit-hash"><a :href="`https://github.com/tsutoringo/N-yobiko-char-counter/commit/${commitHash}`" target="_blank">{{commitHash}}</a></span>
		</div>
		<div class="left">
			<div>
				<router-link to="/info"><fa-icon icon="info-circle"></fa-icon>情報</router-link>
			</div>
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

.left {
	margin-left: auto;
}
</style>