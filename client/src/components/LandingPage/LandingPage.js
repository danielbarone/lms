/* React */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
/* MUI */
import {
  AppBar,
  CssBaseline,
  Dialog,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { history } from '../../navigation';
import useStyles from './LandingPage.styles';
import { useTheme } from '../../theme/ThemeContext';
import {
  AuthButton,
  AvatarBtn,
  Icon,
  LogIn,
  Register,
} from '..';

// Define tabs and their icons here
const tabNames = ['Administrator', 'Borrower', 'Librarian'];
const tabPaths = {
  0: 'admin',
  1: 'borrower',
  2: 'librarian',
};
const tabIcons = ['admin', 'book', 'library'];

function LandingPage(props) {
  const location = useLocation();
  const theme = useTheme();
  const styleProps = {
    ...props,
    currentPage: location.pathname.substring(1),
    noPadding: ['pagepath'],
  };
  const classes = useStyles(styleProps);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(
    location.pathname.substring(1),
  );
  const [open, setOpen] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  useEffect(() => {
    const stateCurrPage = selectedIndex;
    const pathname = location.pathname.substring(1);

    if (pathname !== stateCurrPage) {
      setSelectedIndex(pathname);
    }
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (event, index) => {
    /*
      If viewing the registration form when clicking
      a nav link, set isSigningUp to false to
      clear the registration from.

      Not needed if exclusively using a modal for
      registration.
    */
    if (props.isSigningUp) {
      props.setIsSigningUp(false);
    }

    setSelectedIndex(index);
    history.push(index);
  };

  const handleClose = (modal) => {
    if (modal === 'login') {
      setOpen(false);
    } else {
      setOpenSignUp(false);
    }
  };

  const handleToggle = (modal) => {
    if (modal === 'login') {
      setOpen(!open);
    } else {
      setOpenSignUp(!openSignUp);
    }
  };

  useEffect(() => {
    if (props.contactId && !props.session) {
      handleToggle('register');
    }
  }, []);

  const drawer = (
    <div className={classes.drawerContainer}>
      <div className={classes.toolbar} />
      <Divider className={classes.divider} />
      <List className={classes.navList}>
        {tabNames.map(
          (text, index) => (
            <ListItem
              button
              selected={selectedIndex === tabPaths[index]}
              onClick={(event) => handleListItemClick(event, tabPaths[index])}
              key={`${index}-main-tabs`}
              className={
                selectedIndex === tabPaths[index]
                  ? classes.listItemActiveHover
                  : classes.listItemHover
              }
            >
              <ListItemIcon
                className={
                  selectedIndex === tabPaths[index]
                    ? classes.activeListItemIcon
                    : classes.inactivelistItemIcon
                }
              >
                <Icon name={tabIcons[index]} color='primary' />
              </ListItemIcon>
              <ListItemText primary={text} className={classes.listItemText} />
            </ListItem>
          ),
        )}
      </List>
      <Divider className={classes.divider} />
      {props.authBtn === 'login' ? (
        <div className={classes.authBtnContainer}>
          <AuthButton authAction='Login' handleToggle={handleToggle} />
          <AuthButton authAction='Register' handleToggle={handleToggle} />
        </div>
      ) : (
        <AuthButton authAction='Logout' />
      )}
      <Divider className={classes.divider} />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Icon name='menu' />
          </IconButton>
          <div className={classes.appBarContainer}>
            <div
              className={classes.appBarTitleContainer}
              onClick={(event) => handleListItemClick(event, '')}
            >
              <Typography variant="h6" className={classes.appBarText} noWrap>
                LMS
              </Typography>
            </div>
            <div className={classes.appBarRightItems}>
              <IconButton
                onClick={() => theme.toggle()}
                className={classes.lightSwitchContainer}
              >
                {theme.dark ? (
                  <Icon name='lightsOn' />
                ) : (
                  <Icon name='lightsOff' />
                )}
              </IconButton>
              <AvatarBtn handleToggle={handleToggle} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.routes}
      </main>
      <Dialog
        open={open}
        onClose={() => handleClose('login')}
        aria-labelledby='login-modal'
        aria-describedby='login-modal'
      >
        <LogIn
          onChangeToSignUp={() => props.setIsSigningUp(true)}
          handleClose={() => handleClose('login')}
          handleToggle={handleToggle}
        />
      </Dialog>
      <Dialog
        open={openSignUp}
        onClose={() => handleClose('register')}
        aria-labelledby='registration-modal'
        aria-describedby='registration-modal'
      >
        <Register
          onChangeToLogin={() => props.setIsSigningUp(false)}
          contactId={props.contactId}
          handleClose={() => handleClose('register')}
          handleToggle={handleToggle}
        />
      </Dialog>
    </div>
  );
}

LandingPage.propTypes = {
  authBtn: PropTypes.string,
  contactId: PropTypes.string,
  isSigningUp: PropTypes.bool,
  routes: PropTypes.any,
  session: PropTypes.any,
  setIsSigningUp: PropTypes.func,
};

export default LandingPage;
