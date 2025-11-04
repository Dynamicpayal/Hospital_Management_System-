import React from 'react'
import {IconHeartbeat,IconLayoutGrid,IconStethoscope,IconMoodHeart,IconCalendarCheck,IconPillFilled} from '@tabler/icons-react'
import { Avatar } from '@mantine/core'
import { NavLink } from 'react-router-dom'

const links=[
  {
    name:"Dashboard",
    url:"/dashboard",
    icon:<IconLayoutGrid stroke={1.5}/>
  },
  {
    name:"Doctors",
    url:"/doctors",
    icon:<IconStethoscope stroke={1.5}/>
  },
  {
    name:"Patients",
    url:"/patients",
    icon:<IconMoodHeart stroke={1.5}/>
  },
  {
    name:"Appointments",
    url:"/appointments",
    icon:<IconCalendarCheck stroke={1.5}/>
  },
  {
    name:"Pharmacy",
    url:"/pharmacy",
    icon:<IconPillFilled stroke={1.5}/>
  }
]
const Sidebar = () => {
  return (
  <div className='flex '>
    <div className='w-64'></div>
   
    <div className='w-64 h-screen fixed overflow-y-auto bg-[#212529] flex flex-col gap-8 items-center '>
      <div className='fixed z-500 bg-[#212529] py-3 text-[#32b9a9] flex gap-1 items-center'>
        <IconHeartbeat size={40} stroke={2.5}/>
        <span className='font-heading font-semibold text-3xl' >Pulse</span>
      </div>
      <div className='flex flex-col mt-20 gap-5'>
      <div className='flex flex-col gap-1 items-center'>
      <div className='p-1 bg-white rounded-full shadow-lg '>
        <Avatar variant='filled' src="user.png" size="xl" alt="it's me!"/>
      </div>
        <span className='font-medium text-white'>Sradha</span>
        <text className='text-gray-400'>Admin</text>
      </div>
       <div className='flex flex-col gap-1 '>
        {
          links.map((link)=>{
            return <NavLink to={link.url} key={link.url} className={({isActive})=>`flex items-center gap-3 w-full font-medium text-[#F0F3FB] px-4 py-5 rounded-lg ${isActive?"bg-[#32b9a9] text-gray-900":"hover:bg-gray-100 hover:text-[#212529]"}`}>
                  {link.icon}
                  <span>{link.name}</span>
    
            </NavLink>
          })
        }
      </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
