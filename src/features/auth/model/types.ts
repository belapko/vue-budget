export interface AuthResponse {
  accessToken: string
  user: {
    id: number
    email: string
  }
}
