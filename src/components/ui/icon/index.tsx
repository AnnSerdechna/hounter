import { FC, SVGProps } from 'react'

import { ReactComponent as Logo } from './images/logo.svg'
import { ReactComponent as Facebook } from './images/facebook.svg'
import { ReactComponent as Twitter } from './images/twitter.svg'
import { ReactComponent as Instagram } from './images/instagram.svg'

import { ReactComponent as Star } from './images/star.svg'
import { ReactComponent as Email } from './images/email.svg'
import { ReactComponent as Clock } from './images/clock.svg'
import { ReactComponent as NextArrow } from './images/arrow-next.svg'
import { ReactComponent as Location } from './images/location.svg'

import { ReactComponent as Bed } from './images/bed.svg'
import { ReactComponent as Bath } from './images/bath.svg'
import { ReactComponent as Car } from './images/car.svg'
import { ReactComponent as Floors } from './images/floors.svg'
import { ReactComponent as Phone } from './images/phone.svg'

import { ReactComponent as House } from './images/house.svg'
import { ReactComponent as Villa } from './images/villa.svg'
import { ReactComponent as Apartment } from './images/apartment.svg'
import { ReactComponent as Popular } from './images/popular.svg'
import { ReactComponent as BestDeals } from './images/best-deals.svg'

export type IconTypes =
  | 'logo'
  | 'email'
  | 'location'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'star'
  | 'clock'
  | 'nextArrow'
  | 'bed'
  | 'bath'
  | 'car'
  | 'floors'
  | 'phone'
  | 'house'
  | 'villa'
  | 'apartment'
  | 'popular'
  | 'bestDeals'
  | string

const icons: {
  [key: string]: FC<SVGProps<SVGSVGElement>>
} = {
  logo: Logo,
  email: Email,
  location: Location,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  star: Star,
  clock: Clock,
  nextArrow: NextArrow,
  bed: Bed,
  car: Car,
  bath: Bath,
  floors: Floors,
  phone: Phone,
  house: House,
  villa: Villa,
  apartment: Apartment,
  popular: Popular,
  bestDeals: BestDeals,
} as const

type SvgIconProps = SVGProps<SVGSVGElement> & { type: IconTypes }

const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null
  return Icon && <Icon {...svgProps} />
}
export { SvgIcon }
