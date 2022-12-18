import {Col, Space, Typography} from 'antd'

import {SvgIcon} from '../icon'
import './index.less'

const Logo = () => (
  <Col className={'logo-text'}>
    <Space size={12}>
      <SvgIcon type={'logo'} />
      <Typography.Text className={'logo-text'}>
        Hounter
      </Typography.Text>
    </Space>
  </Col>
)

export { Logo }
