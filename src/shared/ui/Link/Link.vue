<script setup lang="ts">
import { computed } from 'vue'
import { type Props } from './types'

const { routerLink, to } = withDefaults(defineProps<Props>(), {
  routerLink: false,
  theme: 'default'
})

const type = computed(() => (routerLink ? 'router-link' : 'a'))
const navigate = computed(() => ({
  [routerLink ? 'to' : 'href']: to,
  [routerLink ? '' : 'target']: '_blank'
}))
</script>

<template>
  <component :is="type" class="link" :class="theme" v-bind="{ ...navigate }">
    {{ text }}
  </component>
</template>

<style scoped lang="scss">
.link {
  display: inline-block;
  cursor: pointer;
}
.default {
  transition: transform .1s linear;
  color: var(--accent-color-green);

  &::after {
    display: block;
    content: '';
    border-bottom: 1px solid var(--accent-color-green);;
    transform: scaleX(0);
    transition: transform .1s ease-in-out;;
  }

  &:hover {
    transform: translateY(-0.1rem);
    &::after {
      transform: scaleX(1);
    }
  }
}
</style>
