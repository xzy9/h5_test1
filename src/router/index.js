import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/views/TodoList'
import CompletedList from '@/views/CompletedList'
import CanceledList from '@/views/CanceledList'
import AllList from '@/views/AllList'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/todoList',
			name: 'todoList',
			component: TodoList
		},
		{
			path: '/completedList',
			name: 'completedList',
			component: CompletedList
		},
		{
			path: '/canceledList',
			name: 'canceledList',
			component: CanceledList
		},
		{
			path: '/allList',
			name: 'allList',
			component: AllList
		},
		{
			path: '*',
			redirect: '/todoList'
		},
	]
})
