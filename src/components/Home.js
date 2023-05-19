import React from "react";
import './Home.scss';
import { Container, Row, Col, Button } from "react-bootstrap";

import CarSec1 from './img/Home/car-sec1.png';


const Home = () => {
    return (
        <section id='home'>

            <Container className="sec1">
                <Row>

                    <Col>
                        <Container className="text-Carro">

                           <h4>Planeje sua viagem agora</h4>
                           <h1>Economize <span className="markText">muito</span> com o nosso aluguel de carros</h1>
                           <p>Alugue o carro dos seus sonhos. Preços imbatíveis, milhas ilimitadas, opções de retirada flexíveis e muito mais.</p>
                            
                            <Col>
                            <Button className="btnReserve mx-4 my-2">Reserve agora  </Button>
                            <Button className="btnLearnMore mx-4 my-2">Saiba mais  </Button>
                            </Col>

                            <Col>
                            </Col>
                           
                        </Container>
                    </Col>
                    
                    <Col className="img-Carro"><img src={CarSec1} className="img-fluid" alt="" /></Col>
                    
                </Row>
            </Container>

        </section>
    );
}

export default Home;