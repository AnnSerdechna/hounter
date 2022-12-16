import { FC } from 'react'
import {Row, Col, List, Space} from 'antd'

import {Paragraph, SectionComponent, SectionTitleBlock, SvgIcon} from '../../components'

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

const ReadyToSell: FC = () => (
  <SectionComponent maxWidth={1200}>
    <Row>
      <SectionTitleBlock
        sectionName={'Ready to Sell!'}
        title={'Let’s tour and see our house!'}
        span={24}
        marginBottom={16}
        start
      />

      <Col span={8}>
        <Space size={16} direction={'vertical'}>
          <Paragraph
            text={'Houses recommended by our partners that have been curated to become the home of your dreams!'}
            fontSize={16}
          />
          <List
            header={'header'}
            footer={'footer'}
            grid={{column: 2}}
            dataSource={detailsData}
            renderItem={item => (
              <List.Item>
                <Space size={16} align={'center'}>
                  <SvgIcon type={item.icon} />
                  {item.item}
                </Space>
              </List.Item>
            )}
          />
        </Space>
      </Col>
      <Col>

      </Col>
    </Row>
  </SectionComponent>
)

export { ReadyToSell }
