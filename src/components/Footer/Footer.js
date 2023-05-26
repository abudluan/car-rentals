import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.scss';

const Footer = () => {
    return (
        <footer id="footer">
            <Container >

                <Row className="pt-4">

                    <Col>
                        1 of 3
                    </Col>

                    <Col>
                        2 of 3
                    </Col>

                    <Col>
                        3 of 3
                    </Col>

                    <Col>
                        3 of 3
                    </Col>

                </Row>

            </Container>
        </footer>
    );
};

export default Footer;