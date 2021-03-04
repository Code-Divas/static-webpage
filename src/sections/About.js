import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import { Element } from 'react-scroll';

const useStyles = makeStyles({
	container: {
		marginTop: '1rem',
		padding: '2rem',
		display: 'flex',
		flexDirection: 'column'
	},

	wrapper: {
		display: 'flex',
		marginTop: '1rem',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '90%',
		marginTop: '3rem',
		alignSelf: 'center'
	},
	icon: {
		marginRight: '1rem'
	}
});

const About = () => {
	const classes = useStyles();
	const { t } = useTranslation();
	return (
		<Element id="contact">
			<Container className={classes.container}>
				<Grid item sm={12}>
					<Typography paragraph variant="h4" color="secondary">
						{t('ABOUT.1')}
					</Typography>
					<Typography paragraph variant="body1">
						I’m currently assigned as Team Leader and Front-end React Developer in a healthcare startup,
						using Jira as the software to create and manage sprints. My passion is working with designers to
						develop applications with better User Experience. As Team Leader, I work closely with designers,
						back-end developers and interns. I am a proactive, a fast learner and have good team spirit.
					</Typography>
				</Grid>
			</Container>
		</Element>
	);
};

export default About;
