import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-blue-500 text-white'>
      <div className='text-center p-6 flex justify-between'>
        <h2 className='text-2xl font-bold p-4'>Upskill </h2>
        <ul className='flex gap-6 p-4 font-semibold'>
          <li className='font-semibold cursor-pointer'><Link to="/">Home</Link></li>
          <li className='font-semibold cursor-pointer'><Link to="/Browser">Browser</Link></li>
          <li className='font-semibold cursor-pointer'><Link to="/Dashboard">Dashboard</Link></li>
          
        </ul>
        
      </div>
    </nav>
  )
}

export default Navbar