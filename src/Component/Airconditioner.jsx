import Card from "./Card"

const Airconditioner = () => {
  return (
     <section className="flex flex-col gap-5">
     <h2 className="font-bold text-2xl">Air Conditional</h2>
     <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 space-y-5">
     <Card 
     product_src="/images/ac1.webp"
     product_newsrc="/images/Acs.jpg"
     product_alt="best airconditioner"
     product_description="V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible"
     product_price="$1500"
     />
    <Card 
     product_src="/images/ac3.webp"
     product_newsrc="/images/ac1.webp"
     product_alt="best airconditioner"
     product_description="V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible"
     product_price="$700"
     />
     <Card 
     product_src="/images/ac3.webp"
     product_newsrc="/images/ac2.webp"
     product_alt="best airconditioner"
     product_description="V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible"
     product_price="$2000"
     />
     <Card 
     product_src="/images/ac2.webp"
     product_newsrc="/images/ac1.webp"
     product_alt="best airconditioner"
     product_description="V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible"
     product_price="$1500"
     />
     </div>
     </section>
  )
}

export default Airconditioner