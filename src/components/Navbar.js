import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
	navbar: {
		flexGrow: 1,
		backgroundColor: '#fff',
		color: 'black'
	},
	toolbar: {
		justifyContent: 'center'
	},
	link: {
		marginRight: 10,
		marginLeft: 10
	}
}));

export default function ButtonAppBar() {
	const classes = useStyles();
	// const scrollToTop = () => {
	// 	scroll.scrollToTop();
	// };
	return (
		<div>
			<AppBar className={classes.navbar} position="fixed">
				<Toolbar className={classes.toolbar}>
					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={-70}
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
						offset={-70}
						duration={500}
						className={classes.link}
					>
						Contact
					</Link>

					{/* <Typography>Hello</Typography> */}
				</Toolbar>
			</AppBar>
		</div>
	);
}
