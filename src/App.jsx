import { useEffect, useState } from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import initialData from "./data_final.json";

export default function App() {
  const [filteredData, setFilteredData] = useState(initialData);
  const [codePost, setCodePost] = useState("");

  console.log(initialData);

  useEffect(() => {
    if (codePost) {
      const filtered = initialData.filter((item) => {
        const code = parseInt(codePost, 10);
        return !isNaN(code) && item.codepost === code;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(initialData);
    }
  }, [codePost]);

  return (
    <>
      <main className="main-container">
        <Outlet context={{ filteredData, setCodePost }} />
      </main>
    </>
  );
}
