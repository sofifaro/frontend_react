import { useUserStore } from '@entities/user'
import styles from './stubs.module.css'

export function TeacherDashboardPage() {
  const user = useUserStore((s) => s.user)

  return (
    <div className={styles.wrap}>
      <div className={styles.greeting}>
        <h1 className={styles.title}>
          Добрый день, {user?.displayName ?? user?.username} 
        </h1>
        <p className={styles.sub}>Обзор вашей активности и курсов</p>
      </div>

      <div className={styles.statsRow}>
        <StatCard label="Активных курсов" value="—" />
        <StatCard label="Учеников" value="—" />
        <StatCard label="Доход за месяц" value="—" />
      </div>

      <Placeholder title="Последние события" />
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.statCard}>
      <span className={styles.statLabel}>{label}</span>
      <span className={styles.statValue}>{value}</span>
    </div>
  )
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className={styles.placeholder}>
      <p className={styles.placeholderTitle}>{title}</p>
      <div className={styles.placeholderBox}>
        <span className={styles.placeholderHint}>Ожидаем бэкенд ._.</span>
      </div>
    </div>
  )
}
