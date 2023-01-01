import { FC } from 'react'

import { reviews } from './dataReviews'
import { ReviewCard } from './review-card'
import { Carousel, SectionComponent, SectionTitleBlock } from '../../components'

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2.31,
  draggable: true,
};


const Reviews: FC = () => (
  <SectionComponent maxWidth={'100%'}>
    <SectionTitleBlock
      sectionName={'See Our Review'}
      title={'What Our User Say About Us'}
    />

    <Carousel {...settings}>
      {reviews.map(({ id, picture, title, review, userName, userPosition, userAvatar, rating }) => (
        <ReviewCard
          {...settings}
          key={id}
          src={picture}
          title={title}
          review={review}
          userName={userName}
          userPosition={userPosition}
          userAvatar={userAvatar}
          rating={rating}
        />
      ))}
    </Carousel>
  </SectionComponent>
)

export { Reviews }
