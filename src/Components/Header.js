import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Modal,
  Col,
  InputGroup,
} from "react-bootstrap";
import Timer from "./Timer";
import { getUser } from "../Utils/Common";
function Header(props) {
  const user = getUser();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let styles = {};
  if (props.image) {
    styles = {
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url(${props.image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
  }
  console.log(props.timeout);
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="primary" className="navbar">
        <Navbar.Brand href="#home">Event Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-items">
          <Nav>
            <Nav.Link href="#home" className="navbar-item username">
              {user.username}
            </Nav.Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 user-icon web"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Nav.Link
              href="#my-events"
              className="navbar-item"
              onClick={props.showEvents}
            >
              Events
            </Nav.Link>
            <Nav.Link
              href="#schedule"
              className="navbar-item"
              onClick={props.showSchedule}
            >
              Schedule
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="navbar-item"
              onClick={() => handleShow(true)}
            >
              Create-Event
            </Nav.Link>
            <Nav.Link
              href="#history"
              className="navbar-item logout"
              onClick={props.handleLogOut}
            >
              Logout
            </Nav.Link>
            <div onClick={props.handleLogOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 logout-icon web"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="title" style={styles}>
        <h1 className="event-name">
          {props.targetEventName ? props.targetEventName : "Name"}
        </h1>
        <h3 className="event-date">
          Hosted By:{" "}
          {props.targetEventDate ? props.targetEventCompany : "Company"}
        </h3>
        <Timer eventDate={props.timeout} />
      </div>
      <Form onSubmit={props.handleSubmit}>
        <Form.Row className="align-items-center search-form">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Criteria
            </Form.Label>
            <Form.Control
              as="select"
              className="web"
              id="inlineFormInput"
              value={props.filterKey}
              name="filterKey"
              onChange={(event) => {
                props.handleChange(event.target.name, event.target.value);
              }}
            >
              <option value="name">Name</option>
              <option value="city">City</option>
              <option value="company">Company</option>
            </Form.Control>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              Value
            </Form.Label>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search"
                id="inlineFormInputGroup"
                name="searchValue"
                value={props.inputValue}
                onChange={(event) => {
                  props.handleChange(event.target.name, event.target.value);
                }}
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="warning">
              Search
            </Button>
          </Col>
          {props.isFilterApplied ? (
            <Col xs="auto">
              <Button variant="danger" type="reset" onClick={props.handleReset}>
                Reset
              </Button>
            </Col>
          ) : null}
        </Form.Row>
      </Form>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form
          onSubmit={(e) => {
            handleClose();
            return props.createEvent(e);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Event Creation Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name of event"
                name="name"
                value={props.name}
                onChange={props.handleAddEvent}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Company"
                name="company"
                value={props.company}
                onChange={props.handleAddEvent}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="City"
                name="city"
                value={props.city}
                onChange={props.handleAddEvent}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                type="datetime-local"
                placeholder="Date"
                name="date"
                value={props.date}
                onChange={props.handleAddEvent}
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit">
              Submit
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Header;
