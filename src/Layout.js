import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import logo from './assets/logo.png';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#f9eaef'
	},
	image: {
		width: '100%',
		marginTop: '3rem'
	}
}));

const Layout = ({ children }) => {
	const classes = useStyles();

	// const scrollToTop = () => {
	// 	scroll.scrollToTop();
	// };
	return (
		<div className={classes.root}>
			<Navbar />
			<Container maxWidth="md">{children}</Container>
			<img className={classes.image} src={logo} alt="logo" />
		</div>
	);
};

export default Layout;
