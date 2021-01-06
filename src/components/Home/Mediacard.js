import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
const useStyles = makeStyles({
  root: {
    // maxwidth: 340,
    // width:"90%",
    minWidth:"auto",
    borderRadius:25
  },
  media: {
    height: 250,
    hover:{

    }
  
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    
    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.src}
          title={props.item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.item.title}
          </Typography>
          <Typography variant="body2"  component="p">
            <span style={{color:"purple",fontStyle:"bold"}}>{props.item.description}</span>
            <br/><hr/>
           
          
          </Typography>
          <Grid container >
               <Grid md={12} xs={12}>
                  <Typography gutterBottom variant="h5" component="h2">
                    <b>Price: </b> &#8377;150 <sub><strike>&#8377;200</strike></sub>
                  
                   </Typography>
                   <Typography gutterBottom variant="h5" component="h2">
                      <b>Stock: <span style={{color:"green"}}>Available</span></b>
                   </Typography>
                   <Button variant="contained"
                                   color="secondary"
                                   startIcon={<AddShoppingCartIcon />}
                                   onClick={()=>{}} 
                                   className={classes.mbutton}>
                                          Shop Now
                   </Button>
              </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
  );
}
