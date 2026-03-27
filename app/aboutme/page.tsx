import React from 'react'
import ProfileCard from '@/app/components/profile'
import FloatingMenu from '@/app/components/menu'

export default function page() {
  return (
    <>
    <div  className="min-h-screen bg-[#111] text-white flex  r px-10 py-10 gap-10">
<div className="w-300pxbg-[#1c1c1c]flex  items-center flex rounded-2xl p-5 shadow-lg">
            <ProfileCard /> 
          </div>
          <div className=" flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">About 
          <span className="text-orange-500">Me </span>
          </h1>
          <br />
        <h1 className="text-3xl">  I find fulfillment in blending visual design with the power of coding to create meaningful experiences.
          </h1>
          <br />
          <span className="text-gray-400 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem . Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem ..</span>
          <FloatingMenu/>
          
          
  
        </div>
        </div>
        </>
  )
}
