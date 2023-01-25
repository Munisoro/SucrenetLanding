import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Navbar as NavbarReact, Nav } from "react-bootstrap";
import { facebook, twitter } from "data/social";

function Navbar() {

    const { pathname } = useLocation();

    const fixedTop = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!fixedTop.current) return;

        const ele = fixedTop.current;
        
        if (window.innerWidth < 992) {
            if (ele.classList.contains('fixed-top')) ele.classList.remove('fixed-top');
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 992) {
                if (ele.classList.contains('fixed-top')) ele.classList.remove('fixed-top');
            } else {
                if (!ele.classList.contains('fixed-top')) ele.classList.add('fixed-top');
            }            
        })

        window.addEventListener('scroll', () => {
            if (window.scrollY > 45) {
                if (!ele.classList.contains("bg-white") || !ele.classList.contains("shadow")) {
                    ele.classList.add("bg-white", "shadow");
                    if (window.innerWidth >= 992) ele.style.top = "-45px";
                }
            } else {
                if (ele.classList.contains("bg-white") && ele.classList.contains("shadow")) {
                    ele.classList.remove("bg-white", "shadow");
                    if (window.innerWidth >= 992) ele.style.top = "0px";
                }
            }
        });
    }, []);
    
    return (
        <Container fluid className="fixed-top px-0 wow fadeIn" data-wow-delay="0.1s" ref={fixedTop}>
            <Row className='top-bar gx-0 align-items-center d-none d-lg-flex'>
                <Col lg='6' className='px-5 text-start'>
                    <small><FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />Edificio Adis Local N°2. Cumaná, estado Sucre.</small>
                    <small className="ms-4"><FontAwesomeIcon icon={faClock} className="text-primary me-2" />8:30am – 05:00pm</small>
                </Col>
                <Col lg='6' className='px-5 text-end'>
                    <small><FontAwesomeIcon icon={faEnvelope} className="text-primary me-2" />info@sucrenet.com.ve</small>
                    <small className="ms-4"><FontAwesomeIcon icon={faPhone} className="text-primary me-2" />+012 345 6789</small>
                </Col>
            </Row>

            <NavbarReact expand='lg' className="py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <NavbarReact.Brand as={Link} to='/' className="ms-4 ms-lg-0" >
                    <img src='img/logo.png' alt="logo" className=" display-5 m-0" style={{width: '150px'}} />
                </NavbarReact.Brand>

                <NavbarReact.Toggle className="m-4">
                    <span className="navbar-toggler-icon"></span>
                </NavbarReact.Toggle>

                <NavbarReact.Collapse>
                    <Nav className="ms-auto p-4 p-lg-0">
                        <Nav.Link as={Link} to='/' className={pathname === '/' ? 'active' : ''} >Inicio</Nav.Link>
                        <Nav.Link as={Link} to='/nosotros' className={pathname === '/nosotros' ? 'active' : ''} >Nosotros</Nav.Link>
                        <Nav.Link as={Link} to='/planes' className={pathname === '/planes' ? 'active' : ''} >Planes</Nav.Link>
                        <Nav.Link as={Link} to='/contactanos' className={pathname === '/contactanos' ? 'active' : ''} >Contáctenos</Nav.Link>
                    </Nav>
                    <div className="d-none d-lg-flex ms-2">
                        <a className="btn btn-light btn-sm-square rounded-circle ms-3" href={facebook}>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} className="text-primary" />
                        </a>
                        <a className="btn btn-light btn-sm-square rounded-circle ms-3" href={twitter}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} className="text-primary" />
                        </a>
                    </div>
                </NavbarReact.Collapse>
            </NavbarReact>

            
        </Container>
    );
}

export default Navbar;