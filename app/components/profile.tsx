import Image from "next/image";
import A1 from "@/app/assets/A2.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaTwitter
} from "react-icons/fa";
import{AiFillFacebook} from "react-icons/ai";


export default function ProfileCard() {
  return (

    <div className="w-[260px]  bg-[#1c1c1c] rounded-2xl p-5 text-white shadow-lg">
      
      {/* Name */}
      <h2 className="text-white-300 font-semibold mb-3">
        <span className="text-orange-500">P</span>
        uvadon
      </h2>

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <Image
          src={A1}
          alt="avatar"
          width={3000}
          height={200}
          className="rounded-xl"
        />
      </div>

      {/* Info */}
      <p className="text-center text-sm">STU ID: 6652C10026</p>
      <p className="text-center text-gray-400 text-xs mb-4">
        Fullstack Web Developer
      </p>

      {/* Social */}
      <div className="flex justify-center gap-3 mb-5">
        <a
  href="https://facebook.com/yourprofile"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-orange-500 cursor-pointer">
    <AiFillFacebook  />
  </a>
  <a
  href="https://x.com/?lang=th"
  target="_blank"
  rel="noopener noreferrer" 
  className="hover:text-orange-500 cursor-pointer">
        <FaTwitter />
        </a>
        <a
  href="https://www.instagram.com/?hl=th"
  target="_blank"
  rel="noopener noreferrer" 
  className="hover:text-orange-500 cursor-pointer">
        <FaInstagram  />
        </a>
        <a
  href="https://www.linkedin.com/home?originalSubdomain=th"
  target="_blank"
  rel="noopener noreferrer" 
  className="hover:text-orange-500 cursor-pointer">
        <FaLinkedinIn  />
        </a>
         <a
  href="https://www.google.com/"
  target="_blank"
  rel="noopener noreferrer" 
  className="hover:text-orange-500 cursor-pointer">
        <FaGoogle className="hover:text-orange-500 cursor-pointer" />
        </a>
      </div>

      {/* Button */}
      <a href="https://line.me/ti/p/5mBGEkv_U5" target="_blank">
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 rounded-xl transition">
        HIRE ME !
      </button>
      </a>
    </div>
  );
}