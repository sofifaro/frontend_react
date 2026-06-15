import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authApi, type LoginPayload } from '../api/authApi'
import { useUserStore } from '@entities/user'
import { ROLES, ROUTES } from '@shared/config'

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const setUser = useUserStore((s) => s.setUser)
  const navigate = useNavigate()

  const login = async (payload: LoginPayload) => {
    setLoading(true)
    setError(null)
    try {
      const { user, token } = await authApi.login(payload)
      setUser(user, token)
      if (user.role === ROLES.TEACHER) {
        navigate(ROUTES.TEACHER.DASHBOARD)
      } else {
        navigate(ROUTES.STUDENT.DASHBOARD)
      }
    } catch {
      setError('Неверный логин или пароль')
    } finally {
      setLoading(false)
    }
  }

  return { login, loading, error }
}
