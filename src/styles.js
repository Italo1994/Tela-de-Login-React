import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #272936;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: 'Open Sans', sans-serif;
`

export const Content = styled.div`
	background-color: rgba(0, 0, 0, .2);
	min-width: 390px;
	height: auto;

	padding: 40px 20px;
	border: 0;
	border-radius: 5px;
`

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 60px;

	padding: 10px 0;

	h1 {
		width: 100%;
		color: #FFF;

		font-family: 'Open Sans', sans-serif;
		font-size: 2rem; // 1.75rem = 28px
		font-weight: 700;
		text-align: center;
		
	}

	h3 {
		color: #525461;

		font-size: 1.125rem;
		font-weight: 500;
	}

	p {
		color: #525461;
		
		font-size: 1rem;
	}
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`