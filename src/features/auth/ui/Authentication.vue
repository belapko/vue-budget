<script setup lang="ts">
import { ref, computed } from 'vue'
import { Input, Button } from '@/shared/ui'

defineProps<{ trial?: boolean }>()

const emailRe =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
const login = ref<string>('')
const password = ref<string>('')
const isButtonDisabled = computed<boolean>(() => !emailRe.test(login.value) || !(password.value.length >= 8))

const isRegister = ref<boolean>(false)
</script>

<template>
  <div :class="$style.authCard">
    <Input label="Email" :value="login" @input="(value) => (login = value)" />
    <Input label="Пароль" type="password" :value="password" @input="(value) => (password = value)" />
    <Button :disabled="isButtonDisabled" theme="outlined">{{ isRegister ? 'Зарегистрироваться' : 'Войти' }}</Button>
    <div :class="$style.buttons">
      <Button :method="() => (isRegister = !isRegister)">
        <span v-if="isRegister">Есть аккаунт? <span :class="$style.accentText">Войти</span></span>
        <span v-else>Нет аккаунта? <span :class="$style.accentText">Зарегистрироваться</span></span>
      </Button>
      <Button v-if="trial"><span :class="$style.accentText">Попробовать</span> без регистрации</Button>
    </div>
  </div>
</template>

<style module lang="scss">
.authCard {
  width: 324px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.accentText {
  color: var(--accent-color-green);
}

.buttons {
  display: flex;
  flex-direction: column;
}
</style>
