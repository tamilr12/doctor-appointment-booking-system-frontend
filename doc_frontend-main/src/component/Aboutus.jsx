import React from 'react'
import ab from './image/ab.png'
import healthcare from './image/healthcare.png'
import money from './image/money.png'
function Aboutus() {
  return (
    <div>
        
    <div className='flex w-[100%] max-xl:flex-col gap-[100px] bg-[#c900df08] max-sm:p-0  sm:p-[100px] '>
       <div className=' bg-[#c900df0c] w-[40%] max-xl:w-[100%] border border-pink-200 '>
            <img src={ab} alt="" className='max-w-[400px] max-sm:max-w-[250px] m-auto mt-[20px]' />
        </div>
        <div className='w-[60%] max-sm:w-[100%] p-4'>
            <h2 className='font-bold text-pink-500'>ABOUT US </h2>
            <h1 className='text-[65px] max-sm:text-[35px] font-bold max-sm:mt-1'>We Care About <br /> Your Physical Health </h1>
            <p className='max-w-[500px] max-sm:text-[14px]'>Your health matters to us, Book your appointment today and take a step toward feeling your best every day.
            </p>
            <div className='py-4'>
                <div className='flex gap-10 max-sm:gap-4 items-center  mt-4 '>
                    <div className='bg-pink-400 p-3 rounded-[15px]'><img src={healthcare} alt="" className='w-[55px]' /></div>
                    <div>
                        <h2 className='font-[500] text-[18px] pt-3'>Complete Health Care</h2>
                        <p className='max-w-[300px] text-[14px]'>Complete health care you can trust, Caring for you, every step.</p>
                    </div>
                </div>
                <div className='flex gap-10 max-sm:gap-4 items-center  mt-4'>
                    <div className='bg-pink-400 p-3  rounded-[15px]'><img src={money} alt="" className='w-[55px]' /></div>
                    <div>
                        <h2 className='font-[500] text-[18px] pt-3'>Affordable Price</h2>
                        <p className='max-w-[300px] text-[14px]'>Quality healthcare at a price you can afford, Book your appointment today.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

    </div>
  )
}

export default Aboutus