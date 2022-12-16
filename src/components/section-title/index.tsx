import { FC } from 'react'
import { Typography } from 'antd'

import './index.less'

const { Title } = Typography

const SectionTitle:FC<{ title: string }> = ({ title}) => (
  <Title className={'section-title'}>
    {title}
  </Title>
)

export { SectionTitle }
