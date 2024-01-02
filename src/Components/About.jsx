import React from 'react'
import { Link } from 'react-router-dom'

const About= () => {
  return (
    
   <div className='container mx-auto p-4'> 
       <div className="flex justify-between">
            <button  className='rounded-full outline-none text-black bg-blue-400 px-6 py-2 ' ><Link to ="/first">First</Link></button><br /><br />
            <button className=' rounded-full outline-none text-black bg-blue-400 px-6 py-2 ' ><Link to ="/about">About</Link></button><br /><br />
            <button className=' rounded-full outline-none text-black bg-blue-400 px-6 py-2 ' ><Link to ="/contact">Contact</Link></button><br /><br />
       </div>
<div><br /><br /></div>
       <div className='bg-gray-300 outline-1 h-96 px-6 py-4 justify-center flex items-center ' >
            <p className=' text-4xl font-bold' > Hey ...! <br /> This is The About Page of the Document.</p>
       </div>

   </div>

  )
}

export default About