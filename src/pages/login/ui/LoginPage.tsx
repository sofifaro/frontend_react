import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo, Input, Button } from '@shared/ui'
import { useLogin } from '@features/auth'
import { ROUTES } from '@shared/config'
import styles from './LoginPage.module.css'

export function LoginPage() {
  const { login, loading, error } = useLogin()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    login({ username, password })
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <Logo size="md" />
        </div>

        <div className={styles.head}>
          <h1 className={styles.title}>Добро пожаловать</h1>
          <p className={styles.sub}>Войдите в свой аккаунт</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <Input
            label="Имя пользователя"
            placeholder="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            label="Пароль"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className={styles.error} role="alert">{error}</p>}

          <Button
            type="submit"
            fullWidth
            loading={loading}
            size="lg"
          >
            Войти
          </Button>
        </form>

        <p className={styles.footer}>
          Нет аккаунта?{' '}
          <Link to={ROUTES.REGISTER} className={styles.link}>
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  )
}
