import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import picture from '../assets/picture.jpg';
import { Element } from 'react-scroll';
import DialogSkill from '../components/DialogSkill';
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
	const [ isDialogOpen, setIsDialogOpen ] = useState(false);
	const [ skill, setSkill ] = useState('');
	return (
		<Element id="about">
			<Container className={classes.container}>
				<Grid container className={classes.wrapper}>
					<Grid item sm={6} xs={12} className={classes.picContainer}>
						<img className={classes.picture} src={picture} alt="aline" />
					</Grid>
					<Grid item sm={6} xs={12} className={classes.section}>
						<Typography>(Click to see more!)</Typography>
						<div className={classes.iconWrapper}>
							<IconButton
								onClick={() => {
									setIsDialogOpen(true);
									setSkill('Problem Solver');
								}}
							>
								<ReportProblemIcon className={classes.icon} color="primary" />
							</IconButton>
							<IconButton
								onClick={() => {
									setIsDialogOpen(true);
									setSkill('Global Perspective');
								}}
							>
								<PublicIcon className={classes.icon} color="primary" />
							</IconButton>
						</div>
						<div className={classes.iconWrapper}>
							<IconButton
								onClick={() => {
									setIsDialogOpen(true);
									setSkill('Fast Learner');
								}}
							>
								<MenuBookIcon className={classes.icon} color="primary" />
							</IconButton>
							<IconButton
								onClick={() => {
									setIsDialogOpen(true);
									setSkill('Proactive');
								}}
							>
								<DirectionsRunIcon className={classes.icon} color="primary" />
							</IconButton>
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
			<DialogSkill isOpen={isDialogOpen} skill={skill} close={() => setIsDialogOpen(false)} />
		</Element>
	);
};

export default About;
