import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCheck, faUsersCog, faAward } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { Col, Container, Row } from "react-bootstrap";

function Facts() {
    return (
        <Container fluid className="facts my-5 py-5">
            <Container className='py-5'>
                <Row className="g-5">
                    <Col sm='6' lg='3' className="text-center wow fadeIn" data-wow-delay="0.1s">
                        <FontAwesomeIcon icon={faUsers} size="3x" className="text-white mb-3" />
                        <h2>
                            <CountUp className="display-4 text-white" end={1234} delay={3} duration={2} />
                        </h2>
                        <span className="fs-5 text-white">Happy Clients</span>
                        <hr className="bg-white w-25 mx-auto mb-0" />
                    </Col>
                    <Col sm='6' lg='3' className="text-center wow fadeIn" data-wow-delay="0.3s">
                        <FontAwesomeIcon icon={faCheck} size="3x" className="text-white mb-3" />
                        <h2>
                            <CountUp className="display-4 text-white" end={1234} delay={3} duration={2} />
                        </h2>
                        <span className="fs-5 text-white">Projects Completed</span>
                        <hr className="bg-white w-25 mx-auto mb-0" />
                    </Col>
                    <Col sm='6' lg='3' className="text-center wow fadeIn" data-wow-delay="0.5s">
                        <FontAwesomeIcon icon={faUsersCog} size="3x" className="text-white mb-3" />
                        <h2>
                            <CountUp className="display-4 text-white" end={1234} delay={3} duration={2} />
                        </h2>
                        <span className="fs-5 text-white">Dedicated Staff</span>
                        <hr className="bg-white w-25 mx-auto mb-0" />
                    </Col>
                    <Col sm='6' lg='3' className="text-center wow fadeIn" data-wow-delay="0.7s">
                        <FontAwesomeIcon icon={faAward} size="3x" className="text-white mb-3" />
                        <h2>
                            <CountUp className="display-4 text-white" end={1234} delay={3} duration={2} />
                        </h2>
                        <span className="fs-5 text-white">Awards Achieved</span>
                        <hr className="bg-white w-25 mx-auto mb-0" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Facts;