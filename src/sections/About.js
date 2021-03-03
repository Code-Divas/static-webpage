import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import picture from '../assets/picture.jpg';
import { Element } from 'react-scroll';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles({
	container: {
		marginTop: '4rem',
		padding: '2rem',
		display: 'flex',
		flexDirection: 'column'
	},
	icon: {
		fontSize: '5rem'
	},
	iconWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: '2rem'
	},
	picture: {
		width: '100%',
		borderRadius: '50%'
	},
	picContainer: {
		padding: '2rem'
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	section: {
		textAlign: 'center'
	}
});

const About = () => {
	const classes = useStyles();
	return (
		<Element id="about">
			<Container className={classes.container}>
				<Grid container className={classes.wrapper}>
					<Grid item sm={4} className={classes.picContainer}>
						<img className={classes.picture} src={picture} alt="aline" />
					</Grid>
					<Grid item sm={8} className={classes.section}>
						<Typography>(Click to see more!)</Typography>
						<div className={classes.iconWrapper}>
							<MenuBookIcon className={classes.icon} color="primary" />
							<DirectionsRunIcon className={classes.icon} color="primary" />
							<ReportProblemIcon className={classes.icon} color="primary" />
							<PublicIcon className={classes.icon} color="primary" />
						</div>
					</Grid>
					<Grid item sm={12}>
						<Typography paragraph variant="h4" color="primary">
							About
						</Typography>
						<Typography paragraph variant="body1">
							I started my development career in 2020 and before that worked as an architect. I’m
							currently assigned as Team Leader and Front-end React Developer in a healthcare startup,
							using Jira as the software to create and manage sprints. My passion is working with
							designers to develop applications with better User Experience. As Team Leader, I work
							closely with designers, back-end developers and interns. I am a proactive, a fast learner
							and have good team spirit. Fluent in English and Portuguese with advanced Italian.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
};

export default About;
