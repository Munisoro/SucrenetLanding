import React, { useEffect, useRef } from "react";

function Spinner () {

    const spiner = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (spiner.current) {
            spiner.current.classList.remove('show');
        }
    }, []);

    return (
        <div 
            id="spinner"
            className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
            ref={spiner}
        >
            <div className="spinner-border text-primary" role="status" style={{width: '3rem', height: '3rem'}}></div>
        </div>
    );
}

export default Spinner;