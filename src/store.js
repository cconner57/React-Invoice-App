import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	invoiceListReducer,
	invoiceDetailsReducer,
	invoiceDeleteReducer,
	invoiceCreateReducer,
	invoiceUpdateReducer,
} from './reducers/invoiceReducers';
// import {
// 	userLoginReducer,
// 	userRegisterReducer,
// 	userDetailsReducer,
// 	userUpdateProfileReducer,
// 	userUpdateReducer,
// } from './reducers/userReducers';

const reducer = combineReducers({
	invoiceList: invoiceListReducer,
	invoiceDetails: invoiceDetailsReducer,
	invoiceDelete: invoiceDeleteReducer,
	invoiceCreate: invoiceCreateReducer,
	invoiceUpdate: invoiceUpdateReducer,
});

const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
