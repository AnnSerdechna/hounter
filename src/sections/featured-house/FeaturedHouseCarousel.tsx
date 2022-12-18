import {forwardRef, ForwardRefExoticComponent, RefAttributes, RefObject} from 'react'
import {Avatar, Card, Carousel, Col, Image, Typography} from 'antd'
import {CarouselRef} from 'antd/lib/carousel'

import {FeaturesProps} from './featuredHouseData/dataType'
import {CategoryTag} from "./CategoryTag";

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

const FeaturedHouseCarousel:
  ForwardRefExoticComponent<Pick<{ data: FeaturesProps[]; ref: RefObject<CarouselRef>}, "data"> & RefAttributes<CarouselRef>> =
  forwardRef(function FeaturedHouseCarousel({ data = [] }, ref) {
    return (
      <Carousel
        ref={ref}
        arrows={true}
        style={{width: 1500}}
        {...settings}
      >
        {data.map(it => (
          <Col key={it.id} style={{marginRight: 10}} className={'card'}>
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
