import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './Footer.scss';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValid = emailRegex.test(email);
        setIsValidEmail(isValid);
    };

    return (
        <footer id="footer">
            <Container >

                <Row className="pt-4">

                    <Col md className="mb-4">
                        <h2>Car Rentals</h2>
                        <p>Entre em contato conosco.</p>

                        <BsTelephoneFill className="mx-2" /> (99) 9999-9999
                        <br/>
                        ou
                        <br/>
                        <IoMdMail /> carrental@gmail.com

                    </Col>

                    <Col md className="mb-4">
                        <h2>Funcionamento</h2>
                        <p>
                            Seg - Sex: 8:00 - 18:00
                            <br />
                            <br />
                            Sab: 9:00 - 17:00
                            <br />
                            <br />
                            Dom: Fechado
                        </p>
                    </Col>

                    <Col md>
                        <h2>Notícias</h2>
                        <p>Inscreva-se por e-mail e receba as últimas novidades e promoções</p>

                        <Form.Group  controlId="exampleForm.ControlInput1">
                            <Form.Label><span className="title">Email</span></Form.Label>
                            <Form.Control required type="email" placeholder="email@exemplo.com" className="emailinput" value={email} onChange={handleInputChange} />
                            {!isValidEmail && <p className="mt-1">Email inválido!</p>}
                        </Form.Group>

                        <Button className="btnEnviar mt-2" onClick={validateEmail}>Enviar</Button>
                    </Col>

                </Row>

                <FaCode /> Desenvolvido por <a href="https://abudluan.vercel.app" target="_blank">Luan Abud</a>

            </Container>
        </footer>
    );
};

export default Footer;
