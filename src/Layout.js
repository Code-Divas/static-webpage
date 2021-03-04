import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#FAF4FA'
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
		</div>
	);
};

export default Layout;
