import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="logo">
        <Image
          className="logo"
          src="./src/assets/logo_green_space.png"
          rounded
        />
      </div>
    </>
  );
}
