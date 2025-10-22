import Navbar from "../Component/Navbar"
import phone from "../assets/phones.jpg"

const PhoneandAccessories = () => {
  return (
    <div className="flex flex-col space-y-10">
    <Navbar />
    <div>
     <h3 className="font-semibold">PhoneandAccessories</h3>
     <div className="w-full ">
     <img className="w-[100%] h-96" src={phone} alt="phones" />
     </div>
    </div>
    </div>
  )
}

export default PhoneandAccessories