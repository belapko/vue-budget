<script setup lang="ts">
import { ref, computed } from 'vue'
import { Input, Button } from '@/shared/ui'
const emailRe =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
const login = ref<string>('')
const password = ref<string>('')
const isButtonDisabled = computed<boolean>(() => !login.value.match(emailRe) && !(password.value.length >= 8))
</script>

<template>
  <div class="authCard">
    <Input label="Логин" :value="login" @change="(value) => (login = value)" />
    <Input label="Пароль" type="password" :value="password" @input="(value) => (password = value)" />
    <div class="buttons">
      <Button :disabled="isButtonDisabled" theme="outlined">Войти</Button>
      <Button>Нет аккаунта? <span class="accentText">Зарегистрироваться</span></Button>
    </div>
  </div>
</template>
