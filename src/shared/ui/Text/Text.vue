<script setup lang="ts">
import { type Props } from './types'

withDefaults(defineProps<Props>(), {
  size: 'medium'
})
</script>

<template>
  <div :class="[$style.text, { [$style.error]: isError }]">
    <h3 :class="$style.title" v-if="title">{{ title }}</h3>
    <div :class="$style.paragraphs" v-if="paragraphs?.length">
      <p :class="$style.paragraph" v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
    </div>
  </div>
</template>

<style module lang="scss">
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
.title {
    font-weight: var(--font-semibold)
}

.paragraph {
    margin-top: 1rem;

    &:first-child {
        margin-top: 0px;
    }
}
</style>
