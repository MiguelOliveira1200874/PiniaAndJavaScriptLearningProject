import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const countDigitLength = computed(() => count.value.toString().length)
  function increment() {
    if (!isAutenticated()) return

    this.count++
  }
  function decrement() {
    if (!isAutenticated()) return

    this.count--
  }

  function isAutenticated() {
    const authStore = useAuthStore()
    return authStore.isAuthenticated
  }
  return { increment, decrement, count, countDigitLength, isAutenticated }
})
