import { Link } from "react-router-dom";
import { useState } from "react"
import { IoCart } from "react-icons/io5"
import { RiArrowDropDownLine } from "react-icons/ri";
import { Menu, Search, X } from "lucide-react";

const Navbar = () => {
    const [categories, setCategories] = useState(false);
    const [mobilenav, setMobilenav]  = useState(false)

  const pcategories = [
    { name: "Air Conditioner", path: "/air-conditioner" },
    { name: "Kitchen Appliances", path: "/kitchen-appliances" },
    { name: "PCs & Laptops", path: "/pcs-laptops" },
    { name: "Gadgets", path: "/gadgets" },
    { name: "Smart Home", path: "smart-home" }
  ];

  const mainlists = [
    { name: "Home Appliances", path: "/home-appliances" },
    { name: "Solar Power", path: "/solar-power" },
    { name: "Audio & Video TVs", path: "/audio-video" },
    { name: "Refrigerator", path: "/refrigerator" },
    { name: "Phone & Accessories", path: "/phone-accessories" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Today's Deals", path: "/deals" }
  ];

    const productCategories = () => {
        setCategories(!categories);
    };

  const showNav = () => {
    setMobilenav(!mobilenav);
  };

  return (
    <div>
     <nav className="relative flex flex-col gap-5">
     <div className="flex justify-between gap-3">
       <div className="flex gap-2 items-center">
        <span className="flex lg:hidden cursor-pointer" onClick={showNav} >
        {mobilenav ? <X /> :
         <Menu/>}
        </span>
         <Link className="font-bold text-3xl text-[#ff0000]" path="/solar-power" to="/" >Uptora</Link>
         </div>
          <div className="hidden lg:flex w-[700px] h-[47px]  border  border-gray-500 rounded-[20px]">
         <input type="text" placeholder="Search Product" className="outline-none w-[100%] h-[100%] ml-5" />
         <Link to="/"><Search className="text-white text-2xl w-[55px] h-[45px] rounded-[20px] bg-[#ff0000] ml-5 p-2" /></Link> 
         </div>
        <div className="flex gap-5 items-center">
        <Link to="/cartpage"><IoCart className="text-xl w-[30px] h-[30px] " /></Link>
       <Link to ="/loginpage" className="rounded-[30px] bg-[#ff0000] text-white px-3 py-1 font-semibold ">Login</Link> 
       </div>
       </div>
       <div className="hidden lg:block"> 
       <ul className="flex items-center gap-7">
        <li className="relative group" onMouseEnter={productCategories} onMouseLeave={productCategories}>
        <button className="flex items-center">All Product <RiArrowDropDownLine className="h-[40px] w-[30px]"/> </button>
       {categories && <ul className="absolute hidden group-hover:flex  rounded-[20px] bg-white px-5 py-3 shadow-lg w-[200px] flex-col gap-3">
            {pcategories.map((item, index) => ( 
              <li key={index} className="">
                <Link to={item.path} className="flex hover:text-[#ff0000]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>}
        </li>

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
     <aside className="block lg:hidden  w-full">
         {mobilenav && <ul className="flex flex-col gap-4 px-14 py-3 top-13 w-full left-0 absolute rounded-xl shadow-sm bg-white">
        <li className="relative group" onMouseEnter={productCategories} onMouseLeave={productCategories}>
        <button className="flex items-center">All Product <RiArrowDropDownLine className="h-[40px] w-[30px]"/> </button>
       {categories && <ul className="absolute hidden group-hover:flex  rounded-[20px] bg-white px-5 py-3 shadow-lg w-[200px] flex-col gap-3">
            {pcategories.map((item, index) => ( 
              <li key={index} className="">
                <Link to={item.path} className="flex hover:text-[#ff0000]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>}
        </li>

        {mainlists.map((list, index) => (
          <li key={index}>
            <Link to={list.path} className="hover:text-[#ff0000]">
              {list.name}
            </Link>
          </li>
        ))}
      </ul>}
        </aside>
    </div>
  )
}

export default Navbar