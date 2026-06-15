import styles from './stubs.module.css'

export function StudentCoursesPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.greeting}>
        <h1 className={styles.title}>Мои курсы</h1>
        <p className={styles.sub}>Курсы, на которые вы записаны</p>
      </div>
      <div className={styles.placeholder}>
        <div className={styles.placeholderBox}>
          <span className={styles.placeholderHint}>
            Здесь будут ваши курсы
          </span>
        </div>
      </div>
    </div>
  )
}
