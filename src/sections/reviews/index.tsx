import { FC } from 'react'

import { reviews } from './dataReviews'
import { ReviewCard } from './review-card'
import { Carousel, SectionComponent, SectionTitleBlock } from '../../components'

const Reviews: FC = () => (
  <SectionComponent>
    <SectionTitleBlock
      sectionName={'See Our Review'}
      title={'What Our User Say About Us'}
    />

    <Carousel>
      {reviews.map(({ picture, title, review, userName, userPosition, userAvatar, rating }) => (
        <ReviewCard
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
