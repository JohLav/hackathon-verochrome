import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";

function Detail_parc() {
  return (
    <>
    <Container>
      <Card>
          <Card.Body style={{display: "flex", flexDirection: "column", alignItems:"center", backgroundColor: "#F2F0EC"}}>
            <Card.Title> <h2>Détails du parc-jardin</h2></Card.Title>
              <Card.Text>
                <ul>
                  <li style={{listUnstyled:"none"}}>Pollution sonore</li>
                  <li>Pollution de l'air</li>
                  <li>Couvert végétal</li>
                </ul> 
              </Card.Text>
            </Card.Body>
    </Card>
  </Container>
  </>
);
}




export default Detail_parc
