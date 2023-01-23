import React, { FC, MouseEventHandler, useRef } from "react";
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Button } from 'react-bootstrap';

interface SelectPlansProps {
    onDomestic: MouseEventHandler,
    onBusiness: MouseEventHandler
}


const SelectPlans: FC<SelectPlansProps> = ({ onDomestic, onBusiness }) => {

    const ele = useRef<HTMLDivElement>(null);

    const viewPlanes: MouseEventHandler = (e) => {
        if (!ele.current) return;

        const id = e.currentTarget.id;

        $(ele.current).fadeOut(300, () => {
            switch (id) {
                case 'domestic':
                    onDomestic(e);
                    break;
                case 'business':
                    onBusiness(e);
                    break;
            }
        })
    }

    return (
        <Row ref={ele} className='wow fadeInUp' plan-wow-delay="0.3s" >
            <Col lg='6'>
                <Card className="mx-auto text-center" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="mb-4">
                            <FontAwesomeIcon icon={faLaptopHouse} size="lg" style={{ height: '140px' }} />
                        </Card.Title>
                        <Card.Title>Planes Domesticos</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button id="domestic" variant="primary" onClick={viewPlanes}>Ver Planes</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col lg='6'>
                <Card className="mx-auto text-center" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="mb-4">
                            <FontAwesomeIcon icon={faBuilding} size="lg" style={{ height: '140px' }} />
                        </Card.Title>
                        <Card.Title>Planes Empresariales</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button id='business' variant="primary" onClick={viewPlanes}>Ver Planes</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default SelectPlans;