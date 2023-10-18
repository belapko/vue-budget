<script setup lang="ts">
import { type Props } from './types'

withDefaults(defineProps<Props>(), {
  size: 'medium'
})
</script>

<template>
  <div :class="[$style.text, $style[size], { [$style.error]: isError }]">
    <h3 :class="$style.title" v-if="title">{{ title }}</h3>
    <div :class="$style.paragraphs" v-if="paragraphs?.length">
      <p :class="$style.paragraph" v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
    </div>
  </div>
</template>

<style module lang="scss">
.small {
  font-size: var(--font-small);
}

.medium {
  font-size: var(--font-medium);
}

.large {
  font-size: var(--font-large);
}

.title {
  font-weight: var(--font-semibold);
}

.paragraph {
  margin-top: 1rem;

  &:first-child {
    margin-top: 0px;
  }
}

.error.text {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--error-color);

  .title {
    color: var(--error-text-color);
  }

  .paragraph {
    color: var(--error-text-color);
  }
}
</style>
