import { FC } from 'react'

import {Reviews, Articles, ReadyToSell, FeaturedHouse} from './sections'

const App: FC = () => {
  return (
    <>
      <ReadyToSell />
      <FeaturedHouse />
      <Reviews />
      <Articles />
    </>
  )
}

export default App
