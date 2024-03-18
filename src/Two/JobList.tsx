import React from 'react'

export default function JobList() {
  return (
    <div className='w-[40rem] bg-white rounded-md p-16'>
      <div className='relative'>
        <input type="text" className='mr-2 w-full rounded-md border-gray-300 px-4 py-2' placeholder='Search for a part-time job' />
        <button className='rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700'>Search</button>
        
      </div>

    </div>
  )
}
