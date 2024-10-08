import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    const headerMenu = [
        {
            id: 1,
            name: 'task',
            icon: '/its-007.jpg'
        },
        {
            id: 2,
            name: 'resive',
            icon: '/fun-007.jpg'
        }
        
    ]
  return (
    <div  className='p-4 pb-3 pl-10 border-b-[4px] border-gray-200 flex gap-4 justify-between'>
        <div className='flex gap-10'>
        <img src="https://i.pinimg.com/236x/ce/01/76/ce01768a5d8c8a75d8ae1bf5cdb01632.jpg" alt="" width={36} height={36} />
        <div className='flex gap-14 items-center'>
            {headerMenu.map((item) =>(
                <div className='flex gap-2 items-center'>
                <Image src={item.icon} width={17} height={17} className='rounded-md'/>
                <h2>{item.name}</h2>
                </div>
            ))}

        </div>
        </div>
     <UserButton/>
    </div>
  )
}

export default Header
