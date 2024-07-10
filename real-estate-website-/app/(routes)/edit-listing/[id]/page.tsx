"use client"
import React from 'react'

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const EditListing = () => {
  return (
    <div className='px-10 md:px-36 my-10'>
      <h2 className='font-bold text-2xl'>Enter some more details about your listing</h2>
      <div className='p-8 shadow-md rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg text-slate-400'>Rent or Sell?</h2>
            <RadioGroup defaultValue="Sell">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Rent" id="Rent" />
                <Label htmlFor="Rent">Rent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Sell" id="Sell" />
                <Label htmlFor="Sell">Sell</Label>
              </div>
            </RadioGroup>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg text-slate-400'>Property Type</h2>
            <Select name='propertyType'>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Single Family House">Single Family House</SelectItem>
                <SelectItem value="Town House">Town House</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-gray-500'>Bedroom</h2>
            <Input placeholder='Ex.2' name='bedroom'/>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-gray-500'>Bathroom</h2>
            <Input placeholder='Ex.2' name='bathroom'/>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-gray-500'>Built In</h2>
            <Input placeholder='Ex.1900 Sq.ft' name='builtIn'/>
          </div>
        </div>

        

      </div>
    </div>
  )
}

export default EditListing