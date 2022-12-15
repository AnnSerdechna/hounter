import { FC, useState } from 'react'
import { Avatar, Card, Col, Image, Row, Statistic, Typography } from 'antd'

import {SvgIcon} from '../../../icon'
import './index.less'

const { Paragraph } = Typography

type ReviewCardProps = {
  src: string
  title: string
  review: string
  userAvatar: string
  userName: string
  userPosition: string
  rating: number
}

const ReviewCard: FC<ReviewCardProps> = ({ src, title, review, userName, userAvatar, userPosition, rating  }) => {
  const [ellipsis, setEllipsis] = useState(true)

  return (
    <Col span={22} className={'review'}>
      <Image src={src} />

      <Row
        justify={'center'}
        align={'middle'}
        style={{marginTop: '-20%'}}
      >
        <Col span={20}>
          <Card
            title={title}
            className={'review-card'}
            bordered={false}
          >
            <Paragraph
              className={'review-text'}
              ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}
            >
              {review}
            </Paragraph>
            <Row justify={'space-between'} className={'card-meta-wrap'}>
              <Card.Meta
                avatar={<Avatar src={userAvatar} />}
                title={userName}
                description={userPosition}
              />
              <Col>
                <Statistic
                  value={rating}
                  precision={1}
                  prefix={<SvgIcon type={'star'} style={{display: 'block'}} />}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export { ReviewCard }
