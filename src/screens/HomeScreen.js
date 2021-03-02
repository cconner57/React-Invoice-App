import React, { useState } from 'react';
import styled from 'styled-components';

import InvoiceBar from '../components/InvoiceBar';
import InvoiceItem from '../components/InvoiceItem';

import InvoiceData from '../data.json';

const HomeScreen = () => {
	const [filter, setFilter] = useState(undefined);
	const [invoices, setInvoices] = useState(0);

	return (
		<Container>
			<InvoiceBar total={invoices} filter={filter} setFilter={setFilter} />
			<div className='InvoiceList'>
				{filter === undefined
					? InvoiceData.map((item) => <InvoiceItem key={item.id} item={item} />)
					: InvoiceData.filter(
							(data) => data.status === filter
					  ).map((item, key) => <InvoiceItem key={key} item={item} />)}
			</div>
		</Container>
	);
};

export default HomeScreen;

const Container = styled.div`
	height: 100vh;
	width: 730px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	.InvoiceList {
		overflow-y: scroll;
	}
`;
