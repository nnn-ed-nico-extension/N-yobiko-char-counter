<template>
	<footer>
		<div class="git">
			<octicon :icon="iGitBranch" class="icon"/>
			<span class="repository">
				<a :href="baseURL" target="_blank">N-yobiko-char-counter</a>
			</span>@<span class="commit-hash"><a :href="`${baseURL}/commit/${commitHash}`" target="_blank">{{commitHash}}</a></span>
		</div>
		<div class="left">
			<div>
				<router-link to="/info">
					<fa-icon icon="info-circle" />
					{{extName}}について
				</router-link>
			</div>
		</div>
	</footer>
</template>
<script>
import { gitBranch as iGitBranch } from 'octicons-vue';

export default {
	name: 'VFooter',
	data: () => ({
		iGitBranch
	})
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