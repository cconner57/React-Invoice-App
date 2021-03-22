import React, { useState } from 'react';
import styled from 'styled-components';
import {
	lightColors,
	darkColors,
	H1,
	Body1,
	Button1,
	H3Alt,
	colors,
} from '../Styles';

import MenuModal from './MenuModal';
import FilterInvoices from './FilterInvoices';
import CreateItem from './CreateItem';

const Arrow = require('../images/icon-arrow-down.svg') as string;
const Plus = require('../images/icon-plus.svg') as string;

interface InvoiceBarProps {
	colortheme: boolean;
	total: number;
	filter: string;
	setFilter: Function;
}

interface ThemeProps {
	colortheme: boolean;
}

const InvoiceBar = ({
	colortheme,
	total,
	filter,
	setFilter,
}: InvoiceBarProps) => {
	const [toggleFilter, setToggleFilter] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<Container colortheme={colortheme}>
			<div>
				<H1>Invoices</H1>
				<Body1>
					{filter === 'draft'
						? `There are ${total} draft`
						: filter === 'pending'
						? `There are ${total} pending`
						: filter === 'paid'
						? `There are ${total} paid`
						: total > 0
						? `There are ${total} total`
						: 'No'}{' '}
					invoices
				</Body1>
			</div>
			<Options colortheme={colortheme}>
				<Body1 onClick={() => setToggleFilter(!toggleFilter)}>
					Filter by status <img src={Arrow} alt='arrow down' />
				</Body1>
				{toggleFilter && (
					<FilterInvoices
						setToggleFilter={setToggleFilter}
						filter={filter}
						setFilter={setFilter}
						colorTheme={colortheme}
					/>
				)}
				<Button1 onClick={() => setToggleMenu(!toggleMenu)}>
					<img src={Plus} alt='Add Invoice' />
					<H3Alt>New Invoice</H3Alt>
				</Button1>
			</Options>
			{toggleMenu && (
				<MenuModal setToggleMenu={setToggleMenu}>
					<CreateItem />
				</MenuModal>
			)}
		</Container>
	);
};

export default InvoiceBar;

const Container = styled.div<ThemeProps>`
	width: 730px;
	margin: 72px 0 3rem;
	display: relative;
	z-index: 0;
	display: flex;
	justify-content: space-between;
	h1 {
		color: ${({ colortheme }) =>
			colortheme ? `${darkColors.text}` : `${lightColors.text}`};
	}
	h1 + p {
		padding-top: 2px;
		font-size: 0.9rem;
		color: ${({ colortheme }) =>
			colortheme ? `${darkColors.altText}` : `${lightColors.altText}`};
	}
`;

const Options = styled.div<ThemeProps>`
	display: flex;
	align-items: center;
	position: relative;
	p {
		color: ${({ colortheme }) =>
			colortheme ? `${darkColors.text}` : `${lightColors.text}`};
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
			margin-right: 25px;
		}
	}
`;
