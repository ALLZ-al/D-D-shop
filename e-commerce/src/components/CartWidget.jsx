import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to={"/Cart"} className="cartLink">
      {totalQuantity > 0 ? (
        <div className="quantityBadge">{totalQuantity}</div>
      ) : null}
      <BsCart4 className="cartWidget" />
    </Link>
  );
};
