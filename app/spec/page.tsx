import React from 'react'
import ProfileCard from '@/app/components/profile'
import FloatingMenu from '@/app/components/menu'
import { TbWorld }    from 'react-icons/tb'
import { BsVectorPen } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";


export default function page() {
  return (
    <div className="min-h-screen bg-[#111] text-white flex">

  {/* LEFT */}
  <div className="  flex justify-center items-center">
    <ProfileCard />
  </div>
<div className='max-w-[500px] mx-auto mt-10  flex flex-col items-center   '>
    <div className="text-3xl font-bold"> My  
        <span className="text-orange-500 ml-4">Specializations </span>
    </div>
  {/* CENTER */}
 <div className="max-w-[500px] mx-auto mt-10  flex flex-col items-center  gap-6">

  {/* Frontend */}
  <div className=" bg-[#1c1c1c] border border-gray-700 rounded-2xl p-6 shadow-lg hover:border-orange-500 transition ">
    <div className='flex items-center justify-between'>
    <span className="border border-orange-500 text-orange-500 text-xs px-3 py-1 rounded-full ">
      Front-End
      </span>
       <FaCode className="text-orange-500 text-2xl" />
       
    </div>
    

    <h2 className="text-white text-lg font-semibold mt-4 mb-3">
      Front-End Developer
    </h2>

    <p className="text-gray-400 text-sm leading-relaxed">
      Front-end is where I weave code and creativity to shape 
      captivating and user-centric digital experiences.
    </p>

  </div>

  {/* UX UI */}
  <div className="bg-[#1c1c1c] border border-gray-700 rounded-2xl p-6 shadow-lg hover:border-orange-500 transition">
    <div className='flex items-center justify-between'>
    <span className="border border-orange-500 text-orange-500 text-xs px-3 py-1 rounded-full">
      UX / UI
    </span>
    <TbWorld className="text-orange-500 text-2xl" />
    </div>

    <h2 className="text-white text-lg font-semibold mt-4 mb-3">
      UX UI Designer
    </h2>

    <p className="text-gray-400 text-sm leading-relaxed">
      Designing intuitive interfaces with a focus on usability 
      and seamless user experiences.
    </p>

  </div>

  {/* Graphic */}
  <div className="bg-[#1c1c1c] border border-gray-700 rounded-2xl p-6 shadow-lg hover:border-orange-500 transition">
    <div className='flex items-center justify-between'>
    <span className="border border-orange-500 text-orange-500 text-xs px-3 py-1 rounded-full">
      Graphic
    </span>
    <BsVectorPen className="text-orange-500 text-2xl" />
    </div>

    <h2 className="text-white text-lg font-semibold mt-4 mb-3">
      Graphic Designer
    </h2>

    <p className="text-gray-400 text-sm leading-relaxed">
      Creating visual content that communicates ideas clearly 
      and enhances brand identity.
    </p>
    </div>

  </div>

</div>

  {/* RIGHT */}
  <nav className="w-[80px] flex justify-center items-center">
    <FloatingMenu />
  </nav>

</div>
  )
}
