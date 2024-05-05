import { useState } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
    setCount(initial);
  };

  return (
    <div>
      <button className="buttonDecre" onClick={handleDecrement}>
        -
      </button>
      <span className="mx-2">{count}</span>
      <button className="buttonIncre" onClick={handleIncrement}>
        +
      </button>
      <button className="buttonCart" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};
