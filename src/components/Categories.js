import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ComputerIcon from '@material-ui/icons/Computer';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ToysIcon from '@material-ui/icons/Toys';
import BusinessIcon from '@material-ui/icons/Business';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import HouseIcon from '@material-ui/icons/House';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CameraAltIcon from '@material-ui/icons/CameraAlt';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            Categories
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <ComputerIcon />
        </ListItemIcon>
        <ListItemText primary="Computer" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          < AccessibilityIcon  />
        </ListItemIcon>
        <ListItemText primary="Accesories" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          < ToysIcon  />
        </ListItemIcon>
        <ListItemText primary="Toys" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          < BusinessIcon  />
        </ListItemIcon>
        <ListItemText primary="Business" />
      </ListItem>


      <ListItem button>
        <ListItemIcon>
          < SmartphoneIcon  />
        </ListItemIcon>
        <ListItemText primary="Smartphone" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <HouseIcon />
        </ListItemIcon>
        <ListItemText primary="House" />
      </ListItem>


      <ListItem button>
        <ListItemIcon>
          <CameraAltIcon />
        </ListItemIcon>
        <ListItemText primary="Cameras" />
      </ListItem>


      
      <ListItem button>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText primary="Food " />
      </ListItem>


      <ListItem button>
        <ListItemIcon>
            
          <LaptopMacIcon />
        </ListItemIcon>
        <ListItemText primary="Laptop" />
      </ListItem>


      <ListItem button onClick={handleClick}>
        <ListItemIcon>
            
          <SportsEsportsIcon />
        </ListItemIcon>
        <ListItemText primary="Games" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <SportsEsportsIcon />
            </ListItemIcon>
            <ListItemText primary="Playstation 5" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <SportsEsportsIcon />
            </ListItemIcon>
            <ListItemText primary="X-box 360" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <SportsEsportsIcon />
            </ListItemIcon>
            <ListItemText primary="Nintendo 5200" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <SportsEsportsIcon />
            </ListItemIcon>
            <ListItemText primary="Playstation 5 pro" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
