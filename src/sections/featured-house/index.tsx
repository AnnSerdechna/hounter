import {FC} from 'react'
import {Col, Row} from 'antd'

import {Section, SectionTitleBlock} from '../../components'
import {FeaturedHouseTabs} from './FeaturedHouseTabs'
import './index.less'

const FeaturedHouse: FC = () => (
  <Section>
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
        <FeaturedHouseTabs />
      </Col>
    </Row>
  </Section>
)

export { FeaturedHouse }
