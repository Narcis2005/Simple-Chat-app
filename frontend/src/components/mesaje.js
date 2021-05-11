import React, {useState, useEffect, useMemo} from "react"; 
import io from "socket.io-client"
import {Container, Row, Col, Form, Button} from "react-bootstrap"

const endpoint = "http://localhost:5000";
const socket =  io.connect(endpoint) 
const Mesaje = ({name}) => {
    

   
  const [info, setInfo] = useState({ message: ""});
  const [chat, setChat] = useState([])
   
  
  
  useEffect(()=>{

    socket.on("message", ({name, message}) => {
      setChat(prevChat => [...prevChat, {name, message}])
    })
  }, [])
  const handleMessageChange = e => {
    setInfo({...info, message: e.target.value});
  }
  const sendMessage = (e) => {
   
    e.preventDefault();
    const { message} = info;
    socket.emit("message", {name, message});
    setInfo({ message: ""});
  }
  const renderChat = () => {
    return chat.map(({name, message}, index) => (
        <div key={index}>
              <span>{name}: {message}</span>
        </div>
    ))
  }
  return (
    <div className="App">
        <Container className="justify-content-md-center">

<Row className="align-items-center mt-5" >
    <Col md="2"></Col>
    <Col md="8">
        <Form onSubmit={sendMessage} className="mb-3">
       

            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Message" value={info.message} onChange={handleMessageChange}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Send message
            </Button>
        </Form>
    </Col>
    <Col md="2"></Col>

</Row>

</Container>
    <div>
      <h3>Chat</h3>
      {renderChat()}
    </div>
    </div>
  );

}

export default Mesaje;