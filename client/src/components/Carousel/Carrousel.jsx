import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Slider from './Slider.json'
import Item from './Item'
import { Container, Grid } from '@mui/material';

function Carrousel()
{
   

    return (
        <Container maxWidth="100%" style={{ padding: "0" }}>
        <Carousel height='32vh'>
            {
                Slider.map( (item ) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
        </Container>
    )
}

export default Carrousel