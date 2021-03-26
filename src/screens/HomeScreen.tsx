import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listInvoices } from '../actions/invoiceActions';
import Loader from '../components/Loader';
import styled from 'styled-components';
import { lightColors, darkColors, H2, Body1, Warning } from '../Styles';
import { ThemeChange, InvoiceList } from '../Interfaces';

import InvoiceBar from '../components/InvoiceBar';
import InvoiceItem from '../components/InvoiceItem';

const Empty = require('../images/illustration-empty.svg') as string;

const HomeScreen = () => {
	const [filter, setFilter] = useState('');

	const dispatch = useDispatch();

	const colortheme = useSelector((state: ThemeChange) => state.themeChange);

	const invoiceList = useSelector((state: InvoiceList) => state.invoiceList);
	const { loading, error, invoices } = invoiceList;

	useEffect(() => {
		dispatch(listInvoices());
	}, [dispatch]);

	return (
		<Container colortheme={colortheme.theme}>
			<InvoiceBar
				colortheme={colortheme.theme}
				total={
					filter
						? invoices.filter(
								(data: { status: string }) => data.status === filter
						  ).length
						: invoices.length
				}
				filter={filter}
				setFilter={setFilter}
			/>
			{loading ? (
				<Loader />
			) : error ? (
				<Warning>{error}</Warning>
			) : invoices.length === 0 ? (
				<div className='EmptyInvoices'>
					<img src={Empty} alt='No invoices' />
					<H2>There is nothing here</H2>
					<Body1>
						Create an invoice by clicking the <span>New Invoice</span> button
						and get started
					</Body1>
				</div>
			) : (
				<div className='InvoiceList'>
					{filter === ''
						? invoices.map((item: any) => (
								<InvoiceItem
									key={item.id}
									item={item}
									colortheme={colortheme.theme}
								/>
						  ))
						: invoices
								.filter((data: { status: string }) => data.status === filter)
								.map((item: any, key: number) => (
									<InvoiceItem
										key={key}
										item={item}
										colortheme={colortheme.theme}
									/>
								))}
				</div>
			)}
		</Container>
	);
};

export default HomeScreen;

const Container = styled.div<{ colortheme: boolean }>`
	height: 100vh;
	width: 100vw;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ colortheme }) =>
		colortheme ? `${darkColors.background}` : `${lightColors.background}`};
	.EmptyInvoices {
		height: 341px;
		width: 242px;
		margin-top: 5rem;
		h2 {
			margin: 64px 0 24px;
			text-align: center;
			color: ${({ colortheme }) =>
				colortheme ? `${darkColors.text}` : `${lightColors.darkText}`};
		}
		p {
			width: 240px;
			padding: 0 25px;
			text-align: center;
			color: ${({ colortheme }) =>
				colortheme ? `${darkColors.text}` : `${lightColors.darkText}`};
		}
		span {
			font-weight: 700;
			font-size: 12px;
			line-height: 15px;
			letter-spacing: -0.25px;
		}
	}
	.InvoiceList {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: scroll;
		width: 92vw;
	}
`;
