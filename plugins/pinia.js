import { defineNuxtPlugin } from '#app'
import { createPinia } from 'pinia'

export default defineNuxtPlugin(nuxtApp => {
	const pinia = createPinia() // создаем инстанс Pinia
	nuxtApp.vueApp.use(pinia) // подключаем Pinia к приложению
})
