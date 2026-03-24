import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaBars, 
  FaEnvelope,
  FaCog,
  FaComments
} from "react-icons/fa";

export default function FloatingMenu() {
  return (
    <div className=" scale-150 fixed right-6 top-1/2 -translate-y-1/2 bg-[#1c1c1c] p-3 rounded-2xl shadow-lg flex flex-col gap-4 text-white">
      
      <button className="hover:text-orange-500">
        <FaHome />
      </button>

      <button className="hover:text-orange-500">
        <FaUser />
      </button>

      <button className="hover:text-orange-500">
        <FaBriefcase />
      </button>

      <button className="hover:text-orange-500">
        <FaBars />
      </button>

      <button className="hover:text-orange-500">
        <FaEnvelope />
      </button>

      <button className="hover:text-orange-500">
        <FaComments />
      </button>

      <button className="hover:text-orange-500">
        <FaCog />
      </button>

    </div>
  );
}