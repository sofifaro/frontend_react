import { useUserStore } from '@entities/user'
import styles from './stubs.module.css'

export function StudentDashboardPage() {
  const user = useUserStore((s) => s.user)

  return (
    <div className={styles.wrap}>
      <div className={styles.greeting}>
        <h1 className={styles.title}>
          Привет, {user?.displayName ?? user?.username} 
        </h1>
        <p className={styles.sub}>Продолжайте обучение с того места, где остановились</p>
      </div>

      <div className={styles.statsRow}>
        <StatCard label="Активных курсов" value="—" />
        <StatCard label="Завершено уроков" value="—" />
        <StatCard label="Дней подряд" value="—" />
      </div>

      <Placeholder title="Продолжить обучение" />
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
        <span className={styles.placeholderHint}>
          Данные появятся после бэка:3
        </span>
      </div>
    </div>
  )
}
