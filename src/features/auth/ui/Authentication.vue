<script setup lang="ts">
import { ref, computed } from 'vue'
import { Input, Button, Text } from '@/shared/ui'
import { useAuthStore } from '../model'

const store = useAuthStore()
defineProps<{ trial?: boolean }>()

const emailRe =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
const email = ref<string>('')
const password = ref<string>('')
const isButtonDisabled = computed<boolean>(() => !emailRe.test(email.value) || !(password.value.length >= 8))
const isRegister = ref<boolean>(false)

const handleAuth = () => {
  store.auth(email.value, password.value, isRegister.value ? 'register' : 'login')
}
</script>

<template>
  <div :class="$style.authCard">
    <Text v-if="store.error" is-error :paragraphs="[store.error]" />
    <Input label="Email" :value="email" @input="(value) => (email = value)" autofocus/>
    <Input label="Пароль" type="password" :value="password" @input="(value) => (password = value)" @keypress.enter="handleAuth" />
    <Button
      :loading="store.isLoading"
      :disabled="isButtonDisabled"
      theme="outlined"
      click-enter
      :method="handleAuth"
      >{{ isRegister ? 'Зарегистрироваться' : 'Войти' }}</Button
    >
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

.error {
}
</style>
