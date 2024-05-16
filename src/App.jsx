import Button from "react-bootstrap/Button";
import Map from "./components/Map.jsx";
import { Container } from "react-bootstrap";
import './App.scss';


function App() {
  return (
    <>
      <Container>
        <Map />
        <Button>Checkout</Button>
      </Container>
    </>
  );
}

export default App;
