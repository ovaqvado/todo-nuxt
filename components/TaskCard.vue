<template>
	<div>
		<ul>
			<li v-for="todo in todos" :key="todo.id" class="task__card">
				<div class="task__text">
					<span class="taskcardtext">
						<input
							v-if="editTodoId === todo.id"
							type="text"
							v-model="editedTitle"
						/>
						<p v-else class="taskstatictext">Task: {{ todo.title }}</p>
					</span>
					<span class="taskcardtext">
						<input
							v-if="editTodoId === todo.id"
							type="text"
							v-model="editedDescription"
						/>
						<p v-else class="task__static_text">
							Description: {{ todo.description }}
						</p>
					</span>
				</div>
				<div class="task__card__buttons">
					<button
						class="btn btn_edit"
						v-if="editTodoId === todo.id"
						@click="saveEdit(todo.id)"
					>
						Save
					</button>
					<button
						class="btn btn_edit"
						v-else
						@click="editTodo(todo.id, todo.title, todo.description)"
					>
						Edit
					</button>
					<button class="btn btn_delete" @click="removeTodo(todo.id)">
						Delete
					</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/store/todos'
import { computed, onMounted, ref } from 'vue'

const todoStore = useTodoStore()
const todos = computed(() => todoStore.todos)

const editTodoId = ref<number | null>(null)
const editedTitle = ref<string>('')
const editedDescription = ref<string>('')

const editTodo = (id: number, title: string, description: string) => {
	editTodoId.value = id
	editedTitle.value = title
	editedDescription.value = description
}

// Метод для сохранения изменений
const saveEdit = (id: number) => {
	todoStore.todos.forEach(todo => {
		if (todo.id === id) {
			todo.title = editedTitle.value
			todo.description = editedDescription.value
		}
	})
	editTodoId.value = null // Сбрасываем режим редактирования
}

const removeTodo = (id: number) => {
	todoStore.removeTodo(id)
}

onMounted(() => {
	if (todos.value.length === 0) {
		todoStore.initializeTodos()
	}
})
</script>
<style>
.task__card {
	display: flex;
	justify-content: space-between;
	background: rgba(109, 109, 109, 0.623);
	padding: 5px;
	width: 800px;
	border: 1px solid rgba(177, 177, 177, 0.76);
}
@media screen and (max-width: 900px) {
	.task__card {
		width: 500px;
	}
	.task__text {
		font-size: 0.7rem;
	}
	.task__static__text {
		font-size: 0.7rem;
	}

	.btn {
		font-size: 0.8rem;
	}
}
@media screen and (max-width: 555px) {
	.task__card {
		width: 350px;
	}
	.task__text {
		font-size: 0.5rem;
	}
	.task__static__text {
		font-size: 0.5rem;
	}
	.btn {
		font-size: 0.5rem;
	}
}
@media screen and (max-width: 375px) {
	.task__card {
		width: 250px;
	}
	.task__text {
		font-size: 0.3rem;
	}
	.task__static__text {
		font-size: 0.3rem;
	}
	.btn {
		font-size: 0.3rem;
	}
}

.task__text {
	color: white;
}

.task__card__text {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
}

.task__static__text {
	color: rgb(0, 183, 255);
}

.task__card__head {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
}
.btn {
	cursor: pointer;
	background: none;
	border: none;
}

.btn_edit {
	color: rgb(0, 255, 0);
}
.btn_edit:hover {
	color: rgb(0, 255, 0, 0.5);
}
.btn_delete {
	color: red;
}
.btn_delete:hover {
	color: rgba(255, 0, 0, 0.5);
}

.task__card__buttons {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
}
</style>
