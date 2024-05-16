import "./App.scss";
import {Outlet} from "react-router-dom";

export default function App() {
  return (
    <>
        <main className="main-container">
            <Outlet />
        </main>
    </>
  );
}
