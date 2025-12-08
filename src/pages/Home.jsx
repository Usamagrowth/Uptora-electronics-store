import Categoriessection from "../Component/Categoriessection";
import Herosection from "../Component/Herosection"
import Promotion from "../Component/Promotion";
import Promotion2 from "../Component/Promotion2";
import Createandplay from "../Component/Createandplay";
import Todaydealsection from "../Component/Todaydealsection";
import Solarpowersection from "../Component/Solarpowersection";
import Airconditioner from "../Component/Airconditioner";
import Navbar from "../Component/Navbar";


const Home = () => {
  return (
    <section className="space-y-9 px-5 ">
        <Navbar /> 
        <Herosection />
        <Categoriessection />
        <Promotion />
        <Todaydealsection />
        <Promotion2 />
        <Solarpowersection />
        <Airconditioner />
        <Createandplay />
    </section>
  )
}

export default Home;