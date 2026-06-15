import { useNavigate } from 'react-router-dom'
import { authApi } from '../api/authApi'
import { useUserStore } from '@entities/user'
import { ROUTES } from '@shared/config'

export function useLogout() {
  const clearUser = useUserStore((s) => s.clearUser)
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await authApi.logout()
    } finally {
      clearUser()
      navigate(ROUTES.LANDING)
    }
  }

  return { logout }
}
