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

interface Reducer {
	type: string;
	payload: object;
}

export const invoiceListReducer = (
	state = { invoices: [] },
	action: Reducer
) => {
	switch (action.type) {
		case INVOICE_LIST_REQUEST:
			return { ...state, loading: true };
		case INVOICE_LIST_SUCCESS:
			return {
				loading: false,
				invoices: action.payload,
			};
		case INVOICE_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const listInvoiceDetailsReducer = (
	state = { invoice: {} },
	action: Reducer
) => {
	switch (action.type) {
		case INVOICE_DETAILS_REQUEST:
			return { loading: true };
		case INVOICE_DETAILS_SUCCESS:
			return { loading: false, invoice: action.payload };
		case INVOICE_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const invoiceDeleteReducer = (state = {}, action: Reducer) => {
	switch (action.type) {
		case INVOICE_DELETE_REQUEST:
			return { loading: true };
		case INVOICE_DELETE_SUCCESS:
			return { loading: false, success: true };
		case INVOICE_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const invoiceNewReducer = (state = {}, action: Reducer) => {
	switch (action.type) {
		case INVOICE_NEW_REQUEST:
			return { loading: true };
		case INVOICE_NEW_SUCCESS:
			return { loading: false, invoice: action.payload };
		case INVOICE_NEW_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const invoiceCreateReducer = (state = {}, action: Reducer) => {
	switch (action.type) {
		case INVOICE_CREATE_REQUEST:
			return { loading: true };
		case INVOICE_CREATE_SUCCESS:
			return { loading: false, success: true, invoice: action.payload };
		case INVOICE_CREATE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const invoiceUpdateReducer = (
	state = { invoice: {} },
	action: Reducer
) => {
	switch (action.type) {
		case INVOICE_UPDATE_REQUEST:
			return { loading: true };
		case INVOICE_UPDATE_SUCCESS:
			return { loading: false, success: true, product: action.payload };
		case INVOICE_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
