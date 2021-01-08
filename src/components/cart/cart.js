import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Home/Navbar';
import Carditem from './cartitem';
import Summary from './Summary';
const useStyles = makeStyles((theme) => ({
    itemcart: {
      flexGrow: 1,
      height:"100%",
      marginTop:"100px",
      marginLeft:"50px",
      marginRight:"50px",
      minHeight:"500px",
   },
  
   
      
    
    
  }));
 

export default function Cart(){
    const classes = useStyles();
    const cartitems = [
        {
            "pname":"Women's Cross Type Petty Coat ",
            "quantity":1,
            "price":150,
            "color":"Green",
            "style":"Cross Type",
            "imgurl":"/cross.jpg",
            "size":"2 Meters"
        },
        {
            "pname":"Women's Kucchi Type Petty Coat ",
            "quantity":1,
            "price":150,
            "color":"Yellow",
            "style":"Kucchi Type",
            "imgurl":"/kucchi.jpg",
            "size":"2 Meters"
        }
    ]
        return (
            <Grid container>
                <Navbar/>
                <Grid md={7} xs={12} className={classes.itemcart}>
                    <h1>Shopping Bag</h1>
                    <h2 >2 Items <hr/></h2>
                    <Carditem cartitems={cartitems}/>
                 
                </Grid>
                <Grid md={3} xs={12} className={classes.itemcart} >
                    <h1>Order Summary</h1>
                    <h2 >Promo Code? <hr/></h2>
                   <Summary/>
                 
                </Grid>
            </Grid>
        )
    
}
