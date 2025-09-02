import Card from "./Card"

const Solarpowersection = () => {
  return (
     <section className="flex flex-col gap-5">
     <h2 className="font-bold text-2xl">Solar Power</h2>
     <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 space-y-5">
     <Card 
     product_src="/images/solar4.webp"
     product_newsrc="/images/solar1.png"
     product_alt="best solar energy"
     product_description="V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible"
     product_price="$2500"
     />
      <Card 
     product_src="/images/solar1.webp"
     product_newsrc="/images/solar1.png"
     product_alt="best solar energy"
     product_description="V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible"
     product_price="$2000"
     />
      <Card 
     product_src="/images/solar3.webp"
     product_newsrc="/images/solar4.webp"
     product_alt="best solar energy"
     product_description="V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible"
     product_price="$4000"
     />
      <Card 
     product_src="/images/solar2.webp"
     product_newsrc="/images/solar5.webp"
     product_alt="best solar energy"
     product_description="V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible"
     product_price="$300"
     />
     </div>
   </section>
  )
}

export default Solarpowersection