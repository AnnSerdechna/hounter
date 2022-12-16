import ArticleImage1 from '../../images/articles/article1.png'
import ArticleImage2 from '../../images/articles/article2.png'
import ArticleImage3 from '../../images/articles/article3.png'
import ArticleImage4 from '../../images/articles/article4.png'

import Avatar1 from '../../images/avatar/ava1.png'
import Avatar2 from '../../images/avatar/ava3.png'
import Avatar3 from '../../images/avatar/ava6.png'
import Avatar4 from '../../images/avatar/ava4.png'

export interface ArticlesProps {
  id?: number | undefined
  title: string
  description?: string | undefined
  authorName: string
  authorAvatar: string
  timeToRead: string
  releaseDate: string
  articleImage: string
}

export const articlesData: ArticlesProps[] = [
  {
    id: 1,
    title: 'The things we need to check when we want to buy a house',
    authorName: 'Dianne Russell',
    authorAvatar: Avatar1,
    timeToRead: '4',
    releaseDate: '24 Apr 2021',
    articleImage: ArticleImage1,
  },
  {
    id: 2,
    title: '7 Ways to distinguish the quality of the house we want to buy',
    authorName: 'Courtney Henry',
    authorAvatar: Avatar4,
    timeToRead: '6',
    releaseDate: '24 Apr 2021',
    articleImage: ArticleImage2,
  },
  {
    id: 3,
    title: 'The best way to know the quality of the house we want to buy',
    authorName: 'Darlene Robertson',
    authorAvatar: Avatar2,
    timeToRead: '2',
    releaseDate: '24 Apr 2021',
    articleImage: ArticleImage3,
  },
  {
    id: 4,
    title: '12 Things to know before buying a house',
    description: 'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house',
    authorName: 'Cameron Williamson',
    authorAvatar: Avatar3,
    timeToRead: '8',
    releaseDate: '24 Apr 2021',
    articleImage: ArticleImage4,
  },
]
