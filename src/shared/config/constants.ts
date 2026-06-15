export const APP_NAME = 'SEHRIYO'
export const APP_TAGLINE = 'Онлайн платформа для обучения'

export const ROLES = {
  STUDENT: 'student',
  TEACHER: 'teacher',
} as const

export type UserRole = (typeof ROLES)[keyof typeof ROLES]

export const ROUTES = {
  LANDING: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  TEACHER: {
    DASHBOARD: '/teacher',
    COURSES: '/teacher/courses',
    STUDENTS: '/teacher/students',
    SETTINGS: '/teacher/settings',
  },
  STUDENT: {
    DASHBOARD: '/student',
    COURSES: '/student/courses',
    SETTINGS: '/student/settings',
  },
} as const
