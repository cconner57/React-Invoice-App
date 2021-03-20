export const addComma = (price: number) => {
	return price.toLocaleString('en-US', { minimumFractionDigits: 2 });
};

export const modifyDate = (date: string) => {
	const newDate = new Date(date + 'T00:00:00')
		.toString()
		.slice(4, 15)
		.split('');
	newDate.splice(6, 0, ',');
	return newDate.join('');
};
