import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

function Team() {
    return (
        <Container fluid='xxl' className="py-5">
            <Container>
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                    <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Team</p>
                    <h1 className="display-5 mb-5">Exclusive Team</h1>
                </div>
                <Row className="g-4">
                    <Col lg='4' md='6' className="wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <img className="img-fluid rounded" src="img/team-1.jpg" alt="" />
                            <div className="team-text">
                                <h4 className="mb-0">Kate Winslet</h4>
                                <div className="team-social d-flex">
                                    <a className="btn btn-square rounded-circle mx-1" href="http://localhost">
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                    </a>
                                    <a className="btn btn-square rounded-circle mx-1" href="http://localhost">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </a>
                                    <a className="btn btn-square rounded-circle mx-1" href="http://localhost">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' md='6' className="wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                            <img className="img-fluid rounded" src="img/team-2.jpg" alt="" />
                            <div className="team-text">
                                <h4 className="mb-0">Jac Jacson</h4>
                                <div className="team-social d-flex">
                                    <a className="btn btn-square rounded-circle mx-1" href="http://localhost">
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                    </a>
                                    <a className="btn btn-square rounded-circle mx-1" href="http://localhost">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </a>
                                    <a className="btn btn-square rounded-circle mx-1" href="http://localhost">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' md='6' className="wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item">
                            <img className="img-fluid rounded" src="img/team-3.jpg" alt="" />
                            <div className="team-text">
                                <h4 className="mb-0">Doris Jordan</h4>
                                <div className="team-social d-flex">
                                    <a className="btn btn-square rounded-circle mx-1" href="http://localhost">
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                    </a>
                                    <a className="btn btn-square rounded-circle mx-1" href="http://localhost">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </a>
                                    <a className="btn btn-square rounded-circle mx-1" href="http://localhost">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Team;