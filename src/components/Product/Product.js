import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
// import InnerImageZoom from 'react-inner-image-zoom';
import ReactImageZoom from 'react-image-zoom'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
const useStyles = makeStyles((theme)=>({
     smallcard:{
         height:"100px",
         width:"100px",
        border:"1px solid black",
        borderRadius:5,
        margin:theme.spacing(2)
     },
     largecard:{
       
       border:"1px solid black",
       borderRadius:5,
       margin:theme.spacing(4)
     },
     cartbutton:{
        backgroundColor:"orange",
        marginLeft: theme.spacing(4)
     },
     bnowbutton:{
        backgroundColor:"green",
        marginLeft: theme.spacing(2)
     }
    
  }));
  
export default function Product() {
      const classes = useStyles();
      const [mainimg,setMainImg] = React.useState("/cross.jpg");
        return (
            <Grid container>
                <Grid md={1} >
                  <div className={classes.smallcard}>
                     <img src="/kucchi.jpg" style={{maxWidth:"100%", maxHeight:"100%"}} onMouseEnter={()=>{setMainImg("/kucchi.jpg")}} />
                  </div>
                  <div className={classes.smallcard}>
                     <img src="/cross.jpg" style={{maxWidth:"100%", maxHeight:"100%"}} onMouseEnter={()=>{setMainImg("/cross.jpg")}}/>
                  </div>
                  <div className={classes.smallcard}>
                     <img src="/kucchi.jpg" style={{maxWidth:"100%", maxHeight:"100%"}} onMouseEnter={()=>{setMainImg("/kucchi.jpg")}}/>
                  </div>
                </Grid>
                <Grid md={4}>
                    <div className={classes.largecard}>
                       <ReactImageZoom img={mainimg} 
                       
                          zoomPosition="right"
                          scale="1.5"
                          width="300"
                          height="300"
                          zoomLensStyle={
                            {
                            opacity: "0.7",
                            backgroundColor: "red"
                            }

                          }
                          offset = {{
                              vertical:"0",
                              horizontal:"20"
                          }}
                       />
                    </div>
                    <Button variant="contained"
                                   color="secondary"
                                   startIcon={<AddShoppingCartIcon />}
                                   onClick={()=>{}} 
                                   className={classes.cartbutton}>
                                          Add To Cart
                   </Button>
                   <Button variant="contained"
                                   color="secondary"
                                   startIcon={<OpenInNewIcon/>}
                                   onClick={()=>{}} 
                                   className={classes.bnowbutton}>
                                          Buy Now
                 </Button>
                </Grid>
            </Grid>
        )
    
}
