import { FC } from 'react'
import { Col, Row } from 'antd'

import { SectionTag } from '../section-tag'
import { SectionTitle } from '../section-title'
import './index.less'

type SectionTitleBlockProps = {
  span?: number,
  sectionName: string,
  title: string,
  start?: boolean
  marginBottom?: number
}

const SectionTitleBlock: FC<SectionTitleBlockProps> = ({
  span = 9,
  sectionName,
  title,
  start = false,
  marginBottom = 54
}) => (
  <Row justify={'center'} style={{ width: '100%', marginBottom: marginBottom }}>
    <Col
      span={span}
      className={'section-title-block'}
      style={{ alignItems: start ? 'start' : 'center' }}
    >
      <SectionTag sectionName={sectionName} leftMode={start} />
      <SectionTitle title={title} />
    </Col>
  </Row>
)

export { SectionTitleBlock }
