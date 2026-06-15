import type { UserRole } from '@shared/config'

export interface User {
  id: string
  username: string
  email: string
  role: UserRole
  displayName?: string
  avatarUrl?: string
  createdAt: string
}
