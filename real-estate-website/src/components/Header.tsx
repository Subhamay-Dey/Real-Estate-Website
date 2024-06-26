"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import {Plus} from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {

  const path = usePathname();

  useEffect(()=> {
    console.log(path);
    
  },[])

  return (
    <div className='p-6 px-10 top-0 w-full z-10 bg-white flex justify-between shadow-sm fixed '>
      <div className='flex gap-12 items-center'>
        <Image src={'/next.svg'} alt='logo' width={150} height={150}/>
          <ul className='hidden md:flex gap-10'>
            <Link href={'/'}><li className={`'hover:text-primary font-medium text-sm cursor-pointer' ${path=='/'&&'text-primary'}`}>For Sale</li></Link>
            <li className='hover:text-primary font-medium text-sm cursor-pointer'>For Rent</li>
            <li className='hover:text-primary font-medium text-sm cursor-pointer'>Agent Finder</li>
          </ul>
      </div>
      <div className='flex gap-2'>
        <Button className='flex gap-2'><Plus className='h-5'/> Post your Ad</Button>
        <Button variant='outline'>Login</Button>
        </div>
    </div>
  )
}

export default Header