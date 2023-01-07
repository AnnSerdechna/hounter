import { FC } from 'react'
import {NavLink} from 'react-router-dom'
import {MenuProps, Row, Space} from 'antd'

import {Button, Logo, Navigation, SectionComponent} from '../../components'
import HeaderBlur from '../../images/bg-vector/hero-blur.png'
import './index.less'

const headerMenu: MenuProps['items'] = [
  { key: 'about', label: <NavLink to={'/about'}>About</NavLink> },
  { key: 'article', label: <NavLink to={'/article'}>Article</NavLink> },
  { key: 'property', label: <NavLink to={'/property'}>Property</NavLink> },
]

const Header: FC = () => (
  <Row className={'header-wrap'}>
    <img src={HeaderBlur} alt={''} className={'header-bg'} />

    <SectionComponent paddingBottom={0}>
      <Row justify={'space-between'} align={'middle'} className={'header'}>
        <Logo />
        <Space size={56} align={'center'}>
          <Navigation mode={'horizontal'} items={headerMenu} />
          <Button text={'Sign In'} onClick={() => {}} className={'signin-btn'} />
        </Space>
      </Row>
    </SectionComponent>
  </Row>
)

export { Header }
