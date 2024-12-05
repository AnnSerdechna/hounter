import {forwardRef, ForwardRefExoticComponent, RefAttributes, RefObject} from 'react'
import {Avatar, Card, Carousel, Col, Typography} from 'antd'
import {CarouselRef} from 'antd/lib/carousel'

import {FeaturedHouseDataProps} from './featuredHouseData'
import {CategoryTag} from './CategoryTag'

import './index.less'

const settings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  swipeToSlide: true,
  draggable: true,
  dots: false,
  infinite: true,
}

type CarouselProps = Pick<{ data: FeaturedHouseDataProps[]; ref: RefObject<CarouselRef> }, "data" > & RefAttributes<CarouselRef>

type FeaturedHouseCarouselProps = ForwardRefExoticComponent<CarouselProps>

const FeaturedHouseCarousel: FeaturedHouseCarouselProps = forwardRef(function FeaturedHouseCarousel(
  { data = [] }, 
  ref
) {
    return (
      <Carousel
        ref={ref}
        arrows={true}
        style={{width: 1500, height: '80vh'}}
        {...settings}
      >
        {data.map(it => (
          <Col 
            key={it.id} 
            style={{marginRight: 10}} 
            className={'card'}
          >
            <Col className={'card-image-wrap'}>
              <Col
                style={{backgroundImage: `url(${it.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain', height: 382}}
              />
              <CategoryTag category={it.category} />
            </Col>
            <Col className={'card-info'}>
              <Typography.Title className={'card-info-title'}>
                {it.homeName}
              </Typography.Title>
              <Typography.Text className={'card-info-price'}>
                {it.price}
              </Typography.Text>
            </Col>
            <Card bordered={false} style={{boxShadow: 'none'}}>
              <Card.Meta
                avatar={<Avatar shape={'circle'} src={it.agentPhoto} size={40} />}
                title={it.agentName}
                description={it.location}
              />
            </Card>
          </Col>
        ))}
      </Carousel>
    )
})

export { FeaturedHouseCarousel }
