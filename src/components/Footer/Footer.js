import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './Footer.scss';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaCode } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer id="footer">
            <Container >

                <Row className="pt-4">

                    <Col md className="mb-4">
                        <h2>Car Rentals</h2>
                        <p>Entre em contato conosco.</p>

                        <BsTelephoneFill className="mx-2" /> (99) 9999-9999
                        <br />
                        <IoMdMail className="mx-2" /> carrental@gmail.com

                    </Col>

                    <Col md className="mb-4">
                        <h2>Funcionamento</h2>
                        <p>
                            Seg - Sex: 8:00 - 18:00
                            <br />
                            Sab: 9:00 - 17:00
                            <br />
                            Dom: Fechado
                        </p>
                    </Col>

                    <Col md>
                        <h2>Inscreva-se</h2>
                        <p>Inscreva-se por e-mail e receba as últimas novidades e promoções</p>

                        
                        <input className="emailinput" type="email" placeholder="Endereço de Email"></input>
                        <br/>
                        <Button className="btnEnviar mt-2">Enviar</Button>
                    </Col>

                </Row>

                <FaCode /> Desenvolvido por <a href="https://euabud.netlify.app/" target="_blank">Luan Abud</a>

            </Container>
        </footer>
    );
};

export default Footer;