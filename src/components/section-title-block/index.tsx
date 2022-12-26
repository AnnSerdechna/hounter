import { FC } from 'react'
import { Col, Row } from 'antd'

import {SectionTag} from '../section-tag'
import {SectionTitle} from '../section-title'

const SectionTitleBlock: FC<
  { span?: number,
    sectionName: string,
    title: string,
    start?: boolean
    marginBottom?: number
  }
  > = (
    {
      span = 9,
      sectionName,
      title,
      start = false,
      marginBottom = 54
    }
  ) => (
  <Row justify={'center'} style={{width: '100%', marginBottom: marginBottom}}>
    <Col span={span} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: start ? 'start' : 'center', gap: 12}}>
      <SectionTag sectionName={sectionName} leftMode={start} />
      <SectionTitle title={title} />
    </Col>
  </Row>
)

export { SectionTitleBlock }
