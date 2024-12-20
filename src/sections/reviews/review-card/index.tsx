import { FC } from 'react'
import { Avatar, Card, Col, Image, Row, Statistic } from 'antd'

import { Paragraph, SvgIcon } from '../../../components'
import './index.less'

type ReviewCardProps = {
  src: string
  title: string
  review: string
  userAvatar: string
  userName: string
  userPosition: string
  rating: number
}

const ReviewCard: FC<ReviewCardProps> = ({ 
  src, 
  title, 
  review, 
  userName, 
  userAvatar, 
  userPosition, 
  rating  
}) => {
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
            <Paragraph text={review} />
            <Row justify={'space-between'} className={'card-meta-wrap'}>
              <Card.Meta
                avatar={<Avatar src={userAvatar} size={40} />}
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
