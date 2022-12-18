import {Space} from 'antd'
import {FC} from 'react'

import {Button, SvgIcon} from '../../components'

const FeatureHouseCarouselBtns: FC<{ onPrevSlides: () => void, onNextSlides: () => void }> = ({ onPrevSlides, onNextSlides }) => (
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
)

export { FeatureHouseCarouselBtns }
