import { Link } from "react-router-dom";
import { useState } from "react"
import { Search } from "lucide-react";
import MobileNav from "./MobileNav";

const Navbar = () => {
 
  const mainlists = [
    { name: "Home Appliances", path: "/home-appliances" },
    { name: "Solar Power", path: "/solar-power" },
    { name: "Audio & Video TVs", path: "/audio-video" },
    { name: "Refrigerator", path: "/refrigerator" },
    { name: "Phone & Accessories", path: "/phone-accessories" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Today's Deals", path: "/deals" }
  ];


  return (
    <div>
     <nav className="flex flex-col gap-5">
     <div className="flex justify-between gap-3">
       <div className="hidden lg:flex w-[700px] h-[47px]  border  border-gray-500 rounded-[20px]">
         <input type="text" placeholder="Search Product" className="outline-none w-[100%] h-[100%] ml-5" />
         <Link to="/"><Search className="text-white text-2xl w-[55px] h-[45px] rounded-[20px] bg-[#ff0000] ml-5 p-2" /></Link> 
         </div>
       </div>
       <div className="hidden lg:block"> 
       <ul className="flex items-center gap-7">

        {mainlists.map((list, index) => (
          <li key={index}>
            <Link to={list.path} className="hover:text-[#ff0000]">
              {list.name}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </nav>
     <aside>
       <MobileNav />
      </aside>
    </div>
  )
}

export default Navbar