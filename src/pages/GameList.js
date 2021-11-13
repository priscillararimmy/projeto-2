import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { GameCard } from "../Components/Card";
import { Header } from "../Components/Header";

export const GameList = () => {

  const [games, setGames] = useState([])

  useEffect(() => {

      const config = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
          "x-rapidapi-key": "88d93fc7b7msh209e2e4c6a1d0c3p181ce7jsnb67dbd21b725",
        }
      }
      fetch("https://mmo-games.p.rapidapi.com/games", config)
        .then((response) => response.json())
        .then((data) => setGames(data))
  
  }, [])

  return (

    <>
      <Header />
      <Box marginTop={2}>
        <Container>
          <Grid container spacing={2}>

            {games.length > 0 ? (
              <> {
                games.map((game) => (
                  <Grid key={game.id} item>
                    <GameCard
                      title={game.title}
                      short_description={game.short_description}
                      thumbnail={game.thumbnail}
                    />
                  </Grid>
                )

                )}
              </>
            ) : (
              <p> Não há card de jogo disponível</p>
            )}
          </Grid>
        </Container>
      </ Box>
    </>

  )

}