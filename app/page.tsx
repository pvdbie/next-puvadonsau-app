import Image from "next/image";
import ProfileCard from "./components/profile";
import A1 from "@/app/assets/A1.jpg";
import FloatingMenu from "./components/menu";
export default function Home() {
  return (

<><div  className="min-h-screen bg-[#111] text-white flex  r px-10 py-10 gap-10">
 { /*ProfileCard*/} 
  <div className="w-[300px] bg-[#1c1c1c]flex  items-center flex rounded-2xl p-5 shadow-lg">
    <ProfileCard /> 
  </div>
  <div>
  <div className=" flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">Lets Work 
          <span className="text-orange-500">Together !</span>
          </h1>
          <br />
        <h1 className="text-3xl">Hi From 
          <span className="text-orange-500"> Yourname , </span>
          </h1>
          <h1 className="text-3xl">Interactive Designer & Fullstack Web Developer</h1>
          <br />
          <span className="text-gray-400 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis, illum ipsa cupiditate itaque corporis aliquam voluptatibus beatae atque pariatur sunt fugiat voluptatem quo quasi ut sed, quibusdam, cum saepe?</span>
          
          <div className="flex gap-10 mt-6">
  
  {/* Block 1 */}
  <div className="flex flex-col">
    <span className="text-5xl font-extrabold text-orange-500">3+</span>
    <span className="text-gray-400 text-sm">Years of Experience</span>
  </div>

  {/* Block 2 */}
  <div className="flex flex-col">
    <span className="text-5xl font-extrabold text-orange-500">20+</span>
    <span className="text-gray-400 text-sm">Projects C </span>
  </div>

</div>
          
          
      </div>
 
  <FloatingMenu />
  </div>
  </div>
  </>
  
  );
}