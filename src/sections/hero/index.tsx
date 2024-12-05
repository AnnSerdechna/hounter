import { FC } from 'react'
import { Row, Col, Typography, Space } from 'antd'

import { Paragraph, Section } from '../../components/ui'
import { SearchSelect } from '../../components/elements/search-select'
import HeroBg from './hero-bg.png'
import './index.less'
import { Partnership } from '../../components/elements/partnership'
import { HeroBottomCarousel } from './HeroBottomCarousel'

const { Title } = Typography

const Hero: FC = () => (
  <>
    <Row className={'hero'}>
      <img src={HeroBg} alt={'Hero'} className={'hero-bg'} />

      <Section>
        <Col span={12} className={'hero-content'}>
          <Space direction={'vertical'} size={24} style={{ marginBottom: 20 }}>
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
                style={{ marginBottom: 0 }}
              />
            </Col>
          </Space>
          <Col span={20} style={{ marginBottom: 32 }}>
            <SearchSelect />
          </Col>

          <Col>
            <Partnership />
          </Col>
        </Col>
      </Section>
      <HeroBottomCarousel />
    </Row>
  </>
)

export { Hero }
