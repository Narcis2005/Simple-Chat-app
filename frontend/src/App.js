import './App.css';
import React, {useState, useEffect, useMemo} from "react"; 
import io from "socket.io-client"
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import NameInput from './components/nameInput';


function App() {
  return(<NameInput />)
      

}

export default App;
