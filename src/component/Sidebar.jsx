import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { LiaGiftSolid } from "react-icons/lia";
import { FaRegChartBar } from "react-icons/fa";
import { CiBoxes } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { FiBox } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className='border' style={{height: '610px', width: '250px', paddingLeft: '10px', top: '85px', position: 'fixed' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div className='pt-2' style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>

          <Link to="/donations" style={{ textDecoration: 'none' }}>
            <button className='py-2 px-3' style={{ fontSize: '16px', color: 'black', textTransform: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none' }}>
              {/* <Inventory2OutlinedIcon /> */}
              <CiHome style={{fontSize:'24px'}}/>
              <span className='fs-6 fw-semibold px-2'>Donations</span>
            </button>
          </Link>

          <Link to="/otherdonation" style={{ textDecoration: 'none' }}>
            <button className='py-2 px-3' style={{ fontSize: '16px', color: 'black', textTransform: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none' }}>
              {/* <ChecklistOutlinedIcon /> */}
              <FiBox style={{fontSize:'24px'}}/>
              <span className='fs-6 fw-semibold px-2'>Other Donation</span>
            </button>
          </Link>

          <Link to="/ornaments" style={{ textDecoration: 'none' }}>
            <button className='py-2 px-3' style={{ fontSize: '16px', color: 'black', textTransform: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none' }}>
              {/* <ChecklistOutlinedIcon /> */}
              <CiBoxes style={{fontSize:'24px'}}/>
              <span className='fs-6 fw-semibold px-2'>Ornaments</span>
            </button>
          </Link>

          <Link to="/goods" style={{ textDecoration: 'none' }}>
            <button className='py-2 px-3' style={{ fontSize: '16px', color: 'black', textTransform: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none' }}>
              {/* <ChecklistOutlinedIcon /> */}
              <CiBoxes style={{fontSize:'24px'}}/>
              <span className='fs-6 fw-semibold px-2'>Goods</span>
            </button>
          </Link>

          <Link to="/sales" style={{ textDecoration: 'none' }}>
            <button className='py-2 px-3' style={{ fontSize: '16px', color: 'black', textTransform: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none' }}>
              {/* <AssessmentOutlinedIcon /> */}
              <FaRegChartBar style={{fontSize:'24px'}}/>
              <span className='fs-6 fw-semibold px-2'>Sales</span>
            </button>
          </Link>

          <Link  to="/gifts" style={{ textDecoration: 'none' }}>
          <button className='py-2 px-3' style={{ fontSize: '16px', color: 'black', textTransform: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none' }}>
            {/* <AccountCircleOutlinedIcon /> */}
            <LiaGiftSolid style={{fontSize:'24px'}}/>
            <span className='fs-6 fw-semibold px-2'>Gifts</span>
          </button>
          </Link>

          <Link  to="/report" style={{ textDecoration: 'none' }}>
          <button className='py-2 px-3'  style={{ fontSize: '16px', color: 'black', textTransform: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none' }}>
            {/* <ArchiveOutlinedIcon /> */}
            <TbReportAnalytics style={{fontSize:'24px'}}/>
            <span className='fs-6 fw-semibold px-2'>Reports</span>
          </button>
          </Link>

          
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <button className='py-2 px-3' style={{ fontSize: '16px', color: 'black', textTransform: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none' }}>
            {/* <SettingsOutlinedIcon /> */}
            <IoIosSettings style={{fontSize:'24px'}} />
            <span className='fs-6 fw-semibold px-2'>Setting</span>
          </button>

          <button className='py-2 px-3' style={{ fontSize: '16px', color: 'black', textTransform: 'none', display: 'flex', alignItems: 'center', border: 'none', background: 'none' }}>
            {/* <LogoutOutlinedIcon /> */}
            <IoLogOutOutline style={{fontSize:'24px'}} />
            <span className='fs-6 fw-semibold px-2'>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
