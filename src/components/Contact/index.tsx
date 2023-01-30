import React, { FC, useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';

const Cargando: FC = () => (
    <Row>
        <Col xs='6'>Enviando..</Col>
        <Col xs={{ offset: 3, span: 3 }}>
            <div className="mx-auto"><Spinner /></div>
        </Col>
    </Row>
)


const Formulario: FC = () => {

    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        //setIsSubmit(true);
        const form = e.currentTarget;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        const text = form.querySelector('#name') as HTMLInputElement;
        const email = form.querySelector('#email') as HTMLInputElement;
        const telf = form.querySelector('#telf') as HTMLInputElement;
        const msg = form.querySelector('#msg') as HTMLTextAreaElement;

        const createFormText = (ele: Element, id: string) => {
            const formText = document.createElement('span');
            formText.id = id;

            ele.parentElement?.parentElement?.append(formText);
            return formText;
        }

        [text, email, telf, msg].forEach(ele => {
            const idFT = `${ele.id}FT`;
            const ft = form.querySelector(`#${idFT}`) || createFormText(ele, idFT);
            
            if (ft) {
                ft.textContent = '';
                if (ft.classList.contains('text-danger')) ft.classList.remove('text-danger');
            }
            
            if (ele.classList.contains('is-invalid')) ele.classList.remove('is-invalid');

            if (!ele.value) {
                ele.classList.add('is-invalid');

                ft.textContent = 'Este campo esta vacío.';

                ft.classList.add('text-danger');
            }
        });

        if (email.value && !email.value.match(emailRegex)) {
            (form.querySelector('#emailFT') as HTMLSpanElement).classList.add('text-danger');
            (form.querySelector('#emailFT') as HTMLSpanElement).textContent = 'El correo es inválido';

            email.classList.add('is-invalid');
            email.focus();
        }

    };

    return (
        <Form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <Row className="g-3">
                <Col md='6'>
                    <Form.Group controlId="name" className="form-floating">
                        <Form.Control type="text" placeholder="Nombre Completo" disabled={isSubmit} required />
                        <Form.Label>Nombre Completo</Form.Label>
                    </Form.Group>
                </Col>
                <Col md='6'>
                    <Form.Group controlId="email" className="form-floating">
                        <Form.Control type="email" placeholder="Correo" disabled={isSubmit} required />
                        <Form.Label>Correo</Form.Label>
                    </Form.Group>
                </Col>
                <Col md="12">
                    <Form.Group controlId="telf" className="form-floating">
                        <Form.Control type="text" placeholder="Teléfono" disabled={isSubmit} required />
                        <Form.Label>Teléfono</Form.Label>
                    </Form.Group>
                </Col>
                <Col md="12">
                    <Form.Group controlId="msg" className="form-floating">
                        <Form.Control as='textarea' placeholder="Deje su mensaje aquí" style={{ height: '100px' }} disabled={isSubmit} required />
                        <Form.Label>Mensaje</Form.Label>
                    </Form.Group>
                </Col>
                <Col md="12">
                    <Button type="submit" variant="primary" className="py-3 px-5 text-white" disabled={isSubmit}>
                        {isSubmit ? (<Cargando />) : 'Enviar Mensaje'}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

function Contact() {
    return (
        <Container fluid='xxl' className="pb-5">
            <Container>
                <Row className='g-5'>
                    <Col lg='6' className='wow fadeIn' data-wow-delay='0.1s'>
                        <p className='d-inline-block border rounded text-primary fw-semi-bold py-1 px-3'>Contáctenos</p>
                        <h3 className='display-5 mb-4'>Si tiene alguna pregunta, por favor contáctenos</h3>
                        <p className="form-text">Atencion al cliente: 8:30am – 05:00pm</p>
                        <Formulario />
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

