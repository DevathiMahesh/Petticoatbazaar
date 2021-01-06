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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Product from '../Product/Product';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const useStyles = makeStyles((theme)=>({
  root: {
    // maxwidth: 340,
    // width:"90%",
    minWidth:"auto",
    borderRadius:25,
    
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'black',
    backgroundColor: 'white'
 },
  media: {
    height: 230,
    '&:hover':{
       opacity:0.8
    }
    
  },
  mbutton:{
    '&:hover':{
       opacity:1
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mpaper: {
    backgroundColor: theme.palette.background.paper,
   
    borderRadius:"0px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:"80%",
    height:"600px"
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const [showMore,setShowMore] = React.useState(false);
  const [open,setOpen] = React.useState(false);
  return (
    <>
    <Card  className={classes.root}>
      <CardActionArea>
     
        <CardMedia
          className={classes.media}
          image={props.item.src}
          title={props.item.title}
          onMouseEnter={()=>setShowMore(true)}
          onMouseLeave={()=>setShowMore(false)}
        >
           {/* {showMore?<Button variant="outlined"
                                   color="text"
                                   style={{positionmarginTop:"30%",opacity:2,color:"white"}}
                                   onClick={()=>setOpen(true)} 
                                   className={classes.mbutton}>
                                          Show More
           </Button>:null} */}
           <AddCircleIcon onClick={()=>setOpen(true)} style={{color:"crimson",fontSize:"50px",position:"relative",right:"-160px",top:"200px"}}/>
        </CardMedia>
      
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
    <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={()=>{}}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500,
                            }}
                          >
                          <Fade in={open}>
                            <div className={classes.mpaper}>
                              <Product setOpen={setOpen}/>
                             </div>
                            
                          </Fade>
        </Modal>
    </>    
  );
}
