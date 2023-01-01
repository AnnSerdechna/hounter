import { FC, PropsWithChildren } from 'react'
import { Col } from 'antd'

import './index.less'

const SectionComponent: FC<PropsWithChildren<{ maxWidth?: string | number, paddingBottom?: string | number }>> = ({ children, maxWidth = 1200, paddingBottom = 120}) => (
  <Col
    span={24}
    className={'section'}
    style={{ maxWidth: maxWidth, paddingBottom: paddingBottom }}
  >
    {children}
  </Col>
)

export { SectionComponent }
