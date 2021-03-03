import React from 'react';
import styled from 'styled-components';
import { H3Alt } from '../Styles';

const Status = ({ status }) => {
	return (
		<Container accent={status}>
			&#9679;
			<H3Alt>{status}</H3Alt>
		</Container>
	);
};

export default Status;

const Container = styled.div`
	min-height: 40px;
	width: 104px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	color: ${({ accent }) =>
			accent === 'paid'
				? 'hsl(160,67%,52%)'
				: accent === 'pending'
				? 'hsl(34, 100%, 50%)'
				: 'hsl(231,20%,27%)'};
	background-color: ${({ accent }) =>
		accent === 'paid'
			? 'hsl(162, 71%, 97%)'
			: accent === 'pending'
			? 'hsl(30, 70%, 96%)'
			: 'hsl(0,0%,59%)'};
	h3 {
		margin-left: 8px;
		text-transform: capitalize;
		color: ${({ accent }) =>
			accent === 'paid'
				? 'hsl(160,67%,52%)'
				: accent === 'pending'
				? 'hsl(34, 100%, 50%)'
				: 'hsl(231,20%,27%)'};
	}
`;
