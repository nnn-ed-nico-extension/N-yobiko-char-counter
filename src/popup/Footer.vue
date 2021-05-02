<template>
	<footer>
		<fa-icon icon="code-branch" class="icon"/>
		<span class="repository">
			<a href="https://github.com/tsutoringo/N-yobiko-char-counter" target="_blank">N-yobiko-char-counter</a>
		</span>
		@
		<span class="commit-hash"><a :href="`https://github.com/tsutoringo/N-yobiko-char-counter/commit/${commitHash}`" target="_blank">{{commitHash}}</a></span>
	</footer>
</template>
<script>
export default {
	name: 'VFooter',
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
	background-color: #285943;
}
footer a {
	color: #8CD790;
}

.icon {
	margin-right: 3px;
	color: #8CD790;
}
</style>