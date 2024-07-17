import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function FilterSection() {
  return (
    <div>
        <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Bed" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">2+</SelectItem>
            <SelectItem value="dark">3+</SelectItem>
            <SelectItem value="system">4+</SelectItem>
        </SelectContent>
        </Select>

    </div>
  )
}

export default FilterSection
