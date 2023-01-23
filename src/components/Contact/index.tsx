import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid='xxl' className='py-5'>
            <Container>
                <Row className='g-5'>
                    <Col lg='6' className='wow fadeIn' data-wow-delay='0.1s'>
                        <p className='d-inline-block border rounded text-primary fw-semi-bold py-1 px-3'>Contáctenos</p>
                        <h1 className='display-5 mb-4'>Si tiene alguna pregunta, por favor contáctenos</h1>
                        <Form>
                            <Row className="g-3">
                                <Col md='6'>
                                    <Form.Group controlId="name" className="form-floating">
                                        <Form.Control type="text" placeholder="Nombre Completo" />
                                        <Form.Label>Nombre Completo</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md='6'>
                                    <Form.Group controlId="email" className="form-floating">
                                        <Form.Control type="email" placeholder="Correo" />
                                        <Form.Label>Correo</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md="12">
                                    <Form.Group controlId="subject" className="form-floating">
                                        <Form.Control type="text" placeholder="Asunto" />
                                        <Form.Label>Asunto</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md="12">
                                    <Form.Group controlId="message" className="form-floating">
                                        <Form.Control as='textarea' placeholder="Deje su mensaje aquí" style={{ height: '100px' }} />
                                        <Form.Label>Mensaje</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md="12">
                                    <Button type="submit" variant="primary" className="py-3 px-5 text-white">Enviar Mensaje</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg='6' className="wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '450px' }}>
                        <p className='d-inline-block border rounded text-primary fw-semi-bold py-1 px-3'>Nuestra ubicación</p>
                        <div className="position-relative rounded overflow-hidden h-100">
                            <iframe
                                title="Ubicacion"
                                className="position-relative w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4471839413295!2d-64.17402167930366!3d10.465369990169284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3271b3cc34e4b1%3A0xd359643527d80481!2sSucreNet!5e0!3m2!1sen!2sbd!4v1673976020423!5m2!1sen!2sbd"
                                style={{ minHeight: '450px', border: 0 }}
                                allowFullScreen
                                aria-hidden="false"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}


export default Contact;

