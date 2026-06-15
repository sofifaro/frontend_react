import styles from './stubs.module.css'

export function TeacherCoursesPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.greeting}>
        <h1 className={styles.title}>Мои курсы</h1>
        <p className={styles.sub}>Управляйте своими курсами и материалами</p>
      </div>
      <div className={styles.placeholder}>
        <div className={styles.placeholderBox}>
          <span className={styles.placeholderHint}>
            Ждём бэк! ^-^
          </span>
        </div>
      </div>
    </div>
  )
}
