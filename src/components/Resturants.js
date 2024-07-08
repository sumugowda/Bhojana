import React from 'react'
import banner from '../assets/pizza.png'
import { CiStar } from 'react-icons/ci'

function Resturants() {
  return (
    <>
      <h2 className='text-3xl my-10'>Explore Resturants</h2>
    <div className='w-100 my-10 flex'> 
      <div className='w-96 mx-10 shadow-lg'>
        <div className='rounded-b-3xl shadow-sm'>
            <img src={banner} alt="" />
        </div>
        <div className='m-2 text-base py-2'>
            <h4 className=' font-bold text-lg'> KFC </h4>
            <h6 className='flex align-center justify-start'><CiStar className=' text-lg font-bold h-5 p-0 m-0' /> 4.2 20-30 mins </h6>
            <p>Burger, Wraps, Bucket</p>
            <p>JP Nagar</p>
        </div>
      </div> 
    </div>
    </>
  )
}

export default Resturants
