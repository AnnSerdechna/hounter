import { Col, Space, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import { FC } from 'react'

import { SvgIcon } from '../../ui/icon'
import './index.less'

const Logo: FC = () => (
  <Col className={'logo-text'}>
    <NavLink to={'/'}>
      <Space size={12}>
        <SvgIcon type={'logo'} />
        <Typography.Text className={'logo-text'}>
          Hounter
        </Typography.Text>
      </Space>
    </NavLink>
  </Col>
)

export { Logo }
