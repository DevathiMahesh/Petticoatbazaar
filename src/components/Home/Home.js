import React, { Component } from 'react'
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl,InputLabel,Input,FormHelperText,TextField,Button,Container} from '@material-ui/core'

import Carousel from 'react-material-ui-carousel'
import Typewriter from 'typewriter-effect/dist/core';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import MediaCard from './Mediacard';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Home.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GoogleFontLoader from 'react-google-font-loader';
import Contact from '../contact/Contact';
import About from '../contact/About';
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
    socialicons:{
       marginRight:theme.spacing(4),
       marginTop:theme.spacing(2)
    },
    delivery:{
       flexGrow:1,
       backgroundColor:"#3C1A03 ",

    },
    contact: {
      flexGrow: 1,
      backgroundColor:"black",
      height:"auto"
    },
    iconspacing:{
       marginLeft:theme.spacing(5),
       marginRight:theme.spacing(5),
       marginTop:theme.spacing(2)
    },
    paper: {
      
      padding: theme.spacing(2),
     
      color: theme.palette.text.secondary,
      height:"600px"
    },
    textField: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: "80%"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    button: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: "80%"
    },
    form:{
      marginLeft:"50px"
    },
    card:{
     
      marginTop:theme.spacing(3),
      marginLeft:theme.spacing(7),
      marginRight:theme.spacing(7),
      marginBottom: theme.spacing(3),
      
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mpaper: {
      backgroundColor: theme.palette.background.paper,
     
      borderRadius:"20px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width:"600px",
      height:"600px"
    },
    mbutton:{
      margin:theme.spacing(2),

    },
    imgcontainer:{
      marginLeft:theme.spacing(7),
      textAlign:"center"
    },
    img:{
      margin:"30px"
    }
    
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
export default function Home(){
    let classes = useStyles();
    var items = [
        {
            src: "/cross.jpg",
            title: "Cross Type",
            description:"Cross Type Petty Coat made with High Quality material of 2 Meters. "
        },
        {
            src: "/kucchi.jpg",
            title: "Kucchi Type",
          description:"Kucchi Type Petty Coat made with High Quality material of 2 Meters.  "
        },
        {
            src: "/ready.jpg",
            title: "Ready Made ",
            description:"Ready Made Petty coats of other brands also available with us"
        },
        
    ];
        return (
            <div>
                <GoogleFontLoader
                    fonts={[
                        {
                        font: 'Roboto',
                        weights: [400, '400i'],
                        },
                        {
                        font: 'Roboto Mono',
                        weights: [400, 700],
                        },
                        {
                          font:"Atma",
                          weights:[300]

                        }
                        ]}
                    subsets={['cyrillic-ext', 'greek']}
                 />
                <Navbar/>
                <div className={classes.root} >
         
                    <Grid container  >
                        <Grid item md={12}  sm={12}  >
                         
                        <ThemeProvider theme={theme}>
                            <div style={{textAlign:"center",marginTop:"6%",color:"white",fontSize:"30px"}}>
                            Grab On 20% Discount !!!
                            <br/>
                            
                           <span className="text_1"> 
                               Want to Buy High Quality,Long Lasting Pettycoats at 
                                <br/>
                               Affordable Rates??
                            </span>
                            </div>
                        </ThemeProvider>
                        <Grid container   style={{height:"auto",textAlign:"center",contentAlign:"center"}}>
                         {items.map(
                                    (item,i)=>{
                                    return(
                                                <Grid item  md={3} className={classes.card}>
                                                    <MediaCard item={item} />
                                                </Grid>
                                    )
                                    }
                                )}
                         </Grid>
                         <div style={{textAlign:"center",color:"white",fontSize:"30px"}}>
                            <p>Start Purchasing Now
                                 <Button variant="contained"
                                   color="secondary"
                                   startIcon={<AddShoppingCartIcon />}
                                   onClick={()=>{}} 
                                   className={classes.mbutton}>
                                          Shop Now
                                 </Button>
                            </p>
                          </div>
                 </Grid>
                 </Grid>
              </div>
             <About/>
             <Contact/>
            
                          </div>
        )
    
}
