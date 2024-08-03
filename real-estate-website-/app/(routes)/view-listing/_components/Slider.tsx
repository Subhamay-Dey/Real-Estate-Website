import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image';
  

function Slider({imageList}: any) {
  return (
    <div className=' flex justify-center'>
      {imageList ? 
        <Carousel>
        <CarouselContent>
          {imageList.map((item: any, index: number) => (
            <CarouselItem>
              <Image
                src={item.imgUrl} width={800}
                height={300}
                alt='image'
                className='rounded-xl object-cover h-[450px] w-[900px] ml-[300px]'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        : <div className='w-full h-[200px] bg-slate-200 rounded-lg animate-pulse'>
        </div>
      }
    </div>
  )
}

export default Slider