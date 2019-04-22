import React, { Fragment } from "react";

import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap"
import { Auth } from "aws-amplify";
import "./App.css";
import logo from "./containers/Resources/logo-annimated.gif";

//Material
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {Drawer,AppBar,Toolbar,List,Typography,Divider,IconButton,Fab} from '@material-ui/core/';

//Material-icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PartnerIcon from '@material-ui/icons/Group';
import LoginIcon from '@material-ui/icons/Fingerprint';
import LogoutIcon from '@material-ui/icons/LockOpen';
import HomeIcon from '@material-ui/icons/Explore';
//Google Analytic
import ReactGA from "react-ga";
ReactGA.initialize('UA-135284465-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const drawerWidth = 170;

const styles = theme => ({
  root: {

  },
  appBar: {
	backgroundColor:"white",
	opacity:.99,
	borderBottom:"1px solid #eaeaea",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  Fab: {
	backgroundColor:"white",
  },
});


class App extends React.Component {
	constructor(props) {
	super(props);
		this.state = {
			isAuthenticating: true,
			isAuthenticated: false,
			reactGaInitialised: false,
			open: false
		};
	}
	async componentDidMount() {
		try {
			if (await Auth.currentSession()) {
			this.userHasAuthenticated(true);
			}
		}
		catch(e) {
			if (e !== 'No current user') {
				alert(e);
			}
		}
		this.setState({ isAuthenticating: false });
	}
	userHasAuthenticated = authenticated => {
		this.setState({ isAuthenticated: authenticated });
	}
	handleLogout = async event => {
		const { history } = this.props;
		await Auth.signOut();
		this.userHasAuthenticated(false);
		this.props.history.push("/login");
	}
	handleDrawerOpen = () => {
    this.setState({ open: true });
	};

	handleDrawerClose = () => {
	this.setState({ open: false });
	};


	
	render() {
		const { classes, theme } = this.props;
		const { open } = this.state;
		const childProps = {
		  isAuthenticated: this.state.isAuthenticated,
		  userHasAuthenticated: this.userHasAuthenticated
		};
		return (
			!this.state.isAuthenticating &&
			<div className="App container AppEx" >
				<Fragment>
				{this.initializeReactGA}
				<AppBar 
					position="fixed"
					elevation="0"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open,
					})}>

				<Toolbar
					disableGutters={!open}>
					<IconButton
					  color="black"
					  aria-label="Open drawer"
					  onClick={this.handleDrawerOpen}
					  className={classNames(classes.menuButton, open && classes.hide)}
					>
					  <MenuIcon />
					</IconButton>
					<Typography variant="h6" color="inherit" noWrap>
					  <Link to="/"><Typography><img src={logo} alt={"Queue"} height="50"/></Typography></Link>
					</Typography>
				</Toolbar>
				 <Drawer
					  className={classes.drawer}
					  variant="persistent"
					  anchor="left"
					  open={open}
					  classes={{
						paper: classes.drawerPaper,
					  }}
				 >
					  <div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
						  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
						</IconButton>
					  </div>
					  <Divider />
					  <List>
						<LinkContainer to="/">
							<ListItem style={{marginLeft:"15px"}}>
								<Fab className={classes.Fab} button onClick={this.handleDrawerClose} variant="extended" color="inherit">
								<ListItemIcon style={{color:"#4472c4"}}><HomeIcon/></ListItemIcon>
								<Typography variant="h5" color="black" noWrap>Nearby</Typography>
								</Fab>
							</ListItem>
						</LinkContainer>
						<LinkContainer to="/about">
						<ListItem button onClick={this.handleDrawerClose}>
								<ListItemIcon style={{marginLeft:"15px"}}><FavoriteIcon/></ListItemIcon>
								<Typography variant="h5" color="black" noWrap>Us</Typography>
						</ListItem>
						</LinkContainer>
						<LinkContainer to="/FAQ">
							<ListItem button onClick={this.handleDrawerClose}>
								<ListItemIcon style={{marginLeft:"15px"}}><ContactSupportIcon /></ListItemIcon>
								<Typography variant="h5" color="black" noWrap>FAQ</Typography>
							</ListItem>
						</LinkContainer>
						<LinkContainer to="/Partner">
							<ListItem button onClick={this.handleDrawerClose}>
									<ListItemIcon style={{marginLeft:"15px"}}><PartnerIcon /></ListItemIcon>
									<Typography variant="h5" color="black" noWrap>Partner</Typography>
							</ListItem>
						</LinkContainer>
					  </List>
					  <Divider />
					  <List>
							{this.state.isAuthenticated
							? 	<Typography variant="h5" color="black" noWrap >
									<ListItem button onClick={(event) => { this.handleLogout(); this.handleDrawerClose();}}>
									<ListItemIcon style={{marginLeft:"15px"}}><LogoutIcon /></ListItemIcon>Logout</ListItem>
								</Typography>
							: <Fragment>
							{//<LinkContainer to="/signup"><Typography variant="h5" color="black" noWrap>Signup</Typography></LinkContainer>
							}
								<LinkContainer to="/login">
								<ListItem button onClick={this.handleDrawerClose}>
									<ListItemIcon style={{marginLeft:"15px"}}><LoginIcon /></ListItemIcon>
								  <Typography variant="h5" color="black" noWrap>Login</Typography>
								</ListItem>
								</LinkContainer>
							  </Fragment>
							}
					  </List>
				</Drawer>
				</AppBar>
				</Fragment>
				<Routes childProps={childProps} />
			</div>
		);
	}
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(App));
