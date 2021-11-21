import { Grid } from "@mui/material"
import { useEffect, useReducer, useState } from "react"
import { GameCard } from "../Components/Card"
import { DefaultPage } from "../templates/DefaultPage"

const initial_state = {
  games: [],
  news: [],
  game: null,
};

const reducer = (state, valueFromSetter) => {
  switch (valueFromSetter.type) {
    case "SET_GAMES":
      return { ...state, games: valueFromSetter.content };
    case "SET_GAME":
      return { ...state, game: valueFromSetter.content };
    case "SET_NEWS":
      return { ...state, news: valueFromSetter.content };
    default:
      return state;
  }
};


export const GameNews = () => {

  const [state, setState] = useReducer(reducer, initial_state);
  
  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
      "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      "x-rapidapi-key": "88d93fc7b7msh209e2e4c6a1d0c3p181ce7jsnb67dbd21b725"
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/latestnews", config)
      .then((response) => response.json())
      .then((news) => setState({ type: "SET_NEWS", content: news }));
  }, []);
    
console.log(state)

    return (
      
        <DefaultPage>
          <Grid 
          >
          
             {state.news.length > 0 ? (
               
                state.news.map((game) => (
                  <Grid item xs={12} key={game.id} item>
                    <GameCard 
                      id={game.id}
                      title={game.title}
                      short_description={game.short_description}
                      thumb={game.thumbnail}
                    />
          </Grid>
                ))) : <p>Sem notícias</p>}
          </Grid>
        
         </DefaultPage> 
    )
}
        
    

