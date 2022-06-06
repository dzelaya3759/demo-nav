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
import  Contact  from './Components/outlook';  
import  Home  from './Components/Home';  

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
    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/career">CS Careers</Nav.Link>
      <Nav.Link as={Link} to="/outlook">CS Job Outlook</Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
  <Routes> 
      <Route path="/career" element={<About/>}/> 
      <Route path= "/outlook" element={<Contact/>}/> 
      <Route path= "/" element={<Home/>}/>
  </Routes> 
  
      </div> 
      </BrowserRouter>
    );
  }
}

export default App;
