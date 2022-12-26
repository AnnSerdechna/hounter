import { FC } from 'react'
// import {Link} from 'react-router-dom'
import {Col, Row, Typography, Anchor, Space, List} from 'antd'

import {Logo, SectionComponent, SvgIcon} from '../../components'
import './index.less'

const { Paragraph, Link } = Typography

const listData = [
  {
    title: 'Property',
    description: [
      {
        item: 'House',
        path: 'house',
      },
      {
        item: 'Apartments',
        path: 'apartments',
      },
      {
        item: 'Villa',
        path: 'villa',
      },
    ]
  },
  {
    title: 'Article',
    description: [
      {
        item: 'New Article',
        path: 'new-article',
      },
      {
        item: 'Popular Article',
        path: 'popular-article',
      },
      {
        item: 'Most Read',
        path: 'most-read',
      },
      {
        item: 'Tips & Tricks',
        path: 'tips&tricks',
      },
    ]
  },
  {
    title: 'Contact',
    description: [
      {
        item: '2464 Royal Ln. Mesa, New Jersey 45463',
        type: 'location',
      },
      {
        item: '(671) 555-0110',
        type: 'tel',
      },
      {
        item: 'info@hounter.com',
        type: 'email',
      },
    ]
  },
]

const Footer: FC = () => (
  <Row className={'footer'}>
    <SectionComponent maxWidth={1200}>
      <Row>
        <Col span={12}>
          <Logo />
          <Col span={14}>
            <Paragraph className={'footer-description'}>
              We provide information about properties such as houses, villas and apartments to help people find their dream home
            </Paragraph>
          </Col>
          <Space size={'large'}>
            <Anchor.Link href={''} title={<SvgIcon type={'facebook'} />} />
            <Anchor.Link href={''} title={<SvgIcon type={'twitter'} />} />
            <Anchor.Link href={''} title={<SvgIcon type={'instagram'} />} />
          </Space>
        </Col>

        <Col span={12}>
          <List
            itemLayout={'horizontal'}
            grid={{column: 3}}
            dataSource={listData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={item.description.map(it => (
                    // <Link to={'/'}>{it}</Link>
                    <p>{it.item}</p>
                  ))}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </SectionComponent>
  </Row>
)

export { Footer }
