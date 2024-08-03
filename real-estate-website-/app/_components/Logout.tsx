import React from 'react'
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { SignOutButton } from '@clerk/nextjs'


function Logout() {
  return (
  <div className='pl-2 pt-1 hover:bg-gray-100 rounded-sm'>
    <AlertDialog>
    <AlertDialogTrigger className='text-[15px]'>Logout</AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
        <AlertDialogTitle>Ready to Logout?</AlertDialogTitle>
        <AlertDialogDescription>
            Do you really want to logout from your account?
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>
        <SignOutButton>Continue</SignOutButton>
        </AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
  </div>
  )
}

export default Logout
