import { api } from '@shared/api'
import type { UserRole } from '@shared/config'
import type { User } from '@entities/user'

export interface LoginPayload {
  username: string
  password: string
}

export interface RegisterPayload {
  username: string
  email: string
  password: string
  role: UserRole
}

export interface AuthResponse {
  user: User
  token: string
}

export const authApi = {
  login: (data: LoginPayload) =>
    api.post<AuthResponse>('/auth/login', data).then((r) => r.data),

  register: (data: RegisterPayload) =>
    api.post<AuthResponse>('/auth/register', data).then((r) => r.data),

  logout: () => api.post('/auth/logout'),

  me: () => api.get<User>('/auth/me').then((r) => r.data),
}
