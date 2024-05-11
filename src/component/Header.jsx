import React from 'react'
// import { CiSearch } from "react-icons/ci";
import logo from '../images/logo.jpg'
import ima from '../images/image.jpg'
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className='border' style={{ position: 'fixed', width: '100%', padding: '10px 0', zIndex: '1000',backgroundColor:'#ffffff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingLeft: '10px' }}>
        <div style={{ flex: '11', display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" style={{ paddingRight: '50px' }} />
          {/* <div>
            <input type="text" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Search product, supplier, order" />
            <span style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }}>
              <CiSearch style={{ fontSize: 'medium' }} />
            </span>
          </div> */}
        </div>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IoIosNotificationsOutline style={{fontSize:'24px'}} />
          <img src={ima} alt='oth' style={{ marginRight: '30px', borderRadius: '50%', width: '40px', height: '40px' }} />
        </div>
      </div>
    </header>
  )
}

export default Header