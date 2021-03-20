import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
	margin: 0;
	padding: 0;
	font-size: 100%;
	box-sizing: border-box;
	vertical-align: baseline;
	font-family: 'Spartan', sans-serif;
    }

	button {
		cursor: pointer;
		border-radius: 24px;
	}
`;

export default GlobalStyle;