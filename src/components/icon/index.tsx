import { FC, SVGProps } from 'react'

import { ReactComponent as Logo } from './images/logo.svg'
import { ReactComponent as Facebook } from './images/facebook.svg'
import { ReactComponent as Twitter } from './images/twitter.svg'
import { ReactComponent as Instagram } from './images/instagram.svg'

import { ReactComponent as Star } from './images/star.svg'

export type IconTypes =
  | 'logo'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'star'

const icons: {
  [key: string]: FC<SVGProps<SVGSVGElement>>
} = {
  logo: Logo,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  star: Star,
} as const

type SvgIconProps = SVGProps<SVGSVGElement> & { type: IconTypes }

const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null
  return Icon && <Icon {...svgProps} />
}
export { SvgIcon }
