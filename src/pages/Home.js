import { Container, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import BackgroundImage from "../assets/img/game.jpg";

export const Home = () => {

  const navigate = useNavigate()

    return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: `url(${BackgroundImage})`,
        backgroundSize: "100%",
        backgroundReapeat:"no-reapeat",
        color: "#BA55D3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        fontSize: "3rem",
      }}
    >
        <Container>
        <p> SEJA BEM VINDO AO DEVinMMO</p>
        <h1>por Priscilla Rarimmy</h1>
        <button type="button" className="btn btn-primary" onClick={()=>navigate("/games")}>ENTRAR</button>
        </Container>


    </div>
    )
};