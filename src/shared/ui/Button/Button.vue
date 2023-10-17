<script setup lang="ts">
import { type Props } from './types'
import Spinner from '../Spinner/Spinner.vue'

withDefaults(defineProps<Props>(), {
  theme: 'clear',
  size: 'medium'
})
// defineEmits(['click'])
</script>

<template>
  <button
    class="button"
    :class="[theme, size, { disabled }]"
    :disabled="disabled"
    @click="method"
  >
    <Spinner v-if="loading" />
    <component :is="leftIcon" class="icon" :class="[loading && 'invisible']" />
    <span :class="loading && 'invisible'"><slot /></span>
    <component :is="rightIcon" class="icon" :class="[loading && 'invisible']" />
  </button>
</template>

<style scoped lang="scss">
.small {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;

  .icon {
    width: 0.875rem;
    height: 0.875rem;
  }
}

.medium {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;

  .icon {
    width: 1rem;
    height: 1rem;
  }
}

.large {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;

  .icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}

.button {
  font-weight: var(--font-semibold);
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.disabled {
    cursor: default;
  }
}

.invisible {
  opacity: 0;
}

.outlined {
  background: var(--accent-color-yellow);
  color: var(--dark-color);

  &.disabled {
    background-color: var(--secondary-color);
  }
}
</style>
