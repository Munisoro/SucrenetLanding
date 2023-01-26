import React from "react";
import Header from "../../components/Header";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const data = [
    ['Banco Banesco', '0134-0471-21-4711041228'],
];

const soporte = [
    ['Whatsapp', '04125747634'],
    ['Correo', 'info@sucrenet.com.ve'],
];

const items = [
    'Captura de pantalla del pago',
    'Cédula de identidad del titular del contrato',
    'Cédula de identidad del titular quien realizó la transferencia',
    'Referencia de pago'
];

//fetch('https://www.bcv.org.ve/tasas-informativas-sistema-bancario', {mode: 'no-cors', referrerPolicy: "no-referrer"}).then(owo => console.log(owo))
function Pagos() {
    return (
        <>
            <Header title='Pagos' />
            <Container fluid>
                <Container>
                    <div className="mx-auto" style={{ maxWidth: '600px' }}>
                        <div className="text-center wow fadeInUp" plan-wow-delay="0.1s">
                            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Pagos</p>
                            <h4>Banco Central de Venezuela</h4>

                            <img src="img/bcv.png" width='150px' alt="Banco Central de Venezuela" />
                            <div className="my-2">A la tasa oficial BCV del día</div>

                        </div>

                        <div className="wow fadeInUp" plan-wow-delay="0.3s">
                            <h4 className="text-center my-5">Ponte al día con nuestras opciones de pago:</h4>
                            <Card>
                                <ListGroup>
                                    <ListGroup.Item>
                                        {data.map(([a, b], i) => (
                                            <p key={i.toString()}><span className="text-primary">{a}</span>: {b}</p>
                                        ))}
                                    </ListGroup.Item>

                                    <ListGroup.Item>

                                        <p>Soporte:</p>
                                        {soporte.map(([a, b], i) => (
                                            <p key={i.toString()}><span className="text-primary">{a}</span>: {b}</p>
                                        ))}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Container>

            <Container fluid className="callback mt-5 py-5">
                <Container className="pt-5">
                    <Row className="justify-content-center">
                        <Col lg='7'>
                            <div className="bg-white border rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                                    <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                                        ¿Cómo reporto el pago?

                                    </p>
                                    <h4>Reporta al soporte la siguiente información:</h4>
                                </div>
                                <Card className="mt-4">
                                    <ListGroup>
                                        {items.map((item, i) => (
                                            <ListGroup.Item key={i.toString()}>
                                                <FontAwesomeIcon icon={faCheck} /> <span>{item}</span>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Pagos;