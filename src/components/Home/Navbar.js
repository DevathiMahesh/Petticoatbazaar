import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import history from '../../utils/history';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      fontFamily:"Cursive"
    },
   navstyles:{
     backgroundColor:"#020C16 "
   },
    logo: {
      marginRight: theme.spacing(2),
      alignContent:"center",
      justifyContent:"center"
    },
    toolbarButtons: {
      marginLeft: "auto",
      marginRight: 25,
      color:"white",
      fontsize:"36px",
      textDecoration:"none"
    },
  }));
  
export default function Navbar()
{
  const classes = useStyles();
  return(
      <div className={classes.root}>
           <AppBar position="fixed">
                <Toolbar className={classes.navstyles}>
                
                    <Typography variant="h6"   >
                       Pettycoats Bazaar
                    </Typography>
                    
                    <span className={classes.toolbarButtons}>
                        <a href="#" className={classes.toolbarButtons} onClick={()=>history.push("/")}>
                          Home </a>
                        <a href="#contact" className={classes.toolbarButtons} onClick={()=>history.push("/#contact")}> Contact</a>
                        <a href="#about" className={classes.toolbarButtons} onClick={()=>history.push("/#about")}> About</a>
                        <AddShoppingCartIcon onClick={()=>history.push("/cart")}/>
                    </span>
             </Toolbar>
         </AppBar>
      </div>
  )
}