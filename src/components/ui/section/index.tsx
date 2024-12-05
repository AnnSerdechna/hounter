import { FC, ReactNode } from 'react'
import { Col } from 'antd'

import './index.less'

type SectionProps = {
  children: ReactNode
  maxWidth?: string | number
  paddingBottom?: string | number
}

const Section: FC<SectionProps> = ({ 
  children, 
  maxWidth = 1200, 
  paddingBottom = 120
}) => (
  <Col
    span={24}
    className={'section'}
    style={{ 
      maxWidth: maxWidth, 
      paddingBottom: paddingBottom 
    }}
  >
    {children}
  </Col>
)

export { Section }
