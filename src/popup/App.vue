<template>
	<router-view />
</template>
<script>
export default {
	name: 'App',
}
</script>
<style>
html {
	width: 400px;
}

:is(h1, h2, h3, h4, h5, h6) {
	font-weight: 300;
}

a {
	color: #4f73e3;
	text-decoration: none;
}
</style>