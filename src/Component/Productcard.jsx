import { useState } from "react";
import { IoCart } from "react-icons/io5";

const Productcard = ({pimage, pnewimage, ptitle, pdescription, pprice}) => {
  const [changeimg, setChangeimg ] = useState(false);
  const shownewimg = () => {
    setChangeimg(!changeimg);
  };
  return (
    <div>
        <div>
        <p className="cursor-pointer absolute mt-3 ml-2 px-2 bg-white rounded-[20px]">Sale!</p>
        <a href="" className="flex flex-col gap-3"  onMouseEnter={shownewimg} onMouseLeave={shownewimg}>
        {changeimg ? <div className="flex justify-end">
        <img src={pnewimage} alt="electronic store" />
         <IoCart className="text-xl w-[40px] h-[40px] bg-white rounded-2xl cursor-pointer absolute mr-2 mt-2 p-2 " /> 
         </div> :
         <div> 
         <img src={pimage} alt="electronic store" />
         </div> }
        </a>
        </div>
        <div className="flex flex-col gap-3">
           <p className="font-semibold text-xl">{pdescription}</p>
           <div className="lg:flex-row flex-col flex gap-3 lg:gap-8 lg:items-center">
           <p className="font-semibold">{pprice}</p>
           <button className="rounded-[20px] px-3 py-1 border w-fit border-[#ff0000]" >Add To Cart</button>
           </div>
        </div>
      </div>
  )
}

export default Productcard;