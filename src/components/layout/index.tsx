import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import {Header, Footer} from '../../sections'

const DefaultLayout: FC = () => (
  <>
    <Header />
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
    <Footer />
  </>
)

export {DefaultLayout}
