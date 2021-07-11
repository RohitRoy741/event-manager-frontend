import React, { useState } from "react"
import { Navbar, Nav, Form, FormControl, Button, Modal, Col, InputGroup} from "react-bootstrap";
import Timer from "./Timer";
function Header(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true) ;
    let styles = {};
    if(props.image) {
        styles = {
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url(${props.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    }
    console.log(new Date(props.timeout));
    return (
        <div>
            <Navbar expand="lg" variant="dark" bg="dark" className="navbar">
            <Navbar.Brand href="#home">Event Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-items">
                <Nav>
                <Nav.Link href="#home" className="navbar-item">Home</Nav.Link>
                <Nav.Link href="#link"  className="navbar-item" onClick={()=>handleShow(true)}>Create-Event</Nav.Link>
                <Nav.Link href="#schedule" className="navbar-item">Schedule</Nav.Link>
                <Nav.Link href="#my-events" className="navbar-item">My Events</Nav.Link>
                <Nav.Link href="#history" className="navbar-item">History</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div className="title" style={styles}>
                <h1 className="event-name">{props.targetEventName ? props.targetEventName : 'Name'}</h1>
                <h3 className="event-date">Hosted By: {props.targetEventDate ? props.targetEventCompany : 'Company'}</h3>
                <Timer eventDate={props.targetEventDate} />
            </div>
            <Form onSubmit={props.handleSubmit}>
            <Form.Row className="align-items-center search-form">
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                    Criteria
                </Form.Label>
                <Form.Control as="select"
                    className="web"
                    id="inlineFormInput"
                    value={props.filterKey}
                    name="filterKey"
                    onChange={(event) => {props.handleChange(event.target.name, event.target.value)}}
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
                    onChange={(event) => {props.handleChange(event.target.name, event.target.value)}}
                    />
                </InputGroup>
                </Col>
                <Col xs="auto">
                <Button type="submit">
                    Search
                </Button>
                </Col>
                {props.isFilterApplied?
                <Col xs="auto">
                <Button variant="danger" type="reset" className="mb-2" onClick={props.handleReset}>Reset</Button>
                </Col>
                :null}
            </Form.Row>
            </Form>
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
                            <Form.Control type="datetime-local" placeholder="Date" name="date" value={props.date} onChange={props.handleAddEvent}></Form.Control>
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