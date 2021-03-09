import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css'
const Cards = (bruh) => {
    console.log(bruh);
    return (
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <typography color="textSecondary" gutterBottom>
                            Infected 
                        </typography>
                        <typography variant="h5">Real Data</typography>
                        <typography color="textSecondary">Real Data</typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;