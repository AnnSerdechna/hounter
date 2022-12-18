import {FC} from 'react'
import {Tag} from 'antd'
import {SvgIcon} from '../../components'

const CategoryTag: FC<{ category: string }> = ({ category }) => {
  const iconType = category === 'popular' ? 'popular' : category === 'new house' ? 'home' : 'bestDeals'
  const backgroundColor = category === 'popular' ? '#FEE2E2' : category === 'new house' ? '#DBEAFE' : '#D1FAE5'
  const textColor = category === 'popular' ? '#EF4444' : category === 'new house' ? '#1D4ED8' : '#047857'

  return (
    <Tag
      icon={<SvgIcon type={iconType} />}
      color={backgroundColor}
      style={{color: textColor}}
      className={'category-tag'}
    >
      {category}
    </Tag>
  )
}

export { CategoryTag }
