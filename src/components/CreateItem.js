import React from 'react';
import styled from 'styled-components';
import { H2Alt, Button2, Button3, Button4 } from '../Styles';

import InputForm from './InputForm';

const CreateItem = () => {
	return (
		<Container>
			<H2Alt className='Title'>Create Item</H2Alt>
			<form onSubmit={(e) => e.preventDefault()}>
				<InputForm />
				<div className='ButtonGroup'>
					<Button3>Discard</Button3>
					<Button4>Save as Draft</Button4>
					<Button2>Save & Send</Button2>
				</div>
			</form>
		</Container>
	);
};

export default CreateItem;

const Container = styled.div`
	height: 100vh;
	width: 570px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	.Title {
		margin-bottom: 24px;
		color: hsl(252, 94%, 67%);
	}
	.ButtonGroup {
		width: 504px;
		margin-top: 39px;
		margin-bottom: 80px;
		display: flex;
		button:first-child {
			margin-right: auto;
		}
		button:last-child {
			margin-left: 8px;
		}
	}
`;
