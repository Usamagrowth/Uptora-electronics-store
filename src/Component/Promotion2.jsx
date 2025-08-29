import headset1 from "../assets/headset1.png"
import barber from  "../assets/barber.png"
import videogame from  "../assets/videogame.png"
const Promotion2 = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5">
     <div className="flex justify-between items-center bg-gray-300 pl-4 pr-12">
     <div className="flex items-start flex-col gap-5">
     <h3 className="font-bold text-4xl">Wireless <br /> headphones</h3>
     <p>Starting at #10000</p>
     <button className="text-[#ff0000] font-semibold hover:text-black">Shop Now</button>
     </div>
     <div>
     <img src={headset1} alt="best electronic store" />
     </div>
     </div>
     <div className="flex justify-between items-center bg-gray-300 pl-4">
     <div className="flex items-start flex-col gap-5">
     <h3 className="font-bold text-4xl">Grooming</h3>
     <p>Starting at #10000</p>
     <button className="text-[#ff0000] font-semibold hover:text-black">Shop Now</button>
     </div>
     <div>
     <img src={barber} alt="best electronic store" />
     </div>
     </div>
      <div className="flex justify-between items-center bg-gray-300 py-3 pl-4 pr-12">
     <div className="flex items-start flex-col gap-5">
     <h3 className="font-bold text-4xl">Video <br /> games</h3>
     <p>Starting at #10000</p>
     <button className="text-[#ff0000] font-semibold hover:text-black">Shop Now</button>
     </div>
     <div>
     <img src={videogame} alt="best electronic store" />
     </div>
     </div>
    </div>
  )
}

export default Promotion2;