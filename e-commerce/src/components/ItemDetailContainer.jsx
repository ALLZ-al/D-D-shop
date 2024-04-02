import data from "../data/products.json";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const traer = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    traer.then((data) => {
      const findData = data.find((prod) => prod.id === Number(id));
      setItem(findData);
    });
    traer.catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
  }, [id]);

  if (!item)
    return (
      <div className="spinnerSt">
        <Spinner animation="border" variant="danger" />
      </div>
    );

  return (
    <Container className="mt-4">
    <Row>
      <Col md={7}>
        <Card>
          <Card.Img src={item.pictureUrl} />
        </Card>
      </Col>
      <Col md={5}>
        <Card>
          <Card.Header>{item.title}</Card.Header>
          <Card.Body>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Precio: {item.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <ItemCount
              initial={0}
              stock={3}
              onAdd={(cant) => console.log(cant, "agregado")}
            />
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
  
  );
};
