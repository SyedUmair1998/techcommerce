import {Grid, Box,  Typography } from '@material-ui/core'
import React from 'react';


const HomeComponent2 = (props) => {
    return (
        
        <Grid item md={4}>
         <a href="/" style={{textDecoration:'none'}}>   
        <Box style={{backgroundColor:props.color,color:'white'}} >
         <Grid container>
             <Grid item md={4}>   
            <Box padding={2}>
                <img alt="img" src = {props.image} width="100" />
            </Box>
            </Grid>
            <Grid item md={8}>   
            <Box padding={2}>
                <Typography variant="h6">{props.title}</Typography>
                <Typography style={{fontWeight:'bolder'}} variant="h5">Gear VR</Typography>
            </Box>

            </Grid>
        </Grid>
        </Box>
        </a>
        </Grid>
    )
}

export default HomeComponent2
