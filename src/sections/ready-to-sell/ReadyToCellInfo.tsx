import {Avatar, Card, Col, List, Row, Space, Typography} from 'antd'

import {Button, Paragraph, SectionTitleBlock, SvgIcon} from '../../components'

const { Title, Text } = Typography

const detailsData: {item: string, icon: string }[] = [
  {
    item: '4 Bedrooms',
    icon: 'bed',
  },
  {
    item: '2 Bathrooms',
    icon: 'bath',
  },  {
    item: '1 Carport',
    icon: 'car',
  },
  {
    item: '2 Floors',
    icon: 'floors',
  },
]

const HouseDetailsListFooter = () => (
  <Card bordered={false} style={{boxShadow: 'none'}} className={'list-footer'}>
    <Row justify={'space-between'} align={'middle'}>
      <Card.Meta
        avatar={<Avatar src="https://www.thestar.com/content/dam/thestar/columnist_logos/francis_angelyn_logo2020.jpg" size={56} />}
        title="Dianne Russell"
        description="Manager Director"
      />
      <Button
        type={'primary'}
        icon={<SvgIcon type={'phone'} />}
        text={'Contact Now'}
        onClick={() => {}}
      />
    </Row>
  </Card>
)

const ReadyToCellInfo = () => (
  <Col className={'ready-to-sell'} span={11}>
    <SectionTitleBlock
      sectionName={'Ready to Sell!'}
      title={'Let’s tour and see our house!'}
      span={24}
      marginBottom={16}
      start
    />

    <Col span={20}>
      <Paragraph
        text={'Houses recommended by our partners that have been curated to become the home of your dreams!'}
        fontSize={16}
      />
      <List
        header={<Title level={5} className={'header-list-title'}>House Detail</Title>}
        footer={<HouseDetailsListFooter />}
        grid={{column: 2}}
        dataSource={detailsData}
        renderItem={item => (
          <List.Item style={{padding: 0}}>
            <Space size={16} align={'center'}>
              <SvgIcon type={item.icon} />
              <Text className={'list-item-text'}>{item.item}</Text>
            </Space>
          </List.Item>
        )}
      />
    </Col>
  </Col>
)

export { ReadyToCellInfo }
