import React from 'react';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider as ThemeSelectProvider } from './context/ThemeContext';
import Layout from './Layout';
import 'fontsource-josefin-sans';

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Josefin Sans'
	},
	palette: {
		primary: {
			main: '#842742'
		},
		secondary: {
			main: '#276C69'
		}
	}
});

const App = () => {
	return (
		<ThemeSelectProvider>
			<ThemeProvider theme={theme}>
				<Layout>
					<About />
					<Portfolio />
					<Contact />
				</Layout>
			</ThemeProvider>
		</ThemeSelectProvider>
	);
};

export default App;
