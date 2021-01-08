import React, { Component } from 'react'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
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
export default function Contact() {
       const classes = useStyles();
        return (
            <div>
                  <div id="iconspage" className={classes.iconspage} style={{height:"150px",textAlign:"center",color:"white",fontSize:"20px"}}>
                <Grid container>
                
                    <Grid md={2} xs={12} className={classes.iconspacing}>
                       <LocalShippingIcon style={{fontSize:"70px"}}/><br/>
                        Free Shipping 
                   </Grid>
                   <Grid md={2} xs={12} className={classes.iconspacing}>
                       <ThumbUpIcon style={{fontSize:"70px"}}/><br/>
                        Premium Quality
                   </Grid>
                   <Grid md={3} xs={12} className={classes.iconspacing}>
                       <LocalAtmIcon style={{fontSize:"70px"}}/><br/>
                        Huge Savings
                   </Grid>
                   <Grid md={2} xs={12} className={classes.iconspacing}>
                       <SentimentVerySatisfiedIcon style={{fontSize:"70px"}}/><br/>
                        Happy Customer
                   </Grid>
               </Grid>
              </div>
                   <div id="contact" className={classes.delivery} style={{textAlign:"center",color:"white",fontSize:"30px",height:"400px"}}>
                  <Grid container>
                       
                        <Grid item md={4}  sm={12} style={{textAlign:"left",marginLeft:"50px"}} >
                           
                           <p> Contact Us </p> 
                           <Grid md={12} xs={12}>
                                  
                                   <LocationOnIcon style={{fontSize:"30px",marginTop:"20px",marginRight:"10px"}}/>
                                   <span style={{fontSize:"20px"}}>Nellore,AndhraPradesh.</span>
                            </Grid>
                            <Grid md={12} xs={12}>
                                   <LocalPhoneIcon style={{fontSize:"30px",marginTop:"20px",marginRight:"10px"}}/>
                                   <span style={{fontSize:"20px"}}>+91-7032370869, +91-6301578819</span>
                            </Grid>
                            <Grid md={12} xs={12}>
                                   <ContactMailIcon style={{fontSize:"30px",marginTop:"20px",marginRight:"10px"}}/>
                                   <span style={{fontSize:"20px"}}>d.mahesh995@gmail.com</span>
                            </Grid>

                        
                        </Grid>
                        <Grid item md={4}  sm={12} style={{textAlign:"left"}} >
                        <ThemeProvider theme={theme}>
                               <p>Our Delivery Partners </p> 
                                <img  height="200" width="500" src="/delivery.jpg"/>
                        </ThemeProvider>
                        </Grid>
                        <Grid item md={3}  sm={12} style={{textAlign:"left",marginLeft:"50px"}} >
                            <p> Site Links </p> 
                            <a href="#" style={{fontSize:"20px",textDecoration:"none",color:"white"}}>Privacy Policy</a><br/>
                            <a href="#"style={{fontSize:"20px",textDecoration:"none",color:"white"}}>Shipping Policy</a><br/>
                            <a href="#"style={{fontSize:"20px",textDecoration:"none",color:"white"}}>Return Policy</a><br/>
                            <a href="#" style={{fontSize:"20px",textDecoration:"none",color:"white"}}>Cancellation && Shipping Policy</a><br/>
                            <a href="#"style={{fontSize:"20px",textDecoration:"none",color:"white"}}>Terms & Conditions</a>
                        </Grid>
                  </Grid>
               </div>
               <div id="sociallinks" className={classes.contact} style={{textAlign:"center",color:"white",fontSize:"30px",height:"100px"}}>
                  <Grid container>
                    <Grid md={12} xs={12} >
                        <WhatsAppIcon style={{fontSize:"50px"}} className={classes.socialicons}/>
                        <InstagramIcon style={{fontSize:"50px"}} className={classes.socialicons}/>
                        <FacebookIcon style={{fontSize:"50px"}} className={classes.socialicons}/>
                        <TwitterIcon style={{fontSize:"50px"}} className={classes.socialicons}/>
                    </Grid>
                  </Grid> 
               </div>
    

            </div>
        )
    
}
