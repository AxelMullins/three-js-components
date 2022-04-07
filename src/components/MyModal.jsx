import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, Nav } from "react-bootstrap";

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sitio en construcción...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Hola, soy Axel!</h4>
        <p>Es simplemente una idea, pero podes visitar mis redes.</p>
        <Nav>
          <Nav.Link
            eventKey="disabled"
            href="https://www.linkedin.com/in/axel-mullins/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: "3rem", color: "grey" }}
              className="iconH"
            />
          </Nav.Link>
          <Nav.Link
            eventKey="disabled"
            href="https://github.com/AxelMullins"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "3rem", color: "grey" }}
              className="iconH"
            />
          </Nav.Link>
        </Nav>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
