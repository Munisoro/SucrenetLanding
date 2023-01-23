import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Container } from "react-bootstrap";

interface HeaderProps {
    title: string
}

function Header({ title }: HeaderProps) {

    return (
        <Container fluid className='page-header mb-5 wow fadeIn' data-wow-delay='0.1s'>
            <Container>
            <h1 className="display-3 mb-4 animated slideInDown">{title}</h1>
                <Breadcrumb className="animated slideInDow">
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: '/'}} >Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item active>{title}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </Container>
    );
}

export default Header;