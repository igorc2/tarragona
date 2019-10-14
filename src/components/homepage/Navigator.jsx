import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { Link } from 'react-router-dom'



const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1.2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
    paddingBottom: 1,
  },
  item: {
    lineHeight: 2,
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc1f7',
  },
  itemPrimary: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2.5),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});



function Navigator(props) {
  const { classes, handlePageChange, ...other } = props;

  const [ categories, setCategories ] = useState([
    {
      id: 'Develop',
      children: [
        { id: 'Customers', icon: <SupervisorAccountIcon />, active: true, link: '/customers'},
        { id: 'Authentication', icon: <PeopleIcon />, link:'/'},
        { id: 'Database', icon: <DnsRoundedIcon />, link:'/dashboard'},
        { id: 'Storage', icon: <PermMediaOutlinedIcon />, link:'/' },
        { id: 'Hosting', icon: <PublicIcon />, link:'/catalog' },
        { id: 'Functions', icon: <SettingsEthernetIcon />, link:'/desk' },
        { id: 'ML Kit', icon: <SettingsInputComponentIcon />, link:'/countries' },
      ],
    },
    {
      id: 'Quality',
      children: [
        { id: 'Analytics', icon: <SettingsIcon />, link:'/' },
        { id: 'Performance', icon: <TimerIcon />, link:'/' },
        { id: 'Test Lab', icon: <PhonelinkSetupIcon />, link:'/' },
      ],
    },
  ]);


  const setActive = (id) => {
    setCategories(
      [ ...categories.map(cat => cat = {...cat, children: cat.children
            .map((child) => {
              child.active = child.id === id;
              return child;
            })
          }
      )]
    )
    handlePageChange({title: id})
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Paperbase
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Project Overview
          </ListItemText>
        </ListItem>
        {categories && categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id} 
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, link }) => (
              <Link to={link} key={childId}>
                <ListItem
                  onClick={() => setActive(childId) } 
                  key={childId}
                  button
                  className={clsx(classes.item, active && classes.itemActiveItem)}
                >
                  <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
