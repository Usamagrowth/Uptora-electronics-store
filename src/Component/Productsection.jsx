import Productcard from "./Productcard"
import Acs from "../assets/Acs.jpg"
import Tvs from "../assets/Tvs.jpg"
import phone from "../assets/phone.jpg"
import Laptop from "../assets/Laptop.jpg"
import fridge from "../assets/fridge.jpg"
import homeapp1 from "../assets/homeapp1.jpg"
import smarthome from "../assets/smarthome.jpg"
import kitchenapp from "../assets/kitchenapp.jpg"
import kitchenapp2 from "../assets/kitchenapp2.jpg"
import Tvs1 from "../assets/Tvs1.jpg"
import homedecor from "../assets/homedecor.jpg"
import solar from "../assets/solar.png"
import solar1 from "../assets/solar2.png"

const Productsection = () => {
  return (
  <section className="flex flex-col gap-5">
     <h2 className="font-bold text-2xl">Today's Best Deal</h2>
     <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 space-y-5">
     <Productcard
      pimage={Acs}
      pnewimage={homedecor}
      ptitle="Acs"
      pdescription="Speaker 500: Smart Bluetooth Speaker with 
      Alexa Voice Control Built-In, White"
      pprice="#200,0000"
     />
     <Productcard
      pimage={Tvs}
      pnewimage={Tvs1}
      ptitle="Tvs"
      pdescription="Speaker 500: Smart Bluetooth Speaker with 
      Alexa Voice Control Built-In, White"
      pprice="#200,0000"
     />
     <Productcard
      pimage={phone}
      pnewimage={Laptop}
      ptitle="Phone"
      pdescription="Home Speaker 500: Smart Bluetooth Speaker 
      with Alexa Voice Control Built-In, White"
      pprice="#70,0000"
     />
      <Productcard
      pimage={Laptop}
      pnewimage={smarthome}
      ptitle="laptop"
      pdescription="Home Speaker 500: Smart Bluetooth Speaker with 
      Alexa Voice Control Built-In, White"
      pprice="#200,0000"
     />
     <Productcard
      pimage={homeapp1}
      pnewimage={fridge}
      ptitle="Washing Machines"
      pdescription="Home Speaker 500: Smart Bluetooth Speaker with 
      Alexa Voice Control Built-In, White"
      pprice="#400,0000"
     />
     <Productcard
      pimage={kitchenapp2}
      pnewimage={kitchenapp}
      ptitle="Kichen Aplliances"
      pdescription="Home Speaker 500: Smart Bluetooth Speaker with 
      Alexa Voice Control Built-In, White"
      pprice="#200,0000"
     />
     <Productcard
      pimage={solar}
      pnewimage={solar1}
      ptitle="Washing Machines"
      pdescription="Home Speaker 500: Smart Bluetooth Speaker with 
      Alexa Voice Control Built-In, White"
      pprice="#100,0000"
     />
     </div>
   </section>
  )
}

export default Productsection