import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo, Input, Button } from '@shared/ui'
import { useRegister } from '@features/auth'
import { ROLES, ROUTES, type UserRole } from '@shared/config'
import { clsx } from '@shared/lib'
import styles from './RegisterPage.module.css'

export function RegisterPage() {
  const { register, loading, error } = useRegister()

  const [role, setRole] = useState<UserRole>(ROLES.STUDENT)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    register({ username, email, password, role })
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <Logo size="md" />
        </div>

        <div className={styles.head}>
          <h1 className={styles.title}>Создать аккаунт</h1>
          <p className={styles.sub}>Присоединяйтесь к платформе</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Role selector */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Я регистрируюсь как</legend>
            <div className={styles.roleGroup}>
              <button
                type="button"
                className={clsx(
                  styles.roleBtn,
                  role === ROLES.STUDENT && styles['roleBtn--active'],
                )}
                onClick={() => setRole(ROLES.STUDENT)}
                aria-pressed={role === ROLES.STUDENT}
              >
                <span className={styles.roleIcon} aria-hidden>🎓</span>
                <span className={styles.roleLabel}>Ученик</span>
                <span className={styles.roleHint}>Прохожу курсы</span>
              </button>

              <button
                type="button"
                className={clsx(
                  styles.roleBtn,
                  role === ROLES.TEACHER && styles['roleBtn--active'],
                )}
                onClick={() => setRole(ROLES.TEACHER)}
                aria-pressed={role === ROLES.TEACHER}
              >
                <span className={styles.roleIcon} aria-hidden>📖</span>
                <span className={styles.roleLabel}>Учитель</span>
                <span className={styles.roleHint}>Создаю курсы</span>
              </button>
            </div>
          </fieldset>

          <Input
            label="Имя пользователя"
            placeholder="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Пароль"
            type="password"
            placeholder="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            hint="Не менее 8 символов"
            required
          />

          {error && <p className={styles.error} role="alert">{error}</p>}

          <Button
            type="submit"
            fullWidth
            loading={loading}
            size="lg"
          >
            Создать аккаунт
          </Button>
        </form>

        <p className={styles.footer}>
          Уже есть аккаунт?{' '}
          <Link to={ROUTES.LOGIN} className={styles.link}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}
