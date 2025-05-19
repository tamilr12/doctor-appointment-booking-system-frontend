import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./component/Login"
import Home from "./component/Home"
import Appointment from "./component/Appointment"
import Navbar from "./component/Navbar"
import DoctorAppointent from "./component/DoctorAppointent"
import { useEffect, useState } from "react"
import User from "./component/User"
import Doctorlogin from "./component/Doctorlogin"
import Doctor from "./component/Doctor"
import ScrollToTop from "./component/ScrollToTop"

function App() {
const [onedoctor,setOnedocter] = useState({"_id":{"$oid":"67f7bd07f928dde007aacda8"},"name":"Dr. Jonas Salk","email":"jonas@gmail.com","profession":"Neurologist","age":{"$numberInt":"25"},"docid":"doc1","docpassword":"doc1","isActive":false,"profile":"https://i.imgur.com/XZkFRcx.jpeg","about":"Dr. Jonas Salk is a compassionate and experienced Neurologist dedicated to providing high-quality, patient-centered care. With over 4 years of experience, Dr. Salk combines medical expertise with a personalized approach to treatment, ensuring every patient feels heard and supported. They specialize in managing disorders of the brain and nervous system, and stay up-to-date with the latest advancements in the field. Known for a warm and approachable demeanor, Dr. Salk builds strong relationships with patients, helping them achieve better health outcomes. Whether it’s your first visit or a follow-up, you can trust Dr. Salk to provide expert care in a comfortable environment.","review":[{"userprofile":"https://imgur.com/340A4tZ","username":"Dinesh","content":"good doctor keep your smile always","like":false,"dislike":false,"likecount":{"$numberInt":"0"},"_id":{"$oid":"68084af5b9c3b3a7d21fe0af"},"date":{"$date":{"$numberLong":"1745373941054"}}},{"userprofile":"https://imgur.com/Z16soXB","username":"luffy","content":"orewa monkey D luffy ","like":false,"dislike":false,"likecount":{"$numberInt":"0"},"_id":{"$oid":"68084b6cb9c3b3a7d21fe0ce"},"date":{"$date":{"$numberLong":"1745374060513"}}}],"c1":"a","c2":"a","c3":"a","c4":"a","c5":"a","patientAt1":{"time":{"$numberInt":"600"},"available":false,"timeout":false,"age":null,"gender":"","mobileno":"","name":"","usid":""},"patientAt2":{"time":{"$numberInt":"780"},"available":false,"timeout":false,"age":null,"gender":"","mobileno":"","name":"","usid":""},"patientAt3":{"time":{"$numberInt":"960"},"available":false,"timeout":false,"age":null,"gender":"","mobileno":"","name":"","usid":""},"__v":{"$numberInt":"0"}})
const [useraccount,setUserAccount] = useState('')
useEffect(() => {
  if (window.performance.navigation.type === 1 && window.location.pathname !== "/") {
    window.location.href = "/";
  }
}, []);

  return (
    <>
     <div className="">
      <BrowserRouter>
       <Navbar useraccount={useraccount} />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login setUserAccount={(aa)=>{setUserAccount(aa)}} />} />
          
        <Route path="/Doctorligin" element={<Doctorlogin setOnedocter={(ew)=>setOnedocter(ew)} />} />
        <Route path="/Doctor" element={<Doctor onedoctor = {onedoctor}/>} />

        <Route path="/home" element={<Home  useraccount={useraccount} 
        setUserAccount={(kk)=>{setUserAccount(kk)}}  />} />
        <Route path="/Appointmnet" element={<Appointment setOnedocter={setOnedocter} />} />
        <Route path="/Doctorappointment/:id" element={<DoctorAppointent onedoctor={onedoctor} 
        setOnedocter ={(bb)=>{setOnedocter(bb)}}
        useraccount={useraccount}/>} />
        <Route path="/user/:id" element={<User  useraccount={useraccount} 
        setUserAccount={(kk)=>{setUserAccount(kk)}}  />} />
      </Routes>
      </BrowserRouter>
     
     </div>
    </>
  )
}

export default App
