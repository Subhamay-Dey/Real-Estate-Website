"use client"

import React, { useEffect } from 'react'
import { SignUp } from "@clerk/nextjs";

function page() {

  useEffect(() => {
    window.scrollTo({ top: 140, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center"><SignUp/></div>
  )
}

export default page