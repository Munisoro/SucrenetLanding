import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { facebook, twitter } from '../../data/social';
import { links } from "data/links";

function Footer() {

    return (
        <Container fluid className="bg-dark text-light footer mt-5 py-5 fadeIn" data-wow-delay='0.1s'>
            <Container className="py-5">

                <Row className="g-5">
                    <Col lg='6'>
                        <h4 className="text-white mb-4">Nuestra Oficina</h4>
                        <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />Calle Ayacucho cruce con Boyacá, Edificio Adis Local N°2. Cumaná, estado sucre.</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faPhone} className="me-3" />0412 574 7634</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="me-3" />info@sucrenet.com.ve</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light rounded-circle me-2" href={twitter}>
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-2" href={facebook}>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </a>
                        </div>
                    </Col>
                    <Col lg={{ span: 3, offset: 3 }}>
                        <div className="">
                            <h4 className="text-white mb-4">Enlaces</h4>
                            {links.map((enlace, i) => (
                                <Link key={i.toString()} to={enlace.link} className="btn btn-link">{enlace.name}</Link>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;