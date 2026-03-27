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
        <h1 className="text-3xl font-bold">Featured 
          <span className="text-orange-500">Projects </span>
          </h1>
          <br />
        <h1 className="text-3xl">  Manage Task App - fullstack web development

          </h1>
          <br />
          <span className="text-gray-400 text-xl">Here's my latest project built with Next.js and Laravel, using TailwindCSS on the front-end. Watch the video to see the responsive landing page in action!</span>
          
          
        </div>
        <FloatingMenu/>
        </div>
        </>
  )
}
