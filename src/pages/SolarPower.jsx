import Discount from "../Component/Discount"
import Navbar from "../Component/Navbar";

const SolarPower = () => {
  return (
    <div className="flex flex-col space-y-10">
    <Navbar />
   <div className="space-y-9">
    <Discount />
   </div>
   </div>
  )
}

export default SolarPower;