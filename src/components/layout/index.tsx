

import React, { FC, memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import {Footer} from "../../sections";

const DefaultLayout: FC = () => (
  // <Layout className={'default'}>
  //   <Layout.Header>
  //     <Header renderMenu={() => <Navigation mode={'horizontal'} items={headerMenu} />} />
  //   </Layout.Header>
  <>
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
    <Footer />
  </>
)

export {DefaultLayout}
