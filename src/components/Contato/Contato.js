import React, { useState } from "react";
import './Contato.scss';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contato = () => {

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
        <section id="contato">

            <Container>

                <Row>

                    <Col md>
                        <h1>Precisa tirar alguma dúvida ou dar alguma sugestão?</h1>
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
                            required
                        />

                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><span className="title">Email</span></Form.Label>
                                <Form.Control required type="email" placeholder="name@example.com" className="mb-4 form" value={email} onChange={handleInputChange} />
                                {!isValidEmail && <p>Email inválido!</p>}
                            </Form.Group>
                            

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label><span className="title">Tire sua dúvida</span></Form.Label>
                                <Form.Control className="mb-4 pb-5 form" as="textarea" placeholder="Escreva aqui sua dúvida..." rows={3} required />
                            </Form.Group>
                        </Form>

                        <Button className="btnEnviar" onClick={validateEmail}><GrMail className="icon" /> Enviar email</Button>
                        

                    </Col>

                </Row>

            </Container>

        </section >
    );
}

export default Contato;