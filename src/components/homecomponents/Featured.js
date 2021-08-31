import React from 'react';
import {Grid, Box, Typography } from '@material-ui/core';


const   Featured = (props) => {
    return (
            <Box style={{border:'1px solid gray'}}>

                <Grid container>
                    <Grid item md={7}>
                        <Box padding={2}>
                            <Typography variant="h6">{props.title}</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={5}>
                        <img width="110" height="100" alt="images" src={props.image} />
                    </Grid>
                    <Box padding={2}>
                        <a style={{ textDecoration: 'none', color: 'orange' }} href="/">+ shop now</a>
                    </Box>
                </Grid>

            </Box>

    )
}

export default Featured
