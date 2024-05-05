import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <Card className="cardImg" style={{ width: "17rem" }}>
      <Card.Img src={item.pictureUrl} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{item.title}</Card.Title>
        </div>
        <div>
          <Link to={`/Item/${item.id}`}>
            <button>Ir a detalle</button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
