import { FC, SVGProps } from 'react'

import { ReactComponent as Logo } from './images/logo.svg'
import { ReactComponent as Facebook } from './images/facebook.svg'
import { ReactComponent as Twitter } from './images/twitter.svg'
import { ReactComponent as Instagram } from './images/instagram.svg'

import { ReactComponent as Star } from './images/star.svg'
import { ReactComponent as Clock } from './images/clock.svg'
import { ReactComponent as NextArrow } from './images/arrow-next.svg'

import { ReactComponent as Bed } from './images/bed.svg'
import { ReactComponent as Bath } from './images/bath.svg'
import { ReactComponent as Car } from './images/car.svg'
import { ReactComponent as Floors } from './images/floors.svg'
import { ReactComponent as Phone } from './images/phone.svg'

import { ReactComponent as Home } from './images/home.svg'
import { ReactComponent as Villa } from './images/villa.svg'
import { ReactComponent as Apartment } from './images/apartment.svg'

export type IconTypes =
  | 'logo'
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
  | 'home'
  | 'villa'
  | 'apartment'
  | string

const icons: {
  [key: string]: FC<SVGProps<SVGSVGElement>>
} = {
  logo: Logo,
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
  home: Home,
  villa: Villa,
  apartment: Apartment,
} as const

type SvgIconProps = SVGProps<SVGSVGElement> & { type: IconTypes }

const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null
  return Icon && <Icon {...svgProps} />
}
export { SvgIcon }
