import React from 'react'
import ProfileCard from '@/app/components/profile'
import FloatingMenu from '@/app/components/menu'
import { TbBrandReactNative } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";






export default function page() {
    return (
        <>
            <div className="min-h-screen bg-[#111] text-white flex  r px-10 py-10 gap-10">
                <div className="w-300pxbg-[#1c1c1c]flex  items-center flex rounded-2xl p-5 shadow-lg">
                    <ProfileCard />
                </div>
                <div className="  gap-4">
                    <h1 className="text-3xl font-bold flex items-center ">My
                        <span className="text-orange-500">Skills </span>
                    </h1>
                    <br />
                    <div className="flex gap-10 justify-center flex-wrap">

                        {/* Card react */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="hover:border-orange-500 hover:scale-105 transition duration-700  w-[120px] h-[120px] rounded-full border border-gray-500 flex flex-col items-center justify-center text-blue-500">
                                <TbBrandReactNative className="text-4xl" />
                                <span className="text-red-500 text-sm mt-2">60%</span>
                            </div>
                            <p className="text-gray-300">React</p>
                        </div>
                        {/* Card figma */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="hover:border-orange-500 hover:scale-105 transition duration-700 w-[120px] h-[120px] rounded-full border border-gray-500 flex flex-col items-center justify-center text-white">
                                <FaFigma className="text-4xl" />
                                <span className="text-red-500 text-sm mt-2">85%</span>
                            </div>
                            <p className="text-gray-300">Figma</p>
                        </div>
                        {/* Card HTML */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="hover:border-orange-500 hover:scale-105 transition duration-700 w-[120px] h-[120px] rounded-full border border-gray-500 flex flex-col items-center justify-center text-white-500">
                                <TiHtml5 className="text-4xl" />
                                <span className="text-red-500 text-sm mt-2">85%</span>
                            </div>
                            <p className="text-gray-300">HTML</p>
                        </div>
                        {/* Card Next.js */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="hover:border-orange-500 hover:scale-105 transition duration-700 w-[120px] h-[120px] rounded-full border border-gray-500 flex flex-col items-center justify-center text-white-500">
                                <TbBrandNextjs className="text-4xl" />
                                <span className="text-red-500 text-sm mt-2">80%</span>
                            </div>
                            <p className="text-gray-300">Next.js</p>
                        </div>
                        {/* Card JavaScript */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="hover:border-orange-500 hover:scale-105 transition duration-700 w-[120px] h-[120px] rounded-full border border-gray-500 flex flex-col items-center justify-center text-yellow-500">
                                <RiJavascriptLine className="text-4xl" />
                                <span className="text-red-500 text-sm mt-2">60%</span>
                            </div>
                            <p className="text-gray-300">JavaScript</p>
                        </div>
                        {/* Card GitHub */}
                        <div className="hover:border-orange-500 hover:scale-105 transition duration-700 flex flex-col items-center gap-3">
                            <div className="w-[120px] h-[120px] rounded-full border border-gray-500 flex flex-col items-center justify-center text-white-500">
                                <FaGithub className="text-4xl" />
                                <span className="text-red-500 text-sm mt-2">95%</span>
                            </div>
                            <p className="text-gray-300">GitHub</p>
                        </div>
                    </div>

                </div>

                <FloatingMenu />
            </div>
        </>
    )
}
