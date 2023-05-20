import React, { useRef, useState } from "react";
import './Home.scss';
import { Container, Row, Col, Button, Card, ListGroup, Carousel } from "react-bootstrap";
import { HiArrowCircleRight, HiCheckCircle } from "react-icons/hi";
import { BsFillPeopleFill, BsSpeedometer2 } from 'react-icons/bs';
import {MdAttachMoney} from 'react-icons/md';

import CarSec1 from './img/Home/car-sec1.png';

//Card 1
import img0BMW1 from './img/Home/card1/img0-bmw1.jpg';
import img1BMW1 from './img/Home/card1/img1-bmw1.jpg';
import img2BMW1 from './img/Home/card1/img2-bmw1.jpg';
import img3BMW1 from './img/Home/card1/img3-bmw1.jpg';
import img4BMW1 from './img/Home/card1/img4-bmw1.jpg';
import img5BMW1 from './img/Home/card1/img5-bmw1.jpg';
import img6BMW1 from './img/Home/card1/img6-bmw1.jpg';
import img7BMW1 from './img/Home/card1/img7-bmw1.jpg';
import img8BMW1 from './img/Home/card1/img8-bmw1.jpg';

//Card2
import img0BMW2 from './img/Home/card2/img0-bmw2.jpg';
import img1BMW2 from './img/Home/card2/img1-bmw2.jpg';
import img2BMW2 from './img/Home/card2/img2-bmw2.jpg';
import img3BMW2 from './img/Home/card2/img3-bmw2.jpg';
import img4BMW2 from './img/Home/card2/img4-bmw2.jpg';
import img5BMW2 from './img/Home/card2/img5-bmw2.jpg';
import img6BMW2 from './img/Home/card2/img6-bmw2.jpg';
import img7BMW2 from './img/Home/card2/img7-bmw2.jpg';

//Card3

const Home = () => {

    const containerRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseDownX, setMouseDownX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (event) => {
        setIsMouseDown(true);
        setMouseDownX(event.clientX);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (event) => {
        if (!isMouseDown) return;
        const delta = event.clientX - mouseDownX;
        containerRef.current.scrollLeft = scrollLeft - delta;
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const scrollRight = () => {
        const container = containerRef.current;
        container.scrollTo({
            left: container.scrollLeft + container.offsetWidth,
            behavior: 'smooth',
        });
    };

    const ScrollLeft = () => {
        const container = containerRef.current;
        container.scrollTo({
            left: container.scrollLeft - container.offsetWidth,
            behavior: 'smooth',
        });
    };

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
                                <Button className="btnReserve mx-4 my-2 p-3">Veja nossos modelos <HiCheckCircle /> </Button>
                                <Button className="btnLearnMore mx-4 my-2 p-3">Saiba mais  <HiArrowCircleRight /></Button>
                            </Col>

                            <Col>
                            </Col>

                        </Container>
                    </Col>

                    <Col className="img-Carro"><img src={CarSec1} className="img-fluid" alt="" /></Col>

                </Row>
            </Container>


            <Container className="sec2">
                <Row className="flex-nowrap overflow-auto pb-5"
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}>

                    <Col className="Col1">
                        <Card style={{ width: '18rem' }}>
                            <Carousel indicators={false}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img0BMW1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img
                                        className="d-block w-100"
                                        src={img1BMW1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img2BMW1}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img3BMW1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img4BMW1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img5BMW1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img6BMW1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img7BMW1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img8BMW1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <Card.Body>
                                <Card.Title className="titleCard">BMW X1</Card.Title>
                                <Card.Text className="textCard">
                                    
                                        <Row>
                                            <Col>
                                            <MdAttachMoney/>
                                            <br/>
                                                R$ 85 por dia
                                            </Col>
                                           
                                            <Col>
                                            <BsFillPeopleFill />
                                            <br />
                                            5 pessoas
                                            </Col>
                                            <Col>
                                                <BsSpeedometer2 />
                                                <br />
                                                Milhas ilimitadas
                                            </Col>
                                        </Row>
                                    
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button variant="primary">Reservar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                        
                    <Col className="Col2">
                        <Card style={{ width: '18rem' }}>
                            <Carousel indicators={false}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img0BMW2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img
                                        className="d-block w-100"
                                        src={img1BMW2}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img2BMW2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img3BMW2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img4BMW2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img5BMW2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img6BMW2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img7BMW2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <Card.Body>
                                <Card.Title className="titleCard">BMW X4</Card.Title>
                                <Card.Text className="textCard">
                                    
                                        <Row>
                                            <Col>
                                            <MdAttachMoney/>
                                            <br/>
                                                R$ 65 por dia
                                            </Col>
                                           
                                            <Col>
                                            <BsFillPeopleFill />
                                            <br />
                                            5 pessoas
                                            </Col>
                                            <Col>
                                                <BsSpeedometer2 />
                                                <br />
                                                Milhas ilimitadas
                                            </Col>
                                        </Row>
                                    
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button variant="primary">Reservar</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="primary">Reservar</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="primary">Reservar</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="primary">Reservar</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="primary">Reservar</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="primary">Reservar</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="primary">Reservar</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>

        </section>
    );
}

export default Home;