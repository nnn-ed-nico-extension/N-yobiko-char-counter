<template>
	<div id="app">
		<div class="area">
			<div class="question">{{extName}}</div>
			<textarea class="answers" placeholder="入力してください"></textarea>
		</div>
		<v-footer />
	</div>
</template>
<script>
import VFooter from '../Footer';
import CounterInput from '../../content-scripts/CounterInput';
import { fallback } from '../../content-scripts/petterns';

CounterInput.pettern(fallback);

export default {
	name: 'Home',
	components: { VFooter },
	mounted () {
		new CounterInput(this.$el.querySelector('.area'));
	}
}
</script>
<style scoped>
.area {
	padding: 16px;
}

textarea.answers {
	margin-top: 13px;
	padding: 18px;
	width: 100%;
	box-sizing: border-box;
	border: solid 1px #cfcfcf;
	resize: vertical;
	height: 200px;
}
</style>
<style>
body {
	margin: 0;
}

a {
	text-decoration: none;
	color: #6486ff;
}

.area .display {
	text-align: right;
}
</style>
