import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { H3, H3Alt, Body1, colors, lightColors } from '../Styles';
import { addComma, modifyDate } from '../Utility';

import Status from './Status';

import rightArrow from '../images/icon-arrow-right.svg';

const InvoiceItem = ({ item }) => {
	const { id, paymentDue, clientName, total, status } = item;

	return (
		<Container to={`/${id}`}>
			<H3Alt className='ID'>
				<span>#</span>
				{id}
			</H3Alt>
			<Body1>{modifyDate(paymentDue)}</Body1>
			<Body1>{clientName}</Body1>
			<H3>${(addComma(total))}</H3>
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
	background-color: hsl(0, 0%, 100%);
	box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
	.ID {
		margin: 0 43px 0 32px;
	}
	h3 {
		color: ${lightColors.darkText};
	}
	span,
	p {
		color: ${colors.accent};
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
