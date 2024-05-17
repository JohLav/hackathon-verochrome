import { FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
// import Loupe from "../assets/loupe.svg";

export default function SearchBar({ setCodePost }) {
  const [currentSearch, setCurrentSearch] = useState("");

  return (
    <>
      <div style={{ display: "flex" }}>
        <InputGroup
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            marginRight: "0.5rem",
            marginLeft: "0.5rem",
          }}
        >
          <InputGroup.Text
            style={{ backgroundColor: "#6D882E", border: "1px solid #AF8379" }}
          >
            <i className="bi bi-search"></i>
            {/* <img
              style={{ opacity: 0.5 }}
              src={Loupe}
              alt="Description de l'image"
            /> */}
          </InputGroup.Text>
          <FormControl
            style={{ border: "1px solid #AF8379" }}
            value={currentSearch}
            placeholder="Tape ton code postale"
            onChange={(e) => setCurrentSearch(e.target.value)}
          />
          <Button
            style={{
              backgroundColor: "#6D882E",
              border: "none",
              // border: "2px solid #AF8379",
            }}
            onClick={(e) => {
              e.preventDefault();
              setCodePost(currentSearch);
            }}
          >
            Search
          </Button>
        </InputGroup>
      </div>
    </>
  );
}
SearchBar.propTypes = {
  setCodePost: PropTypes.func,
};
