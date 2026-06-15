import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from './types'

interface UserState {
  user: User | null
  token: string | null
  setUser: (user: User, token: string) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user, token) => {
        localStorage.setItem('access_token', token)
        set({ user, token })
      },
      clearUser: () => {
        localStorage.removeItem('access_token')
        set({ user: null, token: null })
      },
    }),
    {
      name: 'sehriyo-user',
      // Only persist user & token, not actions
      partialize: (state) => ({ user: state.user, token: state.token }),
    },
  ),
)
