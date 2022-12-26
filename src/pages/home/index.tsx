import { FC } from 'react'
import {
  Articles,
  FeaturedHouse,
  ReadyToSell,
  Reviews
} from '../../sections'

const Home: FC = () => (
  <>
    <ReadyToSell />
    <FeaturedHouse />
    <Reviews />
    <Articles />
  </>
)

export { Home as default }
