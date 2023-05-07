import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart.id);
  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
    //setCart([...cart, product]);
    setCart((prevState) => [...prevState, product]);
  };
  return (
    <div className="border p-4 m-2 rounded-t-lg shadow-2xl ">
      <img className="w-full" src={product.image} alt="" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="my-2">{product.price}</p>
      <button
        className="bg-red-600 text-white w-full py-[3px] mb-4 hover:bg-red-500 transition-all rounded-sm"
        onClick={() => addToCart()}
        disabled={findProduct}
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductItem;
