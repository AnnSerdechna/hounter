import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuProps, Row, Space } from 'antd'

import HeaderBlur from '../../../images/bg-vector/hero-blur.png'
import { Button, Section } from '../../ui'
import { Logo } from '../../elements'
import { Navigation } from '../navigation'
import './index.less'

const headerMenu: MenuProps['items'] = [
  { key: 'about', label: <NavLink to={'/about'}>About</NavLink> },
  { key: 'article', label: <NavLink to={'/article'}>Article</NavLink> },
  { key: 'property', label: <NavLink to={'/property'}>Property</NavLink> },
]

const Header: FC = () => {

  return (
    <Row className={'header-wrap'}>
      <img src={HeaderBlur} alt={''} className={'header-bg'} />

      <Section paddingBottom={0}>
        <Row justify={'space-between'} align={'middle'} className={'header'}>
          <Logo />
          <Space size={56} align={'center'}>
            <Navigation mode={'horizontal'} items={headerMenu} />
            <Button
              className={'signin-btn'}
            >
              {'Sign In'}
            </Button>
          </Space>
        </Row>
      </Section>
    </Row>
  )
}

export { Header }
