import Avatar1 from '../../images/avatar/ava1.png'
import Avatar2 from '../../images/avatar/ava7.png'
import Avatar3 from '../../images/avatar/ava8.png'
import Avatar4 from '../../images/avatar/ava4.png'
import Avatar5 from '../../images/avatar/ava10.jpg'
import House1 from '../../images/reviews/house-1.png'
import House2 from '../../images/reviews/house-2.png'
import House3 from '../../images/reviews/house-3.png'
import House4 from '../../images/reviews/house-4.png'
import House5 from '../../images/reviews/house-5.png'

interface ReviewsProps {
  picture: string
  title: string
  review: string
  userName: string
  userPosition: string
  userAvatar: string
  rating: number
}

export const reviews: ReviewsProps[] = [
  {
    picture: House1,
    title: 'Best! I got the house I wanted through Hounter',
    review: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
    userName: 'Dianne Russell',
    userPosition: 'Manager Director',
    userAvatar: Avatar1,
    rating: 4.6
  },
  {
    picture: House2,
    title: 'My house sold out fast!',
    review: 'I was finally able to ready-to-sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!',
    userName: 'Courtney Henry',
    userPosition: 'CEO Andarafish',
    userAvatar: Avatar2,
    rating: 4.8
  },
  {
    picture: House3,
    title: 'Through the Hounter, I can get a house for my self',
    review: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
    userName: 'Esther Howard',
    userPosition: 'Head of Marketing',
    userAvatar: Avatar3,
    rating: 4.2
  },
  {
    picture: House4,
    title: 'I got the house I wanted through Hounter',
    review: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
    userName: 'Michael Fox',
    userPosition: 'Consulting Associate',
    userAvatar: Avatar4,
    rating: 4.1
  },
  {
    picture: House5,
    title: 'Family house',
    review: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
    userName: 'Elon musk',
    userPosition: 'CEO Space X',
    userAvatar: Avatar5,
    rating: 4.9
  },
]
