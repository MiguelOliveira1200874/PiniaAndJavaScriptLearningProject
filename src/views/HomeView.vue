<script setup>
import Counter from '@/components/CounterItem.vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
const authStore = useAuthStore()
const { isAuthenticated, fullname } = storeToRefs(authStore)
</script>

<template>
  <main>
    <div v-if="isAuthenticated">User name is : {{ fullname }}</div>
    <Counter />
  </main>
</template>
