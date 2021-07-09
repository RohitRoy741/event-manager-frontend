import React, {useState} from "react"
import {Card, Button, Alert} from "react-bootstrap"

function MainContent(props) {
    const [show, setShow] = useState(false);
    return(
        <div>
            {show?
            <Alert variant="success" className="mb-0 fixTop alert" onClose={() => setShow(false)} dismissible>
              Event RSVP Successful
            </Alert>
            :
            null
            }
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
                    <Button variant="primary" onClick={() => setShow(true)}>RSVP</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default MainContent


