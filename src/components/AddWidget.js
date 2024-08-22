import React, { useState } from 'react'
import AddButton from './AddButton'

const AddWidget = () => {

  const [cards, setCards] = useState([])

  return (
    <div className=''>
        <div className=" rounded-md bg-base-100 w-96 h-56 shadow-xl m-2 border-2 border-black ">
            <div className="h-full flex justify-center items-center">
                <AddButton/>
            </div>   
        </div>
    </div>
  )
}

export default AddWidget