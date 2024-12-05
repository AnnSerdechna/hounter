import { FC, lazy } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { DefaultLayout } from '../components/layout'

const Home = lazy<FC>(() => import('./home'))

const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    path: '',
    children: [
      {
        element: <Home />,
        path: '',
        index: true,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}
export default router
