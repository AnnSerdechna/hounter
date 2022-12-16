import { FC } from 'react'
import { Row, Col, Typography, Image, Anchor, List, Avatar, Card } from 'antd'

import { SectionComponent, SectionTitleBlock } from '../../components'
import { articlesData } from './articles-data'
import {ArticleCrad} from './article-card'

const Articles: FC = () => {
  return (
   <SectionComponent maxWidth={1200}>
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
  )
}

export { Articles }
