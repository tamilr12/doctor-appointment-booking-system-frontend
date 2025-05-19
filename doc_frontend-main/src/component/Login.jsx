import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import doctericon from './image/doctericon.png'
import { useNavigate } from 'react-router-dom'
function Login({setUserAccount}) {
  const [show1,setShow1]=useState(false)
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [sname,setSname]=useState()
  const [spassword,setSpassword]=useState()
  const [profileurl,setProfileurl] = useState('')
  const usenavigate = useNavigate()
   const [errorsa, setErrorsa] = useState({
          username: '',
          email: '',
          password: '',
        });
  const [errorsb, setErrorsb] = useState({
          username: '',
          password: '',
        });
  const validatelogin = () =>{
      
      let formErrors = {username:'',email:'',password:''}
      let loginstatus = true;
      if(!name){
        formErrors.username = 'Username is required'
        loginstatus = false;
      }
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!email) {
        formErrors.email = 'Email is required';
        loginstatus = false;
      } else if (!emailPattern.test(email)) {
        formErrors.email = 'Invalid email format';
        loginstatus = false;
      }
      if (!password) {
          formErrors.password = 'Password is required';
          loginstatus = false;
        }
        setErrorsa(formErrors)
        
        return loginstatus;

   
  }
  
  
  const validateSignup = () =>{
    let formErrorsb = {username:'',email:'',password:''}
    let signupstatus = true;
    if(!sname){
      formErrorsb.username = 'Username is required'
      signupstatus = false;
    }
    if(!spassword){
      formErrorsb.password = 'Password is required'
      signupstatus = false;
    }
    setErrorsb(formErrorsb)
    return signupstatus
  }
  const handlelogin = (e) =>{
    e.preventDefault()
    if(validatelogin()){
      
      axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/login`,{name,email,password,profileurl})
      .then(result =>{
        console.log(result)
        if(result.data=="Username already exist"){
          alert(result.data)
        }
        else{
         setUserAccount(result.data)
         usenavigate('/home')
        }
      })
      .catch(err => console.log(err))
    }
   

  }
  const handlesignin = (e) =>{
    e.preventDefault()
    if(validateSignup()){
    
       axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/signup`,{sname,spassword})
       .then(results =>{
        if(results.data.email){
          // console.log(results.data)
          setUserAccount(results.data)
          usenavigate('/home')
        }
        else{
          alert(results.data)
        }
      })
       .catch(err => console.log(err))
    }
    
  }
  return (
    <div className=' bg-[#fdfcfd] absolute mt-0 h-screen w-[100vw] flex items-center justify-center '>
      <div className='absolute z-[3] top-2 overflow-hidden  right-2'>
       
            <div className='flex items-center hn cursor-pointer ' onClick={()=>{usenavigate('/Doctorligin')}}> <p className='font-[600] translate-x-[180px] sm:px-3 pt-2 text-[15px] max-sm:px-2  as text-[#c900df]   '>Doctor's Login</p><img src={doctericon} alt="" className='w-[40px] z-[5]  max-sm:w-[25px]  ' /></div>
            
      </div>
      <div className='relative overflow-hidden w-[100vw] h-screen flex items-center justify-center tran'>
      <div className={`w-[100%] px-3 absolute ${show1?'activeshow':''} tran`}>
      <div className='max-w-[600px] m-auto  shadow-sm bg-[#fffefefc]  '>
        <h2 className='text-center font-[700] pt-6 text-[18px] text-[#c900df] tracking-[3px]'>SIGN UP</h2>
        <form  className='p-4' onSubmit={handlelogin}>
         <input type="text" placeholder='Username ' className={errorsa.username?"bod error":"  bod  "} value={name}
         onChange={(e)=>{setName(e.target.value)}}/>
        
         <input type="email" placeholder='Email ' className={errorsa.email?"bod error":"  bod  "} value={email}
         onChange={(e)=>{setEmail(e.target.value)}}/>
         {/* {errorsa.email && <><p>{errorsa.email}</p></>} */}
         <input type="password" placeholder='Password' className={errorsa.password?"bod error":"  bod  "} value={password}
         onChange={(e)=>{setPassword(e.target.value)}}/>
         <div className='w-[100%] flex items-center justify-center'>

         {/* <button type='submit' className='bg-[#c900df] text-white font-[500] px-6 py-1 '>Sign up</button> */}
         <button type='submit' className='button'>Sign up</button>
         </div>
         <div className='mt-[20px]'>
          <p>If you already have account?<span className='text-[#c900df] px-2 cursor-pointer' onClick={()=>setShow1(!show1)} >Login</span></p>
         </div>
        </form>
      </div>
        </div>






        <div className={`w-[100%] px-3 absolute translate-y-[700px] ${show1?'activeshow1':''} tran`}>
      <div className='max-w-[600px] m-auto  shadow-sm bg-[#fffefefc]  '>
        <h2 className='text-center font-[700] pt-6 text-[18px] text-[#c900df] tracking-[3px]'>LOGIN</h2>
        <form  className='p-4' onSubmit={handlesignin}>
         <input type="text" placeholder='Username ' className={errorsb.username?'bod error':'bod '} value={sname}
         onChange={(e)=> {setSname(e.target.value)}} />
         
         <input type="password" placeholder='Password' className={errorsb.password?'bod error':'bod'} value={spassword}
         onChange={(e)=> {setSpassword(e.target.value)}} />
         <div className='w-[100%] flex items-center justify-center'>

         {/* <button type='submit' className='bg-[#c900df] text-white font-[500] px-6 py-1 '>Login</button> */}
         <button type='submit' className='button'>Login</button>
         </div>
         <div className='mt-[20px]'>
          <p>If you don't have account?<span className='text-[#c900df] px-2 cursor-pointer' onClick={()=>setShow1(!show1)}>Sign up</span></p>
         </div>
        </form>
      </div>
        </div>
      </div>
     
     
    </div>
  )
}

export default Login