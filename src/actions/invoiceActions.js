import axios from 'axios';
import invoiceData from '../data.json';
import {
	INVOICE_LIST_REQUEST,
	INVOICE_LIST_SUCCESS,
	INVOICE_LIST_FAIL,
	INVOICE_DETAILS_REQUEST,
	INVOICE_DETAILS_SUCCESS,
	INVOICE_DETAILS_FAIL,
	INVOICE_DELETE_REQUEST,
	INVOICE_DELETE_SUCCESS,
	INVOICE_DELETE_FAIL,
	INVOICE_NEW_REQUEST,
	INVOICE_NEW_SUCCESS,
	INVOICE_NEW_FAIL,
	INVOICE_CREATE_REQUEST,
	INVOICE_CREATE_SUCCESS,
	INVOICE_CREATE_FAIL,
	INVOICE_UPDATE_REQUEST,
	INVOICE_UPDATE_SUCCESS,
	INVOICE_UPDATE_FAIL,
} from '../constants/invoiceConstants';

export const listInvoices = () => async (dispatch) => {
	try {
		dispatch({ type: INVOICE_LIST_REQUEST });

		// const { data } = await axios.get(`/api/invoices`);
		const data = invoiceData;

		dispatch({
			type: INVOICE_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: INVOICE_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listInvoiceDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: INVOICE_DETAILS_REQUEST });

		// const { data } = await axios.get(`/api/invoices/${id}`);
		const data = invoiceData.find((item) => item.id === id);

		dispatch({
			type: INVOICE_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: INVOICE_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteInvoice = (id) => async (dispatch) => {
	try {
		dispatch({
			type: INVOICE_DELETE_REQUEST,
		});

		await axios.delete(`/api/invoices/${id}`);

		dispatch({
			type: INVOICE_DELETE_SUCCESS,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({
			type: INVOICE_DELETE_FAIL,
			payload: message,
		});
	}
};

export const newInvoice = () => (dispatch) => {
	try {
		dispatch({
			type: INVOICE_NEW_REQUEST,
		});

		const data = {
			id: '',
			createdAt: '',
			paymentDue: '',
			description: '',
			paymentTerms: '',
			clientName: '',
			clientEmail: '',
			status: '',
			senderAddress: {
				street: '',
				city: '',
				postCode: '',
				country: '',
			},
			clientAddress: {
				street: '',
				city: '',
				postCode: '',
				country: '',
			},
			items: [],
			total: 0,
		};

		dispatch({
			type: INVOICE_NEW_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({
			type: INVOICE_NEW_FAIL,
			payload: message,
		});
	}
};

export const createInvoice = () => async (dispatch) => {
	try {
		dispatch({
			type: INVOICE_CREATE_REQUEST,
		});

		const { data } = await axios.post(`/api/invoices`, {});

		dispatch({
			type: INVOICE_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({
			type: INVOICE_CREATE_FAIL,
			payload: message,
		});
	}
};

export const updateInvoice = (invoice) => async (dispatch) => {
	try {
		dispatch({
			type: INVOICE_UPDATE_REQUEST,
		});

		const { data } = await axios.put(`/api/products/${invoice._id}`, invoice);

		dispatch({
			type: INVOICE_UPDATE_SUCCESS,
			payload: data,
		});
		dispatch({ type: INVOICE_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({
			type: INVOICE_UPDATE_FAIL,
			payload: message,
		});
	}
};
