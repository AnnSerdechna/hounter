import {FC, Ref, useEffect, useRef, useState} from 'react'
import {Col, Tabs} from 'antd'
import {CarouselRef} from 'antd/lib/carousel'
import { collection, getDocs } from 'firebase/firestore'

import {Button, SvgIcon} from '../../components'
import {FeaturedHouseCarousel} from './FeaturedHouseCarousel'
import {FeatureHouseCarouselBtns} from './FeatureHouseCarouselBtns'
import {housesData, villasData, apartmentData, FeaturedHouseDataProps} from './featuredHouseData'
import {db} from '../../firebase'

const FeaturedHouseTabs: FC = () => {
  const [houses, setHouses] = useState<any>([])
  const [activeTab, setActiveTab] = useState('house')

  const housesCarousel = useRef<CarouselRef>(null)
  const villasCarousel = useRef<CarouselRef>(null)
  const apartmentCarousel = useRef<CarouselRef>(null)

  const housesCollectionRef = collection(db, 'houses')
  useEffect(() => {
    const getHouses = async () => {
      const data = await getDocs(housesCollectionRef)
      setHouses(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }

    getHouses()
  }, [])

  const onNextSlides = () => {
    housesCarousel?.current?.next()
    villasCarousel?.current?.next()
    apartmentCarousel?.current?.next()
  }

  const onPrevSlides = () => {
    housesCarousel?.current?.prev()
    villasCarousel?.current?.prev()
    apartmentCarousel?.current?.prev()
  }

  const onChange = (key: string) => {
    console.log(key, key)
    setActiveTab(key)
  }

  const getItem = (tabKey: string, tabData: FeaturedHouseDataProps[], carouselRef: Ref<CarouselRef>) => ({
    label: (
      <Button
        text={tabKey}
        type={activeTab === tabKey ? 'default' : 'ghost'}
        icon={ <SvgIcon type={tabKey} />}
        className={'tab-btn'}
        onClick={() => {}}
      />
    ),
    key: tabKey,
    children: <FeaturedHouseCarousel ref={carouselRef} data={tabData} />,
  })

  return (
  <>
    <Col span={24}>
      <Tabs
        defaultActiveKey={activeTab}
        onChange={onChange}
        style={{borderBottom: 0}}
        centered
        items={[
          getItem('house',  housesData, housesCarousel),
          getItem('villa', villasData, villasCarousel),
          getItem('apartment', apartmentData, apartmentCarousel),
        ]}
      />
    </Col>

    <Col className={'btns-wrap'}>
      <FeatureHouseCarouselBtns
        onPrevSlides={onPrevSlides}
        onNextSlides={onNextSlides}
      />
    </Col>
  </>
  )
}

export { FeaturedHouseTabs }
