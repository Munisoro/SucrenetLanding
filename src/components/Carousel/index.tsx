import React from "react";
import { Carousel as CarouselReact, Col, Container, Row } from "react-bootstrap";

function Carousel() {

    return (
        <Container fluid className="p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <CarouselReact fade indicators={false}>
                <CarouselReact.Item>
                    <img className="w-100" src="img/carousel-1.png" alt="Image1" />
                    <CarouselReact.Caption>
                        <Container>
                            <Row className="justify-content-start">
                                <Col lg="8">
                                    <p
                                        className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                                        Bienvenido a Sucrenet</p>
                                    <h2 className="display-2 mb-4 animated slideInDown">
                                        Infraestructura tecnológica de alta calidad
                                    </h2>
                                </Col>
                            </Row>
                        </Container>
                    </CarouselReact.Caption>
                </CarouselReact.Item>

                <CarouselReact.Item>
                    <img className="w-100" src="img/carousel-2.png" alt="Image2" />
                    <CarouselReact.Caption>
                        <Container>
                            <Row>
                                <Col lg="7">
                                    <p
                                        className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                                        Bienvenido a Sucrenet</p>
                                    <h2 className="display-2 mb-4 animated slideInDown">Servicio confiable y seguro</h2>
                                </Col>
                            </Row>
                        </Container>
                    </CarouselReact.Caption>
                </CarouselReact.Item>

                <CarouselReact.Item>
                    <img className="w-100" src="img/carousel-3.png" alt="Image3" />
                    <CarouselReact.Caption>
                        <Container>
                            <Row>
                                <Col lg="7">
                                    <p
                                        className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                                        Bienvenido a Sucrenet</p>
                                    <h2 className="display-2 mb-4 animated slideInDown">Soporte técnico: 24 horas del dia</h2>
                                </Col>
                            </Row>
                        </Container>
                    </CarouselReact.Caption>
                </CarouselReact.Item>
            </CarouselReact>
        </Container>
    );
}

export default Carousel;