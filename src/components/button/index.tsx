import { FC } from 'react'
import { ConfigProvider, Button as CustomButton, ButtonProps } from 'antd'

import './index.less'

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
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
    <CustomButton
      shape={'round'}
      size={'large'}
      {...props}
    >
      {children}
    </CustomButton>
  </ConfigProvider>
)
