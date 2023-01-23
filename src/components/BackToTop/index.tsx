import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import { Button } from "react-bootstrap";

const backTop = () => {
    window.scrollTo(0,0);
}

function BackToTop(){
    const ele = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!ele.current) return;

        const $ele = $(ele.current);
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                $ele.fadeIn('slow');
            } else {
                $ele.fadeOut('slow');
            }
        });
    }, []);

    return (
        <Button
            ref={ele}
            variant="primary"
            size="lg"
            className="btn-lg-square rounded-circle back-to-top"
            onClick={backTop}
            style={{display: 'none'}}
        >
            <i className="bi bi-arrow-up"></i>
        </Button>
    );
}

export default BackToTop;