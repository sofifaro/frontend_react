import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { authApi, type RegisterPayload } from '../api/authApi' пока нет апишки для норм регистрации
import { useUserStore } from '@entities/user'
import { ROLES, ROUTES } from '@shared/config'

// уже есть в '../api/authApi', заглушка для имитации запроса
export interface RegisterPayload {
  email: string
  password: string
  name: string
  role?: 'teacher' | 'student'
}
// флаг для имитации запроса
const USE_MOCK = true

export function useRegister() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const setUser = useUserStore((s) => s.setUser)
  const navigate = useNavigate()

  const register = async (payload: RegisterPayload) => {
    setLoading(true)
    setError(null)

    if (USE_MOCK) {
      // ----- ЗАГЛУШКА -----
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          try {
            const fakeUser = {
              id: 'mock-id-' + Date.now(),
              email: payload.email,
              name: payload.name,
              role: payload.role || 'student',
              username: payload.email.split('@')[0], 
              createdAt: new Date().toISOString(),   
            }
            const fakeToken = 'mock-jwt-token-' + Date.now()
            setUser(fakeUser, fakeToken)

            if (fakeUser.role === ROLES.TEACHER) {
              navigate(ROUTES.TEACHER.DASHBOARD)
            } else {
              navigate(ROUTES.STUDENT.DASHBOARD)
            }
          } catch (err) {
            setError('Не удалось создать аккаунт. Попробуйте ещё раз.')
          } finally {
            setLoading(false)
            resolve()
          }
        }, 800)
      })
    }

    // ----- норм код, ждём бэк -----
    /*
    try {
      const { user, token } = await authApi.register(payload)
      setUser(user, token)
      if (user.role === ROLES.TEACHER) {
        navigate(ROUTES.TEACHER.DASHBOARD)
      } else {
        navigate(ROUTES.STUDENT.DASHBOARD)
      }
    } catch {
      setError('Не удалось создать аккаунт. Попробуйте ещё раз.')
    } finally {
      setLoading(false)
    }
    */
    // ------------------------------------------------------------
  }

  return { register, loading, error }
}