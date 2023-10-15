<script setup lang="ts">
import { Routing } from '@/pages/routing'
import { useDark } from '@vueuse/core'

useDark({
  selector: 'body',
  valueLight: 'light'
})
</script>

<template>
  <Routing />
</template>

<style lang="scss">
@import './index.scss';
</style>
