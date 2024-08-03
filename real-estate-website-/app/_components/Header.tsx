"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {Plus} from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs'
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger} from "@/components/ui/dropdown-menu"

function Header() {

  const path = usePathname();
  const {user, isSignedIn} = useUser();

  useEffect(()=> {
    console.log(path);
  },[])

  return (
    <div className='p-6 px-10 top-0 w-full z-10 bg-white flex justify-between shadow-sm fixed'>
      <div className='flex gap-12 items-center'>
        <Image src={'/next.svg'} alt='logo' width={150} height={150}/>
          <ul className='hidden md:flex gap-10'>
            <Link href={'/'}><li className={`'hover:text-primary font-medium text-sm cursor-pointer' ${path=='/'&&'text-primary'}`}>For Sell</li></Link>
            <Link href={'/rent'}><li className={`'hover:text-primary font-medium text-sm cursor-pointer' ${path == '/rent' && 'text-primary'}`}>For Rent</li></Link>
            <li className='hover:text-primary font-medium text-sm cursor-pointer'>Agent Finder</li>
          </ul>
      </div>
      <div className='flex gap-2'>
        <Link href={'/add-new-listing'}>
          <Button className='flex gap-2'><Plus className='h-5'/> Post your Ad</Button>
        </Link>
        {isSignedIn ? 
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Image src={user?.imageUrl} width={35} height={35} alt='user Image'
          className='rounded-full'
          />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/user"}>Profile</Link> 
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/user#/my-listing"}>My Listing</Link> 
            </DropdownMenuItem>
            <DropdownMenuItem><SignOutButton>Logout</SignOutButton></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
           : 
          <Link href={'/sign-in'}>
            <Button variant='outline'>Login</Button>
          </Link>
        }
        </div>
    </div>
  )
}

export default Header