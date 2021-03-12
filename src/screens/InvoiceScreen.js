import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listInvoiceDetails } from '../actions/invoiceActions';
import Loader from '../components/Loader';
import Status from '../components/Status';
import { addComma } from '../Utility.js';
import styled from 'styled-components';
import {
	darkColors,
	lightColors,
	H2Alt,
	H3,
	Body1,
	Body2,
	Body3,
	Button2,
	Button3,
	Button5,
	Warning,
} from '../Styles';

import DeleteItem from '../components/DeleteItem';
import MenuModal from '../components/MenuModal';
import EditItem from '../components/EditItem';

import LeftArrow from '../images/icon-arrow-left.svg';

const InvoiceScreen = ({ history, match }) => {
	const [toggleModal, setToggleModal] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);

	const dispatch = useDispatch();

	const colorTheme = useSelector((state) => state.themeChange);

	const invoiceDetails = useSelector((state) => state.listInvoiceDetails);
	const { loading, error, invoice } = invoiceDetails;

	useEffect(() => {
		dispatch(listInvoiceDetails(match.params.id));
	}, [dispatch, match]);

	return (
		<Container colortheme={colorTheme.theme}>
			<div className='Back' onClick={() => history.goBack()}>
				<img src={LeftArrow} alt='Go Back' />
				<H3>Go back</H3>
			</div>
			{loading ? (
				<Loader />
			) : error ? (
				<Warning>{error}</Warning>
			) : (
				<>
					<div className='Options'>
						<div className='Status'>
							<Body1>Status</Body1>
							<Status status={invoice.status} />
						</div>
						<Button3 colortheme={colorTheme.theme} onClick={() => setToggleMenu(!toggleMenu)}>Edit</Button3>
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
								<Body2>{invoice.senderAddress?.street}</Body2>
								<Body2>{invoice.senderAddress?.city}</Body2>
								<Body2>{invoice.senderAddress?.postCode}</Body2>
								<Body2>{invoice.senderAddress?.country}</Body2>
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
								<Body2>{invoice.clientAddress?.street}</Body2>
								<Body2>{invoice.clientAddress?.city}</Body2>
								<Body2>{invoice.clientAddress?.postCode}</Body2>
								<Body2>{invoice.clientAddress?.country}</Body2>
							</div>
							<div className='SentTo'>
								<Body1>Send to</Body1>
								<Body3>{invoice.clientEmail}</Body3>
							</div>
						</div>
						<div className='Items'>
							<table>
								<thead>
									<tr>
										<th>Item Name</th>
										<th>QTY.</th>
										<th>Price</th>
										<th>Total</th>
									</tr>
								</thead>
								<thead>
									{invoice.items?.map((item, key) => (
										<tr key={key}>
											<td>{item.name}</td>
											<td>{item.quantity}</td>
											<td>${addComma(item.price)}</td>
											<td>{addComma(item.total)}</td>
										</tr>
									))}
								</thead>
							</table>
							<div className='Total'>
								<Body2>Amount Due</Body2>
								<H2Alt>${invoice.total && addComma(invoice.total)}</H2Alt>
							</div>
						</div>
					</div>
				</>
			)}
			{toggleModal && (
				<DeleteItem
					toggleModal={toggleModal}
					setToggleModal={setToggleModal}
					history={history}
					colortheme={colorTheme.theme}
				/>
			)}
			{toggleMenu && (
				<MenuModal setToggleMenu={setToggleMenu}>
					<EditItem invoice={invoice}  />
				</MenuModal>
			)}
		</Container>
	);
};

export default InvoiceScreen;

