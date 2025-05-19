import React, { useEffect, useState } from 'react'
import profile from './image/sanji.jpg'
import profile1 from './image/zoro.jpg'
import profile2 from './image/nami.jpg'
import cancel from './image/cancel.jpg'
import edit from './image/1744523478922.png'
import noappointment from './image/noappointment.png'
import '../App.css'
import { useNavigate, useParams } from 'react-router-dom'
import { Icon } from "@iconify/react";
import axios from 'axios'
function User({useraccount,setUserAccount}) {
  // console.log('sas',useraccount)
  const[prox,setProx] = useState(useraccount.profileurl)
  const id = useParams()
  // console.log(id)
  
  useEffect(()=>{
    axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/getallpatient`)
    .then(result =>{
                const flitered =  result.data.filter((item,index) => item.userid === useraccount.name
                  )
                  // console.log('sasas',flitered)
                  setDetail(flitered)
                  
    })
    .catch(err => console.log(err))
    
  },[])
  
  const usenavigate = useNavigate()
  const [shox,setShox] = useState(false)
  const [detail,setDetail] = useState([])
  // console.log('cc',detail)
  const profilearray = [
    {
     id:0,
     proname:'luffy',
     prourl:'https://imgur.com/Z16soXB',
  } ,
    {
     id:1,
     proname:'zoro',
     prourl:'https://imgur.com/zKXchpK',
  } ,
    {
     id:2,
     proname:'nami',
     prourl:'https://imgur.com/fwYUIVz',
  } ,
    {
     id:3,
     proname:'usopp',
     prourl:'https://imgur.com/340A4tZ',
  } ,
    {
     id:4,
     proname:'sanji',
     prourl:'https://imgur.com/pAKsK2n',
  } ,
    {
     id:5,
     proname:'chopper',
     prourl:'https://imgur.com/lMqDOSS',
  } ,
    {
     id:6,
     proname:'robin',
     prourl:'https://imgur.com/S7G82Rm',
  } ,
    {
     id:7,
     proname:'franky',
     prourl:'https://imgur.com/BR59GEJ',
  } ,
    {
     id:8,
     proname:'brook',
     prourl:'https://imgur.com/NpDbaxd',
  } ,
    {
     id:9,
     proname:'jimbe',
     prourl:'https://imgur.com/iw6heyi',
  } ,
]
const [needprofile,setNeedproflie] = useState('')
const chageprofile = (info) =>{
setNeedproflie(info.prourl) 

setTimeout(()=>{
axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/changeproflie/${useraccount._id}`,{needprofile})
.then(res =>{console.log('done',res) 
  // setUserAccount(res.data)
 
  axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/getnewproflie/${useraccount._id}`)
  .then(ress =>{ console.log('no option',ress)
     setUserAccount(ress.data)})
  .catch(err => {console.log(err)})
  

})
.catch(err =>{console.log(err)})
},1000)
setShox(false)
}

  return (
    <div>
        <div className='pt-[100px]'>
           <div className={`fixed w-[100%]  ${shox ? '':'hidden'} h-[100vh] blu2  z-[2] `}>

            
             <div className='max-w-[860px] relative  grid  grid-cols-4 max-md:grid-cols-3  h-[500px] max-sm:h-[65vh]  m-auto border-[4px] border-[#c900df] bg-[#ffff] '>
             <div  className='absolute p-2 bg-[#c900df] right-[-4px]  top-[-40px] cursor-pointer ' onClick={()=>{setShox(false)}}>

             <img src={cancel} alt="" className=' w-[20px]  ' />
             </div>
              {profilearray.map((item,index)=>{
                return<>
                
                    <img src={item.prourl+'.jpeg'} onClick={()=>{setNeedproflie(item.prourl)}} onDoubleClick={()=>{chageprofile(item)}} alt="" className='rounded-[50%] cursor-pointer border-[4px] border-[#a110b1]  m-auto w-[120px] max-sm:w-[100px] h-[120px] max-sm:h-[100px]' />

                
                </>
              })}
             </div>
           </div>
           <div className='flex max-lg:flex-col items-center justify-between max-lg:justify-start gap-5 pt-[20px]'>
            <div className='max-lg:h-[350px] h-[100vh] '>
            <div className='w-[400px] max-sm:w-[350px]  '>
                <div className='relative'>

                <img src={`${useraccount.profileurl}${'.jpeg'}`} alt="" className='w-[250px] m-auto h-[250px] rounded-[50%] border-[7px] border-[#c900df] ' />
                <img src={edit} className='w-[35px] absolute top-2 right-14 max-sm:right-10 cursor-pointer' onClick={()=>{setShox(true)}}></img>
                </div>
                <h2 className='text-center mt-5 font-[700] text-[20px] text-[#4c0f53]'>{useraccount.name}</h2>
                 <div className='mt-3 flex flex-col gap-3 items-center justify-center'>
                 
                 <button className='px-4 py-1 bg-[#c900df] rounded-lg text-white font-[500]' onClick={()=>{usenavigate('/')}}>Log Out <Icon icon="material-symbols-light:exit-to-app-sharp" width="24" height="24" className='inline' /></button>
                 </div>
            </div>
            </div>
          
            <div className=' h-[100vh] flex-1 max-sm:w-[100%] '>
              {
                detail.length===0? <div className='   '>
                <div className='pr-[50px] max-lg:pr-[0px] '>
                  <p className='text-right max-lg:text-center'> Still you don't have book any appointment</p>
                   <div className='text-right max-lg:text-center'>
                   <button className='text-[#c900df] outline-none' onClick={()=>{usenavigate('/Appointmnet')}}> To get Appointment</button>
                   </div>
                  
                  <div className='flex justify-center items-center max-sm:mt-5  '>
                    <img src={noappointment} alt="" className='max-w-[600px] max-sm:max-w-[300px]' />
                  </div>
                </div>
  
              </div>:
              <div className=' items-center justify-center flex-1  flex-col gap-6 flex pb-5'>
              {detail.map((item,index) => {
            return<>
              
              <div className='m-auto njnj '>
                <div className=' bg-[#243375] md:py-5 md:pl-9 max-md:py-2 max-md:pt-3 max-md:pl-4 '>
                <h2 className='text-[#ffff]   font-[500] sm:text-[18px]  max-sm:text-[16px]'>Your Appointment </h2>
                </div>
          
            <table className='bg-[#f0f1f33f] pt-5 '>
              <tr className='sm:px-5 max-sm:px-2 pt-4 pb-4 block '>
                <th className='text-left pl-4 w-[400px] max-sm:w-[130px]'>Patient Name</th>
                <td className='pl-4 pr-4'><span className='pr-4'>-</span> {item.patientname}</td>
              </tr>
              <tr className='sm:px-5 max-sm:px-2 pb-4 block'>
                <th className='text-left pl-4  w-[400px] max-sm:w-[130px]'>Patient Age</th>
                <td className='pl-4 pr-4 '><span className='pr-4'>-</span> {item.patientage}</td>
              </tr>
              <tr className='sm:px-5 max-sm:px-2 pb-4 block'>
                <th className='text-left pl-4  w-[400px] max-sm:w-[130px]'>Patient Gender</th>
                <td className='pl-4 pr-4'><span className='pr-4'>-</span> {item.patientgender}</td>
              </tr>
              <tr className='sm:px-5 max-sm:px-2 pb-4 block'>
                <th className='text-left pl-4  w-[400px] max-sm:w-[130px]'>Patient Mobile Number</th>
                <td className='pl-4 pr-4'><span className='pr-4'>-</span> {item.patientnumber}</td>
              </tr>
              
              <tr className='sm:px-5 max-sm:px-2 pb-4 block'>
                <th className='text-left pl-4  w-[400px] max-sm:w-[130px]'>Doctor Name</th>
                <td className='pl-4 pr-4'><span className='pr-4'>-</span> {item.docname}</td>
              </tr>
              <tr className='sm:px-5 max-sm:px-2 pb-4 block'>
                <th className='text-left pl-4  w-[400px] max-sm:w-[130px]'>Doctor's Profession</th>
                <td className='pl-4 pr-4'><span className='pr-4'>-</span> {item.docprofession}</td>
              </tr>
              
              <tr className='sm:px-5 max-sm:px-2 pb-4 block'>
                <th className='text-left pl-4  w-[400px] max-sm:w-[130px]'>Time Slot</th>
                <td className='pl-4 pr-4'><span className='pr-4'>-</span> {item.timeslot}</td>
              </tr>
            </table>
              </div>
            
            
            </>
           })}
              </div>
              }
           
              

            </div>
         
          
           </div>
        </div>
        </div>
  )
}

export default User