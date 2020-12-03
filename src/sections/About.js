import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Element } from 'react-scroll';

const useStyles = makeStyles({
	container: {
		marginTop: 50,
		padding: 40,
		display: 'flex',
		flexDirection: 'column'
	},
	paragraph: {
		marginBottom: 50
	}
});

const About = () => {
	const classes = useStyles();
	return (
		<Element id="about">
			<Container className={classes.container}>
				<Typography variant="h5">About</Typography>
				<Typography className={classes.paragraph} variant="body1">
					Roof party prism synth dolore. Snackwave wolf vaporware sustainable. Labore raw denim do consequat.
					Aute small batch meditation forage lumbersexual microdosing id. Brooklyn art party excepteur lyft
					8-bit est roof party neutra four loko. Est duis poke, neutra tote bag tilde pabst vape single-origin
					coffee deserunt paleo. Organic quinoa stumptown, try-hard XOXO pok pok mustache bicycle rights kogi
					listicle veniam tumeric cupidatat humblebrag poke. Sint iceland poke shoreditch, post-ironic
					gastropub aute pour-over labore. Dreamcatcher ut 90's ugh.
				</Typography>
				<Typography className={classes.paragraph} variant="body1">
					Fixie ea pabst, raclette bushwick food truck aesthetic umami. Tbh poke PBR&B keffiyeh ullamco dolor
					nostrud cupidatat ut mollit. Wayfarers live-edge adipisicing, yr lumbersexual pariatur in aesthetic.
					Minim crucifix cornhole aliqua. Normcore in nostrud consectetur tacos everyday carry butcher.
					Pour-over listicle selvage organic kale chips blog hella. Dreamcatcher leggings meditation marfa
					YOLO, qui waistcoat ut cillum raw denim glossier freegan. Adaptogen godard eiusmod la croix 3 wolf
					moon, fashion axe quis gluten-free. Narwhal trust fund normcore glossier. Poke irony VHS food truck
					squid literally labore chia man bun taxidermy blue bottle ut.
				</Typography>
				<Typography className={classes.paragraph} variant="body1">
					Fixie ea pabst, raclette bushwick food truck aesthetic umami. Tbh poke PBR&B keffiyeh ullamco dolor
					nostrud cupidatat ut mollit. Wayfarers live-edge adipisicing, yr lumbersexual pariatur in aesthetic.
					Minim crucifix cornhole aliqua. Normcore in nostrud consectetur tacos everyday carry butcher.
					Pour-over listicle selvage organic kale chips blog hella. Dreamcatcher leggings meditation marfa
					YOLO, qui waistcoat ut cillum raw denim glossier freegan. Adaptogen godard eiusmod la croix 3 wolf
					moon, fashion axe quis gluten-free. Narwhal trust fund normcore glossier. Poke irony VHS food truck
					squid literally labore chia man bun taxidermy blue bottle ut. Roof party prism synth dolore.
					Snackwave wolf vaporware sustainable. Labore raw denim do consequat. Aute small batch meditation
					forage lumbersexual microdosing id. Brooklyn art party excepteur lyft 8-bit est roof party neutra
					four loko. Est duis poke, neutra tote bag tilde pabst vape single-origin coffee deserunt paleo.
					Organic quinoa stumptown, try-hard XOXO pok pok mustache bicycle rights kogi listicle veniam tumeric
					cupidatat humblebrag poke. Sint iceland poke shoreditch, post-ironic gastropub aute pour-over
					labore. Dreamcatcher ut 90's ugh.
				</Typography>
			</Container>
		</Element>
	);
};

export default About;
