import { APP_NAME } from '@shared/config'
import styles from './Logo.module.css'
import { clsx } from '@shared/lib'

interface LogoProps {
  onClick?: () => void
  light?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ onClick, light = false, size = 'md' }: LogoProps) {
  const Tag = onClick ? 'button' : 'span'

  return (
    <Tag
      onClick={onClick}
      className={clsx(styles.logo, styles[`logo--${size}`], light && styles['logo--light'])}
      aria-label={APP_NAME}
    >
      {/* Geometric mark: two overlapping squares — "S" shape abstracted */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className={styles.mark}
      >
        <rect x="2" y="2" width="14" height="14" rx="3" fill="currentColor" opacity="1" />
        <rect x="12" y="12" width="14" height="14" rx="3" fill="currentColor" opacity="0.4" />
      </svg>
      <span className={styles.wordmark}>{APP_NAME}</span>
    </Tag>
  )
}
