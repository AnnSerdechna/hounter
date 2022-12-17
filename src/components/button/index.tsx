import { FC, ReactNode } from 'react'
import { ConfigProvider, Button as CustomButton, ButtonProps } from 'antd'

import './index.less'

const Button: FC<ButtonProps & { colorPrimary?: string, text: string, icon?: ReactNode, type?: string }> = ({ text, icon, type = 'primary' }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#10B981',
        colorBgBase: '#D1FAE5',
        colorTextBase: '#047857',
      },
    }}
  >
    <CustomButton
      shape={'round'}
      size={'large'}
      type={type}
      icon={icon}
      // style={{height: 48, fontSize: '1em'}}
    >
      {text}
    </CustomButton>
  </ConfigProvider>
)

export { Button }
