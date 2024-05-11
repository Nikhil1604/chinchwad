import React from 'react'
import SalesOverview from './elements/SalesOverview'
import Help from './elements/Help'
import CorrectionRequest from './elements/CorrectionRequest'

import InventorySummary from './elements/InventorySummary'
import Donation from './elements/Donation'
import InventorySub from './elements/Inventory'

const Dashboard = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: '8' }}>
          <SalesOverview />
          <CorrectionRequest />
          <InventorySub />
        </div>
        <div style={{ flex: '4' }}>
          <Help />
          <InventorySummary />
          <Donation />
        </div>
      </div>
    </div>
  )
}

export default Dashboard