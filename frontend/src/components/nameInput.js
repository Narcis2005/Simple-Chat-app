import React, {useState} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import Mesaje from "./mesaje"
const NameInput = () => {
    const [name, setName] = useState("");
    const [submit, setSubmit] = useState(false)
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        setSubmit(true)
       
    }
    return (
        <>{!submit ?   <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={handleNameChange}/>
                        <Button variant="primary" type="submit">
                            go
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container> : <Mesaje name={name} />}
           
        </>
    )
}

export default NameInput;