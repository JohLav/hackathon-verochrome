import "./App.scss";
import Button from "react-bootstrap/Button";
import Map from "./components/Map.jsx";
import { Container } from "react-bootstrap";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  return (
    <>
      <Container>
        <SearchBar />
        <Map />
        <Button>Checkout</Button>
      </Container>
    </>
  );
}

export default App;
