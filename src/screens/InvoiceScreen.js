import React, { useState, useEffect } from 'react';
import Status from '../components/Status';
import styled from 'styled-components';
import {
	H2Alt,
	H3,
	H3Alt,
	Body1,
	Body2,
	Body3,
	Button2,
	Button3,
	Button5,
	lightColors,
} from '../Styles';

import DeleteItem from '../components/DeleteItem';

import LeftArrow from '../images/icon-arrow-left.svg';

import InvoiceData from '../data.json';

const InvoiceScreen = ({ location, history }) => {
	const [invoice, setInvoice] = useState(undefined);
	const [toggleModal, setToggleModal] = useState(false);

	useEffect(() => {
		const getId = location.pathname.slice(1);
		const data = InvoiceData.find((item) => item.id === getId);
		setInvoice(data);
	}, [location]);

	return (
		<Container>
			<div className='Back' onClick={() => history.goBack()}>
				<img src={LeftArrow} alt='Go Back' />
				<H3Alt>Go back</H3Alt>
			</div>
			{invoice && (
				<>
					<div className='Options'>
						<div className='Status'>
							<Body1>Status</Body1>
							<Status status={invoice.status} />
						</div>
						<Button3>Edit</Button3>
						<Button5 onClick={() => setToggleModal(!toggleModal)}>
							Delete
						</Button5>
						<Button2>Mark as Paid</Button2>
					</div>
					<div className='Details'>
						<div className='TopRow'>
							<div className='Description'>
								<H3>
									<span>#</span>
									{invoice.id}
								</H3>
								<Body1>{invoice.description}</Body1>
							</div>
							<div className='Sender'>
								<Body2>{invoice.senderAddress.street}</Body2>
								<Body2>{invoice.senderAddress.city}</Body2>
								<Body2>{invoice.senderAddress.postCode}</Body2>
								<Body2>{invoice.senderAddress.country}</Body2>
							</div>
						</div>
						<div className='MidRow'>
							<div className='Date'>
								<Body1>Invoice Date</Body1>
								<Body3>{invoice.createdAt}</Body3>
								<Body1>Payment Due</Body1>
								<Body3>{invoice.paymentDue}</Body3>
							</div>
							<div className='BillTo'>
								<Body1>Bill To</Body1>
								<Body3>{invoice.clientName}</Body3>
								<Body2>{invoice.clientAddress.street}</Body2>
								<Body2>{invoice.clientAddress.city}</Body2>
								<Body2>{invoice.clientAddress.postCode}</Body2>
								<Body2>{invoice.clientAddress.country}</Body2>
							</div>
							<div className='SentTo'>
								<Body1>Send to</Body1>
								<Body3>{invoice.clientEmail}</Body3>
							</div>
						</div>
						<div className='Items'>
							<table>
								<tr>
									<th>Item Name</th>
									<th>QTY.</th>
									<th>Price</th>
									<th>Total</th>
								</tr>
								{invoice.items.map((item, key) => (
									<tr key={key}>
										<td>{item.name}</td>
										<td>{item.quantity}</td>
										<td>{item.price}</td>
										<td>{item.total}</td>
									</tr>
								))}
							</table>
							<div className='Total'>
								<Body2>Amount Due</Body2>
								<H2Alt>${invoice.total.toFixed(2)}</H2Alt>
							</div>
						</div>
					</div>
				</>
			)}
			{toggleModal && (
				<DeleteItem toggleModal={toggleModal} setToggleModal={setToggleModal} />
			)}
		</Container>
	);
};

export default InvoiceScreen;

const Container = styled.div`
	height: 100vh;
	width: 730px;
	margin: 0 auto;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.Back {
		display: flex;
		align-items: center;
		margin-bottom: 32px;
		align-self: flex-start;
		cursor: pointer;
		h3 {
			margin-left: 23.5px;
		}
	}
	.Options {
		height: 88px;
		width: 730px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 32px;
		background-color: #ffffff;
		box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
		border-radius: 8px;
		.Status {
			height: 40px;
			width: 159px;
			margin-right: auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		button:nth-child(3) {
			margin: 0 8px;
		}
	}
	.Details {
		height: 631px;
		width: 730px;
		margin-top: 24px;
		padding: 48px;
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
		border-radius: 8px;
		.TopRow {
			width: 634px;
			display: flex;
			justify-content: space-between;
			.Description {
				display: flex;
				flex-direction: column;
				span,
				p {
					color: ${lightColors.text};
				}
			}
			.Sender {
				display: flex;
				flex-direction: column;
				text-align: end;
				color: ${lightColors.text};
			}
		}
		.MidRow {
			width: 634px;
			margin-top: 21px;
			display: flex;
			justify-content: space-between;
			.Date {
				display: flex;
				flex-direction: column;
				color: ${lightColors.text};
				p:nth-child(even) {
					margin-top: 12px;
					color: ${lightColors.darkText};
				}
				p:nth-child(2) {
					margin-bottom: 32px;
				}
			}
			.BillTo {
				display: flex;
				flex-direction: column;
				color: ${lightColors.text};
				p:nth-child(2) {
					margin: 12px 0 8px;
					color: ${lightColors.darkText};
				}
			}
			.SentTo {
				display: flex;
				flex-direction: column;
				margin-right: 123px;
				color: ${lightColors.text};
				p:nth-child(2) {
					margin-top: 12px;
					color: ${lightColors.darkText};
				}
			}
		}
		.Items {
			height: 264px;
			width: 634px;
			margin-top: 45px;
			padding-top: 32px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			border-radius: 8px;
			overflow: hidden;
			background-color: #f9fafe;
			table {
				margin: 0 32px;
				border-spacing: 0 32px;
				th:first-child {
					height: 18px;
					width: 250px;
					text-align: start;
				}
				th:last-child {
					text-align: end;
				}
				td {
					height: 15px;
					text-align: center;
				}
				td:first-child {
					text-align: start;
				}
				td:last-child {
					text-align: end;
				}
			}
			.Total {
				height: 80px;
				width: 100%;
				padding: 0 32px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: hsl(0, 0%, 100%);
				background-color: hsl(231, 20%, 27%);
			}
		}
	}
`;
