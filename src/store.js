import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	invoiceListReducer,
	listInvoiceDetailsReducer,
	invoiceDeleteReducer,
	invoiceNewReducer,
	invoiceCreateReducer,
	invoiceUpdateReducer,
} from './reducers/invoiceReducer';
// import {
// 	userLoginReducer,
// 	userRegisterReducer,
// 	userDetailsReducer,
// 	userUpdateProfileReducer,
// 	userUpdateReducer,
// } from './reducers/userReducers';

const reducer = combineReducers({
	invoiceList: invoiceListReducer,
	listInvoiceDetails: listInvoiceDetailsReducer,
	invoiceDelete: invoiceDeleteReducer,
	invoiceNew: invoiceNewReducer,
	invoiceCreate: invoiceCreateReducer,
	invoiceUpdate: invoiceUpdateReducer,
});

const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
