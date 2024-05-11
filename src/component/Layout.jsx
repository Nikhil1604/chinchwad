import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ display: 'flex',flexDirection:'row' }}>
        <div className='mt-2' style={{ flex: '2',top: '85px'}}> {/* Sidebar width */}
          <Sidebar />
        </div>
        <div className='mt-2' style={{backgroundColor:'#ffffff' ,flex: '10', position: 'relative',top: '85px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout