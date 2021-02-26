import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import HomeScreen from './screens/HomeScreen';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
			<ScrollToTop />
			<Nav />
			<Switch>
				<Route path='/' exact component={HomeScreen} />
			</Switch>
			<GlobalStyle />
		</Router>
  );
}

export default App;
