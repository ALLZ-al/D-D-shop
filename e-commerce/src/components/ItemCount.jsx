import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import "../App.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [cant, setCant] = useState(initial);
  const increment = () => {
    if (cant < stock) {
      setCant(cant + 1);
    }
  };
  const decrement = () => {
    if (cant > 1) {
      setCant(cant - 1);
    }
  };
  return (
    <div className="Counter d-flex justify-content-center">
      <div className="Controls d-flex justify-content-center">
        <Button className="buttonDecre" onClick={decrement}>
          -
        </Button>
        <h4 className="Number">{cant}</h4>
        <Button className="buttonIncre" onClick={increment}>
          +
        </Button>
      </div>
      <div>
        <Button className="buttonCart" onClick={() => onAdd(cant)} disabled={!stock}>
          agregar al carrito
        </Button>
      </div>
    </div>
  );
};
