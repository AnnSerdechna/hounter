import { FC, ReactNode } from 'react'
import { ConfigProvider, Button as CustomButton, ButtonProps } from 'antd'

import './index.less'

const Button: FC<ButtonProps & { colorPrimary?: string, text?: string, icon?: ReactNode, type?: string, className?: string | undefined }> = ({ text, icon, type = 'primary', disabled = false, className }) => (
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
      type={type}
      disabled={disabled}
      icon={icon}
      className={className}
    >
      {text}
    </CustomButton>
  </ConfigProvider>
)

export { Button }
