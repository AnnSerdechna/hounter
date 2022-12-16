import { FC, PropsWithChildren } from 'react'
import { Col } from 'antd'

import './index.less'

const SectionComponent: FC<PropsWithChildren<{ maxWidth?: string | number }>> = ({ children, maxWidth }) => (
  <Col className={'section'} style={{maxWidth: maxWidth}}>
    {children}
  </Col>
)

export { SectionComponent }
