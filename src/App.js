import Navbar from './components/Navbar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';
import 'fontsource-josefin-sans';

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Josefin Sans',
		fontSize: 14
	}
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<About />
			<Portfolio />
			<Contact />
		</ThemeProvider>
	);
};

export default App;
