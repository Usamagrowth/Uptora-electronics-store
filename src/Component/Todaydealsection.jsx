import Productcard from "./Productcard"

const Todaydealsection = () => {
  return (
    <section className="flex flex-col gap-5">
     <h2 className="font-bold text-2xl">Today's Best Deal</h2>
     <Productcard />
   </section>
  )
}

export default Todaydealsection;