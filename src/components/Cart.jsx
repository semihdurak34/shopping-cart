import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, emptyCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  console.log(cart);

  if (cart.length === 0) return;
  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        {cart.map((item) => (
          <li className="mt-2 flex justify-between" key={item.id}>
            <span>{item.name}</span>
            <span>{item.price} TL</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Toplam: {total} TL</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition-all mt-4"
        onClick={emptyCart}
      >
        Sepeti Boşalt
      </button>
    </div>
  );
};

export default Cart;

/* import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
  const { cart, emptyCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) return;

  return (
    <div className="border p-4 mt-4 shadow-lg ml-auto w-60 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Sepet</h3>
      <ul>
        {cart.map((item) => (
          <li className="mt-2 flex justify-between" key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <hr className="my-2 border" />
      <p className="my-4 font-semibold">Toplam: {total}</p>
      <button
        className="bg-red-600 text-white w-full rounded-sm py-[3px] hover:bg-red-500 transition-all"
        onClick={emptyCart}
      >
        Sepeti Boşalt
      </button>
    </div>
  );
};

export default Cart;
 */
