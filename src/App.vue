<template>
	<div id="app">
		<v-header></v-header>
		<div class="center clearfix">
			<div class="center-top">
				<button class="btn-add" @click="showAddTodoView">添加事项</button>
			</div>
			<div class="left-nav">
				<ul class="nav-wrapper">
					<li><router-link active-class="nav-active" to="/todoList">未完成事项</router-link></li>
					<li><router-link active-class="nav-active" to="/completedList">已完成事项</router-link></li>
					<li><router-link active-class="nav-active" to="/canceledList">已取消事项</router-link></li>
					<li><router-link active-class="nav-active" to="/allList">所有事项</router-link></li>
				</ul>
			</div>
			<div class="content">
				<router-view />
			</div>
		</div>
		<AddTodo ref="addTodo" />
	</div>
</template>

<script>
	import Header from './components/Header'
	import AddTodo from './views/AddTodo'
	export default {
		name: 'App',
		components: {
			"v-header": Header,
			AddTodo
		},
		methods: {
			showAddTodoView: function () {
				this.$refs.addTodo.$emit('showModal');
			}
		}
	}
</script>

<style scoped>
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		background: #e7f1f5;
	}
	.center {
		margin: 20px 100px 0;
		background: #fff;
		padding: 25px 0;
	}
	.left-nav {
		float: left;
		width: 16.67%;
		height: 600px;
		border-right: 1px solid #e9e9e9;
	}
	.nav-wrapper>li>a {
		display: block;
		padding: 10px 0 10px 30px;
		border-right: 3px solid transparent;
		font-size: 14px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.nav-wrapper>li>a.nav-active {
		border-right: 3px solid #3a1b71;
		background: rgba(17, 52, 224, 0.19);
	}
	.btn-add{
		margin: 0 30px;
	}
	.content {
		margin-left: 16.67%;
		padding: 0 30px 30px;
	}
	.center-top{
		text-align: right;
		padding-bottom: 10px;
	}
</style>
