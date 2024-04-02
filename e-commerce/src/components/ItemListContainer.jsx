import data from "../data/products.json";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const traer = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    traer.then((data) => {
      if (!id) {
        setItems(data);
      } else {
        const filterData = data.filter((prod) => prod.category === id);
        setItems(filterData);
      }
    });
    traer.catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <ItemList items={items} />
    </Container>
  );
};
