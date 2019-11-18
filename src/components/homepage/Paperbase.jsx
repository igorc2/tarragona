import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './Navigator';
import Content from './Content';
import HeaderBar from './HeaderBar';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Customers from '../customers/Customers'
import Copyright from '../layout/Copyright'
import Countries from '../countries/Countries';
import CreateCard from '../catalog/CreateCard'
import Desk from '../desk/Desk';
import Catalog from '../catalog/Catalog';
import Dashboard from '../dashboard/Dashboard'

//Maven+Pro|Quattrocento+Sans|Questrial|Raleway

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#2693b9',
      dark: '#006db3',
    },
    das: {
      light: '#1b99d5',
      main: '#1896d2',
      dark: '#1593ef'
    }
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
    fontFamily: [
      'Questrial',
      'Maven Pro',
      'Ubuntu',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;
//2693b9
const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  // drawer: {
  //   [theme.breakpoints.up('sm')]: {
  //     width: drawerWidth,
  //     flexShrink: 0,
  //   },
  // },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    background: '#eaeff1',
  },
  spaced: {
    padding: '30px 40px',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
};

function Paperbase(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [page, setPage] = React.useState({
    title: 'Customers'
  });

  const handlePageChange = (newPage) => {
    setPage({...newPage})
    console.log(page);
  }

  const renderComponentWithHeader = (component) => {
    return (
      <React.Fragment>
        <Header onDrawerToggle={handleDrawerToggle} pageInfo={page}/>
        <div className={classes.spaced}>
          {component}
        </div>
      </React.Fragment>
    )
  }

  const renderSpaced = (component) => {
    return (
      <div className={classes.spaced}>
        {component}
      </div>
    )
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            {/* <Hidden smUp implementation="js"> */}
              <Navigator
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                handlePageChange={handlePageChange}
              />
            {/* </Hidden> */}
            {/* <Hidden xsDown implementation="css">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                handlePageChange={handlePageChange}
              />
            </Hidden> */}
          </nav>
          <div className={classes.app}>
            <HeaderBar onDrawerToggle={handleDrawerToggle} pageInfo={page}/>
            <main className={classes.main} >
            <Switch>
              <Route exact path='/' className='spaced' component={() => renderComponentWithHeader(<Content/>)} />
              <Route path='/dashboard' page={page} component={() => renderSpaced(<Dashboard />)} />
              <Route path='/customers/' page={page} component={Customers} />
              <Route path='/countries' page={page} component={Countries} />
              <Route path='/desk' page={page} component={() => renderSpaced(<Desk />)} />
              <Route path='/catalog' page={page} component={Catalog} />
              <Route path='/create-card' page={page} component={CreateCard} />
            </Switch>
            </main>
            <footer className={classes.footer}>
              {/* <Copyright /> */}
            </footer>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);
