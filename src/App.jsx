import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Component/Navbar";
import SolarPower from "./pages/SolarPower";
import HomeAppliances from "./pages/HomeAppliances";
import AudioandVideotvs from "./pages/AudioandVideotvs";
import Refrigerator from "./pages/Refrigerator";
import PhoneandAccessories from "./pages/PhoneandAccessories";
import NewArrivals from "./pages/NewArrivals";
import Todaydeals from "./pages/Todaydeals";
import Aircondition from "./pages/Aircondition";
import KitchenAppliances from "./pages/KitchenAppliances";
import PcsandLaptop from "./pages/PcsandLaptop";
import Gadgets from "./pages/Gadgets";
import SmartHome from "./pages/SmartHome";
import Login from "./pages/Login";
import Cartpage from "./pages/Cartpage";
import Shoping from "./pages/Shoping";
import Dashboard from "./pages/Dashboard";
const App = () => {
  return (
        <section className="px-16 py-5 space-y-9">
     
        <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/home-appliances" element={<HomeAppliances />} />
        <Route path="/solar-power" element={<SolarPower />} />
        <Route path="/audio-video" element={<AudioandVideotvs />} />
        <Route path="/refrigerator" element={<Refrigerator/>} />
        <Route path="/phone-accessories" element={<PhoneandAccessories/>} />
        <Route path="/new-arrivals" element={<NewArrivals/>} />
        <Route path="/deals" element={<Todaydeals/>} />
        <Route path="/air-conditioner" element={<Aircondition/>} />
        <Route path="/kitchen-appliances" element={<KitchenAppliances/>} />
        <Route path="/pcs-laptops" element={<PcsandLaptop/>} />
        <Route path="/gadgets" element={<Gadgets/>} />
        <Route path="/smart-home" element={<SmartHome/>} />
        <Route path="/loginpage" element={<Login/>} />
        <Route path="/cartpage" element={<Cartpage/>} />
        <Route path="/shopingpage" element={<Shoping/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </section>
  )
}

export default App;
