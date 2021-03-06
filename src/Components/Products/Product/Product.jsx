import React, { useState } from 'react';
import {Card , CardMedia, CardContent , CardActions , Typography , IconButton} from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';
import mac from '../../../images/mac.jpg'
export default function Product({product , onAddToCart}) {
    const classes = useStyles();


    return (

        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent >
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="BUTTON">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                    <Typography className={classes.description} dangerouslySetInnerHTML ={{__html : product.description}} variant="caption" color="textSecondary" component="p"/>
                        
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={ ()=> onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}
