import {FC} from 'react'
import {Col, Row, Typography} from 'antd'

import {Section} from '../../components'
import {SubscribeForm} from './SubscribeForm'
import {IconBlockLeft, IconBlockRight} from './IconsBlock'
import './index.less'

const { Title } = Typography

const SubscribeNow: FC = () => (
  <Section>
    <Row className={'subscribe'}>
      <Col span={6} className={'subscribe-icons-left'}>
        <IconBlockRight />
      </Col>
      <Col span={11}>
        <Title className={'subscribe-title'}>
          Subscribe For More Info <br/> and update from Hounter
        </Title>

        <SubscribeForm />
      </Col>
      <Col span={6} className={'subscribe-icons-right'}>
        <IconBlockLeft />
      </Col>
    </Row>
  </Section>
)

export { SubscribeNow }
