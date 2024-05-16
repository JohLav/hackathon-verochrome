import {Container} from "react-bootstrap";
import SearchBar from "../components/SearchBar.jsx";
import Map from "../components/Map.jsx";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Hello from Home</h1>
            <Container>
                <SearchBar />
                <Map />
                <Link to="/parc">
                    <Button>Checkout</Button>
                </Link>
            </Container>
        </>
    )
}
