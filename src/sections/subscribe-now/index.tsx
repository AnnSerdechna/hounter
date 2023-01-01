import {FC} from 'react'
import {Avatar, Col, Row, Typography} from 'antd'

import {SectionComponent} from '../../components'
import {SubscribeForm} from './SubscribeForm'
import './index.less'
import {IconBlockLeft, IconBlockRight} from './IconsBlock'

const { Title } = Typography

const SubscribeNow: FC = () => (
  <SectionComponent>
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
  </SectionComponent>
)

export { SubscribeNow }
