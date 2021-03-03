import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import beer from '../assets/beer.svg';
import color from '../assets/color.svg';
import weather from '../assets/weather.svg';
import invest from '../assets/invest.svg';
import tarot from '../assets/tarot.svg';

import Grid from '@material-ui/core/Grid';
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
		marginTop: '2rem',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},

	linkImage: {
		width: '100%'
	},
	linkWrapper: {
		padding: '2rem',
		textAlign: 'center'
	}
});

const Portfolio = () => {
	const classes = useStyles();
	return (
		<Element id="portfolio">
			<Container className={classes.container}>
				<Grid item sm={12}>
					<Typography paragraph variant="h4" color="primary">
						Portfolio
					</Typography>
				</Grid>
				<Grid container className={classes.wrapper}>
					<Grid className={classes.linkWrapper} item xs={6} sm={4}>
						<Link href="https://hub-invest.netlify.app/">
							<img className={classes.linkImage} alt="hub-invest" src={invest} />
						</Link>
						<Typography variant="h5" color="primary">
							InvestHub
						</Typography>
					</Grid>
					<Grid className={classes.linkWrapper} item xs={6} sm={4}>
						<Link href="https://mestre-cervejeiro.netlify.app/">
							<img className={classes.linkImage} alt="mestre-cervejeiro" src={beer} />
						</Link>
						<Typography variant="h5" color="primary">
							Mestre Cervejeiro
						</Typography>
					</Grid>
					<Grid className={classes.linkWrapper} item xs={6} sm={4}>
						<Link href="https://colorhabit.netlify.app/">
							<img className={classes.linkImage} alt="color-picker" src={color} />
						</Link>
						<Typography variant="h5" color="primary">
							ColorHabit
						</Typography>
					</Grid>
					<Grid className={classes.linkWrapper} item xs={6} sm={4}>
						<Link href="https://cloudgevity.netlify.app/">
							<img className={classes.linkImage} alt="weather" src={weather} />
						</Link>
						<Typography variant="h5" color="primary">
							Cloudgevity
						</Typography>
					</Grid>
					<Grid className={classes.linkWrapper} item xs={6} sm={4}>
						<Link href="https://tarot-oracle.netlify.app/">
							<img className={classes.linkImage} alt="oracle" src={tarot} />
						</Link>
						<Typography variant="h5" color="primary">
							Oracle
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
};

export default Portfolio;
