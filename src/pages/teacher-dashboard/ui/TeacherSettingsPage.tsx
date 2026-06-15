import styles from './stubs.module.css'

export function TeacherSettingsPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.greeting}>
        <h1 className={styles.title}>Настройки</h1>
        <p className={styles.sub}>Управляйте профилем и параметрами аккаунта</p>
      </div>
      <div className={styles.placeholder}>
        <div className={styles.placeholderBox}>
          <span className={styles.placeholderHint}>
            Здесь будут настройки профиля и аккаунта
          </span>
        </div>
      </div>
    </div>
  )
}
