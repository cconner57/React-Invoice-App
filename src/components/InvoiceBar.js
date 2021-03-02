import React, { useState } from 'react';
import styled from 'styled-components';
import { H1, Body1, Button1, H3Alt, colors } from '../Styles';

import Arrow from '../images/icon-arrow-down.svg';
import Plus from '../images/icon-plus.svg';

const InvoiceBar = ({ total, filter, setFilter }) => {
	const [toggle, setToggle] = useState(false);

	return (
		<Container>
			<div>
				<H1>Invoices</H1>
				<Body1>{total > 0 ? `There are ${total} total` : 'No'} invoices</Body1>
			</div>
			<Options>
				<Body1 onClick={() => setToggle(!toggle)}>
					Filter by status <img src={Arrow} alt='arrow down' />
				</Body1>
				{toggle && (
					<Checkboxes>
						<label htmlFor='draft'>
							<input
								type='checkbox'
								id='draft'
								onChange={(e) =>
									e.target.checked ? setFilter('draft') : setFilter(undefined)
								}
								checked={filter === 'draft' ? true : false}
							/>
							Draft
						</label>
						<label htmlFor='pending'>
							<input
								type='checkbox'
								id='pending'
								onChange={(e) =>
									e.target.checked ? setFilter('pending') : setFilter(undefined)
								}
								checked={filter === 'pending' ? true : false}
							/>
							Pending
						</label>
						<label htmlFor='paid'>
							<input
								type='checkbox'
								id='paid'
								onChange={(e) =>
									e.target.checked ? setFilter('paid') : setFilter(undefined)
								}
								checked={filter === 'paid' ? true : false}
							/>
							Paid
						</label>
					</Checkboxes>
				)}
				<Button1>
					<img src={Plus} alt='Add Invoice' />
					<H3Alt>New Invoice</H3Alt>
				</Button1>
			</Options>
		</Container>
	);
};

export default InvoiceBar;

const Container = styled.div`
	height: 59px;
	width: 730px;
	margin: 72px 0 65px;
	display: flex;
	justify-content: space-between;
	h1 + p {
		color: ${colors.accent};
	}
`;

const Options = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	p {
		color: ${colors.darkText};
		font-weight: 700;
		user-select: none;
		cursor: pointer;
	}
	p > img {
		margin-left: 16px;
	}
	button {
		margin-left: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		img {
			height: 32px;
			width: 32px;
			margin-left: 8px;
			padding: 9px;
			border-radius: 50%;
			background-color: ${colors.white};
		}
		h3 {
			margin-right: 15px;
		}
	}
`;

const Checkboxes = styled.div`
	height: 128px;
	width: 192px;
	padding: 20px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: absolute;
	top: 55px;
	left: -40px;
	border-radius: 8px;
	background-color: hsl(0, 0%, 100%);
	box-shadow: 0px 10px 20px hsla(232, 37.7%, 45.3%, 0.25);
	label {
		margin-left: 24px;
		user-select: none;
		cursor: pointer;
		input {
			margin-right: 13px;
			user-select: none;
			cursor: pointer;
		}
	}
`;
