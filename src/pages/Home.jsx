// import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar.jsx";
import Map from "../components/Map.jsx";
import ParcDescription from "../components/ParcDescription.jsx";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const { filteredData, setCodePost } = useOutletContext();
  // console.log(filteredData);

  return (
    <>
      <Container>
        <SearchBar setCodePost={setCodePost} />
        <Map />
        <ParcDescription data={filteredData} />
      </Container>
    </>
  );
}
