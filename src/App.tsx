import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import Nav from './components/Nav';
import HomeScreen from './screens/HomeScreen';
import InvoiceScreen from './screens/InvoiceScreen';

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<Nav />
			<Switch>
				<Route path='/:id' component={InvoiceScreen} />
				<Route path='/' exact component={HomeScreen} />
			</Switch>
			<GlobalStyle />
		</Router>
	);
};

export default App;
