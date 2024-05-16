import { Link } from "react-router-dom";
import Parc from "../assets/parc.svg";
import { Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";

function ParcDescription() {
  return (
    <>
      <Container>
        <Link to="/parc">
          <Card
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#BBC4AF",
              marginBottom: "30px",
            }}
          >
            <Card.Img
              variant="top"
              src={Parc}
              style={{ height: "5rem", width: "20%" }}
            />
            <Card.Body>
              <Card.Title>A afficher nom du parc</Card.Title>
              <Card.Text>A afficher description du parc</Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/parc">
          <Card
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F6F3EC",
              marginBottom: "30px",
            }}
          >
            <Card.Img
              variant="top"
              src={Parc}
              style={{ height: "5rem", width: "20%" }}
            />
            <Card.Body>
              <Card.Title>A afficher nom du parc</Card.Title>
              <Card.Text>A afficher description du parc</Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/parc">
          <Card
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F6F3EC",
              marginBottom: "5px",
            }}
          >
            <Card.Img
              variant="top"
              src={Parc}
              style={{ height: "5rem", width: "20%" }}
            />
            <Card.Body>
              <Card.Title>A afficher nom du parc</Card.Title>
              <Card.Text>A afficher description du parc</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Container>
    </>
  );
}

export default ParcDescription;
