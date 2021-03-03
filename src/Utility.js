export const addComma = (price) => {
    return price.toLocaleString('en-US', { minimumFractionDigits: 0 });
};

export const modifyDate = (date) => {
    const newDate = new Date(date + 'T00:00:00')
        .toString()
        .slice(4, 15)
        .split('');
    newDate.splice(6, 0, ',');
    return newDate.join('');
};