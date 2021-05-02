<template>
	<div id="app">
		<div class="char-couter">
			<div class="question">文字数カウンタ</div>
			<textarea class="answers"></textarea>
		</div>
		<v-footer />
	</div>
</template>
<script>
import VFooter from './Footer';
import CounterInput from '../content-scripts/CounterInput';

export default {
	name: 'App',
	components: { VFooter },
	mounted () {
		new CounterInput(this.$el.querySelector('.char-couter'))
	}
}
</script>
<style scoped>
.char-couter {

}

.char-couter textarea {
	width: 100%;
	outline: none;
	box-sizing: border-box;
	resize: vertical;
	border-radius: 0;
}
.char-couter .question {
	padding:6px;
}

</style>
<style>
body {
	margin: 0;
	color: white;
	background-color: #8CD790;
}

a {
	text-decoration: none;
}

html {
	width: 280px;
}
</style>
