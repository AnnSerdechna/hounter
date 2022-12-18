// import {FC, useRef, useState} from 'react'
// import {Card, Col, Image, Row, Space, Tabs, Typography, Carousel} from 'antd'
// import {CarouselRef} from 'antd/lib/carousel'
//
// import {Button, SectionComponent, SectionTitleBlock, SvgIcon} from '../../components'
// import {homesData} from './featuredHouseData/homesData'
// import {FeaturedHouseCarousel} from "./FeaturedHouseCarousel";
// import {villasData} from "./featuredHouseData/villasData";
// import {apartmentData} from "./featuredHouseData/apartmentData";
// import './index.less'
//
//
// const settings = {
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 3,
//   swipeToSlide: true,
//   draggable: true,
//   dots: false,
//   infinite: true,
// }
//
// const FeaturedHouse: FC<{ children1?: any, children2?: any, children3?: any}> = ({ children1, children2, children3}) => {
//   const [activeTab, setActiveTab] = useState('home')
//
//   const carousel = useRef<CarouselRef>(null)
//
//   const onNextSlides = () => carousel?.current?.next()
//
//   const onPrevSlides = () => carousel?.current?.prev()
//
//   const onChange = (key: string) => setActiveTab(key)
//
//   const getChildren = (data: any) => <FeaturedHouseCarousel data={data} ref={carousel} />
//
//   console.log(activeTab)
//
//   return (
//     <SectionComponent maxWidth={1200}>
//       <Row className={'featured-house'}>
//         <Col span={8} className={'featured-house-title-wrap'}>
//           <SectionTitleBlock
//             sectionName={'Our Recommendation'}
//             title={'Featured House'}
//             marginBottom={0}
//             span={24}
//             start
//           />
//         </Col>
//
//         <Col span={24}>
//           <Tabs
//             defaultActiveKey={'home'}
//             onChange={onChange}
//             style={{borderBottom: 0}}
//             centered
//             items={[
//               {
//                 label: (
//                   <Button
//                     text={'Home'}
//                     type={activeTab === 'home' ? 'default' : 'ghost'}
//                     icon={ <SvgIcon type={'home'} />}
//                     className={'tab-btn'}
//                     onClick={() => {}}
//                   />
//                 ),
//                 key: 'home',
//                 children: getChildren(homesData),
//               },
//               {
//                 label: (
//                   <Button
//                     text={'Villa'}
//                     type={activeTab === 'villa' ? 'default' : 'ghost'}
//                     icon={ <SvgIcon type={'villa'} />}
//                     className={'tab-btn'}
//                     onClick={() => {}}
//                   />
//                 ),
//                 key: 'villa',
//                 children:getChildren(villasData),
//               },
//               {
//                 label: (
//                   <Button
//                     text={'Apartment'}
//                     type={activeTab === 'apartment' ? 'default' : 'ghost'}
//                     icon={ <SvgIcon type={'apartment'} />}
//                     className={'tab-btn'}
//                     onClick={() => {}}
//                   />
//                 ),
//                 key: 'apartment',
//                 children: getChildren(apartmentData),
//               },
//             ]}
//           />
//         </Col>
//         <Col className={'btns-wrap'}>
//           <Space size={'middle'}>
//             <Button
//               type={'primary'}
//               className={'icon-btn'}
//               onClick={onPrevSlides}
//               icon={
//                 <SvgIcon
//                   type={'nextArrow'}
//                   className={'prev-arrow'}
//                 />
//               }
//             />
//             <Button
//               type={'primary'}
//               className={'icon-btn'}
//               onClick={onNextSlides}
//               icon={
//                 <SvgIcon
//                   type={'nextArrow'}
//                   className={'nex-arrow'}
//                 />
//               }
//             />
//           </Space>
//         </Col>
//       </Row>
//     </SectionComponent>
//   )
//
// }
// export { FeaturedHouse }


