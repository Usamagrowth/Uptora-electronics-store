import Categoriescard from "./Categoriescard";
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

const Categoriessection = () => {
  return (
    <section className="flex flex-col gap-5">
     <h2 className="font-bold text-2xl">Shop by Category</h2>
     <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 gap-5">
     <Categoriescard
      pimage={Acs}
      ptitle="Acs"
      pdescription="10 Products in store"
     />
     <Categoriescard
      pimage={Tvs}
      ptitle="Tvs"
      pdescription="20 Products in store"
     />
     <Categoriescard
      pimage={phone}
      ptitle="Phone"
      pdescription="40 Products in store"
     />
      <Categoriescard
      pimage={Laptop}
      ptitle="laptop"
      pdescription="30 Products in store"
     />
     <Categoriescard
      pimage={homeapp1}
      ptitle="Washing Machines"
      pdescription="7 Products in store"
     />
     <Categoriescard
      pimage={kitchenapp}
      ptitle="Kichen Aplliances"
      pdescription="10 Products in store"
     />
     <Categoriescard
      pimage={smarthome}
      ptitle="Smart Home"
      pdescription="15 Products in store"
     />
     <Categoriescard
      pimage={fridge}
      ptitle="Refrigerator"
      pdescription="9 Products in store"
     />
      <Categoriescard
      pimage={Tvs1}
      ptitle="Home Aplliances"
      pdescription="15 Products in store"
     />
      <Categoriescard
      pimage={kitchenapp2}
      ptitle="Home Aplliances"
      pdescription="15 Products in store"
     />
     </div>
    </section>
  )
}

export default Categoriessection;