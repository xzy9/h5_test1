<template>
	<ul v-if="todoList.length>0" class="todoList">
		<li v-for="(item, index) in todoList" class="list-item">
			<div class="list-item-left">
				<div class="list-item-title">{{item.title}}</div>
				<div class="list-item-desc">{{item.description}}</div>
			</div>
			<div class="list-item-time">{{item.time}}</div>
			<div class="list-item-operate">
				<span class="operate-delete" title="删除" @click="changeTodoState(index, '3')"></span>
			</div>
		</li>
	</ul>
	<div v-else>还没有添加事项哦</div>
</template>

<script>
	export default{
		name: 'AllList',
		data() {
			return {
				allList: []
			}
		},
		mounted() {
			this.getListData();
			this.$root.EventBus.$on('getTodoList', function() {
				this.getListData()
			}.bind(this))
		},
		methods: {
			// 获取列表数据
			getListData() {
				let data = sessionStorage.getItem('ALLLIST')
				if(data){
					data = JSON.parse(data)
				}else{
					data = []
				}
				this.allList = data
			},
			//修改事项状态
			changeTodoState(index, state){
				let todoList = JSON.parse(sessionStorage.getItem('ALLLIST'))
				todoList[index].state = state
				sessionStorage.setItem('ALLLIST', JSON.stringify(todoList))
				this.getListData()
			}
		},
		computed: {
			todoList() {
				return this.allList.filter(function (item) {
					return item.state != '3'
				})
			}
		}
	}
</script>

<style scope>
	.operate-delete{
		display: inline-block;
		background: url(../assets/delete.png) no-repeat left center;
		padding-left: 25px;
	}
</style>
