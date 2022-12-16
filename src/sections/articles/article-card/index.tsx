import { FC } from 'react'
import { Anchor, Avatar, Card, Col, Image, Row, Typography } from 'antd'

import {Paragraph, SvgIcon} from '../../../components'
import { ArticlesProps } from '../articles-data'

import './index.less'

const { Link } = Anchor

type ArticleCardProps = ArticlesProps & {
  imageSpan: number
  cardSpan: number
}

const ArticleCrad: FC<ArticleCardProps> = (
  {
    articleImage,
    authorAvatar,
    authorName,
    title,
    description,
    timeToRead,
    releaseDate,
    imageSpan,
    cardSpan
  }
) => (
  <Row align={'middle'} style={{marginBottom: 30}} className={'article'}>
    <Col span={imageSpan}>
      <Image src={articleImage} preview={false} />
    </Col>
    <Col span={cardSpan}>
      <Card
        bordered={false}
        style={{boxShadow: 'none'}}
      >
        <Card.Meta
          avatar={<Avatar src={authorAvatar} size={'large'} />}
          description={authorName}
          className={'article-card'}
        />
        <Link href={''} title={title} className={'card-link'} />
        <Paragraph text={description} />

        <Row align={'middle'}>
          <SvgIcon type={'clock'} />
          <Typography.Paragraph className={'card-time-date-text'}>
            {timeToRead} min read | {releaseDate}
          </Typography.Paragraph>
        </Row>
      </Card>
    </Col>
  </Row>
)

export { ArticleCrad }
