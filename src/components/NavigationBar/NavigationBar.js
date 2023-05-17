import React, { useState } from 'react';
import { Navbar, Nav, CloseButton, Button, Offcanvas } from 'react-bootstrap';
import './NavigationBar.scss';

const NavigationBar = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleLinkClick = () => {
        setShowOffcanvas(false);
    };

    const handleToggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (

        <section id='NavigationBar'>

            <Navbar className='container' expand="lg">
                <Navbar.Brand className='mx-2' href="#">Logo</Navbar.Brand>
                <Navbar.Toggle className='mx-2' onClick={handleToggleOffcanvas} />
                <Navbar.Collapse className='desktopLink' >
                    <Nav className="me-auto">
                        <Nav.Link href="#home" >
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" >
                            About
                        </Nav.Link>
                        <Nav.Link href="#services" >
                            Services
                        </Nav.Link>
                        <Nav.Link href="#contact" >
                            Contact
                        </Nav.Link>
                    </Nav>

                    <div className='btnUser'>
                        <Button className="btnLogin mx-2">Entrar</Button>
                        <Button className="btnRegister mx-2">Registrar-se</Button>
                    </div>

                </Navbar.Collapse>

                <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
                    <Offcanvas.Header style={{ backgroundColor: '#2D3142', color: 'white', }} >
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                        <CloseButton variant="white" onClick={handleLinkClick}/>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ backgroundColor: '#2D3142', color: 'white', }}>
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={handleLinkClick}>
                                Home
                            </Nav.Link>
                            <Nav.Link href="#about" onClick={handleLinkClick}>
                                About
                            </Nav.Link>
                            <Nav.Link href="#services" onClick={handleLinkClick}>
                                Services
                            </Nav.Link>
                            <Nav.Link href="#contact" onClick={handleLinkClick}>
                                Contact
                            </Nav.Link>
                            <Button style={{backgroundColor: '#161927', border: 'none'}} className="btnLogin mb-2 mt-2">Entrar</Button>
                            <Button style={{backgroundColor: '#EF8354', border: 'none'}} className="btnRegister">Registrar-se</Button>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>

        </section>
    )
}

export default NavigationBar;