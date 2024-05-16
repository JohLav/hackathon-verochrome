import { FormControl } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function SearchBar({ setCodePost }) {
  const [currentSearch, setCurrentSearch] = useState("");

  return (
    <>
      <FormControl
        className=""
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          setCodePost(currentSearch);
        }}
      >
        Search
      </Button>
    </>
  );
}
SearchBar.propTypes = {
  setCodePost: PropTypes.func,
};
