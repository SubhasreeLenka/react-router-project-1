import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    
  return (
     
      <span className='flex justify-between' >
      <button  className='rounded-full outline-none text-black bg-blue-400 px-6 py-2 ' ><Link to ="/first">Home</Link></button><br /><br />
      <button className=' rounded-full outline-none text-black bg-blue-400 px-6 py-2 ' ><Link to ="/about">About</Link></button><br /><br />
      <button className=' rounded-full outline-none text-black bg-blue-400 px-6 py-2 ' ><Link to ="/contact">Contact</Link></button><br /><br />
    </span>
  )
}



export default Home
