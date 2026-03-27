import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaBars, 
  FaEnvelope,
  FaCog,
  FaComments
} from "react-icons/fa";
import Link from "next/link";

export default function FloatingMenu() {
  return (
    <div className=" scale-150 fixed right-6 top-1/2 -translate-y-1/2 bg-[#1c1c1c] p-3 rounded-2xl shadow-lg flex flex-col gap-4 text-white">
      {/* Home Button */}
      <Link href="/">
      <button className="hover:text-orange-500">
        <FaHome />
      </button>
      </Link>
      {/* Profile Button */}

      <Link href="/aboutme">
      <button className="hover:text-orange-500">
        <FaUser />
      </button>
      </Link>
      {/* Experience Button */}
      <Link href="/add/eduexp">
      <button className="hover:text-orange-500">
        <FaBriefcase />
      </button>
      </Link>
      {/* spec Button */}
      <Link href="/spec">
      <button className="hover:text-orange-500">
        <FaBars />
      </button>
      </Link>
    {/* project button */ }
    <Link href="/project">
      <button className="hover:text-orange-500">
        <FaEnvelope />
      </button>
      </Link>
      {/* contact Skills*/ }
    <Link href="/skills">
      <button className="hover:text-orange-500">
        <FaComments />
      </button>
      </Link>
      {/* ContactMe Button */}
      <Link href="/contactme">
      <button className="hover:text-orange-500">
        <FaCog />
      </button>
      </Link>

    </div>
  );
}