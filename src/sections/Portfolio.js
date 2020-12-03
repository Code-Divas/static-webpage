import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Element } from 'react-scroll';

const useStyles = makeStyles({
	container: {
		padding: 40,
		display: 'flex',
		flexDirection: 'column'
	},
	paragraph: {
		marginBottom: 50
	}
});

const Portfolio = () => {
	const classes = useStyles();
	return (
		<Element id="portfolio">
			<Container className={classes.container}>
				<Typography variant="h5">Portfolio</Typography>
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
					Direct trade narwhal trust fund vegan cliche duis et vape vaporware thundercats. Glossier vaporware
					sartorial stumptown tumblr fingerstache labore raclette bicycle rights brunch jean shorts
					exercitation photo booth incididunt ex. Forage jianbing non, locavore sriracha scenester tumeric
					offal flannel franzen hell of tattooed meh hexagon. Semiotics ugh schlitz drinking vinegar. Occaecat
					officia biodiesel irony, banh mi raclette exercitation duis ennui. Literally art party +1 typewriter
					man bun, etsy iPhone edison bulb velit consequat bushwick pinterest aesthetic.
				</Typography>
				<Typography className={classes.paragraph} variant="body1">
					Cardigan glossier bespoke austin eiusmod wolf aute yr meditation shoreditch letterpress etsy
					incididunt anim aliquip. Wayfarers pabst glossier, edison bulb bespoke voluptate gastropub blog
					distillery normcore. Af aesthetic eiusmod palo santo poke. Sartorial salvia vaporware, man braid
					kinfolk blog dreamcatcher locavore scenester pop-up pabst lumbersexual shabby chic.
				</Typography>
			</Container>
		</Element>
	);
};

export default Portfolio;
