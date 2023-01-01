import { FC } from 'react'
import {
  Articles,
  FeaturedHouse,
  Hero,
  ReadyToSell,
  Reviews,
  SubscribeNow,
} from '../../sections'

const Home: FC = () => (
  <>
    <Hero />
    <FeaturedHouse />
    <ReadyToSell />
    <Reviews />
    <Articles />
    <SubscribeNow />
  </>
)

export { Home as default }
