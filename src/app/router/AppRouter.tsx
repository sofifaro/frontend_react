import { Routes, Route, Navigate } from 'react-router-dom'
import { ROLES, ROUTES } from '@shared/config'

// Guards
import { RequireAuth } from './guards/RequireAuth.tsx'
import { RequireRole } from './guards/RequireRole.tsx'
import { RedirectIfAuth } from './guards/RedirectIfAuth.tsx'

// Layout shells
import { AppShell } from '@widgets/app-shell'

// Nav configs
import { teacherNav } from './config/teacherNav.tsx'
import { studentNav } from './config/studentNav.tsx'

// Pages — lazy-loaded for code splitting
import { lazy, Suspense } from 'react'

const LandingPage         = lazy(() => import('@pages/landing').then(m => ({ default: m.LandingPage })))
const LoginPage           = lazy(() => import('@pages/login').then(m => ({ default: m.LoginPage })))
const RegisterPage        = lazy(() => import('@pages/register').then(m => ({ default: m.RegisterPage })))

const TeacherDashboardPage = lazy(() => import('@pages/teacher-dashboard').then(m => ({ default: m.TeacherDashboardPage })))
const TeacherCoursesPage   = lazy(() => import('@pages/teacher-dashboard').then(m => ({ default: m.TeacherCoursesPage })))
const TeacherStudentsPage  = lazy(() => import('@pages/teacher-dashboard').then(m => ({ default: m.TeacherStudentsPage })))
const TeacherSettingsPage  = lazy(() => import('@pages/teacher-dashboard').then(m => ({ default: m.TeacherSettingsPage })))

const StudentDashboardPage = lazy(() => import('@pages/student-dashboard').then(m => ({ default: m.StudentDashboardPage })))
const StudentCoursesPage   = lazy(() => import('@pages/student-dashboard').then(m => ({ default: m.StudentCoursesPage })))
const StudentSettingsPage  = lazy(() => import('@pages/student-dashboard').then(m => ({ default: m.StudentSettingsPage })))

function PageLoader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <span style={{ color: 'var(--color-navy-40)', fontSize: 'var(--text-sm)' }}>Загрузка…</span>
    </div>
  )
}

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ── Public ── */}
        <Route path={ROUTES.LANDING} element={<LandingPage />} />

        {/* Public-only: redirect already-authenticated users */}
        <Route element={<RedirectIfAuth />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        </Route>

        {/* ── Protected ── */}
        <Route element={<RequireAuth />}>

          {/* Teacher routes */}
          <Route element={<RequireRole role={ROLES.TEACHER} />}>
            <Route element={<AppShell navItems={teacherNav} />}>
              <Route path={ROUTES.TEACHER.DASHBOARD} element={<TeacherDashboardPage />} />
              <Route path={ROUTES.TEACHER.COURSES}   element={<TeacherCoursesPage />} />
              <Route path={ROUTES.TEACHER.STUDENTS}  element={<TeacherStudentsPage />} />
              <Route path={ROUTES.TEACHER.SETTINGS}  element={<TeacherSettingsPage />} />
            </Route>
          </Route>

          {/* Student routes */}
          <Route element={<RequireRole role={ROLES.STUDENT} />}>
            <Route element={<AppShell navItems={studentNav} />}>
              <Route path={ROUTES.STUDENT.DASHBOARD} element={<StudentDashboardPage />} />
              <Route path={ROUTES.STUDENT.COURSES}   element={<StudentCoursesPage />} />
              <Route path={ROUTES.STUDENT.SETTINGS}  element={<StudentSettingsPage />} />
            </Route>
          </Route>

        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to={ROUTES.LANDING} replace />} />
      </Routes>
    </Suspense>
  )
}
