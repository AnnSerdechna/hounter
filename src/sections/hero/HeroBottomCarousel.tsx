import {Avatar, Card, Col, Row} from 'antd'
import {FC, ReactNode} from 'react'

import './HeroBottomCarousel.less'
import {CardMetaProps} from 'antd/es/card'
import {Carousel} from '../../components/ui'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2.8,
  slidesToScroll: 1,
  dots: false,
  draggable: true,
  swipe: true,
  autoplay: true,
}

const CardComponent: FC<CardMetaProps> = ({ title, description, avatar }) => (
  <Col>
    <Card bordered={false}>
      <Card.Meta
        title={title}
        description={description}
        avatar={<Avatar src={avatar} size={56} />}
      />
    </Card>
  </Col>
)

const data: { id: number, title: string, description: string, avatar: ReactNode }[] = [
  {
    id: 1,
    title: '1K+ People',
    description: 'Successfully Getting Home',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    id: 2,
    title: '56 Houses',
    description: 'Sold Monthly',
    avatar: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 3,
    title: '4K+',
    description: 'People Looking for New Homes',
    avatar: 'https://media.istockphoto.com/id/1007763808/photo/portrait-of-handsome-latino-african-man.jpg?s=612x612&w=0&k=20&c=XPL1ukeC99OY8HBfNa_njDujOPf9Xz4yCEOo7O3evU0=',
  },
]

const HeroBottomCarousel: FC = () => (
  <Row justify={'end'} className={'hero-carousel'}>
    <Col span={12}>
      <Carousel {...settings}>
        {data.map(it => (
          <CardComponent
            key={it.id}
            title={it.title}
            description={it.description}
            avatar={<Avatar size={56} src={it.avatar} />}
          />
        ))}
      </Carousel>
    </Col>
  </Row>
)

export { HeroBottomCarousel }
