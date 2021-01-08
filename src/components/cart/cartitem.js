import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme)=>(
    {
        card:{
            backgroundColor:"snow",
            minHeight:"200px"
        },
        imgcard:{
            height:"150px",
            width:"300px",
         
            margin:theme.spacing(2),
            paddingTop:theme.spacing(2)
        },
        cartbutton:{
            marginRight:theme.spacing(2),
            marginBottom:theme.spacing(2)
        }
    })
)
export default function Cartitem(props){
    const classes = useStyles();
       
          return(  <Grid container className={classes.card}>
                {props.cartitems.map(
                    (item,index)=>{
                        return(<>
                            <Grid md={3} className={classes.imgcard}> 
                                    <img src={item.imgurl} style={{maxWidth:"100%", maxHeight:"100%"}}/>
                            </Grid>
                            <Grid md={7} container>
                                <h2>{item.pname}</h2>
                                <Grid md={6}>
                                    <p>Style: {item.style} </p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: {item.price}</p>
                                </Grid>
                                <Grid md={6}>
                                    <p>Color: {item.color}</p>
                                    <p>Size: {item.size}</p>
                                    <Button variant="contained"
                                            color="secondary"
                                            startIcon={<EditIcon/>}
                                            size="small"
                                            onClick={()=>{}} 
                                            className={classes.cartbutton}>
                                        Edit
                                </Button>       
                                <Button variant="contained"
                                            color="secondary"
                                            startIcon={<DeleteIcon/>}
                                            onClick={()=>{}}
                                            size="small" 
                                            className={classes.cartbutton}>
                                        Remove
                                </Button>            
                                </Grid>
                            </Grid></>)})}
          
        </Grid>)
  
}
