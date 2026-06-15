import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from '@shared/lib'
import styles from './Button.module.css'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles.btn,
          styles[`btn--${variant}`],
          styles[`btn--${size}`],
          fullWidth && styles['btn--full'],
          className,
        )}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? <span className={styles.spinner} aria-hidden /> : null}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
