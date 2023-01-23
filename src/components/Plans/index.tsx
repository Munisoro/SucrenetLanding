import React, { FC, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Col, Nav, Row, Tab} from 'react-bootstrap';
import $ from 'jquery';
import { Plan } from "data";

interface PlansProps {
    planes: Plan[]
}

const myButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (<button {...props}></button>);

const Plans: FC<PlansProps> = ({ planes }) => {
    const ele = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ele.current) return;
        console.log('uwu');

        $(ele.current).fadeIn(300);
    }, []);

    return (
        <Tab.Container defaultActiveKey={planes[0].id}>
            <Row ref={ele} className="g-4" style={{display: 'none'}}>
                <Col lg='4'>
                    <Nav variant="pills" className="d-flex justify-content-between w-100 h-100 me-4">
                        {planes.map(({ id, title }) => (
                            <Nav.Link key={id} as={myButton} eventKey={id} className="w-100 d-flex align-items-center text-start border p-4 mb-4">
                                <h5 className="m-0">
                                    <FontAwesomeIcon icon={faBars} className="text-primary me-3" />
                                    {title}
                                </h5>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Col>

                <Col lg='8'>
                    <Tab.Content className='w-100'>
                        {planes.map(({ id, header, content, img, features }) => (
                            <Tab.Pane key={id} eventKey={id} className='fade'>
                                <Row className="g-4">
                                    <Col md='6' style={{ minHeight: '350px' }} >
                                        <div className="position-relative h-100">
                                            <img className="position-absolute rounded w-100 h-100" src={`img/${img}`}
                                                style={{ objectFit: 'cover' }} alt="owo" />
                                        </div>
                                    </Col>

                                    <Col md='6'>
                                        <h3 className="mb-4">{header}</h3>
                                        <p className="mb-4">{content}</p>
                                        {features.map((feature, id) => (
                                            <p key={`${id}-${feature}`}><i className="fa fa-check text-primary me-3"></i>{feature}</p>
                                        ))}

                                        <a href="localhost" className="btn btn-primary py-3 px-5 mt-3">Pidelo ya!</a>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};


export default Plans;