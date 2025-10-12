import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({product_src, product_newsrc, product_alt, product_name, product_description, product_price}) => {
   const [changeimg, setChangeimg ] = useState(false);
     const shownewimg = () => {
     setChangeimg(!changeimg);
     };

    return (
    <div className="p-1 shadow-xl">
        <div>
        <p className="cursor-pointer absolute mt-3 ml-2 px-2 bg-white rounded-[20px]">Sale!</p>
        <Link to="/cartpage" className="flex flex-col gap-3"  onMouseEnter={shownewimg} onMouseLeave={shownewimg}>
        {changeimg ? <div className="flex justify-end">
      <img src={product_newsrc} alt={product_alt} />
         <IoCart className="text-xl w-[40px] h-[40px] bg-white rounded-2xl cursor-pointer absolute mr-2 mt-2 p-2 " /> 
         </div> :
         <div> 
         <img src={product_src} alt={product_alt} />
         </div> }
        </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold mb-2">{product_name}</h1>
           <p className="font-semibold text-xl">{product_description}</p>
           <div className="lg:flex-row flex-col flex gap-3 lg:gap-8 lg:items-center">
           <p className="font-semibold">{product_price}</p>
           <Link to="/cartpage"><button className="rounded-[20px] px-3 py-1 border w-fit border-[#ff0000]" >Add To Cart</button></Link>
           </div>
        </div>
      </div>
  )
}

export default Card;