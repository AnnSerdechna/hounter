import {FC, PropsWithChildren} from 'react';
import {Carousel as CustomCarousel, CarouselProps} from 'antd';
import './index.less'

const settings = {
  className: 'cemter',
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2.31,
  draggable: true,
};

const Carousel: FC<PropsWithChildren<CarouselProps>> = ({ children }) => (
  <CustomCarousel {...settings}>
    {children}
  </CustomCarousel>
)

export { Carousel }
