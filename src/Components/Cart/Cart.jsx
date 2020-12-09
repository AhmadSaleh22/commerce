import React, { useState } from 'react';
import {Container , Typography , Button , Grid } from '@material-ui/core';
import useStyles from './styles';

export default function Cart([cart]) {

    const isEmpty  =  !cart.line_items.length;
    const classes = useStyles();

    
    const EmptyCart = () =>(

        <Typography variant='subtitle'>
            The Cart Is Empty
        </Typography>
    );

    const FilledCart =()=>(
        <>
            <Grid container spacing='3'>
                {cart.line_items.map(
                    (item)=>{
                        <Grid item sm={4} xs={12} key={item.id}>
                            <div>
                                {item.name}
                            </div>

                        </Grid>
                    }
                )}

            </Grid>

            <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal : {cart.subtotal.formatted_with_symbol}
                </Typography>
            </div>
        </>

    );

    return (
        <Container>
            <div  className={classes.toolbar}/>
            <Typography className={classes.title} variant = 'h3' >
                Your Shopping Cart
            </Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}