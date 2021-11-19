import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GameCard } from "../Components/Card";
import { DefaultPage } from "../templates/DefaultPage";

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

    <DefaultPage>
          <Grid container spacing={2}>

            {games.length > 0 ? (
              <> {
                games.map((game) => (
                  <Grid key={game.id} item>
                    <GameCard 
                      id={game.id}
                      title={game.title}
                      short_description={game.short_description}
                      thumb={game.thumbnail}
                    />
                  </Grid>
                )

                )}
              </>
            ) : (
              <p> Não há card de jogo disponível</p>
            )}
          </Grid>
        
      </DefaultPage>
  )

}