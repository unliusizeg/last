import React from 'react'
import {BsFillMoonFill} from "react-icons/bs"

const Artist = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <div >
      <BsFillMoonFill className='w-8 h-8 ' />
      </div>
      <div className='flex justify-center items-center my-auto rounded-lg mt-4 bg-orange-500 text-white w-36  h-12 from-slate-950'>Top Artist List</div>
    </div>
  )
}

export default Artist