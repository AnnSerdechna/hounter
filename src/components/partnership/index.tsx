import {FC} from 'react'
import {Image, Space, Typography} from 'antd'

import TravelokaLogo from '../../images/partner-icons/traveloka_logo.svg'
import TicketLogo from '../../images/partner-icons/ticket_logo.svg'
import AirbnbLogo from '../../images/partner-icons/airbnb_logo.svg'
import TripadvisorLogo from '../../images/partner-icons/tripadvisor_logo.svg'

const { Title } = Typography

const logos: Array<string> = [TravelokaLogo, TicketLogo, AirbnbLogo, TripadvisorLogo]

const Partnership: FC = () => (
  <>
    <Title level={5} style={{color: '#888B97'}}>Our Partnership </Title>
    <Space size={32} align={'center'}>
      {logos.map((logo, index) => (
        <Image key={index} src={logo} preview={false} />
      ))}
    </Space>
  </>
)

export { Partnership }
