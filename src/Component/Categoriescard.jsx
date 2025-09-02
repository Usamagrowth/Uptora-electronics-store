import { Link } from "react-router-dom";

const Categoriescard = ({pimage, ptitle, pdescription}) => {
  return ( 
    <div>
     <div>
        <Link to="/" className="flex flex-col gap-3">
         <img src={pimage} alt="electronic store" />
          <div className="flex items-center flex-col">
           <h2 className="font-semibold text-xl">{ptitle}</h2>
           <p>{pdescription}</p>
           </div>
        </Link>
      </div>
    </div>
  )
}

export default Categoriescard;