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
        <h1 className="text-3xl font-bold">Education & 
          <span className="text-orange-500">Experience </span>
          <br />
          <br />
           <span className="text-orange-500">2026-Present </span>
          </h1>
          <br />
        <h1 className="text-3xl">UI/UX Designer
            <br />
             <span className="text-gray-400 text-xl">Freelance</span>
          </h1>
                  <h1 className="text-3xl">Fullstack Web Developer
            <br />
             <span className="text-gray-400 text-xl">Freelance</span>
             <br />
             <br />
             <span className="text-gray-400 text-xl">2022-2025</span>
          </h1>
          <h1 className="text-3xl">Bachelor Degree in Technology Digital and Innovation 
            <br />
             <span className="text-gray-400 text-xl">Southeast Asia University</span>
              <span className="text-gray-400 text-xl">2022-2026</span>
           <h1 className='text-3xl'>High school</h1>   
            <span className="text-gray-400 text-xl">ราชวินิตบางแคปานขำ</span>

          </h1>
          <br />
          <br />
         
          <FloatingMenu/>
          
          
  
        </div>
        </div>
        </>
  )
}
