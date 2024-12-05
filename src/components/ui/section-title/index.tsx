import { FC } from 'react'
import { Typography } from 'antd'
import {TitleProps} from 'antd/es/typography/Title'

import './index.less'

const { Title } = Typography

const SectionTitle:FC<TitleProps> = ({ title, ...props}) => (
  <Title 
    className={'section-title'} 
    {...props}
  >
    {title}
  </Title>
)

export { SectionTitle }
