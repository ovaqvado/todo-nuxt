import { defineStore } from 'pinia'
import type { Todo } from '~/types/type'

export const useTodoStore = defineStore('todos', {
	state: () => ({
		todos: [] as Todo[],
	}),
	actions: {
		addTodo(todo: Todo) {
			this.todos.push(todo)
			this.saveTodos() // сохраняем каждый раз при добавлении
		},
		removeTodo(id: number) {
			this.todos = this.todos.filter(todo => todo.id !== id)
			this.saveTodos() // сохраняем каждый раз при удалении
		},
		initializeTodos() {
			const savedTodos = localStorage.getItem('todos')
			if (savedTodos) {
				// Если есть сохраненные задачи, загружаем их
				this.todos = JSON.parse(savedTodos)
			} else {
				// Если нет, создаем базовые задачи
				this.todos = [
					{
						id: 1,
						title: '1 task',
						description: 'create btn',
					},
					{
						id: 2,
						title: '2 task',
						description: 'create btn',
					},
				]
			}
		},
		saveTodos() {
			localStorage.setItem('todos', JSON.stringify(this.todos))
		},
	},
})
