import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import FlagBr from '../custonIcons/FlagBr';
import FlagUk from '../custonIcons/FlagUk';
import 'fontsource-josefin-sans';

const useStyles = makeStyles({
	toolbar: {
		justifyContent: 'center'
	},
	link: {
		marginRight: 10,
		color: '#2C0F2C',
		marginLeft: 10,
		'&:hover': {
			cursor: 'pointer'
		},
		fontSize: '1.3rem'
	},
	countrySelect: {
		width: '3rem',
		marginRight: '1rem',
		alignItems: 'center'
	},
	formControl: {
		marginLeft: '1rem'
	}
});

export default function Navbar() {
	const [ lang, setLang ] = useState('en_UK');
	const classes = useStyles();
	const { i18n, t } = useTranslation();
	const handleClick = (lang) => {
		i18n.changeLanguage(lang);
	};
	const handleChange = (event) => {
		setLang(event.target.value);
	};
	return (
		<AppBar color="primary" position="fixed">
			<Toolbar className={classes.toolbar}>
				<Link
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					offset={-70}
					style={{ fontFamily: 'Josefin Sans' }}
					duration={500}
					className={classes.link}
				>
					Intro
				</Link>
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					style={{ fontFamily: 'Josefin Sans' }}
					offset={-70}
					duration={500}
					className={classes.link}
				>
					{t('ABOUT.2')}
				</Link>
				<Link
					activeClass="active"
					to="portfolio"
					spy={true}
					smooth={true}
					offset={-70}
					style={{ fontFamily: 'Josefin Sans' }}
					duration={500}
					className={classes.link}
				>
					Portfolio
				</Link>
				<FormControl className={classes.formControl}>
					<Select className={classes.countrySelect} disableUnderline value={lang} onChange={handleChange}>
						<MenuItem value={'en_UK'} onClick={() => handleClick('en')}>
							<FlagUk />
						</MenuItem>

						<MenuItem value={'pt_BR'} onClick={() => handleClick('pt')}>
							<FlagBr />
						</MenuItem>
					</Select>
				</FormControl>
			</Toolbar>
		</AppBar>
	);
}
