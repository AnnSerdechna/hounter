import {FC, useRef, useState} from 'react'
import {Card, Col, Image, Row, Space, Tabs, Typography, Carousel} from 'antd'
import {CarouselRef} from 'antd/lib/carousel'

import {Button, SectionComponent, SectionTitleBlock, SvgIcon} from '../../components'
import Home1 from '../../images/featured-house/house1.png'
import Home2 from '../../images/featured-house/house2.png'
import Home3 from '../../images/featured-house/house3.png'
import Home4 from '../../images/featured-house/house4.png'
import Home5 from '../../images/featured-house/house5.png'
import Home6 from '../../images/featured-house/house6.png'
import './index.less'

type FeaturesProps = {
  image: string
  homeName: string
  price: string
  agentPhoto: string
  agentName: string
  location: string
}

const homes: FeaturesProps[] = [
  {
    image: Home1,
    homeName: 'Roselands House',
    price: '$ 35.000.000',
    agentPhoto: '',
    agentName: 'Dianne Russell',
    location: 'Manchester, Kentucky'
  },
  {
    image: Home2,
    homeName: 'Woodlandside',
    price: '$ 20.000.000',
    agentPhoto: '',
    agentName: 'Robert Fox',
    location: 'Dr. San Jose, South Dakota'
  },
  {
    image: Home3,
    homeName: 'The Old Lighthouse',
    price: '$ 44.000.000',
    agentPhoto: '',
    agentName: 'Ronald Richards',
    location: 'Santa Ana, Illinois'
  },
  {
    image: Home4,
    homeName: 'Cosmo\'s House',
    price: '$ 22.000.000',
    agentPhoto: '',
    agentName: 'Jenny Wilson',
    location: 'Preston Rd. Inglewood, Maine 98380'
  },
  {
    image: Home5,
    homeName: 'Roselands House',
    price: '$ 35.000.000',
    agentPhoto: '',
    agentName: 'Dianne Russell',
    location: 'Manchester, Kentucky'
  },
  {
    image: Home6,
    homeName: 'Woodlandside',
    price: '$ 20.000.000',
    agentPhoto: '',
    agentName: 'Robert Fox',
    location: 'Dr. San Jose, South Dakota'
  },
]

const FeaturedHouse: FC<{ children1?: any, children2?: any, children3?: any}> = ({ children1, children2, children3}) => {
  const [activeTab, setActiveTab] = useState('home')

  const onChange = (key: string) => {
    setActiveTab(key)
  };

  const carousel = useRef<CarouselRef>(null)

  console.log(carousel?.current)

  const handleNext = () => carousel?.current?.next()

  const handlePrev = () => carousel?.current?.prev()

  const settings = {
    centerMode: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <SectionComponent maxWidth={1200}>
      <Row className={'featured-house'}>
        <Col span={8} className={'featured-house-title-wrap'}>
          <SectionTitleBlock
            sectionName={'Our Recommendation'}
            title={'Featured House'}
            marginBottom={0}
            span={24}
            start
          />
        </Col>

        <Col span={24}>
          <Tabs
            defaultActiveKey={'home'}
            onChange={onChange}
            style={{borderBottom: 0}}
            centered
            items={[
              {
                label: (
                  <Button
                    text={'Home'}
                    type={activeTab === 'home' ? 'default' : 'ghost'}
                    icon={ <SvgIcon type={'home'} />}
                    className={'tab-btn'}
                  />
                ),
                key: 'home',
                children: (
                  <Carousel ref={carousel} {...settings} arrows={true} style={{width: 1500}}>
                    {homes.map(it => (
                      <Col style={{marginRight: 10}}>
                        <Image src={it.image} preview={false} />
                        <Typography.Title level={4}>
                          {it.homeName}
                        </Typography.Title>
                        <Typography.Text>
                          {it.price}
                        </Typography.Text>
                        <Card>
                          <Card.Meta
                            avatar={it.agentPhoto}
                            title={it.agentName}
                            description={it.location}
                          />
                        </Card>
                      </Col>
                    ))}
                  </Carousel>
                ),
              },
              {
                label: (
                  <Button
                    text={'Villa'}
                    type={activeTab === 'villa' ? 'default' : 'ghost'}
                    icon={ <SvgIcon type={'villa'} />}
                    className={'tab-btn'}
                  />
                ),
                key: 'villa',
                children: children2,
              },
              {
                label: (
                  <Button
                    text={'Apartment'}
                    type={activeTab === 'apartment' ? 'default' : 'ghost'}
                    icon={ <SvgIcon type={'apartment'} />}
                    className={'tab-btn'}
                  />
                ),
                key: 'apartment',
                children: children3,
              },
            ]}
          />
        </Col>
        <Col className={'btns-wrap'}>
          <Space size={'middle'}>
            <Button
              type={'primary'}
              className={'icon-btn'}
              disabled={true}
              onClick={handlePrev}

              icon={
                <SvgIcon
                  type={'nextArrow'}
                  className={'prev-arrow'}
                />
              }
            />
            <Button
              type={'primary'}
              className={'icon-btn'}
              onClick={handleNext}
              icon={
                <SvgIcon
                  type={'nextArrow'}
                  className={'nex-arrow'}
                />
              }
            />
          </Space>
        </Col>
      </Row>
    </SectionComponent>
  )

}
export { FeaturedHouse }
