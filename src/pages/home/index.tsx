import { FC } from 'react'
import {
  Articles,
  FeaturedHouse,
  Hero,
  ReadyToSell,
  Reviews,
} from '../../sections'

const Home: FC = () => (
  <>
    <Hero />
    <FeaturedHouse />
    <ReadyToSell />
    <Reviews />
    <Articles />
  </>
)

export { Home as default }
