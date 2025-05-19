import React, { useEffect, useState } from 'react'
import base from './image/base.png'
import '../App.css'

import qw1 from './image/guarantee.png'
import qw2 from './image/health-tech.png'
import qw3 from './image/doctor-consultation.png'
import Aboutus from './Aboutus'


import axios from 'axios'
function Home({useraccount,setUserAccount}) {
  const [profileurlx,setProfileurlx] = useState('https://imgur.com/Z16soXB')
  console.log('xcxcx',useraccount._id)
  useEffect(()=>{
    
    
       if(useraccount.profileurl===''){
        axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/profileinitial/${useraccount._id}`,{profileurlx})
        .then(res => { console.log('successfull',res) ;setUserAccount(res.data)})
        .catch(err => console.log(err))
       }

  },[])
 
  return (
    <div>
      
      <div className='pt-[100px] pb-[20px] '>

        <div className='flex items-center justify-center border-b bbbb  border-gray-100'>
          <img src={base} alt="" className='max-w-[840px] max-md:w-[100%]  ' />
        </div>
      </div>
      <div className='grid grid-cols-3 max-lg:grid-cols-1 my-[10px] items-center gap-3 justify-center px-6 w-[100%]'>
        <div className='text-center p-3 min-h-[260px]'>
          <img src={qw1} alt="" className='w-[80px] m-auto mb-8' />
          <h2 className='font-[600] text-[19px] max-sm:text-[16px] mt-2 mb-4'>Satisfaction Guarantee</h2>
          <p className='text-[15px]'>We guarantee your satisfaction, if you're not happy with your appointment, we’ll work to resolve any concerns promptly</p>
        </div>
        <div className='text-center p-3  min-h-[260px]'>
          <img src={qw2} alt="" className='w-[80px] m-auto mb-8'/>
          <h2 className='font-[600] text-[19px] max-sm:text-[16px] mt-2 mb-4'>Awesome Technology</h2>

          <p className='text-[15px]'>Experience cutting-edge technology that simplifies booking, enhances care, and keeps you connected with your doctor anytime, anywhere</p>
        </div>
        <div className='text-center p-3  min-h-[260px]'>
          <img src={qw3} alt="" className='w-[80px] m-auto mb-8'/>
          <h2 className='font-[600] text-[19px] max-sm:text-[16px] mt-2 mb-4'>Professional Doctor</h2>

          <p className='text-[15px]'>Connect with highly qualified, experienced doctors committed to providing compassionate, expert care tailored to your unique health needs.</p>
        </div>

      </div>
      <div>
        <Aboutus />
      </div>
    </div>

  )
}

export default Home