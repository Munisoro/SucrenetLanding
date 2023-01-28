import React, { FC } from "react";

export interface WhatsappBtnProps {
    info?: boolean
}

const WhatsappBtn: FC<WhatsappBtnProps> = ({ info }) => (
    <>
        {info && (<p>Más Informacion al Whatsapp: </p>)}
        <a href="https://wa.me/message/A5AF5KPK6IHWC1" >
            <img className="me-2" style={{ width: '50px', height: '50px' }} src="img/whatsapp.png" alt="Whatsapp" />
            {info ? (<span>Click Aquí</span>) : (<span >+58 412-574763</span>)}
        </a>
    </>
);

export default WhatsappBtn;