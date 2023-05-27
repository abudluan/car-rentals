import React from "react";
import './Sobre.scss';
import { Container } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Sec2Img from '../img/Sobre/sec2-img.avif';

const Sobre = () => {

    AOS.init();


    return (
        <section id="sobre">

            

            <h1>Conheça um pouco da nossa história</h1>
            <h3>Uma jornada de paixão pelo automobilismo e excelência no serviço.</h3>

            <div className="sec1">
            </div>

            <div className="sec2">
                <Container>

                    <h5>
                        Nossa empresa foi fundada há mais de duas décadas por um grupo de entusiastas de automóveis. Movidos pela paixão por veículos e pela visão de oferecer uma experiência excepcional aos nossos clientes, começamos nossa jornada como uma pequena locadora local.
                        <br/>
                        <br/>
                        <img src={Sec2Img} className="img-fluid" alt="" />
                        Com o tempo, expandimos nossos serviços, aprimoramos nossa frota e nos dedicamos a fornecer um atendimento de alta qualidade. Acreditamos que um bom carro pode fazer toda a diferença em uma viagem, seja a trabalho ou lazer, e nos esforçamos para oferecer opções que atendam a diversos gostos e necessidades.
                        <br/>
                        <br/>
                        Nossa filosofia sempre foi baseada em três pilares fundamentais: qualidade, confiabilidade e excelência no atendimento. Cada veículo em nossa frota passa por rigorosas inspeções e manutenções para garantir que você tenha uma experiência segura e confortável em suas viagens. Além disso, nossa equipe está pronta para ajudar e fornecer suporte em todas as etapas, desde a escolha do carro até o término do aluguel.
                        <br/>
                        <br/>
                        Com o passar dos anos, expandimos nossa presença para diversas cidades e consolidamos parcerias com importantes empresas do setor. Isso nos permitiu oferecer uma ampla variedade de modelos e acessórios, para que você possa encontrar o carro perfeito que se encaixe em suas necessidades e estilo.
                        <br/>
                        <br/>
                        Agradecemos a confiança e preferência de nossos clientes ao longo dessa jornada. Nosso compromisso é continuar evoluindo e proporcionando experiências memoráveis a cada pessoa que escolhe alugar um carro conosco.
                        <br/>
                        <br/>
                        Seja para uma viagem de negócios, um passeio em família ou uma aventura descontraída, estamos aqui para ajudar a tornar seus planos realidade. Esperamos que você desfrute da liberdade e flexibilidade que um carro alugado pode proporcionar.
                        <br/>
                        <br/>
                        Obrigado por fazer parte da nossa história. Estamos ansiosos para servi-lo e tornar suas viagens ainda mais especiais.

                        
                    </h5>

                </Container>

            </div>

        </section>
    )

}

export default Sobre;