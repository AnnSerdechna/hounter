import { FC, ReactNode } from 'react'
import { ConfigProvider, Button as CustomButton, ButtonProps } from 'antd'

import './index.less'
import * as React from "react";

const Button: FC<ButtonProps & { colorPrimary?: string, text?: string, icon?: ReactNode, type?: string, className?: string | undefined, onClick: React.MouseEventHandler<HTMLElement> }> = ({ text, icon, type = 'default', disabled = false, className, onClick }) => (
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
      onClick={onClick}
    >
      {text}
    </CustomButton>
  </ConfigProvider>
)

export { Button }
