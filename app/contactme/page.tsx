"use client"
import React from 'react'
import ProfileCard from '@/app/components/profile'
import FloatingMenu from '@/app/components/menu'
import { TbBrandReactNative } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';






export default function page() {
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Submit รับข้อมูลแล้ว รอตรวจสอบ${checked}`);
    };
    return (
        <>
            <div className="min-h-screen bg-[#111] text-white flex  r px-10 py-10 gap-10">
                <div className="w-300pxbg-[#1c1c1c]flex  items-center flex rounded-2xl p-5 shadow-lg">
                    <ProfileCard />
                </div>
                <div className=" w-full items-center  gap-4">
                    <h1 className="text-3xl font-bold flex items-center ">Contact
                        <span className="text-orange-500">Me</span>

                    </h1>
                    <span className="text-gray-400 text-xl">Let's get in touch!</span>
                    <div>
                        <form className="max-w-400px grid grid-cols-2 gap-4"
                        onSubmit={handleSubmit}>

                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full p-3  text-white placeholder:text-orange-500"
                            />

                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="w-full p-3  text-white placeholder:text-orange-500"
                            />
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3  placeholder:text-orange-500 text-white"
                            />
                            <input
                                type="email"
                                placeholder="Address"
                                className="w-full p-3 text-white placeholder:text-orange-500"
                            />


                            <textarea
                                placeholder="Contant Message"
                                className="w-full p-3 text-white placeholder:text-orange-500"
                            />
                            <div className="col-span-2 flex justify-center mt-4" >

                                <button className="w-full bg-orange-500 py-3 rounded-xl hover:bg-orange-600"
                                >
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>


                </div>








            </div>

            <FloatingMenu />

        </>
    )
}
