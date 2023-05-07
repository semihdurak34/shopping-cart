import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="relative">
      <FiShoppingCart className="text-3xl" />

      {cart.length > 0 && (
        <span className="bg-red-500 text-white w-4 h-4 flex justify-center items-center rounded-full text-xs absolute -top-2 -right-2">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
