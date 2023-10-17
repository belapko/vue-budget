import { router } from '@/app/providers'
import { apiInstance } from '@/shared/api'
import { LOCAL_STORAGE_TOKEN_KEY, LOCAL_STORAGE_USER_KEY } from '@/shared/constants'
import { AxiosError, isAxiosError } from 'axios' // eslint-disable-line
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AuthResponse } from './types'

const baseUrl = import.meta.env.VITE_API_ORIGIN

export const useAuthStore = defineStore('auth', () => {
  const isLoading = ref<boolean>(false)
  const error = ref<string>('')

  async function auth(email: string, password: string, type: 'login' | 'register') {
    isLoading.value = true
    try {
      const { data } = await apiInstance.post<AuthResponse>(`${baseUrl}/${type}`, { email, password })
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.accessToken)
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data.user))
      error.value = ''
      router.push('/about')
    } catch (e) {
      if (isAxiosError(e) && e.response) {
        error.value = e.response.data
      } else {
        error.value = 'Произошла непредвиденная ошибка'
      }
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, error, auth }
})
