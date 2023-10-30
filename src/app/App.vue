<script setup lang="ts">
import { useAuthStore } from '@/features/auth/model'
import { Routing } from '@/pages/routing'
import { useDark } from '@vueuse/core'
import { onMounted } from 'vue'

useDark({
  selector: 'body',
  valueLight: 'light'
})

const store = useAuthStore()

onMounted(() => {
  store.verify()
})
</script>

<template>
  <Routing />
</template>

<style lang="scss">
@import './index.scss';
</style>
