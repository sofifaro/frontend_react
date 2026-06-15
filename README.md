# SEHRIYO — Frontend

Архитектура **Feature Sliced Design (FSD)**.

---

## Описание архитектуры

UI (pages) → widgets → features → entities → shared

| Слой | Назначение |
|---|---|
| `app` | Инициализация: провайдеры, роутер, глобальные стили |
| `pages` | Композиция виджетов и фич в полноценный экран |
| `widgets` | Самодостаточные блоки UI (Header, Sidebar, AppShell) |
| `features` | Сценарии пользователя: auth, notifications |
| `entities` | Доменные модели и их хранилища (User, Course) |
| `shared` | Переиспользуемое без бизнес-логики: UI-kit, API, утилиты |

---

## Старт

```bash
npm install
npm run dev
```

---

## Структура проекта

```
src/
├── app/                        # Инициализация приложения
│   ├── App.tsx                 # Корневой компонент
│   ├── providers/              # Провайдеры (Router, будущие: QueryClient, Theme)
│   ├── router/
│   │   ├── AppRouter.tsx       # Декларация всех маршрутов
│   │   ├── guards/             # RequireAuth, RequireRole, RedirectIfAuth
│   │   └── config/             # Конфиги навигации по ролям
│   └── styles/                 # Глобальный CSS-entry
│
├── pages/                      # Страницы 
│   ├── landing/                # Главная (публичная)
│   ├── login/                  # Страница входа
│   ├── register/               # Страница регистрации
│   ├── teacher-dashboard/      # Дашборд учителя (курсы, ученики, настройки)
│   └── student-dashboard/      # Дашборд ученика (курсы, настройки)
│
├── widgets/                    # Самодостаточные блоки UI
│   ├── header/                 # Топбар (логотип, уведомления, аккаунт)
│   ├── sidebar/                # Сайдбар 
│   └── app-shell/              # Layout-обёртка: sidebar + header + <Outlet>
│
├── features/                   # Бизнес-действия пользователя
│   ├── auth/                   # login, register, logout + API
│   └── notifications/          # Список уведомлений + колокольчик
│
├── entities/                   # Доменные модели
│   ├── user/                   # Тип User + сессии
│   └── course/                 # Тип Course
│
└── shared/                     # Переиспользуемое без бизнес-логики
    ├── api/                    # Axios-инстанс с interceptors
    ├── config/                 # Константы: ROUTES, ROLES, APP_NAME
    ├── lib/                    # Утилиты (clsx)
    └── ui/                     # Дизайн-система
        ├── Button/
        ├── Input/
        ├── Logo/
        ├── Avatar/
        └── styles/             # tokens.css + reset.css
```        
---        