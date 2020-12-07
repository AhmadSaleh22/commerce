import React, { useState } from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './style';
import { spacing } from '@material-ui/system';

export default function Products() {
    const classes =useStyles();

    const [products, setproducts] = useState([
        {id : 1 , name : 'Shoes' , description : 'running shoes.' , price : '115$' },
        {id : 2 , name : 'MacBook' , description : 'MacBook Laptop.' , price : '1500$' },
        {id : 2 , name : 'MacBook' , description : 'MacBook Laptop.' , price : '1500$' },
        {id : 2 , name : 'MacBook' , description : 'MacBook Laptop.' , price : '1500$' },
        {id : 2 , name : 'MacBook' , description : 'MacBook Laptop.' , price : '1500$' },
        {id : 2 , name : 'MacBook' , description : 'MacBook Laptop.' , price : '1500$' },
        {id : 2 , name : 'MacBook' , description : 'MacBook Laptop.' , price : '1500$' },
        {id : 2 , name : 'MacBook' , description : 'MacBook Laptop.' , price : '1500$' },
    ]);

    return (
        <main className={classes.content} mt={2}>
            <div className={classes.toolbar}>
                <Grid container justify="center" spacing={4} >
                    {products.map((product) => (
                        <Grid item key ={product.id} xs={12} sm={6} md={4} lg={3} >
                            <Product product={product} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </main>
    )
}
