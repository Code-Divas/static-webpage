import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { Link } from 'react-scroll';
import 'fontsource-josefin-sans';

const useStyles = makeStyles({
	root: {
		marginTop: '10rem'
	}
});

const ThemeChooser = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Typography>Select a theme</Typography>
		</Container>
	);
};

export default ThemeChooser;
