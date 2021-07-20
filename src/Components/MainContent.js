import React, {useState} from "react"
import {Card, Button, Modal} from "react-bootstrap"

function MainContent(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [message, setMessage] = useState('');
    return(
        <div>
            <div className="card-block">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.data.img} />
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <Card.Text>
                        <strong>Date: {props.date}</strong>
                    </Card.Text>
                    <Card.Text>
                        Company: {props.data.company.name}
                    </Card.Text>
                    <Card.Text>
                        Place: {props.data.address.city}
                    </Card.Text>
                    { !props.data.rsvp
                     ?
                     <Button variant="primary" onClick={() => {
                        setMessage('Event RSVP successful. Please check your schedule.')
                        handleShow();
                        return props.addRSVP(props.data._id, props.data.id)
                     }} className="mr-1">RSVP</Button>
                     :
                     <Button variant="success" onClick={() => {
                        setMessage('Event RSVP removed. Please check your schedule.')
                        handleShow();
                        return props.removeRSVP(props.data._id, props.data.id)
                     } } className="mr-1">Added</Button>
                    }
                    <Button variant="secondary" onClick={() => props.handleShow(props.data.id, props.data._id, props.data, props.date)} className="mr-1">Update</Button>
                    <Button variant="danger" onClick={() => props.deleteEvent(props.data._id, props.data.id)}>Delete</Button>
                </Card.Body>
                </Card>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>{props.data.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {message}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MainContent


