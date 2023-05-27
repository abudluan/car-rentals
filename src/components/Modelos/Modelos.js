import React from "react";
import './Modelos.scss';
import { Col, Container, Card, Carousel, Row, Button } from "react-bootstrap";
import { MdAttachMoney } from 'react-icons/md';
import { BsFillPeopleFill, BsSpeedometer2 } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

//Card 1
import img0BMW1 from '../img/Home/card1/img0-bmw1.jpg';
import img1BMW1 from '../img/Home/card1/img1-bmw1.jpg';
import img2BMW1 from '../img/Home/card1/img2-bmw1.jpg';
import img3BMW1 from '../img/Home/card1/img3-bmw1.jpg';
import img4BMW1 from '../img/Home/card1/img4-bmw1.jpg';
import img5BMW1 from '../img/Home/card1/img5-bmw1.jpg';
import img6BMW1 from '../img/Home/card1/img6-bmw1.jpg';
import img7BMW1 from '../img/Home/card1/img7-bmw1.jpg';
import img8BMW1 from '../img/Home/card1/img8-bmw1.jpg';

//Card2
import img0BMW2 from '../img/Home/card2/img0-bmw2.jpg';
import img1BMW2 from '../img/Home/card2/img1-bmw2.jpg';
import img2BMW2 from '../img/Home/card2/img2-bmw2.jpg';
import img3BMW2 from '../img/Home/card2/img3-bmw2.jpg';
import img4BMW2 from '../img/Home/card2/img4-bmw2.jpg';
import img5BMW2 from '../img/Home/card2/img5-bmw2.jpg';
import img6BMW2 from '../img/Home/card2/img6-bmw2.jpg';
import img7BMW2 from '../img/Home/card2/img7-bmw2.jpg';

//Card3

import img0Audi1 from '../img/Home/card3/img0-audi1.jpg';
import img1Audi1 from '../img/Home/card3/img1-audi1.jpg';
import img2Audi1 from '../img/Home/card3/img2-audi1.jpg';
import img3Audi1 from '../img/Home/card3/img3-audi1.jpg';
import img4Audi1 from '../img/Home/card3/img4-audi1.jpg';

//Card4
import img0Audi2 from '../img/Home/card4/img0-audi2.avif';
import img1Audi2 from '../img/Home/card4/img1-audi2.avif';
import img2Audi2 from '../img/Home/card4/img2-audi2.avif';
import img3Audi2 from '../img/Home/card4/img3-audi2.avif';
import img4Audi2 from '../img/Home/card4/img4-audi2.avif';
import img5Audi2 from '../img/Home/card4/img5-audi2.avif';
import img6Audi2 from '../img/Home/card4/img6-audi2.avif';

//Card5
import img0BMW3 from '../img/Home/card5/img0-bmw3.jpg';
import img1BMW3 from '../img/Home/card5/img1-bmw3.jpg';
import img2BMW3 from '../img/Home/card5/img2-bmw3.jpg';
import img3BMW3 from '../img/Home/card5/img3-bmw3.jpg';
import img4BMW3 from '../img/Home/card5/img4-bmw3.jpg';

//Card6
import img0GTR1 from '../img/Home/card6/img0-gtr1.jpg';
import img1GTR1 from '../img/Home/card6/img1-gtr1.jpg';
import img2GTR1 from '../img/Home/card6/img2-gtr1.jpg';
import img3GTR1 from '../img/Home/card6/img3-gtr1.jpg';
import img4GTR1 from '../img/Home/card6/img4-gtr1.jpg';

//Card7
import img0MERC from '../img/Home/card7/img0-merc1.avif';
import img1MERC from '../img/Home/card7/img1-merc1.avif';
import img2MERC from '../img/Home/card7/img2-merc1.avif';
import img3MERC from '../img/Home/card7/img3-merc1.avif';

const Modelos = () => {
    return (
        <section id="modelos">

            <Container className="sec1">

                <Row>

                    <Col md className="Col1 mb-4">
                        <Card>
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

                                <div className="stars">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    <p className="text-muted">142 Análises</p>
                                </div>

                                <Card.Text className="textCard">

                                    <Row>
                                        <Col>
                                            <MdAttachMoney />
                                            <br />
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

                    <Col md className="Col2 mb-4">
                        <Card >
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

                                <div className="stars">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    <p className="text-muted">124 Análises</p>
                                </div>
                                <Card.Text className="textCard">

                                    <Row>
                                        <Col>
                                            <MdAttachMoney />
                                            <br />
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

                    <Col md className="Col3 mb-4">
                        <Card >
                            <Carousel indicators={false}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img0Audi1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img
                                        className="d-block w-100"
                                        src={img1Audi1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img2Audi1}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img3Audi1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img4Audi1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                            <Card.Body>
                                <Card.Title className="titleCard">Audi RS 6	Avant</Card.Title>
                                <div className="stars">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    <p className="text-muted">158 Análises</p>
                                </div>
                                <Card.Text className="textCard">

                                    <Row>
                                        <Col>
                                            <MdAttachMoney />
                                            <br />
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
                </Row>

                <Row>
                    <Col md className="Col4 mb-4">
                        <Card>
                            <Carousel indicators={false}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img0Audi2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img
                                        className="d-block w-100"
                                        src={img1Audi2}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img2Audi2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img3Audi2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img4Audi2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img5Audi2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img6Audi2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                            <Card.Body>
                                <Card.Title className="titleCard">Audi Q8</Card.Title>
                                <div className="stars">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    <p className="text-muted">201 Análises</p>
                                </div>
                                <Card.Text className="textCard">

                                    <Row>
                                        <Col>
                                            <MdAttachMoney />
                                            <br />
                                            R$ 55 por dia
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

                    <Col md className="Col5 mb-4">
                        <Card>
                            <Carousel indicators={false}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img0BMW3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img
                                        className="d-block w-100"
                                        src={img1BMW3}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img2BMW3}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img3BMW3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img4BMW3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                            <Card.Body>
                                <Card.Title className="titleCard">BMW Série 1</Card.Title>
                                <div className="stars">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    <p className="text-muted">112 Análises</p>
                                </div>
                                <Card.Text className="textCard">

                                    <Row>
                                        <Col>
                                            <MdAttachMoney />
                                            <br />
                                            R$ 55 por dia
                                        </Col>

                                        <Col>
                                            <BsFillPeopleFill />
                                            <br />
                                            4 pessoas
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

                    <Col md className="Col6 mb-4">
                        <Card>
                            <Carousel indicators={false}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img0GTR1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img1GTR1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img2GTR1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img3GTR1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img4GTR1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>


                            </Carousel>
                            <Card.Body>
                                <Card.Title className="titleCard">Nissan GT-R</Card.Title>
                                <div className="stars">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    <p className="text-muted">135 Análises</p>
                                </div>
                                <Card.Text className="textCard">

                                    <Row>
                                        <Col>
                                            <MdAttachMoney />
                                            <br />
                                            R$ 75 por dia
                                        </Col>

                                        <Col>
                                            <BsFillPeopleFill />
                                            <br />
                                            2 pessoas
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
                </Row>

                <Row>

                    

                </Row>
            </Container>

        </section>
    );
}

export default Modelos;