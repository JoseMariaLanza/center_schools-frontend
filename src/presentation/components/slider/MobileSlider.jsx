import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
// import Carousel from "../../components/carousel/Carousel";
// import foto1 from "../assets/images/maqueta/tensoblock-casa.png";
// import foto2 from "../assets/images/maqueta/casa-sardinera_33c40b63_1501x9301.png";
// import foto4 from "../assets/images/maqueta/foto3.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MobileSlider = () => {
    return (
        <>
            <Carousel pause fade id="slider__home">
                <Carousel.Item className="carousel align-center" interval={60000}>
                    <img
                        className="img-responsive"
                        src={"foto1"}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="info-slider-home">
                            <h2 className="stiker-card-slider">DISEÑO</h2>
                            <h1 className="title-card-slider">
                                Arquitectura a la vanguardia
                            </h1>
                            <p className="slider__carousel-fecha">diciembre 2021</p>
                            <p>
                                La serie de Tensoblocks permite construir infinitos de
                                espacios del sistema constructivo de bloques de hormigón
                                permite armar columnas y vigas dentro de los muros...
                            </p>
                            <button className="button-card-slider">Ver noticia <ArrowForwardIcon /></button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel align-right" interval={60000}>
                    <img
                        className="img-responsive"
                        src={"foto2"}
                        alt="Second slide"
                    />
                    <div className="container contenedor-right">
                        <Carousel.Caption>
                            <div className="info-slider-home" interval="60000">
                                <p className="stiker-card-slider">CONSTRUCCIONES</p>
                                <h1 className="title-card-slider">
                                    ¿Cómo son las columnas y vigas con bloques de hormigón?
                                </h1>
                                <p className="slider__carousel-fecha">Octubre 2021</p>
                                <p>
                                    l sistema constructivo de bloques de hormigón permite armar
                                    columnas y vigas dentro de los muros...
                                </p>
                                <button className="button-card-slider">Ver noticia <ArrowForwardIcon /></button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="carousel align-left" interval={60000}>
                    <img
                        className="img-responsive"
                        src={"foto4"}
                        alt="Third slide"
                    />
                    <div className="container contenedor-left">
                        <Carousel.Caption>
                            <div className="info-slider-home">
                                <p className="stiker-card-slider">DISEÑO</p>
                                <h1 className="title-card-slider">
                                    Arquitectura a la vanguardia
                                </h1>
                                <p className="slider__carousel-fecha">diciembre 2021</p>
                                <p>
                                    La serie de Tensoblocks permite construir infinitos de
                                    espacios del sistema constructivo de bloques de hormigón
                                    permite armar columnas y vigas dentro de los muros...
                                </p>
                                <button className="button-card-slider">Ver noticia <ArrowForwardIcon /></button>
                            </div>
                        </Carousel.Caption>
                    </div>

                </Carousel.Item>
            </Carousel>

        </>
    );
};
export default MobileSlider;
