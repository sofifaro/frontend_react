import { NavLink } from 'react-router-dom'
import { clsx } from '@shared/lib'
import styles from './Sidebar.module.css'

export interface NavItem {
  to: string
  label: string
  icon: React.ReactNode
}

interface SidebarProps {
  items: NavItem[]
  open?: boolean
  onClose?: () => void
}

export function Sidebar({ items, open = true, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className={styles.backdrop}
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside className={clsx(styles.sidebar, open && styles['sidebar--open'])}>
        <nav className={styles.nav} aria-label="Основное меню">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                clsx(styles.navItem, isActive && styles['navItem--active'])
              }
              onClick={onClose}
            >
              <span className={styles.icon} aria-hidden>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
