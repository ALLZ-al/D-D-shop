import { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, clearCart, total, getTotal } = useContext(CartContext);

  useEffect(() => {
    getTotal();
  }, [cart, getTotal]);

  return (
    <div className="containerCartItemList">
      {cart.length === 0 ? (
        <>
          <h2>El carrito está vacío.</h2>
          <Link to={"/"}>
            <button className="buttonCart">volver a la home</button>
          </Link>
        </>
      ) : (
        <>
          {cart.map((p) => (
            <CartItem key={p.id} {...p} />
          ))}
          <h4>Subtotal: ${total} </h4>
          <h3>total: ${total}</h3>
          <div className="buttonsCart">
            <button className="buttonClearCart" onClick={() => clearCart()}>
              Limpiar carrito
            </button>
            <Link to={"/Checkout"}>
              <button className="buttonFinish">Terminar mi compra</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
