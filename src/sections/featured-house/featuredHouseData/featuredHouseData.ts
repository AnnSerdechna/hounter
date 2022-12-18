import Home1 from '../../../images/featured-house/house1.png'
import Home2 from '../../../images/featured-house/house2.png'
import Home3 from '../../../images/featured-house/house3.png'
import Home4 from '../../../images/featured-house/house4.png'
import Home5 from '../../../images/featured-house/house5.png'
import Home6 from '../../../images/featured-house/house6.png'

export type FeaturesProps = {
  id: number
  image: string
  homeName: string
  price: string
  agentPhoto: string
  agentName: string
  location: string
}

export const homesData: FeaturesProps[] = [
  {
    id: 1,
    image: Home1,
    homeName: 'Roselands House',
    price: '$ 35.000.000',
    agentPhoto: '',
    agentName: 'Dianne Russell',
    location: 'Manchester, Kentucky'
  },
  {
    id: 2,
    image: Home2,
    homeName: 'Woodlandside',
    price: '$ 20.000.000',
    agentPhoto: '',
    agentName: 'Robert Fox',
    location: 'Dr. San Jose, South Dakota'
  },
  {
    id: 3,
    image: Home3,
    homeName: 'The Old Lighthouse',
    price: '$ 44.000.000',
    agentPhoto: '',
    agentName: 'Ronald Richards',
    location: 'Santa Ana, Illinois'
  },
  {
    id: 4,
    image: Home4,
    homeName: 'Cosmo\'s House',
    price: '$ 22.000.000',
    agentPhoto: '',
    agentName: 'Jenny Wilson',
    location: 'Preston Rd. Inglewood, Maine 98380'
  },
  {
    id: 5,
    image: Home5,
    homeName: 'Roselands House',
    price: '$ 35.000.000',
    agentPhoto: '',
    agentName: 'Dianne Russell',
    location: 'Manchester, Kentucky'
  },
  {
    id: 6,
    image: Home6,
    homeName: 'Woodlandside',
    price: '$ 20.000.000',
    agentPhoto: '',
    agentName: 'Robert Fox',
    location: 'Dr. San Jose, South Dakota'
  },
]
