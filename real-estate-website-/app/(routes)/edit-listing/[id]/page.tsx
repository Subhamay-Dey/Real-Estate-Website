"use client"
import React from 'react'

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'

import { Formik } from 'formik';

const EditListing = () => {
  return (
    <>
    <div className='px-10 md:px-36 my-10'>
      <h2 className='font-bold text-2xl'>Enter some more details about your listing</h2>

      <Formik 
        initialValues={{
          type:"",
          propertyType:"",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
        }) => (
        
        <form onSubmit={handleSubmit}>
        <div>
          <div className='p-8 shadow-md rounded-lg space-y-10'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-lg text-slate-400'>Rent or Sell?</h2>
                <RadioGroup defaultValue="Sell"
                  onValueChange={(e) => values.type=e}
                >
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
                <Select
                  onValueChange={(e) => values.propertyType=e} 
                  name='propertyType'>
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

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-gray-500'>Bedroom</h2>
                <Input type='number' placeholder='Ex.2' name='bedroom' onChange={handleChange}/>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='text-gray-500'>Bathroom</h2>
                <Input type='number' placeholder='Ex.2' name='bathroom' onChange={handleChange}/>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='text-gray-500'>Built In</h2>
                <Input type='number' placeholder='Ex.1900 Sq.ft' name='builtIn' onChange={handleChange}/>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-gray-500'>Parking</h2>
                <Input type='number' placeholder='Ex.2' name='parking' onChange={handleChange}/>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='text-gray-500'>Lot Size (Sq.ft)</h2>
                <Input type='number' placeholder='' name='lotSize' onChange={handleChange}/>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='text-gray-500'>Area (Sq.ft)</h2>
                <Input type='number' placeholder='Ex.1900' name='area' onChange={handleChange}/>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-gray-500'>Selling Price ($)</h2>
                <Input type='number' placeholder='400000' name='sellingPrice' onChange={handleChange}/>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='text-gray-500'>HOA (Per Month) ($)</h2>
                <Input type='number' placeholder='100' name='hoa' onChange={handleChange}/>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-10'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-gray-500'>Description</h2>
                <Textarea typeof='any' placeholder='' name='description' onChange={handleChange}/>
              </div>
            </div>

            <div className='flex gap-7 justify-end'>
              <Button variant='outline'>Save</Button>
              <Button>Save & Publish</Button>
            </div>

          </div>
        </div>
        </form>)}

      </Formik>
    </div>
    </>
  )
}

export default EditListing