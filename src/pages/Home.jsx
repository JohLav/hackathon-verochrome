import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar.jsx";
import Map from "../components/Map.jsx";
import ParcDescription from "../components/ParcDescription.jsx";
import initialData from "../data_final.json";

export default function Home() {
  const [filteredData, setFilteredData] = useState(initialData);
  const [codePost, setCodePost] = useState("");

  useEffect(() => {
    if (codePost) {
      const filtered = initialData.filter((item) => item.codepost === codePost);
      setFilteredData(filtered);
    } else setFilteredData(initialData);
  }, [codePost]);

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
