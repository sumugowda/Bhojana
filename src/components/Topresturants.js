import React from 'react'
import banner from '../assets/KFCposter.png'
import { CiStar } from 'react-icons/ci'

function Topresturants() {
  return (
    <> 
    <h2 className='text-3xl my-10'>Top Resturants in your area</h2>
    <div className='w-100 my-10 flex'> 
      <div className='w-60 mx-10 shadow-lg'>
        <div className='rounded-b-3xl shadow-sm'>
            <img src={banner} alt="" />
        </div>
        <div className='m-2 text-base py-2'>
            <h4 className=' font-bold text-lg'> Pizza </h4>
            <h6 className='flex align-center justify-start'><CiStar className=' text-lg font-bold h-5 p-0 m-0' /> 4.2 20-30 mins </h6>
            <p>Pizza, Burger, Wraps</p>
            <p>JP Nagar</p>
        </div>
      </div> 
    </div>
    </>
  )
}

export default Topresturants
