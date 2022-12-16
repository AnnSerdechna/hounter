import { FC } from 'react'
import { Typography } from 'antd'

import './index.less'

const { Title } = Typography

const SectionTag: FC<{ sectionName: string }> = ({ sectionName}) => (
  <Title className={'section-tag'}>
    {sectionName}
  </Title>
)

export { SectionTag }
