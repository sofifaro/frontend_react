import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUserStore } from '@entities/user'
import { ROUTES } from '@shared/config'

/**
 * Protects routes that require authentication.
 * Saves the attempted URL so we can redirect back after login.
 */
export function RequireAuth() {
  const user = useUserStore((s) => s.user)
  const location = useLocation()

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  }

  return <Outlet />
}
