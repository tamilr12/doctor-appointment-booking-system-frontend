import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate, useParams } from 'react-router-dom'
import add from './image/add.png'
import send from './image/send.png'
import axios from 'axios'
import { Button } from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function DoctorAppointent({ onedoctor, useraccount, setOnedocter }) {
    useEffect(() => {
      if (window.performance.navigation.type === 1  && window.location.pathname !== "/") {
        window.location.href = "/";
      }
    }, []);
    const usenavigate = useNavigate()
    // console.log('check', onedoctor)
    // console.log(useraccount.name)
    const { id } = useParams()
    //   console.log(id)
    // console.log(onedoctor.patientAt1.time)
    const [about, setAbout] = useState(true)
    const [feedback, setFeedback] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [patientname, setPatientname] = useState('')
    const [patientage, setPatientage] = useState('')
    const [patientgender, setPatientgender] = useState('')
    const [patientnumber, setPatientnumber] = useState('')
    const [available,setAvailable] = useState(true)
    const [userid, setUserid] = useState(useraccount.name)
    // console.log('dsda',userid)
    const [patientid, setPatientid] = useState(useraccount.name)
    const [docid, setDocid] = useState(onedoctor.docid)
    const [docname, setDocname] = useState(onedoctor.name)
    const [docprofession, setDocprofession] = useState(onedoctor.profession)
    // console.log(patientid)
    const [useridentity, setUseridentity] = useState('')
    const [time10, setTime10] = useState(false)
    const [time01, setTime01] = useState(false)
    const [time04, setTime04] = useState(false)
    const [timeslot, setTimevalue] = useState('10.00 AM to 12.00 PM')
    const [errorsd, setErrorsd] = useState({
              pname: '',
              page: '',
              pgender: '',
              pnumner: '',
            });
    const validatedocpatient = () =>{
           let isvalid = true;
           let formErrors = {
            pname: '',
            page: '',
            pgender: '',
            pnumner: '',
           }
           if(!patientname){
            formErrors.pname = 'Patient name is requierd'
            isvalid =false
           }
           if(!patientage){
            formErrors.page = 'Patient age is requierd'
            isvalid =false
           }
           if(!patientgender){
            formErrors.pgender = 'Patient gender is requierd'
            isvalid =false
           }
           const phoneRegex = /^[0-9]{10}$/;
           if(!patientnumber){
            formErrors.pnumner = 'Patient mobile number is requierd'
            isvalid =false
           }
          
           if (!phoneRegex.test(patientnumber)) {
            formErrors.pnumner = 'Please enter a valid 10-digit mobile number'
            isvalid =false
            
          } 
           setErrorsd(formErrors)
           return isvalid

    }
    const docpatient = (e) => {
        e.preventDefault()
        if(validatedocpatient()){
              if (time10) {
            axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/appointmentwithdoc/` + id, { patientname, patientage, patientgender, patientnumber, patientid,})
                .then(res => {console.log(res);setOnedocter(res.data)})
                .catch(err => console.log(err))

            axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/docandpatient`, { patientname, patientage, patientgender, patientnumber, userid, docid, docname, docprofession, timeslot })
                .then(res => { console.log(res) })
                .catch(err => console.log(err))
        }
        if (time01) {
            axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/appointmentwithdoc2/` + id, { patientname, patientage, patientgender, patientnumber, patientid,})
                .then(res => {console.log(res);setOnedocter(res.data)})
                .catch(err => console.log(err))

            axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/docandpatient`, { patientname, patientage, patientgender, patientnumber, userid, docid, docname, docprofession, timeslot })
                .then(res => { console.log(res) })
                .catch(err => console.log(err))
        }
        if (time04) {
            axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/appointmentwithdoc3/` + id, { patientname, patientage, patientgender, patientnumber, patientid,})
                .then(res => {console.log(res);setOnedocter(res.data)})
                .catch(err => console.log(err))

            axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/docandpatient`, { patientname, patientage, patientgender, patientnumber, userid, docid, docname, docprofession, timeslot })
                .then(res => { console.log(res) })
                .catch(err => console.log(err))
        }
        setTimeout(() => {
            usenavigate(`/user/${useraccount._id}`)
        }, 1000);
        }
       
        // console.log(patientname)   

        // console.log(patientage)   
        // console.log(patientgender)   
        // console.log(patientnumber)   

      
    }
    const [reviewcontent, setReviewcontent] = useState(false)
    const [username, setUsername] = useState(useraccount.name)
    const [userprofile, setUserprofile] = useState(useraccount.profileurl)
    const [content, setContent] = useState('')
    // console.log(content)
    const review1 = {
        userprofile: userprofile,
        username: username,
        content: content,
        like: false,
        dislike: false,
        likecount: 0

    }
    const addreview = () => {
        axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/addreview/${id}`, { review1 })
            .then(res => {
                // console.log(res) 
                setOnedocter(res.data)
                setReviewcontent(false)
                setContent('')

            })
            .catch(err => console.log(err))
    }
    const time1 = new Date();
    const curr = time1.getHours()*60+time1.getMinutes()
    // console.log(curr) 
    const [plot1,setPlot1] = useState(false)
    const [plot2,setPlot2] = useState(false)
    const [plot3,setPlot3] = useState(false)
    useEffect(()=>{
    if(curr>600){
        setPlot1(true)
    }
    if(curr>780){
        setPlot2(true)
    }
    if(curr>960){
        setPlot3(true)
    }
    },[])
    const isPlaceholder = patientgender === '';
    return (
        <div className='bg-[#fffcff]  min-h-[100vh]'>
            <div className={`fixed w-[100%] transition-all ${confirm ? 'flex' : 'hidden'}  z-30 h-[100vh] blu  items-center justify-center`}>
                <div className='max-w-[500px] transition-all  bg-[#fdfcfd]  p-3 rounded shadow'>
                    <form onSubmit={(e) => { docpatient(e) }} className='flex flex-col gap-2' >
                        <div>
                            <h2 className='text-[#c900df] font-[500] mb-3'>Patient Details ,</h2>
                        </div>
                        <div>
                            <input value={patientname} onChange={(e) => { setPatientname(e.target.value) }} type="text" className={errorsd.pname ?'bg-white place px-3 py-2 w-[300px] text-[17px] outline-none border-[2px] border-[#ff5e00]':'bg-white place px-4 py-2 w-[300px] text-[17px] outline-none border-[2px] border-[#c900df]'} placeholder='Patient Name' />
                        </div>
                        <div>
                            <input value={patientage} onChange={(e) => { setPatientage(e.target.value) }} type="number" className={errorsd.page ?'bg-white place px-3 py-2 w-[300px] text-[17px] outline-none border-[2px] border-[#ff5e00]':'bg-white place px-4 py-2 w-[300px] text-[17px] outline-none border-[2px] border-[#c900df]'} placeholder='Patient age ' />
                        </div>
                        <div>
                            {/* <input value={patientgender} onChange={(e) => { setPatientgender(e.target.value) }} type="text" className='bg-white place px-4 py-2 w-[300px] text-[17px] outline-none border-[2px] border-[#c900df]' placeholder='Patient Gender' /> */}
                            <select name="" id="" value={patientgender} onChange={(e) => { setPatientgender(e.target.value) }}  className={errorsd.pgender?`text-black'}bg-white px-3  py-2 w-[300px] text-[17px] place outline-none border-[2px] border-[#ff5e00]`:`  bg-white rounded-none place px-3 py-2 w-[300px] text-[17px] outline-none border-[2px] border-[#c900df]`} placeholder='Patient Gender' >
                                <option value="" disabled hidden >Patient Gender</option>
                                <option value="Male" >Male</option>
                                <option value="Female" >Female</option>
                                <option value="Others" >Others</option>
                            </select>
                        </div>
                        <div>
                            <input value={patientnumber} onChange={(e) => { setPatientnumber(e.target.value) }} type="number" className={errorsd.pnumner ?'bg-white place px-3 py-2 w-[300px] text-[17px] outline-none border-[2px] border-[#ff5e00]':'bg-white place px-4 py-2 w-[300px] text-[17px] outline-none border-[2px] border-[#c900df]'} placeholder='Patient Mobile Number' />
                        </div>
                        <div>
                            <input type="submit" value="Confirm" className=' bg-[#c900df] w-[150px] px-3 py-1 text-white font-[500]' />
                        </div>
                    </form>

                </div>
            </div>
            <div className='pt-[100px] flex items-center justify-center'>
                <div className='w-[80%] max-xl:w-[97%] flex max-lg:flex-col'>
                    <div className='w-[63%] max-lg:w-[100%]'>
                        <div className='flex gap-[30px] max-sm:gap-[10px]'>
                            <div className='px-[30px] flex items-end justify-center bg-[#fde3ff] rounded-xl '>
                                <img src={onedoctor.profile} alt="" className='w-[200px]' />
                            </div>
                            <div className='flex flex-col py-6 gap-4'>
                                <h3 className='text-[#20b3d0] max-sm:px-1 sm:px-3 py-2 sm:text-[18px] max-sm:text-[16px]  bg-[#d3f2f9] rounded-[10px] font-[600] text-center w-[140px] lowercase'>{onedoctor.profession} </h3>
                                <h2 className='font-[700] text-[20px]  max-sm:text-[16px]'>{onedoctor.name}</h2>
                                <p className='text-gray-400 max-sm:text-[16px]'>Specialization in {onedoctor.profession}</p>
                            </div>
                        </div>
                        <div className='mt-[60px] pb-5'>
                            <div>
                                <ul className='mb-3'>
                                    <li onClick={() => { setAbout(true); setFeedback(false) }} className={`inline transition-all px-3 font-[500] cursor-pointer  ${about ? 'border-b-[3px] pb-1 border-gray-600' : ''}`}>About</li>
                                    <li onClick={() => { setAbout(false); setFeedback(true) }} className={`inline transition-all px-3 ml-2 font-[500] cursor-pointer ${feedback ? 'border-b-[3px] pb-1 border-gray-600' : ''}`}>Feedback</li>
                                </ul>
                            </div>
                            <hr />
                            {
                                about && <p className='sm:py-4 max-sm:py-0 px-1 max-sm:text-[16px] text-gray-400 indent-[25px] tracking-wide'>
                                    {onedoctor.about}
                                </p>
                            }
                            {
                                feedback &&
                                <div>
                                    <div className='p-3 flex justify-between items-center'>
                                        <h2 className='font-[600] text-[20px] max-sm:text-[16px]'>All Reviews ({onedoctor.review.length}) </h2>
                                        <button className='outline-none' onClick={() => { setReviewcontent(!reviewcontent); }}><img src={add} alt="" className='w-[23px] ' /></button>
                                    </div>
                                    <div  className={`max-h-0 overflow-hidden ${reviewcontent ? 'max-h-[300px]  ' : 'max-h-0'} transition-all `}>
                                        <div className={`p-3 `}>

                                            <div className='relative'>
                                                <textarea name="" value={content} onChange={(e) => { setContent(e.target.value) }} className='outline-none p-2  border resize-none overflow-hidden border-[#f68ffe] w-[100%] min-h-[100px]'></textarea>
                                                <button onClick={() => { addreview() }} className='absolute bor right-0 bottom-[6px] px-4 max-sm:scale-75 max-sm:right-[-13px] max-sm:bottom-[3px] py-1 flex items-center justify-center bg-[#f68ffe] text-white font-bold '>Add <img src={send} alt="" className='ml-2 w-[20px] inline' /> </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div>

                                        {
                                            onedoctor.review.map((item, index) => {
                                                return <>
                                                    <div className='border-b border-gray-200 pb-3 pt-3'>
                                                        <div className='flex gap-3 items-center'>
                                                            <div>

                                                                <img src={item.userprofile + '.jpeg'} alt="" className='w-[60px] rounded-[50%]' />
                                                            </div>
                                                            <div>
                                                                <h2 className='text-[500] sm:text-[17px] max-sm:text-[16px] text-[#901a76]'>{item.username}</h2>
                                                                <h3 className='text-gray-500 sm:text-[17px] max-sm:text-[14px]'>
                                                                    {new Date(item.date).toLocaleString('default', {
                                                                        month: 'long',
                                                                        day: 'numeric',
                                                                        year: 'numeric',
                                                                        hour: '2-digit',
                                                                        minute: '2-digit',
                                                                        hour12: true,
                                                                    })}
                                                                </h3>
                                                            </div>

                                                        </div>
                                                        <div className='mt-2 pl-[70px]'>
                                                            <p>{item.content} </p>
                                                        </div>
                                                    </div>
                                                </>
                                            })
                                        }


                                    </div>
                                </div>
                            }


                        </div>
                    </div>
                    <div className='w-[37%] max-lg:w-[100%] max-lg:mb-5'>
                        <div className='bg-white rounded-md shadow-sm p-4 sds'>
                            <h2 className='mb-[20px] font-[500] max-sm:text-center sm:text-[18px] max-sm:text-[16px]'>Available Time Slots :</h2>
                            <div className='flex  max-sm:flex-col max-sm:gap-3 justify-between items-center pb-3 '>
                                <p className='text-gray-500 pt-3 text-[17px]'>10.00 AM to 12.00 PM</p>
                                {onedoctor.patientAt1.available == true ? <button className='outline-none w-[195px] bg-[#a433ac] text-white px-6 py-[10px]  rounded-md font-[500] tracking-[0.5px] cursor-not-allowed'>Booked</button> : 
                                 <button onClick={() => { setConfirm(true); setTime10(true); setTime01(false); setTime04(false); setTimevalue('10.00 AM to 12.00 PM') }} className={`outline-none w-[195px] cursor-pointer ${plot1?'pointer-events-none cursor-not-allowed bg-gray-400':''} bg-[#f34eff] text-white px-6 py-[10px]  rounded-md font-[500] tracking-[0.5px]`}>Book Appointment</button>
                               }
                            </div>
                            <div className='flex  max-sm:flex-col max-sm:gap-3 justify-between items-center pb-3'>
                                <p className='text-gray-500 pt-3 text-[17px]'>01.00 PM to 03.00 PM</p>
                                {onedoctor.patientAt2.available == true ?  <button className='outline-none w-[195px] bg-[#f34eff] text-white px-6 py-[10px]  rounded-md font-[500] tracking-[0.5px] cursor-not-allowed'>Booked</button>  : 
                                  <button onClick={() => { setConfirm(true); setTime10(false); setTime01(true); setTime04(false); setTimevalue('01.00 PM to 03.00 PM') }} className={`outline-none w-[195px] cursor-pointer ${plot2?'pointer-events-none cursor-not-allowed bg-gray-400':''} bg-[#f34eff] text-white px-6 py-[10px]  rounded-md font-[500] tracking-[0.5px]`}>Book Appointment</button>
                         
                                }
                                  </div>
                            <div className='flex  max-sm:flex-col max-sm:gap-3 justify-between items-center '>
                                <p className='text-gray-500 pt-3 text-[17px]'>04.00 AM to 06.00 PM</p>
                                {onedoctor.patientAt3.available == true ? <button className='outline-none w-[195px] bg-[#f34eff] text-white px-6 py-[10px]  rounded-md font-[500] tracking-[0.5px] cursor-not-allowed'>Booked</button>  : 
                                  <button onClick={() => { setConfirm(true); setTime10(false); setTime01(false); setTime04(true); setTimevalue('04.00 PM to 06.00 PM') }} className={`outline-none w-[195px] cursor-pointer ${plot3?'pointer-events-none cursor-not-allowed bg-gray-400':''} bg-[#f34eff] text-white px-6 py-[10px]  rounded-md font-[500] tracking-[0.5px]`}>Book Appointment</button>
                                }
                              </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default DoctorAppointent