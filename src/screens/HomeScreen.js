import React, { useState } from 'react';
import styled from 'styled-components';

import InvoiceBar from '../components/InvoiceBar';

const HomeScreen = () => {
	const [filter, setFilter] = useState(null);
	const [invoices, setInvoices] = useState(0);
	return (
		<Container>
			<InvoiceBar total={invoices} filter={filter} setFilter={setFilter} />
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
`;
