import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import WhatsappBtn from "components/WhatsappBtn";
import { paymentData } from "data";
import Layout from "components/Layout";

const items = [
    'Captura de pantalla del pago',
    'N° de Cédula de identidad o RIF del titular del contrato',
    'N° de Cédula de identidad o RIF del titular quien realizó la transferencia',
    'N° de Referencia de pago'
];

function Pagos() {
    const [price, setPrice] = useState('Cargando...');
    useEffect(() => {
        fetch('/getpriceofdolar.php').then(resp => resp.text())
            .then(text => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');

                let precio = doc.querySelector('#dolar .centrado')?.textContent

                if (precio) {

                    precio = `1$ = ${precio.trim().slice(0, 5)} Bs`
                } else {
                    precio = 'A la tasa oficial BCV del día';
                }

                setPrice(precio);
            });
    }, []);

    return (
        <Layout>
            <Header title='Pagos' />
            <Container fluid>
                <Container>
                    <div className="mx-auto" style={{ maxWidth: '600px' }}>
                        <div className="text-center wow fadeInUp" plan-wow-delay="0.1s">
                            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Pagos</p>
                            <h4>Banco Central de Venezuela</h4>

                            <img src="img/bcv.png" width='150px' alt="Banco Central de Venezuela" />
                            <div className="my-2">{price}</div>

                        </div>

                        <div className="wow fadeInUp" plan-wow-delay="0.3s">
                            <h4 className="text-center my-5">Ponte al día con nuestras opciones de pago:</h4>
                            <Card>
                                <ListGroup>
                                    {paymentData.map(({ name, img, imgClass, account, Value, rif }) => (
                                        <ListGroup.Item key={name}>
                                            <Row>
                                                <Col sm={img ? '9' : '12'}>
                                                    <h4 className="text-primary">{name}:</h4> {!Value && '(Solicitar información)'}
                                                    {rif && (<p>{rif}</p>)}
                                                    {account && (<p>{account}</p>)}
                                                    {Value && (typeof Value === 'string' ? Value : <Value info/>)}
                                                </Col>
                                                {img && (
                                                    <Col sm='3'>
                                                        <div>
                                                            <img src={`img/${img}`} alt={name} className={`w-100 ${imgClass || ''}`} />
                                                        </div>
                                                    </Col>
                                                )}
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
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
                            <div className="bg-white border rounded p-4 p-sm-5">
                                <div className="text-center mx-auto" style={{ maxWidth: '600px' }}>
                                    <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                                        ¿Cómo reporto el pago?
                                    </p>
                                </div>

                                <Card className="mt-4">
                                    <Card.Header>Envianos al:</Card.Header>
                                    <Card.Body>
                                        <p>
                                            <span className="text-primary">Whatsapp: </span>
                                        </p>
                                        <p>
                                            <WhatsappBtn />
                                            <span className="ms-2" >o al correo: info@sucrenet.com.ve</span>
                                        </p>
                                    </Card.Body>
                                </Card>

                                <div className="text-center mx-auto my-4" style={{ maxWidth: '600px' }}>
                                    <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                                        La siguiente información:
                                    </p>
                                </div>

                                <Card>
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
        </Layout>
    );
}

export default Pagos;