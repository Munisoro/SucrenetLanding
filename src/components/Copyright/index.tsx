import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Copyright() {
    return (
        <Container fluid className="copyright py-4">
            <Container>
                <Row>
                    <Col md='6' className="text-center text-md-start mb-3 mb-mb-0">
                        &copy; <Link to='/' className="border-bottom">Sucrenet</Link>. Todos los derechos reservados. 2022 - RIF J -50135899-0
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Copyright;