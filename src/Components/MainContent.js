import React, {useState} from "react"
import {Card, Button, Modal} from "react-bootstrap"

function MainContent(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <div className="card-block">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://source.unsplash.com/collection/4482145/300x200/?sig=${props.data.id}`} />
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
                    <Button variant="primary" onClick={() => handleShow(true)}>RSVP</Button>
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
                    Event RSVP successful. We will send you a reminder mail before the event.
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


