import React from "react";
import { useNavigate, useParams } from "react-router";

export const NavBar = () => {
  const { game } = useParams();
  const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">DEVinMMO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active"  onClick={() => navigate("/")}>Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  onClick={() => navigate("/games")}>Jogos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate("/news")}>Notícias</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="text" placeholder="Buscar..." />
                        <button class ="btn btn-secondary my-2 my-sm-0" type ="submit">Busca</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}