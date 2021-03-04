import React from 'react';
import styled from 'styled-components';
import { H3Alt, Body1, Button6 } from '../Styles';

import ListItem from './ListItem';

const InputForm = () => {
	return (
		<Container>
			<div className='BillFrom'>
				<H3Alt>Bill From</H3Alt>
				<label htmlFor='street'>Street Address</label>
				<input
					type='text'
					name='street'
					id='street'
					placeholder='Enter Street Address'
				/>
				<label htmlFor='city'>City</label>
				<input type='text' name='city' id='city' placeholder='Enter City' />
				<label htmlFor='postalCode'>Post Code</label>
				<input
					type='text'
					name='postalCode'
					id='postalCode'
					placeholder='Enter Postal Code'
				/>
				<label htmlFor='country'>Country</label>
				<input
					type='text'
					name='country'
					id='country'
					placeholder='Enter Country'
				/>
			</div>
			<div className='BillTo'>
				<H3Alt>Bill To</H3Alt>
				<label htmlFor='clientName'>Client's Name</label>
				<input
					type='text'
					name='clientName'
					id='clientName'
					placeholder='Enter Name'
				/>
				<label htmlFor='clientEmail'>Client's Email</label>
				<input
					type='text'
					name='clientEmail'
					id='clientEmail'
					placeholder='Enter Email'
				/>
				<label htmlFor='clientStreet'>Street Address</label>
				<input
					type='text'
					name='clientStreet'
					id='clientStreet'
					placeholder='Enter Street Address'
				/>
				<label htmlFor='clientCity'>City</label>
				<input
					type='text'
					name='clientCity'
					id='clientCity'
					placeholder='Enter City'
				/>
				<label htmlFor='clientPostCode'>Post Code</label>
				<input
					type='text'
					name='clientPostCode'
					id='clientPostCode'
					placeholder='Enter Postal Code'
				/>
				<label htmlFor='clientCountry'>Country</label>
				<input
					type='text'
					name='clientCountry'
					id='clientCountry'
					placeholder='Enter Country'
				/>
			</div>
			<div className='InvoiceDetail'>
				<label htmlFor='invoiceDate'>Invoice Date</label>
				<input type='date' name='invoiceDate' id='invoiceDate' />
				<label htmlFor='paymentTerms'>Payment Terms</label>
                <select name="paymentTerms" id="paymentTerms">
                    <option value="1">Net 1 Day</option>
                    <option value="7">Net 7 Day</option>
                    <option value="14">Net 14 Day</option>
                    <option value="30">Net 30 Day</option>
                </select>
				<label htmlFor='description'>Project Description</label>
				<input
					type='text'
					name='description'
					id='description'
					placeholder='Enter Description'
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
				<ListItem />
				<Button6>+ Add New Item</Button6>
			</div>
		</Container>
	);
};

export default InputForm;

const Container = styled.div`
	label {
		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: -0.25px;
		color: hsl(231, 36%, 63%);
	}
	input[type='text'], input[type='date'], select {
		height: 48px;
		padding: 14px 20px;
		border-radius: 4px;
		border: 1px solid hsl(231, 75%, 93%);
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
		margin: 48px 0;
		display: grid;
		grid-template-columns: repeat(3, 152px);
		grid-template-rows: auto;
		grid-template-areas:
			'title . .'
			'street . .'
			'input1 input1 input1'
			'city post country'
			'input2 input3 input4';
		gap: 0 24px;
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
		grid-template-columns: repeat(3, 152px);
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
		gap: 0 24px;
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
		grid-template-columns: repeat(4, 108px);
		grid-template-rows: auto;
		grid-template-areas:
			'date1 . terms1 .'
			'dateinput1 dateinput1 input2 input2'
			'description description . .'
			'input3 input3 input3 input3';
		gap: 0 24px;
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
			width: 46px;
		}
		p:nth-child(3) {
			width: 100px;
		}
	}
`;
