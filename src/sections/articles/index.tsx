import { FC } from 'react'
import { Row, Col, List } from 'antd'

import { SectionComponent, SectionTitleBlock } from '../../components'
import { articlesData } from './articles-data'
import {ArticleCrad} from './article-card'

import './index.less'
import VectorBgBlue from '../../images/bg-vector/blue-vector.svg'
import VectorBgLime from '../../images/bg-vector/lime-bg.svg'

const Articles: FC = () => {
  return (
  <Row className={'articles'}>
    <img src={VectorBgBlue} alt={'background'} className={'vector-blue'} />
    <img src={VectorBgLime} alt={'background'} className={'vector-lime'} />

    <SectionComponent>
      <SectionTitleBlock
        span={9}
        sectionName={'See tips and trick from our partnership'}
        title={'Find out more about selling and buying homes'}
      />

      <Row>
        <Col span={12}>
          <List
            dataSource={articlesData}
            renderItem={({ id, articleImage, authorAvatar, authorName, title, description, timeToRead, releaseDate}) => (
              <>
                {!description && (
                  <ArticleCrad
                    key={id}
                    articleImage={articleImage}
                    authorAvatar={authorAvatar}
                    authorName={authorName}
                    timeToRead={timeToRead}
                    releaseDate={releaseDate}
                    title={title}
                    imageSpan={8}
                    cardSpan={15}
                  />
                )}
              </>
            )}
          />
        </Col>
        <Col span={11} offset={1}>
          {articlesData.filter(it => it.description).map(item => (
            <ArticleCrad
              key={item.id}
              articleImage={item.articleImage}
              authorAvatar={item.authorAvatar}
              authorName={item.authorName}
              title={item.title}
              description={item.description}
              timeToRead={item.timeToRead}
              releaseDate={item.releaseDate}
              imageSpan={24}
              cardSpan={24}
            />
          ))}
        </Col>
      </Row>
    </SectionComponent>
  </Row>
  )
}

export { Articles }
