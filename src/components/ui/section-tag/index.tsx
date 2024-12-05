import { FC } from 'react'
import { Typography } from 'antd'
import classNames from 'classnames'

import './index.less'

const { Title } = Typography

type SectionTagProps = {
  sectionName: string
  leftMode?: boolean
}

const SectionTag: FC<SectionTagProps> = ({ sectionName, leftMode = false }) => (
  <Title 
    className={classNames(
      'section-tag', 
      { 'leftMode': leftMode}
    )}
  >
    {sectionName}
  </Title>
)

export { SectionTag }
