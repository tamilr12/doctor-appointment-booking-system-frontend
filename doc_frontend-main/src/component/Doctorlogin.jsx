import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Doctorlogin({setOnedocter}) {
    const usenavigate = useNavigate()
    const [docid,setDocid] = useState()
    const [docpassword,setDocpassword] = useState()
    const [errorsc, setErrorsc] = useState({
              docid: '',
              docpassword: '',
         });
    const validatedoctor = () =>{
     let doctorstatus = true
     let formErrors = {
        docid: '',
        docpassword: '',
      }
      if(!docid){
        formErrors.docid = 'docter id is required'
        doctorstatus = false;
      }
      if(!docpassword){
        formErrors.docpassword = 'Password is required'
        doctorstatus = false;
      }
      setErrorsc(formErrors)
      return doctorstatus
    }
    // console.log(docid,docpassword)
    const doctorsumbit = (e) =>{
        e.preventDefault()
        // alert('doc')
        
        if(validatedoctor()){
          axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/doclogin`,{docid,docpassword})
          .then(res => {if(res.data.docid){
              setOnedocter(res.data)
              usenavigate('/Doctor')
          }
          else{
              alert(res.data)
          }
      })
          .catch(err => {alert(err)})
        }
 
    }
  return (
    <div className='fixed bg-white w-[100%] h-[100vh] '>

    <div className='relative overflow-hidden w-[100vw] h-screen flex items-center justify-center tran'>

    <div className={`w-[100%] px-3 absolute  tran`}>
      <div className='max-w-[600px] m-auto  shadow-sm bg-[#fffefefc]  '>
        <h2 className='text-center font-[700] pt-6 text-[18px] text-[#243375] tracking-[3px]'>DOCTOR'S LOGIN</h2>
        <form  className='p-4' onSubmit={doctorsumbit} >
         <input type="text" placeholder='Username ' value={docid} onChange={(e)=>{setDocid(e.target.value)}} className={errorsc.docid?'block outline-none w-[100%] h-[50px] mb-3 border-[3px] border-[#ff5e00]  pl-[10px]  ':'block outline-none w-[100%] h-[50px] mb-3 border-b-[3px] border-[#243375]  pl-[10px]  '} />
        
         <input type="password" placeholder='Password' value={docpassword} onChange={(e)=>{setDocpassword(e.target.value)}} className={errorsc.docpassword? 'block outline-none w-[100%] h-[50px] mb-3 border-[3px] border-[#ff5e00]  pl-[10px]':'block outline-none w-[100%] h-[50px] mb-5 border-b-[3px] border-[#243375] pl-[10px]'} />
         <div className='w-[100%] flex items-center justify-center'>

         {/* <button type='submit' className='bg-[#243375] text-white font-[500] px-6 py-1 tracking-[0.5px]'>ENTER</button> */}
         <button type='submit' className='button1'>ENTER</button>
         </div>
        
        </form>
      </div>
        </div>
    </div>
    </div>
  )
}

export default Doctorlogin