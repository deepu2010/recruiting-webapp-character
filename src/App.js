import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAttribute } from "./actions/attributeActions";
import { openModal, closeModal } from "./actions/modalActions";
import { ATTRIBUTE_LIST, CLASS_LIST } from "./consts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./App.css";

function App() {
  const attributes = useSelector((state) => state.attributes);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleAttributeChange = (attr, value) => {
    dispatch(updateAttribute(attr, value));
  };

  const openClassMinimumValues = (classValue) => {
    dispatch(openModal(classValue));
  };

  const projectClass = (classValue) => {
    let selectedClass = CLASS_LIST[classValue];
    let requiredMatches = Object.keys(attributes).length;
    let match = 0;
    for (const attribute in attributes) {
      if (attributes[attribute] >= selectedClass[attribute]) {
        match++;
      }
    }
    if (match === requiredMatches) {
      return "success";
    } else {
      return "danger";
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const displayModifier = (param) => {
    if (param > 20) {
      alert("Attribute cannot be greater than 20");
    } else {
      return Math.floor((param - 10) / 2);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <Container>
          <Row className="mx-auto">
            <Col className="mx-auto">
              <h2>Attributes</h2>
            </Col>
            <Col>
              <h2>Modifiers</h2>
            </Col>
          </Row>
          {ATTRIBUTE_LIST.map((attr) => (
            <React.Fragment key={attr}>
              <Row>
                <Col>
                  <div className="attribute mx-auto">
                    <div>{attr}:</div>
                    <div>
                      <Button
                        variant="secondary"
                        onClick={() => handleAttributeChange(attr, 1)}
                      >
                        +
                      </Button>{" "}
                      {attributes[attr]}
                      <Button
                        variant="secondary"
                        onClick={() => handleAttributeChange(attr, -1)}
                      >
                        -
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="attribute mx-auto">
                    <div>Modifier:</div>
                    <div>{displayModifier(attributes[attr])}</div>
                  </div>
                </Col>
              </Row>
            </React.Fragment>
          ))}
          {Object.keys(CLASS_LIST).map((classValue) => (
            <Row key={classValue} className="my-2 justify-content-center">
              <Button
                onClick={() => openClassMinimumValues(classValue)}
                variant={projectClass(classValue)}
                className="w-50"
              >
                {classValue}
              </Button>
            </Row>
          ))}
        </Container>
      </section>
      <Modal show={modal.isOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modal.classData}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {modal.classData
            ? Object.entries(CLASS_LIST[modal.classData]).map(
                ([key, value]) => (
                  <div key={key}>
                    {key}: {value}
                  </div>
                )
              )
            : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
          onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
