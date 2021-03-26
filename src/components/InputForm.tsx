import React, { useState } from 'react';
import styled from 'styled-components';
import { H3Alt, Body1, Button6, Warning } from '../Styles';

import ListItem from './FormItem';

const InputForm = ({ invoice, setInvoice }: any) => {
	const [senderAddress, setSenderAddress] = useState({});
	const [clientAddress, setClientAddress] = useState({});
	const [error, setError] = useState(false);

	const onChangeHandler = (e: any) => {
		const { name, value, dataset } = e.target;
		if (dataset.address === 'senderAddress') {
			return setSenderAddress({ ...senderAddress, [name]: value });
		}
		if (dataset.address === 'clientAddress') {
			return setClientAddress({ ...clientAddress, [name]: value });
		}
		setInvoice({
			...invoice,
			senderAddress: { ...senderAddress },
			clientAddress: { ...clientAddress },
			[name]: value,
		});
	};

	return (
		<Container>
			<div className='BillFrom'>
				<H3Alt>Bill From</H3Alt>
				<label htmlFor='street'>Street Address</label>
				<input
					type='text'
					name='street'
					id='street'
					data-address='senderAddress'
					value={invoice?.senderAddress?.street}
					onChange={onChangeHandler}
				/>
				<label htmlFor='city'>City</label>
				<input
					type='text'
					name='city'
					id='city'
					data-address='senderAddress'
					value={invoice?.senderAddress?.city}
					onChange={onChangeHandler}
				/>
				<label htmlFor='postalCode'>Post Code</label>
				<input
					type='text'
					name='postalCode'
					id='postalCode'
					data-address='senderAddress'
					value={invoice?.senderAddress?.postCode}
					onChange={onChangeHandler}
				/>
				<label htmlFor='country'>Country</label>
				<input
					type='text'
					name='country'
					id='country'
					data-address='senderAddress'
					value={invoice?.senderAddress?.country}
					onChange={onChangeHandler}
				/>
			</div>
			<div className='BillTo'>
				<H3Alt>Bill To</H3Alt>
				<label htmlFor='clientName'>Client's Name</label>
				<input
					type='text'
					name='clientName'
					id='clientName'
					value={invoice?.clientName}
					onChange={onChangeHandler}
				/>
				<label htmlFor='clientEmail'>Client's Email</label>
				<input
					type='text'
					name='clientEmail'
					id='clientEmail'
					value={invoice?.clientEmail}
					placeholder='e.g. email@example.com'
					onChange={onChangeHandler}
				/>
				<label htmlFor='clientStreet'>Street Address</label>
				<input
					type='text'
					name='street'
					id='clientStreet'
					data-address='clientAddress'
					value={invoice?.clientAddress?.street}
					onChange={onChangeHandler}
				/>
				<label htmlFor='clientCity'>City</label>
				<input
					type='text'
					name='city'
					id='clientCity'
					data-address='clientAddress'
					value={invoice?.clientAddress?.city}
					onChange={onChangeHandler}
				/>
				<label htmlFor='clientPostCode'>Post Code</label>
				<input
					type='text'
					name='postalCode'
					id='clientPostCode'
					data-address='clientAddress'
					value={invoice?.clientAddress?.postCode}
					onChange={onChangeHandler}
				/>
				<label htmlFor='clientCountry'>Country</label>
				<input
					type='text'
					name='country'
					id='clientCountry'
					data-address='clientAddress'
					value={invoice?.clientAddress?.country}
					onChange={onChangeHandler}
				/>
			</div>
			<div className='InvoiceDetail'>
				<label htmlFor='invoiceDate'>Invoice Date</label>
				<input
					type='date'
					name='invoiceDate'
					id='invoiceDate'
					value={invoice?.paymentDue}
					onChange={onChangeHandler}
				/>
				<label htmlFor='paymentTerms'>Payment Terms</label>
				<select
					name='paymentTerms'
					id='paymentTerms'
					value={invoice?.paymentTerms}
					onChange={onChangeHandler}>
					<option value='1'>Net 1 Day</option>
					<option value='7'>Net 7 Day</option>
					<option value='14'>Net 14 Day</option>
					<option value='30'>Net 30 Day</option>
				</select>
				<label htmlFor='description'>Project Description</label>
				<input
					type='text'
					name='description'
					id='description'
					value={invoice?.description}
					placeholder='e.g. Graphic Design Service'
					onChange={onChangeHandler}
				/>
			</div>
			<div className='InvoiceItems'>
				<p className='ItemList'>Item List</p>
				<div className='Labels'>
					<Body1>Item Name</Body1>
					<Body1>Qty.</Body1>
					<Body1>Price</Body1>
					<Body1>Total</Body1>
				</div>
				{invoice?.items?.map((item: any, key: number) => (
					<ListItem
						key={key}
						item={item}
						total={invoice?.total}
						changeHandler={onChangeHandler}
					/>
				))}
				<Button6>+ Add New Item</Button6>
			</div>
			{/* {error && <Warning>&#8226; All fields must be added</Warning>} */}
		</Container>
	);
};

