import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faUsers, faPhone } from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <Container fluid='xxl' className='py-5'>
            <Container>
                <Row className="g-4 align-items-end mb-4">
                    <Col lg='6' className='wow fadeInUp' data-wow-delay='0.1s'>
                        <img className="img-fluid rounded" src="img/about.jpg" alt="uwu" />
                    </Col>
                    <Col lg='6'>
                        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Nosotros</p>
                        <h1 className="display-5 mb-4">¿Quiénes Somos?</h1>
                        <p className="mb-4" style={{ textAlign: 'justify' }}>
                            Somos una empresa que tiene como objetivo principal prestar servicios de acceso
                            a Internet, transporte y explotación de redes de Telecomunicaciones, contribuyendo al
                            crecimiento tecnológico del estado y logrando el acceso al Internet bajo premisas de
                            calidad y tarifas equitativas.
                        </p>

                        <p className="mb-4" style={{ textAlign: 'justify' }}>
                            En Sucrenet apostamos por el mejoramiento continuo de nuestro equipo humano
                            y plataformas tecnológicas y ayudamos a nuestros clientes a alcanzar una
                            significativa mejora en su eficiencia a través del uso de nuestra infraestructura
                            de telecomunicaciones.
                        </p>
                        <div className="border rounded p-4">
                            <Tabs defaultActiveKey="mission" className="mb-3" >
                                <Tab eventKey="mission" title="Misión" >
                                    <p style={{ textAlign: 'justify' }}>Nuestra misión es prestar servicios de telecomunicaciones de una forma
                                        dinámica e integral, aportando responsabilidad, integridad, alto potencial humano y larga
                                        experiencia en este sector, contribuyendo así al crecimiento tecnológico del estado y
                                        logrando el acceso al internet bajo premisas de calidad y tarifas equitativas.</p>
                                </Tab>
                                <Tab eventKey="vision" title="Visión">
                                    <p style={{ textAlign: 'justify' }}>Nuestra visión es resarcir el efecto de la ausencia de conectividad de los servicios
                                        de internet en el estado Sucre, donde se establecerá la operatividad para favorecer a
                                        nuestros abonados y ofrecerles un servicio de calidad.</p>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>

                <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
                    <Row className="g-4">

                        <Col lg='4' className="wow fadeIn" data-wow-delay="0.3s">
                            <div className="h-100">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <FontAwesomeIcon icon={faUsers} className="text-white" />
                                    </div>
                                    <div className="ps-3">
                                        <h4>Equipo dedicado</h4>
                                        <span>Descubrimos, entendemos y consolidamos las necesidades de nuestros clientes.</span>
                                    </div>
                                    <div className="border-end d-none d-lg-block"></div>
                                </div>
                                <div className="border-bottom mt-4 d-block d-lg-none"></div>
                            </div>
                        </Col>

                        <Col lg='4' className="wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <FontAwesomeIcon icon={faRocket} className="text-white" />
                                    </div>
                                    <div className="ps-3">
                                        <h4>Hiper Velocidad</h4>
                                        <span>Tiempos instantaneos de respuesta instantaneos</span>
                                    </div>
                                    <div className="border-end d-none d-lg-block"></div>
                                </div>
                                <div className="ms-1 border-bottom mt-4 d-block d-lg-none"></div>
                            </div>
                        </Col>

                        <Col lg='4' className="wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <FontAwesomeIcon icon={faPhone} className="text-white" />
                                    </div>
                                    <div className="ps-3">
                                        <h4>Soporte 24/7</h4>
                                        <span>Siempre dispuestos a atenderle</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    );
}

export default About;

/*
<div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
    <Row className="g-4">
        <Col lg='4' className="wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100">
                <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                        <FontAwesomeIcon icon={faRocket} className="text-white" />
                    </div>
                    <div className="ps-3">
                        <h4>Hiper Velocidad</h4>
                        <span>Tiempos instantaneos de respuesta</span>
                    </div>
                    <div className="border-end d-none d-lg-block"></div>
                </div>
                <div className="ms-1 border-bottom mt-4 d-block d-lg-none"></div>
            </div>
        </Col>
        <Col lg='4' className="wow fadeIn" data-wow-delay="0.3s">
            <div className="h-100">
                <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                        <FontAwesomeIcon icon={faUsers} className="text-white" />
                    </div>
                    <div className="ps-3">
                        <h4>Equipo dedicado</h4>
                        <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                    </div>
                    <div className="border-end d-none d-lg-block"></div>
                </div>
                <div className="border-bottom mt-4 d-block d-lg-none"></div>
            </div>
        </Col>
        <Col lg='4' className="wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100">
                <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                        <FontAwesomeIcon icon={faPhone} className="text-white" />
                    </div>
                    <div className="ps-3">
                        <h4>Disponible 24/7</h4>
                        <span>Siempre Dispuestos a atenderle</span>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
</div>
*/