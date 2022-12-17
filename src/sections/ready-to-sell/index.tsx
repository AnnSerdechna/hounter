import { FC } from 'react'
import {Row} from 'antd'

import { SectionComponent } from '../../components'
import { ReadyToCellInfo } from './ReadyToCellInfo'
import { ReadyToSellMedia } from './ReadyToSellMedia'
import './index.less'

const ReadyToSell: FC = () => (
  <SectionComponent maxWidth={1200}>
    <Row justify={'space-between'}>
      <ReadyToCellInfo />
      <ReadyToSellMedia />
    </Row>
  </SectionComponent>
)

export { ReadyToSell }
