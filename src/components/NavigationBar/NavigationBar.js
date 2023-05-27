import React, { useState } from 'react';
import { Navbar, Nav, CloseButton, Button, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './NavigationBar.scss';
import { Link } from 'react-router-dom';
import NavLogo from '../img/Navbar/NavLogo.png';

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
                <img className='img-fluid mx-2' src={NavLogo} alt='' />
                <Navbar.Toggle style={{ color: '#9698a1' }} className='mx-2' onClick={handleToggleOffcanvas} >
                    <FaBars className="toggle" />
                </Navbar.Toggle>
                <Navbar.Collapse className='desktopLink' >
                    <Nav className="me-auto mx-2">

                        <Nav.Link as={Link} to='/' className='mx-2' >
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to='/modelos' className='mx-2' >
                            Veículos
                        </Nav.Link>

                        <Nav.Link as={Link} to='/sobre' className='mx-2'  >
                            Sobre
                        </Nav.Link>

                        <Nav.Link className='mx-2' >
                            Contato
                        </Nav.Link>
                    </Nav>

                    <div className='btnUser'>
                        <Button className="btnLogin mx-2">Entrar</Button>
                        <Button className="btnRegister mx-2">Registrar-se</Button>
                    </div>

                </Navbar.Collapse>

                <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
                    <Offcanvas.Header style={{ backgroundColor: '#2D3142', color: 'white', borderBottom: '1px white solid' }} >
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                        <CloseButton variant="white" onClick={handleLinkClick} />
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ backgroundColor: '#2D3142', color: 'white', }}>
                        <Nav className="me-auto">

                            <Nav.Link as={Link} to='/' onClick={handleLinkClick}>
                                Home
                            </Nav.Link>

                            <Nav.Link as={Link} to='/modelos' onClick={handleLinkClick}>
                                Veículos
                            </Nav.Link>

                            <Nav.Link as={Link} to='/sobre' onClick={handleLinkClick}>
                                Sobre
                            </Nav.Link>

                            <Nav.Link href="#contact" onClick={handleLinkClick}>
                                Contato
                            </Nav.Link>

                            <Button style={{ backgroundColor: '#161927', border: 'none' }} className="btnLogin mb-2 mt-2">Entrar</Button>
                            <Button style={{ backgroundColor: '#EF8354', border: 'none' }} className="btnRegister">Registrar-se</Button>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>

        </section>
    )
}

export default NavigationBar;