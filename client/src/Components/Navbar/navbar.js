import React, { useEffect, useReducer, useState } from 'react';
import Axios from 'axios';
import Logo from './logo_transparent.png'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Image } from 'react-bootstrap';

export default function MyNavbar() {
    const [getPassword, setGetPassword] = useState([]);
    useEffect(() => {
        Axios.get('/User')
            .then(res => {

                setGetPassword(res.data)

            })
            .catch(err => {
                console.log(err);
            })
    })
    const isLoaded = () => {
        window.scroll(0, 0);
    }

    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="'light'" variant="light">
                <Navbar.Brand href="/"><Image src={Logo} width='70rem' roundedCircle /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                           
                           
                            <NavDropdown.Item href="/CreatBurger">Creact Burger</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/CreatUser">Sign Up</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                   
                     {getPassword.length ?  <Nav.Link> WellCome Admin <span className='text-purple-700 text-opacity-75'>{getPassword}</span>  </Nav.Link>  :   <Nav.Link href="/Login"> login </Nav.Link>  }
                   
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        


        </div>
    )
}


{/* 
<Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Home Page</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link href="/CreatUser">Creat User</Nav.Link>
        <Nav.Link href="/CreatBurger">Creat Burger</Nav.Link>
        <Nav.Link href="/CreatPassword">Sign up</Nav.Link>
        <Nav.Link href="/Login">Log In</Nav.Link>
    </Nav>
    <Form inline>

        <Button variant="outline-primary"> Well Come Back - {getPassword} - </Button>
    </Form>
</Navbar> */}
