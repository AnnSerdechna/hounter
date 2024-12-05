import { FC } from 'react'
import { ConfigProvider, Button as AntButton, ButtonProps } from 'antd'

import './index.less'

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#10B981',
        colorBgBase: '#D1FAE5',
        colorTextBase: '#047857',
        colorBgContainerDisabled: '#E0E3EB',
      },
    }}
  >
    <AntButton
      shape={'round'}
      size={'large'}
      {...props}
    >
      {children}
    </AntButton>
  </ConfigProvider>
)

export { Button }

