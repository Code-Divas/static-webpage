import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import picture from '../assets/picture.jpg';

import { Element } from 'react-scroll';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import DialogSkill from '../components/DialogSkill';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import PublicIcon from '@material-ui/icons/Public';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';

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
		maxWidth: '300px',
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
	},
	contactIcon: {
		marginRight: '1rem'
	},
	contactWrapper: {
		display: 'flex',
		flexDirection: 'column'
	},
	contactSection: {
		display: 'flex',
		flexDirection: 'row',
		padding: '0.5rem',
		alignItems: 'center'
	}
});

const Intro = () => {
	const classes = useStyles();

	return (
		<Element id="about">
			<Container className={classes.container}>
				<Grid container className={classes.wrapper}>
					<Grid item xs={12} sm={6} className={classes.picContainer}>
						<img className={classes.picture} src={picture} alt="aline" />
					</Grid>
					<Grid className={classes.contactWrapper} item xs={12} sm={6}>
						<div className={classes.contactSection}>
							<WhatsAppIcon className={classes.contactIcon} color="secondary" />
							<Typography color="primary" variant="body1">
								+5561981248555
							</Typography>
						</div>
						<div className={classes.contactSection}>
							<EmailIcon className={classes.contactIcon} color="secondary" />
							<Typography color="primary" variant="body1">
								alinemcsantoro@gmail.com
							</Typography>
						</div>

						<Link href="https://www.linkedin.com/in/aline-santoro-88564a15b/">
							<div className={classes.contactSection}>
								<LinkedInIcon className={classes.contactIcon} color="secondary" />
								<Typography color="primary" variant="body1">
									https://www.linkedin.com/in/aline-santoro-88564a15b/
								</Typography>
							</div>
						</Link>

						<Link href="https://github.com/SantoroA">
							<div className={classes.contactSection}>
								<GitHubIcon className={classes.contactIcon} color="secondary" />
								<Typography color="primary" variant="body1">
									https://github.com/SantoroA
								</Typography>
							</div>
						</Link>
					</Grid>
					<Typography paragraph variant="h4" color="secondary">
						Soft Skills
					</Typography>
					<Grid item xs={12} className={classes.section}>
						<Typography>(Hover to see more!)</Typography>
						<div className={classes.iconWrapper}>
							<DialogSkill
								skill={{
									title: 'Fast Learner',
									description:
										'I have an excelent capacity to retain new things and an assimilate new ideas efficiently'
								}}
								icon={<MenuBookIcon className={classes.icon} color="secondary" />}
							/>
							<DialogSkill
								skill={{
									title: 'Good Communication',
									description:
										'Strong written and oral skills, ability to listen and ask the right questions'
								}}
								icon={<WbIncandescentIcon className={classes.icon} color="primary" />}
							/>
							<DialogSkill
								skill={{
									title: 'Proactive',
									description: "I don't sit back and wait for things to happen, I make them happen"
								}}
								icon={<DirectionsRunIcon className={classes.icon} color="secondary" />}
							/>
						</div>
						<div className={classes.iconWrapper}>
							<DialogSkill
								skill={{
									title: 'Problem Solver',
									description:
										'I have an aptitude for creative and effective, sometimes out-of-the-box, solutions'
								}}
								icon={<ReportProblemIcon className={classes.icon} color="primary" />}
							/>
							<DialogSkill
								skill={{
									title: 'Global Perspective',
									description:
										'Having experienced many different cultures, I can think about a situation as it relates to the rest of the world'
								}}
								icon={<PublicIcon className={classes.icon} color="secondary" />}
							/>
							<DialogSkill
								skill={{
									title: 'Polyglot',
									description: 'Native English, Native Portuguese and Intermediate Italian'
								}}
								icon={<LanguageIcon className={classes.icon} color="primary" />}
							/>
						</div>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
};

export default Intro;
