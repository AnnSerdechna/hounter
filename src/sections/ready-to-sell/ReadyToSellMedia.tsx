import { FC } from 'react'
import {Col, Image, Row} from 'antd'

import VideoPoster from '../../images/ready-to-sell/poster.png'
import House1 from '../../images/ready-to-sell/sell1.png'
import House2 from '../../images/ready-to-sell/sell2.png'
import House3 from '../../images/ready-to-sell/sell3.png'

const ReadyToSellMedia: FC = () => (
  <Col span={10} className={'ready-to-sell-media'}>
    <>
      <video
        width="100%"
        height="100%"
        poster={VideoPoster}
        className={'video'}
      >
        <source src="" type="video/mp4" />
        <source src="" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </>

    <Col className={'ready-to-sell-media-images'}>
      <Row justify={'space-between'} align={'bottom'}>
        <Image src={House1} />
        <Image src={House2} />
        <Image src={House3} />
      </Row>
    </Col>
  </Col>
)

export { ReadyToSellMedia }
