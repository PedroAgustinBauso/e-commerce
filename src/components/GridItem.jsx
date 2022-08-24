import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GridItem = ({name, imagen, price, id}) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="250"
        image={imagen}
        alt="green iguana"
      />
      <hr border="none" border-top="1px" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default GridItem;