import styles from './stubs.module.css'

export function TeacherStudentsPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.greeting}>
        <h1 className={styles.title}>Ученики</h1>
        <p className={styles.sub}>Просматривайте успеваемость и прогресс учеников</p>
      </div>
      <div className={styles.placeholder}>
        <div className={styles.placeholderBox}>
          <span className={styles.placeholderHint}>
            Здесь будет список ваших учеников (наверное)
          </span>
        </div>
      </div>
    </div>
  )
}
