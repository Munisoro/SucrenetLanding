import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
/*
import { FC, useState, useEffect } from "react";
import {  faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';
import { Plan, domesticData, businessData } from '../../data/index';
import Plans from "components/Plans";
import SelectPlans from "components/SelectPlans";
import { useLocation } from 'react-router-dom';
*/

/*
interface Info {
    title: string,
    content: string
}

const infoDefault: Info = {
    title: 'Planes',
    content: 'Ofrecemos planes de la mas alta calidad'
};

const ServiceBackup: FC = () => {

    const [planes, setPlanes] = useState<Plan[]>([]);
    const [isActive, setIsActive] = useState(false);

    const [info, setInfo] = useState<Info>(infoDefault);

    const { hash } = useLocation();
    
    const selectDomestic = () => {
        setIsActive(true);

        setInfo({
            title: 'Planes Domesticos',
            content: 'Planes dedicados para los hogares'
        });

        setPlanes(domesticData);
    };

    const selectBusiness = () => {
        setIsActive(true);

        setInfo({
            title: 'Planes Empresariales',
            content: 'Planes dedicados para empresas'
        });

        setPlanes(businessData);
    };

    const returnSelect = () => {
        setIsActive(false);
        setInfo(infoDefault);
        setPlanes([]);
    }

    useEffect(() => {
        switch (hash) {
            case '#empresarial':
                selectBusiness();
                break;
            case '#domestico':
                selectDomestic();
                break;
        }
    }, [hash]);

    return (
        <Container fluid='xxl' className="service py-5">
            <Container>
                <div className="text-center mx-auto wow fadeInUp" plan-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    {isActive && (
                        <div className="d-inline-block">
                            <button
                                className="text-primary"
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    margin: 0,
                                    padding: 0,
                                }}
                                onClick={returnSelect}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} /> <span>Regresar</span>
                            </button>
                        </div>
                    )}
                    <p className=" d-inline-block border rounded text-primary fw-semi-bold py-1 px-3 mx-4">{info.title}</p>
                    <h1 className="display-5 mb-5">{info.content}</h1>
                </div>

                {!isActive && (<SelectPlans onDomestic={selectDomestic} onBusiness={selectBusiness} />)}

                {planes.length > 0 && (<Plans planes={planes} />)}
            </Container>
        </Container>
    );
}
*/

const Service: FC =  () => (
    <div className="container-xxl wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <FontAwesomeIcon icon={faToolbox}  className="display-1 text-primary"/>
                    <h1 className="mb-4">Pagina en construcción</h1>
                    <p className="mb-4">Estamos estableciendo las especificaciones de los planes.</p>
                </div>
            </div>
        </div>
    </div>
)

export default Service;