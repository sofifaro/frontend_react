import { useNavigate } from 'react-router-dom'
import { Logo, Button } from '@shared/ui'
import { APP_NAME, APP_TAGLINE, ROUTES } from '@shared/config'
import styles from './LandingPage.module.css'

export function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      {/* ── Public header ── */}
      <header className={styles.header}>
        <Logo size="md" />
        <nav className={styles.nav}>
          <Button variant="ghost" size="sm" onClick={() => navigate(ROUTES.LOGIN)}>
            Войти
          </Button>
          <Button variant="primary" size="sm" onClick={() => navigate(ROUTES.REGISTER)}>
            Регистрация
          </Button>
        </nav>
      </header>

      {/* ── Hero ── */}
      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Образовательная платформа</p>
          <h1 className={styles.title}>{APP_NAME}</h1>
          <p className={styles.tagline}>{APP_TAGLINE}</p>

          <div className={styles.actions}>
            <Button size="lg" onClick={() => navigate(ROUTES.REGISTER)}>
              Начать обучение
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate(ROUTES.LOGIN)}>
              Войти в аккаунт
            </Button>
          </div>
        </div>

        {/* Decorative grid mark */}
        <div className={styles.decoration} aria-hidden>
          <div className={styles.grid} />
        </div>
      </main>
    </div>
  )
}
