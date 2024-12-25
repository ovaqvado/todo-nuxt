<template>
	<div class="dialog">
		<div class="dialog__content">
			<h2 class="title__dialog">Add new task</h2>
			<div>
				<button class="dialog__btn__close" @click="onClickCancel">X</button>
			</div>
			<form class="dialog__inputs__box" @submit="submitData">
				<div class="dialog__input__container">
					<label class="label__input">Task title:</label>
					<input
						v-model="todoTitle"
						class="dialog__input"
						type="text"
						placeholder="Title..."
					/>
				</div>
				<div class="dialog__input__container">
					<label class="label__input">Task text:</label>
					<input
						v-model="todoDescription"
						class="dialog__input"
						type="text"
						placeholder="Description..."
					/>
				</div>
				<button class="dialog__submit" type="submit">Submit</button>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../store/todos'
import type { Todo } from '../types/type'
const emit = defineEmits(['close'])
const todoTitle = ref('')
const todoDescription = ref('')
const todoStore = useTodoStore()
function onClickCancel() {
	emit('close', true)
}
function submitData(e: Event) {
	e.preventDefault()
	const newTodo: Todo = {
		id:
			todoStore.todos.length > 0
				? Math.max(...todoStore.todos.map(todo => todo.id)) + 1
				: 1,
		title: todoTitle.value,
		description: todoDescription.value,
	}
	todoStore.addTodo(newTodo)
	todoTitle.value = ''
	todoDescription.value = ''
	emit('close', true)
}
</script>

<style scoped>
.dialog__content {
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	background: #ffffff;
	padding: 100px 100px;
	border-radius: 20px;
	position: relative;
}

.dialog__btn__close {
	position: absolute;
	top: 30px;
	right: 40px;
	background: none;
	border: none;
	cursor: pointer;
	font-size: 1.5rem;
}

.dialog__btn__close:hover {
	color: red;
}

.title__dialog {
	color: rgb(0, 0, 0);
	margin-bottom: 30px;
}

.dialog__input__container {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.dialog__inputs__box {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}

.dialog__input {
	width: 180px;
	height: 20px;
	padding-left: 6px;
	outline: none;
}

.dialog__submit {
	margin-top: 20px;
	width: 90px;
	height: 30px;
	font-weight: 500;
	cursor: pointer;
	color: black;
	background: rgb(22, 189, 255);
	border-radius: 7px;
	border: none;
	transition: 300ms;
}
.dialog__submit:hover {
	background: rgba(135, 207, 235, 0.603);
}

@media screen and (width <= 900px) {
	.dialog__content {
		padding: 50px 100px;
	}
}
@media screen and (width <= 555px) {
	.dialog__content {
		padding: 20px 40px;
		border-radius: 10px;
	}

	.label__input {
		font-size: 0.8rem;
	}

	.dialog__btn__close {
		font-size: 1rem;
		right: 12px;
		top: 10px;
	}
}
@media screen and (width <= 375px) {
}
</style>
