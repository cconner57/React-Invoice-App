import React, { useState } from 'react';
import styled from 'styled-components';
import { H1, Body1, Button1, H3Alt, colors } from '../Styles';

import MenuModal from '../components/MenuModal';
import FilterInvoices from '../components/FilterInvoices';
import CreateItem from '../components/CreateItem';

import Arrow from '../images/icon-arrow-down.svg';
import Plus from '../images/icon-plus.svg';

const InvoiceBar = ({ total, filter, setFilter }) => {
	const [toggleFilter, setToggleFilter] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<Container>
			<div>
				<H1>Invoices</H1>
				<Body1>{total > 0 ? `There are ${total} total` : 'No'} invoices</Body1>
			</div>
			<Options>
				<Body1 onClick={() => setToggleFilter(!toggleFilter)}>
					Filter by status <img src={Arrow} alt='arrow down' />
				</Body1>
				{toggleFilter && (
					<FilterInvoices
						setToggleFilter={setToggleFilter}
						filter={filter}
						setFilter={setFilter}
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

const Container = styled.div`
	width: 730px;
	margin: 72px 0 65px;
	display: relative;
	z-index: 0;
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
