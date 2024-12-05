import { FC, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Row, Typography, Anchor, Space, List } from 'antd'

import { Logo } from '../../elements'
import { Section, SvgIcon } from '../../ui'
import VectorBgBlue from '../../../images/bg-vector/footer-blue-vector.svg'
import './index.less'

const { Paragraph } = Typography
const { Link } = Anchor

interface ListDataProps {
  title: string
  description: { item: string, path?: string, type?: string, address?: string }[]
}

const listData: ListDataProps[] = [
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
        address: 'https://www.google.com/maps/search/2464+Royal+Ln.+Mesa,+New+Jersey+45463/@35.9327601,-110.9433269,4z/data=!3m1!4b1',
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
    <img src={VectorBgBlue} alt={'background'} className={'vector-blue'} />

    <Section>
      <Row justify={'space-between'} style={{ width: '100%' }}>
        <Col span={10}>
          <Logo />
          <Col span={14}>
            <Paragraph className={'footer-description'}>
              We provide information about properties such as houses, villas and apartments to help people find their dream home
            </Paragraph>
          </Col>
          <Space size={'large'}>
            <Link href={''} title={<SvgIcon type={'facebook'} />} />
            <Link href={''} title={<SvgIcon type={'twitter'} />} />
            <Link href={''} title={<SvgIcon type={'instagram'} />} />
          </Space>
        </Col>

        <Col span={12}>
          <List
            itemLayout={'horizontal'}
            grid={{ column: 3 }}
            dataSource={listData}
            className={'footer-list'}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={item.description.map(it => (
                    <Fragment key={it.item}>
                      {it.path && (
                        <NavLink
                          to={it.path}
                          className={'footer-list-navLink'}
                        >
                          {it.item}
                        </NavLink>
                      )}

                      {it.type && (
                        <Link
                          title={it.item}
                          target={'_blank'}
                          className={'footer-list-link'}
                          href={
                            it.type === 'tel'
                              ? `tel:${it.item}`
                              : it.type === 'email'
                                ? `mailto:${it.item}`
                                : `${it.address}`
                          }
                        />
                      )}
                    </Fragment>
                  ))}
                />
              </List.Item>
            )} />
        </Col>
      </Row>
    </Section>
  </Row>
)

export { Footer }
