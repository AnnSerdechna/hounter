import { FC } from 'react'
import {RouterProvider} from 'react-router-dom'

import router from './pages'

const Pages: FC = ( )=> <RouterProvider router={router} />

const App: FC = () => {
  return (
    <Pages />
  )
}

export default App
