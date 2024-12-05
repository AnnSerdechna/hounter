import { FC } from 'react'
import {Row} from 'antd'

import { Section } from '../../components/ui'
import { ReadyToCellInfo } from './ReadyToCellInfo'
import { ReadyToSellMedia } from './ReadyToSellMedia'
import './index.less'
import VectorBgPink from '../../images/bg-vector/pink-vectorsvg.svg'
import VectorBgYellow from '../../images/bg-vector/yellow-ector.svg'

const ReadyToSell: FC = () => (
  <Row className={'ready-to-sell-wrap'}>
    <img src={VectorBgPink} alt={'background'} className={'vector-pink'} />
    <img src={VectorBgYellow} alt={'background'} className={'vector-yellow'} />
    <Section>
      <Row justify={'space-between'}>
        <ReadyToCellInfo />
        <ReadyToSellMedia />
      </Row>
    </Section>
  </Row>
)

export { ReadyToSell }
