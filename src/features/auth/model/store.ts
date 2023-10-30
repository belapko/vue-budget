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
  const isAuthenticated = ref<boolean>(false)

  async function auth(email: string, password: string, type: 'signin' | 'signup') {
    isLoading.value = true
    try {
      const { data } = await apiInstance.post<AuthResponse>(`${baseUrl}/auth/${type}`, { email, password })
      isAuthenticated.value = true
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.accessToken)
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data.user))
      error.value = ''
      router.push('/about')
    } catch (e) {
      console.log('i am here', e)
      isAuthenticated.value = false
      if (isAxiosError(e) && e.response) {
        error.value = e.response.data.message
      } else {
        error.value = 'Произошла непредвиденная ошибка'
      }
    } finally {
      isLoading.value = false
    }
  }

  async function verify() {
    try {
      await apiInstance.get('/auth/verify')
    } catch (e) {
      if (isAxiosError(e) && e.response && e.response.status === 401) {
        router.push('/auth')
      }
    }
  }

  function signOut() {
    apiInstance.post('/auth/signout')
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
    router.push('/auth')
  }

  return { isLoading, error, auth, verify, signOut }
})
