import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles,withStyles } from '@material-ui/core/styles';
// import InnerImageZoom from 'react-inner-image-zoom';
import ReactImageZoom from 'react-image-zoom'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Typography from '@material-ui/core/Typography';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating, { IconContainerProps } from '@material-ui/lab/Rating';
import CloseIcon from '@material-ui/icons/Close';
import { SettingsInputComponent } from '@material-ui/icons';

const StyledRating = withStyles({
    iconFilled: {
      color: '#ff0a54',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);
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
        backgroundColor:"maroon",
        marginLeft: theme.spacing(8)
     },
     bnowbutton:{
        backgroundColor:"green",
        marginLeft: theme.spacing(2)
     }
    
  }));
  
export default function Product(props) {
      const classes = useStyles();
      const [mainimg,setMainImg] = React.useState("/cross.jpg");
      const [colors,setColors] = React.useState(["Red","Green","Blue","Purple","Orange","Black","Maroon"])
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
                     <img src="/ready.jpg" style={{maxWidth:"100%", maxHeight:"100%"}} onMouseEnter={()=>{setMainImg("/ready.jpg")}}/>
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
                    <Typography style={{textAlign:"center"}} gutterBottom variant="h6" component="h2">
                    <b style={{color:"#03045e",marginRight:"5px"}}>Price: </b> &#8377;150 <sub><strike>&#8377;200</strike></sub>
                   <br/>
                    <b style={{color:"#03045e",marginRight:"5px"}}>Quantity: </b> 1 
                  
                   
                   </Typography>

                   <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend"style={{textAlign:"center"}} gutterBottom variant="h6" component="h2">
                        <b style={{color:"#03045e",marginRight:"5px"}}>Rating:</b>
                        <StyledRating
                      
                        name="customized-color"
                        defaultValue={4}
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        />
                        </Typography>
                   </Box>
                  
                   <span style={{textAlign:"center"}}>
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
                 </span>
                </Grid>
                <Grid md={6} style={{textAlign:"left",fontSize:"20px"}}>
                    <Grid md={12}>
                            <h1> Women's Cross Type Petty Coat  </h1>
                        
                            <p>Cross Type Petty Coat is made of high quality material and Stitched Carefully by our expertised tailors.
                            Material is color proof and Long lasting made of cotton.
                            </p>
                    </Grid>
                    <Grid container>
                    <Grid md={6}>
                    <h3 style={{color:"crimson"}}>Highlights:  </h3>
                    <ul  style={{listStyle:"none",fontSize:"18px"}}>
                        <li> <AddCircleIcon style={{color:"blue",marginRight:"5px"}}/>  Material: cotton</li>
                        <li>  <AddCircleIcon style={{color:"blue",marginRight:"5px"}}/> Weight: 200g</li>
                        <li> <AddCircleIcon style={{color:"blue",marginRight:"5px"}}/> Length: 2 Meters</li>
                        <li><AddCircleIcon style={{color:"blue",marginRight:"5px"}}/> Height: 22 Inch</li>
                    </ul>
                    </Grid>
                    <Grid md={6}>
                       <h3 style={{color:"crimson"}}>Services:  </h3>
                       <ul style={{listStyle:"none",fontSize:"18px"}}>
                        <li><OfflinePinIcon style={{color:"green",marginRight:"5px"}}/>  7 Days Replacement Policy</li>
                        <li> <OfflinePinIcon style={{color:"green",marginRight:"5px"}}/> Cash On Delivery Available</li>
                        <li> <OfflinePinIcon style={{color:"green",marginRight:"5px"}}/> Bulk Orders are Accepted</li>
                        <li><OfflinePinIcon style={{color:"green",marginRight:"5px"}}/> Custom Colors are Available</li>
                    </ul>
                    </Grid>
                    </Grid>
                    <Grid md={12}>
                    <h3 style={{color:"crimson"}}>Colors Available:</h3>
                    {colors.map(
                        (item,i)=>{
                            return(
                                <span style={{height:"50px",borderRadius:"25px",marginRight:"20px",padding:"0px 15px",backgroundColor:item}}>
                                  <span style={{color:"white"}}>{item}</span>
                                </span>
                            )
                        }
                    )}
                    <br/><br/>
                    <span style={{color:"Black",fontSize:"16px",fontStyle:"Bold"}}>Note: These are the Premium Colors Currently in Stock. All other colors also available.
                    <br/> You can reach out to us on <span style={{color:"blue"}}>+91-7032370869 or d.mahesh995@gmail.com</span>
                        
                              </span>
                   </Grid>
                </Grid>
                <Grid md={1}>
                    <CloseIcon style={{marginLeft:"50px",fontSize:"40px"}} onClick={()=>props.setOpen(false)}/>
                </Grid>
            </Grid>
        )
    
}
