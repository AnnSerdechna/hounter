import { FC } from 'react'

import {Reviews, Articles, ReadyToSell, FeaturedHouse, Footer} from './sections'

const App: FC = () => {
  return (
    <>
      <ReadyToSell />
      <FeaturedHouse />
      <Reviews />
      <Articles />
      <Footer />
    </>
  )
}

export default App
