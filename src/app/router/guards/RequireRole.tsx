import { Navigate, Outlet } from 'react-router-dom'
import { useUserStore } from '@entities/user'
import { ROUTES, type UserRole } from '@shared/config'

interface RequireRoleProps {
  role: UserRole
}

/**
 * Redirects to landing if the authenticated user doesn't have the required role.
 */
export function RequireRole({ role }: RequireRoleProps) {
  const user = useUserStore((s) => s.user)

  if (user?.role !== role) {
    return <Navigate to={ROUTES.LANDING} replace />
  }

  return <Outlet />
}
