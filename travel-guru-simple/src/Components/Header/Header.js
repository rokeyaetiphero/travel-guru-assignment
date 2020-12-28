import React from 'react';
import './Header.css';
import {Navbar,Nav,Button,FormControl,Form} from 'react-bootstrap';
import Logo from '../../images/Logo.png';

const Header = () => {

    return (
      <Navbar style={{marginLeft: '23%',justifyContent: 'space-between'}} expand="lg">
      <Navbar.Brand href="#home"><img className='logo' src={Logo} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Form inline>
          <FormControl style={{ marginRight: '40px'}} type="text" placeholder="Search Your Destination" id='des' className="mr-sm-2" />
        </Form>
          <Nav.Link href="#home">News</Nav.Link>
          <Nav.Link href="#link">Destination</Nav.Link>
          <Nav.Link href="#home">Blog</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Button variant="outline-success">Log In</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  //       <Navbar className='Navigation'>
  //   <Nav style={{display: 'd-flex align-items-center inline', justifyContent:'space-between'}} className="ml-auto">
  //   <img style={{height: '10%', width: '10%',marginRight: '30px'}} src={Logo} alt=""/>
  //   <button class="search">Search Your Destination</button>
  //     <NavLink  className="text" to='/home' style={{ margin: '25px', fontSize:'20px',color: 'white'}}>Home</NavLink>
  //     <NavLink  className="text" to='/home' style={{ margin: '25px',fontSize:'20px',color: 'white'}}>Features</NavLink>
  //     <NavLink   className="text" to='/home' style={{margin: '25px',fontSize:'20px',color: 'white'}}>Pricing</NavLink>
  //     <NavLink  className="text" to='/home' style={{ margin: '25px',fontSize:'20px',color: 'white'}}>Features</NavLink>
  //     <NavLink  className="text" to='/home' style={{margin: '25px',fontSize:'20px',color: 'white'}}>Pricing</NavLink>
  //     <button className='login' variant='warning' style={{margin: '25px'}}>Log In</button>
  //   </Nav>
    
  // </Navbar>

    );
};

export default Header;

