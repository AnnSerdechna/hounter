import { FC } from 'react'
// import {Link} from 'react-router-dom'
import {Col, Row, Typography, Anchor, Space, List} from 'antd'

import {Logo, SectionComponent, SvgIcon} from '../../components'
import './index.less'

const { Paragraph } = Typography

const listData = [
  {
    title: 'Property',
    description: ['House', 'Apartments', 'Villa']
  },
  {
    title: 'Article',
    description: ['New Article', 'Popular Article', 'Most Read', 'Tips & Tricks']
  },
  {
    title: 'Contact',
    description: ['2464 Royal Ln. Mesa, New Jersey 45463', '(671) 555-0110', 'info@hounter.com']
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
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.description.map(it => (
                    // <Link to={'/'}>{it}</Link>
                    <p>{it}</p>
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
