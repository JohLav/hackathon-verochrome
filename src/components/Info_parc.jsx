import imgPage from "../assets/fourviere.jpg";

export default function Info_parc() {
  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center bg-info w-50 rounded-1 mt-5 "
        style={{ margin: "0 auto ", color: "#614544" }}
      >
        <h1>Parc de la tête d&apos; Or</h1>
      </div>
      <div className="d-flex justify-content-center py-2 ">
        <img
          src={imgPage}
          alt="basilique"
          className="w-50 rounded-1"
          style={{ margin: "0 auto " }}
        />
      </div>
    </>
  );
}
