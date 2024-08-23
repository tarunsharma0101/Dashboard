import React, { useContext, useState } from 'react'
import { IoMailUnread } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { SearchContext } from '../utils/SerachContext';


const Navbar = () => {


    const {setSearchQuery} = useContext(SearchContext);
    const {setIsSearch} = useContext(SearchContext);
    const [serachInput , setSearchInput] = useState("");


    const handleSearch = () => {
      setIsSearch(true)
      setSearchQuery(serachInput);
    }


  return (
    <div className=' p-4 shadow-md flex justify-between'>
        <h1 className='text-3xl font-bold font-serif cursor-pointer '>WIDGET-UI</h1>

        <div className='border-2 rounded-md'>
            <input 
                className='p-2 w-72 rounded-lg rounded-r-none bg-white outline-none'
                type='text'
                placeholder='Search anything..'
                name='search'
                id='search'
                value={serachInput}
                onChange={(e) => setSearchInput(e.target.value)}
                />

                <button onClick={handleSearch} className='p-2 font-semibold w-28 rounded-r-lg border-l-2' >Search</button>
        </div>

        <div className='flex items-center text-3xl gap-8 cursor-pointer'>
            <h1><MdNotificationsActive/></h1>
            <h1><IoMailUnread/></h1>
            <h1><FaUserCircle/></h1>
        </div>
    </div>
  )
}

export default Navbar