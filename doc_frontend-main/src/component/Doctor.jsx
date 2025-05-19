import React from 'react'

function Doctor({onedoctor}) {
    console.log(onedoctor)
  return (
    <div className=' fixed w-[100%] flex gap-3 h-[100vh] bg-white'>
        <div className='flex-1 sm:p-5 max-sm:p-3' >
            <h2 className='font-[600] text-[#b32991] text-[18px]'>Hello {onedoctor.name}</h2>
            {(onedoctor.patientAt1.name =='' && onedoctor.patientAt2.name =='' && onedoctor.patientAt3.name =='' )?<h3 className='mt-3 text-[18px] text-[#766672]'>You don't have patient yet for today,</h3> :<h3 className='mt-3 text-[18px] text-[#766672]'>Here your today's patients appointment,</h3> }
            {onedoctor.patientAt1.name &&   <div className='max-sm:flex-col max-sm:gap-3 flex justify-between bg-[#f1eef096] sm:p-5 max-sm:p-3 rounded-[4px] mt-[20px]'>
                <div>
                    <h2 className='font-[500] text-[18px] '>Patient Name : {onedoctor.patientAt1.name} </h2>
                    <h2 className='font-[500] text-[18px] '>Patient Age : {onedoctor.patientAt1.age}</h2>
                    <h2 className='font-[500] text-[18px] '>Patient Gender : {onedoctor.patientAt1.gender} </h2>
                    <h2 className='font-[500] text-[18px] '>Patient Mobile Number : {onedoctor.patientAt1.mobileno} </h2>

                </div>
                <div className='w-[200px] font-[500]  text-[#932177] '>
                    <h3 className='text-[18px]'>Time slot :</h3>
                    <div>10.00 AM to 12.00 PM</div> 
                </div>
            </div> }
          
            {onedoctor.patientAt2.name &&  <div className='max-sm:flex-col max-sm:gap-3 flex justify-between bg-[#f1eef096] sm:p-5 max-sm:p-3 rounded-[4px] mt-[20px]'>
                <div>
                    <h2 className='font-[500] text-[18px]'>Patient Name : {onedoctor.patientAt2.name} </h2>
                    <h2 className='font-[500] text-[18px]'>Patient Age : {onedoctor.patientAt2.age}</h2>
                    <h2 className='font-[500] text-[18px]'>Patient Gender : {onedoctor.patientAt2.gender} </h2>
                    <h2 className='font-[500] text-[18px]'>Patient Mobile Number : {onedoctor.patientAt2.mobileno} </h2>

                </div>
                <div className='w-[200px] font-[500] text-[#932177]'>
                    <h3 className='text-[18px]'>Time slot :</h3>
                    <div>01.00 PM to 03.00 PM</div> 
                </div>
            </div> }
            {onedoctor.patientAt3.name && 
               <div className='max-sm:flex-col max-sm:gap-3 flex justify-between bg-[#f1eef096] sm:p-5 max-sm:p-3 rounded-[4px] mt-[20px]'>
                <div>
                    <h2 className='font-[500] text-[18px]'>Patient Name : {onedoctor.patientAt3.name} </h2>
                    <h2 className='font-[500] text-[18px]'>Patient Age : {onedoctor.patientAt3.age}</h2>
                    <h2 className='font-[500] text-[18px]'>Patient Gender : {onedoctor.patientAt3.gender} </h2>
                    <h2 className='font-[500] text-[18px]'>Patient Mobile Number : {onedoctor.patientAt3.mobileno} </h2>

                </div>
                <div className='w-[200px] font-[500] text-[#932177]'>
                    <h3 className='text-[18px]'>Time slot :</h3>
                    <div>04.00 AM to 06.00 PM</div> 
                </div>
            </div> }
           
         

        </div>
        <div className='max-lg:hidden max-sm:flex max-sm:items-end max-sm:absolute max-sm:max-z-[-1] max-sm:bg-[#fde3ff] max-sm:w-[100%]  max-sm:opacity-15 max-sm:h-[100vh] '>

        <img src={onedoctor.profile} alt="" className='h-[100%] max-sm:h-[80%]' />
        </div>
    </div>
  )
}

export default Doctor