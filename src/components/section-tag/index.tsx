import { FC } from 'react'
import { Typography } from 'antd'
import classNames from 'classnames'

import './index.less'

const { Title } = Typography

const SectionTag: FC<{ sectionName: string, leftMode?: boolean }> = ({ sectionName, leftMode = false }) => (
  <Title className={classNames('section-tag', { 'leftMode': leftMode})}>
    {sectionName}
  </Title>
)

export { SectionTag }
