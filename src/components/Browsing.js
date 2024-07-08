import React from 'react'
import Topresturants from './Topresturants'
import Cravings from './Cravings'
import Resturants from './Resturants'

function Browsing() {
  return (
    <div className='mx-60 px-20'> 
        <Topresturants />
        <Cravings />
        <Resturants />
    </div>
  )
}

export default Browsing
