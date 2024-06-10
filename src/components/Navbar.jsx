import React from 'react'
import logo from '../logo.png'
import { data } from '../data'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

function Navbar() {
  return (
    <div className='flex justify-between  bg-[#F0F8FF] border-b-2 p-2 text-white shadow-xl border-2 border-slate-500/10 backdrop-blur-sm bg-slate-600/20'>
        <div className='flex'><div><img className='w-[100px]'  src={logo}/></div><div className='font-bold ml-10 '>{data.courseName}</div></div>

{/* Icons */}
        <div className='flex'>
          <div className='mx-1'> <DarkModeIcon /></div>
          <div className='mx-1'> <HomeIcon /></div>
          <div className='mx-1'> <FeedIcon /></div>
          <div className='mx-1'> <BarChartIcon /></div>
          <div className='mx-1'> <AccountCircleIcon /></div>
          <div className='mx-1'> <PowerSettingsNewIcon /></div>

        </div>
    </div>
  )
}

export default Navbar