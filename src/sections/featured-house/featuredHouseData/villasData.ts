import {FeaturedHouseDataProps} from './dataType'
import Home1 from '../../../images/featured-house/villa1.png'
import Home2 from '../../../images/featured-house/villa2.png'
import Home3 from '../../../images/featured-house/villa3.png'
import Home4 from '../../../images/featured-house/villa4.png'
import Home5 from '../../../images/featured-house/villa5.png'
import Home6 from '../../../images/featured-house/villa6.png'

export const villasData: FeaturedHouseDataProps[] = [
  {
    id: 1,
    image: Home1,
    homeName: 'Roselands House',
    price: '$ 35.000.000',
    agentPhoto: 'https://assets.bizjournals.com/static/img/potm/marketing/team-success-img.jpg',
    agentName: 'Dianne Russell',
    location: 'Manchester, Kentucky',
    category: 'popular'
  },
  {
    id: 2,
    image: Home2,
    homeName: 'Woodlandside',
    price: '$ 20.000.000',
    agentPhoto: 'https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66-s1100-c50.jpg',
    agentName: 'Robert Fox',
    location: 'Dr. San Jose, South Dakota',
    category: 'new house'
  },
  {
    id: 3,
    image: Home3,
    homeName: 'The Old Lighthouse',
    price: '$ 44.000.000',
    agentPhoto: 'https://media.istockphoto.com/id/685132245/photo/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=OJk6U-oCZ31F3TGmarAAg2jVli8ZWTagAcF4P-kNIqA=',
    agentName: 'Ronald Richards',
    location: 'Santa Ana, Illinois',
    category: 'best deals'
  },
  {
    id: 4,
    image: Home4,
    homeName: 'Cosmo\'s House',
    price: '$ 22.000.000',
    agentPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    agentName: 'Jenny Wilson',
    location: 'Preston Rd. Inglewood, Maine 98380',
    category: 'popular'
  },
  {
    id: 5,
    image: Home5,
    homeName: 'Roselands House',
    price: '$ 35.000.000',
    agentPhoto: 'https://i.insider.com/5cb8b133b8342c1b45130629?width=700',
    agentName: 'Dianne Russell',
    location: 'Manchester, Kentucky',
    category: 'new house'
  },
  {
    id: 6,
    image: Home6,
    homeName: 'Woodlandside',
    price: '$ 20.000.000',
    agentPhoto: 'https://a.foxdcg.com/dpp-uploaded/images/credits/613267801b04f90020c6fabd/our_kind_of_people_lance_gross_2x.jpg?fit=inside%7C*:278',
    agentName: 'Robert Fox',
    location: 'Dr. San Jose, South Dakota',
    category: 'best deals'
  },
]
