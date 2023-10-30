<script setup lang="ts">
import { useAuthStore } from '@/features/auth'

const store = useAuthStore()
const handleClick = () => {
  store.signOut()
}
</script>

<template>
  <h1>About page</h1>
  <button @click="handleClick">Выйти</button>
</template>
