import { FC, PropsWithChildren } from 'react'
import { Carousel as CustomCarousel, CarouselProps } from 'antd'

import './index.less'

const Carousel: FC<PropsWithChildren<CarouselProps>> = ({ children, ...props }) => (
  <CustomCarousel {...props}>
    {children}
  </CustomCarousel>
)

export { Carousel }
