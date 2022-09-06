import React from 'react'
// import fondo2 from '../assets/images/maqueta/image 2.png';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <article className="institucional__bg-start bg-fullpage foto" aria-label="Presentación de Institucional de Tensolite">
                <img src={"fondo2"} alt="Oficina tecnica" />
                <div className="card-info">
                    <div className="cuadrado-azul"></div>
                    <h1 className='parrafo-tecnico'>
                        Contamos con una <span className='oficina'>oficina técnica</span>, disponible para atender las necesidades de tus proyectos con nosotros.
                    </h1>
                    <button className='settings_button-pleno bg-p-secondary center'><Link to="/instalacion-productos">contactar</Link></button>
                </div>
            </article>
        </>
    )
}

export default Banner