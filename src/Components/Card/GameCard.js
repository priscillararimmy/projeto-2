import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router";


export const GameCard = ({ id, title, short_description, thumb }) => {
  const navigate = useNavigate()
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={thumb}
        alt={title}
      />
      <CardContent>
        <Typography >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {short_description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={() => navigate(`/games/:${id}`)}>Leia mais</Button>
      </CardActions>
    </Card>
  )
}

