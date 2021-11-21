import React from "react";
import { DefaultPage } from "../templates/DefaultPage";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Chip, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import { FormGame } from "../Components/FormGame/FormGame";
import { Slideshow } from "@material-ui/icons";

export const GameDetails = () => {
  const { game } = useParams();
  const [ games, setGames] = useState()
  const navigate = useNavigate()
  useEffect(() => {

    const config = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "88d93fc7b7msh209e2e4c6a1d0c3p181ce7jsnb67dbd21b725",
      }
    }
    fetch(`https://mmo-games.p.rapidapi.com/game?id=${game}`, config)
    .then((response) => {response.json()
    .then((data)=>{setGames(data)})})}, [game]) 
  
    return (
      <DefaultPage>
      <Paper>
        <Grid container>
          {!games ? (
            <CircularProgress />
          ) : (
            <>
              <Grid item md={4}>
                <img src={games.thumbnail} alt={games.title} />
              </Grid>
              <Grid item md={8}>
                <p>
                  <Typography variant="h4">{games.title}</Typography>
                </p>
                <p>
                  <Typography variant="subtitle1">{games.short_description}</Typography>
                </p>
                <p>
                  <Chip label={games.genre} variant="outlined" />
                </p>
                {/* <p>
                <Grid item md={4}>
                <img src={games.screenshots} alt={games.title} />
              </Grid>
                </p> */}
              <Slideshow />
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
      
      <p></p>

      
      <FormGame />

      <button type="button" className="btn btn-primary" onClick={() => navigate("/games")}>VOLTAR</button>

      </DefaultPage>


      
    )
        
    
}