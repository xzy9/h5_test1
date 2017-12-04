<template>
	<div class="header">
		<div class="container">ToDoList</div>
	</div>
</template>

<script>
	export default{
		name: 'Header',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header{
		height: 80px;
		line-height: 80px;
		padding: 0 100px;
		color: #fff;
		font-size: 20px;
		background: #3a1b71;
		text-align: center;
	}
</style>
