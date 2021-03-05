import React from 'react';
import styled from 'styled-components';

import Delete from '../images/icon-delete.svg';

const ListItem = ({ item }) => {
	const { name, quantity, price, total } = item;
	return (
		<Container>
			<input type='text' name='itemName' id='itemName' value={name} />
			<input type='text' name='qty' id='qty' value={quantity} />
			<input type='text' name='price' id='price' value={price.toFixed(2)} />
			<h3>{total.toFixed(2)}</h3>
			<img src={Delete} alt='Delete' />
		</Container>
	);
};

export default ListItem;

const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 16px 0;
	input[type='text'] {
		margin-right: 16px;
		padding: 10px;
	}
	h3 {
		width: 60px;
		margin-right: 10px;
		color: hsl(225, 14%, 53%);
		font-weight: 700;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: -0.25px;
	}
	img {
		width: 20px;
		margin: 10px 0;
		cursor: pointer;
	}
	#itemName {
		width: 214px;
	}
	#qty {
		width: 46px;
	}
	#price {
		width: 100px;
	}
`;
