import React from 'react';
import styled from 'styled-components';
import { H3, H3Alt, Body1, colors } from '../Styles';

import rightArrow from '../images/icon-arrow-right.svg';

const InvoiceItem = ({ item }) => {
	const { id, paymentDue, clientName, total, status } = item;

	const addComma = (price) => {
		return price.toLocaleString('en-US', { minimumFractionDigits: 0 });
	};

	const modifyDate = (date) => {
		const newDate = new Date(date + 'T00:00:00')
			.toString()
			.slice(4, 15)
			.split('');
		newDate.splice(6, 0, ',');
		return newDate.join('');
	};

	return (
		<Container accent={status}>
			<H3Alt className='ID'>
				<span>#</span>
				{id}
			</H3Alt>
			<Body1>{modifyDate(paymentDue)}</Body1>
			<Body1>{clientName}</Body1>
			<H3>${addComma(total)}</H3>
			<div className='Status'>
				&#9679;
				<H3Alt>{status}</H3Alt>
			</div>
			<img src={rightArrow} alt='Right Arrow' />
		</Container>
	);
};

export default InvoiceItem;

const Container = styled.div`
	min-height: 72px;
	min-width: 730px;
	margin-bottom: 16px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 8px;
	background: hsl(0, 0%, 100%);
	box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
	.ID {
		margin: 0 43px 0 32px;
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
	}
	.Status {
		min-height: 40px;
		width: 104px;
		margin: 0 20px 0 40px;
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
		}
	}
	img {
		margin-right: 24px;
	}
`;
