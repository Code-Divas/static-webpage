import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import picture from '../assets/picture.jpg';
import { useTranslation } from 'react-i18next';
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
	const { t } = useTranslation();
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
						{t('SOFT_SKILLS.1')}
					</Typography>
					<Grid item xs={12} className={classes.section}>
						<Typography>({t('HOVER.1')})</Typography>
						<div className={classes.iconWrapper}>
							<DialogSkill
								skill={{
									title: `${t('FAST_LEARNER.1')}`,
									description: `${t('FAST_LEARNER.2')}`
								}}
								icon={<MenuBookIcon className={classes.icon} color="secondary" />}
							/>
							<DialogSkill
								skill={{
									title: `${t('GOOD_COMMUNICATION.1')}`,
									description: `${t('GOOD_COMMUNICATION.2')}`
								}}
								icon={<WbIncandescentIcon className={classes.icon} color="primary" />}
							/>
							<DialogSkill
								skill={{
									title: `${t('PROACTIVE.1')}`,
									description: `${t('PROACTIVE.2')}`
								}}
								icon={<DirectionsRunIcon className={classes.icon} color="secondary" />}
							/>
						</div>
						<div className={classes.iconWrapper}>
							<DialogSkill
								skill={{
									title: `${t('PROBLEM_SOLVER.1')}`,
									description: `${t('PROBLEM_SOLVER.2')}`
								}}
								icon={<ReportProblemIcon className={classes.icon} color="primary" />}
							/>
							<DialogSkill
								skill={{
									title: `${t('GLOBAL_PERSPECTIVE.1')}`,
									description: `${t('GLOBAL_PERSPECTIVE.2')}`
								}}
								icon={<PublicIcon className={classes.icon} color="secondary" />}
							/>
							<DialogSkill
								skill={{
									title: `${t('POLYGLOT.1')}`,
									description: `${t('POLYGLOT.2')}`
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
