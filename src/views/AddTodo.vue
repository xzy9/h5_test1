<template>
	<div class="modal-wrapper" v-show="visible">
		<transition name="fade">
			<div class="modal-container" v-show="visible">
				<div class="modal-header">
					<span class="modal-title">添加事项</span>
					<i class="modal-cancel" @click="closeModal">X</i>
				</div>
				<div class="modal-content" >
					<form>
						<div class="form-item">
							<label for="title">标题</label>
							<input type="text" id="title" name="title" v-model="todo.title" />
						</div>
						<div class="form-item">
							<label for="description">描述</label>
							<input type="text" id="description" name="description" v-model="todo.description" />
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button class="btn-save" @click="addTodo">确定</button>
					<button class="btn-cancel" @click="closeModal">取消</button>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default{
		name: 'AddTodo',
		data: function(){
			return {
				visible: false,
				todo: {}
			}
		},
		mounted: function () {
			this.$on('showModal', function () {
				this.showModal();
			});
		},
		methods: {
			closeModal: function(){
				this.visible = false
			},
			showModal: function(){
				this.visible = true
			},
			addTodo: function () {
				let temp = sessionStorage.getItem('ALLLIST')
				let todoList = []
				if(temp){
					todoList = JSON.parse(temp)
				}
				this.todo.time = Date.now()

				/*
				* 状态：
				* 	0 --> 未完成
				* 	1 --> 已完成
				*	2 --> 已取消
				*	3 --> 已删除
				* */
				this.todo.state = '0'

				this.todo.id = Date.now() +

				todoList.push(this.todo)
				sessionStorage.setItem('ALLLIST', JSON.stringify(todoList))
				this.closeModal()
				this.$root.EventBus.$emit('getTodoList')
			}
		}
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active{
		transition: all .3s ease;
	}
	.fade-enter, .fade-leave-to{
		/*width: 0;
		height: 0;*/
		transform: scale(0);
	}
	.btn-save{
		margin: 0 15px;
		background-color: #7546c9;
		color: #fff;
	}
	.btn-cancel{
		margin: 0 15px;
	}
</style>
