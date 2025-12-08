import { Menu, X } from "lucide-react";
import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileNav = () => {

     const [mobilenav, setMobilenav]  = useState(false)
    
      const mainlists = [
        { name: "Home Appliances", path: "/home-appliances" },
        { name: "Solar Power", path: "/solar-power" },
        { name: "Audio & Video TVs", path: "/audio-video" },
        { name: "Refrigerator", path: "/refrigerator" },
        { name: "Phone & Accessories", path: "/phone-accessories" },
        { name: "New Arrivals", path: "/new-arrivals" },
        { name: "Today's Deals", path: "/deals" }
      ];
    
      const showNav = () => {
        setMobilenav(!mobilenav);
      };
    

return (
    <div>
    <div className="flex gap-15 justify-between  py-3">
     <div className="flex gap-2 items-center">
        <span className="flex lg:hidden cursor-pointer" onClick={showNav} >
        {mobilenav ? <X /> :
         <Menu/>}
        </span>
         <Link to="/"  className="font-bold text-3xl text-[#ff0000]">Uptora</Link>
         </div>

       <div className="flex gap-5 items-center">
        <Link to="/cartpage"><IoCart className="text-xl w-[30px] h-[30px] " /></Link>
       <Link to ="/loginpage" className="rounded-[30px] bg-[#ff0000] text-white px-3 py-1 font-semibold ">Login</Link> 
       </div>
  </div>
  <div>
     {mobilenav && <div className="lg:hidden flex flex-col w-full gap-4 py-5 px-5 rounded-xl text-xl font-semi-bold">
       {mainlists.map((list, index) => ( <ul>
          <li key={index}>
            <Link to={list.path} className="hover:text-[#ff0000] w-full flex ">
              {list.name}
            </Link>
          </li>
          </ul>
        ))}
      </div>}
      </div>
    </div>
 )
};

export default MobileNav;