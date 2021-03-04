import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-scroll';
import 'fontsource-josefin-sans';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		justifyContent: 'center'
	},
	link: {
		marginRight: 10,
		color: '#2C0F2C',
		marginLeft: 10,
		'&:hover': {
			cursor: 'pointer'
		},
		fontSize: '1.3rem'
	}
}));

export default function Navbar() {
	const classes = useStyles();

	// const scrollToTop = () => {
	// 	scroll.scrollToTop();
	// };
	return (
		<AppBar color="primary" position="fixed">
			<Toolbar className={classes.toolbar}>
				<Link
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					offset={-70}
					style={{ fontFamily: 'Josefin Sans' }}
					duration={500}
					className={classes.link}
				>
					About
				</Link>
				<Link
					activeClass="active"
					to="portfolio"
					spy={true}
					smooth={true}
					offset={-70}
					style={{ fontFamily: 'Josefin Sans' }}
					duration={500}
					className={classes.link}
				>
					Portfolio
				</Link>
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					style={{ fontFamily: 'Josefin Sans' }}
					offset={-70}
					duration={500}
					className={classes.link}
				>
					Contact
				</Link>

				{/* <Typography>Hello</Typography> */}
			</Toolbar>
		</AppBar>
	);
}
