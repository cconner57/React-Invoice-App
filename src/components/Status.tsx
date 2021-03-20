import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { darkColors, lightColors, colors, H3Alt } from '../Styles';

interface ColorProps {
	accent: string;
	colortheme: boolean;
}

const Status = ({ status }) => {
	const colorTheme = useSelector(
		(state: { themeChange: { theme: boolean } }) => state.themeChange
	);

	return (
		<Container accent={status} colortheme={colorTheme.theme}>
			&#9679;
			<H3Alt>{status}</H3Alt>
		</Container>
	);
};

export default Status;

const Container = styled.div<ColorProps>`
	min-height: 40px;
	width: 104px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	color: ${({ accent, colortheme }) =>
		accent === 'paid'
			? `${colors.paidText}`
			: accent === 'pending'
			? `${colors.pendingText}`
			: colortheme
			? `${darkColors.draftText}`
			: `${lightColors.draftText}`};
	background-color: ${({ accent, colortheme }) =>
		accent === 'paid'
			? colortheme
				? `${darkColors.paidBackground}`
				: `${lightColors.paidBackground}`
			: accent === 'pending'
			? colortheme
				? `${darkColors.pendingBackground}`
				: `${lightColors.pendingBackground}`
			: accent === 'draft'
			? colortheme
				? `${darkColors.draftBackground}`
				: `${lightColors.draftBackground}`
			: undefined};
	h3 {
		margin-left: 8px;
		text-transform: capitalize;
	}
`;
