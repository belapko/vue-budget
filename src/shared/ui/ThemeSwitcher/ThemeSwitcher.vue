<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import MoonIcon from '../../assets/icons/moon.svg?component'
import SunIcon from '../../assets/icons/sun.svg?component'
import Button from '../Button/Button.vue'

const isDark = useDark({
  selector: 'body',
  valueLight: 'light'
})

const toggleTheme = useToggle(isDark)
const onClick = () => {
  toggleTheme()
}
</script>

<template>
  <Button :method="onClick">
    <Transition mode="out-in">
      <MoonIcon v-if="isDark" class="icon" />
      <SunIcon v-else class="icon" />
    </Transition>
  </Button>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-out;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.icon {
  width: 1rem;
  height: 1rem;
}
</style>
