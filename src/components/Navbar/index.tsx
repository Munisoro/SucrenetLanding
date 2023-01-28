import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Navbar as NavbarReact, Nav } from "react-bootstrap";
import { facebook, twitter } from "data/social";
import { links } from "data/links";

function Navbar() {

    const { pathname } = useLocation();

    const fixedTop = useRef<HTMLDivElement>(null);
    const image = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!fixedTop.current) return;

        const ele = fixedTop.current;

        if (!image.current) return;

        const sucrenetImg = image.current;
        
        if (window.innerWidth < 992) {
            sucrenetImg.style.width = '150px';
            if (ele.classList.contains('fixed-top')) ele.classList.remove('fixed-top');
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 992) {
                sucrenetImg.style.width = '150px';
            if (ele.classList.contains('fixed-top')) ele.classList.remove('fixed-top');
            } else {
                sucrenetImg.style.width = '290px';
                if (!ele.classList.contains('fixed-top')) ele.classList.add('fixed-top');
            }            
        })

        window.addEventListener('scroll', () => {
            if (window.scrollY > 45) {
                if (!ele.classList.contains("bg-white") || !ele.classList.contains("shadow")) {
                    ele.classList.add("bg-white", "shadow");
                }
            } else {
                if (ele.classList.contains("bg-white") && ele.classList.contains("shadow")) {
                    ele.classList.remove("bg-white", "shadow");
                }
            }
        });
    }, []);
    
    return (
        <Container fluid className="fixed-top px-0 wow fadeIn" data-wow-delay="0.1s" ref={fixedTop}>
            

            <NavbarReact expand='lg' className="py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <NavbarReact.Brand as={Link} to='/' className="ms-4 ms-lg-0" >
                    <img ref={image} src='img/logo.png' alt="logo" className="m-0" style={{width: '290px'}} />
                </NavbarReact.Brand>

                <NavbarReact.Toggle className="m-4">
                    <span className="navbar-toggler-icon"></span>
                </NavbarReact.Toggle>

                <NavbarReact.Collapse>
                    <Nav className="ms-auto p-4 p-lg-0">
                        {links.map((enlace,i) => (
                            <Nav.Link key={i.toString()} as={Link} to={enlace.link} className={pathname === enlace.link ? 'active' : ''}>{enlace.name}</Nav.Link>
                        ))}
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