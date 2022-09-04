import React from 'react'
// import imagenTensoquines1 from "../../assets/images/maqueta/galeria-fotos/adoquines-1.jpg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShareIcon from "@mui/icons-material/Share";

function GrandCard() {
    return (
        <div><div>
            <p>
                Noticias, datos de interés, videos y contenido multimedial sobre
                Tensolite y de la industria de la construccion
            </p>
        </div>
            <div className="card-noticias">
                <div id="img-card">
                    <img
                        src={"imagenTensoquines1"}
                        alt="imagen fondo abstracto"

                    />
                </div>
                <div className="seccion-noticas-derecha">
                    <div>
                        <button>
                            {" "}
                            <ShareIcon id="icon-share" />
                        </button>
                    </div>
                    <div className="texto-slider">
                        <p>CONSEJOS</p>
                    </div>
                    <div className="title-info-noticias">
                        <h3>Cómo evitar fisuras en mampostería</h3>
                        <p>Enero, 2022</p>
                    </div>
                    <div className="parrafo-seccion-noticias">
                        <p className="parrafo-noticias">
                            Lo primero que debemos repasar es que los elementos que
                            aportan estructuralmente ...
                        </p>
                    </div>
                    <div className="seccion-vistas-noticias">
                        <div>
                            <p>
                                <BookmarkBorderIcon id="icon-redes" />
                                <span>2 min lectura</span>
                            </p>
                        </div>
                        <div className="seccion-vistas-comentarios">
                            <p id="icon-favorito">
                                <FavoriteBorderIcon id="icon-redes" />
                                <span>20K</span>
                            </p>
                            <p id="icon-favorito">
                                <VisibilityOutlinedIcon id="icon-redes" />
                                <span>13K</span>
                            </p>
                            <p>
                                <ForumOutlinedIcon id="icon-redes" />
                                <span>30K</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default GrandCard