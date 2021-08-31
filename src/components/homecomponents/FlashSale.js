import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import star from '../../star.svg'




const FlashSale = (props) => {

    return (
        <Grid item md={3}>

            <Box boxShadow={3}>
                <Box boxShadow={3} style={{ transform: 'rotate(-20deg)', color: 'white', backgroundColor: 'purple',fontWeight:'bolder', letterSpacing:'5px' }} textAlign="center" padding={1} width="30%">{props.type}</Box>
                <Box textAlign="center" padding={2}>
                    <img height="250" width="100%" alt="img" src={props.image} />
                    <Typography variant="h6">{props.title}</Typography>
                    <Typography variant="p">{props.category}</Typography>
                    <Typography style={{ marginTop: '5px' }} color="secondary" variant="h6">{props.price}</Typography>
                    <Box marginTop={2}>
                        <img alt="star" src={star} width="20" />
                        <img alt="star" src={star} width="20" />
                        <img alt="star" src={star} width="20" />
                        <img alt="star" src={star} width="20" />
                        <img alt="star" src={star} width="20" />
                    </Box>
                </Box>
                
            </Box>
        </Grid>
    )
}

export default FlashSale
