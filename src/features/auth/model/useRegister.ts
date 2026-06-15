import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authApi, type RegisterPayload } from '../api/authApi'
import { useUserStore } from '@entities/user'
import { ROLES, ROUTES } from '@shared/config'

export function useRegister() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const setUser = useUserStore((s) => s.setUser)
  const navigate = useNavigate()

  const register = async (payload: RegisterPayload) => {
    setLoading(true)
    setError(null)
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
  }

  return { register, loading, error }
}
