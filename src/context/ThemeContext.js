import createDataContext from './createDataContext';

const themeReducer = (state, action) => {
	switch (action.type) {
		case 'set_theme':
			return { theme: action.payload };
		default:
			return { theme: 'hogwarts' };
	}
};

const changeTheme = (dispatch) => (theme) => {
	dispatch({ type: 'set_theme', payload: theme });
};

export const { Provider, Context } = createDataContext(themeReducer, { changeTheme }, { theme: 'hogwarts' });
