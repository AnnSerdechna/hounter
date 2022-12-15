import { FC } from 'react'

import { reviews } from './dataReviews'
import { ReviewCard } from './review-card'
import { Carousel } from '../../carousel'

const Reviews: FC = () => (
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
)

export { Reviews }
