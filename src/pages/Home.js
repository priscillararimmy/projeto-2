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
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
        <Container>
        <h1> SEJA BEM VINDO AO DEVinMMO</h1>
        <p>por Priscilla Rarimmy</p>
        <Button color="primary" variant="contained" size="large" onClick={()=>navigate("/games")}>
          ENTRAR
        </Button>
        </Container>


    </div>
    )
};