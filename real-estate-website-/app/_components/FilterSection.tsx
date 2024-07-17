import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { BedDouble } from 'lucide-react';

function FilterSection() {
  return (
    <div className='px-3 py-4 grid grid-cols-2 md:flex gap-2'>
        <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Bed" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="2">
                <h2 className='flex gap-2'><BedDouble className='h-5 w-5 text-primary'/>2+</h2>
            </SelectItem>
            <SelectItem value="3">
                <h2 className='flex gap-2'><BedDouble className='h-5 w-5 text-primary'/>3+</h2>
            </SelectItem>
            <SelectItem value="4">
                <h2 className='flex gap-2'><BedDouble className='h-5 w-5 text-primary'/>4+</h2>
            </SelectItem>
            <SelectItem value="5">
                <h2 className='flex gap-2'><BedDouble className='h-5 w-5 text-primary'/>5+</h2>
            </SelectItem>
        </SelectContent>
        </Select>
    </div>
  )
}

export default FilterSection
