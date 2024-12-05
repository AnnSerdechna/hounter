import { FC } from 'react'
import { Row, Select } from 'antd'

import { SvgIcon } from '../../ui/icon'
import { Button } from '../../ui/button'
import { usaStates } from '../../../sections/hero/statesData'

import './index.less'

const SearchSelect: FC = () => {

  return (
    <Row className={'select-wrap'}>
      <SvgIcon type={'location'} style={{ display: 'block' }} className={'location-icon'} />
      <Select
        placement={'topLeft'}
        showSearch
        style={{ width: '100%' }}
        suffixIcon={(
          <Button
            type={'primary'}
            className={'search-btn'}
            style={{ userSelect: 'all' }}
            onClick={() => { }}
          >
            Search
            <SvgIcon type={'nextArrow'} />
          </Button>
        )}
        placeholder={'Search for the location you want!'}
        options={usaStates.map(state => ({
          value: state.abbreviation,
          label: state.name,
        }))}
      />
    </Row>
  )
}

export { SearchSelect }
