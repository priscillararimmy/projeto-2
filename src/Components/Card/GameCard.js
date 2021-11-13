import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";



export const GameCard = ({title, short_description, thumbnail }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        thumbnail={thumbnail}
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
}