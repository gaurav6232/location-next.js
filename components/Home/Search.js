import React from 'react'
import TextInput from './TextInput'

const Search = () => {
  return (
    <div className='p-2 md:pd-5 border-[2px] rounded-xl'>
       <p className='text-[1.5vw]'>Get a task</p>
       <TextInput type='source'/>
       <TextInput type='destination'/>
       <button className='p-3 bg-black w-full mt-5 text-white rounded-lg'>Serch</button>
    </div>
  )
}

export default Search
