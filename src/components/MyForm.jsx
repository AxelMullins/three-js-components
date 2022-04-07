import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import MyModal from "./MyModal";

const MyForm = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section className=""
      style={{ display: "grid", placeItems: "center" }}
    >
      <Form className="d-grid m-auto bg-white px-4 pt-2 pb-4 shadow rounded">
        <h2 className="text-center text-crab p-2 border-bottom">
          Login - Crab world
        </h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" size="sm" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" size="sm" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Stay signed in" />
        </Form.Group>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Login
        </Button>
      </Form>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default MyForm;
