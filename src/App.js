import Navbar from './components/Navbar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Poppins from 'typeface-poppins';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';

const THEME = createMuiTheme({
	typography: {
		fontFamily: Poppins
	}
});

const App = () => {
	return (
		<ThemeProvider theme={THEME}>
			<Navbar />
			<About />
			<Portfolio />
			<Contact />
		</ThemeProvider>
	);
};

export default App;
