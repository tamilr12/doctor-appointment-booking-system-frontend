import React from 'react'
import back from './image/back02.png'
import homeicon from './image/homeicon.png'
import appointmenticon from './image/appointmenticon.png'
import doctericon from './image/doctericon.png'
import usericon from './image/usericon.png'
import logo from './image/relogo.png'
import { useNavigate } from 'react-router-dom'
import '../App.css'
function Navbar({useraccount}) {
 const usenavigate = useNavigate()
  return (
    <div>

        <div className='relative' >
        <img src={back} alt="" className='absolute left-[-160px] top-[-10px] max-sm:left-[-100px]  max-sm:top-[0px] w-[600px]' />
        <div className='absolute left-[16px] max-sm:left-0'>
          <ul className='flex gap-6 max-sm:gap-2 p-2'>
            <li className='inline cursor-pointer  ' onClick={()=>{usenavigate('/home')}}>
               <div className='flex items-center overflow-hidden dis1'><img src={homeicon} alt="" className='w-[40px] max-sm:w-[25px] ' /> <span className=' font-[500] pl-2 text-[#c900df] max-w-[0px] hid1'>Home</span></div>
            </li>
            <li  className='inline cursor-pointer' onClick={()=>{usenavigate('/Appointmnet')}}>
            <div className='flex items-center  overflow-hidden dis2'><img src={appointmenticon} alt="" className='w-[40px] max-sm:w-[25px] ' /> <span className=' font-[500] pl-2 text-[#c900df] max-w-[0px] hid2'>Appointment</span></div>
            </li>
            
            <li  className='inline cursor-pointer'  onClick={()=>{usenavigate('/user/'+useraccount._id)}}>
            <div className='flex items-center  overflow-hidden dis4'><img src={usericon} alt="" className='w-[40px] max-sm:w-[25px] ' /> <span className=' font-[500] pl-2 text-[#c900df] max-w-[0px] hid4'>User</span></div>
            </li>
          </ul>
        </div>
        </div>
        <div className='absolute right-0 top-0 p-4'>
          <img src={logo} alt="" className='w-[120px] max-sm:w-[100px] cursor-pointer'  onClick={()=>{usenavigate('/')}}/>  
        </div>
    </div>
  )
}

export default Navbar