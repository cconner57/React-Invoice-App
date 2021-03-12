import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lightColors, darkColors, H3, H3Alt, Body1 } from '../Styles';
import { addComma, modifyDate } from '../Utility';

import Status from './Status';

import rightArrow from '../images/icon-arrow-right.svg';

const InvoiceItem = ({ colortheme, item }) => {
	const { id, paymentDue, clientName, total, status } = item;

	return (
		<Container to={`/${id}`} colortheme={colortheme}>
			<H3Alt className='ID'>
				<span>#</span>
				{id}
			</H3Alt>
			<Body1>{modifyDate(paymentDue)}</Body1>
			<Body1>{clientName}</Body1>
			<H3>${addComma(total)}</H3>
			<Status status={status} />
			<img src={rightArrow} alt='Right Arrow' />
		</Container>
	);
};

export default InvoiceItem;

const Container = styled(Link)`
	min-height: 72px;
	max-width: 730px;
	margin-bottom: 16px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 8px;
	text-decoration: none;
	background-color: ${({ colortheme }) =>
		colortheme
			? `${darkColors.accentBackground}`
			: `${lightColors.accentBackground}`};
	box-shadow: ${({ colortheme }) =>
		colortheme
			? `0px 10px 10px -10px ${darkColors.shadow}`
			: `0px 10px 10px -10px ${lightColors.shadow}`};
	&:hover {
		border: 1px solid hsl(252, 94%, 67%);
	}
	.ID {
		margin: 0 43px 0 32px;
	}
	.ID, p + h3 {
		color: ${({ colortheme }) =>
			colortheme ? `${darkColors.text}` : `${lightColors.text}`};
	}
	span,
	p {
		color: ${({ colortheme }) =>
			colortheme ? `${darkColors.altText}` : `${lightColors.altText}`};
	}
	p + p {
		width: 150px;
		margin-left: 40px;
	}
	p + h3 {
		width: 120px;
		margin-right: 40px;
	}
	img {
		margin: 0 24px 0 20px;
	}
`;
