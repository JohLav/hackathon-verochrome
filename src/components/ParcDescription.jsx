import { Link } from "react-router-dom";
import Parc from "../assets/parc.svg";
import { Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";

function ParcDescription({data}) {
  console.log(data)
  return (
    <>
      <Container>
        {data.map((parc, index) => (
          <Link to="/parc" key={index}>
            <Card
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
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

                <Card.Text>{parc.voie} {parc.codepost} {parc.commune}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Container>
    </>
  );
}

export default ParcDescription;