export default InputForm;

const Container = styled.div`
	h3 {
		color: hsl(252, 94%, 67%);
	}
	label {
		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: -0.25px;
		color: hsl(231, 36%, 63%);
	}
	input[type='text'],
	input[type='date'],
	select {
		height: 48px;
		padding: 10px 10px;
		font-size: 1rem;
		border-radius: 4px;
		border: 1px solid hsl(231, 75%, 93%);
		caret-color: hsl(252, 94%, 67%);
		&:focus {
			outline: none;
			border: 1px solid hsl(252, 94%, 67%);
		}
	}
	input[type='text']::placeholder {
		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: -0.25px;
	}
	.BillFrom {
		height: 209px;
		width: 504px;
		margin: 2.25rem 0 1.75rem;
		display: grid;
		grid-template-columns: repeat(3, 160px);
		grid-template-rows: auto;
		grid-template-areas:
			'title . .'
			'street . .'
			'input1 input1 input1'
			'city post country'
			'input2 input3 input4';
		gap: 0 20px;
		h3 {
			grid-area: title;
		}
		label:nth-child(2) {
			grid-area: street;
		}
		#street {
			grid-area: input1;
		}
		label:nth-child(4) {
			grid-area: city;
		}
		#city {
			grid-area: input2;
		}
		label:nth-child(6) {
			grid-area: post;
		}
		#postalCode {
			grid-area: input3;
		}
		label:nth-child(8) {
			grid-area: country;
		}
		#country {
			grid-area: input4;
		}
	}
	.BillTo {
		height: 402px;
		width: 504px;
		display: grid;
		grid-template-columns: repeat(3, 160px);
		grid-template-rows: auto;
		grid-template-areas:
			'title . .'
			'name . .'
			'input1 input1 input1'
			'email . .'
			'input2 input2 input2'
			'street . .'
			'input3 input3 input3'
			'city post country'
			'input4 input5 input6';
		gap: 0 20px;
		h3 {
			grid-area: title;
		}
		label:nth-child(2) {
			grid-area: name;
		}
		#clientName {
			grid-area: input1;
		}
		label:nth-child(4) {
			grid-area: email;
		}
		#clientEmail {
			grid-area: input2;
		}
		label:nth-child(6) {
			grid-area: street;
		}
		#clientStreet {
			grid-area: input3;
		}
		label:nth-child(8) {
			grid-area: city;
		}
		#clientCity {
			grid-area: input4;
		}
		label:nth-child(10) {
			grid-area: post;
		}
		#clientPostCode {
			grid-area: input5;
		}
		label:nth-child(12) {
			grid-area: country;
		}
		#clientCountry {
			grid-area: input6;
		}
	}
	.InvoiceDetail {
		height: 170px;
		width: 504px;
		margin-top: 20px;
		display: grid;
		grid-template-columns: repeat(4, 115px);
		grid-template-rows: auto;
		grid-template-areas:
			'date1 . terms1 .'
			'dateinput1 dateinput1 input2 input2'
			'description description . .'
			'input3 input3 input3 input3';
		gap: 0 20px;
		label:nth-child(1) {
			grid-area: date1;
		}
		#invoiceDate {
			grid-area: dateinput1;
		}
		label:nth-child(3) {
			grid-area: terms1;
		}
		#paymentTerms {
			grid-area: input2;
		}
		label:nth-child(5) {
			grid-area: description;
		}
		#description {
			grid-area: input3;
		}
	}
	.InvoiceItems {
		height: auto;
		width: 504px;
		margin-top: 20px;
		.ItemList {
			margin-bottom: 16px;
			font-weight: 700;
			font-size: 18px;
			line-height: 32px;
			letter-spacing: -0.38px;
			color: hsl(225, 14%, 53%);
		}
		p {
			display: inline-block;
			margin-right: 16px;
			color: hsl(231, 36%, 63%);
		}
		p:first-child {
			width: 214px;
		}
		p:nth-child(2) {
			width: 48px;
		}
		p:nth-child(3) {
			width: 110px;
		}
		h3 {
			color: hsl(0, 0%, 0%);
		}
	}
`;
