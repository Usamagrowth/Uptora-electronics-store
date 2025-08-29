import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaShippingFast } from "react-icons/fa";
import { FaArrowRotateLeft, FaPaypal } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";
import { Link } from "react-router-dom";
const Herosection = () => {

const products = [
    { src: "/images/Tvs2.jpg", alt: "Smart TV" },
    { src: "/images/Acs.jpg", alt: "Laptop" },
    { src: "/images/kitchenapp1.jpg", alt: "Refrigerator" },
    { src: "/images/solar.png", alt: "Solar" },
    { src: "/images/kitchenapp.jpg", alt: "Kitchen Appliances" },
  ];
   
  return (
   <section>
    <div className="flex flex-col lg:flex-row items-center gap-3">
    <div className="flex flex-col gap-3">
        <h2 className="font-bold text-3xl lg:text-5xl">Smart Electronic for your comfort and convenience</h2>
        <p>Upgrade your lifestyle with trusted electronic solutions that save time, simplify daily routines, boost productivity, and bring innovation into every part of your home and work life.</p>
        <Link to="/shopingpage" className=" rounded-[30px] w-fit font-semibold  px-3 py-2 h-[40px] text-white bg-[#ff0000]" >Shop Now</Link>
    </div>
   <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
           <div className="w-full h-[350px] object-cover"> 
            <img
              src={item.src}
              alt={item.alt}
              className="w-[100%] h-[100%]"
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    <div className="flex lg:justify-between flex-wrap gap-3 py-7">
     <span className="flex gap-3 items-center">
      <FaShippingFast  className="w-[30px] h-[30px] text-[#ff0000]" />
      <div>
      <h5 className="font-bold">Free Shipping </h5>
      <p>When you spend #200,000</p>
      </div>
     </span>
     <span className="flex gap-3 items-center">
      <BsChatDots  className="w-[30px] h-[30px] text-[#ff0000]" />
      <div>
      <h5 className="font-bold">We are available 24/7</h5>
        <p>Need help? contact us anytime</p>
      </div>
     </span>
      <span className="flex gap-3 items-center">
      <FaArrowRotateLeft className="w-[30px] h-[30px] text-[#ff0000]" />
      <div>
        <h5 className="font-bold">Satisfied or Return</h5>
         <p>Easy 30-day return policy</p>
      </div>
     </span>
     <span className="flex gap-3 items-center">
      <FaPaypal  className="w-[30px] h-[30px] text-[#ff0000]"/>
      <div>
      <h5 className="font-bold gap-3 flex flex-col">100% secure payments</h5>
      <p>Mastercard, Stripe, Opay</p>
      </div>
     </span>
    </div>
   </section>
  )
}

export default Herosection;