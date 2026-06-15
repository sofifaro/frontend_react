import styles from './Avatar.module.css'
import { clsx } from '@shared/lib'

interface AvatarProps {
  name?: string
  src?: string
  size?: number
  className?: string
}

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

// Deterministic hue from name
function getHue(name = '') {
  let hash = 0
  for (const ch of name) hash = ch.charCodeAt(0) + ((hash << 5) - hash)
  return Math.abs(hash) % 360
}

export function Avatar({ name = '', src, size = 36, className }: AvatarProps) {
  const hue = getHue(name)
  const style = {
    width: size,
    height: size,
    fontSize: size * 0.38,
    background: src ? undefined : `hsl(${hue}, 60%, 88%)`,
    color: `hsl(${hue}, 50%, 30%)`,
  }

  return (
    <span
      className={clsx(styles.avatar, className)}
      style={style}
      aria-label={name}
      title={name}
    >
      {src ? (
        <img src={src} alt={name} className={styles.img} />
      ) : (
        <span className={styles.initials}>{getInitials(name)}</span>
      )}
    </span>
  )
}
