<template>
	<div class="container">
		<button class="new__task__btn" @click="toggleDialog">Add new task</button>
		<div class="container__all__task">
			<div class="container__task">
				<h3 class="name__container">Todos</h3>
				<div>
					<task-card />
				</div>
			</div>
		</div>
		<add-task v-if="showDialog" @close="toggleDialog"></add-task>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)

function toggleDialog() {
	showDialog.value = !showDialog.value
}
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	background: rgb(39, 39, 39);
	min-height: 100vh;
	width: 100vw;
}

.new__task__btn {
	margin-top: 70px;
	margin-bottom: 50px;
	width: 200px;
	height: 40px;
	background: rgb(23, 104, 136);
	color: white;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	transition: 300ms;
}

.new__task__btn:hover {
	box-shadow: 0px 0px 6px 3px rgb(23, 104, 136);
}

.container__all__task {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.container__task {
	gap: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.name__container {
	color: white;
	font-weight: 500;
	font-size: 1.4rem;
}
</style>
