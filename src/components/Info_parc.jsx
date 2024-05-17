import { useLocation } from "react-router-dom";
import imgPage from "../assets/fourviere.jpg";

export default function Info_parc() {
  const location = useLocation();
  const { parcData } = location.state;
  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center bg-info w-75 rounded-1 mt-5 text-center "
        style={{ margin: "0 auto ", color: "#614544" }}
      >
        <h2 className="">{parcData.nom}</h2>
      </div>
      <div className="d-flex justify-content-center py-2 ">
        <img
          src={imgPage}
          alt="basilique"
          className="w-75 rounded-1 mt-3
          "
          style={{ margin: "0 auto " }}
        />
      </div>
    </>
  );
}
