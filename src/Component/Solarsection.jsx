import solar from "../assets/solar.png"
import solar2 from "../assets/solar2.png"
import solar1 from "../assets/solar1.png"
import Productcard from "./Productcard"
const Solarsection = () => {
  return (
   <section className="flex flex-col gap-5">
     <h2 className="font-bold text-2xl">Solar Power</h2>
     <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 space-y-5">
      <Productcard
      pimage={solar}
      pnewimage={solar1}
      ptitle="Washing Machines"
      pdescription="Home Speaker 500: Smart Bluetooth Speaker with 
      Alexa Voice Control Built-In, White"
      pprice="#100,0000"
     />
     <Productcard
      pimage={solar1}
      pnewimage={solar2}
      ptitle="Acs"
      pdescription="Speaker 500: Smart Bluetooth Speaker with 
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
     <Productcard
      pimage={solar1}
      pnewimage={solar2}
      ptitle="Acs"
      pdescription="Speaker 500: Smart Bluetooth Speaker with 
      Alexa Voice Control Built-In, White"
      pprice="#200,0000"
     />
    </div>
    </section>
  )
}

export default Solarsection