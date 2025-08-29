import { useParams } from "react-router-dom";
import Products from "./Products";

const Productscards = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-xl mt-10">Product not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <img
          src={product.src}
          alt={product.alt}
          className="w-full h-[350px] object-contain rounded-xl shadow-lg"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-2">{product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productscards;