import { Link } from "react-router-dom";
import Categoriessection from "../Component/Categoriessection";
import Herosection from "../Component/Herosection"
import Navbar from "../Component/Navbar"
import Productsection from "../Component/Productsection";
import Promotion from "../Component/Promotion";
import Promotion2 from "../Component/Promotion2";
import Solarsection from "../Component/Solarsection";
import Createandplay from "../Component/Createandplay";

const Home = () => {
  return (
    <section className="space-y-9">
        <Herosection />
        <Categoriessection />
        <Promotion />
        <Productsection />
        <Promotion2 />
        <Solarsection />
        <Createandplay />
    </section>
  )
}

export default Home;