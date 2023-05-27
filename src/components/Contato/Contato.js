import React from "react";
import './Contato.scss';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {GrMail} from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contato = () => {
    return (
        <section id="contato">

            <Container>

                <Row>

                    <Col md>
                        <h1>Precisa de tirar alguma dúvida?</h1>
                        <h4 className="mb-3">Entre em contato pelo nosso email ou telefone</h4>
                        <h2> <BsFillTelephoneFill className="iconPhone" />  (99) 99999-9999</h2>
                    </Col>

                    <Col md>

                        <Form.Label className="mt-5" htmlFor="inputText"><span className="title">Nome completo</span></Form.Label>
                        <Form.Control
                            type="text"
                            id="inputText"
                            placeholder="Ex: Luan Abud"
                            className="mb-4 form"
                        />

                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><span className="title">Email</span></Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" className="mb-4 form" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label><span className="title">Tire sua dúvida</span></Form.Label>
                                <Form.Control className="mb-4 form" as="textarea" placeholder="Escreva aqui sua dúvida..." rows={3} />
                            </Form.Group>
                        </Form>

                        <Button className="btnEnviar"><GrMail className="icon" /> Enviar email</Button>


                    </Col>

                </Row>

            </Container>

        </section >
    );
}

export default Contato;