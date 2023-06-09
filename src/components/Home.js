import React, { useRef, useState } from "react";
import './Home.scss';
import { Container, Row, Col, Button, Card, Carousel, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiArrowCircleRight, HiCheckCircle } from "react-icons/hi";
import { BsFillPeopleFill, BsSpeedometer2 } from 'react-icons/bs';
import { MdAttachMoney, MdCarRental } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { RiToolsFill } from 'react-icons/ri';
import { FiChevronsDown } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

import AOS from 'aos';
import 'aos/dist/aos.css';

import CarSec1 from './img/Home/car-sec1.png';
import imgFundo from './img/Home/sec1-bg.png';
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

import img0Audi1 from './img/Home/card3/img0-audi1.jpg';
import img1Audi1 from './img/Home/card3/img1-audi1.jpg';
import img2Audi1 from './img/Home/card3/img2-audi1.jpg';
import img3Audi1 from './img/Home/card3/img3-audi1.jpg';
import img4Audi1 from './img/Home/card3/img4-audi1.jpg';

//Card4
import img0Audi2 from './img/Home/card4/img0-audi2.avif';
import img1Audi2 from './img/Home/card4/img1-audi2.avif';
import img2Audi2 from './img/Home/card4/img2-audi2.avif';
import img3Audi2 from './img/Home/card4/img3-audi2.avif';
import img4Audi2 from './img/Home/card4/img4-audi2.avif';
import img5Audi2 from './img/Home/card4/img5-audi2.avif';
import img6Audi2 from './img/Home/card4/img6-audi2.avif';

//Card5
import img0BMW3 from './img/Home/card5/img0-bmw3.jpg';
import img1BMW3 from './img/Home/card5/img1-bmw3.jpg';
import img2BMW3 from './img/Home/card5/img2-bmw3.jpg';
import img3BMW3 from './img/Home/card5/img3-bmw3.jpg';
import img4BMW3 from './img/Home/card5/img4-bmw3.jpg';

//Card6
import img0GTR1 from './img/Home/card6/img0-gtr1.jpg';
import img1GTR1 from './img/Home/card6/img1-gtr1.jpg';
import img2GTR1 from './img/Home/card6/img2-gtr1.jpg';
import img3GTR1 from './img/Home/card6/img3-gtr1.jpg';
import img4GTR1 from './img/Home/card6/img4-gtr1.jpg';

//Card7
import img0MERC from './img/Home/card7/img0-merc1.avif';
import img1MERC from './img/Home/card7/img1-merc1.avif';
import img2MERC from './img/Home/card7/img2-merc1.avif';
import img3MERC from './img/Home/card7/img3-merc1.avif';

import Pic1 from './img/Home/profilePics/pic1.png';
import Pic2 from './img/Home/profilePics/pic2.png';
import Pic3 from './img/Home/profilePics/pic3.png';


