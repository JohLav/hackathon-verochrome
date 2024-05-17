import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Detail_parc() {
  const location = useLocation();
  const { parcData } = location.state;
  return (
    <>
      <Container className="w-75 p-0 d-flex align-items-center">
        <Card className=" p-0 d-flex align-items-center w-100 mt-5 rounded-1">
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#F2F0EC",
            }}
            className="w-100 align-items-center  rounded-1"
          >
            <Card.Title>
              {" "}
              <h2>Informations</h2>
            </Card.Title>
            {parcData && (
              <Card.Text>
                <ul className="m-0 p-0">
                  <li className="list-unstyled">
                    <div className="d-flex align-items-center justify-content-evenly">
                      <i className="bi bi-segmented-nav"></i>
                      <span>
                        {" "}
                        <strong>Qualité de l'air: </strong> {parcData.IQA}
                      </span>
                    </div>
                  </li>

                  <li className="list-unstyled">
                    <div className="d-flex align-items-center justify-content-evenly">
                      <i className="bi bi-soundwave"></i>
                      <span>
                        {" "}
                        <strong> Nuissances sonores: </strong>{" "}
                        {parcData.Lden_moy}
                      </span>
                    </div>
                  </li>

                  <li className="list-unstyled">
                    <div className="d-flex align-items-center justify-content-evenly">
                      <i className="bi bi-joystick"></i>{" "}
                      <span>
                        <strong>Equipement: </strong> {parcData.type_equip}
                      </span>
                    </div>
                  </li>

                  <li className="list-unstyled">
                    <div className="d-flex align-items-center justify-content-evenly">
                      <i className="bi bi-badge-wc"></i>
                      <span>
                        <strong>Toilette disponiible: </strong>{" "}
                        {parcData.toilettes}
                      </span>
                    </div>
                  </li>
                </ul>
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Detail_parc;