const Container = styled.div`
	height: 100vh;
	width: auto;
	margin: 0 auto;
	position: relative;
	z-index: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ colortheme }) =>
		colortheme ? `${darkColors.background}` : `${lightColors.background}`};
	.Back {
		display: flex;
		align-items: center;
		margin-left: 26.5vw;
		margin-bottom: 20px;
		align-self: flex-start;
		cursor: pointer;
		img {
			width: 12px;
		}
		h3 {
			margin-left: 10px;
			transition: color 0.25s ease;
			color: ${({ colortheme }) =>
				colortheme ? `${darkColors.text}` : `${lightColors.text}`};
			&:hover {
				color: hsl(231, 36%, 63%);
			}
		}
	}
	.Options {
		height: 88px;
		width: 730px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 2rem;
		background-color: ${({ colortheme }) =>
			colortheme
				? `${darkColors.accentBackground}`
				: `${lightColors.accentBackground}`};
		box-shadow: ${({ colortheme }) =>
			colortheme
				? `0px 10px 10px -10px ${darkColors.shadow}`
				: `0px 10px 10px -10px ${lightColors.shadow}`};
		border-radius: 8px;
		.Status {
			height: 40px;
			width: 159px;
			margin-right: auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: ${({ colortheme }) =>
				colortheme ? `${darkColors.text}` : `${lightColors.text}`};
		}
		button:nth-child(3) {
			margin: 0 8px;
		}
	}
	.Details {
		height: auto;
		width: 730px;
		margin-top: 24px;
		padding: 35px 48px;
		display: flex;
		flex-direction: column;
		background-color: ${({ colortheme }) =>
			colortheme
				? `${darkColors.accentBackground}`
				: `${lightColors.accentBackground}`};
		box-shadow: ${({ colortheme }) =>
			colortheme
				? `0px 10px 10px -10px ${darkColors.shadow}`
				: `0px 10px 10px -10px ${lightColors.shadow}`};
		border-radius: 8px;
		.TopRow {
			width: 634px;
			display: flex;
			justify-content: space-between;
			.Description {
				display: flex;
				flex-direction: column;
				h3 {
					color: ${({ colortheme }) =>
						colortheme ? `${darkColors.text}` : `${lightColors.text}`};
				}
				span,
				p {
					color: ${({ colortheme }) =>
						colortheme ? `${darkColors.altText}` : `${lightColors.altText}`};
				}
			}
			.Sender {
				display: flex;
				flex-direction: column;
				text-align: end;
				color: ${({ colortheme }) =>
					colortheme ? `${darkColors.altText}` : `${lightColors.altText}`};
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
				color: ${({ colortheme }) =>
					colortheme ? `${darkColors.altText}` : `${lightColors.altText}`};
				p:nth-child(even) {
					margin-top: 12px;
					color: ${({ colortheme }) =>
						colortheme ? `${darkColors.text}` : `${lightColors.text}`};
				}
				p:nth-child(2) {
					margin-bottom: 32px;
				}
			}
			.BillTo {
				display: flex;
				flex-direction: column;
				color: ${({ colortheme }) =>
					colortheme ? `${darkColors.altText}` : `${lightColors.altText}`};
				p:nth-child(2) {
					margin: 12px 0 8px;
					color: ${({ colortheme }) =>
						colortheme ? `${darkColors.text}` : `${lightColors.text}`};
				}
			}
			.SentTo {
				display: flex;
				flex-direction: column;
				margin-right: 123px;
				color: ${({ colortheme }) =>
					colortheme ? `${darkColors.altText}` : `${lightColors.altText}`};
				p:nth-child(2) {
					margin-top: 12px;
					color: ${({ colortheme }) =>
						colortheme ? `${darkColors.text}` : `${lightColors.text}`};
				}
			}
		}
		.Items {
			height: auto;
			width: 634px;
			margin-top: 30px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			border-radius: 8px;
			overflow: hidden;
			background-color: ${({ colortheme }) =>
				colortheme
					? `${darkColors.altBackground}`
					: `${lightColors.altBackground}`};
			table {
				margin: 0 32px;
				border-spacing: 0 32px;
				th {
					color: ${({ colortheme }) =>
						colortheme ? `${darkColors.altText}` : `${lightColors.altText}`};
				}
				th:first-child {
					width: 250px;
					text-align: start;
				}
				th:last-child {
					text-align: end;
				}
				td {
					height: 15px;
					text-align: center;
					color: ${({ colortheme }) =>
						colortheme ? `${darkColors.text}` : `${lightColors.text}`};
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
				background-color: ${({ colortheme }) =>
					colortheme
						? `${darkColors.secondaryBackground}`
						: `${lightColors.secondaryBackground}`};
			}
		}
	}
`;
