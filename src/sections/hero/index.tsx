import { FC } from 'react'
import {Row, Col, Typography, Space, Card, Carousel, Avatar} from 'antd'


import {Paragraph, SectionComponent, SvgIcon} from '../../components'
import { usaStates } from './statesData'
import {SearchSelect} from '../../components/search-select'
import HeroBg from './hero-bg.png'
import './index.less'
import {Partnership} from '../../components/partnership'

const { Title } = Typography

console.log(usaStates.length)

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  dots: true,
};


const Hero: FC = () => (
  <>
    <Row className={'hero'}>
      <img src={HeroBg} alt={'Hero'} className={'hero-bg'} />

      <SectionComponent>
        <Col span={12}>
          <Space direction={'vertical'} size={24} style={{marginBottom: 16}}>
            <Col span={16}>
              <Title className={'hero-title'}>
                find the place to live{' '}
                <span className={'hero-title outlined'}>your dreams</span>{' '}easily here
              </Title>
            </Col>

            <Col span={20}>
              <Paragraph
                text={'Everything you need about finding your place to live will be here, where it will be easier for you'}
                fontSize={16}
                style={{marginBottom: 0}}
              />
            </Col>
          </Space>


          <Col span={20} style={{marginBottom: 32}}>
            <SearchSelect />
          </Col>

          <Col>
            <Partnership />
          </Col>
        </Col>
      </SectionComponent>

      <Row style={{background: 'teal', width: '100%', marginTop: -100, zIndex: 200}} justify={'end'}>
        <Col span={11}>
          <Carousel {...settings}>
            <Col  span={22} offset={2}>
              <Card title={'Card title 1'} />
            </Col>
            <Col span={22} offset={2}>
              <Card title={'Card title 2'} />
            </Col>
            <Col  span={22} offset={2}>
              <Card title={'Card title 3'} />
            </Col>
            <Col  span={22} offset={2}>
              <Card>
                <Card.Meta
                  title={'1K+ People'}
                  description={'Successfully Getting Home'}
                  avatar={(
                    <Avatar.Group>
                      <Avatar src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'} />
                      <Avatar src={'https://images.pexels.com/photos/2467401/pexels-photo-2467401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                      <Avatar src={'https://www.givedirectly.org/wp-content/uploads/2022/11/Adela-in-Rwanda-705x470.png'} />
                    </Avatar.Group>
                  )}
                />
              </Card>
            </Col>
          </Carousel>
        </Col>
      </Row>
    </Row>
  </>
)

export { Hero }
