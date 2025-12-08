import airpodimage from "../assets/airpodimage.jpg"
import headsetimage from "../assets/headsetimage.jpg"
const Promotion = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full">
        <div className="flex items-center justify-center">
        <div className="w-[650px] h-[300px]">
        <img src={airpodimage} alt="best electronic store in ibadan" className="w-[100%] h-[100%]" />
        </div>
        <div className="absolute gap-2 flex flex-col items-center">
        <h3 className="font-semibold px-9 text-white text-3xl">The only case you need.</h3>
        <div className="border border-white w-32" ></div>
        <button className="text-[#ff0000] font-bold">Shop Now</button>
        </div>
        </div>
        <div className="flex items-center justify-center">
        <div className="w-[600px] h-[300px]">
        <img src={headsetimage}  alt="best electronic store in ibadan" className="w-[100%] h-[100%]" />
        </div>
        <div className="absolute items-center gap-2 flex flex-col">
        <h3 className="font-semibold px-9 text-white text-3xl">Get 30% OFF.</h3>
        <div className="w-32 border border-white"></div>
        <button className="text-[#ff0000] font-bold">Shop Now</button>
        </div>
     </div>
    </div>
  )
}

export default Promotion;