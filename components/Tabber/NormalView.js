import React from 'react'
import { Tabs } from 'antd'

import { LableWrapper } from './styles'
import TabIcon from './TabIcon'
import { Trans, sortByIndex } from '../../utils'

const { TabPane } = Tabs

const NormalView = ({ source, active, onChange }) => (
  <Tabs onChange={onChange} activeKey={active}>
    {sortByIndex(source).map(item => (
      <TabPane
        tab={
          <LableWrapper>
            <TabIcon raw={item.raw} active={String(active === item.raw)} />
            {item.alias ? item.alias : Trans(item.title)}
          </LableWrapper>
        }
        key={item.raw}
      />
    ))}
  </Tabs>
)

export default NormalView