import BtnPlay from './img/Home/btn-playstore.svg';
import BtnApple from './img/Home/btn-applestore.svg';

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

    AOS.init();

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
                                <Button className="btnReserve mx-4 my-2 p-3" as={Link} to='/modelos'>Veja nossos modelos <HiCheckCircle /> </Button>
                                <Button className="btnLearnMore mx-4 my-2 p-3">Saiba mais  <HiArrowCircleRight /></Button>
                            </Col>

                            <Col>
                            </Col>

                        </Container>
                    </Col>

                    <Col className="img-Carro">
                        <img src={CarSec1} className="img-fluid" alt="" />
                        <img src={imgFundo} className="img-fluid imgFundo" alt="" />

                    </Col>


                </Row>
            </Container>

            <div className="sec2">

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
                                <div className="stars">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                </div>
                                <Card.Text className="textCard">

                                    <Row className="container">
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
                                <div className="stars">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                </div>
                                <Card.Text className="textCard">

                                    <Row className="container">
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

                    <Col className="Col3">
                        <Card style={{ width: '18rem' }}>
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
                                </div>
                                <Card.Text className="textCard">

                                    <Row className="container">
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

                    <Col className="Col4">
                        <Card style={{ width: '18rem' }}>
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
                                </div>
                                <Card.Text className="textCard">

                                    <Row className="container">
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

                    <Col className="Col5">
                        <Card style={{ width: '18rem' }}>
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
                                </div>
                                <Card.Text className="textCard">

                                    <Row className="container">
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

                    <Col className="Col6">
                        <Card style={{ width: '18rem' }}>
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
                                </div>
                                <Card.Text className="textCard">

                                    <Row className="container">
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

                    <Col className="Col7">
                        <Card style={{ width: '18rem' }}>
                            <Carousel indicators={false}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img0MERC}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img1MERC}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img2MERC}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img3MERC}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                            <Card.Body>
                                <Card.Title className="titleCard">Mercedes-Benz Class A</Card.Title>
                                <div className="stars">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                </div>
                                <Card.Text className="textCard">

                                    <Row className="container">
                                        <Col>
                                            <MdAttachMoney />
                                            <br />
                                            R$ 75 por dia
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

                </Row>

            </div>

            <Container className="sec3">

                <h1>Facilidade e Simplicidade</h1>
                <h3 className="text-center mb-5">Planje sua viagem sem burocracia e com agilidade</h3>

                <Container>
                    <Row className="iconsSec3">

                        <Col sm={4} className="mt-5" data-aos="fade-down" data-aos-duration="700">
                            <MdCarRental className="icon" />
                            <h3>Escolha o carro</h3>
                            <p>Oferecemos uma grande variedade de veículos para todas as suas necessidades de direção. Temos o carro perfeito para atender às suas necessidades.</p>
                        </Col>

                        <Col sm={4} className="mt-5" data-aos="fade-up" data-aos-duration="700">
                            <BiSupport className="icon" />
                            <h3>Suporte</h3>
                            <p>Nossos operadores experientes e amigáveis estão sempre prontos para ajudar com qualquer dúvida ou preocupação.</p>
                        </Col>

                        <Col sm={4} className="mt-5" data-aos="fade-down" data-aos-duration="700">
                            <RiToolsFill className="icon" />
                            <h3>Assisência 24/7</h3>
                            <p>Viage despreocupado, nossos mecânicos e assistentes estarão sempre aposotos em caso de imprevistos com seu carro, não importa a hora e local.</p>
                        </Col>
                    </Row>
                </Container>

            </Container>


            <div className="sec4">

                <div>
                    <h1>
                        Porque nos escolher?
                    </h1>
                    <p className="container">Descubra o impacto positivo que causamos em nossos clientes lendo seus depoimentos. Nossos clientes experimentaram nossos serviços e resultados e estão ansiosos para compartilhar suas experiências positivas com você.</p>
                    <div className="icon">
                        <FiChevronsDown />
                    </div>
                </div>

                <Container className="avaliation">
                    <Row>
                        <CardGroup>
                            <Card className="mx-2 cardBody" data-aos="fade-down" data-aos-duration="700">
                                <Card.Body>
                                    <Card.Text className="text-av">
                                        Quero expressar minha satisfação com os serviços da Car Rentals. Foi a primeira vez que aluguei um carro e fiquei impressionada com a experiência. O processo de reserva foi fácil e rápido, e o atendimento da equipe da Car Rentals foi excepcional. O veículo que aluguei estava em ótimo estado e proporcionou uma viagem confortável e segura. Recomendo a Car Rentals a todos que procuram um serviço confiável e de qualidade. Com certeza, voltarei a alugar com vocês no futuro. Muito obrigada!
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer className="footerCard">
                                    <img src={Pic1} />

                                    <div className="mt-1">
                                        <h5>Sofia Santos</h5>
                                        <p className="text-muted">São Paulo, Brasil</p>
                                    </div>

                                </Card.Footer>
                            </Card>
                            <Card className="mx-2 cardBody" data-aos="fade-down" data-aos-duration="1000">
                                <Card.Body>
                                    <Card.Text className="text-av">
                                        Minha experiência com a Car Rentals foi incrível! O processo de aluguel do carro foi muito prático e eficiente. O veículo estava em perfeitas condições e me proporcionou uma viagem tranquila e confortável. Além disso, o atendimento da equipe foi excepcional, sempre prestativos e amigáveis. Recomendo a Car Rentals a todos que buscam um serviço de aluguel de carros de qualidade. Parabéns pelo excelente trabalho!
                                    </Card.Text>


                                </Card.Body>

                                <Card.Footer className="footerCard">
                                    <img src={Pic2} />

                                    <div className="mt-1">
                                        <h5>Ethan Silva</h5>
                                        <p className="text-muted">São Paulo, Brasil</p>
                                    </div>

                                </Card.Footer>
                            </Card>


                            <Card className="mx-2 cardBody" data-aos="fade-down" data-aos-duration="1200">
                                <Card.Body>
                                    <Card.Text className="text-av">
                                        Gostei muito dos serviços da Car Rentals. O atendimento foi excelente e o processo de aluguel do carro foi rápido e simples. O veículo estava em ótimas condições e pude desfrutar de uma viagem confortável e segura. Recomendo a Car Rentals a todos que precisam de um serviço confiável de aluguel de carros. Obrigada pela experiência!.
                                    </Card.Text>

                                </Card.Body>

                                <Card.Footer className="footerCard">
                                    <img src={Pic3} />

                                    <div className="mt-1">
                                        <h5>Meera Santos</h5>
                                        <p className="text-muted">Belém, Brasil</p>
                                    </div>

                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Row>
                </Container>
            </div>

            <Container className="sec5">


                <h5>FAQ</h5>
                <h1>Duvidas frequentes</h1>
                <p className="text-center mb-5">Perguntas frequentes sobre o processo de reserva de aluguel de carros em nosso site: respostas para dúvidas e dúvidas comuns.</p>


                <div className="duvida mb-5">
                    <h4>1. Quais são os documentos necessários para alugar um carro?</h4>
                    <p>Para alugar um carro, geralmente é necessário apresentar uma carteira de motorista válida, emitida pelo país de origem. Além disso, pode ser solicitado um documento de identificação com foto e um cartão de crédito válido no nome do locatário.</p>
                </div>

                <div className="duvida mb-5">
                    <h4>2. Qual é a idade mínima para alugar um carro?</h4>
                    <p> A idade mínima para alugar um carro pode variar de acordo com a empresa de aluguel e o país em que você está. Geralmente, a idade mínima é de 21 anos, mas algumas empresas podem exigir que o locatário tenha pelo menos 25 anos. É importante verificar os requisitos específicos de idade com a empresa de aluguel antes de fazer a reserva.</p>
                </div>

                <div className="duvida">
                    <h4>3. É possível adicionar um motorista adicional ao contrato de aluguel?</h4>
                    <p>Sim, muitas empresas de aluguel de carros permitem adicionar um motorista adicional ao contrato, desde que atenda aos requisitos de idade e possua uma carteira de motorista válida. No entanto, pode haver uma taxa adicional para adicionar um motorista extra. É importante informar a empresa de aluguel sobre a intenção de adicionar um motorista adicional no momento da reserva ou no momento da retirada do veículo.</p>
                </div>
            </Container>

            <div className="sec6">

                <Container>
                    <div className="textApp">

                        <h1>Transforme sua experiência de aluguel de carros!</h1>
                        <h5>Baixe agora nosso app e tenha o controle nas suas mãos.</h5>

                        <div className="BtnDownload">

                            <a href="#"><img src={BtnPlay} className="mt-3" alt="" /></a>
                            <a href="#"><img src={BtnApple} className="mt-3" alt="" /></a>

                        </div>

                    </div>



                </Container>

            </div>

        </section>
    );
}

export default Home;