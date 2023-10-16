import axios from 'axios'
import { LOCAL_STORAGE_TOKEN_KEY } from '../../constants'

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ORIGIN,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`
  }
})
