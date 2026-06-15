import { Navigate, Outlet } from 'react-router-dom'
import { useUserStore } from '@entities/user'
import { ROLES, ROUTES } from '@shared/config'

/**
 * If the user is already logged in, redirect them to their dashboard.
 * Used on /login and /register.
 */
export function RedirectIfAuth() {
  const user = useUserStore((s) => s.user)

  if (user) {
    const to =
      user.role === ROLES.TEACHER
        ? ROUTES.TEACHER.DASHBOARD
        : ROUTES.STUDENT.DASHBOARD
    return <Navigate to={to} replace />
  }

  return <Outlet />
}
