export interface Colors {
	[key: string]: string;
}

export interface ThemeProps {
	colortheme: boolean;
	accent: string;
}

export interface ThemeChange {
	themeChange: { theme: boolean };
}

export interface DeleteProps {
	setToggleModal: Function;
	history: {
		push: Function;
	};
}

export interface ItemProps {
	item: {
		id: string;
		paymentDue: string;
		clientName: string;
		total: number;
		status: string;
	};
}

export interface ItemProps {
	id: string;
	paymentDue: string;
	clientName: string;
	total: number;
	status: string;
}

export interface InvoiceList {
	invoiceList: {
		loading: boolean;
		error: string;
		invoices: Array<ItemProps>;
	};
}

export interface Invoice {
	id: string;
	createdAt: string;
	paymentDue: string;
	description: string;
	paymentTerms: number;
	clientName: string;
	clientEmail: string;
	status: string;
	senderAddress: {
		street: string;
		city: string;
		postCode: string;
		country: string;
	};
	clientAddress: {
		street: string;
		city: string;
		postCode: string;
		country: string;
	};
	items: [
		{
			name: string;
			quantity: number;
			price: number;
			total: number;
		}
	];
	total: number;
}

export interface InvoiceDetailsState {
	listInvoiceDetails: {
		loading: string;
		error: string;
		invoice: Invoice;
	};
}
