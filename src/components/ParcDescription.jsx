import { Link } from "react-router-dom";
import Parc from "../assets/parc.svg";
import { Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";

const parcLyon = [
  { id: 1, nom: "Parc de la Tête d'or", lieu: "Lyon 6" },
  { id: 2, nom: "Parc de Suter", lieu: "Lyon 4 " },
  { id: 3, nom: "Parc des Hauteurs", lieu: "Lyon 3" },
  { id: 3, nom: "Parc de Anne Soso", lieu: "Lyon 3" },
  { id: 3, nom: "Parc de Adeline", lieu: "Lyon 3" },
];

function ParcDescription() {
  return (
    <>
      <Container>
        {parcLyon.map((parc, index) => (
          <Link to="/parc" key={index}>
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
                <Card.Title>{parc.nom}</Card.Title>

                <Card.Text>{parc.lieu}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Container>
    </>
  );
}

export default ParcDescription;
