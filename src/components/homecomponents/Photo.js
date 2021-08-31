import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';


const Photo = (props) => {
    return (
        <Grid item md={4}>
            <Box  style={{border:'1px solid gray'}}>
                <Grid container>
                <Grid item  md={8} xs={12}>
                    <Box padding={2}>
                        <Typography style={{color:'grey'}} variant="h6">{props.category}</Typography>
                        <Typography variant="p">{props.desc}</Typography>
                        <Typography style={{ marginTop: '5px' }} color="secondary" variant="h6">{props.price}</Typography>
                   
                    </Box>
                </Grid>
                <Grid item  md={4} xs={12}>
                    <Box>
                        <img width="100%" alt="imagse" src={props.image} />
                    </Box>
                </Grid>
                
            </Grid>
            </Box>
        </Grid>

    )
}

export default Photo
