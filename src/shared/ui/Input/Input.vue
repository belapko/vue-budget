<script setup lang="ts">
import { type Props } from './types'

withDefaults(defineProps<Props>(), {
  type: 'text',
  theme: 'underlined'
})

const emit = defineEmits<{
  (e: 'input', value: string) : void
  (e: 'change', value: string) : void
}>()

const onInput = (event: Event) => {
  emit('input', (event.target as HTMLInputElement).value)
}

const onChange = (event: Event) => {
  emit('change', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div :class="[$style.container, $style[theme]]" v-if="theme === 'underlined'">
    <input
      :class="[$style.input]"
      :type="type"
      :value="value"
      @input="onInput"
      @change="onChange"
      v-bind="$attrs"
      placeholder=" "
      :autofocus="autofocus"
    />
    <label :class="[$style.label]" v-if="theme === 'underlined'">{{ label }}</label>
  </div>
</template>

<style module lang="scss">
.underlined.container {
  position: relative;
  .input {
    border: 0;
    border-bottom: 1px solid var(--secondary-color);
    background-color: transparent;
    width: 100%;
    padding: 0.5rem 0px 0.25rem 0px;
    font-size: var(--font-medium);
    color: var(--main-reverse-color);
  }
  .label {
    position: absolute;
    top: 0px;
    left: 0px;
    color: var(--main-reverse-color);
    pointer-events: none;
    transition: all 0.2s ease-in-out;
  }

  .input:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--accent-color-green);
  }

  .input:focus ~ .label,
  .input:not(:placeholder-shown) ~ .label {
    top: -0.8rem;
    font-size: 0.8rem;
  }

  .input:focus ~ .label {
    color: var(--accent-color-green);
  }
}
</style>
