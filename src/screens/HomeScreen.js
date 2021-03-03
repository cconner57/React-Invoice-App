import React, { useState } from 'react';
import styled from 'styled-components';
import { H2, Body1 } from '../Styles';

import InvoiceBar from '../components/InvoiceBar';
import InvoiceItem from '../components/InvoiceItem';

import InvoiceData from '../data.json';
import Empty from '../images/illustration-empty.svg';

const HomeScreen = () => {
	const [filter, setFilter] = useState(undefined);
	const [invoices, setInvoices] = useState(5);

	return (
		<Container>
			<InvoiceBar total={invoices} filter={filter} setFilter={setFilter} />
			{invoices === 0 ? (
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
					{filter === undefined
						? InvoiceData.map((item) => (
								<InvoiceItem key={item.id} item={item} />
						  ))
						: InvoiceData.filter(
								(data) => data.status === filter
						  ).map((item, key) => <InvoiceItem key={key} item={item} />)}
				</div>
			)}
		</Container>
	);
};

export default HomeScreen;

const Container = styled.div`
	height: 100vh;
	width: 92vw;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	.EmptyInvoices {
		height: 341px;
		width: 242px;
		h2 {
			margin: 64px 0 24px;
		}
		p {
			height: 31px;
			width: 220px;
			text-align: center;
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
