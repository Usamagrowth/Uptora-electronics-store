const Categoriescard = ({pimage, ptitle, pdescription}) => {
  return ( 
    <div>
     <div>
        <a href="" className="flex flex-col gap-3">
         <img src={pimage} alt="electronic store" />
          <div className="flex items-center flex-col">
           <h2 className="font-semibold text-xl">{ptitle}</h2>
           <p>{pdescription}</p>
           </div>
        </a>
      </div>
    </div>
  )
}

export default Categoriescard;