import {FC, useRef, useState} from 'react'
import {Card, Col, Image, Row, Space, Tabs, Typography, Carousel, Tag, ConfigProvider} from 'antd'
import {CarouselRef} from 'antd/lib/carousel'

import {Button, SectionComponent, SectionTitleBlock, SvgIcon} from '../../components'
import {homesData} from './featuredHouseData/homesData'
import {FeaturedHouseCarousel} from "./FeaturedHouseCarousel";
import {villasData} from "./featuredHouseData/villasData";
import {apartmentData} from "./featuredHouseData/apartmentData";
import './index.less'
import TabPane from "antd/lib/tabs/TabPane";


const settings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  swipeToSlide: true,
  draggable: true,
  dots: false,
  infinite: true,
}


const FeaturedHouse: FC<{ children1?: any, children2?: any, children3?: any}> = ({ children1, children2, children3}) => {
  const [activeTab, setActiveTab] = useState('home')

  const carousel = useRef<CarouselRef>(null)
  const carousel2 = useRef<CarouselRef>(null)
  const carousel3 = useRef<CarouselRef>(null)

  const onNextSlides = () => {
    carousel?.current?.next()
    carousel2?.current?.next()
    carousel3?.current?.next()
  }

  const onPrevSlides = () => {
    carousel?.current?.prev()
    carousel2?.current?.prev()
    carousel3?.current?.prev()
  }

  const onChange = (key: string) => {
    console.log(key, key)
    setActiveTab(key)
  }

  const getChildren = (data: any) => <FeaturedHouseCarousel data={data} ref={carousel} />

  console.log(activeTab)

  return (
    <SectionComponent maxWidth={1200}>
      <Row className={'featured-house'}>
        <Col span={8} className={'featured-house-title-wrap'}>
          <SectionTitleBlock
            sectionName={'Our Recommendation'}
            title={'Featured House'}
            marginBottom={0}
            span={24}
            start
          />
        </Col>

        <Col span={24}>
          <Tabs
            defaultActiveKey={activeTab}
            onChange={onChange}
            style={{borderBottom: 0}}
            centered
            items={[
              {
                label: (
                  <Button
                    text={'Home'}
                    type={activeTab === 'home' ? 'default' : 'ghost'}
                    icon={ <SvgIcon type={'home'} />}
                    className={'tab-btn'}
                    onClick={() => {}}
                  />
                ),
                key: 'home',
                children: <FeaturedHouseCarousel ref={carousel} data={homesData} />,
              },
              {
                label: (
                  <Button
                    text={'Villa'}
                    type={activeTab === 'villa' ? 'default' : 'ghost'}
                    icon={ <SvgIcon type={'villa'} />}
                    className={'tab-btn'}
                    onClick={() => {}}
                  />
                ),
                key: 'villa',
                children: <FeaturedHouseCarousel ref={carousel2} data={villasData} />,
              },
              {
                label: (
                  <Button
                    text={'Apartment'}
                    type={activeTab === 'apartment' ? 'default' : 'ghost'}
                    icon={ <SvgIcon type={'apartment'} />}
                    className={'tab-btn'}
                    onClick={() => {}}
                  />
                ),
                key: 'apartment',
                children: <FeaturedHouseCarousel ref={carousel3} data={apartmentData} />,
              },
            ]}
         />
        </Col>

        <Col className={'btns-wrap'}>
          <Space size={'middle'}>
            <Button
              type={'primary'}
              className={'icon-btn'}
              onClick={onPrevSlides}
              icon={
                <SvgIcon
                  type={'nextArrow'}
                  className={'prev-arrow'}
                />
              }
            />
            <Button
              type={'primary'}
              className={'icon-btn'}
              onClick={onNextSlides}
              icon={
                <SvgIcon
                  type={'nextArrow'}
                  className={'nex-arrow'}
                />
              }
            />
          </Space>
        </Col>
      </Row>
    </SectionComponent>
  )

}
export { FeaturedHouse }
