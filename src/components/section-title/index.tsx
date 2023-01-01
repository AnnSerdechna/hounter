import { FC } from 'react'
import { Typography } from 'antd'

import './index.less'
import {TitleProps} from 'antd/es/typography/Title'

const { Title } = Typography

const SectionTitle:FC<TitleProps> = ({ title}) => (
  <Title className={'section-title'}>
    {title}
  </Title>
)

export { SectionTitle }
