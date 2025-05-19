import React, { useEffect, useState } from 'react'
import dummy1 from './image/doc1.jpg'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'




function Appointment({setOnedocter}) {

 const usenavigate = useNavigate()
 const [docdata,setDocdata]= useState([])
 useEffect(()=>{
     axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/appointment`)
     .then(result =>{
      // console.log(result)
      setDocdata(result.data)
      // console.log(docdata)
     })
     .catch(err => console.log(err))

},[])
  return (
    <div className='max-sm:pt-[50px]'>
        
        <div className='pt-[100px] grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:p-5 gap-[50px] p-[100px]'>
          {
            docdata.map((item,index) =>{
              return<>
               <div className='border border-gray-200 '>
              <div>
                <img src={item.profile} alt="" className=' ' />
              </div>
              <div className='w-[100%] mt-[20px]'>
                <h2 className='font-[700] text-[20px] max-sm:text-[18px] text-center'>{item.name}</h2>
                <h3 className='text-center py-1 text-[18px] max-sm:text-[16px]'>{item.profession}</h3>
                <div className='text-center pt-2 pb-3'>
                <button className='appbut' 
                onClick={()=>{usenavigate('/Doctorappointment/'+item._id); setOnedocter(item)}}
                >Appointment</button>
                {/* <button className='bg-[#c900df] text-white px-5 py-1  font-[500] pb-[8px] outline-none rounded-sm' 
                onClick={()=>{usenavigate('/Doctorappointment/'+item._id); setOnedocter(item)}}
                >Appointment</button> */}

                </div>
              </div>
            </div>
              </>
            })
          }
           
     
        </div>
    </div>
  )
}

export default Appointment