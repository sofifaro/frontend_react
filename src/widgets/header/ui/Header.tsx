import { useNavigate } from 'react-router-dom'
import { Logo, Avatar } from '@shared/ui'
import { NotificationBell } from '@features/notifications'
import { useUserStore } from '@entities/user'
import { useLogout } from '@features/auth'
import { ROUTES } from '@shared/config'
import { useState, useRef, useEffect } from 'react'
import styles from './Header.module.css'

interface HeaderProps {
  onMenuToggle?: () => void
}

export function Header({ onMenuToggle }: HeaderProps) {
  const user = useUserStore((s) => s.user)
  const { logout } = useLogout()
  const navigate = useNavigate()
  const [accountOpen, setAccountOpen] = useState(false)
  const accountRef = useRef<HTMLDivElement>(null)

  const homeRoute =
    user?.role === 'teacher' ? ROUTES.TEACHER.DASHBOARD : ROUTES.STUDENT.DASHBOARD

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className={styles.header}>
      {/* Mobile burger */}
      <button
        className={styles.burger}
        onClick={onMenuToggle}
        aria-label="Открыть меню"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <Logo onClick={() => navigate(homeRoute)} size="sm" />

      <div className={styles.right}>
        <NotificationBell />

        {/* Account popover */}
        <div className={styles.accountWrap} ref={accountRef}>
          <button
            className={styles.accountBtn}
            onClick={() => setAccountOpen((o) => !o)}
            aria-label="Аккаунт"
            aria-expanded={accountOpen}
          >
            <Avatar name={user?.displayName ?? user?.username ?? ''} size={34} />
          </button>

          {accountOpen && (
            <div className={styles.accountDropdown}>
              <div className={styles.accountInfo}>
                <span className={styles.accountName}>
                  {user?.displayName ?? user?.username}
                </span>
                <span className={styles.accountEmail}>{user?.email}</span>
              </div>
              <div className={styles.divider} />
              <button
                className={styles.accountItem}
                onClick={() => {
                  setAccountOpen(false)
                  navigate(
                    user?.role === 'teacher'
                      ? ROUTES.TEACHER.SETTINGS
                      : ROUTES.STUDENT.SETTINGS,
                  )
                }}
              >
                Настройки
              </button>
              <div className={styles.divider} />
              <button
                className={`${styles.accountItem} ${styles['accountItem--danger']}`}
                onClick={logout}
              >
                Выйти
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
