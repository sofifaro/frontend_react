import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@widgets/header'
import { Sidebar, type NavItem } from '@widgets/sidebar'
import styles from './AppShell.module.css'

interface AppShellProps {
  navItems: NavItem[]
}

export function AppShell({ navItems }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={styles.shell}>
      <Sidebar
        items={navItems}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className={styles.body}>
        <Header onMenuToggle={() => setSidebarOpen((o) => !o)} />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
