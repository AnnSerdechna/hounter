import { FC } from 'react'
import { Col, Row } from 'antd'

import {SectionTag} from '../section-tag'
import {SectionTitle} from '../section-title'

const SectionTitleBlock: FC<{ span?: number, sectionName: string, title: string }> = ({ span = 9, sectionName, title }) => (
  <Row justify={'center'} style={{width: '100%', marginBottom: 54}}>
    <Col span={span} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12}}>
      <SectionTag sectionName={sectionName} />
      <SectionTitle title={title} />
    </Col>
  </Row>
)

export { SectionTitleBlock }
