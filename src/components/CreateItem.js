import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { newInvoice, createInvoice } from '../actions/invoiceActions';
import styled from 'styled-components';
import { H2Alt, Button2, Button3, Button4, Warning } from '../Styles';

import InputForm from './InputForm';

const CreateItem = () => {
	const [createInvoice, setCreateInvoice] = useState({});

	const dispatch = useDispatch();

	const invoiceState = useSelector((state) => state.invoiceNew);
	const { loading, error, invoice } = invoiceState;

	const formHandler = (e) => {
		e.preventDefault();
		console.log(e);
		// dispatch(createInvoice(createInvoice));
	};

	useEffect(() => {
		dispatch(newInvoice());
	}, [dispatch]);

	return (
		<Container>
			<H2Alt className='Title'>New Invoice</H2Alt>
			{loading ? (
				<Loader />
			) : error ? (
				<Warning>{error}</Warning>
			) : (
				<form onSubmit={formHandler}>
					<InputForm invoice={invoice} setInvoice={setCreateInvoice} />
					<div className='ButtonGroup'>
						<Button3>Discard</Button3>
						<Button4>Save as Draft</Button4>
						<Button2>Save & Send</Button2>
					</div>
				</form>
			)}
		</Container>
	);
};

export default CreateItem;

const Container = styled.div`
	height: 100vh;
	width: 570px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	}
	.ButtonGroup {
		width: 504px;
		margin-top: 30px;
		margin-bottom: 60px;
		display: flex;
		button:first-child {
			margin-right: auto;
		}
		button:last-child {
			margin-left: 8px;
		}
	}
`;
