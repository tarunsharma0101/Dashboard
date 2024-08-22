import React from 'react'
import { IoMailUnread } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=' p-4 shadow-md flex justify-between'>
        <h1 className='text-3xl font-bold font-serif'>WIDGET-UI</h1>

        <div className='border-2 rounded-md'>
            <input 
                className='p-2 w-72 rounded-lg rounded-r-none bg-white outline-none'
                type='text'
                placeholder='Search anything..'
                name='search'
                id='search'
                />

                <button className='p-2 font-semibold w-28 rounded-r-lg border-l-2'>Search</button>
        </div>

        <div className='flex items-center text-3xl gap-8 '>
            <h1><MdNotificationsActive/></h1>
            <h1><IoMailUnread/></h1>
            <h1><FaUserCircle/></h1>
        </div>
    </div>
  )
}

export default Navbar