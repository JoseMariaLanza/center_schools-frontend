import React from "react";
// import imagenTensoquines1 from "../../assets/images/maqueta/galeria-fotos/adoquines-1.jpg";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from "react-router-dom";
// import ScrollToButtom from "./ScrollToButtom";
// import CardNews from "./CardNews";
import GrandCard from "./GrandCard";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Divider,
} from "@mui/material";

function HomeNews() {
    return (
        <>
            <section id="homeNews" className="container mt-5">
                <article id="home_news" className="container d-flex flex-no-wrap">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 style-homenews-izquierda">
                        {/* Seccion columna izquierda */}
                        <header className="">
                            <h1 className="id-section-titulonews">
                                Tenso<span>news</span>
                            </h1>
                        </header>
                        <GrandCard />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 style-homenews-derecha">
                        <div className="mt-3">
                            <button className="settings_button-border button-b-secondary posicion-boton">
                                <Link to="">
                                    todas las noticias <ArrowForwardOutlinedIcon />
                                </Link>
                            </button>
                        </div>
                        <div className="container seccion-cards-noticias">
                            <div id="" className="masonry">
                                <Card sx={{ maxWidth: 260, marginBottom: 3 }} className="item">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={"imagenTensoquines1"}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <article className="texto-slider">
                                                <p>FORMAS DE USO</p>
                                            </article>
                                            <article className="title-card-noticia">
                                                <h3>Viguetas para losas</h3>
                                                <p>Enero, 2022</p>
                                            </article>
                                            <article>
                                                <p className="parrafo-noticias">
                                                    Los pavimentos intertrabados de adoquines son capas de
                                                    rodamientos conformadas por elementos prefabricados
                                                    ....
                                                </p>
                                            </article>
                                            <Divider></Divider>
                                            <article className="seccion-redes-card">
                                                <article>
                                                    <p>
                                                        <BookmarkBorderIcon id="icon-redes-noticias" />
                                                        <span>2 min lectura</span>
                                                    </p>
                                                </article>
                                                <article className="seccion-vistas-card">
                                                    <p id="icon-favorito">
                                                        <FavoriteBorderIcon id="icon-redes-noticias" />
                                                        <span>20K</span>
                                                    </p>
                                                    <p id="icon-favorito">
                                                        <VisibilityOutlinedIcon id="icon-redes-noticias" />
                                                        <span>13K</span>
                                                    </p>
                                                    <p>
                                                        <ForumOutlinedIcon id="icon-redes-noticias" />
                                                        <span>30K</span>
                                                    </p>
                                                </article>
                                            </article>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 260, marginBottom: 3 }} className="item">
                                    <CardActionArea>

                                        <CardContent>
                                            <article className="texto-slider">
                                                <p>FORMAS DE USO</p>
                                            </article>
                                            <article className="title-card-noticia">
                                                <h3>Viguetas para losas</h3>
                                                <p>Enero, 2022</p>
                                            </article>
                                            <article>
                                                <p className="parrafo-noticias">
                                                    Los pavimentos intertrabados de adoquines son capas de
                                                    rodamientos conformadas por elementos prefabricados
                                                    ....
                                                </p>
                                            </article>
                                            <Divider></Divider>
                                            <article className="seccion-redes-card">
                                                <article>
                                                    <p>
                                                        <BookmarkBorderIcon id="icon-redes-noticias" />
                                                        <span>2 min lectura</span>
                                                    </p>
                                                </article>
                                                <article className="seccion-vistas-card">
                                                    <p id="icon-favorito">
                                                        <FavoriteBorderIcon id="icon-redes-noticias" />
                                                        <span>20K</span>
                                                    </p>
                                                    <p id="icon-favorito">
                                                        <VisibilityOutlinedIcon id="icon-redes-noticias" />
                                                        <span>13K</span>
                                                    </p>
                                                    <p>
                                                        <ForumOutlinedIcon id="icon-redes-noticias" />
                                                        <span>30K</span>
                                                    </p>
                                                </article>
                                            </article>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 260, marginBottom: 3 }} className="item">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={"imagenTensoquines1"}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <article className="texto-slider">
                                                <p>FORMAS DE USO</p>
                                            </article>
                                            <article className="title-card-noticia">
                                                <h3>Viguetas para losas</h3>
                                                <p>Enero, 2022</p>
                                            </article>
                                            <article>
                                                <p className="parrafo-noticias">
                                                    Los pavimentos intertrabados de adoquines son capas de
                                                    rodamientos conformadas por elementos prefabricados
                                                    ....
                                                </p>
                                            </article>
                                            <Divider></Divider>
                                            <article className="seccion-redes-card">
                                                <article>
                                                    <p>
                                                        <BookmarkBorderIcon id="icon-redes-noticias" />
                                                        <span>2 min lectura</span>
                                                    </p>
                                                </article>
                                                <article className="seccion-vistas-card">
                                                    <p id="icon-favorito">
                                                        <FavoriteBorderIcon id="icon-redes-noticias" />
                                                        <span>20K</span>
                                                    </p>
                                                    <p id="icon-favorito">
                                                        <VisibilityOutlinedIcon id="icon-redes-noticias" />
                                                        <span>13K</span>
                                                    </p>
                                                    <p>
                                                        <ForumOutlinedIcon id="icon-redes-noticias" />
                                                        <span>30K</span>
                                                    </p>
                                                </article>
                                            </article>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 260, marginBottom: 3 }} className="item">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={"imagenTensoquines1"}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <article className="texto-slider">
                                                <p>FORMAS DE USO</p>
                                            </article>
                                            <article className="title-card-noticia">
                                                <h3>Viguetas para losas</h3>
                                                <p>Enero, 2022</p>
                                            </article>
                                            <article>
                                                <p className="parrafo-noticias">
                                                    Los pavimentos intertrabados de adoquines son capas de
                                                    rodamientos conformadas por elementos prefabricados
                                                    ....
                                                </p>
                                            </article>
                                            <Divider></Divider>
                                            <article className="seccion-redes-card">
                                                <article>
                                                    <p>
                                                        <BookmarkBorderIcon id="icon-redes-noticias" />
                                                        <span>2 min lectura</span>
                                                    </p>
                                                </article>
                                                <article className="seccion-vistas-card">
                                                    <p id="icon-favorito">
                                                        <FavoriteBorderIcon id="icon-redes-noticias" />
                                                        <span>20K</span>
                                                    </p>
                                                    <p id="icon-favorito">
                                                        <VisibilityOutlinedIcon id="icon-redes-noticias" />
                                                        <span>13K</span>
                                                    </p>
                                                    <p>
                                                        <ForumOutlinedIcon id="icon-redes-noticias" />
                                                        <span>30K</span>
                                                    </p>
                                                </article>
                                            </article>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 260, marginBottom: 3 }} className="item">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={"imagenTensoquines1"}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <article className="texto-slider">
                                                <p>FORMAS DE USO</p>
                                            </article>
                                            <article className="title-card-noticia">
                                                <h3>Viguetas para losas</h3>
                                                <p>Enero, 2022</p>
                                            </article>
                                            <article>
                                                <p className="parrafo-noticias">
                                                    Los pavimentos intertrabados de adoquines son capas de
                                                    rodamientos conformadas por elementos prefabricados
                                                    ....
                                                </p>
                                            </article>
                                            <Divider></Divider>
                                            <article className="seccion-redes-card">
                                                <article>
                                                    <p>
                                                        <BookmarkBorderIcon id="icon-redes-noticias" />
                                                        <span>2 min lectura</span>
                                                    </p>
                                                </article>
                                                <article className="seccion-vistas-card">
                                                    <p id="icon-favorito">
                                                        <FavoriteBorderIcon id="icon-redes-noticias" />
                                                        <span>20K</span>
                                                    </p>
                                                    <p id="icon-favorito">
                                                        <VisibilityOutlinedIcon id="icon-redes-noticias" />
                                                        <span>13K</span>
                                                    </p>
                                                    <p>
                                                        <ForumOutlinedIcon id="icon-redes-noticias" />
                                                        <span>30K</span>
                                                    </p>
                                                </article>
                                            </article>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 260, marginBottom: 3 }} className="item">
                                    <CardActionArea>

                                        <CardContent>
                                            <article className="texto-slider">
                                                <p>FORMAS DE USO</p>
                                            </article>
                                            <article className="title-card-noticia">
                                                <h3>Viguetas para losas</h3>
                                                <p>Enero, 2022</p>
                                            </article>
                                            <article>
                                                <p className="parrafo-noticias">
                                                    Los pavimentos intertrabados de adoquines son capas de
                                                    rodamientos conformadas por elementos prefabricados
                                                    ....
                                                </p>
                                            </article>
                                            <Divider></Divider>
                                            <article className="seccion-redes-card">
                                                <article>
                                                    <p>
                                                        <BookmarkBorderIcon id="icon-redes-noticias" />
                                                        <span>2 min lectura</span>
                                                    </p>
                                                </article>
                                                <article className="seccion-vistas-card">
                                                    <p id="icon-favorito">
                                                        <FavoriteBorderIcon id="icon-redes-noticias" />
                                                        <span>20K</span>
                                                    </p>
                                                    <p id="icon-favorito">
                                                        <VisibilityOutlinedIcon id="icon-redes-noticias" />
                                                        <span>13K</span>
                                                    </p>
                                                    <p>
                                                        <ForumOutlinedIcon id="icon-redes-noticias" />
                                                        <span>30K</span>
                                                    </p>
                                                </article>
                                            </article>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}

export default HomeNews;
