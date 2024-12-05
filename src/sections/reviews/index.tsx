import { FC } from 'react'

import { reviews } from './dataReviews'
import { ReviewCard } from './review-card'
import { Carousel, Section, SectionTitleBlock } from '../../components'
import './index.less'

const settings = {
  className: 'center reviews-carousel',
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2.31,
  draggable: true,
};


const Reviews: FC = () => (
  <Section maxWidth={'100%'}>
    <SectionTitleBlock
      sectionName={'See Our Review'}
      title={'What Our User Say About Us'}
    />

    <Carousel {...settings}>
      {reviews.map((item) => (
        <ReviewCard
          {...settings}
          key={item.id}
          src={item.picture}
          title={item.title}
          review={item.review}
          userName={item.userName}
          userPosition={item.userPosition}
          userAvatar={item.userAvatar}
          rating={item.rating}
        />
      ))}
    </Carousel>
  </Section>
)

export { Reviews }
