import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logoGreen from '../assets/logoGreen.png';
import Container from '@material-ui/core/Container';
import { Element } from 'react-scroll';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

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

const Contact = () => {
	const classes = useStyles();
	return (
		<Element id="contact">
			<Container className={classes.container}>
				<Grid item sm={12}>
					<Typography paragraph variant="h4" color="secondary">
						Contact
					</Typography>
				</Grid>

				<Typography className={classes.wrapper} color="primary" variant="body1">
					<WhatsAppIcon className={classes.icon} color="secondary" /> +5561981248555
				</Typography>
				<Typography className={classes.wrapper} color="primary" variant="body1">
					<EmailIcon className={classes.icon} color="secondary" /> alinemcsantoro@gmail.com
				</Typography>
				<Typography className={classes.wrapper} color="primary" variant="body1">
					<LinkedInIcon className={classes.icon} color="secondary" /> @aline-santoro-88564a15b
				</Typography>
				<Typography className={classes.wrapper} color="primary" variant="body1">
					<GitHubIcon className={classes.icon} color="secondary" /> https://github.com/SantoroA
				</Typography>
				<img className={classes.image} src={logoGreen} alt="logo" />
			</Container>
		</Element>
	);
};

export default Contact;
