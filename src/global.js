import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*, body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	}

	html, body {
		overflow: hidden;
	}
`