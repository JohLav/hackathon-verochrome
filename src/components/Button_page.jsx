import { Link } from "react-router-dom";

export default function Button_page() {
  return (
    <div style={{ marginTop: "0.5rem" }}>
      <Link to="/Home">
        <i style={{ marginLeft: "1rem" }} className="bi bi-x-square rb:bac"></i>
      </Link>
    </div>
  );
}
