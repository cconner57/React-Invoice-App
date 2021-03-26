import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { H2Alt, Button2, Button3 } from '../Styles';
import { ThemeChange } from '../Interfaces';

import InputForm from './InputForm';

const EditItem = ({ invoice }: any) => {
	const [editInvoice, setEditInvoice] = useState(invoice);

	const colortheme = useSelector((state: ThemeChange) => state.themeChange);

	return (
		<Container>
			<H2Alt className='Title'>Edit #{invoice}</H2Alt>
			<form onSubmit={(e) => e.preventDefault()}>
				<InputForm invoice={editInvoice} setInvoice={setEditInvoice} />
				<div className='ButtonGroup'>
					<Button3 colortheme={colortheme.theme}>Cancel</Button3>
					<Button2>Save Changes</Button2>
				</div>
			</form>
		</Container>
	);
};

export default EditItem;

const Container = styled.div`
	height: 100vh;
	width: 570px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	.ButtonGroup {
		width: 504px;
		margin-top: 39px;
		margin-bottom: 60px;
		display: flex;
		justify-content: flex-end;
		button:last-child {
			margin-left: 8px;
		}
	}
`;
