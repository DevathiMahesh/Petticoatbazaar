import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
   
      height:"100%",
      backgroundColor:"#020C16",
      backgroundRepeat:"repeat-y",
   
    },
    about: {
      flexGrow: 1,
   
      height:"auto"
    },
    iconspage:{
        flexGrow:1,
        backgroundColor:"black"
    },
}));
const theme = createMuiTheme({
    typography: {
      color:"white",
      fontSize:"40px",
      fontFamily: [
        'Yeon Sung',
        'cursive',
      ].join(','),
    },});
export default function About() {
       const classes = useStyles();
        return (
            <div>
                 <div id="about" className={classes.root}>
                        <Grid container>
                        <Grid item md={12}  sm={12}  >
                         <ThemeProvider theme={theme}>
                            <div id="about"style={{textAlign:"center",marginTop:"10%",marginBottom:"10%",color:"white",fontSize:"30px"}}>
                            About Us
                            <br/>
                            <p style={{fontFamily:"Atma",fontSize:"45px"}}>
                                We are the leading Petty coats manufacturers in our area for the past decade.<br/>
                                Thousands of Customers are delighted with the quality of the products that we <br/>
                                deliver and their satisfaction is the ultimate goal for us.
                            </p>
                            <img src="/petticoat.png" className={classes.title} height="150px" width="300px" />
                             <br/>
                                                    
                        
                           
                            </div>
                        </ThemeProvider>
                        </Grid>
                         </Grid>
              </div>
            </div>

        )
    
}
