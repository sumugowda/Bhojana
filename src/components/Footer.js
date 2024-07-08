import React from 'react'
import { FaBowlFood } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-zinc-900 flex text-white justify-evenly'>
      <div className='m-2 p-2 mx-10'>
        <h1 className='text-3xl font-bold my-4  flex'>  <FaBowlFood className='mx-3' /> Bhojana</h1>
        <p className='text-lg mx-3 text-gray-300'> Pvt.Ltd</p>
      </div>
      <div className='m-2 p-2 mx-10'>
        <h1 className='text-2xl font-bold my-4  flex'> Company</h1>
        <ul className='text-gray-300 text-lg '>
            <li> About</li>
            <li> Carrers</li>
            <li> Teams</li>
        </ul>
      </div>
      <div className='m-2 p-2 mx-10'>
        <h1 className='text-2xl font-bold my-4  flex'> Contact Us</h1>
        <ul className='text-gray-300 text-lg '>
            <li> Help & Support</li>
            <li> Partner with us</li>
            <li> Ride with us</li>
        </ul>
      </div>
      <div className='m-2 p-2 mx-10'>
        <h1 className='text-2xl font-bold my-4  flex'> We deliver to</h1>
        <ul className='text-gray-300 text-lg '>
            <li> Bengaluru</li>
            <li> Hyderabad</li>
            <li> Pune</li>
            <li> Manglore</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
