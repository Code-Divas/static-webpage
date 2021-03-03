import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles({
	container: {
		padding: '2rem'
	}
});

const DialogSkill = ({ isOpen, close, skill }) => {
	const classes = useStyles();

	return (
		<Dialog open={isOpen} onClose={close}>
			<div className={classes.container}>
				<Typography variant="h5">{skill}</Typography>
			</div>
		</Dialog>
	);
};

export default DialogSkill;
