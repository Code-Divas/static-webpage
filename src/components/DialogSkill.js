import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
	container: {
		padding: '1rem',
		borderRadius: '10px',
		backgroundColor: 'white'
	}
});

const DialogSkill = ({ skill, icon }) => {
	const classes = useStyles();
	const [ isOpen, setIsOpen ] = useState(false);

	return (
		<div>
			{isOpen ? (
				<div onMouseLeave={() => setIsOpen(false)} className={classes.container}>
					<Typography color="primary" variant="h5">
						{skill.title}
					</Typography>
					<Typography variant="subtitle1">{skill.description}</Typography>
				</div>
			) : (
				<IconButton onMouseEnter={() => setIsOpen(true)}>{icon}</IconButton>
			)}
		</div>
	);
};

export default DialogSkill;
