import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
const Productcard = () => {
  const [changeimg, setChangeimg ] = useState(false);
  const shownewimg = () => {
  setChangeimg(!changeimg);
  };
  
  const productslist = [
  {
    id: 1,
    src: "/images/Acs.jpg",
    newsrc: "/images/homedecor",
    alt: "Smart TV",
    name: "32-inch Smart Ac",
    price: "$1000",
    description: "High-quality 32-inch Smart Ac with vibrant display and modern features."
  },
  {
    id: 2,
    src: "/images/Tvs.jpg",
    newsrc: "/images/Tvs1",
    alt: "smart Tv",
    name: "Smart TV",
    price: "$2000",
    description: "Large width fast loading technology."
  },
   {
    id: 3,
    src: "/images/solar.png",
    newsrc: "/images/solar2.png",
    alt: "Laptop",
    name: "HP Pavilion Solar",
    price: "$450",
    description: "Powerful HP Pavilion with long battery life and fast performance."
  },
  {
    id: 4,
    src: "/images/phone.jpg",
    newsrc: "/images/phone.jpg",
    alt: "Phone",
    name: "Iphones",
    price: "$350",
    description: "Powerful HP Pavilion with long battery life and fast performance."
  }
];

/* const { id } = useParams();
const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-xl mt-10">Product not found</h2>;
  }*/

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 space-y-5">
    {productslist.map((product, index) => ( 
    <div key={index}>
        <div>
        <p className="cursor-pointer absolute mt-3 ml-2 px-2 bg-white rounded-[20px]">Sale!</p>
        <Link to="/product/id" className="flex flex-col gap-3"  onMouseEnter={shownewimg} onMouseLeave={shownewimg}>
        {changeimg ? <div className="flex justify-end">
      <img src={product.newsrc} alt={product.alt} />
         <IoCart className="text-xl w-[40px] h-[40px] bg-white rounded-2xl cursor-pointer absolute mr-2 mt-2 p-2 " /> 
         </div> :
         <div> 
         <img src={product.src} alt="electronic store" />
         </div> }
        </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
           <p className="font-semibold text-xl">{product.description}</p>
           <div className="lg:flex-row flex-col flex gap-3 lg:gap-8 lg:items-center">
           <p className="font-semibold">{product.price}</p>
           <button className="rounded-[20px] px-3 py-1 border w-fit border-[#ff0000]" >Add To Cart</button>
           </div>
        </div>
      </div>))}
      </div>
  )
}

export default Productcard;