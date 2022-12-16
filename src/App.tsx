import { FC } from 'react'

import { Reviews } from './sections'
import {Articles} from "./sections/articles";

const App: FC = () => {
  return (
    <>
      <Reviews />
      <Articles />
    </>
  )
}

export default App
