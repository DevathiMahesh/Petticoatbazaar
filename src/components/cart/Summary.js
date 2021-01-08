import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme)=>(
    {
        card:{
            backgroundColor:"snow",
            minHeight:"400px"
        },
       
        cartbutton:{
            width:"85%",
            marginRight:theme.spacing(2),
            marginBottom:theme.spacing(2),
            backgroundColor:"#0000A0",
            color:"white",
            '&:hover':{
                backgroundColor:"#0000A0"
            }
        },
        leftside:{
            margin:theme.spacing(2),
            
        },
        rightside:{
             margin:theme.spacing(2),
             textAlign:"center"
        }
    })
)
export default function Summary() {
        const classes = useStyles();
        return (
            <Grid md={12} className={classes.card}>
                <Grid container>
                    <Grid md={6} className={classes.leftside}>
                    <p><b>Sub Total :</b> </p>
                    <p><b>Shipping Charges :</b> </p>
                    <p><b>CGST / SGST :</b> </p>
                    <p><b>Discount :</b> </p>
                    <p><b>Total Savings :</b> </p>
                    <hr/>
                    <h2>Total Amount : </h2>

                    </Grid>
                    <Grid md={4} className={classes.rightside}>
                        <p>&#8377;300</p>
                        <p style={{color:"green"}}>Free</p>
                        <p>&#8377;15</p>
                        <p>&#8377;40</p>
                        <p>&#8377;40</p>
                        <hr/>
                        <h2>&#8377;315</h2>
                    </Grid>
              
                </Grid>
                <Grid md={12} style={{textAlign:"center"}}>
                <Button variant="contained"
                                           
                                         
                                            onClick={()=>{}}
                                            size="small" 
                                            className={classes.cartbutton}>
                                        Proceed To Checkout
              </Button> 
              </Grid>    
            </Grid>
        )
   
}
