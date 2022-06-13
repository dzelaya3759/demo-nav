import React, {Component} from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Navbar, Nav , Container} from 'react-bootstrap'; 
import {
  BrowserRouter,
  Routes,
  Route, 
  Link
} from "react-router-dom";  
import  About  from './Components/About';  
import  Outlook  from './Components/outlook';  
import  Home  from './Components/Home';  
import Card from './components/Card.js';
import data from './components/cs-careers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <BrowserRouter>
      <div className="App">
        
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">RICHMOND HILL HS CSS JOB</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/career">CS Careers</Nav.Link>
      <Nav.Link as={Link} to="/outlook">CS Job Outlook</Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
  <Routes> 
      <Route path="/career" element={<About/>}/> 
      <Route path= "/outlook" element={<Outlook/>}/> 
      <Route path= "/" element={<Home/>}/>
  </Routes> 
  
      </div> 
      </BrowserRouter>
  
      <div className="container">
        <h1 className="section-title">CS Careers</h1>
      </div>
      
      <div className="container">
        <h2 className="section-title">Info</h2>
        <ul className="cards">
           
       
    );
  }
}


export default App;
