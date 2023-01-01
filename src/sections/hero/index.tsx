import { FC } from 'react'
import {Row, Col, Typography, Space, Card, Carousel, Avatar} from 'antd'


import {Paragraph, SectionComponent, SvgIcon} from '../../components'
import { usaStates } from './statesData'
import {SearchSelect} from '../../components/search-select'
import HeroBg from './hero-bg.png'
import './index.less'
import {Partnership} from '../../components/partnership'
import {HeroBottomCarousel} from './HeroBottomCarousel'

const { Title } = Typography

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

     <HeroBottomCarousel />
    </Row>
  </>
)

export { Hero }
