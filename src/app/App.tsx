import { RouterProvider } from './providers'
import { AppRouter } from './router'
import './styles/index.css'

export function App() {
  return (
    <RouterProvider>
      <AppRouter />
    </RouterProvider>
  )
}
