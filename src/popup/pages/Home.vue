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
	},
	computed: {
		extName: () => browser.i18n.getMessage('extName')
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

html {
	width: 400px;
}

.area .display {
	text-align: right;
}
</style>
