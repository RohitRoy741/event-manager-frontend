import React, { useState } from "react"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Modal} from "react-bootstrap";
function Header(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true) ;
    return (
        <div>
            <Navbar expand="lg" variant="dark" className="navbar">
            <Navbar.Brand href="#home">E Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link" onClick={()=>handleShow(true)}>Create Event</Nav.Link>
                <NavDropdown title="Tasks" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" onClick={()=>handleShow(true)}>Create Event</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Your Events</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline onSubmit={props.handleSubmit}>
                    <Form.Control as="select"
                      className="mr-2"
                      value={props.filterKey}
                      name="filterKey"
                      onChange={(event) => {props.handleChange(event.target.name, event.target.value)}}
                    >
                        <option value="name">Name</option>
                        <option value="city">City</option>
                        <option value="company">Company</option>
                    </Form.Control>
                    <FormControl 
                    type="text" 
                    placeholder="Search"
                    className="mr-sm-2"
                    name="searchValue" 
                    value={props.inputValue} 
                    onChange={(event) => {props.handleChange(event.target.name, event.target.value)}}
                     />
                    <Button variant="warning" type="submit">Search</Button>
                    {props.isFilterApplied?<Button variant="danger" type="reset" className="ml-2" onClick={props.handleReset}>Reset</Button>:null}
                </Form>
            </Navbar.Collapse>
            </Navbar>
            <div className="title">
                <h1>Event Manager</h1>
                <h3>Manage your tasks with us and never miss an event!</h3>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Form onSubmit={(e) => {
                    handleClose();
                    return props.createEvent(e);
                }}>
                    <Modal.Header closeButton>
                    <Modal.Title>Event Creation Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="text" placeholder="Name of event" name="name" value={props.name} onChange={props.handleAddEvent}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Company" name="company" value={props.company} onChange={props.handleAddEvent}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" name="city" value={props.city} onChange={props.handleAddEvent}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Date" name="date" value={props.date} onChange={props.handleAddEvent}></Form.Control>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="success" type="submit">Submit</Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default Header