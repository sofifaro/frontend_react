import { create } from 'zustand'
import type { Notification } from './types'

interface NotificationsState {
  items: Notification[]
  markRead: (id: string) => void
  markAllRead: () => void
}

// Stub data — replace with API call when backend is ready
const STUB: Notification[] = [
  { id: '1', text: 'Новый ученик записался на ваш курс', time: '5 мин назад', read: false },
  { id: '2', text: 'Доступно обновление платформы', time: '2 ч назад', read: true },
]

export const useNotificationsStore = create<NotificationsState>((set) => ({
  items: STUB,
  markRead: (id) =>
    set((s) => ({
      items: s.items.map((n) => (n.id === id ? { ...n, read: true } : n)),
    })),
  markAllRead: () =>
    set((s) => ({ items: s.items.map((n) => ({ ...n, read: true })) })),
}))
