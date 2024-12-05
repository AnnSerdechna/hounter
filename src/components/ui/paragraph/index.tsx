import { FC } from 'react'
import { Typography } from 'antd'
import { ParagraphProps } from 'antd/es/typography/Paragraph'

import './index.less'

const Paragraph: FC<ParagraphProps & { text: string | undefined, fontSize?: string | number }> = ({ text, fontSize = 14 }) => (
  <Typography.Paragraph className={'paragraph'} style={{fontSize: fontSize}}>
    {text}
  </Typography.Paragraph>
)

export { Paragraph }
