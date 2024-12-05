import { Menu, MenuProps } from 'antd'
import { FC } from 'react'

import './index.less'

const Navigation: FC<MenuProps> = ({ ...props }) => {
  return <Menu disabledOverflow={true} {...props} />
}

export { Navigation }
