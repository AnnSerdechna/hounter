import { FC } from 'react'
import {
  Articles,
  FeaturedHouse,
  ReadyToSell,
  Reviews
} from '../../sections'

const Home: FC = () => (
  <>
    <FeaturedHouse />
    <ReadyToSell />
    <Reviews />
    <Articles />
  </>
)

export { Home as default }
