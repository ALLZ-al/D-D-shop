import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Item = ({ item }) => (
  <Card className="cardImg" style={{ width: "20rem" }}>
    <Card.Img src={item.pictureUrl} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text className="cardText">{item.description}</Card.Text>
      <Link to={`/Item/${item.id}`}>
        <Button>Ir a detalle</Button>
      </Link>
    </Card.Body>
  </Card>
);
