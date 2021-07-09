import React, { useState } from "react"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
function Header(props){
    const [showForm, setShowForm] = useState(false);
    let form = (
        <Form className="create-form" onSubmit={(e) => {
            setShowForm(false);
            return props.createEvent(e);
            }}>
            <Form.Control type="text" placeholder="Name of event" name="name" value={props.name} onChange={props.handleAddEvent}></Form.Control>
            <Form.Control type="text" placeholder="Company" name="company" value={props.company} onChange={props.handleAddEvent}></Form.Control>
            <Form.Control type="text" placeholder="City" name="city" value={props.city} onChange={props.handleAddEvent}></Form.Control>
            <Form.Control type="date" placeholder="Date" name="date" value={props.date} onChange={props.handleAddEvent}></Form.Control>
            <Button variant="success" type="submit">Submit</Button>
            <Button variant="danger" onClick={()=>{setShowForm(false)}}>Cancel</Button>
        </Form>
    );
    return (
        <div>
            <Navbar expand="lg" variant="dark" className="navbar">
            <Navbar.Brand href="#home">E Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Schedule</Nav.Link>
                <NavDropdown title="Tasks" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" onClick={()=>{setShowForm(!showForm)}}>Create Event</NavDropdown.Item>
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
            {showForm ? form : null}
        </div>
    );
}

export default Header