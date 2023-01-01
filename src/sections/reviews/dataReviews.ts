import House1 from '../../images/reviews/house-1.png'
import House2 from '../../images/reviews/house-2.png'
import House3 from '../../images/reviews/house-3.png'
import House4 from '../../images/reviews/house-4.png'
import House5 from '../../images/reviews/house-5.png'

interface ReviewsProps {
  id: number
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
    id: 1,
    picture: House1,
    title: 'Best! I got the house I wanted through Hounter',
    review: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
    userName: 'Dianne Russell',
    userPosition: 'Manager Director',
    userAvatar: 'https://ychef.files.bbci.co.uk/976x549/p0dnxrcv.jpg',
    rating: 4.6
  },
  {
    id: 2,
    picture: House2,
    title: 'My house sold out fast!',
    review: 'I was finally able to ready-to-sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!',
    userName: 'Courtney Henry',
    userPosition: 'CEO Andarafish',
    userAvatar: 'https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg',
    rating: 4.8
  },
  {
    id: 3,
    picture: House3,
    title: 'Through the Hounter, I can get a house for my self',
    review: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
    userName: 'Esther Howard',
    userPosition: 'Head of Marketing',
    userAvatar: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg?quality=75&width=982&height=726&auto=webp',
    rating: 4.2
  },
  {
    id: 4,
    picture: House4,
    title: 'I got the house I wanted through Hounter',
    review: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
    userName: 'Michael Fox',
    userPosition: 'Consulting Associate',
    userAvatar: 'https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?b=1&s=612x612&w=0&k=20&c=r6yIXD9qE6vwqcg3-5iIxL6v3O_lV75oLpDTDQn-o8Y=',
    rating: 4.1
  },
  {
    id: 5,
    picture: House5,
    title: 'Family house',
    review: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
    userName: 'Elon musk',
    userPosition: 'CEO Space X',
    userAvatar: 'https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg',
    rating: 4.9
  },
]
