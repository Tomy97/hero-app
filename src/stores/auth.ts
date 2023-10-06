import { defineStore } from 'pinia'
import {} from 'pinia-plugin-persistedstate'

const authStore = defineStore('auth', () => {}, {
  persist: true
})
