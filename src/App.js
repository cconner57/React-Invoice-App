import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import ScrollToTop from './components/ScrollToTop';

import HomeScreen from './screens/HomeScreen';
import Nav from './components/Nav';

function App() {
	return (
		<Router>
			<AppContainer>
				<ScrollToTop />
				<Nav />
				<Switch>
					<Route path='/' exact component={HomeScreen} />
				</Switch>
				<GlobalStyle />
			</AppContainer>
		</Router>
	);
}

export default App;

const AppContainer = styled.div`
	display: flex;
`;
