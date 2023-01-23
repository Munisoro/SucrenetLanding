import React from "react"
import { Link } from "react-router-dom";

const ErrorFound = () => (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className="mb-4">Pagina no encontrada</h1>
                    <p className="mb-4">¡Lo sentimos, la página que has buscado no existe en nuestro sitio web! ¿Quizás ir a nuestra página de inicio o intentar usar una búsqueda?</p>
                    <Link to='/' className="btn btn-primary py-3 px-5">Regresar al inicio</Link>
                </div>
            </div>
        </div>
    </div>
)

export default ErrorFound;