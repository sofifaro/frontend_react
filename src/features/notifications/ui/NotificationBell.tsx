import { useState, useRef, useEffect } from 'react'
import { useNotificationsStore } from '../model/store'
import styles from './NotificationBell.module.css'

export function NotificationBell() {
  const { items, markRead, markAllRead } = useNotificationsStore()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const unread = items.filter((n) => !n.read).length

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-label="Уведомления"
        aria-expanded={open}
      >
        {/* Bell icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {unread > 0 && <span className={styles.badge}>{unread}</span>}
      </button>

      {open && (
        <div className={styles.dropdown} role="menu">
          <div className={styles.header}>
            <span className={styles.title}>Уведомления</span>
            {unread > 0 && (
              <button className={styles.markAll} onClick={markAllRead}>
                Прочитать все
              </button>
            )}
          </div>
          <ul className={styles.list}>
            {items.length === 0 ? (
              <li className={styles.empty}>Нет уведомлений</li>
            ) : (
              items.map((n) => (
                <li key={n.id}>
                  <button
                    className={`${styles.item} ${!n.read ? styles['item--unread'] : ''}`}
                    onClick={() => markRead(n.id)}
                    role="menuitem"
                  >
                    <span className={styles.itemText}>{n.text}</span>
                    <span className={styles.itemTime}>{n.time}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
